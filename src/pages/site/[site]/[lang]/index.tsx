import { GetStaticPaths, GetStaticProps } from 'next';
import GenericTemplate from '@/components/templates/GenericTemplate/GenericTemplate';
import { getSiteContent } from '@/utils/getSiteContent';

type Props = {
  content: any;
  site: string;
};

export default function SitePage({ content, site }: Props) {
  return <GenericTemplate content={content} />;
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
  const content = getSiteContent(site, lang);

  return {
    props: {
      content,
      site,
    },
  };
};
