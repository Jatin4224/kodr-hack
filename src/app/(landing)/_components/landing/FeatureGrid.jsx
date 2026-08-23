import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { features } from '../../data/features';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import {
  X,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Code2,
  Zap
} from 'lucide-react';

const modalDetails = {
  "Visual Canvas": {
    subtitle: "High-Performance Infinite Vector Engine",
    code: `// Canvas Rendering Engine Config
const canvas = new InfiniteCanvas({
  renderer: 'webgl2',
  spatialIndexing: 'rtree',
  targetFPS: 120,
  subpixelAntiAliasing: true
});`,
    specs: ["Sub-5ms rendering latencies", "R-Tree spatial partitioning", "Infinite zoom up to 10,000x"],
    interactiveText: "Click nodes to auto-fit viewport or toggle sub-graph isolation."
  },
  "Smart Relationships": {
    subtitle: "Strictly Typed Entity Linkage & Cascade Rules",
    code: `// Automatic Foreign Key Injection
ALTER TABLE orders 
ADD CONSTRAINT fk_user_id 
FOREIGN KEY (user_id) REFERENCES users(id) 
ON DELETE CASCADE ON UPDATE CASCADE;`,
    specs: ["Automatic Foreign Key injection", "Supports 1:1, 1:N, and N:M Junctions", "Circular reference detection"],
    interactiveText: "Drag connectors between tables to generate constrained schema relations automatically."
  },
  "Schema Validator": {
    subtitle: "Real-time Static Analysis & Rule Engine",
    code: `// Live Static Analysis Output
[VALIDATION_ERROR] line 42:
Missing index on foreign key 'order_id' in table 'line_items'.
Suggested Fix: CREATE INDEX idx_line_items_order_id;`,
    specs: ["Catches missing primary keys", "Warns on unindexed foreign keys", "Detects dead/orphaned tables"],
    interactiveText: "Scans architecture against Postgres & Prisma production best practices instantly."
  },
  "Auto Layout": {
    subtitle: "Graphviz & Dagre Automated Node Placement",
    code: `// Dagre Graph Placement Algorithm
const layout = dagre.layout({
  rankdir: 'TB',
  nodesep: 80,
  edgesep: 30,
  ranksep: 100
});`,
    specs: ["Graphviz force-directed layout", "Orthogonal edge routing", "Zero-overlap grid snapping"],
    interactiveText: "One-click auto-align turns chaotic spaghetti architecture into pristine diagrams."
  },
  "Version Timeline": {
    subtitle: "Git-style Time Travel & Architecture RFCs",
    code: `// Schema Diff Inspection
$ schema-studio diff v1.4.2..v1.5.0
+ ADD COLUMN users.mfa_enabled BOOLEAN DEFAULT false
~ ALTER COLUMN orders.total TYPE DECIMAL(12,2)`,
    specs: ["Git-based commit snapshots", "Visual schema diff viewer", "Rollback migration generator"],
    interactiveText: "Inspect architectural changes side-by-side with full team comment history."
  },
  "Code Sync": {
    subtitle: "Bi-directional AST Compiler Engine",
    code: `// Bi-Directional Compilation Pipeline
Canvas AST <---> Prisma Schema <---> Raw SQL DDL
Status: Out-of-sync resolved (0 conflicts)`,
    specs: ["Prisma, Drizzle, SQL DDL support", "Zero-loss round-trip compilation", "Typescript type generation"],
    interactiveText: "Changes on canvas update code immediately. Edits in code rebuild canvas nodes."
  }
};

