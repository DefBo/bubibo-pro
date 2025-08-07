import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './LanguageSwitcher.module.scss';

const LANGS = [
  { code: 'ua', label: 'UA' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const { query } = router;

  const currentLang = (query.lang as string) || 'ua';
  const site = query.site as string;
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (newLang: string) => {
    setIsOpen(false);
    if (site && currentLang) {
      router.push(`/${site}/${newLang}`);
    } else if (currentLang) {
      router.push(`/${newLang}`);
    }
  };

  return (
    <div className={styles.langSwitcher}>
      <button className={styles.trigger} onClick={() => setIsOpen((prev) => !prev)}>
        {currentLang.toUpperCase()} <span className={styles.arrow}></span>
      </button>
      {isOpen && (
        <ul className={styles.dropdown}>
          {LANGS.filter((lang) => lang.code !== currentLang).map((lang) => (
            <li key={lang.code} onClick={() => handleSelect(lang.code)} className={styles.item}>
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
