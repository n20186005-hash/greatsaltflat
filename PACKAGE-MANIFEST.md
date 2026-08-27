# Great Salt Flat — Complete Website Package

This portable package contains the full source project, Cloudflare Worker configuration, production build output, localisation content, documentation, and every image used by the website. The package is self-contained for local development and does not require the original project’s managed image-storage URLs.

| Package area | Contents |
| --- | --- |
| Website source | `src/`, `public/`, configuration files, `package.json`, and `pnpm-lock.yaml` |
| Production output | `dist/`, generated from the current validated source |
| Used website images | Five files in `public/media/`, all referenced by `src/lib/content.ts` |
| Original image archive | `assets/media-source/`, including the same used files and other project visual assets |
| Documentation | `README.md`, `NOTICE.md`, `PORTABLE-ASSETS.md`, `QA.md`, `research.md`, and `ideas.md` |
| Deployment configuration | `astro.config.mjs`, `wrangler.toml`, `tsconfig.json`, `.node-version` |

> Dependencies are intentionally not bundled as `node_modules`; they are reproducibly installed from the committed `pnpm-lock.yaml` using `pnpm install --frozen-lockfile`. This avoids including third-party caches rather than excluding any website source, configuration, build output, or image asset.

## Local verification

Run the following commands after extracting the archive:

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

The portable copy maps all visual assets through `/media/...`, so they are copied by Astro from `public/media/` into the final build.
