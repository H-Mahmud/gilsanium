import db from '.';
import { productsTable } from './schema';

const images: string[] = [
  '/assets/images/products/bag.png',
  '/assets/images/products/desktop.png',
  '/assets/images/products/laptop.png',
  '/assets/images/products/mobile.png',
  '/assets/images/products/1.jpg',
  '/assets/images/products/2.jpg',
  '/assets/images/products/3.jpg',
  '/assets/images/products/4.jpg',
  '/assets/images/products/5.jpg',
  '/assets/images/products/6.jpg',
  '/assets/images/products/7.jpg',
  '/assets/images/products/8.jpg',
  '/assets/images/products/9.jpg',
  '/assets/images/products/10.jpg',
];

const names: string[] = [
  'Mobile',
  'Laptop',
  'Bag',
  'Shoes',
  'T-shirt',
  'Watch',
  'Chair',
  'Table',
  'Pen',
  'Notebook',
  'Fan',
  'Mouse',
  'Keyboard',
  'Bottle',
  'Cap',
  'Gloves',
  'Socks',
  'Dress',
  'Wallet',
  'Brush',
  'Belt',
  'Jeans',
  'Lamp',
  'Hat',
  'Scarf',
  'Phone',
  'Tablet',
  'Clock',
  'Mug',
  'Glass',
  'Charger',
  'Cable',
  'Speaker',
  'Headset',
  'Pillow',
  'Blanket',
  'Toothbrush',
  'Mirror',
  'Comb',
  'Ring',
  'Earrings',
  'Necklace',
  'Shampoo',
  'Soap',
  'Cream',
  'Towel',
  'Boots',
  'Jacket',
  'Skirt',
];

const productsData: (typeof productsTable.$inferInsert)[] = Array.from({ length: 50 }, () => {
  const name = names[Math.floor(Math.random() * names.length)];
  const price = (Math.random() * 1000 + 10).toFixed(2); // as string
  const sale = Math.random() < 0.5;
  const salePrice = sale ? (parseFloat(price) * (Math.random() * 0.5 + 0.5)).toFixed(2) : null;

  const createdAt = new Date(
    Date.now() - Math.floor(Math.random() * 2 * 365 * 24 * 60 * 60 * 1000),
  );

  const product: typeof productsTable.$inferInsert = {
    name,
    price,
    featured: Math.random() < 0.5,
    image: images[Math.floor(Math.random() * images.length)],
    createdAt,
    sale,
    salePrice,
    updatedAt: new Date(),
  };

  return product;
});

async function seedProducts() {
  await db.insert(productsTable).values(productsData);
}

export const main = async () => {
  try {
    console.log('🌱 Seeding...');
    await seedProducts();
    console.log('✅ Seeding complete!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
};
