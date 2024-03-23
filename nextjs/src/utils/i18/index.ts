import { createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next/initReactI18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import settings, { defaultNS } from '@/utils/i18/settings'

export async function initTranslations(
  locale: string,
  namespaces: string[] | null = [ defaultNS ],
  i18nInstance?: any,
  resources?: any
){
  i18nInstance = i18nInstance || createInstance()

  i18nInstance.use(initReactI18next)

  if(!resources){
    i18nInstance.use(
      resourcesToBackend(
        (language: string, namespace: string) => import(`@/utils/i18/locales/${language}/${namespace}.json`)
      )
    )
  }

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: settings.defaultLocale,
    supportedLngs: settings.locales,
    defaultNS: defaultNS,
    ns: namespaces,
    preload: resources ? [] : settings.locales
  })

  return{
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t
  }
}