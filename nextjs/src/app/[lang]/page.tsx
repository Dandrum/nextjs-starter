import { useTranslation } from '@/utils/i18'

export default async function Home({ params }: any) {
    const { lang }: { lang: string } = params
    const { t } = await useTranslation(lang)
    return (
        <main>
            Lang: {lang} <br/>
            Hello: {t('world')}
        </main>
    )
}
