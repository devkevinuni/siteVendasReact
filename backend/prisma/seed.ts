import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    nome: "Camisa Nike Corinthians I 2025/26 Torcedor",
    descricao: "Camisa oficial 1 do Corinthians Nike x Corinthians, versão torcedor.",
    preco: 349.9,
    categoria: "camisas",
    imagem_url: "https://images.example.com/nike-corinthians/camisa-1-2025.jpg",
    estoque: 42,
  },
  {
    nome: "Camisa Nike Corinthians II 2025/26 Torcedor",
    descricao: "Camisa oficial 2 do Corinthians Nike x Corinthians, tecido respirável.",
    preco: 349.9,
    categoria: "camisas",
    imagem_url: "https://images.example.com/nike-corinthians/camisa-2-2025.jpg",
    estoque: 38,
  },
  {
    nome: "Camisa Nike Corinthians Pré-Jogo",
    descricao: "Camisa pré-jogo com estampa exclusiva da coleção Nike x Corinthians.",
    preco: 299.9,
    categoria: "camisas",
    imagem_url: "https://images.example.com/nike-corinthians/pre-jogo.jpg",
    estoque: 25,
  },
  {
    nome: "Jaqueta Nike Corinthians Hino",
    descricao: "Jaqueta corta-vento com escudo do clube e acabamento premium.",
    preco: 499.9,
    categoria: "jaquetas",
    imagem_url: "https://images.example.com/nike-corinthians/jaqueta-hino.jpg",
    estoque: 20,
  },
  {
    nome: "Jaqueta Nike Corinthians Academy",
    descricao: "Jaqueta de treino Academy com tecnologia de secagem rápida.",
    preco: 459.9,
    categoria: "jaquetas",
    imagem_url: "https://images.example.com/nike-corinthians/jaqueta-academy.jpg",
    estoque: 18,
  },
  {
    nome: "Moletom Nike Corinthians Club Fleece",
    descricao: "Moletom com capuz em fleece macio da linha oficial do clube.",
    preco: 429.9,
    categoria: "jaquetas",
    imagem_url: "https://images.example.com/nike-corinthians/moletom-fleece.jpg",
    estoque: 30,
  },
  {
    nome: "Boné Nike Corinthians Heritage86",
    descricao: "Boné ajustável com logo bordado e aba curva.",
    preco: 159.9,
    categoria: "acessorios",
    imagem_url: "https://images.example.com/nike-corinthians/bone-heritage86.jpg",
    estoque: 55,
  },
  {
    nome: "Mochila Nike Corinthians Stadium",
    descricao: "Mochila oficial com compartimento para notebook e divisórias internas.",
    preco: 279.9,
    categoria: "acessorios",
    imagem_url: "https://images.example.com/nike-corinthians/mochila-stadium.jpg",
    estoque: 22,
  },
  {
    nome: "Meião Nike Corinthians Match",
    descricao: "Meião de jogo com compressão leve e ajuste anatômico.",
    preco: 89.9,
    categoria: "acessorios",
    imagem_url: "https://images.example.com/nike-corinthians/meiao-match.jpg",
    estoque: 80,
  },
  {
    nome: "Bola Nike Corinthians Supporter",
    descricao: "Bola temática da coleção Nike x Corinthians para treino e lazer.",
    preco: 199.9,
    categoria: "acessorios",
    imagem_url: "https://images.example.com/nike-corinthians/bola-supporter.jpg",
    estoque: 16,
  },
];

async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: products });
  console.log(`Seed concluido: ${products.length} produtos inseridos.`);
}

main()
  .catch((error) => {
    console.error("Erro ao executar seed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
