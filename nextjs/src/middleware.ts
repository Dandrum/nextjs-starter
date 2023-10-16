import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLang, langCookie, languages } from '@/utils/i18/i18n'

acceptLanguage.languages(languages)

export const config = {
    // matcher: '/:lng*'
    matcher: [ '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)' ]
}

export function middleware(req:NextRequest): NextResponse {
    let lng
    if (req.cookies.has(langCookie)) {
        // @ts-ignore
        const { value } = req.cookies.get(langCookie)
        lng = acceptLanguage.get(value)
    }
    if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
    if (!lng) lng = fallbackLang

    // Redirect if lng in path is not supported
    if (
        !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
        !req.nextUrl.pathname.startsWith('/_next')
    ) {
        return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
    }

    if (req.headers.has('referer')) {
        const refererUrl = new URL(req.headers.get('referer') ?? '')
        const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
        const response = NextResponse.next()
        if (lngInReferer) response.cookies.set(langCookie, lngInReferer)
        return response
    }

    return NextResponse.next()
}
