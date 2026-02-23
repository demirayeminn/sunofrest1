import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-sans text-sm font-medium tracking-[0.3em] uppercase text-terracotta mb-4">
          Hakkımızda
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight mb-12">
          Akdeniz’in Plaj ve Otel
          <br />
          <span className="italic text-terracotta">Ekipman Ortağı</span>
        </h1>

        <div className="prose prose-lg font-sans text-charcoal/85 leading-relaxed space-y-8">
          <p>
            Sun of Rest, Antalya merkezli olarak otel, plaj, resort ve spa projeleri için şezlong, daybed, masa, sandalye 
            ve tamamlayıcı dış mekân ekipmanları tedarik eden bir markadır. Açık alan deneyimini güçlendiren dayanıklı, 
            estetik ve uzun ömürlü ürün çözümleri sunar.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mt-12 mb-4">
            Misyonumuz
          </h2>
          <p>
            Otel ve plaj yöneticilerinin ihtiyaç duyduğu profesyonel dış mekân ekipmanlarını tek noktadan sunmak; 
            teslimat, montaj ve satış sonrası destek ile sürdürülebilir iş birlikleri kurmaktır.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mt-12 mb-4">
            Neden Sun of Rest?
          </h2>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex gap-3">
              <span className="text-terracotta shrink-0">—</span>
              <span><strong>Geniş ürün yelpazesi:</strong> Şezlong, sehpa, masa, sandalye, duşluk, havluluk ve daybed çözümleri.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta shrink-0">—</span>
              <span><strong>Bölgeye uygun üretim:</strong> Antalya ve Ege sahillerine uygun UV ve tuzlu su dayanımlı malzemeler.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta shrink-0">—</span>
              <span><strong>Esnek çözümler:</strong> Proje bazlı fiyatlandırma, toplu alım ve özel üretim seçenekleri.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta shrink-0">—</span>
              <span><strong>Referans odaklı çalışma:</strong> Otel ve plaj projeleriyle büyüyen iş ortaklıkları.</span>
            </li>
          </ul>

          <p className="mt-12">
            Ürün kataloğumuzu incelemek veya projeniz için teklif almak için{' '}
            <Link to="/urunler" className="text-terracotta font-medium hover:underline">Ürünler</Link>
            {' '}ve{' '}
            <Link to="/iletisim" className="text-terracotta font-medium hover:underline">İletişim</Link>
            {' '}sayfalarımızdan bize ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  )
}
