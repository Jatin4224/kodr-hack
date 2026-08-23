import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Key,
  Link2,
  Download,
  Layers,
  Code2,
  Plus,
  Trash2,
  Copy,
  Terminal,
  Activity
} from 'lucide-react';

export function HeroCanvas() {
  const [activeTab, setActiveTab] = useState('canvas');
  const [selectedNode, setSelectedNode] = useState('orders');
  const [customColumns, setCustomColumns] = useState({
    users: [
      { name: 'id', type: 'UUID', key: 'PK' },
      { name: 'email', type: 'VARCHAR(255)', key: 'UNIQUE' },
      { name: 'created_at', type: 'TIMESTAMP', key: null }
    ],
    orders: [
      { name: 'id', type: 'UUID', key: 'PK' },
      { name: 'user_id', type: 'UUID', key: 'FK' },
      { name: 'amount', type: 'DECIMAL(10,2)', key: null },
      { name: 'status', type: 'ORDER_STATUS', key: null }
    ],
    products: [
      { name: 'id', type: 'UUID', key: 'PK' },
      { name: 'title', type: 'TEXT', key: null },
      { name: 'price', type: 'INTEGER', key: null }
    ]
  });

  const [newColName, setNewColName] = useState('');

  const addColumn = () => {
    if (!newColName.trim()) return;
    setCustomColumns((prev) => ({
      ...prev,
      [selectedNode]: [
        ...prev[selectedNode],
        { name: newColName.toLowerCase().replace(/\s+/g, '_'), type: 'VARCHAR(255)', key: null }
      ]
    }));
    setNewColName('');
  };

  const removeColumn = (indexToRemove) => {
    setCustomColumns((prev) => ({
      ...prev,
      [selectedNode]: prev[selectedNode].filter((_, idx) => idx !== indexToRemove)
    }));
  };

  const generatedSQL = `-- Auto-generated Schema Studio DDL export\n
CREATE TYPE order_status AS ENUM ('pending', 'completed', 'failed');

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  status order_status DEFAULT 'pending'
);`;

  return (
    <div className="relative w-full rounded-2xl border border-white/15 bg-[#0A0A0C] shadow-[0_25px_90px_rgba(0,0,0,0.95)] overflow-hidden font-sans">
      {/* Application Top Bar */}
      <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-[#1A1A20] border-b border-white/10 select-none gap-4">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5733]/60 border border-[#FF5733]" />
            <div className="w-3 h-3 rounded-full bg-amber-500/40 border border-amber-500/60" />
            <div className="w-3 h-3 rounded-full bg-white/20 border border-white/30" />
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="text-white font-bold">schema-studio</span>
            <span className="text-white/30">/</span>
            <span className="text-[#FF5733] font-semibold">e_commerce_core.db</span>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center bg-[#0A0A0C] p-1 rounded-lg border border-white/10 font-mono text-xs">
          <button
            onClick={() => setActiveTab('canvas')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-md transition-colors ${
              activeTab === 'canvas' ? 'bg-[#FF5733]/20 text-[#FF5733] border border-[#FF5733]/30 font-bold' : 'text-[#9E9EA8] hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Visual Canvas</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-md transition-colors ${
              activeTab === 'code' ? 'bg-[#FF5733]/20 text-[#FF5733] border border-[#FF5733]/30 font-bold' : 'text-[#9E9EA8] hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>SQL / Prisma</span>
          </button>
        </div>

        {/* Status indicator */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-[#FF5733]/10 border border-[#FF5733]/30 px-3 py-1 rounded-full text-xs font-mono text-[#FF5733]">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>Valid Schema</span>
          </div>
          <button className="flex items-center space-x-1.5 text-xs font-bold bg-[#FF5733] hover:bg-[#FF4520] text-black px-3.5 py-1.5 rounded-lg transition-colors shadow-md">
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Export DDL</span>
          </button>
        </div>
      </div>

      {/* Main Workspace Area */}
      <div className="relative min-h-[520px] bg-[#0E0E12] overflow-hidden flex flex-col md:flex-row">
        {/* TAB 1: VISUAL CANVAS ENGINE */}
        {activeTab === 'canvas' && (
          <div className="flex-1 relative p-6 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] overflow-hidden">
            {/* SVG Relationship Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#FF5733]/50" strokeWidth="2" strokeDasharray="5 5">
              <path d="M 260 170 C 340 170, 340 240, 420 240" fill="none" className="animate-[dash_15s_linear_infinite]" />
              <path d="M 640 240 C 720 240, 720 170, 800 170" fill="none" />
            </svg>

            {/* Canvas Nodes Container */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start pt-6">
              {/* Table Node: USERS */}
              <motion.div
                onClick={() => setSelectedNode('users')}
                whileHover={{ y: -3 }}
                className={`cursor-pointer rounded-xl bg-[#141418] border transition-all duration-200 ${
                  selectedNode === 'users'
                    ? 'border-[#FF5733] shadow-[0_0_25px_rgba(255,87,51,0.25)] ring-1 ring-[#FF5733]'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                <div className="bg-[#1A1A20] px-4 py-2.5 border-b border-white/10 flex justify-between items-center rounded-t-xl">
                  <span className="font-mono text-sm font-bold text-white flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#FFA048] mr-2" /> users
                  </span>
                  <span className="text-[10px] font-mono text-[#FFA048] bg-[#FFA048]/10 border border-[#FFA048]/20 px-2 py-0.5 rounded">ENTITY</span>
                </div>
                <div className="p-3.5 space-y-2 font-mono text-xs">
                  {customColumns.users.map((col, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white/[0.02] hover:bg-white/[0.05] p-2 rounded border border-white/5">
                      <span className="flex items-center text-white">
                        {col.key === 'PK' && <Key className="w-3 h-3 text-[#FF5733] mr-1.5" />}
                        {col.name}
                      </span>
                      <span className="text-white/40 text-[10px]">{col.type}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Table Node: ORDERS */}
              <motion.div
                onClick={() => setSelectedNode('orders')}
                whileHover={{ y: -3 }}
                className={`cursor-pointer rounded-xl bg-[#141418] border transition-all duration-200 ${
                  selectedNode === 'orders'
                    ? 'border-[#FF5733] shadow-[0_0_25px_rgba(255,87,51,0.25)] ring-1 ring-[#FF5733]'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                <div className="bg-[#1A1A20] px-4 py-2.5 border-b border-white/10 flex justify-between items-center rounded-t-xl">
                  <span className="font-mono text-sm font-bold text-white flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#FF5733] mr-2 animate-pulse" /> orders
                  </span>
                  <span className="text-[10px] font-mono text-[#FF5733] bg-[#FF5733]/10 border border-[#FF5733]/30 px-2 py-0.5 rounded">1:N RELATION</span>
                </div>
                <div className="p-3.5 space-y-2 font-mono text-xs">
                  {customColumns.orders.map((col, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white/[0.02] hover:bg-white/[0.05] p-2 rounded border border-white/5">
                      <span className="flex items-center text-white">
                        {col.key === 'PK' && <Key className="w-3 h-3 text-[#FF5733] mr-1.5" />}
                        {col.key === 'FK' && <Link2 className="w-3 h-3 text-[#FFA048] mr-1.5" />}
                        {col.name}
                      </span>
                      <span className="text-white/40 text-[10px]">{col.type}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Table Node: PRODUCTS */}
              <motion.div
                onClick={() => setSelectedNode('products')}
                whileHover={{ y: -3 }}
                className={`cursor-pointer rounded-xl bg-[#141418] border transition-all duration-200 ${
                  selectedNode === 'products'
                    ? 'border-[#FF5733] shadow-[0_0_25px_rgba(255,87,51,0.25)] ring-1 ring-[#FF5733]'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                <div className="bg-[#1A1A20] px-4 py-2.5 border-b border-white/10 flex justify-between items-center rounded-t-xl">
                  <span className="font-mono text-sm font-bold text-white flex items-center">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mr-2" /> products
                  </span>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">ENTITY</span>
                </div>
                <div className="p-3.5 space-y-2 font-mono text-xs">
                  {customColumns.products.map((col, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white/[0.02] hover:bg-white/[0.05] p-2 rounded border border-white/5">
                      <span className="flex items-center text-white">
                        {col.key === 'PK' && <Key className="w-3 h-3 text-[#FF5733] mr-1.5" />}
                        {col.name}
                      </span>
                      <span className="text-white/40 text-[10px]">{col.type}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* TAB 2: CODE GENERATOR VIEW */}
        {activeTab === 'code' && (
          <div className="flex-1 p-6 bg-[#0E0E12] font-mono text-xs text-[#FFA048] overflow-x-auto relative">
            <div className="absolute top-4 right-4 flex items-center space-x-2 bg-[#1A1A20] px-3 py-1.5 rounded-lg border border-white/10 text-white/70">
              <Copy className="w-3.5 h-3.5 text-[#FF5733]" />
              <span>Copy DDL</span>
            </div>
            <pre className="leading-relaxed whitespace-pre-wrap">{generatedSQL}</pre>
          </div>
        )}

        {/* LIVE INTERACTIVE SIDEBAR CONTROLLER */}
        <div className="w-full md:w-80 bg-[#141418] border-t md:border-t-0 md:border-l border-white/10 p-5 flex flex-col justify-between font-mono">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <span className="text-white/50 uppercase tracking-wider">Node Config</span>
              <span className="text-[#FF5733] font-bold uppercase">{selectedNode}</span>
            </div>

            <div className="mt-4 space-y-2">
              <label className="text-[11px] text-white/60">Add Column to "{selectedNode}":</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="column_name"
                  value={newColName}
                  onChange={(e) => setNewColName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addColumn()}
                  className="flex-1 bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF5733]"
                />
                <button
                  onClick={addColumn}
                  className="bg-[#FF5733] hover:bg-[#FF4520] text-black px-3 rounded-lg font-bold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Editable Columns List */}
            <div className="mt-5 space-y-2">
              <span className="text-[11px] text-white/40 block">Columns ({customColumns[selectedNode].length})</span>
              <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
                {customColumns[selectedNode].map((col, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-[#1A1A20] p-2 rounded border border-white/5 text-xs">
                    <span className="text-white truncate">{col.name}</span>
                    <button onClick={() => removeColumn(idx)} className="text-white/30 hover:text-red-400 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-[11px] text-white/40 flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-[#FF5733]" />
            <span>Interactive: Changes update visual nodes & SQL schema live.</span>
          </div>
        </div>
      </div>
    </div>
  );
}