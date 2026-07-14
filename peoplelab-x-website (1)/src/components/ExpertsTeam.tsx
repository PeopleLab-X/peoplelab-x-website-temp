import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface ExpertsTeamProps {
  lang: Language;
}

export default function ExpertsTeam({ lang }: ExpertsTeamProps) {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full space-y-12" id="team-og-tillid-sektion">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-brand-border">
        <div className="text-left space-y-2">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase">
            {lang === 'da' ? 'UAFHÆNGIGE EKSPERTER & BEVISER' : 'INDEPENDENT EXPERTS & EVIDENCE'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-brand-charcoal">
            {lang === 'da' ? 'Hvem udfører jeres Reality Check?' : 'Who conducts your Reality Check?'}
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted max-w-xl">
            {lang === 'da'
              ? 'Vores diagnosticeringsteam består af uafhængige B2B-analytikere, AI-crawling specialister og købsadfærdseksperter.'
              : 'Our diagnostic team is composed of independent B2B analysts, AI-crawling specialists, and buyer behavior experts.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left: Experts Grid (7/12 layout) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-sm font-mono uppercase tracking-widest text-brand-muted font-bold">
            {lang === 'da' ? 'Kerneteamet bag jeres diagnose:' : 'The Core Team behind your audit:'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {/* Expert 1 */}
            <div className="bg-white border border-brand-border rounded p-5 text-center flex flex-col items-center space-y-4 shadow-sm hover:border-brand-accent transition-colors">
              <div className="relative">
                <img
                  src="/src/assets/images/lead_analyst_female_1783106155481.jpg"
                  alt="Astrid Lindqvist"
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 rounded object-cover border border-brand-border shadow-sm ring-2 ring-brand-accent/5"
                />
                <span className="absolute -bottom-2 -right-2 bg-brand-accent text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded">
                  RC01-06
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-charcoal">Astrid Lindqvist</h4>
                <p className="text-[10px] text-brand-accent font-mono font-bold uppercase tracking-wider mt-0.5">
                  Lead Analyst
                </p>
                <p className="text-[9px] text-brand-muted mt-1">
                  {lang === 'da' ? '34 år • Tidligere McKinsey-analytiker' : '34 yrs • Former McKinsey Analyst'}
                </p>
              </div>
              <p className="text-[10px] text-brand-muted leading-relaxed pt-2 border-t border-brand-border w-full text-center">
                {lang === 'da'
                  ? 'Auditerer jeres værditydelighed og kognitive friktionspunkter.'
                  : 'Audits your value clarity, category position, and language friction.'}
              </p>
            </div>

            {/* Expert 2 */}
            <div className="bg-white border border-brand-border rounded p-5 text-center flex flex-col items-center space-y-4 shadow-sm hover:border-brand-accent transition-colors">
              <div className="relative">
                <img
                  src="/src/assets/images/strategy_expert_male_1783106167689.jpg"
                  alt="Jonas Kirkegaard"
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 rounded object-cover border border-brand-border shadow-sm ring-2 ring-brand-accent/5"
                />
                <span className="absolute -bottom-2 -right-2 bg-brand-accent text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded">
                  RC11-14
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-charcoal">Jonas Kirkegaard</h4>
                <p className="text-[10px] text-brand-accent font-mono font-bold uppercase tracking-wider mt-0.5">
                  Value Defensibility
                </p>
                <p className="text-[9px] text-brand-muted mt-1">
                  {lang === 'da' ? '38 år • M&A-specialist' : '38 yrs • M&A Consultant'}
                </p>
              </div>
              <p className="text-[10px] text-brand-muted leading-relaxed pt-2 border-t border-brand-border w-full text-center">
                {lang === 'da'
                  ? 'Verificerer defensibilitet af casestudier, resultater og udtalelser.'
                  : 'Verifies the true defensibility and strength of your case outcomes.'}
              </p>
            </div>

            {/* Expert 3 */}
            <div className="bg-white border border-brand-border rounded p-5 text-center flex flex-col items-center space-y-4 shadow-sm hover:border-brand-accent transition-colors">
              <div className="relative">
                <img
                  src="/src/assets/images/tech_crawling_director_1783106180166.jpg"
                  alt="Camilla Schrøder"
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 rounded object-cover border border-brand-border shadow-sm ring-2 ring-brand-accent/5"
                />
                <span className="absolute -bottom-2 -right-2 bg-brand-accent text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded">
                  RC07-10
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-charcoal">Camilla Schrøder</h4>
                <p className="text-[10px] text-brand-accent font-mono font-bold uppercase tracking-wider mt-0.5">
                  AI & Discoverability
                </p>
                <p className="text-[9px] text-brand-muted mt-1">
                  {lang === 'da' ? '36 år • Tidligere AI-søgesystemudvikler' : '36 yrs • Former AI Search Engineer'}
                </p>
              </div>
              <p className="text-[10px] text-brand-muted leading-relaxed pt-2 border-t border-brand-border w-full text-center">
                {lang === 'da'
                  ? 'Tester jeres syntetiske Share of Voice i ChatGPT, Gemini og Claude.'
                  : 'Tests your synthetic Share of Voice across ChatGPT, Gemini, and Claude.'}
              </p>
            </div>

          </div>
        </div>

        {/* Right: 42 Signal & Decision Areas (5/12 layout) */}
        <div className="lg:col-span-5 bg-brand-card border border-brand-border rounded p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
          
          <div className="space-y-6 z-10">
            <span className="text-[9px] font-mono uppercase tracking-widest bg-brand-accent/10 text-brand-accent py-1 px-2.5 rounded font-bold">
              {lang === 'da' ? 'ANALYSEMODEL' : 'DIAGNOSTIC FRAMEWORK'}
            </span>

            <div className="space-y-2 pt-2">
              <h4 className="text-sm font-bold text-brand-charcoal">
                {lang === 'da' ? '42 Signal- og Beslutningsområder' : '42 Signal & Decision Areas'}
              </h4>
              <p className="text-xs text-brand-muted leading-relaxed font-sans">
                {lang === 'da'
                  ? 'Vores uafhængige outside-in-diagnose kortlægger jeres synlige kommercielle virkelighed på tværs af 42 signal- og beslutningsområder:'
                  : 'Our independent outside-in audit maps your visible commercial footprint across 42 precise signal and decision points:'}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="border-l-2 border-brand-accent pl-3 space-y-1">
                <span className="text-[10px] font-mono font-bold text-brand-accent uppercase tracking-wider block">
                  1. {lang === 'da' ? 'Signaler' : 'Signals'}
                </span>
                <p className="text-[11px] text-brand-muted">
                  {lang === 'da'
                    ? 'Evaluering af det umiddelbare markedsindtryk samt AI-indeksering i AI-modeller.'
                    : 'Evaluation of the immediate market perception and AI indexability in AI systems.'}
                </p>
              </div>

              <div className="border-l-2 border-brand-accent pl-3 space-y-1">
                <span className="text-[10px] font-mono font-bold text-brand-accent uppercase tracking-wider block">
                  2. {lang === 'da' ? 'Dokumentation' : 'Documentation'}
                </span>
                <p className="text-[11px] text-brand-muted">
                  {lang === 'da'
                    ? 'Auditering af bevisførelse, substans, cases og uafhængig defensibilitet.'
                    : 'Auditing of objective evidence, case substance, and independent defensibility.'}
                </p>
              </div>

              <div className="border-l-2 border-brand-accent pl-3 space-y-1">
                <span className="text-[10px] font-mono font-bold text-brand-accent uppercase tracking-wider block">
                  3. {lang === 'da' ? 'Beslutningsrisiko' : 'Decision Risk'}
                </span>
                <p className="text-[11px] text-brand-muted">
                  {lang === 'da'
                    ? 'Identificering af kognitiv friktion, indkøbsbarrierer og strategiske perception-gaps.'
                    : 'Identifying cognitive friction, buying barriers, and strategic perception-gaps.'}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-brand-border text-left z-10 space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-charcoal block">
              {lang === 'da' ? 'ANALYTISK OUTPUT:' : 'DIAGNOSTIC OUTCOME:'}
            </span>
            <p className="text-xs text-brand-accent font-semibold">
              {lang === 'da' ? 'Ledelsesklart beslutningsoutput på 2-3 uger.' : 'Leadership-ready decision output within 2-3 weeks.'}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
