# JS SolutionVault

<p align="center">
  <strong>136+ JavaScript & TypeScript Problems • Solved • Explained • Structured for Practice</strong>
</p>

<p align="center">
  A developer-focused problem-solving repository built with
  <strong>React, TypeScript, and Vite</strong> for practicing JavaScript,
  understanding solution strategies, and studying reusable implementation patterns.
</p>

<p align="center">
  <a href="https://github.com/md-abu-kayser/js-solution-vault">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License" />
  </a>
  <img src="https://img.shields.io/badge/Problems-136%2B-0A66C2?style=for-the-badge" alt="136+ Problems" />
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript ES6+" />
  <img src="https://img.shields.io/badge/TypeScript-Type--Safe-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-18%2B-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-Fast%20Build-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#features">Features</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#adding-a-new-problem">Add Problems</a> •
  <a href="#testing--quality">Testing</a> •
  <a href="#roadmap">Roadmap</a>
</p>

---

## Overview

**JS SolutionVault** is a structured library of solved JavaScript and TypeScript problems designed for developers who want to improve their problem-solving skills through **practice, implementation, explanation, and review**.

The project combines a searchable problem library with canonical solution implementations and human-readable explanations.

Instead of presenting solutions as isolated code snippets, the repository separates:

```text
Problem Definition
        ↓
Solution Implementation
        ↓
Explanation
        ↓
Interactive Presentation
```

This separation makes the project easier to extend, review, test, and maintain.

The repository is intended to function as both:

- A personal problem-solving vault
- A learning reference
- An interview preparation resource
- A frontend engineering demonstration
- A foundation for a larger developer-learning platform

---

# Project Philosophy

The goal of this repository is not simply to collect answers.

It is to develop the habit of moving through the complete engineering loop:

```text
Understand
   ↓
Model
   ↓
Implement
   ↓
Test
   ↓
Explain
   ↓
Refactor
   ↓
Repeat
```

A good solution should therefore be:

- Correct
- Understandable
- Testable
- Maintainable
- Easy to explain

---

# Why JS SolutionVault?

JavaScript development requires more than familiarity with syntax.

A strong developer should be comfortable reasoning about:

```text
Data Structures
Algorithms
Functions
Objects
Arrays
Strings
Async Behavior
Modern JavaScript
TypeScript
Edge Cases
Runtime Behavior
```

JS SolutionVault organizes those concepts into a practical problem-solving environment.

---

# Project Highlights

## Structured Problem Library

Problems are organized by topic instead of being stored in a single large file.

This makes discovery easier and allows new categories to be added without changing the application architecture.

---

## Canonical Solvers

Solutions are kept in dedicated `solvers.ts` modules.

The intended model is:

```text
Input
  ↓
Pure / Focused Solver
  ↓
Output
```

This makes the core logic easier to test and benchmark independently.

---

## Curated Explanations

Each problem can have an accompanying explanation describing the reasoning behind the implementation.

This is important because:

```text
Code tells you WHAT.
Explanation tells you WHY.
```

---

## Interactive Problem Browsing

The frontend provides problem discovery through reusable components such as:

- `ProblemGrid`
- `ProblemCard`
- `MarkdownRenderer`
- `ThemeSwitcher`

The repository structure explicitly separates these UI responsibilities from problem-domain content.

---

## Searchable Learning Experience

The application is designed around browsing, filtering, and reviewing problems rather than opening source files manually.

This creates a more practical learning workflow:

```text
Discover
   ↓
Select
   ↓
Read
   ↓
Solve
   ↓
Compare
   ↓
Understand
```

---

# Architecture

## High-Level Architecture

```text
┌────────────────────────────────────────────────────┐
│                    React Client                    │
│                                                    │
│ Header │ Footer │ ProblemGrid │ ProblemCard       │
│ MarkdownRenderer │ ThemeSwitcher │ Hooks          │
└─────────────────────────┬──────────────────────────┘
                          │
                          ▼
┌────────────────────────────────────────────────────┐
│                 Problem Domain Layer               │
│                                                    │
│ problems.ts                                        │
│ solvers.ts                                         │
│ explanations.ts                                    │
└─────────────────────────┬──────────────────────────┘
                          │
                          ▼
┌────────────────────────────────────────────────────┐
│                   Service Layer                    │
│                                                    │
│ geminiService.ts / External integrations           │
└────────────────────────────────────────────────────┘
```

