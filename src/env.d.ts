/// <reference types="astro/client" />

declare module '@11ty/eleventy-fetch';

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
