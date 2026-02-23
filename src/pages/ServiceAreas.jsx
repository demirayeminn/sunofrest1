const areas = [
  {
    title: 'Oteller',
    description: 'Butik otellerden büyük ölçekli tesislere kadar konaklama işletmelerinin havuz, teras ve plaj alanları için şezlong, daybed, masa ve sandalye tedariki. Toplu sipariş ve proje bazlı fiyatlandırma.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=500&fit=crop',
  },
  {
    title: 'Plajlar',
    description: 'Belediye ve özel işletme plajları, plaj kulüpleri ve sahil tesisleri için dayanıklı, tuzlu suya ve güneşe dayanıklı şezlong, şemsiye ve sehpa çözümleri. Yoğun kullanıma uygun malzemeler.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop',
  },
  {
    title: 'Havuz & Spa',
    description: 'Havuz kenarı ve spa alanları için konforlu şezlonglar, daybed\'ler ve tamamlayıcı mobilyalar. Havlu dolabı ve duşluk sistemleri ile bütünleşik çözümler.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop',
  },
  {
    title: 'Resort & Tatil Köyleri',
    description: 'Tam pansiyon ve her şey dahil tesislerin açık alanlarında kullanılmak üzere geniş ürün yelpazesi. Kahvaltı ve snack alanları için masa-sandalye, plaj için şezlong ve daybed kombinasyonları.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop',
  },
  {
    title: 'Villa & Özel Projeler',
    description: 'Villa havuzları, site havuzları ve özel kullanım alanları için seçkin daybed ve şezlong modelleri. Sınırlı sayıda üretim ve özel renk/kumaş seçenekleri.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
  },
]

export default function ServiceAreas() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-sans text-sm font-medium tracking-[0.3em] uppercase text-terracotta mb-4">
          Hizmet Alanları
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight mb-6">
          Kimlere
          <br />
          <span className="italic text-terracotta">hizmet veriyoruz?</span>
        </h1>
        <p className="font-sans text-lg text-charcoal/70 max-w-2xl mb-16 leading-relaxed">
          Ürünlerimiz oteller, plajlar, havuz ve spa alanları, resort tesisleri ile villa ve özel projelere yöneliktir.
        </p>

        <div className="space-y-16 md:space-y-24">
          {areas.map((area, i) => (
            <article
              key={area.title}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
            >
              <div className={i % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="aspect-[4/3] overflow-hidden bg-sand-200">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-4">
                  {area.title}
                </h2>
                <p className="font-sans text-charcoal/80 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
