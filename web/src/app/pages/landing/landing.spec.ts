import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { afterEach, vi } from 'vitest';
import { Landing } from './landing';

afterEach(() => vi.unstubAllGlobals());

function motionPreference(matches: boolean) {
  const preference = Object.assign(new EventTarget(), {
    matches,
    media: '(prefers-reduced-motion: reduce)',
    onchange: null,
    addListener() {},
    removeListener() {},
  });
  vi.stubGlobal('matchMedia', () => preference);
  return preference;
}

describe('Movimiento de la landing', () => {
  it('no repite las entradas de texto después de navegar por sus controles con teclado', async () => {
    motionPreference(false);
    TestBed.configureTestingModule({ imports: [Landing], providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(Landing);
    await fixture.whenStable();
    const page: HTMLElement = fixture.nativeElement;
    page.querySelector<HTMLAnchorElement>('.hero-actions a')!.focus();
    await fixture.whenStable();
    expect(page.classList.contains('landing-intro-complete')).toBe(true);
    page.querySelector<HTMLButtonElement>('.motion-control')!.focus();
    await fixture.whenStable();
    expect(page.classList.contains('landing-intro-complete')).toBe(true);
    expect(page.classList.contains('landing-paused')).toBe(false);
  });

  it('permite pausar y reanudar sin cambiar la fotografía ni bloquear la navegación', async () => {
    motionPreference(false);
    TestBed.configureTestingModule({ imports: [Landing], providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(Landing);
    await fixture.whenStable();
    const page: HTMLElement = fixture.nativeElement;
    const button = page.querySelector<HTMLButtonElement>('.motion-control');
    expect(button).not.toBeNull();
    expect(page.classList.contains('landing-motion')).toBe(true);
    expect(button!.textContent).toContain('Pausar movimiento');
    button!.click();
    await fixture.whenStable();
    expect(page.classList.contains('landing-paused')).toBe(true);
    expect(button!.textContent).toContain('Reanudar movimiento');
    expect(page.querySelector('.campaign-photo')?.getAttribute('src')).toBe(
      '/images/brisa-coast.webp',
    );
    expect(page.querySelector('a[href="/home"]')).not.toBeNull();
    button!.click();
    await fixture.whenStable();
    expect(page.classList.contains('landing-paused')).toBe(false);
  });

  it('respeta movimiento reducido desde el inicio y al cambiar la preferencia', async () => {
    const preference = motionPreference(true);
    TestBed.configureTestingModule({ imports: [Landing], providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(Landing);
    await fixture.whenStable();
    const page: HTMLElement = fixture.nativeElement;
    expect(page.classList.contains('landing-motion')).toBe(false);
    expect(page.querySelector('.motion-control')).toBeNull();
    expect(page.textContent).toContain('Hay mucho');
    preference.matches = false;
    preference.dispatchEvent(new Event('change'));
    await fixture.whenStable();
    expect(page.classList.contains('landing-motion')).toBe(true);
    preference.matches = true;
    preference.dispatchEvent(new Event('change'));
    await fixture.whenStable();
    expect(page.classList.contains('landing-motion')).toBe(false);
    expect(page.querySelector('.motion-control')).toBeNull();
  });
});
