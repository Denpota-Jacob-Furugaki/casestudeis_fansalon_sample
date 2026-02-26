import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Not Found" };
  return {
    title: `${cs.salonName} - 導入事例 | Fan.Salon`,
    description: cs.trigger,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const otherStudies = caseStudies.filter((c) => c.slug !== slug);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            Fan.Salon
          </Link>
          <nav className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              導入事例
            </Link>
            <span>/</span>
            <span className="text-foreground">{cs.ownerName}</span>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <Image
          src={cs.heroImage}
          alt={cs.salonName}
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-primary text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
              {cs.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
              {cs.salonName}
            </h1>
            <p className="text-white/80 text-sm md:text-base">
              {cs.ownerName} / {cs.ownerTitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Metadata Bar */}
        <div className="flex flex-wrap gap-6 p-6 bg-card-bg rounded-2xl border border-border mb-12">
          <div>
            <p className="text-xs text-muted mb-1">カテゴリ</p>
            <p className="text-sm font-medium">{cs.category}</p>
          </div>
          <div>
            <p className="text-xs text-muted mb-1">開始時期</p>
            <p className="text-sm font-medium">{cs.startedYear}</p>
          </div>
          <div>
            <p className="text-xs text-muted mb-1">月額料金</p>
            <p className="text-sm font-medium">{cs.price}</p>
          </div>
          <div className="ml-auto">
            <a
              href={cs.salonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
            >
              サロンページを見る
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Highlight Cards */}
        <section className="mb-16">
          <h2 className="text-xs text-primary font-medium tracking-widest uppercase mb-2">
            Highlights
          </h2>
          <h3 className="text-2xl font-bold text-foreground mb-8">
            このサロンのポイント
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cs.highlightKeywords.map((kw, i) => (
              <div
                key={kw.label}
                className="relative p-6 bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {kw.label}
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {kw.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Trigger Section */}
        <section className="mb-16">
          <h2 className="text-xs text-primary font-medium tracking-widest uppercase mb-2">
            Story
          </h2>
          <h3 className="text-2xl font-bold text-foreground mb-8">
            サロンを始めたきっかけ
          </h3>
          <div className="bg-primary-light rounded-2xl p-8 md:p-10">
            <blockquote className="text-lg md:text-xl font-medium text-foreground leading-relaxed mb-6 relative">
              <span className="text-primary text-4xl font-serif absolute -top-2 -left-2">
                &ldquo;
              </span>
              <span className="ml-6">{cs.trigger}</span>
              <span className="text-primary text-4xl font-serif">
                &rdquo;
              </span>
            </blockquote>
            <p className="text-muted leading-relaxed">{cs.triggerDetail}</p>
          </div>
        </section>

        {/* Good Points */}
        <section className="mb-16">
          <h2 className="text-xs text-primary font-medium tracking-widest uppercase mb-2">
            Benefits
          </h2>
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Fan.Salonを使ってよかったポイント
          </h3>
          <div className="space-y-6">
            {cs.goodPoints.map((point, i) => (
              <div
                key={point.keyword}
                className="flex gap-6 items-start p-6 rounded-2xl border border-border hover:bg-card-bg transition-colors"
              >
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-lg">{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">
                    {point.keyword}
                  </h4>
                  <p className="text-muted leading-relaxed">{point.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interview Q&A Section */}
        <section className="mb-16">
          <h2 className="text-xs text-primary font-medium tracking-widest uppercase mb-2">
            Interview
          </h2>
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-2xl font-bold text-foreground">
              オーナーインタビュー
            </h3>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">
              {cs.interview.patternLabel}
            </span>
          </div>
          <p className="text-muted mb-10">{cs.interview.patternDescription}</p>
          <div className="space-y-8">
            {cs.interview.items.map((qa, i) => (
              <div key={i} className="relative">
                {/* Question */}
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    Q{i + 1}
                  </div>
                  <h4 className="font-bold text-foreground text-lg pt-1.5">
                    {qa.question}
                  </h4>
                </div>
                {/* Answer */}
                <div className="flex gap-4 items-start ml-0 md:ml-14">
                  <div className="hidden md:flex w-10 h-10 rounded-full overflow-hidden border-2 border-primary-light flex-shrink-0">
                    <Image
                      src={cs.avatarImage}
                      alt={cs.ownerName}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-card-bg rounded-2xl p-6 flex-1 border border-border">
                    <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                      {qa.answer}
                    </p>
                  </div>
                </div>
                {/* Divider */}
                {i < cs.interview.items.length - 1 && (
                  <div className="border-b border-border mt-8" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Owner Quote */}
        <section className="mb-16">
          <div className="bg-foreground text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20 flex-shrink-0">
              <Image
                src={cs.avatarImage}
                alt={cs.ownerName}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-4">
                &ldquo;{cs.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-bold">{cs.ownerName}</p>
                <p className="text-white/60 text-sm">{cs.ownerTitle}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Owner Profile */}
        <section className="mb-16">
          <h2 className="text-xs text-primary font-medium tracking-widest uppercase mb-2">
            Profile
          </h2>
          <h3 className="text-2xl font-bold text-foreground mb-8">
            オーナープロフィール
          </h3>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
              <Image
                src={cs.avatarImage}
                alt={cs.ownerName}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-xl text-foreground mb-1">
                {cs.ownerName}
              </h4>
              <p className="text-primary text-sm font-medium mb-4">
                {cs.ownerTitle}
              </p>
              <p className="text-muted leading-relaxed">{cs.ownerBio}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 text-center">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-10 md:p-14">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
              あなたもFan.Salonで
              <br />
              コミュニティを始めませんか？
            </h3>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              LINEベースだから、ファンも運営者も手軽にスタート。
              あなただけのファンコミュニティを今すぐ作れます。
            </p>
            <a
              href="https://www.fan.salon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              Fan.Salonを詳しく見る
            </a>
          </div>
        </section>

        {/* Other Case Studies */}
        {otherStudies.length > 0 && (
          <section>
            <h2 className="text-xs text-primary font-medium tracking-widest uppercase mb-2">
              More Stories
            </h2>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              他の導入事例
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherStudies.map((other) => (
                <Link
                  key={other.slug}
                  href={`/case-studies/${other.slug}`}
                  className="group flex gap-4 items-center p-4 rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={other.heroImage}
                      alt={other.salonName}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-primary font-medium">
                      {other.category}
                    </span>
                    <h4 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors truncate">
                      {other.salonName}
                    </h4>
                    <p className="text-muted text-xs mt-1">
                      {other.ownerName}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-muted ml-auto flex-shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card-bg">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <p className="text-muted text-sm">
            &copy; 2026 Fan.Salon - 導入事例サンプルページ
          </p>
        </div>
      </footer>
    </main>
  );
}
