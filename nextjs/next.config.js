/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const { withSentryConfig } = require("@sentry/nextjs");
const {i18n} = require("./next-i18next.config");

//Info  https://content-security-policy.com/

const cspConfig = {
  defaultDomain: process.env.CSP_DEFAULT_DOMAIN,
  apiDomains: process.env.CSP_API_DOMAINS,
  scriptDomains: process.env.CSP_SCRIPT_DOMAINS,
  imageDomains: process.env.CSP_IMAGE_DOMAINS,
  styleDomains: process.env.CSP_STYLE_DOMAINS
};

let prod = process.env.APP_ENV === "production";

function getCsp() {
  let csp = `default-src 'self' ${cspConfig.defaultDomain};`;
  csp += `base-uri 'self';`;
  csp += `form-action 'self';`;
  csp += `connect-src 'self' ${cspConfig.apiDomains};`;
  csp += `script-src 'self' ${cspConfig.scriptDomains} ${prod ? "" : "'unsafe-eval'"};`; // NextJS requires 'unsafe-eval' in dev (faster source maps)
  csp += `style-src 'self' 'unsafe-inline' data: ${cspConfig.styleDomains};`; // NextJS requires 'unsafe-inline'
  csp += `img-src 'self' data: blob: ${cspConfig.imageDomains} ;`;
  csp += `font-src 'self';`;
  csp += `prefetch-src 'self';`;
  csp += `worker-src blob:;`;

  return csp;
}

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Permissions-Policy',
    value: 'geolocation=()'
  },
  {
    key: 'Content-Security-Policy',
    value: getCsp()
  }
];


module.exports = withPlugins([
  [withSentryConfig, {
    silent: true
  }],
  {
    crossOrigin: "anonymous",
    poweredByHeader: false,
    optimizeFonts: true,
    reactStrictMode: true,
    compression: true,
    generateEtags: true,
    swcMinify: true,
    productionBrowserSourceMaps: true,
    i18n,
    compiler:{
      removeConsole:{
        exclude: ['error']
      }
    },
    experimental: {
      outputStandalone: true,
    },
    images: {
      domains: [
        "localhost",
      ]
    },
    async headers() {
      return [
        {
          // Apply these headers to all routes in your application.
          source: '/(.*)',
          headers: securityHeaders,
        },
      ]
    },
    webpackDevMiddleware: (config) => {
      //Solves compiling problem
      config.watchOptions = {
        poll: 1000, // check for changes every second
        aggregateTimeout: 300  // delay before rebuild
      };
      return config;
    },
    webpack(config, { dev }) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });

      if(!dev) {
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat'
        });
      }

      return config;
    }
  }
])
