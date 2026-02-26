import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Ana Sayfa' },
    { to: '/hakkimizda', label: 'Hakkımızda' },
    { to: '/urunler', label: 'Ürünler' },
    { to: '/hizmet-alanlari', label: 'Hizmet Alanları' },
    { to: '/referanslar', label: 'Referanslar' },
    { to: '/iletisim', label: 'İletişim' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-sand-50/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="font-serif text-[28px] md:text-[34px] font-semibold text-charcoal tracking-tight shrink-0 leading-none"
          onClick={closeMenu}
        >
          Sun of Rest
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-sans text-[15px] font-medium text-charcoal/80 hover:text-terracotta transition-colors tracking-wide"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href="/katalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-terracotta text-sand-50 font-sans text-[15px] font-medium tracking-wide hover:bg-terracotta-dark transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Katalog İndir
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 -mr-2"
          aria-label="Menü"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-charcoal transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-charcoal transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-charcoal transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-sand-50 border-t border-sand-200 py-6 px-6 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="font-sans text-xl font-medium text-charcoal hover:text-terracotta transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 inline-flex items-center gap-2 px-4 py-3 bg-terracotta text-sand-50 font-sans text-sm font-medium tracking-wide w-fit"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Katalog İndir
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
