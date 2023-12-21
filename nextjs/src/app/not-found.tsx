'use client'
import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'

export default function ErrorPage({
                                      error
                                  }: {
    error: Error & { digest?: string };
}) {
    useEffect(() => {
        // Log the error to Sentry
        Sentry.captureException(error)
    }, [ error ])

    return (
        <div>
            <h2>404 Not found (custom)</h2>
        </div>
    )
}
