import { getCollection } from "astro:content";

export async function getPublishedNotes() {
  const notes = await getCollection("notes", ({ data }) => data.published);
  return notes.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title),
  );
}
