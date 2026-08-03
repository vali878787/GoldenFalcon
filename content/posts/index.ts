import { article as sulphurArticle } from "./how-to-import-granular-sulphur";
import { article as en590Article } from "./en590-10ppm-diesel";
import { article as ureaArticle } from "./global-urea-market-guide";
import { article as metalArticle } from "./gold-precious-metals-market-2026";
import { article as croudoilArticle } from "./crude-oil-market-trends-2026-gulf-trading";



export const posts = [sulphurArticle, en590Article, ureaArticle, metalArticle, croudoilArticle];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
