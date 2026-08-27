# Paquete portátil con medios locales

El archivo de entrega `salinas-grandes-guide-portable.zip` incluye las imágenes necesarias en `public/media/`. En esa copia portátil, `src/lib/content.ts` usa únicamente rutas locales `/media/...`, por lo que no depende de enlaces de imagen remotos ni de scripts de descarga.

Las fotos documentales de Salinas Grandes y de la Ruta 52 conservan las atribuciones y licencias expuestas en `NOTICE.md`. El símbolo de marca y una ilustración de apoyo están incluidos como archivos locales de proyecto. Antes de redistribuir imágenes por separado, revise las condiciones de licencia y atribución aplicables.

La carpeta de desarrollo principal mantiene los activos en almacenamiento administrado para que el flujo de alojamiento no incorpore archivos multimedia pesados. Ambas versiones comparten el mismo contenido, configuración de Astro y estructura de Cloudflare Worker.
