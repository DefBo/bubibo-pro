import { GetStaticPaths, GetStaticProps } from 'next';
import MainTemplate from '@/components/templates/MainTemplate/MainTemplate';
import { getSiteContent } from '@/utils/getSiteContent';

type Props = {
  content: never;
  lang: string;
};

export default function MainPage({ content, lang }: Props) {
  return <MainTemplate content={content} lang={lang} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const langs = ['ua', 'ru', 'en'];
  const paths = langs.map((lang) => ({ params: { lang } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = params?.lang as string;
  const content = await getSiteContent('main', lang);

  return {
    props: {
      content,
      lang,
    },
  };
};
