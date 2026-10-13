# Brisa · aplicación web

Angular standalone 22, Angular Router, Tailwind CSS 4 y renderizado CSR.
Contenido, marcas, aseguradoras y escenarios son ficticios.

## Requisitos y comandos

Usa Node.js 24 y npm 11. Desde este directorio:

```powershell
npm ci
npm start -- --host 127.0.0.1
```

Abre <http://127.0.0.1:4300/>. Validación:

```powershell
npm test -- --watch=false
npm run build
node scripts/check-insurance.mjs
node scripts/check-blog.mjs
```

El build se genera en `dist/demo-seguros/browser/`. Al alojar el build CSR, el
servidor debe servir `index.html` para las rutas de la aplicación.

## Rutas

- `/`: landing.
- `/home`: catálogo de nueve seguros, información institucional ficticia,
  contacto inerte y FAQ.
- `/seguros/<slug>`: ficha propia de cada seguro.
- `/cotizador`: simulación en memoria, con opciones e importes de ejemplo.
- `/blog` y `/blog/<slug>`: cuatro artículos originales.
- `/avisos-legales`: explicación de los límites del demo.
- Las rutas desconocidas muestran 404. `/seguros/gastos-medicos` redirige a
  `/home`; `/boletines` y sus aliases históricos redirigen a `/blog`.

## Código y recursos

- Catálogo y contenido de seguros: `src/app/data/insurance-products.ts`.
- Escenarios del cotizador: `src/app/data/quote-scenarios.ts`.
- Artículos y portadas: `src/app/data/blog-posts.ts`.
- Fotos: `public/images/`; logos ficticios: `public/logos/aseguradoras/`.
- Tipografía local y su licencia: `public/fonts/`.
- Procedencia y hashes de los recursos exportados:
  [`../ASSETS.md`](../ASSETS.md).

No hay backend, envío de formularios, almacenamiento, contratación ni pagos.
No ingreses datos personales reales.
