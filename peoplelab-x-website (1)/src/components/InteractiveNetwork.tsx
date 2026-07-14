import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Cpu, Binary, Eye, Database, Terminal, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface InteractiveNetworkProps {
  lang: Language;
}

export default function InteractiveNetwork({ lang }: InteractiveNetworkProps) {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    {
      id: 1,
      x: '15%',
      y: '25%',
      icon: Eye,
      label: 'RC01–RC06',
      title: lang === 'da' ? 'Kategori & Værditydelighed' : 'Category & Value Clarity',
      desc: lang === 'da' 
        ? 'Tydelighed i markedssprog og unikt positioneringsforsvar.' 
        : 'Clarity in market vocabulary and unique positioning defense.',
      color: '#6E262B',
    },
    {
      id: 2,
      x: '85%',
      y: '20%',
      icon: Cpu,
      label: 'RC07–RC10',
      title: lang === 'da' ? 'AI & LLM Søgesikkerhed' : 'AI & LLM Search Security',
      desc: lang === 'da' 
        ? 'Hvordan ChatGPT, Gemini og Claude indekserer og anbefaler jer.' 
        : 'How ChatGPT, Gemini, and Claude index and recommend you.',
      color: '#6E262B',
    },
    {
      id: 3,
      x: '12%',
      y: '70%',
      icon: Database,
      label: 'RC11–RC14',
      title: lang === 'da' ? 'Case-evidens & Beviser' : 'Case Evidence & Proofs',
      desc: lang === 'da' 
        ? 'Udefra-ind verifikation af jeres påstande og værdibevis.' 
        : 'Outside-in verification of your claims and value proofs.',
      color: '#6E262B',
    },
    {
      id: 4,
      x: '88%',
      y: '65%',
      icon: Binary,
      label: 'RC15–RC18',
      title: lang === 'da' ? 'Købsbarhed & Relevans' : 'Buyability & Relevance',
      desc: lang === 'da' 
        ? 'Buying committee-understøttelse og kognitiv friktion.' 
        : 'Buying committee support and cognitive friction in checkout.',
      color: '#6E262B',
    },
    {
      id: 5,
      x: '50%',
      y: '10%',
      icon: Shield,
      label: 'LLM VERIFIED',
      title: lang === 'da' ? 'Uvildig Diagnose' : 'Independent Diagnosis',
      desc: lang === 'da' 
        ? 'Total uafhængighed. Ingen hensyn til interne mavefornemmelser.' 
        : 'Total independence. No regard for internal gut feelings.',
      color: '#6E262B',
    }
  ];

  return (
    <div className="relative w-full h-[380px] md:h-[450px] bg-brand-card rounded border border-brand-border p-6 flex items-center justify-center overflow-hidden shadow-sm" id="interactive-network-canvas">
      {/* Circuit background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(110,38,43,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(110,38,43,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Glowing center orb / radar effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] rounded-full bg-brand-accent/5 animate-ping duration-3000 opacity-20" />
        <div className="w-[200px] h-[200px] rounded-full bg-brand-accent/5 animate-pulse duration-2000" />
      </div>

      {/* Connection SVG Line paths with animated dashes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <g stroke="rgba(110, 38, 43, 0.15)" strokeWidth="1" fill="none">
          {/* Paths from center (50%, 50%) to nodes */}
          <line x1="50%" y1="50%" x2="15%" y2="25%" />
          <line x1="50%" y1="50%" x2="85%" y2="20%" />
          <line x1="50%" y1="50%" x2="12%" y2="70%" />
          <line x1="50%" y1="50%" x2="88%" y2="65%" />
          <line x1="50%" y1="50%" x2="50%" y2="10%" />
        </g>
        
        {/* Pulsing dots moving along lines */}
        <g fill="#6E262B" className="opacity-60">
          <circle r="2.5">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 190,190 L 50,90" />
          </circle>
          <circle r="2.5">
            <animateMotion dur="5s" repeatCount="indefinite" path="M 190,190 L 320,80" />
          </circle>
          <circle r="2.5">
            <animateMotion dur="4.5s" repeatCount="indefinite" path="M 190,190 L 40,260" />
          </circle>
          <circle r="2.5">
            <animateMotion dur="3.5s" repeatCount="indefinite" path="M 190,190 L 330,240" />
          </circle>
        </g>
      </svg>

      {/* Central Node Badge */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute z-10 w-28 h-28 md:w-32 md:h-32 rounded-full bg-brand-charcoal border-2 border-brand-accent flex flex-col items-center justify-center p-4 shadow-sm text-center cursor-pointer"
        id="node-center"
      >
        <div className="absolute inset-0.5 rounded-full border border-brand-accent/20 animate-spin duration-10000" />
        <Terminal className="text-brand-accent w-6 h-6 mb-1 animate-pulse" />
        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-muted uppercase">PEOPLELAB</span>
        <span className="text-xs font-bold tracking-tighter text-white">REALITY X</span>
      </motion.div>

      {/* Surrounding Nodes */}
      {nodes.map((node) => {
        const Icon = node.icon;
        const isActive = activeNode === node.id;
        
        return (
          <div
            key={node.id}
            className="absolute z-20"
            style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
            id={`node-item-${node.id}`}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
              className={`relative flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-none bg-white border transition-all cursor-pointer shadow-sm ${isActive ? 'border-brand-accent ring-4 ring-brand-accent/10 bg-brand-charcoal text-white shadow-md' : 'border-brand-border hover:border-brand-accent'}`}
            >
              <span className={`absolute -top-7 px-2 py-0.5 border text-[8px] font-mono rounded-none tracking-wider whitespace-nowrap uppercase ${isActive ? 'bg-brand-accent border-brand-accent text-white font-bold' : 'bg-white border-brand-border text-brand-muted'}`}>
                {node.label}
              </span>
              <Icon className={`w-5 h-5 ${isActive ? 'text-brand-accent' : 'text-brand-charcoal'}`} />
              
              {/* Pulsing radar point for visibility */}
              <span className="absolute -right-0.5 -bottom-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent"></span>
              </span>
            </motion.button>

            {/* Floating tooltip popover relative to node position */}
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="absolute left-1/2 -translate-x-1/2 mt-3 w-52 md:w-60 bg-brand-charcoal border border-brand-accent rounded p-3 shadow-lg z-40 backdrop-blur-md pointer-events-none"
              >
                <div className="flex items-center space-x-1.5 mb-1 text-brand-accent">
                  <CheckCircle2 size={12} />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-brand-accent">{node.label} AUDIT</span>
                </div>
                <h4 className="text-xs font-bold text-white">{node.title}</h4>
                <p className="text-[10px] text-brand-border leading-relaxed mt-1">{node.desc}</p>
              </motion.div>
            )}
          </div>
        );
      })}

      {/* Floating explanatory helper tag */}
      <div className="absolute bottom-3 left-4 flex items-center space-x-2 bg-white/95 border border-brand-border py-1.5 px-3 rounded pointer-events-none shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
        <span className="text-[9px] font-mono tracking-wider text-brand-muted uppercase">
          {lang === 'da' ? 'Klik på noderne for at inspicere' : 'Hover/tap nodes to inspect'}
        </span>
      </div>
    </div>
  );
}
