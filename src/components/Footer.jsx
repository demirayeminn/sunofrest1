import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-sand-200">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <Link to="/" className="font-serif text-2xl font-semibold text-sand-50 block mb-4">
              Sun of Rest
            </Link>
            <p className="font-sans text-sm text-sand-200/80 leading-relaxed max-w-sm mb-6">
              Antalya merkezli plaj ve otel ekipmanları tedarikçisi. 
              Şezlong, daybed, masa ve premium açık alan mobilyaları sunar.
            </p>
            <a
              href="https://sunofrest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-terracotta-light hover:text-terracotta transition-colors"
            >
              sunofrest.com
            </a>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-sand-200/60 mb-4">
              Sayfalar
            </h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="font-sans text-sm font-medium text-sand-200 hover:text-sand-50 transition-colors">
                Ana Sayfa
              </Link>
              <Link to="/hakkimizda" className="font-sans text-sm font-medium text-sand-200 hover:text-sand-50 transition-colors">
                Hakkımızda
              </Link>
              <Link to="/urunler" className="font-sans text-sm font-medium text-sand-200 hover:text-sand-50 transition-colors">
                Ürünler
              </Link>
              <Link to="/hizmet-alanlari" className="font-sans text-sm font-medium text-sand-200 hover:text-sand-50 transition-colors">
                Hizmet Alanları
              </Link>
              <Link to="/referanslar" className="font-sans text-sm font-medium text-sand-200 hover:text-sand-50 transition-colors">
                Referanslar
              </Link>
              <Link to="/iletisim" className="font-sans text-sm font-medium text-sand-200 hover:text-sand-50 transition-colors">
                İletişim
              </Link>
            </nav>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-sand-200/60 mb-4">
              İletişim
            </h3>
            <address className="font-sans text-sm not-italic space-y-2">
              <p>Antalya, Türkiye</p>
              <a href="mailto:info@sunofrest.com" className="block text-terracotta-light hover:text-terracotta transition-colors">
                info@sunofrest.com
              </a>
              <a href="tel:+905541488700" className="block text-sand-200 hover:text-sand-50 transition-colors">
                +90 (554) 148 87 00
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-sand-200/60">
            © {new Date().getFullYear()} Sun of Rest. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
