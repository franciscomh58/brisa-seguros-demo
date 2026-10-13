import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { blogPosts } from '../src/app/data/blog-posts.ts';
import { insuranceProducts } from '../src/app/data/insurance-products.ts';

const expectedSlugs = [
  'tu-auto-y-tus-planes',
  'lo-que-hace-tu-hogar',
  'etapas-y-bienestar',
  'un-negocio-en-su-dia-a-dia',
];

assert.deepEqual(
  blogPosts.map((post) => post.slug),
  expectedSlugs,
  'four original articles appear in the specified order',
);
assert.equal(new Set(blogPosts.map((post) => post.slug)).size, blogPosts.length);

for (const post of blogPosts) {
  assert.ok(
    post.title.trim() && post.summary.trim() && post.author === 'Equipo editorial Brisa · demo',
    post.slug + ' article metadata',
  );
  assert.equal(post.image.width, 1536, post.slug + ' cover width');
  assert.equal(post.image.height, 1024, post.slug + ' cover height');
  assert.ok(post.image.alt.trim(), post.slug + ' cover alt text');
  assert.ok(
    insuranceProducts.some((product) => product.slug === post.relatedInsuranceSlug),
    post.slug + ' related insurance',
  );
  assert.equal(post.sections.length, 4, post.slug + ' article sections');
  for (const section of post.sections) {
    assert.ok(section.heading.trim(), post.slug + ' section heading');
    assert.ok(
      section.paragraphs.some((paragraph) => paragraph.trim()) ||
        section.points.some((point) => point.trim()),
      post.slug + '/' + section.heading + ' content',
    );
  }

  const image = readFileSync(new URL('../public' + post.image.src, import.meta.url));
  assert.equal(image.subarray(0, 4).toString(), 'RIFF', post.slug + ' cover RIFF header');
  assert.equal(image.subarray(8, 12).toString(), 'WEBP', post.slug + ' cover WebP format');
  assert.equal(image.readUInt32LE(4), image.length - 8, post.slug + ' cover RIFF size');
}

console.log(`${blogPosts.length} original blog articles and local WebP covers verified.`);
