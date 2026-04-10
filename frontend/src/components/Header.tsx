import { Link, NavLink } from 'react-router-dom'

type BrandLogoProps = {
  src: string
  alt: string
}

function BrandLogo({ src, alt }: BrandLogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-7 w-auto object-contain sm:h-9"
      loading="lazy"
      decoding="async"
    />
  )
}

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="flex items-center gap-3 sm:gap-5">
          <BrandLogo
            src="https://placehold.co/140x44/ffffff/111111?text=NIKE"
            alt="Logo Nike"
          />
          <span className="h-6 w-px bg-zinc-300 sm:h-7" aria-hidden />
          <BrandLogo
            src="https://placehold.co/140x44/f4f4f5/111111?text=CORINTHIANS"
            alt="Logo Corinthians"
          />
        </Link>

        <nav className="flex w-full flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] md:w-auto md:justify-end">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 transition ${isActive ? 'bg-zinc-950 text-white' : 'text-zinc-700 hover:text-zinc-950'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `px-3 py-2 transition ${isActive ? 'bg-zinc-950 text-white' : 'text-zinc-700 hover:text-zinc-950'}`
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/product/1"
            className={({ isActive }) =>
              `px-3 py-2 transition ${isActive ? 'bg-zinc-950 text-white' : 'text-zinc-700 hover:text-zinc-950'}`
            }
          >
            Detalhe
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `px-3 py-2 transition ${isActive ? 'bg-zinc-950 text-white' : 'text-zinc-700 hover:text-zinc-950'}`
            }
          >
            Carrinho
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `px-3 py-2 transition ${isActive ? 'bg-zinc-950 text-white' : 'text-zinc-700 hover:text-zinc-950'}`
            }
          >
            Admin
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
