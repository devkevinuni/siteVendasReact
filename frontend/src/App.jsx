import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ProductSelectionPage } from './pages/ProductSelectionPage'
import { ProductPage } from './pages/ProductPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductSelectionPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