---

# Architectural Boundaries

The repository intentionally separates three important concerns.

## UI Layer

Responsible for rendering and user interaction.

```text
src/components/
```

## Problem Domain

Responsible for educational content and solution implementations.

```text
src/problems/
```

## Services

Responsible for external service communication.

```text
src/services/
```

This separation reduces coupling and makes the application easier to evolve.

---

# Repository Structure

```text
js-solution-vault/
│
├── public/
│   └── static-assets/
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProblemGrid.tsx
│   │   ├── ProblemCard.tsx
│   │   ├── MarkdownRenderer.tsx
│   │   ├── ThemeSwitcher.tsx
│   │   └── icons/
│   │
│   ├── hooks/
│   │   └── useDebounce.ts
│   │
│   ├── problems/
│   │   ├── arrays/
│   │   │   ├── problems.ts
│   │   │   ├── solvers.ts
│   │   │   └── explanations.ts
│   │   │
│   │   ├── strings/
│   │   │   ├── problems.ts
│   │   │   ├── solvers.ts
│   │   │   └── explanations.ts
│   │   │
│   │   ├── advanced/
│   │   │   ├── problems.ts
│   │   │   ├── solvers.ts
│   │   │   └── explanations.ts
│   │   │
│   │   └── index.ts
│   │
│   ├── services/
│   │   └── geminiService.ts
│   │
│   ├── App.tsx
│   └── index.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── LICENSE
└── README.md
```

> The exact directory tree may change as the repository grows. The important architectural rule is to keep UI, problem content, solution logic, and external services separated.

---

# Core Data Model

A problem is conceptually composed of several pieces of information.

```text
Problem
├── ID
├── Title
├── Difficulty
├── Description
├── Examples
└── Related Solution / Explanation
```

Example:

```ts
interface Problem {
  id: string;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  description: string;
  examples?: {
    input: string;
    output: string;
  }[];
}
```

The exact interface should remain synchronized with the actual implementation.

---

# Problem Content Architecture

Every category follows a predictable structure.

```text
category/
├── problems.ts
├── solvers.ts
└── explanations.ts
```

## `problems.ts`

Contains:

- Problem metadata
- Titles
- Descriptions
- Difficulty
- Examples

The repository currently documents this as the source of problem definitions and metadata.

---

## `solvers.ts`

Contains:

- Canonical implementations
- Reusable solver functions
- Deterministic solution logic

The core principle is to keep solver logic independent from the UI.

---

## `explanations.ts`

Contains:

- Reasoning
- Solution walkthroughs
- Helpful notes
- Learning-oriented explanations

This content can then be rendered by the Markdown rendering layer.

---

# Adding a New Problem

One of the strongest parts of this architecture is how easy it is to expand.

## Step 1 — Choose a Category

Example:

```text
src/problems/arrays/
```

or create a new category:

```text
src/problems/recursion/
```

---

## Step 2 — Add the Problem

```ts
// src/problems/recursion/problems.ts

export const problems = [
  {
    id: "recursion-001",
    title: "Calculate Factorial",
    difficulty: "easy",
    description: "Implement a recursive factorial function.",
    examples: [
      {
        input: "5",
        output: "120",
      },
    ],
  },
];
```

---

## Step 3 — Add the Solver

```ts
// src/problems/recursion/solvers.ts

export function factorial(n: number): number {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
}
```

---

## Step 4 — Add the Explanation

```ts
// src/problems/recursion/explanations.ts

export const explanations = {
  "recursion-001": `
### Approach

The function calls itself with a smaller value until
it reaches the base case.

### Complexity

Time: O(n)
Space: O(n)
`,
};
```

---

## Step 5 — Register the Category

Update the central aggregation layer:

```text
src/problems/index.ts
```

The current repository uses a central registration/index pattern for problem discovery.

---

## Step 6 — Verify

Run:

```bash
npm run dev
```

Then verify:

```text
✓ Problem appears
✓ Category appears
✓ Explanation renders
✓ Solver behaves correctly
✓ Search/filter works
```

---

# Example Problem Lifecycle

