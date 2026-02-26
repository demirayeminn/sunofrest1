import { useMemo, useRef, useState } from 'react'
import { productCategories, products } from '../data/products'

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const categoryBarRef = useRef(null)
  const categoryDragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 })

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

        <div className="mb-10 md:mb-14 border-y border-sand-200 py-5 md:py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <div
                ref={categoryBarRef}
                className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap py-1 pr-2 cursor-grab active:cursor-grabbing select-none [mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)]"
                onMouseDown={(e) => {
                  const el = categoryBarRef.current
                  if (!el) return
                  categoryDragRef.current = {
                    isDown: true,
                    startX: e.pageX - el.offsetLeft,
                    scrollLeft: el.scrollLeft,
                  }
                }}
                onMouseLeave={() => {
                  categoryDragRef.current.isDown = false
                }}
                onMouseUp={() => {
                  categoryDragRef.current.isDown = false
                }}
                onMouseMove={(e) => {
                  const el = categoryBarRef.current
                  if (!el) return
                  if (!categoryDragRef.current.isDown) return
                  e.preventDefault()
                  const x = e.pageX - el.offsetLeft
                  const walk = x - categoryDragRef.current.startX
                  el.scrollLeft = categoryDragRef.current.scrollLeft - walk
                }}
                onWheel={(e) => {
                  const el = categoryBarRef.current
                  if (!el) return
                  const canScroll = el.scrollWidth > el.clientWidth
                  if (!canScroll) return

                  // Mouse wheel ile yatay kaydır (Shift gerektirmeden)
                  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                    e.preventDefault()
                    el.scrollLeft += e.deltaY
                  }
                }}
              >
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`shrink-0 px-4 py-2 text-[13px] font-sans font-medium border transition-all whitespace-nowrap rounded-full ${
                activeCategory === 'all'
                  ? 'border-charcoal bg-charcoal text-sand-50 shadow-sm'
                  : 'border-sand-300 bg-white/70 text-charcoal/80 hover:border-charcoal/50 hover:bg-white'
              }`}
            >
              Tümü
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 px-4 py-2 text-[13px] font-sans font-medium border transition-all whitespace-nowrap rounded-full ${
                  activeCategory === cat.id
                    ? 'border-terracotta bg-terracotta text-sand-50 shadow-sm'
                    : 'border-sand-300 bg-white/70 text-charcoal/80 hover:border-terracotta/50 hover:bg-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
            </div>
            </div>

            <div className="w-full md:w-80 shrink-0">
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
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {filtered.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => {
                setSelected(product)
                setActiveImageIndex(0)
              }}
              className="group text-left border border-sand-200 bg-white transition-all duration-300 hover:border-terracotta/40 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-terracotta/40 rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/0 to-transparent opacity-80" />
                <div className="absolute left-5 right-5 bottom-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-sand-100/90 mb-1">
                        {product.segment}
                      </p>
                      <h2 className="font-serif text-2xl md:text-[28px] font-semibold text-sand-50 leading-tight truncate">
                        {product.name}
                      </h2>
                    </div>
                    <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-sand-50/10 text-sand-50 border border-sand-50/20 transition-colors group-hover:bg-terracotta group-hover:border-terracotta">
                      →
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-charcoal/40 mb-2">
                  {product.id} · {getCategoryName(product.categoryId)}
                </p>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-4">
                  {product.summary}
                </p>
                <div className="flex items-center justify-between gap-4">
                  <p className="font-sans text-xs text-charcoal/60">
                    {product.dimensions.length} · {product.dimensions.width} · {product.dimensions.height}
                  </p>
                  <p className="font-sans text-xs font-medium text-terracotta">
                    İncele
                  </p>
                </div>
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
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 py-12 overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <article
            className="w-[min(1280px,94vw)] max-h-[86vh] bg-sand-50 border border-sand-200 shadow-2xl relative my-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 p-2 text-charcoal/60 hover:text-charcoal z-10"
              aria-label="Kapat"
            >
              <span className="block w-4 h-4 relative">
                <span className="absolute inset-x-0 top-1/2 h-px bg-charcoal rotate-45" />
                <span className="absolute inset-x-0 top-1/2 h-px bg-charcoal -rotate-45" />
              </span>
            </button>

            <div className="grid md:grid-cols-12 gap-0 h-full">
              <div className="md:col-span-5 bg-sand-200/60">
                {(() => {
                  const images = selected.images && selected.images.length > 0 ? selected.images : [selected.image]
                  const currentIndex = Math.min(activeImageIndex, images.length - 1)
                  return (
                    <div className="h-full max-h-[86vh] overflow-y-auto no-scrollbar snap-y snap-mandatory">
                      {images.map((src, idx) => (
                        <button
                          key={src + idx}
                          type="button"
                          onClick={() => setActiveImageIndex(idx)}
                          className="relative block w-full snap-start focus:outline-none"
                          aria-label={`Görsel ${idx + 1}`}
                        >
                          <div className="relative w-full h-[360px] md:h-[520px] overflow-hidden">
                            <img src={src} alt={selected.name} className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                          </div>
                          <div className="absolute left-4 bottom-4 flex items-center gap-2">
                            <span className="inline-flex items-center justify-center px-2.5 py-1 text-[11px] font-sans tracking-[0.22em] uppercase bg-black/35 text-sand-50 border border-white/15">
                              {idx + 1}/{images.length}
                            </span>
                            {idx === currentIndex && (
                              <span className="inline-flex items-center justify-center px-2.5 py-1 text-[11px] font-sans tracking-[0.18em] uppercase bg-terracotta text-sand-50">
                                Aktif
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )
                })()}
              </div>

              <div className="md:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col bg-sand-50">
                <div className="mb-8">
                  <p className="font-sans text-xs uppercase tracking-[0.25em] text-charcoal/40 mb-2">
                    {selected.id}
                  </p>
                  <p className="font-sans text-xs uppercase tracking-[0.25em] text-charcoal/50 mb-2">
                    {selected.segment}
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-3 text-charcoal">
                    {selected.name}
                  </h2>
                  <p className="font-sans text-sm text-charcoal/70">
                    {getCategoryName(selected.categoryId)}
                  </p>
                  <p className="font-sans text-sm text-charcoal/60 mt-2">
                    {selected.dimensions.length} × {selected.dimensions.width} × {selected.dimensions.height}
                  </p>
                </div>

                <p className="font-sans text-base text-charcoal/85 leading-loose mb-8">
                  {selected.details}
                </p>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 text-sm font-sans mb-8">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">
                      Malzeme
                    </dt>
                    <dd className="text-charcoal/80 leading-relaxed">{selected.material}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">
                      Ölçüler
                    </dt>
                    <dd className="text-charcoal/80 leading-relaxed">
                      {selected.dimensions.length} · {selected.dimensions.width} ·{' '}
                      {selected.dimensions.height}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">
                      Renk Seçenekleri
                    </dt>
                    <dd className="text-charcoal/80 leading-relaxed">
                      {selected.colors.join(' · ')}
                    </dd>
                  </div>
                </dl>

                <div className="mt-auto pt-4 space-y-4">
                  <a
                    href={`mailto:info@sunofrest.com?subject=${encodeURIComponent(
                      'Teklif Talebi - ' + selected.name,
                    )}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-charcoal text-sand-50 font-sans text-sm font-medium tracking-wide hover:bg-sea transition-colors"
                  >
                    Teklif Al
                  </a>
                  <p className="font-sans text-sm text-charcoal/55 leading-relaxed max-w-md">
                    Detaylı fiyatlandırma ve proje bazlı kombinasyonlar için bizimle iletişime geçebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  )
}

