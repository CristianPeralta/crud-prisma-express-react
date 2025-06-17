import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: 'Laptop Gamer X1',
      price: 1200000,
    },
    {
      name: 'Smartphone Pro 12',
      price: 850000,
    },
    {
      name: 'Auriculares Inalámbricos',
      price: 150000,
    },
    {
      name: 'Teclado Mecánico RGB',
      price: 250000,
    },
    {
      name: 'Mouse Inalámbrico',
      price: 120000,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { name: product.name },
      update: {},
      create: product,
    });
  }

  console.log('Seed data has been added successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