```text
New Problem
     ↓
Metadata
     ↓
Problem Definition
     ↓
Solver
     ↓
Explanation
     ↓
Registration
     ↓
UI Discovery
     ↓
Testing
     ↓
Review
```

This creates a predictable contribution workflow.

---

# Tech Stack

## Frontend

| Technology   | Responsibility                           |
| ------------ | ---------------------------------------- |
| React        | User interface                           |
| TypeScript   | Type-safe application development        |
| Vite         | Development and production build tooling |
| Tailwind CSS | Styling                                  |
| daisyUI      | UI components                            |
| PostCSS      | CSS processing                           |

The repository currently identifies React, TypeScript, Vite, Tailwind CSS, PostCSS, and daisyUI in its stack.

---

## JavaScript Ecosystem

| Technology | Purpose                          |
| ---------- | -------------------------------- |
| JavaScript | Core language being practiced    |
| ECMAScript | Language standard reference      |
| TypeScript | Type-safe JavaScript development |
| Node.js    | Development/runtime ecosystem    |

---

## Developer Tooling

| Tool     | Purpose               |
| -------- | --------------------- |
| ESLint   | Static analysis       |
| Prettier | Consistent formatting |
| Git      | Version control       |

The repository documents ESLint and Prettier as part of the development tooling.

---

# Optional AI Integration

The repository includes a lightweight service wrapper:

```text
src/services/geminiService.ts
```

This is intended for experimental Google GenAI integration rather than making the entire application dependent on AI.

That separation is useful because:

```text
UI
 ↓
Service Abstraction
 ↓
External AI Provider
```

If the provider changes later, the rest of the application can remain relatively isolated from that implementation detail.

---

# Getting Started

## Prerequisites

Install:

- Node.js
- npm, pnpm, or Yarn
- Git

The project is built around a standard Vite-based frontend workflow.

---

# Installation

Clone the repository:

```bash
git clone https://github.com/md-abu-kayser/js-solution-vault.git
```

Enter the directory:

```bash
cd js-solution-vault
```

Install dependencies:

```bash
npm install
```

---

# Development

Start the local development server:

```bash
npm run dev
```

Open the URL displayed by Vite, typically:

```text
http://localhost:5173
```

The repository currently documents the standard Vite development command and local development URL.

---

# Production Build

Create a production build:

```bash
npm run build
```

Preview it locally:

```bash
npm run preview
```

These are the documented Vite-based build and preview workflows.

---

# Available Scripts

| Command           | Purpose                  |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Create production build  |
| `npm run preview` | Preview production build |

The current README identifies these scripts as the existing `package.json` workflow.

For future tooling, additional scripts can be introduced:

```text
npm run lint
npm run format
npm run typecheck
npm run test
```

---

# Testing & Quality

The current repository documentation recommends introducing automated tests for solver functions.

The most important testing boundary is the solver layer.

For example:

```ts
import { solveYourProblem } from "../src/problems/arrays/solvers";

describe("solveYourProblem", () => {
  it("handles the sample case", () => {
    expect(solveYourProblem("input")).toEqual("expected");
  });
});
```

---

# Recommended Quality Pipeline

As the repository matures:

```text
Lint
  ↓
Type Check
  ↓
Unit Tests
  ↓
Build
  ↓
Deploy
```

Recommended commands:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Only add these commands after configuring the corresponding tools in `package.json`.

---

# Testing Philosophy

Tests should prioritize correctness over volume.

Every solver should ideally cover:

```text
Normal Input
     +
Boundary Input
     +
Empty Input
     +
Invalid Input
     +
Large Input
```

where those cases are meaningful for the specific problem.

---

# Complexity Analysis

A future extension of the problem model should optionally record:

```ts
interface Complexity {
  time: string;
  space: string;
}
```

Example:

```text
Time Complexity: O(n)
Space Complexity: O(1)
```

This would make the repository more valuable for technical interview preparation and algorithm review.

---

# Performance Considerations

As the problem library grows, loading every problem into the initial application bundle may become unnecessary.

Potential improvements include:

### Lazy Loading

Load category data only when the user opens that category.

### Code Splitting

Split large feature areas into separate bundles.

### Search Optimization

Use indexed metadata rather than repeatedly scanning large datasets.

### Memoization

Memoize expensive filtering and transformation operations.

### Content Chunking

Keep problem definitions, explanations, and solver payloads modular.

