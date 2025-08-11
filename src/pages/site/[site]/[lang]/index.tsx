import { GetStaticPaths, GetStaticProps } from 'next';
import GenericTemplate from '@/components/templates/GenericTemplate/GenericTemplate';
import { getSiteContent } from '@/utils/getSiteContent';

type Props = {
  content: never;
  site: string;
  lang: string;
};

export default function SitePage({ content, site, lang }: Props) {
  return <GenericTemplate content={content} site={site} lang={lang} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const sites = ['veterinarians', 'groomers'];
  const langs = ['ua', 'ru', 'en'];

  const paths = sites.flatMap((site) =>
    langs.map((lang) => ({
      params: { site, lang },
    }))
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const site = params?.site as string;
  const lang = params?.lang as string;
  const content = await getSiteContent(site, lang);

  return {
    props: {
      content,
      site,
      lang,
    },
  };
};
