import type { Metadata } from 'next'
import React from 'react'
import { dir } from 'i18next'
import { languages } from '@/utils/i18/i18n'
import LanguageSwitcher from '@/atoms/LanguageSwitcher'
export async function generateStaticParams() {
    return languages.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
    title: 'Nexst Starter',
    description: 'Start Pack For Next'
}

export default function RootLayout({
   children,
   params: {
       lang
   }
}: {
    children: React.ReactNode
    params: {
        lang: string
    }
}) {
    return (
        <html lang={lang} dir={dir(lang)}>
        <body>
        <LanguageSwitcher currentLang={lang}/>
            {children}
        </body>
        </html>
    )
}
