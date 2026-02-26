import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            Fan.Salon
          </Link>
          <nav>
            <span className="text-sm text-muted">導入事例</span>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-light to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Case Studies
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            導入事例
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Fan.Salonを活用してファンコミュニティを運営されている
            オーナー様の事例をご紹介します。
          </p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Hero Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cs.heroImage}
                  alt={cs.salonName}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                  {cs.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-light flex-shrink-0">
                    <Image
                      src={cs.avatarImage}
                      alt={cs.ownerName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">
                      {cs.ownerName}
                    </h3>
                    <p className="text-muted text-xs">{cs.ownerTitle}</p>
                  </div>
                </div>

                <h2 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {cs.salonName}
                </h2>

                {/* Highlight Keywords */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.highlightKeywords.map((kw) => (
                    <span
                      key={kw.label}
                      className="bg-primary-light text-primary text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {kw.label}
                    </span>
                  ))}
                </div>

                <p className="text-muted text-sm line-clamp-2">{cs.trigger}</p>

                <div className="mt-4 flex items-center text-primary text-sm font-medium">
                  詳しく見る
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

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
