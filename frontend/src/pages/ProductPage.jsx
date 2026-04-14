import { useParams } from 'react-router-dom'
import { NavbarTodas } from '../components/NavbarTodas'
import { ProductPageDetails } from '../components/ProductPageDetails'
import { ProductPageNotFound } from '../components/ProductPageNotFound'
import { FooterTodas } from '../components/FooterTodas'
import { getSavedProducts } from '../scripts/products'

export function ProductPage() {
  const { id } = useParams()
  const product = getSavedProducts().find((item) => item.id === id)

  return (
    <>
      <NavbarTodas />
      {product ? <ProductPageDetails product={product} /> : <ProductPageNotFound />}
      <FooterTodas />
    </>
  )
}
