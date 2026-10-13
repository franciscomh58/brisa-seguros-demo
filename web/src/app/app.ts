import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, skip } from 'rxjs';
import { SiteHeader } from './shared/site-header';
import { SiteFooter } from './shared/site-footer';

@Component({
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  private readonly document = inject(DOCUMENT);

  constructor() {
    inject(Router)
      .events.pipe(
        filter((event) => event instanceof NavigationEnd),
        skip(1),
        filter((event) => !event.urlAfterRedirects.includes('#')),
        takeUntilDestroyed(),
      )
      .subscribe(() =>
        this.document.getElementById('main-content')?.focus({ preventScroll: true }),
      );
  }

  skipToContent(event: Event): void {
    event.preventDefault();
    const main = this.document.getElementById('main-content');
    main?.focus({ preventScroll: true });
    main?.scrollIntoView();
  }
}
