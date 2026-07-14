import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../../types';

interface WorkViewProps {
  lang: Language;
  onNavigateToContact: () => void;
}

export default function WorkView({ lang, onNavigateToContact }: WorkViewProps) {
  const steps = lang === 'da' ? [
    {
      num: '01',
      title: 'Udefra-ind Datasamling',
      desc: 'Vi indsamler og kortlægger den synlige kommercielle virkelighed, beslutningstagere, buying groups og AI-baseret research møder dagligt. Dette inkluderer jeres fulde digitale fodaftryk, cases, dokumentation, søgesynlighed, og AI-repræsentation.'
    },
    {
      num: '02',
      title: 'Proprietær Analysemodel',
      desc: 'Vi trykvester jeres eksterne signaler mod vores uafhængige analysemodel. Vi evaluerer jeres synlige kommercielle virkelighed på tværs af de 42 signal- og beslutningsområder.'
    },
    {
      num: '03',
      title: 'Mønstre og Beslutningsrisiko',
      desc: 'Vi identificerer modstridende signaler, fravær af dokumenterede beviser, samt kognitive friktionspunkter, der skaber perception-gaps og spænder ben for win-rates.'
    },
    {
      num: '04',
      title: 'Uafhængig Kvalitetskontrol',
      desc: 'Alle observationer og analyser valideres mod vores faste kvalitetsstandarder for at garantere fuldstændig metodisk uafhængighed og fjerne subjektiv bias fra resultaterne.'
    },
    {
      num: '05',
      title: 'Ledelsesklart Beslutningsoutput',
      desc: 'Vi koger de omfattende observationer ned til jeres konkrete, forestående beslutningskontekst. I får en uafviselig diagnose over kritiske fund, én klar årsagskæde samt konkrete ledelseskrav.'
    }
  ] : [
    {
      num: '01',
      title: 'Outside-In Data Collection',
      desc: 'We harvest and map the actual public commercial footprints that decision-makers, buying groups, and AI-based research encounter daily. This incorporates your full digital footprint, public documentation, case studies, and AI representation.'
    },
    {
      num: '02',
      title: 'Proprietary Diagnostic Framework',
      desc: 'We stress-test your external signals against our independent analysis model. We evaluate your visible commercial footprints across 42 precise signal and decision areas.'
    },
    {
      num: '03',
      title: 'Patterns and Decision Risk',
      desc: 'We map hidden contradictions, unbacked assertions, absent proof elements, and cognitive friction vectors that compromise win-rates and leak shortlist placements.'
    },
    {
      num: '04',
      title: 'Objective Verification',
      desc: 'All findings are validated against our rigorous quality controls, guaranteeing 100% methodological objectivity and removing subjective bias.'
    },
    {
      num: '05',
      title: 'Leadership-Ready Decision Output',
      desc: 'We synthesize complex data points into your specific upcoming high-stakes decision context. You receive a razor-sharp executive diagnostic with critical causal chains and strict briefing requirements.'
    }
  ];

  return (
    <div className="py-16 md:py-24 space-y-20 max-w-4xl mx-auto w-full px-6" id="view-work">
      
      {/* Hero */}
      <div className="space-y-6 text-left">
        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase border-b border-brand-accent/20 pb-1">
          {lang === 'da' ? 'METODE' : 'METHODOLOGY'}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal leading-tight tracking-tight">
          {lang === 'da' ? 'Vi begynder ikke med jeres forklaring.' : 'We do not begin with your explanation.'} <br />
          <span className="text-brand-accent">
            {lang === 'da' ? 'Vi begynder med den virkelighed, markedet møder.' : 'We begin with the actual footprint the market encounters.'}
          </span>
        </h1>
        <p className="text-sm text-brand-muted font-sans leading-relaxed">
          {lang === 'da'
            ? 'Klassisk rådgivning og bureauer baserer deres briefs og strategier på interne workshops og ledelsens egne overbevisninger. Vi gør det modsatte. Vi opererer 100% udefra og ind, fordi det er den eneste virkelighed, jeres beslutningstagere, buying groups og AI-baseret research har adgang til.'
            : 'Traditional consultants and agencies base their briefs and deliverables on internal interviews and subjective executive bias. We do the inverse. We operate strictly outside-in, because that is the only reality your buying committees and AI-based research evaluate.'}
        </p>
      </div>

      {/* The 5-Step Process funnel */}
      <div className="space-y-8 border-t border-brand-border pt-12">
        <h3 className="text-xs font-mono uppercase tracking-widest text-brand-charcoal font-bold">
          {lang === 'da' ? 'ANALYSEPROCESSEN' : 'THE DIAGNOSTIC PROCESS'}
        </h3>

        <div className="space-y-8">
          {steps.map((st, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-brand-border pb-8">
              <div className="md:col-span-2">
                <span className="text-2xl font-mono font-bold text-brand-accent/40 block">
                  {st.num}
                </span>
              </div>
              <div className="md:col-span-4">
                <h4 className="text-sm font-bold text-brand-charcoal">
                  {st.title}
                </h4>
              </div>
              <div className="md:col-span-6">
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Methodological Rationale banner */}
      <div className="p-8 bg-brand-card border border-brand-border rounded-none grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 text-left space-y-2">
          <span className="text-[9px] font-mono text-brand-accent uppercase tracking-widest font-bold">
            {lang === 'da' ? 'UDEN KOMPROMISER' : 'ZERO COMPROMISES'}
          </span>
          <h3 className="text-sm font-bold text-brand-charcoal">
            {lang === 'da' ? 'Uafhængig basisanalyse, tilpasset jeres specifikke situation' : 'Uncompromising, independent audit core, tailored to your context'}
          </h3>
          <p className="text-xs text-brand-muted leading-relaxed font-sans">
            {lang === 'da'
              ? 'Uanset om I kontakter os før en stor investering eller på grund af faldende win-rates, forbliver jeres Reality Check 100% uafhængigt, fuldt dækkende og udefra-ind. Vi ændrer ikke på analysemetoden – vi designer udelukkende formidlingen og outputtet, så det matcher jeres konkrete ledelsesbeslutning perfekt.'
              : 'Regardless of whether you engage us prior to a web redesign or to defend premium margins, your core diagnostic remains entirely objective, comprehensive, and outside-in. We do not alter our diagnostic rigor – we simply adapt the delivery framework to perfectly align with your impending commercial decision.'}
          </p>
        </div>
        <div className="md:col-span-4 flex justify-end">
          <button
            onClick={onNavigateToContact}
            className="px-5 py-3 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all flex items-center space-x-2 cursor-pointer border-none"
          >
            <span>{lang === 'da' ? 'Test vores proces' : 'Experience the process'}</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

    </div>
  );
}
