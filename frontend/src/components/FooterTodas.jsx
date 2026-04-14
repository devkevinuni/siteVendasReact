export function FooterTodas() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Nike x Corinthians</h3>
                        <p className="text-gray-400 text-sm">Inovação nos esportes com o melhor do futebol brasileiro.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-4">Produtos</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white">Camisas</a></li>
                            <li><a href="#" className="hover:text-white">Shorts</a></li>
                            <li><a href="#" className="hover:text-white">Calçados</a></li>
                            <li><a href="#" className="hover:text-white">Acessórios</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-4">Sobre</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#sobre" className="hover:text-white">Nossa História</a></li>
                            <li><a href="#contato" className="hover:text-white">Contato</a></li>
                            <li><a href="#" className="hover:text-white">Suporte</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-4">Redes Sociais</h4>
                        <div className="flex items-center gap-4">
                            <a href="https://x.com/Corinthians" target="_blank" rel="external" className="text-gray-400 hover:text-white transition">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-4.11.63-6.41 3.09A4.51 4.51 0 0 0 12 5.64c0 .35.04.69.11 1.02A12.94 12.94 0 0 1 1.64 1.15 4.54 4.54 0 0 0 2.76 7.79 4.5 4.5 0 0 1 .89 7.15v.06a4.5 4.5 0 0 0 3.61 4.42 4.52 4.52 0 0 1-2.04.08 4.5 4.5 0 0 0 4.2 3.12A9 9 0 0 1 1 19.54a12.74 12.74 0 0 0 6.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.42-.02-.63A9.18 9.18 0 0 0 23 3z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/corinthians/" target="_blank" rel="external" className="text-gray-400 hover:text-white transition">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <path d="M17.5 6.5h.01" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center text-sm text-gray-400">
                    <p className="text-center sm:text-left">&copy; 2026 Nike x Corinthians. Todos os direitos reservados.</p>
                    <p className="text-center sm:text-right">Desenvolvido para a melhor experiência de compra.</p>
                </div>
            </div>
        </footer>
    )
}
