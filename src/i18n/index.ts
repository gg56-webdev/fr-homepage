import i18next from 'i18next'
import type { AstroGlobal } from 'astro'
import { getRelativeLocaleUrl } from 'astro:i18n'

// Import translation files
import en from '../../public/locales/en/translation.json'
import ko from '../../public/locales/ko/translation.json'

export const defaultLocale = 'en'
export const locales = ['en', 'ko'] as const
export type Locale = (typeof locales)[number]

// Initialize i18next with all translations
const i18nInstance = i18next.createInstance()
i18nInstance.init({
  lng: defaultLocale,
  fallbackLng: defaultLocale,
  resources: {
    en: { translation: en },
    ko: { translation: ko },
  },
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
})

/**
 * Get a translator function for the given locale
 */
export function useTranslations(locale: Locale | string | undefined) {
  const lang = (locale && locales.includes(locale as Locale) ? locale : defaultLocale) as Locale

  // Clone the i18next instance and set language
  const instance = i18nInstance.cloneInstance({ lng: lang })

  return {
    t: instance.t.bind(instance),
    locale: lang,
  }
}

/**
 * Get the current locale from Astro context
 */
export function getLocale(Astro: AstroGlobal): Locale {
  // Astro.currentLocale is available with Astro's i18n routing
  const locale = Astro.currentLocale ?? Astro.params.lang
  return (locale && locales.includes(locale as Locale) ? locale : defaultLocale) as Locale
}

/**
 * Remove locale prefix from a path if present
 */
export function stripLocaleFromPath(path: string): string {
  for (const loc of locales) {
    if (path.startsWith(`/${loc}/`)) {
      return path.slice(loc.length + 1)
    } else if (path === `/${loc}`) {
      return '/'
    }
  }
  return path
}

/**
 * Localize a path for the given locale (replacement for astro-i18next's localizePath)
 */
export function localizePath(path: string, locale?: Locale | string): string {
  const lang = (locale && locales.includes(locale as Locale) ? locale : defaultLocale) as Locale
  // First strip any existing locale prefix, then add the new one
  const basePath = stripLocaleFromPath(path)
  return getRelativeLocaleUrl(lang, basePath)
}

/**
 * Get localized path using Astro context
 */
export function localizePathFromAstro(Astro: AstroGlobal, path: string): string {
  const locale = getLocale(Astro)
  return localizePath(path, locale)
}

/**
 * Get all locale URLs for hreflang tags
 */
export function getAlternateLocaleUrls(
  currentPath: string,
  site: URL | undefined,
): Array<{ locale: Locale; url: string }> {
  const siteUrl = site?.origin ?? 'https://www.fingerate.world'

  return locales.map((locale) => {
    const localizedPath = localizePath(currentPath, locale)
    return {
      locale,
      url: `${siteUrl}${localizedPath}`,
    }
  })
}

/**
 * Parse Trans-style markup like <0>text</0> and replace with provided elements
 * This is a simplified version - for complex cases, use the Trans component
 */
export function interpolateComponents(text: string, components: Record<number, (content: string) => string>): string {
  return text.replace(/<(\d+)>(.*?)<\/\1>/g, (_, index, content) => {
    const component = components[parseInt(index)]
    if (component) {
      // Recursively process nested tags
      const processedContent = interpolateComponents(content, components)
      return component(processedContent)
    }
    return content
  })
}
