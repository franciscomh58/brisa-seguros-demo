import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../app.routes';
import { insuranceProducts } from '../../data/insurance-products';
import { demoPrice, insuranceFields, insurers, packages } from '../../data/quote-scenarios';
import { Quote } from './quote';

describe('Cotizador demostrativo', () => {
  it('define precios fijos positivos para las 81 combinaciones de ejemplo', () => {
    const expectedPrices: Record<string, number[][]> = {
      'gastos-medicos-individual': [
        [600, 900, 1200],
        [640, 940, 1240],
        [680, 980, 1280],
      ],
      'gastos-medicos-colectivo': [
        [1800, 2400, 3000],
        [1850, 2450, 3050],
        [1900, 2500, 3100],
      ],
      'auto-individual': [
        [400, 650, 900],
        [430, 680, 930],
        [460, 710, 960],
      ],
      'auto-flotilla': [
        [1500, 2100, 2700],
        [1550, 2150, 2750],
        [1600, 2200, 2800],
      ],
      'vida-hombre-clave': [
        [700, 1000, 1300],
        [740, 1040, 1340],
        [780, 1080, 1380],
      ],
      'danos-empresas': [
        [900, 1400, 1900],
        [950, 1450, 1950],
        [1000, 1500, 2000],
      ],
      'riesgos-comerciales': [
        [800, 1200, 1600],
        [840, 1240, 1640],
        [880, 1280, 1680],
      ],
      afinidad: [
        [500, 750, 1000],
        [530, 780, 1030],
        [560, 810, 1060],
      ],
      hogar: [
        [250, 400, 550],
        [280, 430, 580],
        [310, 460, 610],
      ],
    };
    const values: number[] = [];
    expect(insurers.map((insurer) => insurer.id)).toEqual([
      'brisa-norte',
      'brisa-valle',
      'brisa-horizonte',
    ]);
    expect(packages.map((packageOption) => packageOption.id)).toEqual([
      'esencial',
      'ampliado',
      'completo',
    ]);
    for (const product of insuranceProducts) {
      for (const [insurerIndex, insurer] of insurers.entries()) {
        for (const [packageIndex, packageOption] of packages.entries()) {
          const amount = demoPrice(product.slug, insurer.id, packageOption.id);
          expect(amount).toBeGreaterThan(0);
          expect(Number.isInteger(amount)).toBe(true);
          if (amount !== null) values.push(amount);
          expect(amount).toBe(expectedPrices[product.slug][insurerIndex][packageIndex]);
        }
      }
    }
    expect(values).toHaveLength(81);
    expect(insuranceProducts.map((product) => product.slug)).toHaveLength(9);
    expect(demoPrice('auto-individual', 'brisa-norte', 'esencial')).toBe(400);
    expect(demoPrice('hogar', 'brisa-horizonte', 'completo')).toBe(610);
  });

  it('rechaza seguros, aseguradoras, paquetes y claves heredadas desconocidos', () => {
    for (const [insurance, insurer, packageId] of [
      ['', '', ''],
      ['desconocido', 'brisa-norte', 'esencial'],
      ['auto-individual', 'desconocida', 'esencial'],
      ['auto-individual', 'brisa-norte', 'premium'],
      ['constructor', 'brisa-norte', 'esencial'],
      ['auto-individual', 'toString', 'esencial'],
      ['auto-individual', 'brisa-norte', '__proto__'],
    ]) {
      expect(demoPrice(insurance, insurer, packageId)).toBeNull();
    }
  });

  it('ignora ids de seguro que sólo existen en el prototipo del registro', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create('/cotizador');
    const quote = harness.routeDebugElement!.componentInstance as Quote;

    for (const slug of ['constructor', 'toString', '__proto__']) {
      quote.form.controls.insuranceSlug.setValue(slug);
      expect(quote.insuranceSlug()).toBe('');
      expect(quote.fields()).toEqual([]);
    }
  });

  it('deja sin selección una URL vacía, desconocida o con seguro repetido', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create('/cotizador');

    for (const url of [
      '/cotizador',
      '/cotizador?seguro=',
      '/cotizador?seguro=desconocido',
      '/cotizador?seguro=auto-individual&seguro=hogar',
    ]) {
      await harness.navigateByUrl(url);
      const quote = harness.routeDebugElement?.componentInstance as Quote | undefined;
      expect(quote?.insuranceSlug()).toBe('');
      expect(
        harness.routeNativeElement?.querySelector('.insurance-empty-state')?.textContent,
      ).toContain('Elige un seguro del catálogo para comenzar');
    }
  });

  it('preselecciona el seguro desde la URL y actualiza query sin desmontar la página', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create('/cotizador?seguro=auto-individual');
    const quote = harness.routeDebugElement!.componentInstance as Quote;
    expect(quote.insuranceSlug()).toBe('auto-individual');

    await harness.navigateByUrl('/cotizador?seguro=hogar');
    expect(harness.routeDebugElement!.componentInstance).toBe(quote);
    expect(quote.insuranceSlug()).toBe('hogar');
    expect(quote.form.controls.answers.controls).toEqual(
      expect.objectContaining(
        Object.fromEntries(insuranceFields['hogar'].map((field) => [field.id, expect.anything()])),
      ),
    );
  });

  it('permite completar las nueve fichas sin validar o resumir campos ocultos', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create('/cotizador');
    const quote = harness.routeDebugElement!.componentInstance as Quote;

    for (const product of insuranceProducts) {
      await harness.navigateByUrl(`/cotizador?seguro=${product.slug}`);
      expect(quote.insuranceSlug()).toBe(product.slug);
      const fields = insuranceFields[product.slug];
      for (const field of fields) {
        if (!field.optional) {
          quote.form.controls.answers.controls[field.id].setValue(field.options[0].id);
        }
      }

      quote.next();
      expect(quote.step()).toBe(2);
      harness.detectChanges();
      expect(document.activeElement).toBe(
        harness.routeNativeElement?.querySelector('legend[tabindex="-1"]'),
      );
      quote.form.controls.insurerId.setValue(insurers[0].id);
      quote.form.controls.packageId.setValue(packages[0].id);
      quote.quote();

      expect(quote.result()?.insuranceSlug).toBe(product.slug);
      expect(TestBed.inject(Router).url).toBe(`/cotizador?seguro=${product.slug}`);
      expect(TestBed.inject(Router).url).not.toContain('vehicleType=');
      expect(quote.result()?.answers.map((answer) => answer.fieldId)).toEqual(
        fields
          .filter((field) => quote.form.controls.answers.controls[field.id].value)
          .map((field) => field.id),
      );
      expect(Object.keys(quote.form.controls.answers.controls).sort()).toEqual(
        fields.map((field) => field.id).sort(),
      );
      harness.detectChanges();
      expect(document.activeElement).toBe(
        harness.routeNativeElement?.querySelector('.quote-result h2'),
      );
    }
  });

  it('bloquea respuestas manipuladas y selección incompleta, pero editar conserva las respuestas', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create('/cotizador?seguro=auto-individual');
    const quote = harness.routeDebugElement!.componentInstance as Quote;
    const fields = insuranceFields['auto-individual'];

    quote.next();
    expect(quote.step()).toBe(1);
    for (const field of fields) {
      quote.form.controls.answers.controls[field.id].setValue(field.options[0].id);
    }
    quote.form.controls.answers.controls[fields[0].id].setValue('constructor');
    quote.next();
    expect(quote.step()).toBe(1);

    quote.form.controls.answers.controls[fields[0].id].setValue(fields[0].options[0].id);
    quote.next();
    const selectedAnswer = quote.form.controls.answers.controls[fields[0].id].value;
    quote.back();
    expect(quote.step()).toBe(1);
    expect(quote.form.controls.answers.controls[fields[0].id].value).toBe(selectedAnswer);
    quote.next();
    quote.quote();
    expect(quote.step()).toBe(2);
    expect(quote.result()).toBeNull();

    quote.form.controls.insurerId.setValue(insurers[0].id);
    quote.form.controls.packageId.setValue(packages[0].id);
    quote.quote();
    expect(quote.step()).toBe(3);
    quote.edit();
    expect(quote.step()).toBe(1);
    expect(quote.result()).toBeNull();
    expect(quote.form.controls.answers.controls[fields[0].id].value).toBe(fields[0].options[0].id);

    quote.form.controls.insuranceSlug.setValue('hogar');
    expect(Object.keys(quote.form.controls.answers.controls).sort()).toEqual(
      insuranceFields['hogar'].map((field) => field.id).sort(),
    );
    expect(quote.form.controls.answers.controls[insuranceFields['hogar'][0].id].value).toBe('');
    expect(quote.form.controls.insurerId.value).toBe('');
    expect(quote.form.controls.packageId.value).toBe('');
    expect(quote.result()).toBeNull();
  });

  it('reinicia formulario, resultado y seguro de la URL', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create('/cotizador?seguro=auto-individual');
    const quote = harness.routeDebugElement!.componentInstance as Quote;
    quote.form.controls.insurerId.setValue(insurers[0].id);
    quote.form.controls.packageId.setValue(packages[0].id);

    await quote.reset();

    expect(quote.insuranceSlug()).toBe('');
    expect(quote.step()).toBe(1);
    expect(quote.result()).toBeNull();
    expect(TestBed.inject(Router).url).toBe('/cotizador');
    expect(quote.form.pristine).toBe(true);
  });

  it('expone errores asociados a los controles e informa que el precio es ficticio', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create('/cotizador?seguro=auto-individual');
    const quote = harness.routeDebugElement!.componentInstance as Quote;
    quote.next();
    harness.detectChanges();

    expect(
      harness.routeNativeElement?.querySelector('select[aria-describedby] + .field-error')
        ?.textContent,
    ).toContain('Selecciona una opción');
    expect(harness.routeNativeElement?.querySelectorAll('select[aria-describedby]').length).toBe(3);
    expect(harness.routeNativeElement?.querySelector('.simulation-notice')?.textContent).toContain(
      'no constituyen una cotización real',
    );
  });
});
