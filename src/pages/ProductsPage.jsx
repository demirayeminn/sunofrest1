import { useMemo, useState } from 'react'
import { productCategories, products } from '../data/products'

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return products.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.categoryId === activeCategory
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        productCategories.find((c) => c.id === p.categoryId)?.name.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  const getCategoryName = (id) => productCategories.find((c) => c.id === id)?.name ?? ''

  return (
    <section className="pt-28 pb-24 md:pt-32 md:pb-32 bg-sand-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-3xl mb-12 md:mb-16">
          <p className="font-sans text-sm font-medium tracking-[0.3em] uppercase text-terracotta mb-4">
            Ürünler
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight mb-4">
            Tüm ürün
            <br />
            <span className="italic text-terracotta">koleksiyonumuz</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-charcoal/70 leading-relaxed">
            Şezlong, daybed, masa, sandalye ve tamamlayıcı plaj ekipmanlarını; otel ve plaj
            projeleriniz için filtrelenebilir bir katalogda inceleyin.
          </p>
        </header>

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10 md:mb-14">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs md:text-sm font-sans tracking-wide border transition-colors ${
                activeCategory === 'all'
                  ? 'border-charcoal bg-charcoal text-sand-50'
                  : 'border-sand-300 text-charcoal/80 hover:border-charcoal/60'
              }`}
            >
              Tümü
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs md:text-sm font-sans tracking-wide border transition-colors ${
                  activeCategory === cat.id
                    ? 'border-terracotta bg-terracotta text-sand-50'
                    : 'border-sand-300 text-charcoal/80 hover:border-terracotta/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="w-full md:w-72">
            <label className="flex items-center gap-3 border border-sand-300 bg-white px-3 py-2 focus-within:border-charcoal/80 transition-colors">
              <svg
                className="w-4 h-4 text-charcoal/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-4.35-4.35M17 10.5A6.5 6.5 0 1110.5 4 6.5 6.5 0 0117 10.5z"
                />
              </svg>
              <input
                type="text"
                placeholder="Ürün veya kategori ara"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-sm font-sans text-charcoal placeholder:text-charcoal/40"
              />
            </label>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => setSelected(product)}
              className="group text-left border border-sand-200 bg-white px-6 py-6 md:px-8 md:py-8 transition-all duration-300 hover:border-terracotta/40 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-terracotta/40"
            >
              <div className="mb-4 aspect-[4/3] overflow-hidden bg-sand-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">
                {product.segment}
              </p>
              <h2 className="font-serif text-xl md:text-2xl font-semibold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
                {product.name}
              </h2>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-4">
                {product.summary}
              </p>
              <p className="font-sans text-xs text-charcoal/60">
                {product.dimensions.length} · {product.dimensions.width} · {product.dimensions.height}
              </p>
              <div className="mt-4 flex items-center gap-2 font-sans text-sm font-medium text-terracotta">
                <span>Detayı Gör</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 font-sans text-sm text-charcoal/60">
            Filtrelere uygun ürün bulunamadı. Farklı bir kategori veya arama deneyin.
          </p>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 py-10"
          onClick={() => setSelected(null)}
        >
          <article
            className="max-w-3xl w-full bg-sand-50 border border-sand-200 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 text-charcoal/60 hover:text-charcoal"
              aria-label="Kapat"
            >
              <span className="block w-4 h-4 relative">
                <span className="absolute inset-x-0 top-1/2 h-px bg-charcoal rotate-45" />
                <span className="absolute inset-x-0 top-1/2 h-px bg-charcoal -rotate-45" />
              </span>
            </button>

            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative h-56 md:min-h-[280px] overflow-hidden bg-sand-200">
                <img src={selected.image} alt={selected.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-sand-50">
                  <p className="font-sans text-xs uppercase tracking-[0.25em] text-sand-200 mb-1">
                    {selected.segment}
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold leading-tight mb-1">
                    {selected.name}
                  </h2>
                  <p className="font-sans text-sm text-sand-200/90">
                    {getCategoryName(selected.categoryId)}
                  </p>
                  <p className="font-sans text-xs text-sand-200/70 mt-2">
                    {selected.dimensions.length} × {selected.dimensions.width} × {selected.dimensions.height}
                  </p>
                </div>
              </div>

              <div className="md:col-span-3 p-6 md:p-8">
                <p className="font-sans text-sm text-charcoal/80 leading-relaxed mb-4">
                  {selected.details}
                </p>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm font-sans">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-1">
                      Malzeme
                    </dt>
                    <dd className="text-charcoal/80">{selected.material}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-1">
                      Ölçüler
                    </dt>
                    <dd className="text-charcoal/80">
                      {selected.dimensions.length} · {selected.dimensions.width} ·{' '}
                      {selected.dimensions.height}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-1">
                      Renk Seçenekleri
                    </dt>
                    <dd className="text-charcoal/80">
                      {selected.colors.join(' · ')}
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 font-sans text-xs text-charcoal/50">
                  Detaylı fiyatlandırma ve proje bazlı kombinasyonlar için{' '}
                  <a
                    href="mailto:info@sunofrest.com"
                    className="underline underline-offset-4 decoration-terracotta/60 hover:decoration-terracotta"
                  >
                    info@sunofrest.com
                  </a>{' '}
                  üzerinden bizimle iletişime geçebilirsiniz.
                </p>
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  )
}

