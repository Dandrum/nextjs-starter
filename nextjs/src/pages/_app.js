import MainLayout from '@layout/mainLayout';
import dynamic from 'next/dynamic';
import PlainLayout from '@layout/PlainLayout';
import { appWithTranslation } from 'next-i18next';
import LanguageSwitcher from '@atoms/LanguageSwitcher';
import { config } from '@fortawesome/fontawesome-svg-core';
import moment from 'moment-timezone';
import Head from 'next/head';
import BreakpointViewer from '@components/BreakpointViewer';

import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import 'nprogress/nprogress.css';
import '@styles/index.scss';

moment.tz.setDefault('Europe/Berlin');

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const TopProgressBar = dynamic(
  () => {
    return import('@atoms/TopProgressBar');
  },
  { ssr: false }
);

const iconSizes = {
  appleTouch: [72, 144, 180],
  web: [16, 32, 96],
};
const themeColor = '#ffd5f5';

const MyApp = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout || ((page) => <PlainLayout>{page}</PlainLayout>);

  const appleIcons = iconSizes.appleTouch.map((size, k) => (
    <link
      key={k}
      rel='apple-touch-icon'
      sizes={`${size}x${size}`}
      href={`apple-touch-icon-${size}x${size}.png`}
    />
  ));
  const webIcons = iconSizes.web.map((size, k) => (
    <link
      key={k}
      rel='shortcut icon'
      sizes={`${size}x${size}`}
      href={`favicon-${size}x${size}.png`}
    />
  ));

  return (
    <>
      <Head>
        {webIcons}
        {appleIcons}
        {/* Possible status bar types default (grey without overlap) / black (black bar without overlap) / black translucent ( translucent black with small overlap)*/}
        <meta name='apple-mobile-web-app-status-bar-style' content={'black'} />
        <meta name='theme-color' content={themeColor} />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        />
      </Head>
      <TopProgressBar />
      <MainLayout>
        <BreakpointViewer />
        <LanguageSwitcher />
        {getLayout(<Component {...pageProps} />)}
      </MainLayout>
    </>
  );
};

export default appWithTranslation(MyApp);
