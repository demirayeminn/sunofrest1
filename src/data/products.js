export const productCategories = [
  { id: 'sezlong', name: 'Şezlong Modelleri' },
  { id: 'sehpa', name: 'Şezlong Sehpa Modelleri' },
  { id: 'masa', name: 'Masa Çeşitleri' },
  { id: 'sandalye', name: 'Sandalye Çeşitleri' },
  { id: 'dusluk', name: 'Duşluklar' },
  { id: 'havluluk', name: 'Havluluklar' },
  { id: 'daybed', name: 'Daybed Modelleri' },
]

const sezlongS1 = new URL('../../image/sezlong/s1.png', import.meta.url).href
const sezlongS2 = new URL('../../image/sezlong/s2.png', import.meta.url).href
const sezlongS3 = new URL('../../image/sezlong/s3.png', import.meta.url).href
const sezlongS4 = new URL('../../image/sezlong/s4.png', import.meta.url).href
const sezlongS5 = new URL('../../image/sezlong/s5.png', import.meta.url).href
const sezlongS6 = new URL('../../image/sezlong/s6.png', import.meta.url).href
const sezlongS7 = new URL('../../image/sezlong/s7.png', import.meta.url).href
const sezlongS8 = new URL('../../image/sezlong/s8.png', import.meta.url).href
const sezlongS9 = new URL('../../image/sezlong/s9.png', import.meta.url).href
const sezlongSS1 = new URL('../../image/sezlong/ss1.png', import.meta.url).href
const sezlongSS2 = new URL('../../image/sezlong/ss2.png', import.meta.url).href
const sezlongSS3 = new URL('../../image/sezlong/ss3.png', import.meta.url).href
const sezlongSS4 = new URL('../../image/sezlong/ss4.png', import.meta.url).href
const sezlongSS5 = new URL('../../image/sezlong/ss5.png', import.meta.url).href
const sezlongSS6 = new URL('../../image/sezlong/ss6.png', import.meta.url).href

const imageSezlong1 = sezlongS1
const imageSezlong2 = sezlongS4
const imageSehpa = new URL('../../image/plaj.png', import.meta.url).href
const imageMasa = new URL('../../image/otel.png', import.meta.url).href
const imageSandalye = new URL('../../image/otel.png', import.meta.url).href
const imageDusluk = new URL('../../image/havuzbasi.png', import.meta.url).href
const imageHavluluk = new URL('../../image/havluluk.png', import.meta.url).href
const imageDaybed = new URL('../../image/daybed.png', import.meta.url).href

