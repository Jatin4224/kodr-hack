import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Copy, Check, Terminal, Code2, Database, FileCode, Cpu } from 'lucide-react';

const codeSnippets = {
  drizzle: `import { pgTable, uuid, varchar, timestamp, decimal, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: text('name'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const orders = pgTable('orders', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  totalAmount: decimal('total_amount', { precision: 10, scale: 2 }).notNull(),
});`,

  prisma: `datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  email     String   @unique @db.VarChar(255)
  name      String?
  orders    Order[]
  createdAt DateTime @default(now()) @map("created_at")

  @@map("users")
}

model Order {
  id          String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId      String   @map("user_id") @db.Uuid
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  totalAmount Decimal  @map("total_amount") @db.Decimal(10, 2)

  @@map("orders")
}`,

  postgres: `-- Schema Studio Auto-Generated SQL DDL Migration
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    total_amount DECIMAL(10, 2) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_orders_user_id ON public.orders(user_id);`,

  json: `{
  "$schema": "https://schemastudio.dev/schema.v2.json",
  "version": "2.0",
  "entities": [
    {
      "name": "users",
      "columns": [
        { "name": "id", "type": "UUID", "primary": true, "default": "gen_random_uuid()" },
        { "name": "email", "type": "VARCHAR(255)", "unique": true, "nullable": false },
        { "name": "name", "type": "TEXT", "nullable": true }
      ]
    },
    {
      "name": "orders",
      "columns": [
        { "name": "id", "type": "UUID", "primary": true },
        { "name": "user_id", "type": "UUID", "foreignKey": { "target": "users.id", "onDelete": "CASCADE" } },
        { "name": "total_amount", "type": "DECIMAL(10,2)", "nullable": false }
      ]
    }
  ]
}`
};

export function CodeGenerationSection() {
  const [activeTab, setActiveTab] = useState('drizzle');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: 'drizzle', name: 'Drizzle ORM', icon: FileCode },
    { id: 'prisma', name: 'Prisma Schema', icon: Code2 },
    { id: 'postgres', name: 'PostgreSQL DDL', icon: Database },
    { id: 'json', name: 'AST JSON', icon: Terminal },
  ];

  return (
    <section id="code" className="py-28 bg-[#0A0A0C] border-t border-white/10 relative overflow-hidden">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FF5733]/15 via-[#FF4520]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Zero Lock-in Engine"
          title="Design visually. Compile to clean code."
          description="Your visual canvas acts as an Abstract Syntax Tree (AST), instantly syncing changes into battle-tested migrations and type-safe schemas."
        />

        <Reveal className="mt-12 bg-[#141418] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          {/* Top Bar Header */}
          <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-[#1A1A20] border-b border-white/10 gap-4 select-none">
            {/* Window Controls */}
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5733]/60 border border-[#FF5733]" />
                <div className="w-3 h-3 rounded-full bg-amber-500/40 border border-amber-500/60" />
                <div className="w-3 h-3 rounded-full bg-white/20 border border-white/30" />
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="flex items-center space-x-2 text-xs font-mono text-[#9E9EA8]">
                <Cpu className="w-3.5 h-3.5 text-[#FF5733]" />
                <span className="text-white font-bold">Compiler Target:</span>
                <span className="text-[#FF5733] uppercase font-semibold">{activeTab}</span>
              </div>
            </div>

            {/* Framework Selectors */}
            <div className="flex flex-wrap items-center bg-[#0A0A0C] p-1 rounded-xl border border-white/10 gap-1 font-mono text-xs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-[#FF5733]/20 text-[#FF5733] border border-[#FF5733]/40 shadow-[0_0_15px_rgba(255,87,51,0.2)] font-bold'
                        : 'text-[#9E9EA8] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Copy Action Button */}
            <button
              onClick={handleCopy}
              className="flex items-center space-x-2 text-xs font-mono text-[#9E9EA8] hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/10 transition-all active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#FF5733]" /> : <Copy className="w-3.5 h-3.5 text-[#FF5733]" />}
              <span className="font-semibold">{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>

          {/* Editor Body */}
          <div className="relative p-6 bg-[#0E0E12] font-mono text-xs sm:text-sm overflow-x-auto min-h-[380px] flex">
            {/* Line Numbers */}
            <div className="select-none text-white/20 pr-6 text-right border-r border-white/5 space-y-1 font-mono hidden sm:block">
              {codeSnippets[activeTab].split('\n').map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            {/* Code Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="pl-6 flex-1 text-[#FFA048]/90 leading-relaxed font-mono"
              >
                <pre className="whitespace-pre-wrap">{codeSnippets[activeTab]}</pre>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Info Strip */}
          <div className="px-5 py-3 bg-[#1A1A20] border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-[#62626C]">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5733] animate-pulse" />
              <span>Bi-directional compilation active</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>Strict Typing: ON</span>
              <span>•</span>
              <span>Migration Safe: YES</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}