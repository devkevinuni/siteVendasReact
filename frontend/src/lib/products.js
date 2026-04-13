const STORAGE_KEY = 'nike_products'

export const initialProducts = [
  {
    id: '1',
    nome: 'Camisa Corinthians 24/25',
    descricao: 'Camisa oficial Nike Corinthians, leve, respirável e moderna.',
    categoria: 'Uniforme',
    preco: 249.9,
    estoque: 8,
    imagem_url: 'https://static.netshoes.com.br/produtos/camisa-nike-corinthians-i-202526-torcedora-pro-feminina/28/SGL-0181-028/SGL-0181-028_zoom1.jpg?ts=1773313237&ims=1088x1088',
  },
  {
    id: '2',
    nome: 'Boné Nike Corinthians',
    descricao: 'Boné esportivo com logo oficial do Corinthians.',
    categoria: 'Acessório',
    preco: 89.9,
    estoque: 14,
    imagem_url: 'https://m.media-amazon.com/images/I/41Aja8JgrQL._AC_SX522_.jpg',
  },
  {
    id: '3',
    nome: 'Agasalho Corinthians',
    descricao: 'Agasalho térmico Nike ideal para dias frios.',
    categoria: 'Agasalho',
    preco: 329.9,
    estoque: 5,
    imagem_url: 'https://placehold.co/400x400/f4f4f5/111827?text=Agasalho+Corinthians',
  },
  {
    id: '4',
    nome: 'Mochila Nike',
    descricao: 'Mochila esportiva com compartimentos para treino e viagem.',
    categoria: 'Acessório',
    preco: 199.9,
    estoque: 12,
    imagem_url: 'https://placehold.co/400x400/f4f4f5/111827?text=Mochila+Nike',
  },
  {
    id: '5',
    nome: 'Tênis de treino',
    descricao: 'Tênis confortável para treino e uso diário.',
    categoria: 'Calçado',
    preco: 369.9,
    estoque: 7,
    imagem_url: 'https://placehold.co/400x400/f4f4f5/111827?text=Tenis+Nike',
  },
  {
    id: '6',
    nome: 'Tênis de treino',
    descricao: 'Tênis confortável para treino e uso diário.',
    categoria: 'Calçado',
    preco: 369.9,
    estoque: 7,
    imagem_url: 'https://placehold.co/400x400/f4f4f5/111827?text=Tenis+Nike',
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
