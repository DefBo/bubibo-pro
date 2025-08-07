import { useState } from 'react';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import Modal from '@/components/Modal/Modal';
import styles from './GenericTemplate.module.scss';

type Props = {
  content: {
    navUrls: {
      navUrl: string;
      navUrlText: string;
    }[];
    tryForFreeModalName: string;
    availableRoutes: {
      site: string;
      label: string;
    }[];
  };
  site: string;
  lang: string;
};

export default function GenericTemplate({ content, site, lang }: Props) {
  const [openModal, setOpenModal] = useState<'modal1' | null>(null);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__start}>
          <Link href={`/${site}/${lang}`}>Logo</Link>

          <nav className={styles.nav}>
            {content.navUrls?.map(({ navUrl, navUrlText }) => (
              <a key={navUrl} href={navUrl}>
                {navUrlText}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.header__end}>
          <LanguageSwitcher />
          <div className={styles.header__divider}></div>
          <button className={styles.chatButton}>Chat</button>
          <button onClick={() => setOpenModal('modal1')}>Open Modal 1</button>
        </div>
      </header>

      <main className={styles.main}>
        {content.availableRoutes?.map((route) => {
          const isCurrent = route.site === site;

          return isCurrent ? (
            <span key={route.site} className={styles.inactiveLink}>
              {route.label}
            </span>
          ) : (
            <Link key={route.site} href={`/${route.site}/${lang}`} className={styles.activeLink}>
              {route.label}
            </Link>
          );
        })}

        <Link href={`/${site}/${lang}`} className={styles[`test_${site}`]}>
          Toggle
        </Link>
      </main>

      <Modal isOpen={openModal === 'modal1'} onClose={() => setOpenModal(null)}>
        <h2>{content.tryForFreeModalName}</h2>
      </Modal>
    </>
  );
}