export function FeatureGrid() {
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveFeature(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="features" className="py-28 bg-[#0A0A0C] relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[300px] bg-[#FF5733]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[250px] bg-[#FF4520]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Engineered for Scale"
          title="Built specifically for systems architects."
          description="Click any architectural feature below to launch interactive live inspection & code specs."
        />

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveFeature(item)}
                  className="cursor-pointer bg-[#141418] border border-white/10 hover:border-[#FF5733]/50 p-7 rounded-2xl transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-[0_10px_40px_rgba(255,87,51,0.15)]"
                >
                  {/* Glowing Top Edge Line on Hover */}
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF5733] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center justify-between">
                    <div className="p-3.5 bg-[#FF5733]/10 border border-[#FF5733]/20 rounded-xl text-[#FF5733] group-hover:bg-[#FF5733] group-hover:text-black transition-colors">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-mono text-[#FF5733] bg-[#FF5733]/10 border border-[#FF5733]/20 px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1">
                      <span>INSPECT</span>
                      <ArrowRight className="w-3 h-3 inline" />
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-xl mt-6 group-hover:text-[#FFA048] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#9E9EA8] mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#62626C]">
                    <span className="flex items-center"><Zap className="w-3.5 h-3.5 mr-1 text-[#FF5733]" /> Module Ready</span>
                    <span className="group-hover:text-white transition-colors">Click to test →</span>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal Overlay */}
      <AnimatePresence>
        {activeFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFeature(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Drawer Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-[#0A0A0C] border border-[#FF5733]/40 rounded-2xl shadow-[0_0_80px_rgba(255,87,51,0.25)] overflow-hidden z-10 font-sans"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#1A1A20] border-b border-white/10 select-none">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#FF5733]/20 text-[#FF5733] border border-[#FF5733]/30 rounded-lg">
                    {React.createElement(activeFeature.icon, { className: 'w-5 h-5' })}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{activeFeature.title}</h4>
                    <p className="text-xs font-mono text-[#FF5733]">
                      {modalDetails[activeFeature.title]?.subtitle || "Architectural Module"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveFeature(null)}
                  className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 text-[#9E9EA8] hover:text-white rounded-xl transition-colors flex items-center space-x-1 text-xs font-mono"
                >
                  <X className="w-4 h-4" />
                  <span className="hidden sm:inline">ESC</span>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                <p className="text-[#9E9EA8] text-base leading-relaxed">
                  {activeFeature.description}
                </p>

                {/* Specs List */}
                <div className="bg-[#0E0E12] border border-white/10 p-4 rounded-xl space-y-2 font-mono text-xs">
                  <span className="text-white/40 uppercase tracking-wider block mb-2">Technical Capabilities</span>
                  {modalDetails[activeFeature.title]?.specs.map((spec, i) => (
                    <div key={i} className="flex items-center space-x-2 text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5733] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Code Snippet Box */}
                <div>
                  <div className="flex items-center justify-between mb-2 text-xs font-mono text-[#62626C]">
                    <span className="flex items-center"><Code2 className="w-3.5 h-3.5 mr-1 text-[#FF5733]" /> System Implementation Snippet</span>
                    <span className="text-[#FF5733]">Live Runtime</span>
                  </div>
                  <div className="bg-[#0E0E12] p-4 rounded-xl border border-white/10 font-mono text-xs text-[#FFA048] overflow-x-auto">
                    <pre>{modalDetails[activeFeature.title]?.code}</pre>
                  </div>
                </div>

                {/* Interactive Action Note */}
                <div className="bg-[#FF5733]/10 border border-[#FF5733]/20 p-3.5 rounded-xl flex items-center space-x-3 text-xs font-mono text-[#FF5733]">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>{modalDetails[activeFeature.title]?.interactiveText}</span>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-[#1A1A20] border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#62626C]">
                  <Cpu className="w-4 h-4 text-[#FF5733]" />
                  <span>Module Status: ONLINE</span>
                </div>

                <button
                  onClick={() => setActiveFeature(null)}
                  className="bg-[#FF5733] hover:bg-[#FF4520] text-black font-bold px-5 py-2 rounded-xl text-xs transition-colors shadow-[0_0_15px_rgba(255,87,51,0.3)]"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}