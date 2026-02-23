import { Link } from 'react-router-dom'

const highlights = [
  { value: '15+', label: 'Yıllık deneyim' },
  { value: '200+', label: 'Tamamlanan proje' },
  { value: '50+', label: 'Şezlong ve daybed modeli' },
]

export default function References() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-sans text-sm font-medium tracking-[0.3em] uppercase text-terracotta mb-4">
          Referanslar
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight mb-12">
          Güven Veren
          <br />
          <span className="italic text-terracotta">Proje Deneyimi</span>
        </h1>

        <p className="font-sans text-lg text-charcoal/80 leading-relaxed mb-16">
          Antalya ve Ege bölgesindeki otel, plaj ve resort projelerinde tedarikçi olarak yer aldık. 
          Referans projelerinizi paylaşmak ve yeni iş birlikleri için sizinle çalışmak istiyoruz.
        </p>

        <div className="grid grid-cols-3 gap-8 mb-20">
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-semibold text-terracotta mb-1">
                {item.value}
              </p>
              <p className="font-sans text-sm text-charcoal/70">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="border border-sand-200 bg-white p-8 md:p-12">
          <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
            Referans olmak ister misiniz?
          </h2>
          <p className="font-sans text-charcoal/80 leading-relaxed mb-6">
            Tamamladığımız projelerde kullandığımız ürünler ve teslimat süreçleri hakkında bilgi almak
            veya kendi projenizi referans olarak eklemek için bizimle iletişime geçin. Web sitemizde ve
            basılı kataloglarımızda referans projelerinizi paylaşabiliriz.
          </p>
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-terracotta hover:underline"
          >
            İletişime geçin
            <span>→</span>
          </Link>
        </div>

        <p className="mt-12 font-sans text-sm text-charcoal/60">
          Detaylı referans listesi ve proje görselleri için info@sunofrest.com adresinden talepte bulunabilirsiniz.
        </p>
      </div>
    </div>
  )
}
