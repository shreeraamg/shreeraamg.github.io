# Portfolio

A personal portfolio built with Astro, using an editorial "engineer's field guide" design: warm paper, serif headlines, technical figures, and compact engineering notes.

The homepage is a short introduction with links to dedicated pages:

| Route | Content |
| --- | --- |
| `/` | Introduction and page directory |
| `/experience/` | Professional experience and engineering notes |
| `/projects/` | Personal projects and interactive illustrations |
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

- `src/data/portfolio.ts` contains profile information, engineering studies, projects, skills, and credentials.
- `src/data/navigation.ts` defines the shared page navigation and homepage directory.
- `src/styles/global.css` defines the shared palette, typography, layout, focus styles, and reduced-motion behavior.
- Components in `src/components` render the individual chapters. `OrderFlow.astro` progressively enhances the conceptual event diagram with a user-controlled walkthrough.

All content and links remain usable without JavaScript. Engineering notes use native disclosures; diagrams are illustrative, not internal system architecture. The visual design intentionally uses a light paper palette, independent of previously saved theme preferences.