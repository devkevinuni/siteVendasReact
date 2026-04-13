import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

const brlFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden border border-zinc-200 bg-white">
      <div className="relative h-72 w-full overflow-hidden bg-zinc-100">
        <img
          src={product.imagem_url}
          alt={product.nome}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute left-4 top-4 border border-zinc-950 bg-zinc-950 px-2 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
          Lancamento
        </span>
      </div>

      <div className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600">
          {product.categoria}
        </p>
        <h3 className="text-xl font-extrabold uppercase tracking-tight text-zinc-950">
          {product.nome}
        </h3>
        <p className="min-h-10 text-sm text-zinc-600">{product.descricao}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-base font-bold text-zinc-950">{brlFormatter.format(product.preco)}</span>
          <Link
            to={`/product/${product.id}`}
            className="inline-flex items-center gap-2 border border-zinc-950 bg-zinc-950 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-zinc-950"
            aria-label={`Comprar ${product.nome}`}
          >
            Comprar
            <ShoppingBag size={14} />
          </Link>
        </div>
      </div>
    </article>
  )
}
