import { boolean, numeric, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const productsTable = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  image: varchar('image', { length: 255 }),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  featured: boolean('featured').default(false).notNull(),
});
