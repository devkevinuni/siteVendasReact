import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProductFilter } from '../components/ProductFilter'
import { ProductCard } from '../components/ProductCard'
import { Menu, Search, X } from 'lucide-react'
import { getSavedProducts, getProductCategories } from '../scripts/products'

export function ConteudoProductSelectionPage() {
    const [allProducts, setAllProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [filters, setFilters] = useState({})
    const [filterOpen, setFilterOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchParams] = useSearchParams()

    useEffect(() => {
        try {
            setLoading(true)
            setError(null)
            const products = getSavedProducts()
            setAllProducts(products)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro ao carregar produtos.')
            setAllProducts([])
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        const categoria = searchParams.get('categoria')
        if (categoria) {
            setFilters(prev => ({ ...prev, categories: [categoria] }))
        }
    }, [searchParams])

    const categories = useMemo(() => getProductCategories(allProducts), [allProducts])

    const filteredProducts = useMemo(() => {
        return allProducts.filter((product) => {
            // Search filter
            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase()
                const matchesSearch =
                    product.nome.toLowerCase().includes(query) ||
                    product.descricao.toLowerCase().includes(query) ||
                    product.categoria.toLowerCase().includes(query)
                if (!matchesSearch) return false
            }

            // Category filter
            if (filters.categories && filters.categories.length > 0) {
                if (!filters.categories.includes(product.categoria)) return false
            }

            // Price filter
            if (filters.priceRange) {
                const [min, max] = filters.priceRange
                if (product.preco < min || product.preco > max) return false
            }

            // Stock filter
            if (filters.inStock && product.estoque <= 0) return false

            return true
        })
    }, [allProducts, searchQuery, filters])

    const handleSearch = (e) => {
        e.preventDefault()
    }

    const handleClear = () => {
        setSearchQuery('')
    }

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-950 flex flex-col">
            {/* Search Section */}
            <div className="border-b border-zinc-200 bg-white px-4 py-4 sm:px-6">
                <div className="mx-auto w-full max-w-7xl">
                    <form onSubmit={handleSearch} className="w-full">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Pesquise por produto, marca, categoria..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.currentTarget.value)}
                                className="w-full border border-zinc-300 bg-white px-4 py-3 pl-10 pr-12 text-sm placeholder-zinc-500 focus:border-zinc-950 focus:outline-none transition"
                                aria-label="Pesquisar produtos"
                            />
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />

                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={handleClear}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-950 transition"
                                    aria-label="Limpar pesquisa"
                                >
                                    <X size={18} />
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Overlay Mobile */}
                {filterOpen && (
                    <div
                        className="fixed inset-0 z-20 bg-black/40 md:hidden"
                        onClick={() => setFilterOpen(false)}
                    />
                )}

                {/* Filter Sidebar */}
                <div
                    className={`fixed left-0 top-0 z-30 h-full w-full overflow-auto bg-white transition-transform duration-300 md:static md:w-80 md:flex-shrink-0 md:border-r md:border-zinc-200 md:translate-x-0 ${filterOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="md:hidden sticky top-0 z-40 flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-3">
                        <h2 className="font-bold uppercase tracking-tight">Filtros</h2>
                        <button
                            onClick={() => setFilterOpen(false)}
                            className="p-1 hover:bg-zinc-100 rounded"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="p-4 md:p-6">
                        <ProductFilter
                            categories={categories}
                            onFilterChange={setFilters}
                            isOpen={true}
                            onClose={() => setFilterOpen(false)}
                        />
                    </div>
                </div>

                {/* Main Content */}
                <main className="flex-1 overflow-auto px-4 py-6 sm:px-6 sm:py-8">
                    <div className="mx-auto w-full max-w-6xl">
                        {/* Results Header */}
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
                                    Produtos
                                </h1>
                                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-zinc-600">
                                    {loading ? 'Carregando...' : `${filteredProducts.length} resultado${filteredProducts.length !== 1 ? 's' : ''}`}
                                </p>
                            </div>

                            {/* Filter Button Mobile */}
                            <button
                                onClick={() => setFilterOpen(!filterOpen)}
                                className="md:hidden flex items-center gap-2 border border-zinc-300 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-950 transition hover:bg-zinc-50"
                            >
                                <Menu size={14} />
                                Filtros
                            </button>
                        </div>

                        {/* Loading State */}
                        {loading && (
                            <div className="flex h-96 items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-white">
                                <div className="text-center">
                                    <p className="text-base font-semibold text-zinc-600">Carregando produtos...</p>
                                </div>
                            </div>
                        )}

                        {/* Error State */}
                        {error && !loading && (
                            <div className="flex h-96 items-center justify-center rounded-lg border border-dashed border-red-300 bg-red-50">
                                <div className="text-center">
                                    <p className="text-base font-semibold text-red-600">{error}</p>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="mt-4 border border-red-950 bg-red-950 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-red-800"
                                    >
                                        Tentar Novamente
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Products Grid */}
                        {!loading && !error && filteredProducts.length > 0 && (
                            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        )}

                        {/* Empty State */}
                        {!loading && !error && filteredProducts.length === 0 && allProducts.length > 0 && (
                            <div className="flex h-96 items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-white">
                                <div className="text-center">
                                    <p className="text-base font-semibold text-zinc-600">
                                        Nenhum produto encontrado
                                    </p>
                                    <p className="mt-1 text-sm text-zinc-500">
                                        Tente ajustar seus filtros ou termos de pesquisa
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSearchQuery('')
                                            setFilters({})
                                        }}
                                        className="mt-4 border border-zinc-950 bg-zinc-950 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-zinc-800"
                                    >
                                        Limpar Filtros
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* No Products State */}
                        {!loading && !error && allProducts.length === 0 && (
                            <div className="flex h-96 items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-white">
                                <div className="text-center">
                                    <p className="text-base font-semibold text-zinc-600">
                                        Nenhum produto disponível
                                    </p>
                                    <p className="mt-1 text-sm text-zinc-500">
                                        Volte mais tarde para ver os produtos
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}