const { PrismaClient } = require("@prisma/client");
const { categories, subscription } = require("../lib/placeholder-data");

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  for (const category of categories) {
    const categoryExists = await prisma.category.findUnique({
      where: { slug: category.slug },
    });

    if (!categoryExists) {
      await prisma.category.create({
        data: category,
      });
      console.log(`Created category with slug: ${category.slug}`);
    }
  }
  for (const sub of subscription) {
    const subcriptionListExist = await prisma.subscription.findUnique({
      where: {id: sub.id}
    })
    if (!subcriptionListExist) {
      await prisma.subscription.create({
        data: sub
      })
    }
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
