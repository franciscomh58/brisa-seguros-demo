import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon } from './icon';
@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, Icon],
  templateUrl: './site-header.html',
})
export class SiteHeader {
  readonly open = signal(false);

  closeMenu(toggle: HTMLButtonElement): void {
    if (!this.open()) return;
    this.open.set(false);
    const view = toggle.ownerDocument.defaultView;
    if (view && view.getComputedStyle(toggle).display !== 'none') toggle.focus();
  }
}
