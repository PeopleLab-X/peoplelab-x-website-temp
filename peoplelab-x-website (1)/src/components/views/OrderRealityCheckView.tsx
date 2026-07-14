import React, { useRef, useState } from 'react';
import { Language } from '../../types';
import { 
  ArrowRight, CheckCircle2, ShieldAlert, Clock, FileCheck, 
  Map, MessageSquare, ListTodo, Send, Check, Shield, AlertTriangle, 
  Layers, Sparkles, TrendingUp, Presentation, Compass, RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import AuditForm from '../AuditForm';

interface OrderRealityCheckViewProps {
  lang: Language;
}

export default function OrderRealityCheckView({ lang }: OrderRealityCheckViewProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const [hoveredDeliverable, setHoveredDeliverable] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const content = {
    da: {
      heroTag: 'AFKLARENDE INDGANG • BESLUTNINGSKLAR SITUATION',
      heroTitle: 'Afklar om Reality Check er relevant for jer',
      heroSub: 'Få en ekstern rapport om, hvordan jeres virksomhed bliver læst udefra.',
      heroText: 'PeopleLab X analyserer jeres digitale og kommercielle signal gennem website, søgning, LinkedIn, cases, dokumentation, digitale spor og relevante alternativer.',
      heroLeadTime: 'Typisk levering: 2–4 uger',
      heroOutput: 'Output: Reality Check-rapport, signalvurdering, friktionskort og ledelsesgennemgang',
      heroCta: 'Start afklaringen',

      conceptTitle: 'En objektiv udefra-og-ind-læsning',
      conceptP1: 'En Reality Check er en ekstern rapport om, hvordan jeres virksomhed bliver læst udefra.',
      conceptP2: 'Rapporten viser, hvordan jeres digitale og kommercielle signal fremstår for markedet — gennem website, søgning, LinkedIn, cases, dokumentation, digitale spor og relevante alternativer.',
      noWorkshop: 'Det er ikke en workshop.',
      noProcess: 'Det er ikke en intern proces.',
      objectiveRead: 'Det er en objektiv udefra-og-ind-læsning af det, markedet allerede kan møde.',

      processTitle: 'Sådan foregår det',
      steps: [
        {
          num: '1',
          title: 'Vi starter dialogen',
          text: 'I kontakter PeopleLab X og starter en afklarende dialog. Herefter aftaler vi det praktiske: virksomhed, omfang, rapportniveau, relevans og næste skridt.'
        },
        {
          num: '2',
          title: 'I sender relevante links og materialer',
          text: 'Vi tager udgangspunkt i det, markedet allerede kan finde eller møde. Typisk indgår website, LinkedIn, cases, offentlige digitale spor, søgning, samt præsentationsmateriale. I skal ikke producere nyt materiale. I skal ikke samle organisationen. I skal ikke forklare virksomheden indefra først.'
        },
        {
          num: '3',
          title: 'PeopleLab X gennemfører analysen',
          text: 'Vi analyserer, hvordan jeres virksomhed kan opfattes, forstås, vurderes og sammenlignes udefra. Analysen læser jeres synlige signal som en potentiel kunde, partner, investor eller beslutningstager kan møde det.'
        },
        {
          num: '4',
          title: 'I modtager rapporten',
          text: 'I får en samlet Reality Check-rapport med ekstern læsning, signalvurdering, friktionspunkter, prioriterede fund og anbefalinger til, hvad der bør adresseres først.'
        },
        {
          num: '5',
          title: 'Vi gennemgår rapporten med jer',
          text: 'Efter levering gennemgår vi rapportens vigtigste fund og konsekvenser. Formålet er, at I kan bruge rapporten som et klart beslutningsgrundlag.'
        }
      ],

      deliverablesTitle: 'Hvad I får leveret',
      deliverables: [
        {
          title: 'Reality Check-rapport',
          desc: 'En ekstern vurdering af, hvordan jeres virksomhed bliver læst udefra.'
        },
        {
          title: 'Signalvurdering',
          desc: 'Hvor jeres digitale og kommercielle signal står stærkt, uklart eller svagt.'
        },
        {
          title: 'Friktionskort',
          desc: 'Hvor markedet kan få svært ved at forstå, stole på, sammenligne eller vælge jer.'
        },
        {
          title: 'Prioriterede fund',
          desc: 'De vigtigste områder, der bør adresseres først.'
        },
        {
          title: 'Ledelsesgennemgang',
          desc: 'En gennemgang af rapportens hovedkonklusioner og betydning.'
        }
      ],

      timelineTitle: 'Tidsplan',
      timelineText: 'En fokuseret Reality Check tager typisk 2–4 uger. Mere komplekse rapporter kan tage længere tid, hvis der indgår flere markeder, sprog, forretningsområder eller konkurrentfelter. Pris og leveringstid aftales før opstart.',

      readyTitle: 'Klar til en afklarende dialog?',
      readyLeadText: 'Afklar om Reality Check er relevant for jer. Vi afklarer omfang og relevans. Derefter sender I relevante links og materialer, og PeopleLab X gennemfører den eksterne læsning.',
      readyMeta: 'Typisk levering: 2–4 uger • Output: Reality Check-rapport, signalvurdering, friktionskort, prioriterede fund og ledelsesgennemgang',
      formAnchorText: 'Udfyld formularen for at påbegynde afklaringen',
      submitBtnText: 'Afklar om Reality Check er relevant for jer',
      secureChannel: 'SIKKER AFKLARINGSKANAL • DIREKTE TIL ANALYSETEAMET'
    },
    en: {
      heroTag: 'CLARIFICATION ENTRY POINT • DECISION-READY SITUATION',
      heroTitle: 'Clarify whether Reality Check is relevant for you',
      heroSub: 'Get an external report on how your company is read from the outside.',
      heroText: 'PeopleLab X analyzes your digital and commercial signal through website, search, LinkedIn, cases, documentation, digital footprint, and relevant alternatives.',
      heroLeadTime: 'Typical delivery: 2–4 weeks',
      heroOutput: 'Output: Reality Check report, signal assessment, friction map, and executive review',
      heroCta: 'Start the clarification',

      conceptTitle: 'An Objective Outside-In Assessment',
      conceptP1: 'A Reality Check is an external report on how your company is read from the outside.',
      conceptP2: 'The report shows how your digital and commercial signal appears to the market — through your website, search, LinkedIn, cases, documentation, digital footprints, and relevant alternatives.',
      noWorkshop: 'It is not a workshop.',
      noProcess: 'It is not an internal process.',
      objectiveRead: 'It is an objective outside-in reading of what the market already encounters.',

      processTitle: 'The Process',
      steps: [
        {
          num: '1',
          title: 'We start the dialogue',
          text: 'You contact PeopleLab X to start a clarification dialogue. We then agree on the practicalities: company, scope, relevance, and next steps.'
        },
        {
          num: '2',
          title: 'You send relevant links and materials',
          text: 'We base our reading on what the market already finds or encounters. Typically includes: website, LinkedIn, cases, public digital footprints, search, and sales materials. You do not need to produce new material. You do not need to gather the organization. You do not need to explain the company from the inside-out first.'
        },
        {
          num: '3',
          title: 'PeopleLab X conducts the analysis',
          text: 'We analyze how your company is perceived, understood, evaluated, and compared from the outside. The analysis reads your visible signal as a potential customer, partner, investor, or decision-maker encounters it.'
        },
        {
          num: '4',
          title: 'You receive the report',
          text: 'You get a complete Reality Check report including: outside-in reading, signal assessment, friction points, prioritized findings, and recommendations on what should be addressed first.'
        },
        {
          num: '5',
          title: 'We review the report with you',
          text: 'After delivery, we go over the key findings and strategic implications with you. The purpose is to give you a clean foundation for executive decision-making.'
        }
      ],

      deliverablesTitle: 'What is delivered',
      deliverables: [
        {
          title: 'Reality Check Report',
          desc: 'An external assessment of how your company is read from the outside.'
        },
        {
          title: 'Signal Assessment',
          desc: 'Where your digital and commercial footprint stands strong, vague, or weak.'
        },
        {
          title: 'Friction Map',
          desc: 'Where the market may struggle to comprehend, trust, compare, or choose you.'
        },
        {
          title: 'Prioritized Findings',
          desc: 'The most important areas that should be addressed first.'
        },
        {
          title: 'Executive Review',
          desc: 'A complete walk-through of the main conclusions and strategic impact.'
        }
      ],

      timelineTitle: 'Timeline',
      timelineText: 'A focused Reality Check typically takes 2–4 weeks. More complex reviews may take longer if they span multiple markets, languages, business units, or competitive fields. Pricing and timeline are agreed upon before start.',

      readyTitle: 'Ready for a clarification call?',
      readyLeadText: 'Clarify whether Reality Check is relevant for you. We agree on scope and relevance. Then you send relevant links and materials, and PeopleLab X conducts the outside-in analysis.',
      readyMeta: 'Typical delivery: 2–4 weeks • Output: Reality Check report, signal assessment, friction map, prioritized findings, and executive review',
      formAnchorText: 'Complete the form to initiate the clarification',
      submitBtnText: 'Clarify whether Reality Check is relevant for you',
      secureChannel: 'SECURE CLARIFICATION GATEWAY • DIRECT TO AUDIT ENGINEERS'
    }
  }[lang];

  return (
    <div className="bg-brand-bg text-brand-charcoal overflow-hidden" id="order-reality-check-view">
      
      {/* BACKGROUND GRAPHIC ORNAMENTS (Nordic Grid & Luminous Accents) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04] z-0">
        <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(circle_at_top_right,var(--color-brand-accent),transparent_50%)]" />
        <div className="absolute top-[600px] right-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,var(--color-brand-accent),transparent_40%)]" />
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#1c1917 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      {/* 1. HERO SECTION WITH HIGH-FIDELITY INTERACTIVE MOCKUP */}
      <section className="relative z-10 pt-16 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text & Pitch */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-[10px] font-mono font-extrabold tracking-widest text-brand-accent uppercase bg-brand-accent-light px-2.5 py-1 rounded">
                  {content.heroTag}
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-charcoal leading-[1.05] tracking-tight uppercase font-sans">
                {content.heroTitle}
              </h2>
              <p className="text-xl sm:text-2xl font-sans font-semibold text-brand-accent tracking-tight leading-snug">
                {content.heroSub}
              </p>
              <p className="text-sm text-brand-muted font-sans leading-relaxed max-w-2xl pt-2">
                {content.heroText}
              </p>
            </div>

            {/* Premium Meta Specs Badge Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl bg-white/70 backdrop-blur-sm border border-brand-border/80 p-5 rounded shadow-[0_4px_20px_rgba(0,0,0,0.02)] font-mono text-xs">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-brand-accent-light text-brand-accent rounded">
                  <Clock size={16} className="stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-brand-muted block tracking-wider uppercase">STANDARD DELIVERTIME</span>
                  <span className="text-brand-charcoal font-black text-[13px]">{content.heroLeadTime}</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-brand-accent-light text-brand-accent rounded">
                  <FileCheck size={16} className="stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-brand-muted block tracking-wider uppercase">CORE FORMAT</span>
                  <span className="text-brand-charcoal font-black text-[11px] leading-snug">{lang === 'da' ? 'Komplet udefra-ind diagnose' : 'Complete outside-in assessment'}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button 
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-black text-[12px] uppercase tracking-widest rounded transition-all active:scale-98 cursor-pointer border-none flex items-center justify-center space-x-3 shadow-[0_8px_25px_rgba(15,76,92,0.25)] hover:shadow-[0_12px_30px_rgba(15,76,92,0.35)]"
              >
                <span>{content.heroCta}</span>
                <ArrowRight size={14} className="stroke-[3]" />
              </button>
              <div className="text-[11px] font-mono text-brand-muted pl-1">
                {lang === 'da' ? '✓ Ingen forpligtelse ved første henvendelse' : '✓ No obligation with the first enquiry'}
              </div>
            </div>
          </div>

          {/* Right: High-Fidelity 3D-effect Interactive Report Mockup */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] h-[460px] select-none">
              
              {/* Backglow element */}
              <div className="absolute inset-10 bg-brand-accent/20 rounded-full blur-[60px] animate-pulse pointer-events-none" />

              {/* Cover Plate (Deep slate primary card) */}
              <motion.div 
                initial={{ y: 20, rotate: -2, opacity: 0 }}
                animate={{ y: 0, rotate: -3, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute left-4 top-4 w-[85%] h-[90%] bg-brand-dark border border-[#3E3A36]/60 rounded-xl shadow-[10px_20px_40px_rgba(0,0,0,0.15)] p-6 text-white flex flex-col justify-between z-20 overflow-hidden"
              >
                {/* Tech scan lines inside */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-40" />

                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-[9px] font-mono tracking-widest text-brand-border/70 uppercase">PEOPLELAB X • REALITY CHECK</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono font-bold text-brand-border/60 uppercase tracking-widest block">AUDIT SPECIFICATION</span>
                    <h4 className="text-xl font-sans font-black tracking-tight uppercase leading-none text-white">
                      MARKET READINESS
                    </h4>
                    <span className="text-xs font-mono text-brand-border/80 font-bold">VER. 4.2 [RELEASED]</span>
                  </div>

                  {/* Decorative radar/radial graph */}
                  <div className="w-full h-[120px] bg-brand-charcoal/80 border border-white/5 rounded-lg flex items-center justify-center p-3 relative overflow-hidden">
                    <div className="absolute inset-0 border border-brand-accent/20 rounded-full scale-[0.8] animate-pulse" />
                    <div className="absolute inset-0 border border-brand-accent/10 rounded-full scale-[0.4]" />
                    <div className="absolute w-[1px] h-full bg-brand-accent/10 left-1/2 top-0" />
                    <div className="absolute h-[1px] w-full bg-brand-accent/10 left-0 top-1/2" />
                    
                    {/* Floating custom metrics */}
                    <div className="relative z-10 text-center space-y-1">
                      <Compass size={24} className="text-brand-accent mx-auto animate-spin" style={{ animationDuration: '20s' }} />
                      <div className="text-[10px] font-mono tracking-widest text-white font-extrabold uppercase">EXTERNAL LENS</div>
                      <div className="text-[8px] font-mono text-[#10B981]">ACTIVE SCANNING</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 relative z-10">
                  <div className="flex justify-between text-[10px] font-mono text-brand-border/70">
                    <span>OBJECTIVE REPORT</span>
                    <span>100% EXTRALENS</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-brand-accent h-full w-[85%] rounded-full animate-pulse" />
                  </div>
                </div>
              </motion.div>

              {/* Overlapping Foreground Card (Interactive Metric Panel) */}
              <motion.div 
                initial={{ x: 30, y: 60, opacity: 0 }}
                animate={{ x: 24, y: 50, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute right-0 bottom-6 w-[80%] bg-white border border-brand-border rounded-xl shadow-[15px_25px_45px_rgba(0,0,0,0.12)] p-5 z-30 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                  <span className="text-[9px] font-mono text-brand-muted uppercase font-bold tracking-widest">LIVE HARVEST INDICATION</span>
                  <span className="text-[9px] font-mono text-brand-accent font-extrabold bg-brand-accent-light px-2 py-0.5 rounded">PDF REPORT</span>
                </div>

                <div className="space-y-2.5">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-brand-charcoal">
                      <span className="font-semibold">Digital Signal Clarity</span>
                      <span className="text-brand-accent font-bold">84% [STRONG]</span>
                    </div>
                    <div className="w-full bg-brand-bg h-1 rounded-full">
                      <div className="bg-brand-accent h-full w-[84%] rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-brand-charcoal">
                      <span className="font-semibold">LinkedIn Brand Sync</span>
                      <span className="text-brand-accent font-bold">42% [VAGUE]</span>
                    </div>
                    <div className="w-full bg-brand-bg h-1 rounded-full">
                      <div className="bg-brand-accent h-full w-[42%] rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-brand-charcoal">
                      <span className="font-semibold">Competitor Distinction</span>
                      <span className="text-red-700 font-bold">[HIGH RISK]</span>
                    </div>
                    <div className="w-full bg-brand-bg h-1 rounded-full">
                      <div className="bg-red-700 h-full w-[30%] rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Micro preview stamp */}
                <div className="pt-2 border-t border-brand-border/60 flex items-center justify-between text-[9px] text-brand-muted font-mono">
                  <span>SØGNING / WEBSITE / ALTERNATIVER</span>
                  <span className="font-bold text-[#10B981]">REALTIME</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. THE ULTIMATE DUAL COMPARISON PANEL (WORKSHOP? NEJ. OBJEKTIV VIRKELIGHED? JA.) */}
      <section className="py-24 bg-[#FAFAF9] border-y border-brand-border px-6 md:px-12 lg:px-20 relative z-10" id="before-process-comparison-section">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-[11px] font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-accent-light/60 px-3 py-1 rounded">
              {lang === 'da' ? 'FØR PROCESSEN BEGYNDER' : 'BEFORE THE PROCESS BEGINS'}
            </span>
            <h3 className="text-3xl md:text-4xl font-sans font-black uppercase text-brand-charcoal tracking-tight pt-2">
              {lang === 'da'
                ? 'Mange kommercielle projekter starter indefra.'
                : 'Many commercial projects start from the inside.'}
            </h3>
            <p className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
              {lang === 'da'
                ? 'Workshops, behovsafdækning og interne formuleringer kan være værdifulde. Men hvis processen starter dér, risikerer I at bygge videre på den fortælling, I allerede har om jer selv — før I ved, hvordan markedet faktisk læser jer.'
                : 'Workshops, needs assessments and internal formulations can be valuable. But if the process starts there, you risk building on the story you already tell yourselves — before knowing how the market actually reads you.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            
            {/* Left Card: TYPISK STARTPUNKT / TYPICAL STARTING POINT */}
            <div className="bg-white border border-brand-border/60 rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow transition-all duration-300">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-[10px] font-mono font-bold text-red-700 tracking-wider uppercase bg-red-50 px-2.5 py-1 rounded">
                  <ShieldAlert size={12} />
                  <span>
                    {lang === 'da' ? 'TYPISK STARTPUNKT' : 'TYPICAL STARTING POINT'}
                  </span>
                </div>
                <h4 className="text-lg font-bold font-sans text-brand-charcoal uppercase tracking-tight">
                  {lang === 'da' ? 'Indefra først' : 'Inside first'}
                </h4>
                <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-sans">
                  {lang === 'da'
                    ? 'Organisationen samler sine egne antagelser, ønsker og forklaringer — og bruger dem som udgangspunkt for den næste løsning.'
                    : 'The organization gathers its own assumptions, ambitions and explanations — and uses them as the starting point for the next solution.'}
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-brand-border/60 text-xs font-mono">
                <div className="flex items-start space-x-2 text-red-800 font-sans">
                  <span className="font-bold shrink-0 text-red-600">✕</span>
                  <span>
                    {lang === 'da'
                      ? 'Interne antagelser før ekstern læsning'
                      : 'Internal assumptions before external reading'}
                  </span>
                </div>
                <div className="flex items-start space-x-2 text-red-800 font-sans">
                  <span className="font-bold shrink-0 text-red-600">✕</span>
                  <span>
                    {lang === 'da'
                      ? 'Workshops før markedets signaler er forstået'
                      : 'Workshops before market signals are understood'}
                  </span>
                </div>
                <div className="flex items-start space-x-2 text-red-800 font-sans">
                  <span className="font-bold shrink-0 text-red-600">✕</span>
                  <span>
                    {lang === 'da'
                      ? 'Løsninger før problemet er præcist afklaret'
                      : 'Solutions before the problem is precisely clarified'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Card: PEOPLELAB X STARTPUNKT / PEOPLELAB X STARTING POINT */}
            <div className="bg-white border-2 border-brand-accent rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-[0_12px_30px_rgba(15,76,92,0.04)] hover:shadow-[0_15px_40px_rgba(15,76,92,0.08)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-accent text-white font-mono text-[8px] font-extrabold px-3 py-1 uppercase tracking-widest rounded-bl">
                PEOPLELAB X
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent tracking-wider uppercase bg-brand-accent-light px-2.5 py-1 rounded">
                  <CheckCircle2 size={12} />
                  <span>
                    {lang === 'da' ? 'PEOPLELAB X STARTPUNKT' : 'PEOPLELAB X STARTING POINT'}
                  </span>
                </div>
                <h4 className="text-lg font-bold font-sans text-brand-accent uppercase tracking-tight">
                  {lang === 'da' ? 'Udefra først' : 'Outside first'}
                </h4>
                <p className="text-xs md:text-sm text-brand-charcoal leading-relaxed font-sans font-medium">
                  {lang === 'da'
                    ? 'PeopleLab X undersøger det, der allerede er synligt, dokumenteret og forståeligt for markedet, buying groups og AI — før I beslutter, hvad der skal ændres, bygges eller investeres i.'
                    : 'PeopleLab X examines what is already visible, documented and understandable to the market, buying groups and AI — before you decide what should be changed, built or invested in.'}
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-brand-border text-xs font-mono">
                <div className="flex items-start space-x-2 text-brand-accent font-semibold font-sans">
                  <span className="text-emerald-600 shrink-0 font-black">✓</span>
                  <span>
                    {lang === 'da'
                      ? 'Markedets læsning før intern forklaring'
                      : 'Market reading before internal explanation'}
                  </span>
                </div>
                <div className="flex items-start space-x-2 text-brand-accent font-semibold font-sans">
                  <span className="text-emerald-600 shrink-0 font-black">✓</span>
                  <span>
                    {lang === 'da'
                      ? 'Synlige signaler før nye løsninger'
                      : 'Visible signals before new solutions'}
                  </span>
                </div>
                <div className="flex items-start space-x-2 text-brand-accent font-semibold font-sans">
                  <span className="text-emerald-600 shrink-0 font-black">✓</span>
                  <span>
                    {lang === 'da'
                      ? 'Beslutningsgrundlag før investering'
                      : 'Decision basis before investment'}
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center pt-4">
            <div className="inline-block text-xs md:text-sm font-mono font-bold text-brand-charcoal tracking-wide bg-white border border-brand-border/60 max-w-xl mx-auto py-3 px-6 rounded-full shadow-sm">
              {lang === 'da'
                ? 'Før I bygger nyt, skal I vide, hvad markedet allerede kan forstå.'
                : 'Before you build something new, you need to know what the market can already understand.'}
            </div>
          </div>

        </div>
      </section>

      {/* 3. ASYMMETRIC CHRONO-STEP TIMELINE */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto w-full relative z-10">
        <div className="space-y-16">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-brand-border/60 pb-8">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-accent-light px-2.5 py-0.5 rounded">
                EVALUATION WORKFLOW
              </span>
              <h3 className="text-3xl font-black text-brand-charcoal font-sans uppercase tracking-tight">
                {content.processTitle}
              </h3>
            </div>
            <p className="text-xs text-brand-muted max-w-sm leading-relaxed font-mono">
              [SYSTEMATIC INGEST] - Fra den indledende materialedelingskanal til den endelige ledelsesgennemgang på under 4 uger.
            </p>
          </div>

          {/* Interactive Steps Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {content.steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div 
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer group relative bg-white border rounded-xl p-6 flex flex-col justify-between space-y-6 transition-all shadow-sm ${
                    isSelected 
                      ? 'border-brand-accent ring-2 ring-brand-accent/20 -translate-y-2 shadow-md' 
                      : 'border-brand-border hover:border-brand-accent/50 hover:-translate-y-1'
                  }`}
                >
                  {/* Backdrop large elegant index number */}
                  <span className="absolute right-4 top-4 text-4xl font-mono font-black text-brand-accent-light/60 group-hover:text-brand-accent/10 transition-colors">
                    0{step.num}
                  </span>

                  <div className="space-y-4 relative z-10">
                    <span className={`inline-block text-[9px] font-mono font-bold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-brand-accent text-white' : 'bg-brand-bg text-brand-muted'
                    }`}>
                      TRIN 0{step.num}
                    </span>
                    <h4 className="text-xs font-sans font-black text-brand-charcoal uppercase tracking-wider leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-brand-muted leading-relaxed font-sans">
                      {step.text}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-brand-border/40 text-[9px] font-mono text-brand-accent flex items-center justify-between">
                    <span>{isSelected ? '✓ VALGT TRIN' : 'KLIK FOR INFO'}</span>
                    <ArrowRight size={10} className={`transform transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. LEVERANCER BENTO GRID & DYNAMIC DETAILS */}
      <section className="py-24 bg-[#FAFAF9] text-brand-charcoal border-y border-brand-border px-6 md:px-12 lg:px-20 relative z-10" id="deliverables-section">
        
        {/* Subtle dynamic background light */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-accent-light/20 rounded-full blur-[80px] pointer-events-none opacity-40" />

        <div className="max-w-6xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-accent-light/60 px-3 py-1 rounded">
                STRUKTURERET OUTPUT
              </span>
              <h3 className="text-3xl md:text-5xl font-black uppercase text-brand-charcoal font-sans tracking-tight pt-2">
                {content.deliverablesTitle}
              </h3>
              <p className="text-sm md:text-base text-brand-muted max-w-2xl leading-relaxed font-sans">
                Reality Check leveres som en komplet, ekstern signalvurdering. Hvert element er opbygget som et strategisk værktøj til jeres ledelse.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="bg-white border border-brand-border/80 p-4 rounded-xl text-xs font-mono max-w-xs space-y-1 text-brand-charcoal shadow-sm">
                <span className="text-[9px] text-brand-accent block font-bold tracking-wider">TOTAL FORMAT</span>
                <span className="font-semibold">PDF Document + Executive Walk-through</span>
              </div>
            </div>
          </div>

          {/* Deliverables Bento Style Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {content.deliverables.map((item, idx) => {
              // Custom graphic indicators or sizes based on deliverable index to create a rich Bento Grid feel
              const isLarge = idx === 0 || idx === 2;
              const gridSpan = isLarge ? 'md:col-span-7' : 'md:col-span-5';
              const iconColor = idx % 2 === 0 ? 'text-brand-accent' : 'text-amber-600';

              return (
                <div 
                  key={idx}
                  onMouseEnter={() => setHoveredDeliverable(idx)}
                  onMouseLeave={() => setHoveredDeliverable(null)}
                  className={`${gridSpan} group relative bg-white border border-brand-border/60 hover:border-brand-accent/40 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between space-y-6`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-mono text-brand-accent font-bold uppercase tracking-wider">
                        DELIVERABLE 0{idx + 1}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${hoveredDeliverable === idx ? 'bg-brand-accent animate-ping' : 'bg-brand-charcoal/15'}`} />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg font-black tracking-tight uppercase text-brand-charcoal font-sans flex items-center gap-2">
                        {idx === 0 && <FileCheck size={18} className={iconColor} />}
                        {idx === 1 && <TrendingUp size={18} className={iconColor} />}
                        {idx === 2 && <Compass size={18} className={iconColor} />}
                        {idx === 3 && <Layers size={18} className={iconColor} />}
                        {idx === 4 && <Presentation size={18} className={iconColor} />}
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Dynamic interactive metric widget inside the large bento blocks */}
                  {isLarge && (
                    <div className="pt-4 border-t border-brand-border/50 space-y-2">
                      <div className="flex justify-between text-[10px] font-mono text-brand-muted">
                        <span>ESTIMATED SIGNAL DEVIATION</span>
                        <span>ANALYSIS ACCURACY: 98%</span>
                      </div>
                      <div className="w-full bg-brand-accent-light/30 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-brand-accent h-full rounded-full transition-all duration-500" style={{ width: hoveredDeliverable === idx ? '100%' : '60%' }} />
                      </div>
                    </div>
                  )}

                  {!isLarge && (
                    <div className="pt-4 border-t border-brand-border/50 text-[9px] font-mono text-brand-muted flex items-center justify-between">
                      <span>EXECUTIVE READY</span>
                      <span className="text-[#10B981] font-semibold">✓ COMPLETE</span>
                    </div>
                  )}
                </div>
              );
            })}

          </div>

          {/* Timeline & Price clarification Card */}
          <div className="bg-white border border-brand-border/70 rounded-2xl p-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-sm">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center space-x-2 text-brand-accent font-mono text-xs uppercase tracking-widest font-bold">
                <Clock size={14} className="animate-spin text-brand-accent" style={{ animationDuration: '10s' }} />
                <span>{content.timelineTitle}</span>
              </div>
              <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-sans">
                {content.timelineText}
              </p>
            </div>
            <div className="md:col-span-4 bg-[#FAFAF9] border border-brand-border/80 p-5 rounded-xl text-center font-mono space-y-1 shadow-inner">
              <span className="text-[9px] text-brand-muted uppercase block font-bold tracking-wider">{lang === 'da' ? 'TYPISK VARIGHED' : 'TYPICAL DURATION'}</span>
              <span className="text-xl font-black text-brand-accent block">2–4 UGER</span>
              <span className="text-[9px] text-brand-muted block font-sans font-medium">{lang === 'da' ? 'Pris aftales forud' : 'Price is pre-agreed'}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FORM WRAPPER (THE ABSOLUTE CONVERSION HERO CORE) */}
      <section ref={formRef} className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full scroll-mt-24 relative z-10" id="order-form-container">
        
        {/* Main Header */}
        <div className="space-y-4 max-w-4xl mb-16">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-accent-light px-3.5 py-1.5 rounded inline-block">
            {lang === 'da' ? 'AFKLARENDE INDGANG • SIKKERT FØRSTE SKRIDT' : 'CLARIFICATION ENTRY POINT • SECURE FIRST STEP'}
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-brand-charcoal uppercase tracking-tight leading-[1.1]">
            {lang === 'da' ? 'Afklar om Reality Check er relevant for jer' : 'Clarify whether Reality Check is relevant for you'}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed font-sans max-w-3xl">
            {lang === 'da' 
              ? 'Start med en kort afklaring. Vi vurderer, om jeres situation egner sig til et Reality Check, og hvilket ledelsesspørgsmål analysen bør besvare.' 
              : 'Start with a short clarification. We assess whether your situation is suitable for a Reality Check and what executive question the analysis should answer.'}
          </p>
          <div className="w-16 h-1 bg-brand-accent rounded mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Decision-oriented Context and Process */}
          <div className="lg:col-span-6 space-y-10 text-brand-charcoal">
            
            {/* 1. Intro detail */}
            <div className="space-y-4 bg-white/85 border border-brand-border/80 p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <h4 className="text-xs font-mono font-black uppercase tracking-wider text-brand-accent">
                {lang === 'da' ? 'Kort afklaring — ikke et salgsmøde' : 'Short clarification — not a sales meeting'}
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans">
                {lang === 'da'
                  ? 'Formålet er ikke at løse problemet i første samtale. Formålet er at finde ud af, om der er et reelt grundlag for en ekstern læsning af jeres markedssignal, beslutningsfriktion og kommercielle læsbarhed.'
                  : 'The purpose is not to solve the problem in the first conversation. The purpose is to find out if there is a real basis for an external reading of your market signal, decision friction, and commercial readability.'}
              </p>
              <div className="border-t border-brand-border/60 pt-4 mt-2">
                <p className="text-xs sm:text-sm text-brand-charcoal font-semibold leading-relaxed font-sans">
                  {lang === 'da'
                    ? 'Første skridt er ikke et salgsmøde og ikke gratis rådgivning. Det er en kort afklaring af, om Reality Check er relevant for jer, og hvilket ledelsesspørgsmål analysen bør besvare.'
                    : 'The first step is not a sales meeting and not free advice. It is a short clarification of whether a Reality Check is relevant for you, and what management question the analysis should answer.'}
                </p>
              </div>
            </div>

            {/* 2. What we clarify list */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-black uppercase tracking-widest text-brand-charcoal">
                {lang === 'da' ? 'I første samtale afklarer vi:' : 'In the first conversation, we clarify:'}
              </h4>
              <ul className="space-y-3 pl-1">
                {lang === 'da' ? (
                  <>
                    <li className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-brand-muted font-medium">
                      <span className="text-brand-accent font-mono font-black shrink-0">↳</span>
                      <span>hvilken kommerciel situation I står i</span>
                    </li>
                    <li className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-brand-muted font-medium">
                      <span className="text-brand-accent font-mono font-black shrink-0">↳</span>
                      <span>hvad I overvejer at ændre eller investere i</span>
                    </li>
                    <li className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-brand-muted font-medium">
                      <span className="text-brand-accent font-mono font-black shrink-0">↳</span>
                      <span>hvad I har brug for at forstå udefra</span>
                    </li>
                    <li className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-brand-muted font-medium">
                      <span className="text-brand-accent font-mono font-black shrink-0">↳</span>
                      <span>om Reality Check er den rigtige analyseform</span>
                    </li>
                    <li className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-brand-muted font-medium">
                      <span className="text-brand-accent font-mono font-black shrink-0">↳</span>
                      <span>hvem der bør være involveret i næste skridt</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-brand-muted font-medium">
                      <span className="text-brand-accent font-mono font-black shrink-0">↳</span>
                      <span>what commercial situation you are facing</span>
                    </li>
                    <li className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-brand-muted font-medium">
                      <span className="text-brand-accent font-mono font-black shrink-0">↳</span>
                      <span>what you are considering changing or investing in</span>
                    </li>
                    <li className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-brand-muted font-medium">
                      <span className="text-brand-accent font-mono font-black shrink-0">↳</span>
                      <span>what you need to understand from the outside</span>
                    </li>
                    <li className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-brand-muted font-medium">
                      <span className="text-brand-accent font-mono font-black shrink-0">↳</span>
                      <span>whether a Reality Check is the right format of analysis</span>
                    </li>
                    <li className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-brand-muted font-medium">
                      <span className="text-brand-accent font-mono font-black shrink-0">↳</span>
                      <span>who should be involved in the next steps</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* 3. Who should participate */}
            <div className="space-y-2 border-l-2 border-brand-accent pl-4 py-1">
              <h4 className="text-xs font-mono font-black uppercase tracking-widest text-brand-charcoal">
                {lang === 'da' ? 'Hvem bør deltage' : 'Who should participate'}
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans">
                {lang === 'da'
                  ? 'Det giver bedst mening, at samtalen tages med en person, der sidder tæt på den kommercielle beslutning. Det kan være ledelse, ejerkreds, marketing, salg, forretningsudvikling eller bestyrelse — afhængigt af hvilken beslutning I står foran.'
                  : 'It makes the most sense that the conversation is held with someone close to the commercial decision. This could be leadership, owners, marketing, sales, business development, or the board — depending on the decision you are facing.'}
              </p>
            </div>

            {/* 4. After the enquiry */}
            <div className="space-y-5 bg-white/85 border border-brand-border/80 p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <h4 className="text-xs font-mono font-black uppercase tracking-widest text-brand-charcoal border-b border-brand-border/60 pb-2">
                {lang === 'da' ? 'Efter henvendelsen — Kontrolleret proces' : 'After the enquiry — Controlled process'}
              </h4>
              <div className="space-y-4">
                {lang === 'da' ? (
                  <>
                    <div className="flex items-start space-x-3">
                      <span className="font-mono text-[10px] font-black bg-brand-accent text-white w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0">1</span>
                      <p className="text-xs sm:text-sm text-brand-muted font-sans leading-snug">Vi læser jeres besked og vurderer situationen.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-mono text-[10px] font-black bg-brand-accent text-white w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0">2</span>
                      <p className="text-xs sm:text-sm text-brand-muted font-sans leading-snug">Hvis der er et muligt fit, aftaler vi en kort afklaringssamtale.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-mono text-[10px] font-black bg-brand-accent text-white w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0">3</span>
                      <p className="text-xs sm:text-sm text-brand-muted font-sans leading-snug">Hvis Reality Check er relevant, modtager I en kort scope note med formål, proces, output, tidsramme og pris.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-mono text-[10px] font-black bg-brand-accent text-white w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0">4</span>
                      <p className="text-xs sm:text-sm text-brand-muted font-sans leading-snug">Først derefter starter analysen.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start space-x-3">
                      <span className="font-mono text-[10px] font-black bg-brand-accent text-white w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0">1</span>
                      <p className="text-xs sm:text-sm text-brand-muted font-sans leading-snug">We read your message and assess the situation.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-mono text-[10px] font-black bg-brand-accent text-white w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0">2</span>
                      <p className="text-xs sm:text-sm text-brand-muted font-sans leading-snug">If there is a potential fit, we agree on a short clarification call.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-mono text-[10px] font-black bg-brand-accent text-white w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0">3</span>
                      <p className="text-xs sm:text-sm text-brand-muted font-sans leading-snug">If a Reality Check is relevant, you receive a brief scope note with purpose, process, output, timeframe, and price.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-mono text-[10px] font-black bg-brand-accent text-white w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0">4</span>
                      <p className="text-xs sm:text-sm text-brand-muted font-sans leading-snug">Only after that does the analysis start.</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* 5. Scope note explanation */}
            <div className="bg-[#FAFAF9] border border-brand-border/80 p-5 rounded-xl text-xs sm:text-sm text-brand-muted font-sans leading-relaxed shadow-inner">
              <span className="text-[9px] font-mono font-bold text-brand-accent uppercase block tracking-widest mb-1.5">
                {lang === 'da' ? 'SCOPE NOTE OG NÆSTE SKRIDT' : 'SCOPE NOTE AND NEXT STEPS'}
              </span>
              {lang === 'da'
                ? 'Hvis der er fit, samler vi næste skridt i en kort scope note. Den beskriver, hvad Reality Check skal afklare, hvilket beslutningsspørgsmål analysen skal besvare, hvad I får leveret, tidsramme og pris.'
                : 'If there is a fit, we gather the next steps in a short scope note. It describes what the Reality Check should clarify, which decision question the analysis must answer, what you will receive, the timeframe, and the price.'}
            </div>

          </div>

          {/* Right Column: High-Fidelity Form Card */}
          <div className="lg:col-span-6 relative">
            <div className="bg-brand-dark text-white border border-[#2D2A26] rounded-2xl shadow-[0_30px_70px_rgba(15,76,92,0.18)] overflow-hidden">
              <div className="h-1.5 w-full bg-brand-accent" />
              <div className="bg-[#1C1917] px-6 py-4 border-b border-[#2D2A26] flex items-center justify-between text-[10px] font-mono text-brand-border/60">
                <span className="flex items-center gap-2 font-bold tracking-wider text-brand-accent-light">
                  <Shield size={12} className="text-brand-accent-light" />
                  <span>{content.secureChannel}</span>
                </span>
                <span className="text-brand-border/30">ID: RC-991823</span>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="text-center pb-4 border-b border-white/5">
                  <span className="text-[11px] font-mono text-brand-accent-light block uppercase tracking-widest font-black">
                    {content.formAnchorText}
                  </span>
                  <p className="text-[10px] text-brand-border/55 mt-1 font-sans">
                    {lang === 'da' ? 'Tager under 2 minutter. Intet nyt materiale skal produceres.' : 'Takes under 2 minutes. No new materials required.'}
                  </p>
                </div>

                <div className="text-brand-charcoal rounded-xl overflow-hidden shadow-inner bg-brand-bg/95 border border-[#2C2926]">
                  <AuditForm lang={lang} preselectedSituation="broad" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
