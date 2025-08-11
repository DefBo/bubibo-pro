export async function getSiteContent(site: string, lang: string) {
  try {
    const contentModule = await import(`../sites/${site}/${lang}.ts`);
    return contentModule.default;
  } catch {
    return {
      title: 'Not Found',
      description: 'No content available.',
    };
  }
}
