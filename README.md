# JS SolutionVault - 136+ JavaScript & TypeScript Problems (Solved & Explained)

<!-- MIT License -->

[![License](https://img.shields.io/badge/license-MIT-green.svg)](#license)

<!-- Developers Google AI -->

[![Google GenAI](https://img.shields.io/badge/google--genai-%5E1.19.0-orange)](https://developers.google.com/)

<!-- HTML & CSS -->

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

<!-- Styling / PostCSS -->

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/docs/)
[![PostCSS](https://img.shields.io/badge/PostCSS-efefef?logo=postcss&logoColor=black)](https://postcss.org/)
[![daisyUI](https://img.shields.io/badge/daisyUI-5A0EF8?logo=tailwindcss&logoColor=white)](https://daisyui.com/)

<!-- Fonts & Icons -->

[![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?logo=google&logoColor=white)](https://fonts.google.com/)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?logo=fontawesome&logoColor=white)](https://fontawesome.com/)
[![Heroicons](https://img.shields.io/badge/Heroicons-0EA5E9?logo=heroicons&logoColor=white)](https://heroicons.com/)

<!-- Languages & Web Standards -->

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ECMAScript Spec](https://img.shields.io/badge/ECMAScript-262-7A0BC0?logo=ecmascript&logoColor=white)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/docs/)

<!-- Infra & Runtime -->

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/react-blue)](https://reactjs.org/)

<!-- Linting & Formatting -->

[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/docs/latest/)
[![Prettier](https://img.shields.io/badge/Prettier-2B3A42?logo=prettier&logoColor=white)](https://prettier.io/docs/)

<!-- Bundler -->

## [![Vite](https://img.shields.io/badge/Vite-646cff?logo=vite&logoColor=white)](https://vite.dev/)

> **Interactive learning platform that helps developers master JavaScript through curated problems, step-by-step explanations**

---

High-quality, searchable library of JavaScript/TypeScript problem solutions and interactive examples - built with React, TypeScript and Vite. Designed as a developer-focused reference and learning playground for solving, explaining and testing 200+ algorithmic and utility problems with clear explanations and live solvers.

---

## Key highlights

- **Purpose:** A polished vault of categorized coding problems, explanations, and solved implementations - ideal for interview prep, learning and demoing modern JavaScript/TypeScript patterns.
- **Tech stack:** React, TypeScript, Vite, Google GenAI client (optional experimental features), and a small modular `problems` library.
- **Dev-first:** Fast local dev server, lightweight build, modular components, and a clear file layout to extend or ship new problem categories.

---

## Table of contents

1. [Quick Start](#quick-start)
2. [Scripts](#scripts)
3. [Project Structure](#project-structure)
4. [Core Concepts & Components](#core-concepts--components)
5. [Adding Problems / Explanations](#adding-problems--explanations)
6. [Testing & Quality](#testing--quality)
7. [Deployment](#deployment)
8. [Roadmap](#roadmap)
9. [Contributing](#contributing)
10. [License & Contact](#license--contact)

---

## Quick Start

Prerequisites:

- Node.js
- npm or pnpm/yarn

Install dependencies and run locally:

```bash
npm install
npm run dev
```

Open your browser at `http://localhost:5173` (Vite will show the exact URL).

**Build for production and locally preview the build:**

```bash
npm run build
npm run preview
```

**Notes:**

- This project uses TypeScript + Vite for fast iteration and small bundles.
- The repository contains a small service wrapper at [src/services/geminiService.ts](src/services/geminiService.ts) for experimental GenAI integrations.

---

## Scripts

Scripts available in this repo (from `package.json`):

- `dev` - runs the Vite dev server (`vite`).
- `build` - creates a production build (`vite build`).
- `preview` - serves the production build locally for previewing (`vite preview`).

Use `npm run <script>` to execute any of the above commands.

If you add linters, formatters, or tests, include them here as additional npm scripts (e.g., `lint`, `format`, `test`).

---

## Project Structure

Top-level important files:

- [App.tsx](App.tsx) - main application container and routes.
- [index.tsx](index.tsx) - React entry point.
- [vite.config.ts](vite.config.ts) - Vite configuration.
- [tsconfig.json](tsconfig.json) - TypeScript configuration.

Source layout (src):

- `src/components/` - UI components and reusable parts:
  - [Header.tsx](src/components/Header.tsx)
  - [Footer.tsx](src/components/Footer.tsx)
  - [ProblemGrid.tsx](src/components/ProblemGrid.tsx)
  - [ProblemCard.tsx](src/components/ProblemCard.tsx)
  - [MarkdownRenderer.tsx](src/components/MarkdownRenderer.tsx)
  - [ThemeSwitcher.tsx](src/components/ThemeSwitcher.tsx)
  - `icons/` - shared SVG icons
- `src/hooks/` - small utilities like `useDebounce.ts`
- `src/problems/` - the problem library, organized by topic
  - each topic folder (e.g. `arrays`, `strings`, `advanced`) contains:
    - `problems.ts` - problem definitions and metadata
    - `solvers.ts` - canonical solution implementations
    - `explanations.ts` - natural-language explanations and tips
- `src/services/` - lightweight API/service wrappers (e.g. `geminiService.ts`)

This structure keeps UI, domain logic (problems & solvers), and services separated for clarity and maintainability.

---

## Core Concepts & Components

- Problem model: problems are data-first (metadata + text + sample I/O) in `src/problems/*/problems.ts` so the UI can render lists, filters and detailed views without importing logic-heavy modules.
- Solvers: pure functions in `solvers.ts` take inputs and return outputs; they are easy to unit-test and benchmark.
- Explanations: curated human-readable descriptions in `explanations.ts` accompany each solver and can be used by `MarkdownRenderer` to show step-by-step reasoning.
- UI: `ProblemGrid` + `ProblemCard` provide searchable, filterable browsing. `MarkdownRenderer` safely renders problem statements and explanations.

---

## Adding a new problem (step-by-step)

1. Create a new category (if necessary) under `src/problems/your_category`.
2. Add a `problems.ts` entry with the problem metadata:

```ts
// src/problems/your_category/problems.ts
export const problems = [
  {
    id: "your-problem-id",
    title: "Problem title",
    difficulty: "medium",
    description: "Markdown-friendly problem statement",
    examples: [{ input: "...", output: "..." }],
  },
];
```

3. Implement a canonical function in `solvers.ts` and export it.

```ts
// src/problems/your_category/solvers.ts
export function solveYourProblem(input: string) {
  // deterministic, well-documented implementation
}
```

4. Add explanation text in `explanations.ts` for the UI to render.
5. Update any index or registration file under `src/problems/index.ts` so the new category appears in the app.
6. Run `npm run dev` and verify in the browser that the problem appears and the solver executes correctly.

---

## Testing & Quality (recommended)

This repo currently ships with the core stack and build scripts. Recommended additions for a production-ready workflow:

- Add TypeScript strict rules in `tsconfig.json` and enable `noImplicitAny`, `strictNullChecks`.
- Add `eslint` + `prettier` with scripts:

```json
{
  "scripts": {
    "lint": "eslint 'src/**/*.{ts,tsx}'",
    "format": "prettier --write 'src/**/*.{ts,tsx,md,json}'"
  }
}
```

- Add unit tests (Jest / Vitest) for solvers. Example test pattern:

```ts
import { solveYourProblem } from "../src/problems/your_category/solvers";

test("solves sample cases", () => {
  expect(solveYourProblem("input")).toEqual("expected");
});
```

---

## Deployment

This app builds to a static bundle via Vite. Deploy the `dist/` output to any static hosting (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

Typical GitHub Pages / Vercel steps:

1. `npm run build`
2. Push built files or configure your platform to build using `npm run build`.

If you want automated CI/CD, add a GitHub Actions workflow that runs `npm ci`, `npm run build`, and optionally `npm run lint` and `npm test`.

---

## Roadmap & Ideas

- Add interactive problem replay and step-by-step visualizer for algorithms.
- Add difficulty-based practice sessions and progress tracking.
- Add user contributions with PR templates and an editorial review flow.
- Add a searchable public API to fetch problems and solutions.

---

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repo and create a new branch: `feature/your-feature`.
2. Follow the established folder structure and naming conventions.
3. Add tests for any solver logic you introduce.
4. Open a PR describing the change, the reasoning, and screenshots if UI is affected.

For larger contributions (new categories, new UI flows), open an issue first to discuss scope and UX.

---

### License

- This project is licensed under the terms of the **[MIT License](./LICENSE)**.
- You may replace or update the license as needed for client or proprietary projects.

---

### Contact & Maintainer

- **Name:** Md Abu Kayser
- **Project:** _js-solution-vault_
- **Maintainer:** [md-abu-kayser](https://github.com/md-abu-kayser)
- **GitHub:** [github.com/abu.kayser-official](https://github.com/md-abu-kayser)
- **Email:** [abu.kayser.official@gmail.com](mailto:abu.kayser.official@gmail.com)

If you’d like this README tailored for a specific purpose - such as **hiring managers**, **open-source contributors**, or **client deliverables** - feel free to request a custom tone or format.

---

If you'd like help integrating this into a portfolio, demoing it, or adding enterprise features, open an issue or reach out via your GitHub profile contact methods.

---

**Thank you for checking out JS Solution Vault - built for clarity, learning, and high-quality examples.**

---
