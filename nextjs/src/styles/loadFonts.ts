import localFont from 'next/font/local'

export const OpenSans = localFont({
    src: [
        {
            path: './fonts/open-sans-v16-latin-300.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/open-sans-v16-latin-600.woff2',
            weight: '600',
            style: 'italic',
        },
        {
            path: './fonts/open-sans-v16-latin-700.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/open-sans-v16-latin-regular.woff2',
            weight: '400',
            style: 'italic',
        },
    ],
    display: 'swap',
    preload: true
})