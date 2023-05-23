# nextjs-starter

This is my NEXT.js starter with my most used Packages and some prepared configs and components.

## Features

### Packages and Presets
- Docker Setup Dockerfile and Docker-Compose
- Next-Seo with next-seo basic File
- NProgress TopProgressbar with component
- Preact (mini React) for prod builds
- JsConfig with path (@components/@atoms/@layout/@context/@styles/@utils)
- Next Config Header for Content Security Policy
- Next-Compose-plugin for Config
- SVG Webpack plugin for importing svgs
- Prettier
- Sentry Error Logging implemented
- next-i18next for Translation with two files for English and German (You need to add getStaticProps or get ServerSide Props with SSRTranslations)
```js
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({locale}) => {
  return{
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
    // revalidate: 10, // In seconds
  }
};
```

### CSS / Styling Basics
- Favicons for Web and Apple and Theme color Basics in _app.js
- Node-Sass
- Main Sass file with some css basics
- Variables Sass File for ColorScheme font Mixin and Breakpoint Mixin
- My Most use Google Font (OpenSans) local use with include file
- Fontawesome with `Icon` Atom for using
- Formik for Formbuilding comes with three Extra Field Components (Checkbox, FateTime, Time)
- Component to Show Breakpoints in Dev View


## Get Started

To Start the Basic Project

```cli
docker-compose up -d
```
