# Brisa · paquete para el portafolio

Contenido y capturas preparados el **23 de octubre de 2026**. El paquete se
incorporó el **24 de octubre de 2026** a `docs/portafolio/` del repositorio
público de Brisa, con acceso desde su README principal. Se conserva en Markdown
para poder integrarlo también a un sitio de portafolio personal.

## Contenido listo

- [Tarjeta del proyecto](tarjeta.md): título, resumen, tecnologías y enlaces.
- [Caso de estudio](caso-de-estudio.md): reto, solución, decisiones,
  comprobaciones de experiencia y límites.
- `capturas/`: cuatro WebP tomados del demo público. Son capturas de la interfaz
  real; las fotografías que aparecen dentro del demo son ilustraciones generadas.

## Enlaces

- [Ver demo](https://demo-brisa.fmejiadev.com/).
- [Ver código](https://github.com/franciscomh58/brisa-seguros-demo).

Ambos destinos se abrieron en navegador sin iniciar sesión el 2026-10-23. El enlace al demo
apunta a la raíz: el acceso directo a `/cotizador?seguro=auto-individual` mostró
un 404 de Azure. La navegación interna desde la portada sí permitió completar
la simulación. Corregir y volver a verificar las rutas profundas en el proyecto
de despliegue; este paquete no modifica la configuración del alojamiento.

## Capturas y uso

Todas se tomaron el 2026-10-23 del dominio público indicado arriba. El viewport
configurado y las dimensiones del archivo son datos distintos: se conservó la
salida del navegador sin estirar ni reconstruir la interfaz. El blog se capturó
a página completa para mostrar los cuatro artículos y evitar tarjetas cortadas.

| Archivo | Viewport CSS | Dimensiones del archivo | Estado y texto alternativo |
|---|---|---|---|
| [brisa-portada.webp](capturas/brisa-portada.webp) | 1440 × 900 | 1425 × 891 | Portada de Brisa con el mensaje «Hay mucho por vivir» y acceso al catálogo. Movimiento pausado con su control. |
| [brisa-cotizador.webp](capturas/brisa-cotizador.webp) | 1440 × 900 | 1425 × 891 | Resultado de ejemplo para auto individual: Brisa Norte Demo y paquete Ampliado. Sedán, año 2023, uso personal; 650 MXN/mes como importe fijo ficticio. |
| [brisa-detalle-movil.webp](capturas/brisa-detalle-movil.webp) | 390 × 844 | 375 × 811 | Ficha de auto individual en móvil, con descripción, botón de simulación y fotografía ilustrativa. |
| [brisa-blog.webp](capturas/brisa-blog.webp) | 1440 × 900; página completa | 1424 × 2528 | Blog de Brisa con cuatro artículos ilustrados y aviso de contenido ficticio. |

Rutas de origen: `/`, `/cotizador`, `/seguros/auto-individual` y `/blog`.
Se llegó a las rutas internas mediante los enlaces de la aplicación. El acceso
desde la ficha al cotizador con `?seguro=auto-individual` también se comprobó.

## Incorporación en el portafolio existente

1. Añadir una sola entrada de proyecto con el contenido de `tarjeta.md`.
2. Usar `caso-de-estudio.md` en la plantilla de proyectos existente y adaptar
   sus enlaces locales a las rutas de ese portafolio.
3. Copiar únicamente los cuatro WebP a su carpeta de medios. Mantener sus
   proporciones; definir `width` y `height` con las dimensiones de archivo de
   la tabla y aplicar ancho fluido con altura automática.
4. Usar el alt propuesto según el contexto. Si una imagen en la tarjeta repite
   exactamente el texto del mismo enlace, valorar alt vacío para evitar ruido.
   Cargar de forma diferida las imágenes fuera del primer viewport.
5. Mantener «Ver demo» apuntando a la raíz y «Ver código» al repositorio público.
   Conservar la convención de pestañas del portafolio y avisar si abre otra.
6. Revisar listado, detalle, vuelta al listado, teclado, contraste, recarga,
   tamaños 375/768/1440 px y zoom 200 % después de integrar. Ejecutar entonces
   el build y las verificaciones del proyecto destino.

No se incluyen responsabilidades personales o afirmaciones de autoría no
confirmadas. La incorporación es documental: no modifica las pantallas del demo
ni implica push o despliegue. Los maestros PNG
y el reporte de trabajo se conservan en el archivo privado, fuera de este paquete.

## Procedencia

Capturas del demo Brisa del usuario. La procedencia de fotografías, logos,
iconos y tipografía se describe en el
[ASSETS.md público](https://github.com/franciscomh58/brisa-seguros-demo/blob/master/ASSETS.md).
La entrega de las capturas no establece una licencia nueva para esos recursos.
