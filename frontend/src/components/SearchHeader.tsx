import { Search, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

type SearchHeaderProps = {
  onSearch: (query: string) => void
  searchQuery?: string
}

function BrandLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-6 w-auto object-contain sm:h-8"
      loading="lazy"
      decoding="async"
    />
  )
}

export function SearchHeader({ onSearch, searchQuery = '' }: SearchHeaderProps) {
  const [query, setQuery] = useState(searchQuery)

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setQuery(value)
  }

  const handleClear = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <header className="border-b border-zinc-200 bg-white/95 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6">
        {/* Logo Row */}
        <div className="mb-4 flex items-center justify-between sm:mb-0">
          <Link to="/" className="flex items-center gap-3">
            <BrandLogo
              src="https://placehold.co/120x36/ffffff/111111?text=NIKE"
              alt="Logo Nike"
            />
            <span className="h-5 w-px bg-zinc-300 sm:h-6" aria-hidden />
            <BrandLogo
              src="https://placehold.co/120x36/f4f4f5/111111?text=CORINTHIANS"
              alt="Logo Corinthians"
            />
          </Link>
          
          <Link
            to="/cart"
            className="relative p-2 text-zinc-700 hover:text-zinc-950 transition"
            aria-label="Carrinho"
          >
            <ShoppingBag size={20} className="sm:size-6" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold bg-zinc-950 text-white rounded-full">
              0
            </span>
          </Link>
        </div>

        {/* Search Row */}
        <form onSubmit={handleSearch} className="w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquise por produto, marca, categoria..."
              value={query}
              onChange={handleInputChange}
              className="w-full border border-zinc-300 bg-white px-4 py-3 pl-10 pr-12 text-sm placeholder-zinc-500 focus:border-zinc-950 focus:outline-none transition"
              aria-label="Pesquisar produtos"
            />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
            
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-950 transition"
                aria-label="Limpar pesquisa"
              >
                ✕
              </button>
            )}
          </div>
        </form>
      </div>
    </header>
  )
}
