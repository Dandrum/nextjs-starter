import { NextRequest, NextResponse } from 'next/server'
import settings from '@/utils/i18/settings'
import { i18nRouter } from 'next-i18n-router'

export const config = {
    // matcher: '/:lng*'
    matcher: [ '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)' ]
}

export function middleware(req:NextRequest): NextResponse {
    return i18nRouter(req, settings)
}
