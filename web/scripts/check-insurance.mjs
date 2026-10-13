import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { detailSections, insuranceProducts } from '../src/app/data/insurance-products.ts';

const expectedSlugs = [
  'gastos-medicos-individual',
  'gastos-medicos-colectivo',
  'auto-individual',
  'auto-flotilla',
  'vida-hombre-clave',
  'danos-empresas',
  'riesgos-comerciales',
  'afinidad',
  'hogar',
];

assert.deepEqual(
  insuranceProducts.map((product) => product.slug),
  expectedSlugs,
  'the nine specified insurance products appear in order',
);
assert.equal(
  new Set(insuranceProducts.map((product) => product.slug)).size,
  insuranceProducts.length,
);

for (const product of insuranceProducts) {
  assert.ok(
    product.name.trim() &&
      product.category.trim() &&
      product.description.trim() &&
      product.audience.trim() &&
      product.imageAlt.trim() &&
      product.brief.trim(),
    product.slug + ' catalog content',
  );
  assert.deepEqual(
    Object.keys(product.proposal).sort(),
    detailSections.map((section) => section.id).sort(),
    product.slug + ' detail sections',
  );

  const webp = readFileSync(
    new URL('../public/images/seguros/' + product.slug + '.webp', import.meta.url),
  );
  assert.equal(webp.subarray(0, 4).toString(), 'RIFF', product.slug + ' RIFF header');
  assert.equal(webp.subarray(8, 12).toString(), 'WEBP', product.slug + ' WebP format');
  assert.equal(webp.readUInt32LE(4), webp.length - 8, product.slug + ' RIFF size');
  assert.ok(webp.length < 400_000, product.slug + ' WebP must stay below 400 kB');

  for (const section of detailSections) {
    const items = product.proposal[section.id];
    assert.ok(
      items?.length >= 2 && items.every((item) => item.trim()),
      product.slug + '/' + section.id,
    );
  }
  assert.equal(product.proposal.proceso.length, 3, product.slug + ' orientation steps');
  assert.equal(product.proposal.preguntas.length, 4, product.slug + ' FAQ questions');
  assert.ok(
    product.proposal.preguntas.every((answer) => {
      const questionMark = answer.indexOf('?');
      return questionMark > 0 && answer.slice(questionMark + 1).trim().length > 0;
    }),
    product.slug + ' answered FAQ questions',
  );
}

console.log(
  `${insuranceProducts.length} insurance products verified: unique slugs, complete detail proposals and optimized WebP images.`,
);
