import { boolean, decimal, pgEnum, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const productsTable = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  image: varchar('image', { length: 255 }),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  salePrice: decimal('salePrice', { precision: 10, scale: 2 }),
  featured: boolean('featured').default(false).notNull(),
  sale: boolean('sale').default(false).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const orderStatus = pgEnum('status', ['completed', 'cancelled']);

export const ordersTable = pgTable('orders', {
  id: serial('id').primaryKey(),
  customerId: serial('customer_id').references(() => customersTable.id),
  status: orderStatus().default('completed').notNull(),
  total: decimal('total', { precision: 10, scale: 2 }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const orderItems = pgTable('order_items', {
  id: serial('id').primaryKey(),
  orderId: serial('order_id').references(() => ordersTable.id),
  productId: serial('product_id').references(() => productsTable.id),
});

export const customersTable = pgTable('customers', {
  id: serial('id').primaryKey(),
});
