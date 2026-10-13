# Brisa · demo de seguros

Demo ficticio de portafolio con nueve fichas de seguros, una simulación de
cotización y cuatro artículos originales. Brisa, las aseguradoras, escenarios
y precios son ejemplos; no representan compañías, productos ni cotizaciones
reales.

## Stack

Angular standalone 22, Tailwind CSS 4 y renderizado del lado del cliente (CSR).
La aplicación está en [`web/`](web/README.md).

## Requisitos y ejecución

Requisitos comprobados: Node.js 24 y npm 11. Desde `web/`:

```powershell
npm ci
npm start -- --host 127.0.0.1
```

Abre <http://127.0.0.1:4300/>. Para verificar cambios, también desde `web/`:

```powershell
npm test -- --watch=false
npm run build
node scripts/check-insurance.mjs
node scripts/check-blog.mjs
```

Consulta [`ASSETS.md`](ASSETS.md) para la procedencia de los recursos incluidos.

## Rutas

- `/`: landing.
- `/home`: catálogo y contenido informativo.
- `/seguros/<slug>`: detalle de cada uno de los nueve seguros.
- `/cotizador`: simulación con aseguradoras y paquetes ficticios, e importes
  ilustrativos fijos.
- `/blog` y `/blog/<slug>`: listado y cuatro artículos originales.
- `/avisos-legales`: límites y naturaleza de demostración del sitio.
- Las rutas desconocidas muestran una página 404.

## Límites del demo

El formulario de cotización sólo conserva selecciones en memoria. No hay
backend, envío de formularios, almacenamiento, evaluación de riesgo,
contratación, pagos ni tarifas reales. No ingreses datos personales reales.

El build CSR requiere que el alojamiento futuro redirija las rutas de la
aplicación a `index.html`. La compilación local no constituye una publicación.
