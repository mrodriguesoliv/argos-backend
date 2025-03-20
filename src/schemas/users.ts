import { pgTable, serial, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("auth.users", {
  id: uuid("id").primaryKey(),
  email: text("email").notNull().unique(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
  role: text("role").default('authenticated'),
});
