import { useState } from 'react'
import type { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { setAuthToken } from '../lib/auth'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('vendedor@nike.com')
  const [password, setPassword] = useState('123456')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const redirectTo = (location.state as { from?: string } | null)?.from || '/admin'

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    try {
      setLoading(true)
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const responseBody = (await response.json().catch(() => null)) as { message?: string } | null
        throw new Error(responseBody?.message || 'Falha no login.')
      }

      const data = (await response.json()) as { token: string }
      setAuthToken(data.token)
      navigate(redirectTo, { replace: true })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro inesperado no login.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <Header />
      <main className="px-4 py-10 sm:px-6 sm:py-16">
        <section className="mx-auto w-full max-w-md border border-zinc-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Acesso Restrito
          </p>
          <h1 className="mt-2 text-2xl font-black uppercase tracking-tight">Login Vendedor</h1>
          <p className="mt-2 text-sm text-zinc-600">
            Entre com as credenciais do vendedor Nike para acessar o dashboard.
          </p>

          {error ? (
            <p className="mt-4 border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          ) : null}

          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600">
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border border-zinc-300 px-3 py-2 text-sm font-normal text-zinc-900 outline-none transition focus:border-zinc-950"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600">
              Senha
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full border border-zinc-300 px-3 py-2 text-sm font-normal text-zinc-900 outline-none transition focus:border-zinc-950"
                required
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center border border-zinc-950 bg-zinc-950 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}
