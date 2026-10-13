import { CurrencyPipe } from '@angular/common';
import {
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  FormRecord,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { insuranceProducts } from '../../data/insurance-products';
import { demoNotice } from '../../data/demo-content';
import {
  demoPrice,
  insuranceFields,
  insurers,
  packageBenefits,
  packages,
  QuoteField,
} from '../../data/quote-scenarios';
import { Icon } from '../../shared/icon';

type QuoteAnswer = { fieldId: string; label: string; value: string };
type QuoteResult = {
  insuranceSlug: string;
  insurerId: string;
  packageId: string;
  answers: QuoteAnswer[];
  amount: number;
};

@Component({
  imports: [ReactiveFormsModule, RouterLink, Icon, CurrencyPipe],
  templateUrl: './quote.html',
})
export class Quote {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild('stepTitle')
  set stepTitle(title: ElementRef<HTMLElement> | undefined) {
    title?.nativeElement.focus();
  }

  readonly insuranceSlug = signal('');
  readonly products = insuranceProducts;
  readonly insurance = computed(() =>
    insuranceProducts.find((product) => product.slug === this.insuranceSlug()),
  );
  readonly fields = computed(() => insuranceFields[this.insuranceSlug()] ?? []);
  readonly insurerOptions = insurers;
  readonly packageOptions = computed(() =>
    packages.map((option) => ({
      ...option,
      benefit: packageBenefits[this.insuranceSlug()]?.[option.id] ?? '',
    })),
  );
  readonly result = signal<QuoteResult | null>(null);
  readonly resultInsurance = computed(() =>
    insuranceProducts.find((product) => product.slug === this.result()?.insuranceSlug),
  );
  readonly resultInsurer = computed(() =>
    insurers.find((insurer) => insurer.id === this.result()?.insurerId),
  );
  readonly resultPackage = computed(() =>
    packages.find((option) => option.id === this.result()?.packageId),
  );
  readonly resultBenefit = computed(() => {
    const result = this.result();
    return result ? packageBenefits[result.insuranceSlug]?.[result.packageId] : undefined;
  });
  readonly notice = demoNotice;
  readonly step = signal(1);
  readonly form = new FormGroup({
    insuranceSlug: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(
          /^(gastos-medicos-individual|gastos-medicos-colectivo|auto-individual|auto-flotilla|vida-hombre-clave|danos-empresas|riesgos-comerciales|afinidad|hogar)$/,
        ),
      ],
    }),
    answers: new FormRecord<FormControl<string>>({}),
    insurerId: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/^(brisa-norte|brisa-valle|brisa-horizonte)$/),
      ],
    }),
    packageId: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^(esencial|ampliado|completo)$/)],
    }),
  });

  constructor() {
    this.form.controls.insuranceSlug.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((slug) => this.setInsurance(slug));
    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const slugs = params.getAll('seguro');
      this.setInsurance(
        slugs.length === 1 && insuranceProducts.some((product) => product.slug === slugs[0])
          ? slugs[0]
          : '',
      );
    });
  }

  next(): void {
    this.form.controls.insuranceSlug.markAsTouched();
    this.form.controls.answers.markAllAsTouched();
    if (
      this.form.controls.insuranceSlug.valid &&
      this.insuranceSlug() &&
      this.form.controls.answers.valid
    ) {
      this.step.set(2);
    }
  }

  quote(): void {
    this.form.controls.insurerId.markAsTouched();
    this.form.controls.packageId.markAsTouched();
    if (
      this.form.controls.insuranceSlug.invalid ||
      !this.insuranceSlug() ||
      this.form.controls.answers.invalid ||
      this.form.controls.insurerId.invalid ||
      this.form.controls.packageId.invalid
    ) {
      return;
    }

    const { insurerId, packageId } = this.form.getRawValue();
    const insuranceSlug = this.insuranceSlug();
    const amount = demoPrice(insuranceSlug, insurerId, packageId);
    if (amount === null) return;

    const answers = this.fields().flatMap((field) => {
      const value = this.form.controls.answers.controls[field.id].value;
      const option = field.options.find((candidate) => candidate.id === value);
      return value && value !== 'omit' && option
        ? [{ fieldId: field.id, label: field.label, value: option.label }]
        : [];
    });
    this.result.set({ insuranceSlug, insurerId, packageId, answers, amount });
    this.step.set(3);
  }

  back(): void {
    this.step.set(1);
  }

  edit(): void {
    this.result.set(null);
    this.step.set(1);
  }

  reset(): Promise<boolean> {
    this.setInsurance('');
    this.form.reset();
    this.result.set(null);
    this.step.set(1);
    return this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { seguro: null },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  private setInsurance(slug: string): void {
    const nextSlug = Object.hasOwn(insuranceFields, slug) ? slug : '';
    if (this.insuranceSlug() === nextSlug && this.form.controls.insuranceSlug.value === nextSlug) {
      return;
    }

    this.insuranceSlug.set(nextSlug);
    this.form.controls.insuranceSlug.setValue(nextSlug, { emitEvent: false });
    const answers = this.form.controls.answers;
    for (const fieldId of Object.keys(answers.controls)) {
      answers.removeControl(fieldId, { emitEvent: false });
    }
    for (const field of insuranceFields[nextSlug] ?? []) {
      answers.addControl(field.id, this.answerControl(field), { emitEvent: false });
    }
    this.form.controls.insurerId.reset('', { emitEvent: false });
    this.form.controls.packageId.reset('', { emitEvent: false });
    this.result.set(null);
    this.step.set(1);
  }

  private answerControl(field: QuoteField): FormControl<string> {
    const choices = field.options.map((option) => option.id).join('|');
    const pattern = Validators.pattern(new RegExp(`^(?:${choices})$`));
    return new FormControl('', {
      nonNullable: true,
      validators: field.optional ? [pattern] : [Validators.required, pattern],
    });
  }
}
