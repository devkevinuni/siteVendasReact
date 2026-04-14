const brlFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

export function ProductPageDetails({ product }) {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-950">
            <main className="px-4 py-10 sm:px-6 sm:py-16">
                <div className="mx-auto w-full max-w-6xl space-y-8">
                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                            <img
                                src={product.imagem_url}
                                alt={product.nome}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">Detalhes do produto</p>
                                <h1 className="mt-3 text-3xl font-black uppercase tracking-tight text-zinc-950">{product.nome}</h1>
                            </div>
                            <div className="space-y-4">
                                <p className="text-sm leading-relaxed text-zinc-700">{product.descricao}</p>
                                <div className="rounded-3xl bg-zinc-100 p-4">
                                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Categoria</p>
                                    <p className="mt-2 text-lg font-semibold text-zinc-950">{product.categoria}</p>
                                </div>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-3xl bg-zinc-100 p-4">
                                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Preço</p>
                                        <p className="mt-2 text-2xl font-black text-zinc-950">{brlFormatter.format(product.preco)}</p>
                                    </div>
                                    <div className="rounded-3xl bg-zinc-100 p-4">
                                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Estoque</p>
                                        <p className="mt-2 text-2xl font-black text-zinc-950">{product.estoque > 0 ? `${product.estoque} disponível` : 'Esgotado'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="/products"
                                    className="inline-flex items-center justify-center rounded-full border border-zinc-950 bg-zinc-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-zinc-800"
                                >
                                    Voltar para produtos
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-full border border-zinc-950 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-950 transition hover:bg-zinc-100"
                                >
                                    Comprar agora
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