---

# Scalability Direction

The current architecture can evolve from:

```text
Single Frontend
      ↓
Problem Data
```

toward:

```text
                    Web App
                       │
                 ┌─────┴─────┐
                 ▼           ▼
            Problem API   AI Service
                 │           │
                 ▼           ▼
             Database    AI Provider
```

This would support:

- User accounts
- Progress persistence
- Favorites
- Problem history
- Leaderboards
- Personalized practice
- Remote problem delivery
- Community submissions

---

# Future Product Model

A more advanced version could evolve into:

```text
                     Learner
                        │
                        ▼
                 Problem Platform
                        │
         ┌──────────────┼──────────────┐
         ▼              ▼              ▼
      Practice       Progress          AI
         │              │              │
         └──────────────┼──────────────┘
                        ▼
               Personalized Learning
```

That would transform the repository from a static solution library into a more complete learning platform.

---

# Roadmap

```text
[x] Categorized problem library
[x] Canonical solutions
[x] Human-readable explanations
[x] Interactive problem browsing
[x] Responsive UI foundation
[x] Vite development workflow
[x] Service abstraction for experimental GenAI

[ ] Expand problem coverage
[ ] Add difficulty-based practice sessions
[ ] Add progress tracking
[ ] Add bookmarks / favorites
[ ] Add automated unit tests
[ ] Add TypeScript strict validation
[ ] Add ESLint configuration
[ ] Add Prettier configuration
[ ] Add GitHub Actions CI
[ ] Add algorithm complexity metadata
[ ] Add interactive algorithm visualizations
[ ] Add contributor workflow
[ ] Add remote problem API
[ ] Add community-submitted problems
```

The roadmap builds naturally on the repository's existing direction toward searchability, contributions, visual learning, progress tracking, and expanded problem capabilities.

---

# GitHub Actions / CI Direction

A professional repository should eventually validate changes automatically.

Recommended CI flow:

```text
Pull Request
     ↓
Install Dependencies
     ↓
Type Check
     ↓
Lint
     ↓
Test
     ↓
Build
     ↓
Pass / Fail
```

Example future workflow:

```yaml
name: CI

on:
  push:
  pull_request:

jobs:
  validate:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: lts/*
          cache: npm

      - name: Install
        run: npm ci

      - name: Type Check
        run: npm run typecheck

      - name: Lint
        run: npm run lint

      - name: Test
        run: npm test

      - name: Build
        run: npm run build
```

Add this once the corresponding scripts exist.

---

# Contribution Guidelines

Contributions are welcome.

## Before Contributing

Please:

```text
Read architecture
      ↓
Understand category structure
      ↓
Follow existing naming
      ↓
Add implementation
      ↓
Add explanation
      ↓
Add tests where applicable
      ↓
Run validation
      ↓
Open PR
```

---

# New Problem Contribution Standard

A new problem should ideally contain:

```text
✓ Unique ID
✓ Clear title
✓ Difficulty
✓ Precise problem statement
✓ Example input/output
✓ Canonical solver
✓ Explanation
✓ Edge-case considerations
✓ Tests
```

This ensures that a new contribution improves the learning resource rather than merely increasing problem count.

---

# Commit Convention

Use Conventional Commit-style messages.

Examples:

```text
feat(problems): add string manipulation challenges
fix(solvers): correct array edge-case handling
refactor(problems): normalize problem metadata
docs(readme): improve repository documentation
test(solvers): add coverage for recursive problems
chore(deps): update frontend dependencies
ci(github): add build validation workflow
```

Avoid vague messages such as:

```text
update
changes
final
new stuff
fix
```

---

# Code Style

Follow these principles:

### Prefer Readability

The simplest understandable solution is often the best reference implementation.

### Avoid Unnecessary Abstraction

Do not introduce complex architecture merely for demonstration.

### Keep Solvers Focused

A solver should solve one problem.

### Keep UI Independent

Problem content should not be hard-coded into presentation components.

### Use Types Intentionally

TypeScript should improve correctness and developer experience.

### Document Non-Obvious Decisions

Comments should explain reasoning, not restate obvious code.

---

# Security Considerations

The project includes an optional external AI service integration.

Never commit actual API credentials:

```text
.env
.env.local
.env.production
```

