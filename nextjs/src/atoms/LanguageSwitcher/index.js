import { useRouter } from 'next/router';
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
  const router = useRouter();
  let currentLang = languages.filter(
    (lang) => lang.localCode === router.locale
  );
  currentLang = currentLang.length > 0 ? currentLang[0] : null;

  return (
    <div className={styles.LanguageSwitcher}>
      {languages.map((lang, i) => (
        <Link key={i} href={router.asPath} locale={lang.localCode}>
          <a
            className={`${styles.LanguageSwitcher__link} ${
              currentLang?.localCode === lang.localCode
                ? styles['LanguageSwitcher__link--active']
                : ''
            }`}
          >
            <Image src={lang.flag} alt={lang.name} height={12} width={30} />{' '}
            <span className={styles.LanguageSwitcher__link_name}>
              {lang.name}
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
