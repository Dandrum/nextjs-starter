import { initTranslations } from '@/utils/i18'

export default async function Home({ params }: any) {
    const { lang }: { lang: string } = params
    const { t } = await initTranslations(lang)
    return (
        <main>
            Lang: {lang} <br/>
            Hello: {t('world')}
        </main>
    )
}