Use an environment example file:

```text
.env.example
```

For browser applications, remember that client-side environment variables are not equivalent to server-side secrets.

If sensitive AI credentials are required in the future, route those requests through a trusted backend service rather than exposing private credentials directly to the browser.

---

# Deployment

The application is built as a Vite frontend and produces a static build.

Typical process:

```bash
npm run build
```

The resulting:

```text
dist/
```

directory can be deployed to a static hosting platform.

Potential platforms include:

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

The current repository documentation describes deployment of the Vite `dist/` output to static hosting platforms.

---

# Troubleshooting

## Development Server Does Not Start

Try:

```bash
rm -rf node_modules
npm install
npm run dev
```

On Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
npm run dev
```

---

## Build Failure

Run:

```bash
npm install
npm run build
```

Then inspect:

- TypeScript errors
- Import paths
- Missing dependencies
- Incorrect exports

---

## New Problem Does Not Appear

Check:

```text
[ ] problems.ts exists
[ ] solver is exported
[ ] explanation is registered
[ ] category is registered
[ ] problem ID is unique
[ ] app was restarted after structural changes
```

---

# Project Quality Checklist

Before merging a significant change:

```text
[ ] Problem metadata is correct
[ ] Solver is deterministic
[ ] Explanation matches implementation
[ ] Edge cases considered
[ ] TypeScript passes
[ ] Lint passes
[ ] Tests pass
[ ] Build passes
[ ] README updated when architecture changes
[ ] No secrets committed
```

---

# What This Repository Demonstrates

From a portfolio perspective, JS SolutionVault demonstrates several engineering capabilities.

## Problem Solving

Ability to translate requirements into executable solutions.

## JavaScript Knowledge

Exposure to practical JavaScript concepts and patterns.

## TypeScript

Use of static typing to improve maintainability.

## React

Building reusable interactive UI components.

## Data-Driven Architecture

Separating content from presentation.

## Service Abstraction

Keeping external integrations behind dedicated services.

## Developer Experience

Using Vite, linting, formatting, Git workflows, and structured documentation.

---

# Ideal Use Cases

### Interview Preparation

Practice implementation and explain solution reasoning.

### JavaScript Learning

Study the relationship between concepts and working code.

### TypeScript Practice

Compare typed implementations and contracts.

### Code Review

Use the repository as a compact set of reviewable examples.

### Portfolio Showcase

Demonstrate structured frontend architecture and problem-solving ability.

### Open Source

Provide an extensible foundation for community-contributed challenges.

---

# Engineering Philosophy

The repository follows a simple rule:

> **A solution is not complete until it is understandable.**

That means the project values:

```text
Correctness
    +
Clarity
    +
Explanation
    +
Testability
    +
Maintainability
```

rather than raw problem count alone.

---

# Repository Evolution

The long-term direction can be represented as:

```text
Solution Library
      ↓
Interactive Problem Platform
      ↓
Progress Tracking
      ↓
Personalized Practice
      ↓
Community Contributions
      ↓
Learning Platform
```

Each stage can be introduced incrementally without abandoning the existing content architecture.

---

# License

This project is licensed under the **MIT License**.

See [LICENSE](./LICENSE) for the complete license text.

---

# Maintainer

<p align="center">
  <strong>Md Abu Kayser</strong>
</p>

<p align="center">
  Frontend / Full-Stack Web Developer
</p>

<p align="center">
  <a href="https://github.com/md-abu-kayser">
    GitHub
  </a>
  •
  <a href="mailto:abu.kayser.official@gmail.com">
    Email
  </a>
</p>

For collaboration, technical discussion, portfolio review, or professional opportunities, please reach out through GitHub or email.

---

# Acknowledgments

This project builds on the JavaScript and TypeScript ecosystem, including:

- React
- TypeScript
- Vite
- Tailwind CSS
- daisyUI
- Node.js
- Express
- Google GenAI
- ESLint
- Prettier

The repository's existing documentation references these technologies and their official documentation as development resources.

---

<p align="center">
  <a href="#js-solutionvault">⬆ Back to top</a>
</p>

<p align="center">
  <strong>Practice. Understand. Implement. Explain.</strong>
</p>

<p align="center">
  Made with ❤️ and ☕ by <strong>Md Abu Kayser</strong>
</p>
