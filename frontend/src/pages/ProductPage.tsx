import { Link, useParams } from 'react-router-dom'
import { Header } from '../components/Header'

export function ProductPage() {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <Header />
      <main className="px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto w-full max-w-7xl border border-zinc-200 bg-white p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
            Product Page
          </p>
          <h1 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Produto {id ?? '-'}
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-700">
            Estrutura base preparada para detalhes de produto (galeria, variacoes, preco,
            estoque e CTA de compra).
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/cart"
              className="inline-flex items-center justify-center border border-zinc-950 bg-zinc-950 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-zinc-800"
            >
              Ir para carrinho
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center border border-zinc-300 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-950 transition hover:border-zinc-950"
            >
              Voltar para home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
