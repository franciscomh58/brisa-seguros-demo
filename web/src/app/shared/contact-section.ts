import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.html',
})
export class ContactSection {
  preventSubmit(event: Event) {
    event.preventDefault();
  }
}
