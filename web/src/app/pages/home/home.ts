import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon';
import { InsuranceCatalog } from '../../shared/insurance-catalog';
import { ContactSection } from '../../shared/contact-section';
@Component({
  imports: [RouterLink, Icon, InsuranceCatalog, ContactSection],
  templateUrl: './home.html',
})
export class Home {}
