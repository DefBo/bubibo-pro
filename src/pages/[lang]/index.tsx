import { GetStaticPaths, GetStaticProps } from 'next';
import MainTemplate from '@/components/templates/MainTemplate/MainTemplate';
import { getSiteContent } from '@/utils/getSiteContent';

export default function MainPage({ content }: { content: any }) {
  return <MainTemplate content={content} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const langs = ['ua', 'ru', 'en'];
  const paths = langs.map((lang) => ({ params: { lang } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = params?.lang as string;
  const content = getSiteContent('main', lang);

  return {
    props: { content },
  };
};
