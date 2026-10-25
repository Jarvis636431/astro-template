# Developer Hub

English | [简体中文](README.zh-CN.md)

An Astro portfolio, blog, and printable resume starter. Shared implementation comes from the maintainer repository; personal data is replaced with defaults.

## Getting started

Use Node.js 22 and pnpm 10.14.0:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:4321. No environment variables are required.

## Personalize and write

- Edit `src/config/profile.mjs` for your name, biography, contacts, experience, and skills.
- Edit `src/config/site.mjs` for branding, your real domain, language, timezone, and logo.
- Comments, views, and GitHub contributions default to disabled in `src/config/integrations.mjs`.
- Blog and project directories start empty. Run `pnpm new:post --title "My Post"` or `pnpm new:project --title "My Project"`.
- New posts are drafts with language zh-CN; new projects enter production as in-progress. Review frontmatter before publishing.

See the [configuration guide](docs/personalization.md) for details.

## Verify and deploy

Run `pnpm verify`, then `pnpm build` to produce static files in `dist/`. Domain-root hosting is supported; subdirectory hosting is not yet supported.

GitHub Actions runs checks automatically. Pages deployment is manual: set your real domain, enable the repository's GitHub Actions publishing source in Pages settings, then run the deployment workflow. No scheduled contribution workflow is included; the configured CLI sync remains available.

Manage this source, configuration, and content with Git normally. The maintainer updates shared implementation in the source repository and regenerates this one. Generator tools are not included here.

## Publishing

Replace defaults and review links. A code and asset license must still be chosen before distributing a template; the generator does not choose or declare one on the author's behalf.
