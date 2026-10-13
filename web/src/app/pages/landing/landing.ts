import { afterNextRender, Component, DestroyRef, ElementRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon';
import { InsuranceCatalog } from '../../shared/insurance-catalog';
@Component({
  imports: [RouterLink, Icon, InsuranceCatalog],
  templateUrl: './landing.html',
  host: {
    '[class.landing-motion]': 'motionAllowed()',
    '[class.landing-paused]': 'paused()',
    '[class.landing-intro-complete]': 'introComplete',
    '(focusin)': 'introComplete = true',
  },
})
export class Landing {
  readonly motionAllowed = signal(false);
  readonly paused = signal(false);
  introComplete = false;
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroy = inject(DestroyRef);

  constructor() {
    afterNextRender({
      write: () => {
        if (typeof matchMedia !== 'function') return;
        const preference = matchMedia('(prefers-reduced-motion: reduce)');
        const updatePreference = () => this.motionAllowed.set(!preference.matches);
        updatePreference();
        preference.addEventListener('change', updatePreference);

        const observer =
          typeof IntersectionObserver === 'function'
            ? new IntersectionObserver(
                (entries) => {
                  for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    entry.target.classList.remove('reveal-pending');
                    observer?.unobserve(entry.target);
                  }
                },
                { threshold: 0.12 },
              )
            : null;
        if (observer) {
          for (const section of this.element.nativeElement.querySelectorAll(
            '[data-motion-reveal]',
          )) {
            section.classList.add('reveal-pending');
            observer.observe(section);
          }
        }
        this.destroy.onDestroy(() => {
          preference.removeEventListener('change', updatePreference);
          observer?.disconnect();
        });
      },
    });
  }

  toggleMotion() {
    // Do not replay text entrances after pausing/resuming the photograph.
    this.introComplete = true;
    this.paused.update((paused) => !paused);
  }
}
