"use client";
import { usePathname  } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import styles from './LanguageSwitcher.module.scss';

import enFlag from './flags/us.jpg';
import germanyFlag from './flags/germany.jpg';

// get the languages
const languages = [
  {
    name: 'Deutsch',
    localCode: 'de',
    flag: germanyFlag,
  },
  {
    name: 'English',
    localCode: 'en',
    flag: enFlag,
  },
];

const LanguageSwitcher = () => {
  const pathname = usePathname();
  let currentLang = languages.filter(
    (lang) => lang.localCode === pathname.substring(0, 3)
  );

  return (
    <div className={styles.LanguageSwitcher}>
      {languages.map((lang, i) => (
        <Link
          key={i}
          href={`/${lang.localCode}/${pathname.substring(3)}`}
          locale={lang.localCode}
          className={`${styles.LanguageSwitcher__link} ${
            currentLang?.localCode === lang.localCode
              ? styles['LanguageSwitcher__link--active']
              : ''
          }`}>
            <Image src={lang.flag} alt={lang.name} height={12} width={30} />{' '}
            <span>
              {lang.name}
            </span>
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
