# Yashas's Portfolio

This repository contains the source code for Yashas's portfolio, deployed at [iyashasgowda.com](https://iyashasgowda.com).

## Info

The portfolio has been migrated to a React + Vite app while preserving the original design, sections, and asset structure.

## Local development

```bash
export PATH=/home/iyashasgowda/.local/node/bin:$PATH
npm install
npm run dev
```

## Production build

```bash
export PATH=/home/iyashasgowda/.local/node/bin:$PATH
npm run build
```

## Deploy to GitHub Pages

```bash
export PATH=/home/iyashasgowda/.local/node/bin:$PATH
npm run build
```

The site is deployed by the GitHub Actions workflow in `.github/workflows/deploy-pages.yml` whenever code is pushed to `master`. The custom domain is provided via `public/CNAME`.

## License

Source code is licensed under the [Apache License 2.0](https://github.com/iyashasgowda/Portfolio/blob/master/LICENSE)

Contents of this site are © 2022 Yashas Gowda. All rights reserved.
