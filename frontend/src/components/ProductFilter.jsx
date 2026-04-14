import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const priceRanges = [
  { label: 'Até R$ 200', max: 200 },
  { label: 'R$ 200 - R$ 500', min: 200, max: 500 },
  { label: 'R$ 500 - R$ 1000', min: 500, max: 1000 },
  { label: 'Acima de R$ 1000', min: 1000 },
]

export function ProductFilter({
  categories = [],
  onFilterChange,
  isOpen = true,
  onClose,
}) {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedPrice, setSelectedPrice] = useState([0, 10000])
  const [inStock, setInStock] = useState(false)
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    stock: true,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleCategoryChange = (category) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]

    setSelectedCategories(updated)
    onFilterChange({
      categories: updated.length > 0 ? updated : undefined,
      priceRange: selectedPrice,
      inStock,
    })
  }

  const handlePriceChange = (min, max) => {
    setSelectedPrice([min, max])
    onFilterChange({
      categories: selectedCategories.length > 0 ? selectedCategories : undefined,
      priceRange: [min, max],
      inStock,
    })
  }

  const handleStockChange = () => {
    const updated = !inStock
    setInStock(updated)
    onFilterChange({
      categories: selectedCategories.length > 0 ? selectedCategories : undefined,
      priceRange: selectedPrice,
      inStock: updated,
    })
  }

  const handleResetCategories = () => {
    setSelectedCategories([])
    onFilterChange({
      categories: undefined,
      priceRange: selectedPrice,
      inStock,
    })
  }

  const handleResetPrice = () => {
    setSelectedPrice([0, 10000])
    onFilterChange({
      categories: selectedCategories.length > 0 ? selectedCategories : undefined,
      priceRange: [0, 10000],
      inStock,
    })
  }

  const handleResetStock = () => {
    setInStock(false)
    onFilterChange({
      categories: selectedCategories.length > 0 ? selectedCategories : undefined,
      priceRange: selectedPrice,
      inStock: false,
    })
  }

  const handleReset = () => {
    setSelectedCategories([])
    setSelectedPrice([0, 10000])
    setInStock(false)
    onFilterChange({})
  }

  return (
    <>
      {/* Filter Panel */}
      <div className="w-full">
        {/* Desktop Title */}
        <h2 className="mb-6 text-lg font-bold uppercase tracking-tight">
          Filtros
        </h2>

        {/* Categories Section */}
        <div className="mb-6 border-b border-zinc-200 pb-6 last:mb-0 last:border-b-0">
          <div className="flex items-center justify-between">
            <button
              onClick={() => toggleSection('categories')}
              className="flex flex-1 items-center justify-between text-sm font-semibold uppercase tracking-wide text-zinc-950 hover:text-zinc-700 transition"
            >
              Categorias
              <ChevronDown
                size={18}
                className={`transition-transform ${expandedSections.categories ? 'rotate-0' : '-rotate-90'
                  }`}
              />
            </button>
            {selectedCategories.length > 0 && (
              <button
                onClick={handleResetCategories}
                className="ml-2 text-xs font-semibold text-zinc-600 hover:text-zinc-950 transition"
              >
                Limpar
              </button>
            )}
          </div>

          {expandedSections.categories && (
            <div className="mt-4 space-y-3">
              {categories.length > 0 ? (
                categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="w-4 h-4 border border-zinc-300 rounded cursor-pointer accent-zinc-950"
                    />
                    <span className="text-sm text-zinc-700 group-hover:text-zinc-950 transition">
                      {category}
                    </span>
                  </label>
                ))
              ) : (
                <p className="text-xs text-zinc-500">Nenhuma categoria disponível</p>
              )}
            </div>
          )}
        </div>

        {/* Price Section */}
        <div className="mb-6 border-b border-zinc-200 pb-6 last:mb-0 last:border-b-0">
          <div className="flex items-center justify-between">
            <button
              onClick={() => toggleSection('price')}
              className="flex flex-1 items-center justify-between text-sm font-semibold uppercase tracking-wide text-zinc-950 hover:text-zinc-700 transition"
            >
              Preço
              <ChevronDown
                size={18}
                className={`transition-transform ${expandedSections.price ? 'rotate-0' : '-rotate-90'
                  }`}
              />
            </button>
            {(selectedPrice[0] !== 0 || selectedPrice[1] !== 10000) && (
              <button
                onClick={handleResetPrice}
                className="ml-2 text-xs font-semibold text-zinc-600 hover:text-zinc-950 transition"
              >
                Limpar
              </button>
            )}
          </div>

          {expandedSections.price && (
            <div className="mt-4 space-y-3">
              {priceRanges.map((range, idx) => (
                <label
                  key={idx}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="price"
                    checked={
                      selectedPrice[0] === (range.min || 0) &&
                      selectedPrice[1] === (range.max || 10000)
                    }
                    onChange={() =>
                      handlePriceChange(range.min || 0, range.max || 10000)
                    }
                    className="w-4 h-4 border border-zinc-300 rounded-full cursor-pointer accent-zinc-950"
                  />
                  <span className="text-sm text-zinc-700 group-hover:text-zinc-950 transition">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Stock Section */}
        <div className="mb-6 border-b border-zinc-200 pb-6 last:mb-0 last:border-b-0">
          <div className="flex items-center justify-between">
            <button
              onClick={() => toggleSection('stock')}
              className="flex flex-1 items-center justify-between text-sm font-semibold uppercase tracking-wide text-zinc-950 hover:text-zinc-700 transition"
            >
              Disponibilidade
              <ChevronDown
                size={18}
                className={`transition-transform ${expandedSections.stock ? 'rotate-0' : '-rotate-90'
                  }`}
              />
            </button>
            {inStock && (
              <button
                onClick={handleResetStock}
                className="ml-2 text-xs font-semibold text-zinc-600 hover:text-zinc-950 transition"
              >
                Limpar
              </button>
            )}
          </div>

          {expandedSections.stock && (
            <div className="mt-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={inStock}
                  onChange={handleStockChange}
                  className="w-4 h-4 border border-zinc-300 rounded cursor-pointer accent-zinc-950"
                />
                <span className="text-sm text-zinc-700 group-hover:text-zinc-950 transition">
                  Apenas em estoque
                </span>
              </label>
            </div>
          )}
        </div>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          disabled={
            selectedCategories.length === 0 &&
            selectedPrice[0] === 0 &&
            selectedPrice[1] === 10000 &&
            !inStock
          }
          className="mt-8 w-full border border-zinc-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-950 transition hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Limpar Filtros
        </button>
      </div>
    </>
  )
}
