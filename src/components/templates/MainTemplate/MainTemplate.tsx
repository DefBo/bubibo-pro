import styles from './MainTemplate.module.scss';

type Props = {
  content: { title: string; description: string };
};

export default function MainTemplate({ content }: Props) {
  return (
    <main className={styles.main}>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </main>
  );
}
