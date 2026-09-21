# Portfolio

A personal portfolio built with Astro, using an editorial "engineer's field guide" design: warm paper, serif headlines, technical figures, and compact engineering notes.

The homepage is a short introduction with links to dedicated pages:

| Route | Content |
| --- | --- |
| `/` | Introduction and page directory |
| `/experience/` | Career overview, selected contributions, and outcomes |
| `/projects/` | Personal projects and interactive illustrations |
| `/notes/` | Engineering notes, grouped into professional work and personal projects |
| `/notes/<id>/` | Shared long-form template with a summary and linked table of contents |
| `/about/` | Background, skills, and certifications |
| `/contact/` | Email, resume, and social profiles |

These are static, file-based Astro routes, not hash navigation or a client-side router. Each page has its own title, description, canonical URL, and active navigation state. The shared layout owns navigation, the main landmark, and the footer.

Shared two-column layouts keep text and illustrations aligned; on mobile, each project's description and links precede its illustration. Project identifiers are data attributes, separate from visualization CSS classes.

## Development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

`npm run build` generates the static site. `npm run preview` serves the production build locally.

## Content and design

- `src/data/portfolio.ts` contains profile information, career history, projects, skills, and credentials.
- `src/content/notes/*.md` contains curated engineering write-ups. `src/content.config.ts` validates their metadata.
- `src/data/navigation.ts` defines the shared page navigation and homepage directory.
- `src/styles/global.css` defines the shared palette, typography, layout, focus styles, and reduced-motion behavior.
- Components in `src/components` render the individual chapters. `OrderFlow.astro` progressively enhances the conceptual event diagram with a user-controlled walkthrough.

All content and links remain usable without JavaScript. The full contribution list uses a native disclosure; detailed notes have their own static pages. Diagrams are illustrative, not internal system architecture. The visual design intentionally uses a light paper palette, independent of previously saved theme preferences.

## Publishing an engineering note

Add a Markdown file to `src/content/notes/`. Its filename becomes the route ID,
for example `shared-build-tooling.md` becomes `/notes/shared-build-tooling/`.
Use the existing notes as writing examples: context, personal contribution,
engineering decisions, outcomes with their scope, and design considerations.
Do not invent measurements or implementation details to fill out a section.

```yaml
---
title: "A specific contribution"
summary: "One sentence explaining the problem and approach."
category: "Developer experience"
kind: work
experienceId: tcs
contribution: "What I personally contributed."
outcome: "The result, with enough context to interpret it."
technologies: ["Java", "Gradle"]
published: false
featured: false
order: 6
---
```

- **Publication is opt-in.** `published` defaults to `false`: unpublished notes
  have no generated route and do not appear in listings, links, or the sitemap.
  Set it to `true` only when the content is ready for public viewing.
- **Showcasing is separate.** `featured` defaults to `false`. Published notes
  appear in the Notes index; only featured ones are linked from their associated
  Experience role or personal project. Adding a career highlight does not create
  or publish a note.
- **Professional work:** use `kind: work` and an existing `experienceId` from
  `portfolio.ts`. Share only material suitable for public disclosure. Do not add
  internal code, customer data, private links, configurations, or architecture.
  The template displays a publication-scope notice and no source/demo controls.
- **Personal projects:** use `kind: personal` and an existing `projectId` instead
  of `experienceId`. Source and optional hosted links come from that project's
  `githubUrl` and `liveUrl` in `portfolio.ts`, keeping links consistent.
- `order` sorts notes within each group (then title). There are no inferred
  publication dates or automatically generated claims.

The strict schema rejects unknown metadata and invalid role/project references.
It does not inspect or sanitise Markdown for confidential content: review the body
before publishing. Drafts are excluded from the site, not from the repository;
never store confidential material in either.