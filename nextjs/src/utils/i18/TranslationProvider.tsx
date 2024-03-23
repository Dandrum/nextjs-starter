'use client'
import { I18nextProvider } from 'react-i18next'
import { createInstance } from 'i18next'
import { initTranslations } from '@/utils/i18/index'

export default function TranslationProvider({
  children,
  locale,
  resources
}:{
  children: React.ReactNode,
  locale: string,
  resources: any
}){
  const i18n = createInstance()

  initTranslations(locale, null, i18n, resources)

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}