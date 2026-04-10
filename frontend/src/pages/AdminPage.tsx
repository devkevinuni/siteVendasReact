import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Pencil, Plus, Trash2, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { clearAuthToken, getAuthToken } from '../lib/auth'

type Product = {
  id: number
  nome: string
  descricao: string
  preco: number | string
  categoria: string
  imagem_url: string
  estoque: number
}

type ProductFormState = {
  nome: string
  preco: string
  categoria: string
  imagem_url: string
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const initialForm: ProductFormState = {
  nome: '',
  preco: '',
  categoria: '',
  imagem_url: '',
}

export function AdminPage() {
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [saving, setSaving] = useState(false)
  const [editingProductId, setEditingProductId] = useState<number | null>(null)
  const [form, setForm] = useState<ProductFormState>(initialForm)
  const [deletingProductId, setDeletingProductId] = useState<number | null>(null)
  const [isDeleteConfirming, setIsDeleteConfirming] = useState(false)

  const isEditing = editingProductId !== null
  const imagePreview = useMemo(
    () =>
      form.imagem_url.trim() ||
      'https://placehold.co/400x400/f4f4f5/111827?text=Nike+x+Corinthians',
    [form.imagem_url],
  )

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`${API_BASE_URL}/products`)

      if (!response.ok) {
        throw new Error('Falha ao buscar produtos.')
      }

      const data = (await response.json()) as Product[]
      setProducts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro inesperado ao carregar produtos.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void fetchProducts()
  }, [])

  const getAuthHeaders = () => {
    const token = getAuthToken()
    if (!token) {
      return null
    }

    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  }

  const handleUnauthorized = () => {
    clearAuthToken()
    setError('Sessao expirada. Faca login novamente.')
    navigate('/login', { replace: true })
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingProductId(null)
    setForm(initialForm)
  }

  const openCreateModal = () => {
    setEditingProductId(null)
    setForm(initialForm)
    setIsModalOpen(true)
  }

  const openEditModal = (product: Product) => {
    setEditingProductId(product.id)
    setForm({
      nome: product.nome,
      preco: String(product.preco),
      categoria: product.categoria,
      imagem_url: product.imagem_url,
    })
    setIsModalOpen(true)
  }

  const handleDeleteClick = (productId: number) => {
    setDeletingProductId(productId)
    setIsDeleteConfirming(true)
  }

  const cancelDelete = () => {
    setDeletingProductId(null)
    setIsDeleteConfirming(false)
  }

  const handleDelete = async () => {
    if (!deletingProductId) return

    try {
      const headers = getAuthHeaders()
      if (!headers) {
        handleUnauthorized()
        return
      }

      const response = await fetch(`${API_BASE_URL}/products/${deletingProductId}`, {
        method: 'DELETE',
        headers,
      })

      if (response.status === 401) {
        handleUnauthorized()
        return
      }

      if (!response.ok) {
        throw new Error('Não foi possível excluir o produto.')
      }

      setDeletingProductId(null)
      setIsDeleteConfirming(false)
      await fetchProducts()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao excluir produto.')
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    if (!form.nome.trim() || !form.preco.trim()) {
      setError('Nome e preco sao obrigatorios.')
      return
    }

    const precoNumber = Number(form.preco)
    if (Number.isNaN(precoNumber) || precoNumber <= 0) {
      setError('Informe um preco valido.')
      return
    }

    try {
      setSaving(true)
      const headers = getAuthHeaders()
      if (!headers) {
        handleUnauthorized()
        return
      }

      const payload = {
        nome: form.nome.trim(),
        preco: precoNumber,
        categoria: form.categoria.trim() || 'geral',
        imagem_url:
          form.imagem_url.trim() ||
          'https://placehold.co/800x900/f4f4f5/111827?text=Nike+x+Corinthians',
      }

      const endpoint = isEditing
        ? `${API_BASE_URL}/products/${editingProductId}`
        : `${API_BASE_URL}/products`
      const method = isEditing ? 'PUT' : 'POST'

      const response = await fetch(endpoint, {
        method,
        headers,
        body: JSON.stringify(payload),
      })

      if (response.status === 401) {
        handleUnauthorized()
        return
      }

      if (!response.ok) {
        const responseBody = (await response.json().catch(() => null)) as { message?: string } | null
        throw new Error(responseBody?.message || 'Falha ao salvar produto.')
      }

      closeModal()
      await fetchProducts()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao salvar produto.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <Header />
      <main className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto w-full max-w-7xl space-y-6">
          <section className="border border-amber-300 bg-amber-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Acesso Restrito
            </p>
            <p className="mt-2 text-sm text-amber-900">
              Area administrativa do vendedor Nike. Implementar autenticacao/autorizacao nas
              proximas etapas.
            </p>
          </section>

          <section className="border border-zinc-200 bg-white p-4 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Dashboard
                </p>
                <h1 className="mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl">
                  Estoque Nike x Corinthians
                </h1>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={openCreateModal}
                  className="inline-flex items-center justify-center gap-2 border border-zinc-950 bg-zinc-950 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-zinc-800"
                >
                  <Plus size={16} />
                  Adicionar Novo Produto
                </button>
                <button
                  type="button"
                  onClick={() => {
                    clearAuthToken()
                    navigate('/login', { replace: true })
                  }}
                  className="inline-flex items-center justify-center border border-zinc-300 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
                >
                  Sair
                </button>
              </div>
            </div>

            {error ? (
              <p className="mt-4 border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </p>
            ) : null}

            <div className="mt-6 overflow-x-auto border border-zinc-200">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600">
                  <tr>
                    <th className="px-4 py-3">Produto</th>
                    <th className="px-4 py-3">Categoria</th>
                    <th className="px-4 py-3">Preco</th>
                    <th className="px-4 py-3">Acoes</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td className="px-4 py-6 text-zinc-500" colSpan={4}>
                        Carregando produtos...
                      </td>
                    </tr>
                  ) : products.length === 0 ? (
                    <tr>
                      <td className="px-4 py-6 text-zinc-500" colSpan={4}>
                        Nenhum produto encontrado.
                      </td>
                    </tr>
                  ) : (
                    products.map((product) => (
                      <tr key={product.id} className="border-t border-zinc-200">
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.imagem_url}
                              alt={product.nome}
                              className="h-12 w-12 border border-zinc-200 object-cover"
                            />
                            <span className="font-medium text-zinc-900">{product.nome}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-zinc-700">{product.categoria}</td>
                        <td className="px-4 py-4 font-medium text-zinc-900">
                          R$ {Number(product.preco).toFixed(2)}
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => openEditModal(product)}
                              className="inline-flex h-9 w-9 items-center justify-center border border-zinc-300 text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
                              title="Editar produto"
                            >
                              <Pencil size={16} />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteClick(product.id)}
                              className="inline-flex h-9 w-9 items-center justify-center border border-red-300 text-red-600 transition hover:border-red-500 hover:text-red-700"
                              title="Excluir produto"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center">
          <div className="w-full max-w-xl border border-zinc-200 bg-white p-5 shadow-2xl sm:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black uppercase tracking-tight">
                {isEditing ? 'Editar Produto' : 'Adicionar Novo Produto'}
              </h2>
              <button
                type="button"
                onClick={closeModal}
                className="inline-flex h-9 w-9 items-center justify-center border border-zinc-300 text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
                title="Fechar"
              >
                <X size={16} />
              </button>
            </div>

            <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600 sm:col-span-2">
                  Nome
                  <input
                    value={form.nome}
                    onChange={(event) => setForm((prev) => ({ ...prev, nome: event.target.value }))}
                    className="w-full border border-zinc-300 px-3 py-2 text-sm font-normal text-zinc-900 outline-none transition focus:border-zinc-950"
                    placeholder="Ex.: Camisa Corinthians 24/25"
                    required
                  />
                </label>

                <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600">
                  Preco
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.preco}
                    onChange={(event) => setForm((prev) => ({ ...prev, preco: event.target.value }))}
                    className="w-full border border-zinc-300 px-3 py-2 text-sm font-normal text-zinc-900 outline-none transition focus:border-zinc-950"
                    placeholder="0.00"
                    required
                  />
                </label>

                <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600">
                  Categoria
                  <input
                    value={form.categoria}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, categoria: event.target.value }))
                    }
                    className="w-full border border-zinc-300 px-3 py-2 text-sm font-normal text-zinc-900 outline-none transition focus:border-zinc-950"
                    placeholder="Ex.: Uniforme"
                  />
                </label>

                <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600 sm:col-span-2">
                  URL da Imagem
                  <input
                    value={form.imagem_url}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, imagem_url: event.target.value }))
                    }
                    className="w-full border border-zinc-300 px-3 py-2 text-sm font-normal text-zinc-900 outline-none transition focus:border-zinc-950"
                    placeholder="https://..."
                  />
                </label>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600">
                  Preview
                </p>
                <img
                  src={imagePreview}
                  alt="Preview do produto"
                  className="mt-2 h-40 w-full border border-zinc-200 object-cover"
                  onError={(event) => {
                    event.currentTarget.src =
                      'https://placehold.co/400x400/f4f4f5/111827?text=Preview+Indisponivel'
                  }}
                />
              </div>

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center border border-zinc-300 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center justify-center border border-zinc-950 bg-zinc-950 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {saving ? 'Salvando...' : isEditing ? 'Salvar Alteracoes' : 'Salvar Produto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
}
