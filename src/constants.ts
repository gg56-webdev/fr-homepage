export type Link = { name: string; href: string; isExternal: boolean; isImportant: boolean }

export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.frs.fingerate'
export const APP_STORE_URL = 'https://apps.apple.com/app/fingerate/id6444853546'
export const DOWNLOAD_LINK = 'http://qrco.de/bdrZNx'
export const COINGECKO_LINK = 'https://www.coingecko.com/en/coins/btour-chain'

export const NAV_LINKS = {
  HOME: { name: 'Home', href: '/', isExternal: false, isImportant: false },
  APP: { name: 'FingeRate App', href: '/', isExternal: false, isImportant: false },
  TOKEN: { name: 'MSOT Token', href: '/token', isExternal: false, isImportant: false },
  BOT: { name: 'FingeRate Bot', href: '/bot', isExternal: false, isImportant: false },
  NEWS: { name: 'News', href: '/news', isExternal: false, isImportant: false },
  TEAM: { name: 'Team', href: '/team', isExternal: false, isImportant: false },
  WHITEPAPER: {
    name: 'Whitepaper',
    href: 'https://fingerate.gitbook.io/fingerate-whitepaper-v3.1/',
    isExternal: true,
    isImportant: false,
  },
  CONTACT: { name: 'Contact', href: '/contact', isExternal: false, isImportant: false },
  PRIVACY: {
    name: 'Privacy Policy',
    // href: '/privacy-policy',
    href: 'https://fingerate.gitbook.io/fingerate-personal-information-processing-policy/',
    isExternal: true,
    isImportant: false,
  },
  TERMS: { name: 'Terms of Use', href: '/terms-of-use', isExternal: false, isImportant: false },
  FAQ: { name: 'FAQ', href: '/faq', isExternal: false, isImportant: false },
  GUIDE: {
    name: 'User Guide',
    href: 'https://fingerate.gitbook.io/fingerate-app-user-guide/',
    isExternal: true,
    isImportant: false,
  },
  HOW_IT_WORKS: { name: 'How It Works', href: '/how-it-works', isExternal: false, isImportant: false },
  REDEEM_COUPON: { name: 'Redeem a Coupon', href: '/faq#how-to-use-coupon', isExternal: false, isImportant: false },
  BUSINESSES: { name: 'For Businesses', href: 'https://www.gg56.com', isExternal: true, isImportant: false },
  MISSIONS: { name: 'MISSIONS', href: '/missions', isExternal: false, isImportant: false },
} as const

export const SOCIAL_LINKS = {
  INSTAGRAM: {
    name: 'instagram',
    href: 'https://www.instagram.com/fingerate_kr',
    isExternal: true,
    isImportant: false,
  },
  LINKEDIN: {
    name: 'linkedin',
    href: 'https://www.linkedin.com/company/fingerate',
    isExternal: true,
    isImportant: false,
  },
  X: { name: 'X', href: 'https://twitter.com/fingerate_msot', isExternal: true, isImportant: false },
  FACEBOOK: {
    name: 'facebook',
    href: 'https://www.facebook.com/profile.php?id=61557866274126',
    isExternal: true,
    isImportant: false,
  },
  MEDIUM: { name: 'medium', href: 'https://fingerate.medium.com/', isExternal: true, isImportant: false },
  TELEGRAM: {
    name: 'telegram',
    href: (lang: string) => `https://t.me/fingerate_${lang === 'ko' ? 'kr' : 'en'}`,
    isExternal: true,
    isImportant: false,
  },
  YOUTUBE: {
    name: 'youtube',
    href: 'https://www.youtube.com/@fingerate_kr',
    isExternal: true,
    isImportant: false,
  },
} as const

export const CALENDLY = 'https://calendly.com/gg56world/fingerate-solutions'
