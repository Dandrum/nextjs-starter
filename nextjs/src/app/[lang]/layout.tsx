import React from 'react'
import { languages } from '@/utils/i18/i18n'
import LanguageSwitcher from '@/atoms/LanguageSwitcher'
export async function generateStaticParams() {
    return languages.map((lang) => ({ lang }))
}

export default function MainLayout({
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
        <>
            <LanguageSwitcher currentLang={lang}/>
            {children}
        </>
    )
}
