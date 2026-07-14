import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, Search, Bot, AlertTriangle, ShieldCheck, 
  Sparkles, RefreshCw, Cpu, Brain, CheckCircle2 
} from 'lucide-react';
import { Language } from '../types';

interface SandboxToolProps {
  lang: Language;
}

export default function SandboxTool({ lang }: SandboxToolProps) {
  const [query, setQuery] = useState<string>('');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [scanStep, setScanStep] = useState<string>('');
  const [result, setResult] = useState<any | null>(null);

  const presets = lang === 'da' ? [
    'Hvem er førende inden for kommerciel due diligence i Danmark?',
    'Hvilke rådgivere har bedst dokumenterede cases på værdidefensibilitet?',
    'Find rådgivere til B2B positionering, der arbejder udefra-ind.'
  ] : [
    'Who is leading commercial due diligence in Denmark?',
    'Which consulting firms have best-documented cases on value defensibility?',
    'Find B2B positioning consultants working outside-in.'
  ];

  const handlePresetClick = (txt: string) => {
    setQuery(txt);
  };

  const runTest = () => {
    if (!query) return;
    setIsScanning(true);
    setResult(null);
    setScanProgress(0);

    const steps = lang === 'da' ? [
      { p: 15, s: 'Syntetiserer synlighed i ChatGPT-4o og Gemini-1.5...' },
      { p: 40, s: 'Gennemsøger jeres website-arkitektur & case-evidens...' },
      { p: 70, s: 'Analyserer LLM Share of Voice & perception gaps...' },
      { p: 90, s: 'Kortlægger uoverensstemmelser i AI-anbefalinger...' },
      { p: 100, s: 'Rapport klar!' }
    ] : [
      { p: 15, s: 'Synthesizing visibility in ChatGPT-4o & Gemini-1.5...' },
      { p: 40, s: 'Analyzing your website structure & case evidence...' },
      { p: 70, s: 'Analyzing LLM Share of Voice & perception gaps...' },
      { p: 90, s: 'Mapping discrepancies in AI recommendations...' },
      { p: 100, s: 'Report compiled!' }
    ];

    let currentStepIdx = 0;
    const interval = setInterval(() => {
      if (currentStepIdx < steps.length) {
        setScanProgress(steps[currentStepIdx].p);
        setScanStep(steps[currentStepIdx].s);
        currentStepIdx++;
      } else {
        clearInterval(interval);
        setIsScanning(false);
        // Set dynamic simulated result based on the query
        setResult({
          aiAnswer: lang === 'da' 
            ? `Baseret på en gennemsøgning af det offentlige internet finder jeg primært overordnede, generiske udsagn om de søgte virksomheder. Der er svag synlig case-dokumentation og beviser for jeres påstande. Derfor rangerer jeres brand under gennemsnittet i LLM-anbefalinger til kategori-søgninger.`
            : `Based on a crawl of public web sources, I find mostly high-level, generic statements about the queried brands. There is weak visible case evidence or structured proof of claims. Consequently, your brand currently ranks below the threshold for direct LLM recommendation on category searches.`,
          perceptionGap: lang === 'da' ? 'HØJ (Virksomhedens interne styrker er usynlige for AI-modeller)' : 'HIGH (Internal strengths are invisible to AI models)',
          score: '42 / 100',
          recommendations: lang === 'da' ? [
            'Strukturer jeres kundecases efter AI-baseret research (LLM SEO).',
            'Fjern fluff og corporate buzzwords – AI søger konkrete, uafhængige beviser.',
            'Optimer website-arkitektur for semantisk søgning (Semantic Schema).'
          ] : [
            'Structure your client case studies for AI-based research readability (LLM SEO).',
            'Remove fluff and corporate buzzwords – AI systems demand concrete, verifiable metrics.',
            'Optimize website architecture for semantic search (Semantic Schema).'
          ]
        });
      }
    }, 900);
  };

  return (
    <div className="bg-white border border-brand-border rounded p-6 sm:p-8 space-y-6 shadow-sm" id="sandbox-tester-card">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-brand-accent/10 text-brand-accent rounded">
          <Bot className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-brand-charcoal">
            {lang === 'da' ? 'AI Search Security Sandbox' : 'AI Search Security Sandbox'}
          </h3>
          <p className="text-[10px] text-brand-muted font-mono uppercase tracking-widest">
            {lang === 'da' ? 'Test jeres synlighed i AI-baseret research' : 'Test your visibility in AI-based research'}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-muted font-bold">
          {lang === 'da' ? 'Indtast en kategori-søgning eller vælg en skabelon:' : 'Enter a category search or choose a template:'}
        </label>
        
        {/* Search Input bar */}
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'da' ? 'E.g. Hvem er førende indenfor...' : 'E.g. Who is leading...'}
            disabled={isScanning}
            className="w-full pl-11 pr-32 py-3 bg-brand-card border border-brand-border rounded text-xs text-brand-charcoal placeholder-brand-muted/50 focus:border-brand-accent outline-none disabled:opacity-50 font-sans"
            id="input-sandbox-query"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted" />
          
          <button
            onClick={runTest}
            disabled={isScanning || !query}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-brand-accent hover:bg-brand-accent text-white disabled:bg-brand-border disabled:text-brand-muted font-bold text-[10px] uppercase tracking-wider rounded transition-all active:scale-95 cursor-pointer"
            id="btn-sandbox-submit"
          >
            {lang === 'da' ? 'Test' : 'Analyze'}
          </button>
        </div>

        {/* Presets Grid */}
        <div className="flex flex-wrap gap-2 pt-1">
          {presets.map((txt) => (
            <button
              key={txt}
              onClick={() => handlePresetClick(txt)}
              disabled={isScanning}
              className={`text-[9px] font-medium px-2.5 py-1.5 rounded border transition-all cursor-pointer ${query === txt ? 'border-brand-accent bg-brand-accent/5 text-brand-accent' : 'border-brand-border bg-brand-card text-brand-muted hover:border-brand-accent hover:text-brand-charcoal'}`}
            >
              {txt}
            </button>
          ))}
        </div>
      </div>

      {/* Action Scan / Loader status */}
      <AnimatePresence mode="wait">
        {isScanning && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-5 bg-brand-card border border-brand-border rounded space-y-3.5"
            id="sandbox-loading-state"
          >
            <div className="flex items-center justify-between text-[10px] font-mono text-brand-muted">
              <span className="flex items-center space-x-1.5">
                <RefreshCw size={11} className="animate-spin text-brand-accent" />
                <span>{scanStep}</span>
              </span>
              <span>{scanProgress}%</span>
            </div>

            {/* Dynamic visual progress bar */}
            <div className="w-full h-1 bg-brand-border rounded overflow-hidden">
              <motion.div 
                className="h-full bg-brand-accent" 
                initial={{ width: '0%' }}
                animate={{ width: `${scanProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        )}

        {/* Scan Results Layout */}
        {result && !isScanning && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-5 bg-white border border-brand-border rounded space-y-5 shadow-sm"
            id="sandbox-result-card"
          >
            {/* Header Result summary */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-4 border-b border-brand-border">
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 bg-brand-accent/10 text-brand-accent rounded">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-brand-muted uppercase tracking-widest block">LLM READINESS SCORE</span>
                  <span className="text-sm font-black text-brand-charcoal">{result.score}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 bg-rose-500/10 text-rose-700 rounded border border-rose-200">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-brand-muted uppercase tracking-widest block">PERCEPTION GAP</span>
                  <span className="text-xs font-bold text-rose-700">{result.perceptionGap}</span>
                </div>
              </div>
            </div>

            {/* Simulated Agent Output */}
            <div className="space-y-1.5">
              <span className="text-[9px] font-mono uppercase tracking-wider text-brand-muted font-bold block">
                {lang === 'da' ? 'Simuleret AI-Svar udefra-ind:' : 'Simulated AI Response Outside-In:'}
              </span>
              <p className="text-xs text-brand-charcoal bg-brand-card p-3.5 border border-brand-border rounded leading-relaxed font-mono">
                {result.aiAnswer}
              </p>
            </div>

            {/* Key Action recommendations */}
            <div className="space-y-3">
              <div className="flex items-center space-x-1.5 text-brand-accent">
                <CheckCircle2 size={13} />
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold">
                  {lang === 'da' ? 'Anbefalinger til Reality Check' : 'Reality Check Recommendations'}
                </span>
              </div>
              
              <div className="space-y-2">
                {result.recommendations.map((rec: string, idx: number) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-brand-muted">
                    <span className="text-brand-accent font-mono font-bold mt-0.5">{idx + 1}.</span>
                    <span>{rec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA action link */}
            <div className="pt-4 border-t border-brand-border flex justify-end">
              <a 
                href="#kontakt-sektion"
                className="text-[10px] font-mono uppercase tracking-widest font-bold text-brand-accent hover:underline flex items-center space-x-1.5 transition-colors cursor-pointer"
              >
                <span>{lang === 'da' ? 'Start afklaringen af jeres fulde LLM SEO diagnose' : 'Start clarification of your full LLM SEO diagnosis'}</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
