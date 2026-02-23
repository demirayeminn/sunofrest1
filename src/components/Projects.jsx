export default function Projects() {
  return (
    <section id="projeler" className="py-24 md:py-32 bg-charcoal text-sand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <p className="font-sans text-sm font-medium tracking-[0.3em] uppercase text-terracotta-light mb-4">
              Referanslar
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">
              Güven Veren
              <br />
              <span className="italic text-terracotta-light">Proje Deneyimi</span>
            </h2>
            <p className="font-sans text-sand-200 mt-6 text-sm leading-relaxed">
              Antalya ve çevresindeki otel, plaj ve resort projelerinde tedarikçi olarak yer aldık. 
              Dış mekân ekipmanlarımızla projelerinize değer katan, uzun soluklu iş birlikleri kuruyoruz.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-white/10 p-10 md:p-12">
              <p className="font-sans text-sand-200/90 leading-relaxed mb-6">
                Siz de projenizi referanslarımız arasında görmek isterseniz bizimle iletişime geçin. 
                Web sitemizde ve basılı kataloglarımızda projenizi yayınlayabiliriz.
              </p>
              <a
                href="/referanslar"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-terracotta-light hover:text-terracotta transition-colors"
              >
                Referanslar Sayfası
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
