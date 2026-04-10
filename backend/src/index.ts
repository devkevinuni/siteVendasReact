import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import { PrismaClient } from "@prisma/client";

const app = Fastify({ logger: true });
const prisma = new PrismaClient();
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "0.0.0.0";
const frontendOrigin = process.env.FRONTEND_ORIGIN || ["http://localhost:5173", "http://localhost:5174"];
const jwtSecret = process.env.JWT_SECRET || "nike-corinthians-dev-secret";
const vendorEmail = process.env.VENDOR_EMAIL || "vendedor@nike.com";
const vendorPassword = process.env.VENDOR_PASSWORD || "123456";

app.get("/", async () => {
  return { message: "Hello from backend" };
});

app.register(cors, {
  origin: frontendOrigin,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
});

app.register(jwt, {
  secret: jwtSecret,
});

const verifyJWT = async (request: { jwtVerify: () => Promise<void> }, reply: { status: (code: number) => { send: (payload: unknown) => unknown } }) => {
  try {
    await request.jwtVerify();
  } catch {
    return reply.status(401).send({ message: "Nao autorizado." });
  }
};

app.post("/auth/login", async (request, reply) => {
  const body = request.body as { email?: string; password?: string };
  const email = body.email?.trim().toLowerCase();
  const password = body.password;

  if (!email || !password) {
    return reply.status(400).send({ message: "Email e senha sao obrigatorios." });
  }

  if (email !== vendorEmail.toLowerCase() || password !== vendorPassword) {
    return reply.status(401).send({ message: "Credenciais invalidas." });
  }

  const token = await reply.jwtSign(
    { role: "vendor", email: vendorEmail },
    { expiresIn: "8h" }
  );

  return reply.send({
    token,
    user: {
      email: vendorEmail,
      role: "vendor",
    },
  });
});

app.get("/products", async (_, reply) => {
  const products = await prisma.product.findMany({
    orderBy: { id: "asc" },
  });

  return reply.send(products);
});

app.get("/products/:id", async (request, reply) => {
  const { id } = request.params as { id: string };
  const productId = Number(id);

  if (!Number.isInteger(productId) || productId <= 0) {
    return reply.status(400).send({ message: "ID do produto invalido." });
  }

  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    return reply.status(404).send({ message: "Produto nao encontrado." });
  }

  return reply.send(product);
});

app.get("/categories", async (_, reply) => {
  const products = await prisma.product.findMany({
    distinct: ['categoria'],
    select: { categoria: true },
    orderBy: { categoria: 'asc' },
  });

  const categories = products.map((p) => p.categoria);
  return reply.send(categories);
});

app.post("/products", { preHandler: verifyJWT }, async (request, reply) => {
  const body = request.body as {
    nome?: string;
    descricao?: string;
    preco?: number | string;
    categoria?: string;
    imagem_url?: string;
    estoque?: number;
  };

  const nome = body?.nome?.trim();
  const precoNumber = Number(body?.preco);

  if (!nome || Number.isNaN(precoNumber) || precoNumber <= 0) {
    return reply.status(400).send({
      message: "Produto precisa de nome e preco valido para ser criado.",
    });
  }

  const product = await prisma.product.create({
    data: {
      nome,
      preco: precoNumber,
      descricao: body.descricao?.trim() || "Produto Nike x Corinthians",
      categoria: body.categoria?.trim() || "geral",
      imagem_url:
        body.imagem_url?.trim() ||
        "https://placehold.co/800x900/f4f4f5/111827?text=Nike+x+Corinthians",
      estoque:
        typeof body.estoque === "number" && Number.isInteger(body.estoque) ? body.estoque : 0,
    },
  });

  return reply.status(201).send(product);
});

app.put("/products/:id", { preHandler: verifyJWT }, async (request, reply) => {
  const { id } = request.params as { id: string };
  const productId = Number(id);
  const body = request.body as {
    nome?: string;
    descricao?: string;
    preco?: number | string;
    categoria?: string;
    imagem_url?: string;
    estoque?: number;
  };

  if (!Number.isInteger(productId) || productId <= 0) {
    return reply.status(400).send({ message: "ID do produto invalido." });
  }

  const nome = body?.nome?.trim();
  const precoNumber = Number(body?.preco);

  if (!nome || Number.isNaN(precoNumber) || precoNumber <= 0) {
    return reply.status(400).send({
      message: "Produto precisa de nome e preco valido para ser atualizado.",
    });
  }

  const existingProduct = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!existingProduct) {
    return reply.status(404).send({ message: "Produto nao encontrado." });
  }

  const updatedProduct = await prisma.product.update({
    where: { id: productId },
    data: {
      nome,
      preco: precoNumber,
      descricao: body.descricao?.trim() || existingProduct.descricao,
      categoria: body.categoria?.trim() || existingProduct.categoria,
      imagem_url: body.imagem_url?.trim() || existingProduct.imagem_url,
      estoque:
        typeof body.estoque === "number" && Number.isInteger(body.estoque)
          ? body.estoque
          : existingProduct.estoque,
    },
  });

  return reply.send(updatedProduct);
});

app.delete("/products/:id", { preHandler: verifyJWT }, async (request, reply) => {
  const { id } = request.params as { id: string };
  const productId = Number(id);

  if (!Number.isInteger(productId) || productId <= 0) {
    return reply.status(400).send({ message: "ID do produto invalido." });
  }

  const existingProduct = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!existingProduct) {
    return reply.status(404).send({ message: "Produto nao encontrado." });
  }

  await prisma.product.delete({
    where: { id: productId },
  });

  return reply.status(204).send();
});

const start = async () => {
  try {
    await app.ready();
    await app.listen({ port, host });
    app.log.info(`Backend running at http://${host}:${port}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

const shutdown = async () => {
  await prisma.$disconnect();
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

void start();
