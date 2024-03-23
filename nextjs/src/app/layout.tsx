import type { Metadata, Viewport } from 'next'
import React from 'react'
import { dir } from 'i18next'
import { cookies } from 'next/headers'
import Breakpoints from '@/atoms/Breakpoints'
import moment from 'moment-timezone'
import TranslationProvider from '@/utils/i18/TranslationProvider'
import { fallbackLang } from '@/utils/i18/settings'
import { initTranslations } from '@/utils/i18'
import { OpenSans } from '@/styles/loadFonts'

import '@/styles/index.scss'

export const viewport: Viewport = {
    themeColor: 'white',
    colorScheme: 'light',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: {
            default: '',
            template: '%s | ' + ''
        },
        description: '',
        keywords: '',
        category: '',
        alternates: {
            canonical: '/',
            languages: {
                'en-GB': '/en',
                'de-DE': '/de'
            }
        },
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: true
            }
        },
        verification: {
            google: ''
        }
    }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies()

    let locale
    if (cookieStore.has('NEXT_LOCALE')) {
        // @ts-ignore
        const { value } = cookieStore.get('NEXT_LOCALE')
        locale = value
    }
    if (!locale) locale = fallbackLang

    const { resources } = await initTranslations(locale)

    moment.tz.setDefault('Europe/Berlin')
    moment.locale(locale)

    return (
        <html lang={locale} dir={dir(locale)} className={OpenSans.className}>
        {process.env.APP_ENV === 'development' && <Breakpoints/>}
        <body>
        <TranslationProvider
            locale={locale}
            resources={resources}
        >{children}</TranslationProvider>
        </body>
        </html>
    )
}
