import { Routes } from '@angular/router';
import { insuranceProducts } from './data/insurance-products';
import { blogPosts } from './data/blog-posts';

export const routes: Routes = [
  {
    path: '',
    title: 'Brisa · Hay mucho por vivir',
    loadComponent: () => import('./pages/landing/landing').then((m) => m.Landing),
  },
  {
    path: 'home',
    title: 'Explora tus seguros · Brisa',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'cotizador',
    title: 'Simula tu seguro · Brisa',
    loadComponent: () => import('./pages/quote/quote').then((m) => m.Quote),
  },
  {
    path: 'seguros/gastos-medicos',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  ...insuranceProducts.map((product) => ({
    path: 'seguros/' + product.slug,
    title: product.name + ' · Brisa',
    data: { slug: product.slug },
    loadComponent: () =>
      import('./pages/insurance/insurance-detail').then((m) => m.InsuranceDetail),
  })),
  {
    path: 'avisos-legales',
    title: 'Avisos legales · Brisa',
    loadComponent: () => import('./pages/legal/legal').then((m) => m.Legal),
  },
  { path: 'boletines', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'boletines/agosto-2026', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'boletines/junio-2026', redirectTo: 'blog', pathMatch: 'full' },
  {
    path: 'blog',
    title: 'Blog · Brisa',
    loadComponent: () => import('./pages/blog/blog').then((m) => m.Blog),
  },
  ...blogPosts.map((post) => ({
    path: 'blog/' + post.slug,
    title: post.title + ' · Blog Brisa',
    data: { slug: post.slug },
    loadComponent: () => import('./pages/blog/blog-reader').then((m) => m.BlogReader),
  })),
  {
    path: '**',
    title: 'Página no encontrada · Brisa',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
