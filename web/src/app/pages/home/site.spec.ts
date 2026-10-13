import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../app.routes';
import { SiteHeader } from '../../shared/site-header';
import { SiteFooter } from '../../shared/site-footer';
import { afterEach, vi } from 'vitest';
import { InsuranceCatalog } from '../../shared/insurance-catalog';
import { detailSections, insuranceProducts } from '../../data/insurance-products';

afterEach(() => vi.unstubAllGlobals());

const insurancePaths = [
  'gastos-medicos-individual',
  'gastos-medicos-colectivo',
  'auto-individual',
  'auto-flotilla',
  'vida-hombre-clave',
  'danos-empresas',
  'riesgos-comerciales',
  'afinidad',
  'hogar',
];

describe('Sitio ficticio de Brisa', () => {
  it('activa la entrada de tarjetas al verlas y desconecta el observer al salir', async () => {
    let reveal!: IntersectionObserverCallback;
    const observe = vi.fn();
    const unobserve = vi.fn();
    const disconnect = vi.fn();
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(callback: IntersectionObserverCallback) {
          reveal = callback;
        }
        observe = observe;
        unobserve = unobserve;
        disconnect = disconnect;
      },
    );
    TestBed.configureTestingModule({
      imports: [InsuranceCatalog],
      providers: [provideRouter(routes)],
    });
    const fixture = TestBed.createComponent(InsuranceCatalog);
    await fixture.whenStable();
    const cards = [...fixture.nativeElement.querySelectorAll('.insurance-card')] as HTMLElement[];
    expect(observe).toHaveBeenCalledTimes(insuranceProducts.length);
    expect(cards[0].classList.contains('insurance-visible')).toBe(false);
    reveal(
      [{ target: cards[0], isIntersecting: true } as unknown as IntersectionObserverEntry],
      {} as IntersectionObserver,
    );
    expect(cards[0].classList.contains('insurance-visible')).toBe(true);
    expect(unobserve).toHaveBeenCalledWith(cards[0]);
    fixture.destroy();
    expect(disconnect).toHaveBeenCalledOnce();
  });
  it('ofrece los nueve seguros confirmados en orden con imagen y detalle', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create('/home');
    const cards = [...harness.routeNativeElement!.querySelectorAll('.insurance-card')];
    expect(cards).toHaveLength(9);
    expect(cards.map((card) => card.getAttribute('href'))).toEqual(
      insurancePaths.map((slug) => '/seguros/' + slug),
    );
    for (const card of cards) {
      expect(card.querySelector('img')?.getAttribute('src')).toContain('/images/seguros/');
      expect(card.querySelector('img')?.getAttribute('alt')).toBeTruthy();
    }
  });

  it('activa el cotizador en su propia ruta sin cambiar el destino de las tarjetas', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create('/cotizador');
    expect(TestBed.inject(Router).url).toBe('/cotizador');
    expect(harness.routeNativeElement!.querySelector('form')).not.toBeNull();
    await harness.navigateByUrl('/home');
    expect(harness.routeNativeElement!.querySelector('.insurance-card')?.getAttribute('href')).toBe(
      '/seguros/gastos-medicos-individual',
    );
  });

  it('enlaza header, landing y detalles al cotizador con contexto del seguro', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const header = TestBed.createComponent(SiteHeader);
    await header.whenStable();
    expect(header.nativeElement.querySelector('a[href="/cotizador"]')?.textContent).toContain(
      'Simular seguro',
    );

    const harness = await RouterTestingHarness.create('/');
    expect(
      harness.routeNativeElement!.querySelector('.bottom-cta a[href="/cotizador"]')?.textContent,
    ).toContain('Probar el cotizador');
    await harness.navigateByUrl('/seguros/auto-individual');
    expect(
      harness.routeNativeElement!.querySelector('a[href="/cotizador?seguro=auto-individual"]')
        ?.textContent,
    ).toContain('Simular este seguro');
  });

  it('explica en FAQ y avisos legales el alcance ficticio de la simulación', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create('/home');
    expect(harness.routeNativeElement!.textContent).toContain('importes ficticios');
    expect(harness.routeNativeElement!.textContent?.toLowerCase()).toContain(
      'no es una cotización real',
    );
    await harness.navigateByUrl('/avisos-legales');
    expect(harness.routeNativeElement!.textContent).toContain(
      'No constituyen una cotización comercial',
    );
  });

  it('redirige la ficha genérica retirada al catálogo sin asumir una modalidad médica', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create('/seguros/gastos-medicos');
    expect(TestBed.inject(Router).url).toBe('/home');
    expect(harness.routeNativeElement!.querySelectorAll('.insurance-card')).toHaveLength(9);
    expect(
      harness.routeNativeElement!.querySelector('a[href="/seguros/gastos-medicos"]'),
    ).toBeNull();
  });

  it('muestra una propuesta específica completa en el destino de cada ficha del catálogo', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create('/home');
    const destinations = [...harness.routeNativeElement!.querySelectorAll('.insurance-card')].map(
      (card) => card.getAttribute('href')!,
    );
    expect(destinations).toHaveLength(insuranceProducts.length);
    const proposals = new Set<string>();
    for (const destination of destinations) {
      const product = insuranceProducts.find(
        (product) => destination === '/seguros/' + product.slug,
      )!;
      await harness.navigateByUrl(destination);
      const page = harness.routeNativeElement!;
      const sections = [...page.querySelectorAll('.detail-section')];
      expect(sections).toHaveLength(8);
      for (const section of sections) {
        const items = [...section.querySelectorAll('.detail-proposal li')];
        expect(items.length).toBeGreaterThanOrEqual(2);
        expect(items.every((item) => Boolean(item.textContent?.trim()))).toBe(true);
        expect(section.querySelector('.detail-client-request')).toBeNull();
        expect(section.querySelector('.pending-label')).toBeNull();
      }
      for (const section of detailSections) {
        expect(
          [...page.querySelectorAll('#' + section.id + ' .detail-proposal li')].map((item) =>
            item.textContent?.trim(),
          ),
        ).toEqual(product.proposal[section.id]);
      }
      expect(page.querySelectorAll('#preguntas .detail-proposal li')).toHaveLength(4);
      expect(
        [...page.querySelectorAll('#preguntas .detail-proposal li')].every((item) =>
          Boolean(item.textContent?.split('?').slice(1).join('?').trim()),
        ),
      ).toBe(true);
      expect(page.querySelectorAll('#proceso ol.detail-proposal li')).toHaveLength(3);
      proposals.add(
        [...page.querySelectorAll('.detail-proposal')].map((list) => list.textContent).join(''),
      );
      expect(page.querySelector('.editorial-notice')?.textContent).toContain(
        'Sus prestaciones y condiciones son ilustrativas',
      );
      expect(page.querySelector('.editorial-notice')?.textContent).toContain(
        'no constituyen una póliza ni una oferta real',
      );
      expect(page.querySelector('.detail-content a')).toBeNull();
    }
    expect(proposals.size).toBe(destinations.length);
  });

  it('no oculta fichas nuevas por un límite fijo en el catálogo completo', async () => {
    const initialCount = insuranceProducts.length;
    insuranceProducts.push({
      ...insuranceProducts[0],
      slug: 'seguro-de-prueba',
      name: 'Seguro de prueba',
    });
    try {
      TestBed.configureTestingModule({
        imports: [InsuranceCatalog],
        providers: [provideRouter(routes)],
      });
      const fixture = TestBed.createComponent(InsuranceCatalog);
      await fixture.whenStable();
      expect(fixture.nativeElement.querySelectorAll('.insurance-card')).toHaveLength(
        initialCount + 1,
      );
      expect(
        fixture.nativeElement.querySelector('a[href="/seguros/seguro-de-prueba"]'),
      ).not.toBeNull();
    } finally {
      insuranceProducts.pop();
    }
  });

  it('abre y cambia entre los nueve detalles sin mezclar contenido y ofrece 404 para otros nombres', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create();
    const names = [
      'Gastos médicos individual',
      'Gastos médicos colectivo',
      'Seguro de auto individual',
      'Seguro de auto flotilla',
      'Seguro de vida hombre clave',
      'Seguro de daños para empresas',
      'Seguro de riesgos comerciales',
      'Afinidad',
      'Seguro de hogar',
    ];
    for (const [index, slug] of insurancePaths.entries()) {
      await harness.navigateByUrl('/seguros/' + slug);
      const page = harness.routeNativeElement!;
      expect(page.querySelector('h1')?.textContent?.trim()).toBe(names[index]);
      expect(page.textContent).not.toContain('Pendiente de información del cliente');
      expect(page.querySelectorAll('.detail-section')).toHaveLength(8);
      expect(page.querySelector(`a[href="/cotizador?seguro=${slug}"]`)).not.toBeNull();
    }
    await harness.navigateByUrl('/seguros/no-existe');
    expect(harness.routeNativeElement!.textContent).toContain(
      'La página que buscas no está disponible',
    );
  });

  it('muestra contenido ficticio y un formulario inerte que no conserva valores al volver', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create('/home');
    const page = harness.routeNativeElement!;
    expect(page.querySelector('#nosotros')).not.toBeNull();
    expect(page.querySelector('#filosofia')).not.toBeNull();
    expect(page.querySelectorAll('.value-card')).toHaveLength(4);
    expect(page.textContent).toContain('Una marca ficticia para explorar posibilidades');
    expect(page.textContent).not.toContain('PROPUESTA');
    expect(page.textContent).not.toContain('pendientes de aprobación');
    const form = page.querySelector('form');
    expect(form).not.toBeNull();
    expect([...form!.querySelectorAll('input')].map((input) => input.type)).toEqual([
      'text',
      'email',
      'tel',
    ]);
    for (const input of form!.querySelectorAll('input')) {
      expect(form!.querySelector('label[for="' + input.id + '"]')).not.toBeNull();
      input.value = input.type === 'email' ? 'demo@example.invalid' : 'Demo';
    }
    expect(form!.querySelector<HTMLButtonElement>('button')?.disabled).toBe(true);
    expect(form!.querySelector('h3')?.textContent).toContain('Prueba los campos · demo');
    expect(form!.textContent).toContain('La aplicación no envía ni guarda estos campos');
    const submit = new Event('submit', { bubbles: true, cancelable: true });
    form!.dispatchEvent(submit);
    expect(submit.defaultPrevented).toBe(true);
    expect(TestBed.inject(Router).url).toBe('/home');
    await harness.navigateByUrl('/avisos-legales');
    await harness.navigateByUrl('/home');
    expect(
      [...harness.routeNativeElement!.querySelectorAll<HTMLInputElement>('form input')].every(
        (input) => input.value === '',
      ),
    ).toBe(true);
  });

  it('enlaza cotizador en el menú y avisos legales sólo desde el footer', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const header = TestBed.createComponent(SiteHeader);
    await header.whenStable();
    expect(header.nativeElement.querySelector('a[href="/cotizador"]')).not.toBeNull();
    expect(header.nativeElement.querySelector('a[href="/blog"]')?.textContent).toContain('Blog');
    expect(header.nativeElement.querySelector('a[href="/avisos-legales"]')).toBeNull();
    const footer = TestBed.createComponent(SiteFooter);
    await footer.whenStable();
    expect(footer.nativeElement.querySelector('a[href="/cotizador"]')).toBeNull();
    expect(footer.nativeElement.querySelector('a[href="/avisos-legales"]')).not.toBeNull();
    expect(footer.nativeElement.querySelector('a[href="/blog"]')?.textContent).toContain('Blog');
    const harness = await RouterTestingHarness.create('/avisos-legales');
    expect(harness.routeNativeElement!.querySelector('h1')?.textContent).toContain(
      'Avisos del demo',
    );
    expect(harness.routeNativeElement!.querySelectorAll('section')).toHaveLength(6);
    expect(harness.routeNativeElement!.textContent).toContain(
      'no representa a una aseguradora, intermediario o equipo de atención real',
    );
    expect(harness.routeNativeElement!.textContent).not.toContain('Pendiente');
    await harness.navigateByUrl('/home');
    expect(harness.routeNativeElement!.querySelector('a[href="/avisos-legales"]')).toBeNull();
  });
});
