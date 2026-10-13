import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { detailSections, insuranceProducts } from '../../data/insurance-products';
import { Icon } from '../../shared/icon';

@Component({ imports: [RouterLink, Icon], templateUrl: './insurance-detail.html' })
export class InsuranceDetail {
  readonly product = insuranceProducts.find(
    (product) => product.slug === inject(ActivatedRoute).snapshot.data['slug'],
  )!;
  readonly sections = detailSections;
}
