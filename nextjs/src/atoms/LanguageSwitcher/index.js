'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import styles from './LanguageSwitcher.module.scss'

import enFlag from './flags/us.jpg'
import germanyFlag from './flags/germany.jpg'

// get the languages
const languages = [
  {
    name: 'Deutsch',
    localCode: 'de',
    flag: germanyFlag
  },
  {
    name: 'English',
    localCode: 'en',
    flag: enFlag
  }
]

const LanguageSwitcher = ({ currentLang }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <div className={styles.LanguageSwitcher}>
      {languages.map((lang, i) => (
        <Link
          key={i}
          href={pathname.replace(currentLang, lang.localCode) + (searchParams.toString() ? `?${searchParams.toString()}` : '')}
          className={`${styles.LanguageSwitcher__link} ${
            currentLang === lang.localCode
              ? styles['LanguageSwitcher__link--active']
              : ''
            }`}>
            <Image src={lang.flag} alt={lang.name} height={12} width={30} />{' '}
            <span className={styles.LanguageSwitcher__link_name}>
              {lang.name}
            </span>
         </Link>
      ))}
    </div>
  )
}

export default LanguageSwitcher
