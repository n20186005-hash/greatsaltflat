# Guía Salinas Grandes

Sitio Astro preparado para el adaptador de Cloudflare Worker. El contenido principal se sirve en español rioplatense y existe una ruta íntegra en inglés bajo `/en/`. No utiliza base de datos, inicio de sesión ni CMS.

## Desarrollo y comprobación

El proyecto se fija a Node `22.13.0` mediante `.node-version`, a pnpm `10.11.1` mediante `packageManager` y a dependencias exactas en `package.json` y `pnpm-lock.yaml`.

```bash
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## URL y despliegue

La única configuración de dominio está en `astro.config.mjs`, alimentada opcionalmente por `SITE_URL`. Si queda vacía, el proyecto construye sin canonical absoluto, URL de Open Graph ni sitemap. Al definir un dominio real, el sitemap se activa en la siguiente compilación. Para Workers, autentique Wrangler y ejecute `pnpm deploy`.

## Créditos

La fotografía documental se archiva desde una fuente CC BY 2.0. Su atribución y licencia figuran en `NOTICE.md`.

