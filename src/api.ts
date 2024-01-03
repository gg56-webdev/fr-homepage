import type { WP_REST_API_Post } from 'wp-types';
import EleventyFetch from '@11ty/eleventy-fetch';
import i18next from 'i18next';

const WP_URL = 'https://gg56.com';
const WP_POSTS_API_ENDPOINT = 'wp-json/wp/v2/posts';
const FINGERATE_CATEGORY_ID = '7';
const ENGLISH_TAG = '107';
const KOREAN_TAG = '110';

type GetPostBaseOptions = {
  lang?: typeof i18next.language;
};

type GetPostsOptions = {
  minimal?: boolean;
  limit?: number;
} & GetPostBaseOptions;

export const getPosts = async ({ lang = 'en', limit = 100, minimal = false }: GetPostsOptions) => {
  const wpUrl = new URL(`${WP_URL}/${lang}/${WP_POSTS_API_ENDPOINT}`);
  wpUrl.searchParams.set('categories', FINGERATE_CATEGORY_ID);
  wpUrl.searchParams.set('tags', lang === 'ko' ? KOREAN_TAG : ENGLISH_TAG);
  wpUrl.searchParams.set('per_page', limit.toString());

  let fields = 'id,slug,link';
  if (!minimal) {
    fields += ',sticky,title,excerpt,date,_links.wp:featuredmedia,_links.wp:term';
    wpUrl.searchParams.set('_embed', 'wp:term,wp:featuredmedia');
  }
  wpUrl.searchParams.set('_fields', fields);
  const res = await EleventyFetch(wpUrl.toString(), {
    duration: '1h',
    type: 'json',
  });
  return res as Pick<
    WP_REST_API_Post,
    'id' | 'sticky' | 'title' | 'date' | 'slug' | '_embedded' | 'excerpt' | 'link'
  >[];
};

type GetPostOptions = {
  id: WP_REST_API_Post['id'];
} & GetPostBaseOptions;

export const getPost = async ({ id, lang = 'en' }: GetPostOptions) => {
  const wpUrl = new URL(`${WP_URL}/${lang}/${WP_POSTS_API_ENDPOINT}/${id}`);
  wpUrl.searchParams.set('_fields', 'content,title,date,_links.wp:featuredmedia,_links.wp:term');
  wpUrl.searchParams.set('_embed', 'wp:term,wp:featuredmedia');

  const res = await EleventyFetch(wpUrl.toString(), {
    duration: '1h',
    type: 'json',
  });
  return res as Pick<WP_REST_API_Post, 'content' | 'title' | 'date' | '_embedded'>;
};
