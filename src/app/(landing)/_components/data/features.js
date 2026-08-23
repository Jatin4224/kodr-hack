import { Layout, GitFork, ShieldCheck, Zap, History, Code2 } from 'lucide-react';

export const features = [
  {
    icon: Layout,
    title: "Visual Canvas",
    description: "Infinite vector workspace with spatial grouping, smart snapping, and sub-second zooming."
  },
  {
    icon: GitFork,
    title: "Smart Relationships",
    description: "Strictly typed entity relations: 1:1, 1:N, N:M with automatic foreign key injection."
  },
  {
    icon: ShieldCheck,
    title: "Schema Validator",
    description: "Static analysis engine that catches circular dependencies and missing indexes instantly."
  },
  {
    icon: Zap,
    title: "Auto Layout",
    description: "Graphviz-powered automated node layout that turns database chaos into clean diagrams."
  },
  {
    icon: History,
    title: "Version Timeline",
    description: "Git-like version history for database design decisions and architectural RFCs."
  },
  {
    icon: Code2,
    title: "Code Sync",
    description: "Bi-directional compilation between visual nodes, Prisma, and native SQL DDL."
  }
];