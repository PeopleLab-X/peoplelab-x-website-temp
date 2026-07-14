import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, RotateCcw, Check, HelpCircle, ChevronRight, Sparkles, AlertCircle } from 'lucide-react';
import { Language } from '../types';

interface DecisionEntrySectionProps {
  lang: Language;
  onNavigate: (view: string) => void;
}

// Analytics event logger helper (non-blocking, fails gracefully if gtag is not present)
function trackEvent(eventName: string, params: Record<string, any> = {}) {
  try {
    if (typeof window === "undefined") return;

    if (typeof (window as any).gtag !== "function") return;

    (window as any).gtag("event", eventName, {
      ...params,
      page_path: window.location?.pathname || params.page_path || "",
    });
  } catch (error) {
    console.warn("Analytics event skipped:", eventName, error);
  }
}

export default function DecisionEntrySection({ lang, onNavigate }: DecisionEntrySectionProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedCompanyType, setSelectedCompanyType] = useState<string | null>(null);
  const [selectedSituationId, setSelectedSituationId] = useState<string | null>(null);

  const isDa = lang === 'da';

  // Company types definition
  const companyTypes = [
    {
      id: 'b2b-service',
      da: 'B2B-servicevirksomhed',
      en: 'B2B service company',
    },
    {
      id: 'consulting',
      da: 'Konsulenthus eller rådgivningsvirksomhed',
      en: 'Consulting or advisory firm',
    },
    {
      id: 'tech-saas',
      da: 'Teknologi-, SaaS- eller platformvirksomhed',
      en: 'Technology, SaaS or platform company',
    },
    {
      id: 'industrial',
      da: 'Industriel, teknisk eller specialiseret B2B-virksomhed',
      en: 'Industrial, technical or specialized B2B company',
    },
    {
      id: 'capital-backed',
      da: 'Kapital-, ejerledet eller investordrevet virksomhed',
      en: 'Capital-backed, owner-led or investor-driven company',
    },
    {
      id: 'repositioning',
      da: 'Organisation i repositionering, transformation eller ny vækstfase',
      en: 'Organization in repositioning, transformation or new growth phase',
    },
    {
      id: 'not-sure',
      da: 'Vi er ikke sikre',
      en: 'We are not sure',
    }
  ];

  // Situations and results mapping
  const situations = [
    {
      id: 'before-you-rebuild',
      labelDa: 'Vi overvejer nyt website, ny identitet eller repositionering',
      labelEn: 'We are considering a new website, identity or repositioning',
      resultName: 'Before You Rebuild',
      ctaDa: 'Afklar før I bygger om',
      ctaEn: 'Clarify before you rebuild',
      textDa: 'Før I investerer i nyt website, ny identitet eller ny positionering, undersøger PeopleLab X, hvordan jeres nuværende markedssignal faktisk bliver læst udefra — og om markedet kan forstå, placere og vælge jer ud fra det, I allerede har gjort synligt.',
      textEn: 'Before you invest in a new website, identity or repositioning, PeopleLab X examines how your current market signal is actually read from the outside — and whether the market can understand, place and choose you based on what you have already made visible.'
    },
    {
      id: 'from-interest-to-decision',
      labelDa: 'Vi får interesse, men for få beslutninger',
      labelEn: 'We get interest, but too few decisions',
      resultName: 'From Interest to Decision',
      ctaDa: 'Afklar hvorfor interesse ikke bliver til beslutning',
      ctaEn: 'Clarify why interest is not turning into decision',
      textDa: 'Når der er dialog, møder eller positiv interesse, men beslutningerne trækker ud, ligger problemet ofte i overgangen fra interesse til intern kundebeslutning. PeopleLab X undersøger, hvor jeres signal, dokumentation og beslutningsgrundlag svækkes.',
      textEn: 'When there is dialogue, meetings or positive interest, but decisions drag out, the issue often lies in the transition from interest to internal customer decision. PeopleLab X investigates where your signal, documentation and decision basis are weakened.'
    },
    {
      id: 'value-defensibility',
      labelDa: 'Vores værdi er svær at forklare, dokumentere eller forsvare',
      labelEn: 'Our value is difficult to explain, document or defend',
      resultName: 'Value Defensibility',
      ctaDa: 'Afklar om jeres værdi kan forsvares internt hos kunden',
      ctaEn: 'Clarify whether your value can be defended internally',
      textDa: 'Hvis jeres værdi kræver for meget forklaring, bliver den svær at bruge i kundens interne beslutningsproces. PeopleLab X undersøger, om jeres værdi er tydelig, dokumenterbar og forsvarbar nok til at blive bragt videre.',
      textEn: "If your value requires too much explanation, it becomes difficult to use in the customer's internal decision-making process. PeopleLab X investigates whether your value is clear, documentable and defensible enough to be carried forward."
    },
    {
      id: 'market-entry-reality-check',
      labelDa: 'Vi vil ind i et nyt marked, segment eller kategori',
      labelEn: 'We are entering a new market, segment or category',
      resultName: 'Market Entry Reality Check',
      ctaDa: 'Afklar hvordan markedet vil læse jer, før I går ind',
      ctaEn: 'Clarify how the market will read you before you enter',
      textDa: 'Før I går ind i et nyt marked, segment eller en ny kategori, skal I vide, hvordan I sandsynligvis bliver læst af beslutningsmiljøet. PeopleLab X undersøger, om jeres position, dokumentation og signaler giver markedet nok grund til at forstå og overveje jer.',
      textEn: 'Before you enter a new market, segment or category, you need to know how you are likely to be read by the decision-making environment. PeopleLab X investigates whether your position, proof points and signals give the market enough reason to understand and consider you.'
    },
    {
      id: 'buyer-led-readiness',
      labelDa: 'Køberne undersøger og vurderer os, før de taler med os',
      labelEn: 'Buyers research and assess us before they speak to us',
      resultName: 'Buyer-Led Readiness',
      ctaDa: 'Afklar om I er klar til buyer-led beslutninger',
      ctaEn: 'Clarify whether you are ready for buyer-led decisions',
      textDa: 'Når køberne former deres forståelse, før de kontakter jer, skal jeres synlige materiale kunne bære mere af beslutningen alene. PeopleLab X undersøger, om I er læsbare, troværdige og relevante i den researchfase, hvor I ikke selv er til stede.',
      textEn: 'When buyers shape their understanding before contacting you, your visible material must carry more of the decision alone. PeopleLab X investigates whether you are readable, credible and relevant in that research phase where you are not present yourself.'
    },
    {
      id: 'buying-group-clarity',
      labelDa: 'Flere personer skal forstå og forsvare vores løsning internt',
      labelEn: 'Several people need to understand and defend our solution internally',
      resultName: 'Buying Group Clarity',
      ctaDa: 'Afklar hvordan buying group’en læser jer',
      ctaEn: 'Clarify how the buying group reads you',
      textDa: 'I komplekse B2B-beslutninger skal jeres løsning kunne forstås af flere roller med forskellige behov, risici og beslutningslogikker. PeopleLab X undersøger, om jeres kommunikation kan bæres gennem buying group’en uden at miste styrke.',
      textEn: 'In complex B2B decisions, your solution must be understood by multiple roles with different needs, risks and decision logics. PeopleLab X investigates whether your communication can be carried through the buying group without losing power.'
    },
    {
      id: 'ai-discoverability-and-trust',
      labelDa: 'Vi vil forstå, hvordan AI, søgning og digitale miljøer læser os',
      labelEn: 'We want to understand how AI, search and digital environments read us',
      resultName: 'AI Discoverability and Trust',
      ctaDa: 'Afklar om I er læsbare for både mennesker og AI',
      ctaEn: 'Clarify whether you are readable to both humans and AI',
      textDa: 'AI, søgning og digitale beslutningsmiljøer læser ikke jeres intentioner. De læser det, der er synligt, struktureret og dokumenteret. PeopleLab X undersøger, om jeres virksomhed kan findes, forstås og vurderes troværdigt i de nye beslutningslag.',
      textEn: 'AI, search and digital decision environments do not read your intentions. They read what is visible, structured and documented. PeopleLab X investigates whether your company can be found, understood and evaluated credibly in these new decision layers.'
    },
    {
      id: 'from-supplier-to-strategic-relevance',
      labelDa: 'Vi bliver stadig læst som leverandør, men vil være strategisk relevante',
      labelEn: 'We are still read as a supplier, but want to become strategically relevant',
      resultName: 'From Supplier to Strategic Relevance',
      ctaDa: 'Afklar hvordan I bliver læst strategisk',
      ctaEn: 'Clarify how you are read strategically',
      textDa: 'Mange virksomheder har større strategisk værdi, end markedet kan aflæse. PeopleLab X undersøger, hvorfor I stadig bliver placeret som leverandør, specialist eller underleverandør — og hvad der mangler, før markedet kan læse jer som strategisk relevant.',
      textEn: 'Many companies have greater strategic value than the market can decode. PeopleLab X investigates why you are still placed as a supplier, specialist or subcontractor — and what is missing before the market can read you as strategically relevant.'
    }
  ];

  // Selected object helpers
  const selectedTypeObj = companyTypes.find(t => t.id === selectedCompanyType);
  const selectedSitObj = situations.find(s => s.id === selectedSituationId);

  const handleCompanyTypeSelect = (typeId: string) => {
    setSelectedCompanyType(typeId);
    
    const typeLabel = companyTypes.find(t => t.id === typeId)?.[isDa ? 'da' : 'en'] || '';
    
    // Log event 1: company type selected
    trackEvent('decision_entry_company_type_selected', {
      language: lang.toUpperCase(),
      company_type: typeLabel,
      page_path: window.location.pathname
    });

    setStep(2);
  };

  const handleSituationSelect = (sitId: string) => {
    setSelectedSituationId(sitId);
    
    const sitObj = situations.find(s => s.id === sitId);
    const typeLabel = selectedTypeObj ? selectedTypeObj[isDa ? 'da' : 'en'] : '';
    const sitLabel = sitObj ? sitObj[isDa ? 'labelDa' : 'labelEn'] : '';

    // Log event 2: situation selected
    trackEvent('decision_entry_situation_selected', {
      language: lang.toUpperCase(),
      company_type: typeLabel,
      situation_id: sitId,
      situation_label: sitLabel,
      page_path: window.location.pathname
    });

    // Log event 3: result shown
    trackEvent('decision_entry_result_shown', {
      language: lang.toUpperCase(),
      company_type: typeLabel,
      situation_id: sitId,
      situation_label: sitLabel,
      recommended_analysis: 'Reality Check',
      page_path: window.location.pathname
    });

    setStep(3);
  };

  const handleCtaClick = () => {
    if (!selectedSitObj) return;

    const typeLabel = selectedTypeObj ? selectedTypeObj[isDa ? 'da' : 'en'] : '';
    const sitLabel = selectedSitObj[isDa ? 'labelDa' : 'labelEn'];
    const ctaLabel = selectedSitObj[isDa ? 'ctaDa' : 'ctaEn'];

    // Log event 4: CTA clicked
    trackEvent('decision_entry_cta_clicked', {
      language: lang.toUpperCase(),
      company_type: typeLabel,
      situation_id: selectedSituationId,
      situation_label: sitLabel,
      recommended_analysis: 'Reality Check',
      cta_label: ctaLabel,
      target_anchor: '#order-form-container',
      page_path: window.location.pathname
    });

    // Save choices in sessionStorage so AuditForm can transmit them
    sessionStorage.setItem('decision_entry_company_type', typeLabel);
    sessionStorage.setItem('decision_entry_situation_id', selectedSituationId || '');
    sessionStorage.setItem('decision_entry_situation_label', sitLabel);
    sessionStorage.setItem('decision_entry_recommended_analysis', 'Reality Check');
    sessionStorage.setItem('decision_entry_cta_label', ctaLabel);
    sessionStorage.setItem('decision_entry_language', lang.toUpperCase());
    sessionStorage.setItem('decision_entry_page_path', window.location.pathname);
    sessionStorage.setItem('decision_entry_target_anchor', '#order-form-container');

    // Navigate to contact form
    onNavigate('contact');
  };

  const handleReset = () => {
    setStep(1);
    setSelectedCompanyType(null);
    setSelectedSituationId(null);
  };

  return (
    <section 
      id="decision-entry-portal" 
      className="py-20 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto w-full border-t border-brand-border bg-brand-bg/40 rounded-xl my-12"
    >
      <div className="space-y-12">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-brand-accent uppercase block">
            {isDa ? 'AFKLARENDE INDGANG' : 'CLARIFICATION ENTRY'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black text-brand-charcoal uppercase tracking-tight leading-none">
            {isDa ? 'Find den situation, I står i' : 'Find the situation you are facing'}
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans max-w-2xl mx-auto">
            {isDa 
              ? 'Svar på to spørgsmål, og se hvilken af de 8 strategiske situationer der typisk matcher det, I står med lige nu. Reality Check er den analytiske motor bag vurderingen.'
              : 'Answer two questions and see which of the 8 strategic situations typically matches what you are facing right now. Reality Check is the analytical engine behind the assessment.'}
          </p>
        </div>

        {/* Dynamic Multi-Step Portal Container */}
        <div className="bg-white border border-brand-border rounded-xl p-8 md:p-12 shadow-sm relative overflow-hidden min-h-[380px] flex flex-col justify-between">
          
          {/* Decorative subtle visual grid accent */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 bg-[radial-gradient(#0F4C5C_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <AnimatePresence mode="wait">
            
            {/* STEP 1: Company Type selection */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8 flex-grow"
              >
                <div className="space-y-2 border-b border-brand-border/40 pb-4">
                  <span className="text-[9px] font-mono text-brand-accent uppercase tracking-widest font-bold">
                    {isDa ? 'SPØRGSMÅL 1 AF 2' : 'QUESTION 1 OF 2'}
                  </span>
                  <h3 className="text-lg font-bold text-brand-charcoal">
                    {isDa ? 'Hvilken type virksomhed passer bedst på jer?' : 'What type of company best describes you?'}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {companyTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => handleCompanyTypeSelect(type.id)}
                      className="group flex items-center justify-between p-4 bg-brand-bg/50 border border-brand-border hover:border-brand-accent hover:bg-brand-accent-light/30 rounded-lg text-left transition-all duration-200 cursor-pointer text-brand-charcoal shadow-sm"
                    >
                      <span className="text-xs font-sans font-semibold pr-3 group-hover:text-brand-accent">
                        {isDa ? type.da : type.en}
                      </span>
                      <ChevronRight size={14} className="text-brand-muted group-hover:text-brand-accent shrink-0 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: Strategic Situation selection */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8 flex-grow"
              >
                <div className="space-y-2 border-b border-brand-border/40 pb-4 flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-brand-accent uppercase tracking-widest font-bold">
                      {isDa ? 'SPØRGSMÅL 2 AF 2' : 'QUESTION 2 OF 2'}
                    </span>
                    <h3 className="text-lg font-bold text-brand-charcoal">
                      {isDa ? 'Hvilken situation står I konkret i?' : 'What situation are you facing?'}
                    </h3>
                  </div>
                  {/* Discrete selected company type context */}
                  <span className="text-[10px] font-mono text-brand-muted bg-brand-card/50 px-2 py-1 border border-brand-border rounded">
                    {selectedTypeObj ? (isDa ? selectedTypeObj.da : selectedTypeObj.en) : ''}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 max-h-[380px] overflow-y-auto pr-2 scrollbar-thin">
                  {situations.map((sit, index) => (
                    <button
                      key={sit.id}
                      onClick={() => handleSituationSelect(sit.id)}
                      className="group flex items-center justify-between p-4 bg-brand-bg/30 border border-brand-border hover:border-brand-accent hover:bg-brand-accent-light/25 rounded-lg text-left transition-all duration-200 cursor-pointer text-brand-charcoal shadow-sm"
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-[10px] font-mono font-bold text-brand-accent bg-brand-accent-light/60 px-2 py-1 rounded shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs font-sans font-semibold group-hover:text-brand-accent leading-snug">
                          {isDa ? sit.labelDa : sit.labelEn}
                        </span>
                      </div>
                      <ChevronRight size={14} className="text-brand-muted group-hover:text-brand-accent shrink-0 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>

                <div className="flex justify-start border-t border-brand-border/30 pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center space-x-1.5 text-xs font-mono tracking-wider text-brand-muted hover:text-brand-accent transition-colors cursor-pointer bg-transparent border-none p-1"
                  >
                    <span>←</span>
                    <span>{isDa ? 'Forrige spørgsmål' : 'Previous question'}</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Premium Result display */}
            {step === 3 && selectedSitObj && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-8 flex-grow"
              >
                {/* Header detail */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-brand-border/40 pb-4">
                  <div className="flex items-center space-x-2">
                    <Sparkles size={14} className="text-brand-accent animate-pulse" />
                    <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest font-black">
                      {isDa ? 'ANBEFALET STRATEGISK POSITIONERING' : 'RECOMMENDED STRATEGIC POSITION'}
                    </span>
                  </div>
                  {/* Selected context as subtle tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-mono text-brand-muted bg-brand-card/60 px-2 py-0.5 border border-brand-border rounded">
                      {selectedTypeObj ? (isDa ? selectedTypeObj.da : selectedTypeObj.en) : ''}
                    </span>
                  </div>
                </div>

                {/* Main recommendation display */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start py-2">
                  <div className="md:col-span-4 space-y-2">
                    <span className="text-[11px] font-mono text-brand-accent/75 font-semibold block uppercase tracking-wider">
                      {isDa ? 'SITUATION' : 'SITUATION'}
                    </span>
                    <h3 className="text-xl md:text-2xl font-sans font-black text-brand-charcoal uppercase leading-tight tracking-tight">
                      {selectedSitObj.resultName}
                    </h3>
                  </div>

                  <div className="md:col-span-8 space-y-4">
                    <p className="text-sm text-brand-charcoal leading-relaxed font-sans font-medium">
                      {isDa ? selectedSitObj.textDa : selectedSitObj.textEn}
                    </p>

                    <div className="bg-brand-accent-light/35 border border-brand-accent/15 p-4 rounded-lg flex items-start space-x-3">
                      <HelpCircle size={16} className="text-brand-accent mt-0.5 shrink-0" />
                      <div className="text-[11px] font-sans text-brand-muted leading-relaxed">
                        <strong>{isDa ? 'Den analytiske motor:' : 'The analytical engine:'}</strong>{' '}
                        {isDa 
                          ? 'Reality Check dækker denne situation fuldstændigt. Vi måler præcist de 42 signalområder udefra og ind, så jeres markedssignal bliver uigennemtrængeligt.'
                          : 'Reality Check completely addresses this situation. We map exactly the 42 signal layers from the outside in, making your market signal bulletproof.'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions area */}
                <div className="border-t border-brand-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    {/* Primary CTA */}
                    <button
                      onClick={handleCtaClick}
                      className="w-full sm:w-auto px-6 py-3.5 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-[10px] uppercase tracking-widest transition-all text-center rounded border-none cursor-pointer flex items-center justify-center space-x-2 shadow-sm"
                    >
                      <span>{isDa ? selectedSitObj.ctaDa : selectedSitObj.ctaEn}</span>
                      <ArrowRight size={12} className="stroke-[2.5]" />
                    </button>

                    {/* Secondary Link */}
                    <button
                      onClick={() => onNavigate('situations')}
                      className="text-[11px] font-mono text-brand-muted hover:text-brand-accent font-bold hover:underline cursor-pointer bg-transparent border-none py-2"
                    >
                      {isDa ? 'Se alle 8 strategiske situationer →' : 'See all 8 strategic situations →'}
                    </button>
                  </div>

                  {/* Reset/Back and context note */}
                  <div className="flex items-center space-x-4 shrink-0">
                    <span className="text-[10px] font-mono text-brand-muted/70 italic max-w-[200px] text-right hidden lg:inline">
                      {isDa ? 'Reality Check er den analytiske motor' : 'Reality Check is the analytical engine'}
                    </span>
                    <button
                      onClick={handleReset}
                      className="flex items-center space-x-1.5 px-3 py-2 border border-brand-border hover:border-brand-accent/50 text-brand-muted hover:text-brand-accent font-mono text-[10px] uppercase rounded transition-all cursor-pointer bg-white"
                    >
                      <RotateCcw size={11} />
                      <span>{isDa ? 'Start forfra' : 'Reset'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Stepper Status Indicators */}
          <div className="flex items-center justify-center space-x-2 pt-6 border-t border-brand-border/20 mt-4">
            <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 1 ? 'w-6 bg-brand-accent' : 'w-2 bg-brand-border'}`} />
            <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 2 ? 'w-6 bg-brand-accent' : 'w-2 bg-brand-border'}`} />
            <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 3 ? 'w-6 bg-brand-accent' : 'w-2 bg-brand-border'}`} />
          </div>

        </div>
      </div>
    </section>
  );
}
