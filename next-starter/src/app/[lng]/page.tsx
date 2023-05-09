import { useTranslation } from '../i18n';
export default async function Home({params: {lng}}: any) {
  const { t } = await useTranslation(lng);

  return (
   <>
    <h1>{t('hello_world')}</h1>
       <p> LANG:   {lng}</p>
   </>
  )
}
