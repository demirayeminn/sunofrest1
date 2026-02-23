import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ProductsPage from './pages/ProductsPage'
import ServiceAreas from './pages/ServiceAreas'
import References from './pages/References'
import ContactPage from './pages/ContactPage'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-sand-50">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/urunler" element={<ProductsPage />} />
          <Route path="/hizmet-alanlari" element={<ServiceAreas />} />
          <Route path="/referanslar" element={<References />} />
          <Route path="/iletisim" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
