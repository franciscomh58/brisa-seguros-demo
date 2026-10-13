import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { afterEach, vi } from 'vitest';
import { App } from './app';
import { routes } from './app.routes';

afterEach(() => vi.restoreAllMocks());

async function createApp() {
  TestBed.configureTestingModule({
    imports: [App],
    providers: [provideRouter(routes)],
  });
  const fixture = TestBed.createComponent(App);
  fixture.detectChanges();
  const router = TestBed.inject(Router);
  await router.navigateByUrl('/');
  await fixture.whenStable();
  fixture.detectChanges();
  return { fixture, router };
}

describe('App navigation focus', () => {
  it('does not move focus to main on the initial navigation', async () => {
    const { fixture } = await createApp();

    expect(document.activeElement).not.toBe(
      fixture.nativeElement.querySelector('#main-content'),
    );
    expect(fixture.nativeElement.querySelector('.skip-link')).not.toBeNull();
  });

  it('focuses main when the skip link is activated', async () => {
    const { fixture } = await createApp();
    const root: HTMLElement = fixture.nativeElement;
    const main = root.querySelector<HTMLElement>('#main-content')!;
    Object.defineProperty(main, 'scrollIntoView', { value: vi.fn() });

    root.querySelector<HTMLAnchorElement>('.skip-link')!.click();

    expect(document.activeElement).toBe(main);
  });

  it('focuses main after an internal page navigation', async () => {
    const { fixture, router } = await createApp();

    await router.navigateByUrl('/home');
    await fixture.whenStable();

    expect(document.activeElement).toBe(
      fixture.nativeElement.querySelector('#main-content'),
    );
  });

  it('does not replace a section destination with main focus', async () => {
    const { fixture, router } = await createApp();
    await router.navigateByUrl('/home');
    await fixture.whenStable();

    const header: HTMLElement = fixture.nativeElement.querySelector('app-site-header');
    header.querySelector<HTMLAnchorElement>('a[href="/home#servicios"]')!.focus();
    await router.navigateByUrl('/home#servicios');
    await fixture.whenStable();

    expect(router.url).toBe('/home#servicios');
    expect(document.activeElement).not.toBe(
      fixture.nativeElement.querySelector('#main-content'),
    );
  });
});

describe('Site header Escape behavior', () => {
  it('closes the menu and returns focus to its button', async () => {
    const { fixture } = await createApp();
    const header: HTMLElement = fixture.nativeElement.querySelector('app-site-header');
    const button = header.querySelector<HTMLButtonElement>('.mobile-toggle')!;
    const link = header.querySelector<HTMLAnchorElement>('a[href="/home#servicios"]')!;
    button.focus();
    button.click();
    link.focus();

    link.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(button);
  });

  it('does not move focus when Escape is pressed with the menu closed', async () => {
    const { fixture } = await createApp();
    const header: HTMLElement = fixture.nativeElement.querySelector('app-site-header');
    const link = header.querySelector<HTMLAnchorElement>('a[href="/home#servicios"]')!;
    link.focus();

    link.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

    expect(document.activeElement).toBe(link);
    expect(header.querySelector('.mobile-toggle')?.getAttribute('aria-expanded')).toBe('false');
  });

  it('still closes the menu when a navigation link is activated', async () => {
    const { fixture } = await createApp();
    const header: HTMLElement = fixture.nativeElement.querySelector('app-site-header');
    const button = header.querySelector<HTMLButtonElement>('.mobile-toggle')!;
    button.click();

    header.querySelector<HTMLAnchorElement>('a[href="/home#servicios"]')!.click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});
