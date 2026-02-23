import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'sezlong',
    title: 'Şezlong Modelleri',
    description: 'Plaj ve havuz kenarına uygun, UV dayanımlı ve uzun ömürlü şezlong modelleri',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
  },
  {
    id: 'sehpa',
    title: 'Şezlong Sehpa Modelleri',
    description: 'Şezlonglarla uyumlu, dış mekâna dayanıklı sehpa tasarımları',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
  },
  {
    id: 'masa',
    title: 'Masa Çeşitleri',
    description: 'Otel restoranları ve açık alan kullanımı için profesyonel masa modelleri',
    image: 'https://images.unsplash.com/photo-1555041469-586f2148af8e?w=600&h=400&fit=crop',
  },
  {
    id: 'sandalye',
    title: 'Sandalye Çeşitleri',
    description: 'Yoğun kullanıma uygun ergonomik açık alan sandalyeleri',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=400&fit=crop',
  },
  {
    id: 'dusluk',
    title: 'Duşluklar',
    description: 'Plaj ve havuz alanları için paslanmaz dış mekân duş sistemleri',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
  },
  {
    id: 'havluluk',
    title: 'Havluluklar',
    description: 'Spa ve havuz alanları için düzenleyici havluluk sistemleri',
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=400&fit=crop',
  },
  {
    id: 'daybed',
    title: 'Daybed Modelleri',
    description: 'Lüks otel ve villa projeleri için premium daybed çözümleri',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
  },
]

export default function Products() {
  return (
    <section id="urunler" className="py-24 md:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <p className="font-sans text-sm font-medium tracking-[0.3em] uppercase text-terracotta mb-4">
            Ürün Kataloğu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight">
            Akdeniz’e Uygun
            <br />
            <span className="italic text-terracotta">Profesyonel Dış Mekân Çözümleri</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to="/urunler"
              className="group block"
            >
              <article className="h-full border border-sand-200 bg-white overflow-hidden transition-all duration-300 hover:border-terracotta/30 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-sand-100">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8 md:p-10">
                  <span className="font-sans text-xs font-medium tracking-widest text-charcoal/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mt-2 mb-4 group-hover:text-terracotta transition-colors">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-charcoal/70 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 font-sans text-sm font-medium text-terracotta">
                    <span>Detaylar</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
