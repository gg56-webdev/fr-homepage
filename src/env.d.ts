/// <reference types="astro/client-image" />

declare global {
  type Person = {
    name: string;
    subtitles: string[];
    socials?: string[];
    titles?: string[];
    bio?: string;
    articles?: { href: string; title: string }[];
  };
}

export {};
