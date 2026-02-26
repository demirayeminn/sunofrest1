export default function Contact() {
  return (
    <section id="iletisim" className="py-24 md:py-32 bg-sand-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm font-medium tracking-[0.3em] uppercase text-terracotta mb-4">
            İletişim
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal leading-tight mb-6">
            Projeniz İçin
            <br />
            <span className="italic text-terracotta">Teklif Alın</span>
          </h2>
          <p className="font-sans text-charcoal/70 mb-12 max-w-xl mx-auto">
            Otel, plaj veya resort projeleriniz için ürün kataloğu ve fiyat teklifi almak üzere bizimle iletişime geçebilirsiniz. 
            Detaylı bilgi için{' '}
            <a href="/iletisim" className="text-terracotta font-medium hover:underline">İletişim sayfamıza</a> göz atın.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
            <a
              href="mailto:info@sunofrest.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-sand-50 font-sans text-sm font-medium tracking-wide hover:bg-sea transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@sunofrest.com
            </a>
            <a
              href="tel:+905541488700"
              className="inline-flex items-center gap-3 px-8 py-4 border border-charcoal/30 text-charcoal font-sans text-sm font-medium tracking-wide hover:border-terracotta hover:text-terracotta transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +90 (554) 148 87 00
            </a>
          </div>

          <p className="mt-8 font-sans text-sm text-charcoal/50">
            Antalya, Türkiye
          </p>
          <a
            href="/katalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-terracotta hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Katalog İndir
          </a>
        </div>
      </div>
    </section>
  )
}
