import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ArticleSection from "@/components/ArticleSection";
import Footer from "@/components/Footer";
import RawArticleContent from "@/components/RawArticleContent";
import { getPostBySlug } from "@/content/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

type ArticleHeader = {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  heroImage: string;
  cta: { title: string; description: string };
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article = getPostBySlug(slug);

  if (!article) notFound();

  if ("rawContent" in article) {
    return <RawArticlePage article={article} />;
  }

  return <StandardArticlePage article={article} />;
}

function ArticleHero({ article }: { article: ArticleHeader }) {
  const hasLongTitle = article.title.length > 75;

  return (
    <section className="max-w-7xl mx-auto px-6 pt-20">
      <div className="relative min-h-130 md:min-h-140 rounded-3xl overflow-hidden">
        <Image src={article.heroImage} fill priority alt={article.title} className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/70 to-transparent" />
        <div className="absolute left-0 top-0 h-full w-full md:w-2/3 flex flex-col justify-end px-8 pb-12 pt-28 md:px-16 md:pb-16 md:pt-32">
          <span className="absolute left-8 top-8 md:left-16 md:top-10 bg-[#D4AF37] text-white px-4 py-2 rounded-full w-fit text-sm font-semibold">
            {article.category}
          </span>
          <h1 className={`${hasLongTitle ? "text-3xl md:text-4xl lg:text-5xl" : "text-3xl md:text-6xl"} font-bold text-[#0F2E4D] leading-tight`}>
            {article.title}
          </h1>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-gray-700 leading-7 md:leading-8">{article.description}</p>
          <div className="mt-8 text-sm text-gray-600 flex gap-4">
            <span>{article.date}</span><span>•</span><span>{article.readTime}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

async function ArticleCta({
  article,
}: {
  article: ArticleHeader;
}) {
  const t = await getTranslations("articlePage");


  return (
    <section className="max-w-5xl mx-auto px-6 pb-24">
      <div className="bg-[#0F2E4D] rounded-3xl p-10 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-5">{article.cta.title}</h3>
        <p className="text-gray-200 text-base md:text-lg leading-7 md:leading-8">{article.cta.description}</p>
        <Link href="/#contact" className="inline-block mt-8 bg-[#D4AF37] hover:bg-[#b8962f] transition text-white px-10 py-4 rounded-xl font-semibold">
          {t("contactButton")}
        </Link>
      </div>
    </section>
  );
}

async function RawArticlePage({ article }: { article: ArticleHeader & { rawContent: string } }) {
  return (
    <>
      <main className="relative min-h-screen bg-white overflow-hidden">
        <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
          <img
            src="/LOGO-WATERMARK.png"
            alt=""
            className="w-[60vw] max-w-175 opacity-[0.08] select-none"
          />
        </div>
        <div className="relative z-10">
          <ArticleHero article={article} />
          <section className="max-w-5xl mx-auto px-6 py-20">
            <RawArticleContent content={article.rawContent} />
          </section>
          {await ArticleCta({ article })}
        </div>
      </main>
      <Footer />
    </>
  );
}

type Section = { title: string; text: string };
type StandardArticle = ArticleHeader & {
  content: { introduction: string; conclusion: string; [key: string]: string | Section };
  images: Record<string, string>;
};

async function StandardArticlePage({ article }: { article: StandardArticle }) {
  const t = await getTranslations("articlePage");

  const sections = Object.entries(article.content).filter(
    (entry): entry is [string, Section] => entry[0].startsWith("section") && typeof entry[1] === "object",
  );

  return (
    <>
      <main className="min-h-screen bg-white overflow-hidden">
        <ArticleHero article={article} />
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="border-l-4 border-[#D4AF37] pl-5 md:pl-8 whitespace-pre-line text-gray-700 text-base md:text-lg leading-7 md:leading-8 text-justify">
            {article.content.introduction}
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 space-y-24">
          {sections.map(([key, section], index) => (
            <ArticleSection key={key} title={section.title} text={section.text} image={article.images[`image${index + 1}`]} />
          ))}
        </section>
        <section className="max-w-5xl mx-auto px-6 py-24">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2E4D] mb-6">{t("conclusion")}</h2>
            <div className="whitespace-pre-line text-gray-700 text-base md:text-lg leading-7 md:leading-8 text-justify">{article.content.conclusion}</div>
          </div>
        </section>
        {await ArticleCta({ article })}
      </main>
      <Footer />
    </>
  );
}