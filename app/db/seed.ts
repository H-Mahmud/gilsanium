import db from '.';
import { productsTable } from './schema';

async function seedProducts() {
  const productsData: (typeof productsTable.$inferInsert)[] = [
    {
      name: 'Dell XPS 13 Laptop',
      image:
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      price: '999.99',
      featured: true,
    },
    {
      name: 'Canon EOS R6 Camera',
      image:
        'https://images.unsplash.com/photo-1588392382834-a891154bca4d?auto=format&fit=crop&w=800&q=80',
      price: '1899.99',
      featured: true,
    },
    {
      name: 'iPhone 14 Pro',
      image:
        'https://images.unsplash.com/photo-1661961112955-4985b65cba06?auto=format&fit=crop&w=800&q=80',
      price: '1099.0',
      featured: false,
    },
    {
      name: 'Samsung Galaxy S23',
      image:
        'https://images.unsplash.com/photo-1677094307377-279b1091e84f?auto=format&fit=crop&w=800&q=80',
      price: '849.99',
      featured: false,
    },
    {
      name: 'Sony WH-1000XM5 Headphones',
      image:
        'https://images.unsplash.com/photo-1585386959984-a4155224c450?auto=format&fit=crop&w=800&q=80',
      price: '399.99',
      featured: true,
    },
    {
      name: 'Apple MacBook Air M2',
      image:
        'https://images.unsplash.com/photo-1585241936934-8d50b30c80e5?auto=format&fit=crop&w=800&q=80',
      price: '1249.0',
      featured: false,
    },
    {
      name: 'GoPro HERO11',
      image:
        'https://images.unsplash.com/photo-1613909207039-ec9a90c35ee3?auto=format&fit=crop&w=800&q=80',
      price: '499.99',
      featured: false,
    },
    {
      name: 'Microsoft Surface Laptop 5',
      image:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      price: '1299.99',
      featured: true,
    },
  ];

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
