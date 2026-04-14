import { Link } from 'react-router-dom'

export function NavbarTodas() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b-xl border-gray-100 py-4 px-4 shadow-sm transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-between gap-8 items-center">
          <div>
            <Link to="/" className="font-bold text-4xl"><span className="border-t-4 border-l-4 pl-2 border-black">Nike</span> x <span className="border-b-4 border-r-4 pr-2 border-black">Corinthians</span></Link>
          </div>
          <div className="flex items-center gap-8">
            <nav aria-label="Main Navigation" className="hidden lg:flex gap-8">
              <Link to="/#colecoes" className="hover:underline focus:outline-none focus:ring-2 focus:ring-black">Coleções</Link>
              <Link to="/#contato" className="hover:underline focus:outline-none focus:ring-2 focus:ring-black">Contato</Link>
              <Link to="/#artigo" className="hover:underline focus:outline-none focus:ring-2 focus:ring-black">Artigos</Link>
              <Link to="/#sobre" className="hover:underline focus:outline-none focus:ring-2 focus:ring-black">Sobre</Link>
            </nav>
            <span className="hidden lg:block text-gray-300">|</span>
          </div>
        </div>
      </div>
    </header>
  )
}
