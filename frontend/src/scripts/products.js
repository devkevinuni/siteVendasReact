import shirtImage from "../assets/images/imgHero.jpg";
import shirtImage2 from "../assets/images/camisaAdm.jpg";
import shirtImage3 from "../assets/images/camisaEdFisica.jpg";
import shirtImage4 from "../assets/images/camisaEnfermagem.jpg";
import shirtImage5 from "../assets/images/garrafa.jpg";
import shirtImage6 from "../assets/images/caneca.jpg";
import shirtImage7 from "../assets/images/imgFim.jpg";

const STORAGE_KEY = 'uni_products'

export const initialProducts = [
  {
    id: '1',
    nome: 'Camisa Faço Administração',
    descricao: 'Camisa oficial do curso de Administração da Unilavras, feita com tecido leve e respirável.',
    categoria: 'Camisa',
    preco: 180.0,
    estoque: 8,
    imagem_url: shirtImage2,
  },
  {
    id: '2',
    nome: 'Camisa Faço Educação Física',
    descricao: 'Camisa oficial do curso de Educação Física da Unilavras, feita com tecido leve e respirável.',
    categoria: 'Camisa',
    preco: 180.0,
    estoque: 14,
    imagem_url: shirtImage3,
  },
  {
    id: '3',
    nome: 'Camisa Faço Engenharia Elétrica',
    descricao: 'Camisa oficial do curso de Engenharia Elétrica da Unilavras, feita com tecido leve e respirável.',
    categoria: 'Camisa',
    preco: 180.0,
    estoque: 10,
    imagem_url: shirtImage4,
  },
  {
    id: '4',
    nome: 'Garrafa de água esportiva',
    descricao: 'Garrafa de água esportiva com isolamento térmico, perfeita para manter suas bebidas frescas durante os treinos.',
    categoria: 'Garrafa',
    preco: 49.9,
    estoque: 12,
    imagem_url: shirtImage5,
  },
  {
    id: '5',
    nome: 'Caneca de cerâmica personalizada',
    descricao: 'Caneca de cerâmica com design personalizado, perfeita para uso diário.',
    categoria: 'Caneca',
    preco: 369.9,
    estoque: 7,
    imagem_url: shirtImage6,
  },
  {
    id: '6',
    nome: 'exemplo de estoque zerado',
    descricao: 'Descrição generica.',
    categoria: 'Calçado',
    preco: 314233231.9,
    estoque: 0,
    imagem_url: shirtImage7,
},
]

export function getSavedProducts() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return [...initialProducts]
    }

    const parsed = JSON.parse(stored)
    if (Array.isArray(parsed)) {
      return parsed
    }
  } catch (err) {
    console.error('Falha ao carregar produtos do localStorage:', err)
  }

  return [...initialProducts]
}

export function saveProducts(products) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
  } catch (err) {
    console.error('Falha ao salvar produtos no localStorage:', err)
  }
}

export function getProductCategories(products) {
  return Array.from(new Set(products.map((product) => product.categoria))).sort()
}
