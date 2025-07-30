ALTER TABLE "products" ADD COLUMN "salePrice" numeric(10, 2) NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "sale" boolean DEFAULT false NOT NULL;