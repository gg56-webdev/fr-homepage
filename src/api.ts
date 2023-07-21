import type { WP_REST_API_Post } from "wp-types";

const WP_URL = "https://gg56.com";
const WP_POSTS_API_ENDPOINT = "wp-json/wp/v2/posts";
const FINGERATE_CATEGORY_ID = "7";
const ENGLISH_TAG = "107";
const KOREAN_TAG = "110";
const LIMIT = "100";

export const getPosts = async (lang: "en" | "ko" = "en", minimal = false) => {
  const wpUrl = new URL(`${WP_URL}/${lang}/${WP_POSTS_API_ENDPOINT}`);
  wpUrl.searchParams.set("categories", FINGERATE_CATEGORY_ID);
  wpUrl.searchParams.set("tags", lang === "en" ? ENGLISH_TAG : KOREAN_TAG);
  wpUrl.searchParams.set("per_page", LIMIT);
  if (minimal) {
    wpUrl.searchParams.set("_fields", "id,slug");
  } else {
    wpUrl.searchParams.set(
      "_fields",
      "link,id,sticky,title,excerpt,date,slug,_links.wp:featuredmedia,_links.wp:term"
    );
    wpUrl.searchParams.set("_embed", "wp:term,wp:featuredmedia");
  }

  const res = await fetch(wpUrl);
  const posts = (await res.json()) as Pick<
    WP_REST_API_Post,
    "id" | "sticky" | "title" | "date" | "slug" | "_embedded" | "excerpt" | "link"
  >[];
  return posts;
};

export const getPost = async (
  id: WP_REST_API_Post["id"],
  lang: "en" | "ko" = "en"
) => {
  const wpUrl = new URL(`${WP_URL}/${lang}/${WP_POSTS_API_ENDPOINT}/${id}`);
  wpUrl.searchParams.set(
    "_fields",
    "content,title,date,_links.wp:featuredmedia,_links.wp:term"
  );
  wpUrl.searchParams.set("_embed", "wp:term,wp:featuredmedia");

  const res = await fetch(wpUrl);
  const post = (await res.json()) as Pick<
    WP_REST_API_Post,
    "content" | "title" | "date" | "_embedded"
  >;
  return post;
};
