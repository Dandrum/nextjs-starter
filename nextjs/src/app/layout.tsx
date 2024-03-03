import type { Metadata } from 'next'
import React from 'react'
import { dir } from 'i18next'
import { headers, cookies } from 'next/headers'
import acceptLanguage from 'accept-language'
import { fallbackLang, langCookie, languages } from '@/utils/i18/i18n'

import { OpenSans } from '@/styles/loadFonts';

import '@/styles/index.scss';

acceptLanguage.languages(languages)

export const metadata: Metadata = {
    title: 'Nexst Starter',
    description: 'Start Pack For Next'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    /**
     * Language detection
     */
    const headersList = headers()
    const cookieStore = cookies()

    let lng
    if (cookieStore.has(langCookie)) {
        // @ts-ignore
        const { value } = cookieStore.get(langCookie)
        lng = acceptLanguage.get(value)
    }
    if (!lng) lng = acceptLanguage.get(headersList.get('Accept-Language'))
    if (!lng) lng = fallbackLang

    return (
        <html lang={lng} dir={dir(lng)} className={OpenSans.className}>
        <body>
        {children}
        </body>
        </html>
    )
}
