import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Arka plan - sıcak gradient, minimal */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-sand-50 to-sand-200/50" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sea/5 rounded-full blur-3xl" />
      </div>

      {/* Güneş: metnin arkasında, merkezde, düşük opaklık */}
      <div className="hero-sun absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden>
        <div className="sun-rays">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="sun-ray"
              style={{ transform: `translateX(-50%) translateY(-100%) rotate(${i * 30}deg)` }}
            />
          ))}
        </div>
        <div className="sun-circle" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="font-sans text-sm font-medium tracking-[0.3em] uppercase text-terracotta mb-6">
          Antalya · Plaj & Otel Ekipmanları
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-charcoal leading-[1.1] tracking-tight mb-4">
          Güneşin Altında
          <br />
          <span className="text-terracotta italic">Konfor ve Dayanıklılık</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed mb-12">
          Oteller, plajlar ve resort projeleri için şezlong, daybed, masa ve premium plaj ekipmanları üretiyor ve tedarik ediyoruz. 
          Antalya merkezli ekibimizle Akdeniz kıyılarındaki seçkin tesislere uzun ömürlü açık alan çözümleri sunuyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <Link
            to="/urunler"
            className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-sand-50 font-sans text-sm font-medium tracking-wide hover:bg-sea transition-colors duration-200"
          >
            Ürün Kataloğu
          </Link>
          <Link
            to="/iletisim"
            className="inline-flex items-center justify-center px-8 py-4 border border-charcoal/30 text-charcoal font-sans text-sm font-medium tracking-wide hover:border-terracotta hover:text-terracotta transition-colors duration-200"
          >
            Teklif Al
          </Link>
          <a
            href="/katalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-terracotta/50 text-terracotta font-sans text-sm font-medium tracking-wide hover:bg-terracotta hover:text-sand-50 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Katalog İndir
          </a>
        </div>
      </div>

      {/* Scroll göstergesi */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-charcoal/30 to-transparent" />
      </div>
    </section>
  )
}
