'use client'
import { useEffect, useState } from 'react'
import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { defaultNS, getOptions } from '@/utils/i18/i18n'

const runsOnServerSide = typeof window === 'undefined'

i18next
    .use(initReactI18next)
    .use(resourcesToBackend((language:string, namespace:string) => import(`@/utils/i18/locales/${language}/${namespace}.json`)))
    .init(getOptions())

export function useTranslation(lng:string, ns:string = defaultNS, options:any = {}) {
    const ret = useTranslationOrg(ns, options)
    const { i18n } = ret
    if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
        i18n.changeLanguage(lng)
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [ activeLng, setActiveLng ] = useState(i18n.resolvedLanguage)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (activeLng === i18n.resolvedLanguage) return
            setActiveLng(i18n.resolvedLanguage)
        }, [ activeLng, i18n.resolvedLanguage ])
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (!lng || i18n.resolvedLanguage === lng) return
            i18n.changeLanguage(lng)
        }, [ lng, i18n ])
    }
    return ret
}