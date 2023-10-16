import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { defaultNS, getOptions } from '@/utils/i18/i18n'

const initI18next = async (lang:string , ns:string) => {
    const i18nInstance = createInstance()
    await i18nInstance
        .use(initReactI18next)
        .use(resourcesToBackend((language:string, namespace:string) => import(`./locales/${language}/${namespace}.json`)))
        .init(getOptions(lang, ns))
    return i18nInstance
}

export async function useTranslation(lng:string , ns:string = defaultNS, options = {}) {
    const i18nextInstance = await initI18next(lng, ns)
    return {
        // @ts-ignore
        t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
        i18n: i18nextInstance
    }
}
