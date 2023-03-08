export function getAllConceptsTags(concepts: any[]): string[] {
  const globalTags = concepts
    .map(concept => concept.tags)
    .filter(Boolean)
    .flat();

  const uniqueTags = [...new Set(globalTags)];

  return uniqueTags;
}
