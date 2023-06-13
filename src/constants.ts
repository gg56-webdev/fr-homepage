export type Link = { name: string; href: string; isExternal: boolean; isImportant: boolean };
type LinksMap = Record<string, Link>;

export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.frs.fingerate';
export const APP_STORE_URL = 'https://apps.apple.com/app/fingerate/id6444853546';

export const NAV_LINKS: LinksMap = {
  HOME: { name: 'Home', href: '/', isExternal: false, isImportant: false },
  APP: { name: 'FingeRate App', href: '/app', isExternal: false, isImportant: false },
  TOKEN: { name: 'MSOT Token', href: '/token', isExternal: false, isImportant: false },
  BOT: { name: 'FingeRate Bot', href: '/bot', isExternal: false, isImportant: false },
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
} as const;

export const SOCIAL_LINKS: LinksMap = {
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
  TWITTER: { name: 'twitter', href: 'https://twitter.com/fingerate_kr', isExternal: true, isImportant: false },
  FACEBOOK: { name: 'facebook', href: 'https://www.facebook.com/FingeRate.kr', isExternal: true, isImportant: false },
  TELEGRAM: { name: 'telegram', href: 'https://t.me/fingerate_en', isExternal: true, isImportant: false },
};
