//Info  https://content-security-policy.com/
const {withSentryConfig} = require("@sentry/nextjs");

const cspConfig = {
  defaultDomain: process.env.CSP_DEFAULT_DOMAIN,
  connectDomains: process.env.CSP_API_DOMAINS,
  scriptDomains: process.env.CSP_SCRIPT_DOMAINS,
  imageDomains: process.env.CSP_IMAGE_DOMAINS,
  styleDomains: process.env.CSP_STYLE_DOMAINS,
  frameDomains: process.env.CSP_FRAME_DOMAINS
}

let prod = process.env.APP_ENV === 'production'

function getCsp() {
  let csp = `default-src 'self' ${cspConfig.defaultDomain};`
  csp += 'base-uri \'self\';'
  csp += 'form-action \'self\';'
  csp += `connect-src 'self' ${cspConfig.connectDomains};`
  csp += `frame-src 'self' ${cspConfig.frameDomains};`
  csp += `script-src 'self' 'unsafe-inline' ${cspConfig.scriptDomains} ${prod ? '' : '\'unsafe-eval\''};` // NextJS requires 'unsafe-eval' in dev (faster source maps)
  csp += `style-src 'self' 'unsafe-inline' data: ${cspConfig.styleDomains};` // NextJS requires 'unsafe-inline'
  csp += `img-src 'self' data: blob: ${cspConfig.imageDomains} ;`
  csp += 'object-src \'self\';'
  csp += 'font-src \'self\';'
  csp += 'worker-src blob:;'

  return csp
}

const securityHeaders = [
  {
    key: 'Cache-Control',
    value: 'public, max-age=31536000, must-revalidate'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy-Report-Only',
    value: getCsp()
  }
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  generateEtags: true,
  crossOrigin: 'anonymous',
  poweredByHeader: false,
  optimizeFonts: true,
  productionBrowserSourceMaps: false,
  experimental: {
    serverActions: true,
    appDir: true
  },
  sentry: {
    silent: true
  },
  compiler: () => {
    let options = {}
    if (prod) {
      options['removeConsole'] = {
        exclude: ['error']
      }
    }
    return options
  },
  images: {
    domains: [
      'localhost',
      'lh3.googleusercontent.com'
    ]
  },
  async headers() {
    return [{
      // Apply these headers to all routes in your application.
      source: '/(.*)',
      headers: securityHeaders
    }]
  },
  webpack(config, {dev}) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

module.exports = withSentryConfig(nextConfig)
