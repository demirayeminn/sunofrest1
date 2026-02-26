export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-sans text-sm font-medium tracking-[0.3em] uppercase text-terracotta mb-4">
          İletişim
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight mb-12">
          Projeniz için
          <br />
          <span className="italic text-terracotta">bizimle iletişime geçin</span>
        </h1>

        <p className="font-sans text-lg text-charcoal/80 leading-relaxed mb-16 max-w-2xl">
          Otel, plaj veya resort projeniz için ürün kataloğu, fiyat teklifi veya katalog indirme talebi için aşağıdaki kanallardan ulaşabilirsiniz.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="border border-sand-200 bg-white p-8">
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-4">
              Adres
            </h2>
            <address className="font-sans text-charcoal/80 not-italic leading-relaxed">
              Antalya, Türkiye
            </address>
          </div>

          <div className="border border-sand-200 bg-white p-8">
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-4">
              İletişim bilgileri
            </h2>
            <ul className="font-sans text-charcoal/80 space-y-3">
              <li>
                <a href="mailto:info@sunofrest.com" className="text-terracotta hover:underline">
                  info@sunofrest.com
                </a>
              </li>
              <li>
                <a href="tel:+905541488700" className="text-charcoal hover:underline">
                  +90 (554) 148 87 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-terracotta/30 bg-sand-100/50 p-8 md:p-10">
          <h2 className="font-serif text-xl font-semibold text-charcoal mb-2">
            Katalog ve teklif
          </h2>
          <p className="font-sans text-charcoal/80 mb-6">
            Ürün kataloğumuzu PDF olarak indirmek veya projenize özel fiyat teklifi almak için e-posta veya telefon ile iletişime geçin.
          </p>
          <a
            href="/katalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta text-sand-50 font-sans text-sm font-medium tracking-wide hover:bg-terracotta-dark transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Katalog İndir
          </a>
        </div>
      </div>
    </div>
  )
}
