import { Link } from 'react-router-dom'

export function ProductPageNotFound() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-950">
            <main className="px-4 py-16 sm:px-6">
                <div className="mx-auto w-full max-w-3xl rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
                    <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Produto não encontrado</p>
                    <h1 className="mt-4 text-3xl font-black text-zinc-950">Ops!</h1>
                    <p className="mt-4 text-zinc-600">O produto solicitado não existe ou foi removido.</p>
                    <Link
                        to="/products"
                        className="mt-8 inline-flex items-center justify-center rounded-full border border-zinc-950 bg-zinc-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-zinc-800"
                    >
                        Voltar para produtos
                    </Link>
                </div>
            </main>
        </div>
    )
}
