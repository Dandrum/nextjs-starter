import React from 'react'
import { languages } from '@/utils/i18/i18n'
import LanguageSwitcher from '@/atoms/LanguageSwitcher'
export async function generateStaticParams() {
    return languages.map((lang) => ({ lang }))
}

export default async function MainLayout(
    props: {
        children: React.ReactNode
        params: Promise<{
            lang: string
        }>
    }
) {
    const params = await props.params

    const {
        lang
    } = params

    const {
        children
    } = props

    return (
        <>
            <LanguageSwitcher />
            {children}
        </>
    )
}
