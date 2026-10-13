import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../app.routes';

const posts = [
  {
    slug: 'tu-auto-y-tus-planes',
    title: 'Tu auto también forma parte de tus planes',
    image: '/images/stock/13-blog-auto-viaje.webp',
    related: 'auto-individual',
    phrase: 'una pareja comparte un sedán',
  },
  {
    slug: 'lo-que-hace-tu-hogar',
    title: 'Lo que hace de una casa tu hogar',
    image: '/images/stock/14-blog-hogar-interior.webp',
    related: 'hogar',
    phrase: 'un departamento rentado',
  },
  {
    slug: 'etapas-y-bienestar',
    title: 'Distintas etapas, nuevas preguntas sobre bienestar',
    image: '/images/stock/15-blog-bienestar.webp',
    related: 'gastos-medicos-individual',
    phrase: 'dos personas empiezan a compartir sus planes',
  },
  {
    slug: 'un-negocio-en-su-dia-a-dia',
    title: 'Un negocio se cuenta desde lo que hace cada día',
    image: '/images/stock/16-blog-negocio-cafe.webp',
    related: 'riesgos-comerciales',
    phrase: 'Imagina una pequeña tienda',
  },
];

describe('Blog de Brisa', () => {
  it('presenta cuatro artículos completos con portada local y ruta de lectura', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create('/blog');
    const page = harness.routeNativeElement!;
    const cards = [...page.querySelectorAll('article')];

    expect(page.querySelector('h1')?.textContent).toContain('Nuestro blog');
    expect(cards).toHaveLength(4);
    expect(cards.map((card) => card.querySelector('h2, h3')?.textContent?.trim())).toEqual(
      posts.map((post) => post.title),
    );
    expect(cards.map((card) => card.querySelector('a')?.getAttribute('href'))).toEqual(
      posts.map((post) => '/blog/' + post.slug),
    );
    for (const [index, card] of cards.entries()) {
      const post = posts[index];
      expect(card.querySelector('img')?.getAttribute('src')).toBe(post.image);
      expect(card.querySelector('img')?.getAttribute('alt')).toBeTruthy();
      expect(card.querySelector('img')?.getAttribute('width')).toBe('1536');
      expect(card.querySelector('img')?.getAttribute('height')).toBe('1024');
      expect(card.querySelector('time')?.getAttribute('datetime')).toBeTruthy();
      expect(card.textContent).toContain('Leer artículo');
    }
    expect(page.textContent).toContain('4 artículos');
    expect(page.textContent).toContain('Los artículos y escenarios de Brisa son ficticios');
    expect(page.querySelector('a[href$=".pdf"]')).toBeNull();
  });

  it('muestra el artículo seleccionado, autor ficticio y enlace a su seguro relacionado', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create();

    for (const post of posts) {
      await harness.navigateByUrl('/blog/' + post.slug);
      const page = harness.routeNativeElement!;
      expect(page.querySelector('h1')?.textContent?.trim()).toBe(post.title);
      expect(page.querySelector('article')?.textContent).toContain(post.phrase);
      expect(page.textContent).toContain('Equipo editorial Brisa · demo');
      expect(page.querySelector('a[href="/blog"]')).not.toBeNull();
      expect(page.querySelector('a[href="/seguros/' + post.related + '"]')).not.toBeNull();
      expect(page.querySelector('a[href$=".pdf"]')).toBeNull();
    }
  });

  it('cambia el contenido al navegar entre artículos y mantiene 404 para slugs desconocidos', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create('/blog/tu-auto-y-tus-planes');

    await harness.navigateByUrl('/blog/lo-que-hace-tu-hogar');
    expect(harness.routeNativeElement!.querySelector('h1')?.textContent).toContain(
      'Lo que hace de una casa tu hogar',
    );
    expect(harness.routeNativeElement!.textContent).not.toContain('una pareja comparte un sedán');

    await harness.navigateByUrl('/blog/no-existe');
    expect(harness.routeNativeElement!.textContent).toContain(
      'La página que buscas no está disponible',
    );
    expect(harness.routeNativeElement!.querySelector('article')).toBeNull();
  });

  it('redirige sólo las rutas antiguas conocidas y conserva el 404 de otras ediciones', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create();

    for (const path of [
      '/boletines',
      '/boletines/agosto-2026',
      '/boletines/junio-2026',
    ]) {
      await harness.navigateByUrl(path);
      expect(TestBed.inject(Router).url).toBe('/blog');
      expect(harness.routeNativeElement!.querySelectorAll('article')).toHaveLength(4);
    }
    await harness.navigateByUrl('/boletines/mayo-2026');
    expect(harness.routeNativeElement!.textContent).toContain(
      'La página que buscas no está disponible',
    );
  });
});
