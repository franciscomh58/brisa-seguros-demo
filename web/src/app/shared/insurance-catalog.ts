import { afterNextRender, Component, DestroyRef, ElementRef, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { insuranceProducts } from '../data/insurance-products';
import { Icon } from './icon';

@Component({
  selector: 'app-insurance-catalog',
  imports: [RouterLink, Icon],
  templateUrl: './insurance-catalog.html',
})
export class InsuranceCatalog {
  readonly limit = input(insuranceProducts.length);
  readonly products = insuranceProducts;
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroy = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      if (typeof IntersectionObserver !== 'function') return;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add('insurance-visible');
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.12 },
      );
      for (const card of this.element.nativeElement.querySelectorAll('.insurance-card'))
        observer.observe(card);
      this.destroy.onDestroy(() => observer.disconnect());
    });
  }
}
