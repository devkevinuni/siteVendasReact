import { Link } from 'react-router-dom'

export function LandingPage() {
  return (
    <>
      <div className="bg-white text-black antialiased">
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b-xl border-gray-100 py-4 px-4 shadow-sm transition-all duration-300">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex justify-between gap-8 items-center">
              <div>
                <a href="#" className="font-bold text-4xl"><span className="border-t-4 border-l-4 pl-2 border-black">Nike</span> x <span className="border-b-4 border-r-4 pr-2 border-black">Corinthians</span></a>
              </div>
              <div className="flex items-center gap-8">
                <nav aria-label="Main Navigation" className="hidden lg:flex gap-8">
                  <a href="#colecoes" className="hover:underline focus:outline-none focus:ring-2 focus:ring-black">Coleções</a>
                  <a href="#contato" className="hover:underline focus:outline-none focus:ring-2 focus:ring-black">Contato</a>
                  <a href="#artigo" className="hover:underline focus:outline-none focus:ring-2 focus:ring-black">Artigos</a>
                  <a href="#sobre" className="hover:underline focus:outline-none focus:ring-2 focus:ring-black">Sobre</a>
                </nav>
                <span className="hidden lg:block text-gray-300">|</span>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="p-4 py-10" data-aos="fade-down" data-aos-duration="1000">
            <div className="w-full max-w-7xl mx-auto">
              <div className="bg-white/40 flex flex-col gap-10 items-center">
                <div className="flex gap-4 items-center">
                  <div className="flex gap-1 text-yellow-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">4.9/5 (30 milhões de reviews)</span>
                </div>
                <h1 className="text-3xl shadow-sm lg:text-6xl text-center font-sans font-black tracking-tight">
                  Inovação nos Esportes: Eficiêcia e Conforto
                  <span className="block text-gray-600 pt-4 text-xl lg:text-4xl font-normal">Faça seu estilo</span>
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <a href="#colecoes" className="bg-black border-2 border-black text-white rounded-lg py-3 px-8 shadow-xl hover:bg-transparent hover:text-black transition duration-300">Nossas coleções aqui</a>
                  <Link to="/products" className="border-2 border-black text-black rounded-lg py-3 px-8 shadow-xl hover:bg-black hover:text-white transition duration-300">Vendas</Link>
                </div>
              </div>
            </div>
          </section>

          <section className="p-4 py-20">
            <div className="w-full max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex w-full rounded-2xl p-8 min-h-[400px] md:min-h-[600px] lg:min-h-[800px] bg-cover bg-center border relative overflow-hidden group bg-[url('https://imgnike-a.akamaihd.net/branding/futebol/camisas/corinthians/2025//cdp-camisa-3/assets/img/carrossel-2/camisa-nike-corinthians-i-2025-26-jogador-masculina.png')]">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>
                  <div className="mt-auto flex flex-col md:flex-row gap-4 w-full relative z-10">
                    <a href="#sobre" className="bg-white hover:bg-black hover:text-white p-2 text-lg font-medium rounded-full w-full flex justify-between items-center transition duration-300">
                      <span className="pl-4">Sobre</span>
                      <span className="flex items-center justify-center bg-black text-white rounded-full w-10 h-10 group-hover:bg-white group-hover:text-black transition duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                      </span>
                    </a>
                    <a href="#contato" className="bg-white hover:bg-black hover:text-white p-2 text-lg font-medium rounded-full w-full flex justify-between items-center transition duration-300">
                      <span className="pl-4">Contato</span>
                      <span className="flex items-center justify-center bg-black text-white rounded-full w-10 h-10 group-hover:bg-white group-hover:text-black transition duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div id="artigo" className="w-full flex flex-col gap-4">
                  <div className="w-full h-full rounded-2xl p-8 lg:p-12 bg-gradient-to-tr from-gray-200 to-gray-50 shadow-sm border border-gray-100 flex flex-col justify-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">O dia que a loucura virou mundial!</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">O Corinthians e a Nike apresentam a nova camisa principal, uma peça que carrega em seu design a história e o orgulho de uma das maiores conquistas do futebol brasileiro. Inspirado no mundial de 2000, o uniforme resgata a emoção daquele título inesquecível, quando o Corinthians fez história.</p>
                  </div>
                  <div className="h-full flex flex-col md:flex-row gap-4">
                    <a href="#" className="relative min-h-[200px] flex w-full overflow-hidden rounded-2xl bg-gray-300 bg-cover bg-center border group bg-[url('https://imgnike-a.akamaihd.net/strapi/nike/epdp_camisa_desk_v1_dc3bd7e5db/epdp_camisa_desk_v1_dc3bd7e5db.jpg')]">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300"></div>
                      <p className="relative z-10 text-white text-lg font-bold mt-auto w-full p-4 bg-gradient-to-t from-black/80 to-transparent">#MundialNike</p>
                    </a>
                    <a href="#" className="relative min-h-[200px] flex w-full overflow-hidden rounded-2xl bg-gray-300 bg-cover bg-center border group bg-[url('https://imgnike-a.akamaihd.net/strapi/nike/epdp_masc_desktop_3ab968e2fe/epdp_masc_desktop_3ab968e2fe.jpg')]">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300"></div>
                      <p className="relative z-10 text-white text-lg font-bold mt-auto w-full p-4 bg-gradient-to-t from-black/80 to-transparent">#MantoDoProtagonista</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-4 py-20">
            <div className="w-full max-w-7xl mx-auto">
              <div className="pb-10 flex justify-between items-end gap-8">
                <h2 id="colecoes" className="text-4xl lg:text-5xl font-bold tracking-tight">Nossas coleções</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <article>
                  <a href="#" className="group block w-full flex flex-col gap-4 h-full">
                    <div className="relative w-full aspect-video sm:aspect-square overflow-hidden rounded-2xl shadow-lg flex-shrink-0">
                      <span className="absolute top-4 right-4 z-10 flex items-center justify-center text-white bg-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </span>
                      <img className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" src="https://imgnike-a.akamaihd.net/branding/futebol/camisas/corinthians/2025//cdp-camisa-3/assets/img/desk/banner-corinthians-total-90.png" alt="Nova coleção" />
                    </div>
                    <div className="flex-grow flex flex-col"><h3 className="text-xl sm:text-2xl font-bold">Nova Coleção</h3><p className="text-gray-600 mt-2 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                  </a>
                </article>
                <article>
                  <Link to="/products" className="group block w-full flex flex-col gap-4 h-full">
                    <div className="relative w-full aspect-video sm:aspect-square overflow-hidden rounded-2xl shadow-lg flex-shrink-0">
                      <span className="absolute top-4 right-4 z-10 flex items-center justify-center text-white bg-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </span>
                      <img className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" src="https://imgnike-a.akamaihd.net/branding/futebol/camisas/corinthians/2025//cdp-camisa-3/assets/img/camisa-3-corinthians-v2.gif" alt="Vendas" />
                    </div>
                    <div className="flex-grow flex flex-col"><h3 id="vendas" className="text-xl sm:text-2xl font-bold">Vendas</h3><p className="text-gray-600 mt-2 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                  </Link>
                </article>
                <article>
                  <a href="#" className="group block w-full flex flex-col gap-4 h-full">
                    <div className="relative w-full aspect-video sm:aspect-square overflow-hidden rounded-2xl shadow-lg flex-shrink-0">
                      <span className="absolute top-4 right-4 z-10 flex items-center justify-center text-white bg-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </span>
                      <img className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" src="https://imgnike-a.akamaihd.net/branding/futebol/camisas/corinthians/2025//cdp-camisa-3/assets/img/atleta-corinthians-1.png" alt="Todos vestem" />
                    </div>
                    <div className="flex-grow flex flex-col"><h3 className="text-xl sm:text-2xl font-bold">Todos vestem</h3><p className="text-gray-600 mt-2 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                  </a>
                </article>
              </div>
            </div>
          </section>

          <section id="sobre" className="p-4 py-20">
            <div className="w-full max-w-7xl mx-auto rounded-2xl p-8 lg:p-12 bg-gradient-to-tr from-gray-200 to-gray-50 shadow-sm border border-gray-100">
              <h2 className="text-black text-4xl lg:text-5xl font-bold mb-8">Sobre a parceria Nike x Corinthians</h2>
              <p className="text-black/80 font-sans text-lg">A parceria entre Nike e Corinthians, uma das mais longevas e icônicas do futebol brasileiro, teve seu início oficial em dezembro de 2002. A marca americana chegou com o objetivo de associar sua imagem a um clube de massa, visando o maior mercado consumidor do país, São Paulo, e ofereceu um projeto de internacionalização da marca Corinthians, incluindo a valorização do título mundial de 2000.</p>
            </div>
          </section>

          <section id="contato" className="p-4 py-20">
            <div className="w-full max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 grid-cols-1 items-stretch gap-8">
                <div className="relative w-full h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://imgnike-a.akamaihd.net/branding/futebol/camisas/corinthians/2025//cdp-camisa-3/assets/img/desk/footer-corinthians-nike-futebol-desk.jpg" alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <h2 className="relative z-10 text-white text-4xl lg:text-5xl font-bold p-8 lg:p-12">Contato</h2>
                  <div className="absolute bottom-0 w-full p-6 lg:p-12">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl space-y-6">
                      <a href="tel:123123123" className="flex items-center text-gray-800 hover:text-black group">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        <span className="group-hover:underline text-lg font-medium ml-4">+99 (99) 9 9999-9999</span>
                      </a>
                      <a href="mailto:nike@unilavras.edu.br" className="flex items-center text-gray-800 hover:text-black group">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        <span className="group-hover:underline text-lg font-medium ml-4">nike@unilavras.edu.br</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:p-8 flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-8">Nos mande uma mensagem!</h2>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Seu Nome" className="w-full bg-transparent text-gray-900 placeholder-gray-500 text-lg border-b-2 border-gray-300 focus:border-black focus:outline-none py-3" />
                    <input type="email" placeholder="Seu Email" className="w-full bg-transparent text-gray-900 placeholder-gray-500 text-lg border-b-2 border-gray-300 focus:border-black focus:outline-none py-3" />
                    <input type="tel" placeholder="Seu Telefone" className="w-full bg-transparent text-gray-900 placeholder-gray-500 text-lg border-b-2 border-gray-300 focus:border-black focus:outline-none py-3" />
                    <textarea placeholder="Como podemos ajudar?" rows="4" className="w-full bg-transparent text-gray-900 placeholder-gray-500 text-lg border-b-2 border-gray-300 focus:border-black focus:outline-none py-3 resize-none" />
                    <button type="submit" className="w-full py-4 text-white text-lg font-semibold rounded-full bg-black hover:bg-gray-800">Enviar</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-gray-200 p-4 pb-10 pt-10">
          <div className="mx-auto max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600">
            <div className="flex space-x-6">
              <a href="https://x.com/Corinthians" target="_blank" rel="external" className="text-gray-400 hover:text-black">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" /></svg>
              </a>
              <a href="https://www.instagram.com/corinthians/" target="_blank" rel="external" className="text-gray-400 hover:text-black">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" /></svg>
              </a>
            </div>
            <p className="text-center text-sm">&copy; All rights reserved</p>
            <span className="text-sm font-medium">Copyright © 2026</span>
          </div>
        </footer>
      </div>
    </>
  )
}
