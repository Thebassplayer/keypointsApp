export function getAllConceptsTags(concepts) {
  const globalTags = concepts
    .map(concept => concept.tags)
    .filter(Boolean)
    .flat();

  const uniqueTags = [...new Set(globalTags)];

  return uniqueTags;
}