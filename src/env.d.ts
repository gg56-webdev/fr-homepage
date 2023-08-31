/// <reference types="astro/client" />

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
