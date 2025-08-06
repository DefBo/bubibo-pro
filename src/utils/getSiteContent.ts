export function getSiteContent(site: string, lang: string) {
  try {
    return require(`../sites/${site}/${lang}.ts`).default;
  } catch {
    return {
      title: 'Not Found',
      description: 'No content available.',
    };
  }
}
