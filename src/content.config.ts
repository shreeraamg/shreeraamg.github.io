import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { portfolio } from "./data/portfolio";

const commonFields = {
  title: z.string().min(1),
  summary: z.string().min(1),
  category: z.string().min(1),
  contribution: z.string().min(1),
  outcome: z.string().min(1),
  technologies: z.array(z.string().min(1)).min(1),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
  order: z.number().int().nonnegative().default(0),
};

const notes = defineCollection({
  loader: glob({ base: "./src/content/notes", pattern: "*.md" }),
  schema: z.discriminatedUnion("kind", [
    z.object({
      ...commonFields,
      kind: z.literal("work"),
      experienceId: z.string().refine(
        (id) => portfolio.experience?.some((job) => job.id === id),
        "Work notes must reference an existing experience ID.",
      ),
    }).strict(),
    z.object({
      ...commonFields,
      kind: z.literal("personal"),
      projectId: z.string().refine(
        (id) => portfolio.projects?.some((project) => project.id === id),
        "Personal notes must reference an existing project ID.",
      ),
    }).strict(),
  ]),
});

export const collections = { notes };
