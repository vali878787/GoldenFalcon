import { article as sulphurArticle } from "./how-to-import-granular-sulphur";
import { article as en590Article } from "./en590-10ppm-diesel";

export const posts = [sulphurArticle, en590Article];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
