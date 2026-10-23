# Salinas Grandes visitor guide

Independent Spanish and English guide for https://greatsaltflat.com. Astro serves the homepages on demand, including server-side Open-Meteo weather; six legal/settings pages are prerendered.

Use Node 24.12 or newer in the 24 series and pnpm 11.

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

The existing Cloudflare project is `greatsaltflat`. The adapter emits `dist/server/entry.mjs` and served assets under `dist/client`; generated local deployment configuration remains internal. The build normalises compiler metadata paths consistently. A build is not evidence of an activated production version.

Weather validates current and daily data, has a five-second request timeout and a ten-minute server cache, and shows an honest unavailable state on provider failure. No sample forecast is returned. The existing optional Google Analytics ID and storage format remain; the existing buttons apply immediate runtime rejection, verify persistence and report failures honestly. Maps and external fonts are independent services.

See `research.md` for public fact sources and `NOTICE.md` for the three individually verified documentary photographs and their visible attribution.
