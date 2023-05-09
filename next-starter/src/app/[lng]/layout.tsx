import localFont from 'next/font/local';
import moment from 'moment-timezone';
import { dir } from 'i18next'
import LanguageSwitcher from "@atoms/LanguageSwitcher";

import { languages } from '../i18n/settings'

import '@styles/index.scss';

moment.tz.setDefault('Europe/Berlin');

const openSans = localFont({
    src: [
        {
            path: '../../assets/fonts/open-sans-v16-latin-300.woff2',
            weight: '300',
            style: 'normal'
        },
        {
            path: '../../assets/fonts/open-sans-v16-latin-regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../assets/fonts/open-sans-v16-latin-600.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../../assets/fonts/open-sans-v16-latin-700.woff2',
            weight: '700',
            style: 'normal'
        }
    ]
});

export async function generateStaticParams() {
    return languages.map((lng) => ({lng}))
}

export const metadata = {
  metadataBase: new URL('https://localhost'),
    title: "NextJS Starter",
    description: 'NextJs Starter from Dan',
    'apple-mobile-web-app-status-bar-style': 'black',
themeColor: '#ffd5f5',
  alternates: {
    canonical: './',
    languages: {
      'en': '/en',
      'de': '/de',
    },
  },
}

export default function RootLayout({
                                       children,
                                       params: {
                                           lng
                                       }
                                   }: {
    children: React.ReactNode,
    params: {
        lng: string
    }
}) {
    return (
        <html lang={lng} dir={dir(lng)} className={openSans.className}>
        <body>
          <LanguageSwitcher/>
          {children}
        </body>
        </html>
    )
}
