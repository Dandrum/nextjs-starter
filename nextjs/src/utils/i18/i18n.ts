export const langCookie = 'selected_language'
export const defaultNS = 'translation'
export const fallbackLang = 'de'
export const languages = [ fallbackLang, 'en' ]

export function getOptions (lng = fallbackLang, ns = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLang,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
}
