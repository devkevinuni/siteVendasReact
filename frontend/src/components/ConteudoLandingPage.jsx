import { Link } from "react-router-dom";
import { useState } from "react";
import { validateContactForm } from "../scripts/validation";
import shirtImage from "../assets/images/imgHero.jpg";
import shirtImage2 from "../assets/images/camisaAdm.jpg";
import shirtImage3 from "../assets/images/camisaEdFisica.jpg";
import shirtImage4 from "../assets/images/camisaEnfermagem.jpg";
import shirtImage5 from "../assets/images/garrafa.jpg";
import shirtImage6 from "../assets/images/caneca.jpg";
import shirtImage7 from "../assets/images/imgFim.jpg";






export function ConteudoLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (validation.isValid) {
      console.log("Form válido:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setFormErrors({});
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setFormErrors(validation.errors);
    }
  };

  return (
    <main class="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      <section
        class="h-screen w-full snap-start bg-gradient-to-tr from-gray-200 to-gray-50 flex flex-col items-center justify-center text-black p-10 "
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="bg-white/80 flex flex-col gap-10 p-6 rounded-full items-center">
            <div className="flex gap-4 items-center">
              <div className="flex gap-1 text-yellow-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.8１.588-１h3.46１a１ １ ０ ００.９５１-.６９l１.０７-３.２９２z" />
                </svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-xs text-gray-600  font-medium">
                5/5 (nota maxima em qualidade e ensino)
              </span>
            </div>
            <h1 className="text-3xl  lg:text-6xl text-center font-sans font-black tracking-tight p-5 rounded-full bg-white/80  dark:text-sky-800">
              Inovação no ensino e em conforto
              <span className="block dark:text-sky-700 pt-4 text-xl lg:text-4xl font-normal">
                Faça seu estilo
              </span>
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a
                href="#colecoes"
                className="bg-sky-800 border-2 border-sky-900 text-white rounded-lg py-3 px-8 shadow-xl hover:bg-transparent hover:text-black transition duration-300"
              >
                Nossas coleções aqui
              </a>
              <Link
                to="/products"
                className="border-2 border-sky-900 text-sky-900 rounded-lg py-3 px-8 shadow-xl hover:bg-sky-800 hover:text-white transition duration-300"
              >
                Vendas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class="h-screen w-full snap-start bg-white/80 flex flex-col items-center justify-center text-black p-10">
        
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            <div
              className="flex w-full rounded-2xl p-8 min-h-[400px] md:min-h-[600px] lg:min-h-[800px] bg-cover bg-center border-white shadow relative overflow-hidden group"
              style={{ backgroundImage: `url(${shirtImage})` }}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>
              <div className="mt-auto flex flex-col md:flex-row gap-4 w-full relative z-10">
                
                
              </div>
            </div>
            <div id="artigo" className="w-full flex flex-col gap-4">
              <div className="w-full h-full rounded-2xl p-8 lg:p-12 bg-gradient-to-tr from-gray-200 to-gray-50 shadow-sm border border-gray-100 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                  O que é a Unistore?{" "}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A UniStore Unilavras é a loja oficial do Centro Universitário de Lavras (Unilavras), focada na venda de produtos institucionais, como camisetas, camisas e outros itens, permitindo que alunos e colaboradores vistam o "orgulho do Uni". Ela promove o estilo de vida acadêmico com opções como camisas básicas. A loja é um canal de comunicação entre a instituição e a comunidade acadêmica, oferecendo produtos que refletem a identidade e o espírito do Uni, fortalecendo o senso de pertencimento e orgulho entre os membros da comunidade universitária.
                </p>
                
              </div>
              <div className="h-full flex flex-col md:flex-row gap-4">
                <a
                  href="#"
                  className="relative min-h-[200px] flex w-full overflow-hidden rounded-2xl bg-gray-300 bg-cover bg-center border-transparent group "
                  style={{ backgroundImage: `url(${shirtImage5})` }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300"></div>
                  <p className="relative z-10 text-white text-lg font-bold mt-auto w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    #TodosUni
                  </p>
                </a>
                <a
                  href="#"
                  className="relative min-h-[200px] flex w-full overflow-hidden rounded-2xl bg-gray-300 bg-cover bg-center border-transparent group "
                  style={{ backgroundImage: `url(${shirtImage6})` }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300"></div>
                  <p className="relative z-10 text-white text-lg font-bold mt-auto w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    #OportunidadeDeSerUni
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="h-screen w-full snap-start bg-gradient-to-tr from-gray-200 to-gray-50 flex flex-col items-center justify-center text-black p-10">
        <div className="w-full max-w-7xl mx-auto">
          <div className="pb-10 flex justify-between items-end gap-8">
            <h2
              id="colecoes"
              className="text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Nossas coleções
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <article>
              <Link
                to="/products?categoria=Uniforme"
                className="group block w-full flex flex-col gap-4 h-full"
              >
                <div className="relative w-full aspect-video sm:aspect-square overflow-hidden rounded-2xl shadow-lg flex-shrink-0">
                  <span className="absolute top-4 right-4 z-10 flex items-center justify-center text-white bg-sky-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <img
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    src={shirtImage2}
                    alt="Camisa de Administração"
                  />
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl text-sky-900 sm:text-2xl font-bold">
                    Administração
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </Link>
            </article>
            <article>
              <Link
                to="#vendas"
                className="group block w-full flex flex-col gap-4 h-full"
              >
                <div className="relative w-full aspect-video sm:aspect-square overflow-hidden rounded-2xl shadow-lg flex-shrink-0">
                  <span className="absolute top-4 right-4 z-10 flex items-center justify-center text-white bg-sky-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <img
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    src={shirtImage4}
                    alt="Camisa de Engenharia Eletrica"
                  />
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 id="vendas" className="text-xl text-sky-900 sm:text-2xl font-bold">
                    Engenharia Elétrica
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </Link>
            </article>
            <article>
              <Link
                to="#"
                className="group block w-full flex flex-col gap-4 h-full"
              >
                <div className="relative w-full aspect-video sm:aspect-square overflow-hidden rounded-2xl shadow-lg flex-shrink-0">
                  <span className="absolute top-4 right-4 z-10 flex items-center justify-center text-white bg-sky-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <img
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    src={shirtImage3}
                    alt="Camisa de Educação Física"
                  />
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl text-sky-900 sm:text-2xl font-bold">
                    Educação Física
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section id="sobre" className="p-4 py-20" class="h-screen w-full snap-start bg-sky-900 flex flex-col items-center justify-center text-white p-10">
        <div className="w-full max-w-7xl mx-auto rounded-2xl p-8 lg:p-12 bg-gradient-to-tr from-gray-300 to-gray-50 shadow-sm border border-gray-300">
          <h2 className="text-sky-900 text-4xl lg:text-5xl font-bold mb-8">
            Sobre a Unilavras
          </h2>
          <p className="text-black/80 font-bold text-lg">
            <p className="text-gray-900 text-lg leading-relaxed">
                  O Centro Universitário de Lavras (UNILAVRAS), com mais de 60
                  anos de história, foi fundado pelo professor Canísio Ignácio
                  Lunkes. Iniciou suas atividades como a Faculdade de Filosofia,
                  Ciências e Letras (FAFI) em 1965, consolidando-se como uma das
                  principais instituições de ensino superior do sul de Minas
                  Gerais, focada na formação técnica e humana.
                </p>
          </p>
        </div>
      </section>

      <section id="contato" className="p-4 py-20" class="h-screen w-full snap-start bg-white/80 flex flex-col items-center justify-center text-black p-10">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-stretch gap-8">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src={shirtImage7}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <h2 className="relative z-10 text-blue-600/75 dark:text-sky-400/75 text-4xl lg:text-5xl font-bold p-8 lg:p-12">
                Contato
              </h2>
              <div className="absolute bottom-0 w-full p-6 lg:p-12">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl space-y-6">
                  <a
                    href="tel:123123123"
                    className="flex items-center text-gray-800 hover:text-black group"
                  >
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <span className="group-hover:underline text-lg font-medium ml-4">
                      +99 (99) 9 9999-9999
                    </span>
                  </a>
                  <a
                    href="mailto:nike@unilavras.edu.br"
                    className="flex items-center text-gray-800 hover:text-black group"
                  >
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span className="group-hover:underline text-lg font-medium ml-4">
                      unistore@unilavras.edu.br
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:p-8 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Faça já o seu pedido!
              </h2>
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Obrigado! Sua mensagem foi enviada com sucesso.
                  </p>
                </div>
              )}
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full bg-transparent text-gray-900 placeholder-gray-500 text-lg border-b-2 border-gray-300 focus:border-black focus:outline-none py-3"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu Email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full bg-transparent text-gray-900 placeholder-gray-500 text-lg border-b-2 border-gray-300 focus:border-black focus:outline-none py-3"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Seu Telefone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full bg-transparent text-gray-900 placeholder-gray-500 text-lg border-b-2 border-gray-300 focus:border-black focus:outline-none py-3"
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Descrição específica do pedido"
                    rows="4"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full bg-transparent text-gray-900 placeholder-gray-500 text-lg border-b-2 border-gray-300 focus:border-black focus:outline-none py-3 resize-none"
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-white text-lg font-semibold rounded-full bg-black hover:bg-gray-800"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
