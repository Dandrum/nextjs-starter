import MainLayout from '@layout/mainLayout';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import style from './index.module.scss';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
    // revalidate: 10, // In seconds
  };
};

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={style.home}>
      <h1>{t('hello_world')}</h1>
    </div>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