export const products = [
  {
    id: 'sr-lounge-01',
    name: 'SR Lounge 01',
    categoryId: 'sezlong',
    image: imageSezlong1,
    images: [sezlongS1, sezlongS2, sezlongS3, sezlongSS1, sezlongSS2, sezlongSS3],
    summary: 'Alüminyum gövdeli, textilen kumaşlı klasik şezlong',
    segment: 'Premium',
    material: 'Toz boyalı alüminyum gövde, UV dayanımlı textilen kumaş',
    dimensions: {
      length: '195 cm',
      width: '70 cm',
      height: '35 cm',
    },
    details:
      '4 kademeli sırt ayarı, kaymaz ayaklar, deniz kenarı kullanımına uygun korozyon dayanımı.',
    colors: ['Beyaz gövde / Kum beji kumaş', 'Antrasit gövde / Gri kumaş'],
  },
  {
    id: 'sr-lounge-02',
    name: 'SR Lounge 02',
    categoryId: 'sezlong',
    image: imageSezlong2,
    images: [sezlongS4, sezlongS5, sezlongS6, sezlongS7, sezlongS8, sezlongS9, sezlongSS4, sezlongSS5, sezlongSS6],
    summary: 'Geniş oturumlu, tekerlekli konfor şezlong',
    segment: 'Signature',
    material: 'Alüminyum + tik kaplama detaylar',
    dimensions: {
      length: '205 cm',
      width: '80 cm',
      height: '38 cm',
    },
    details:
      'Arka bölümde gizli tekerlekler, baş ve bel destekli ergonomik form; sahil şeritleri ve infinity havuzlar için.',
    colors: ['Beyaz / Doğal tik', 'Antrasit / Koyu tik'],
  },
  {
    id: 'sr-side-01',
    name: 'SR Side 01',
    categoryId: 'sehpa',
    image: imageSehpa,
    summary: 'Şezlong yanında kullanıma uygun kompakt sehpa',
    segment: 'Standard',
    material: 'Enjeksiyon PP, UV katkılı',
    dimensions: {
      length: '45 cm',
      width: '45 cm',
      height: '40 cm',
    },
    details:
      'İstiflenebilir yapı, kaymaz üst yüzey; plaj ve havuz kenarı için ekonomik çözümdür.',
    colors: ['Beyaz', 'Kum', 'Antrasit'],
  },
  {
    id: 'sr-table-01',
    name: 'SR Table 01',
    categoryId: 'masa',
    image: imageMasa,
    summary: 'Açık alan restoranlar için kare masa',
    segment: 'Premium',
    material: 'Alüminyum gövde, kompakt laminat tabla',
    dimensions: {
      length: '80 cm',
      width: '80 cm',
      height: '74 cm',
    },
    details:
      'Güneş ve nem dayanımlı kompakt tabla; sabit ve dengeli ayak yapısı ile yoğun kullanım alanlarına uygundur.',
    colors: ['Beyaz gövde / Meşe tabla', 'Antrasit gövde / Mermer desen tabla'],
  },
  {
    id: 'sr-chair-01',
    name: 'SR Chair 01',
    categoryId: 'sandalye',
    image: imageSandalye,
    summary: 'İstiflenebilir açık alan sandalyesi',
    segment: 'Standard',
    material: 'Alüminyum + textilen oturum',
    dimensions: {
      length: '56 cm',
      width: '55 cm',
      height: '84 cm',
    },
    details:
      'Kolçaklı, hafif ve istiflenebilir tasarım; kahvaltı ve snack alanları için idealdir.',
    colors: ['Beyaz / Kum beji', 'Antrasit / Gri'],
  },
  {
    id: 'sr-shower-01',
    name: 'SR Shower 01',
    categoryId: 'dusluk',
    image: imageDusluk,
    summary: 'Tek gövdeli dış mekân duş ünitesi',
    segment: 'Premium',
    material: '304 paslanmaz çelik gövde',
    dimensions: {
      length: '—',
      width: '—',
      height: '230 cm',
    },
    details:
      'Ayak duşu ve ana duş başlığı bir arada; tuzlu su ve klor dayanımlı bağlantı ekipmanları.',
    colors: ['Fırçalanmış çelik'],
  },
  {
    id: 'sr-towel-01',
    name: 'SR Towel 01',
    categoryId: 'havluluk',
    image: imageHavluluk,
    summary: 'Çok katlı havlu dolabı / raf sistemi',
    segment: 'Premium',
    material: 'Laminat gövde, alüminyum detaylar',
    dimensions: {
      length: '120 cm',
      width: '50 cm',
      height: '190 cm',
    },
    details:
      'Temiz ve kirli havlu bölümlendirmesi; lobiler ve spa girişleri için düzenli görünüm sağlar.',
    colors: ['Meşe', 'Ceviz'],
  },
  {
    id: 'sr-daybed-01',
    name: 'SR Daybed 01',
    categoryId: 'daybed',
    image: imageDaybed,
    summary: 'Pergolalı, çift kişilik lüks daybed',
    segment: 'Signature',
    material: 'Alüminyum gövde, su itici döşeme, perdeli üst yapı',
    dimensions: {
      length: '210 cm',
      width: '180 cm',
      height: '210 cm',
    },
    details:
      'Çıkarılabilir perdeler, yüksek yoğunluklu sünger ve esnek minder kılıfları ile VIP alanlar için tasarlanmıştır.',
    colors: ['Beyaz / Kırık beyaz kumaş', 'Antrasit / Keten bej kumaş'],
  },
]

