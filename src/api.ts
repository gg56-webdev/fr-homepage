import type { WP_REST_API_Post } from 'wp-types';

const WP_POSTS_API_URL = 'https://gg56.com/wp-json/wp/v2/posts';
const FINGERATE_CATEGORY_ID = '7';

export const getPosts = async (minimal = false) => {
  const wpUrl = new URL(`${WP_POSTS_API_URL}`);
  wpUrl.searchParams.set('categories', FINGERATE_CATEGORY_ID);
  if (minimal) {
    wpUrl.searchParams.set('_fields', 'id,slug');
  } else {
    wpUrl.searchParams.set('_fields', 'id,sticky,title,date,slug,_links.wp:featuredmedia,_links.wp:term');
    wpUrl.searchParams.set('_embed', 'wp:term,wp:featuredmedia');
  }

  const res = await fetch(wpUrl);
  const posts = (await res.json()) as Pick<
    WP_REST_API_Post,
    'id' | 'sticky' | 'title' | 'date' | 'slug' | '_embedded'
  >[];
  return posts;
};

export const getPost = async (id: WP_REST_API_Post['id']) => {
  const wpUrl = new URL(`${WP_POSTS_API_URL}/${id}`);
  wpUrl.searchParams.set('_fields', 'content,title,date,_links.wp:featuredmedia,_links.wp:term');
  wpUrl.searchParams.set('_embed', 'wp:term,wp:featuredmedia');

  const res = await fetch(wpUrl);
  const post = (await res.json()) as Pick<WP_REST_API_Post, 'content' | 'title' | 'date' | '_embedded'>;
  return post;
};
