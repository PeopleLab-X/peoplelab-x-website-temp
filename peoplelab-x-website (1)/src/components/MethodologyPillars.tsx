import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertOctagon, Award, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface MethodologyPillarsProps {
  lang: Language;
}

export default function MethodologyPillars({ lang }: MethodologyPillarsProps) {
  const [activePillar, setActivePillar] = useState<string>('pillar1');

  const t = {
    da: {
      methodologyTitle: 'Methodology: Inside-Out vs. Outside-In',
      methodologySub: 'Hvorfor traditionel rådgivning fejler, og hvorfor observerbar evidens er den eneste sandhed.',
      insideOutTitle: 'Inside-Out (De interne antagelser)',
      insideOutList: [
        'Præget af interne mavefornemmelser og bias',
        'Værditilbud beskrevet i indforstået branche-BS',
        'Kundetillid baseret på uverificerede påstande',
        'Støjende og komplekse digitale strukturer'
      ],
      outsideInTitle: 'Outside-In (Vores uafhængige spejl)',
      outsideInList: [
        '100% baseret på observerbare fakta',
        'Krystalklart, differentieret markedssprog',
        'Evidens- og case-drevet tillidsopbygning',
        'Struktureret til både menneskelige købere og AI'
      ],
      pillarSectionTitle: 'De 4 Strategiske Søjler',
      pillarSectionSub: 'Vores analyse dækker jeres fulde kommercielle fodaftryk opdelt i 18 observerbare parametre (RC01–RC18).'
    },
    en: {
      methodologyTitle: 'Methodology: Inside-Out vs. Outside-In',
      methodologySub: 'Why traditional consulting fails, and why observable evidence remains the ultimate truth.',
      insideOutTitle: 'Inside-Out (Internal Assumptions)',
      insideOutList: [
        'Clouded by internal assumptions and structural bias',
        'Value props described in generic corporate buzzwords',
        'Customer trust built on unverified assertions',
        'Cluttered and complex digital interfaces'
      ],
      outsideInTitle: 'Outside-In (Our Independent Mirror)',
      outsideInList: [
        '100% grounded in observable external facts',
        'Crystal clear, differentiated market vocabulary',
        'Evidence and case-study driven trust mechanics',
        'Fully structured for human buyers and AI-based research alike'
      ],
      pillarSectionTitle: 'The 4 Strategic Pillars',
      pillarSectionSub: 'Our audit covers your entire commercial footprint divided into 18 observable parameters (RC01–RC18).'
    }
  }[lang];

  const pillars = [
    {
      id: 'pillar1',
      num: '01',
      title: lang === 'da' ? 'Markedssprog & Position' : 'Market Vocabulary & Position',
      subtitle: lang === 'da' ? 'RC01–RC06 • Kategori-ejerskab' : 'RC01–RC06 • Category Ownership',
      params: lang === 'da' ? [
        'RC01: Værditydelighed (Er det krystalklart, hvad I løser indenfor 5 sekunder?)',
        'RC02: Kategori-ejerskab og sproglig adskillelse fra konkurrenter',
        'RC03: Eliminering af ligegyldigt "fluff" og generiske påstande',
        'RC04: Relevans for Buying Committee (Taler I til alle roller?)',
        'RC05: Pris- og premium-defensibilitet udefra-ind',
        'RC06: Kognitiv modstand og sproglig friktion'
      ] : [
        'RC01: Value Clarity (Is it crystal clear what you solve within 5 seconds?)',
        'RC02: Category ownership and linguistic separation from competitors',
        'RC03: Elimination of fluff and generic marketing assertions',
        'RC04: Buying Committee relevance (Do you address all personas?)',
        'RC05: Price and premium defensibility from an outside-in perspective',
        'RC06: Cognitive load and linguistic friction'
      ]
    },
    {
      id: 'pillar2',
      num: '02',
      title: lang === 'da' ? 'Digitalt Fodaftryk & AI' : 'Digital Footprint & AI',
      subtitle: lang === 'da' ? 'RC07–RC10 • AI-baseret research' : 'RC07–RC10 • AI-based Research',
      params: lang === 'da' ? [
        'RC07: LLM & AI-indeksering (Bliver I fundet af ChatGPT & Gemini?)',
        'RC08: Share of Voice i AI-syntetiske svar',
        'RC09: Semantisk data-strukturering (Schema markup)',
        'RC10: Teknisk indlæsningshastighed og mobil friktion'
      ] : [
        'RC07: LLM & AI Indexing (Are you visible to ChatGPT & Gemini?)',
        'RC08: Share of Voice in synthetic AI-driven search answers',
        'RC09: Semantic data structuring and microdata deployment',
        'RC10: Core Web Vitals and mobile friction points'
      ]
    },
    {
      id: 'pillar3',
      num: '03',
      title: lang === 'da' ? 'Evidens & Dokumentation' : 'Evidence & Proof Points',
      subtitle: lang === 'da' ? 'RC11–RC14 • Værdibevis' : 'RC11–RC14 • Proof of Value',
      params: lang === 'da' ? [
        'RC11: Case-evidens (Har I uafviselige beviser på jeres resultater?)',
        'RC12: Kunde-udtalelsers troværdighed (Er de specifikke?)',
        'RC13: Tredjeparts-verifikation og uafhængige stempler',
        'RC14: Metodologisk gennemsigtighed'
      ] : [
        'RC11: Case Evidence (Do you present undeniable proof of client outcomes?)',
        'RC12: Credibility of testimonials (Are you specific and verified?)',
        'RC13: Third-party verification and independent compliance seals',
        'RC14: Methodological transparency and structured delivery models'
      ]
    },
    {
      id: 'pillar4',
      num: '04',
      title: lang === 'da' ? 'Købsbarhed & Relevans' : 'Buyability & Relevance',
      subtitle: lang === 'da' ? 'RC15–RC18 • Konverteringsfriktion' : 'RC15–RC18 • Friction Points',
      params: lang === 'da' ? [
        'RC15: Forståelse af købsrejsen og "Next Best Action"',
        'RC16: Kontaktbarhed og responstid (Er I svære at fange?)',
        'RC17: Selvhjælpsværktøjer og interaktive tjeklister',
        'RC18: Pris-transparens eller pricing-indikatorer'
      ] : [
        'RC15: Funnel architecture and Next Best Action definition',
        'RC16: Accessibility and response times (Are you hard to engage?)',
        'RC17: Self-service tools and interactive assessment grids',
        'RC18: Pricing transparency or clear pricing proxies'
      ]
    }
  ];

  return (
    <div className="space-y-24" id="methodology-pillars-container">
      
      {/* METHODOLOGY COMPARISON */}
      <section className="py-12 px-6 md:px-12 bg-brand-card/40 border-t border-b border-brand-border" id="metodologi-sektion">
        <div className="max-w-7xl mx-auto w-full space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase">
              METHODOLOGY BLUEPRINT
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-brand-charcoal">
              {t.methodologyTitle}
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted">
              {t.methodologySub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Inside-Out */}
            <div className="p-6 sm:p-8 bg-white border border-rose-200 rounded space-y-5 relative overflow-hidden">
              <div className="flex items-center space-x-3.5 text-rose-700">
                <AlertOctagon size={20} />
                <h3 className="text-base font-bold">{t.insideOutTitle}</h3>
              </div>
              <ul className="space-y-3">
                {t.insideOutList.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-brand-muted">
                    <span className="text-rose-500 font-mono mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outside-In */}
            <div className="p-6 sm:p-8 bg-white border border-brand-accent/30 rounded space-y-5 relative overflow-hidden">
              <div className="flex items-center space-x-3.5 text-brand-accent">
                <Award size={20} />
                <h3 className="text-base font-bold">{t.outsideInTitle}</h3>
              </div>
              <ul className="space-y-3">
                {t.outsideInList.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-brand-charcoal">
                    <span className="text-brand-accent font-mono mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 18 ANALYSEPARAMETRE MODEL */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full space-y-12" id="model-sektion">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-brand-border">
          <div className="text-left space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase">
              18 ANALYSEPARAMETRE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-brand-charcoal">
              {t.pillarSectionTitle}
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted max-w-xl">
              {t.pillarSectionSub}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {pillars.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePillar(p.id)}
                className={`px-3 py-1.5 rounded text-[10px] font-mono tracking-widest font-bold border transition-all cursor-pointer uppercase ${activePillar === p.id ? 'border-brand-accent bg-brand-accent text-white' : 'border-brand-border bg-brand-card text-brand-muted hover:border-brand-accent'}`}
              >
                {p.num}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Side Tabs List */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {pillars.map((p) => {
              const isActive = p.id === activePillar;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(p.id)}
                  className={`w-full text-left p-4 rounded border transition-all flex items-center justify-between cursor-pointer group ${isActive ? 'border-brand-accent bg-brand-accent/5' : 'border-brand-border bg-white hover:border-brand-accent/50'}`}
                >
                  <div className="space-y-0.5 text-left">
                    <span className="text-[9px] font-mono text-brand-muted uppercase tracking-widest block">{p.subtitle}</span>
                    <span className={`text-xs font-bold transition-colors ${isActive ? 'text-brand-accent' : 'text-brand-charcoal group-hover:text-brand-accent'}`}>{p.title}</span>
                  </div>
                  <ChevronRight size={14} className={`text-brand-muted transition-transform ${isActive ? 'translate-x-1 text-brand-accent' : 'group-hover:translate-x-0.5'}`} />
                </button>
              );
            })}
          </div>

          {/* Details Content card */}
          <div className="lg:col-span-8 bg-white border border-brand-border rounded p-6 sm:p-8 min-h-[300px]" id="pillar-details-card">
            <AnimatePresence mode="wait">
              {pillars.map((p) => {
                if (p.id !== activePillar) return null;
                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-brand-border">
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-brand-accent uppercase font-bold">{p.subtitle}</span>
                        <h3 className="text-lg font-bold text-brand-charcoal">{p.title}</h3>
                      </div>
                      <span className="text-4xl font-mono font-black text-brand-border">{p.num}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {p.params.map((par, i) => (
                        <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-brand-charcoal bg-brand-card/50 p-3 rounded border border-brand-border">
                          <CheckCircle2 size={15} className="text-brand-accent shrink-0 mt-0.5" />
                          <span>{par}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </section>

    </div>
  );
}
