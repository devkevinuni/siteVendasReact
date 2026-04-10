import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col justify-between">
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-2xl space-y-8 text-center">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://placehold.co/120x40/ffffff/000000?text=NIKE"
                alt="Logo Nike"
                className="h-8 w-auto object-contain sm:h-10"
                loading="lazy"
              />
              <span className="w-px h-10 bg-zinc-700 sm:h-12" aria-hidden />
              <img
                src="https://placehold.co/120x40/f4f4f5/000000?text=CORINTHIANS"
                alt="Logo Corinthians"
                className="h-8 w-auto object-contain sm:h-10"
                loading="lazy"
              />
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl font-black uppercase leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
              Nike x Corinthians
            </h1>
            <p className="text-base text-zinc-300 sm:text-lg md:text-xl">
              Performance, identidade e paixão em cada peça. Descubra a coleção exclusiva que une 
              excelência Nike com a força do Corinthians.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 border border-white bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-950 transition hover:bg-zinc-100 active:scale-95"
            >
              Acessar Loja
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-8 text-xs uppercase tracking-widest text-zinc-400 sm:text-sm">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white sm:text-3xl">100%</div>
              <p>Autêntico</p>
            </div>
            <div className="space-y-2 border-l border-r border-zinc-700">
              <div className="text-2xl font-bold text-white sm:text-3xl">Rápido</div>
              <p>Envio</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white sm:text-3xl">24h</div>
              <p>Suporte</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs uppercase tracking-[0.18em] text-zinc-500">
            © 2025 Nike x Corinthians. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
