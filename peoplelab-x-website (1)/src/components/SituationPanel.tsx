import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingDown, AlertOctagon, HelpCircle, Landmark, ShieldCheck, 
  Sparkles, Check, ArrowRight, BrainCircuit 
} from 'lucide-react';
import { Language, Situation } from '../types';

interface SituationPanelProps {
  lang: Language;
}

export default function SituationPanel({ lang }: SituationPanelProps) {
  const [selectedId, setSelectedId] = useState<string>('invest');

  const situations: Situation[] = [
    {
      id: 'invest',
      title: lang === 'da' ? 'Før vigtige investeringer' : 'Before major investments',
      subtitle: lang === 'da' ? 'Before You Invest Audit' : 'Before You Invest Audit',
      description: lang === 'da'
        ? 'Er målets kommercielle fundament bundsolidt, eller er det et luftkastel? Vi udfører uafhængige analyser af synlig kommerciel modenhed, før millionerne rulles ud.'
        : 'Is the target company’s commercial foundation rock-solid, or is it a house of cards? We perform independent audits of visible commercial maturity before capital is deployed.',
      trigger: lang === 'da' 
        ? 'Når I overvejer opkøb, M&A, VC/PE-investeringer eller strategiske partnerskaber.'
        : 'When evaluating acquisitions, M&A, venture capital/private equity entries, or strategic partnerships.',
      auditFocus: lang === 'da' ? [
        'Værdisynlighed udefra-ind (Perception Audit)',
        'LLM & AI Crawlability og søgestatus',
        'Forsvarbarhed af casestudier & kundetillid',
        'Kognitive friktionspunkter i købsrejsen'
      ] : [
        'Value visibility outside-in (Perception Audit)',
        'LLM & AI crawlability and search readiness',
        'Defensibility of case studies and customer trust',
        'Cognitive friction points in the buyer journey'
      ]
    },
    {
      id: 'win-rate',
      title: lang === 'da' ? 'Faldende win-rates' : 'Falling win-rates',
      subtitle: lang === 'da' ? 'Value Defensibility Audit' : 'Value Defensibility Audit',
      description: lang === 'da'
        ? 'Når salgsteamet presses på pris, eller win-raten falder, skyldes det ofte, at jeres reelle værdi er usynlig udefra. Vi gennemsøger jeres dokumentation for at genvinde kategori-ejerskab.'
        : 'When sales teams face price pressure or win-rates slip, it is usually because your real value is invisible from the outside. We analyze your documentation to reclaim category ownership.',
      trigger: lang === 'da'
        ? 'Når tilbud tabes til billigere konkurrenter, eller prissætningen udfordres af markedet.'
        : 'When proposals are lost to cheaper alternatives, or pricing model is challenged by the market.',
      auditFocus: lang === 'da' ? [
        'Udefra-ind værditydelighed vs. konkurrenter',
        'Hvorvidt jeres beviser er "defensible" (svære at kopiere)',
        'Buying Committee-support (taler I til alle beslutningstagere?)',
        'Klarhed i differentieringsfaktorer'
      ] : [
        'Outside-in value clarity vs. competitors',
        'Whether your evidence is "defensible" (hard to replicate)',
        'Buying Committee support (do you speak to all decision makers?)',
        'Clarity in differentiation vectors'
      ]
    },
    {
      id: 'rebrand',
      title: lang === 'da' ? 'Branding & Nyt Website' : 'Rebranding & New Website',
      subtitle: lang === 'da' ? 'Pre-Design Blueprint' : 'Pre-Design Blueprint',
      description: lang === 'da'
        ? 'Inden I betaler millioner til et designbureau for farver og fonte, bør I diagnosticere, hvad der reelt ikke virker i jeres kommunikation. Vi leverer det rå, ufiltrerede blueprint.'
        : 'Before paying design agencies millions for colors and fonts, diagnose what is actually broken in your communication. We deliver the raw, unfiltered outside-in blueprint.',
      trigger: lang === 'da'
        ? 'Før opstart af dyre rebrandings, nyt website eller kategori-repositering.'
        : 'Prior to launching expensive rebranding projects, website redesigns, or category repositions.',
      auditFocus: lang === 'da' ? [
        'Kortlægning af eksisterende kommercielle perception gaps',
        'Kravspecifikation til det nye markedssprog (hvad skal bevares?)',
        'Eliminering af ligegyldigt "corporate BS" og fluff',
        'Sikring af SEO og AI LLM-indeksering under skiftet'
      ] : [
        'Mapping of existing commercial perception gaps',
        'Requirements specifications for the new market language',
        'Elimination of generic corporate BS and linguistic fluff',
        'Securing SEO and AI LLM indexing continuity during the transition'
      ]
    },
    {
      id: 'ai-seo',
      title: lang === 'da' ? 'LLM & AI-søgninger' : 'LLM & AI Search',
      subtitle: lang === 'da' ? 'AI Search Security Audit' : 'AI Search Security Audit',
      description: lang === 'da'
        ? 'AI-modeller anbefaler kun de virksomheder, de kan finde troværdig, struktureret og uafhængig evidens for. Vi tester jeres synlighed overfor AI-modellerne.'
        : 'AI search models only recommend companies for which they can locate credible, structured, and independent evidence. We test your visibility within AI-based research.',
      trigger: lang === 'da'
        ? 'Når I ønsker at sikre, at jeres brand anbefales af ChatGPT, Gemini og Copilot.'
        : 'When you want to guarantee your brand is recommended by ChatGPT, Gemini, and Copilot for category queries.',
      auditFocus: lang === 'da' ? [
        'Analyse af mærkets LLM-syntetiske omtale (Share of Voice i AI)',
        'Strukturering af evidens for AI-baseret research og maskinlæsning',
        'Identifikation af uoverensstemmelser i AI-genererede svar',
        'Sikkerhed mod AI-hallucinationer omkring jeres ydelser'
      ] : [
        'Analysis of brand LLM synthetic share of voice',
        'Structuring proof points for AI-based research and machine readability',
        'Identifying discrepancies in AI-generated answers',
        'Guarding against AI hallucinations regarding your services'
      ]
    },
    {
      id: 'exit',
      title: lang === 'da' ? 'Klargøring til Exit' : 'Exit Readiness',
      subtitle: lang === 'da' ? 'Valuation Maximizer' : 'Valuation Maximizer',
      description: lang === 'da'
        ? 'Maksimer virksomhedens værdi ved at gøre alle kommercielle styrker og kundecases helt krystalklare og uigendrivelige udefra-ind, så købere ser det fulde potentiale.'
        : 'Maximize transaction value by making all commercial strengths and client proof points crystal clear and undeniable from the outside, so buyers see the full potential.',
      trigger: lang === 'da'
        ? '12-24 måneder forud for et planlagt salg, børsnotering eller generationsskifte.'
        : '12-24 months prior to a planned sale, IPO, or leadership transition.',
      auditFocus: lang === 'da' ? [
        'Eliminering af svagheder i den synlige case-dokumentation',
        'Bevisbyrde-optimering for premium prissætning',
        'Validering af markedsposition uafhængigt af stifterens personlige netværk',
        'Styrkelse af det synlige digitale fodaftryk'
      ] : [
        'Elimination of weak links in visible case documentation',
        'Proof-of-value optimization to justify premium pricing',
        'Validating market position independent of founder’s network',
        'Strengthening the visible digital footprint and modern trust indicators'
      ]
    },
    {
      id: 'reality',
      title: lang === 'da' ? 'Det Interne Spejl' : 'The Internal Mirror',
      subtitle: lang === 'da' ? 'Perception Gap Audit' : 'Perception Gap Audit',
      description: lang === 'da'
        ? 'Matcher jeres egen overbevisning virkeligheden? Vi fjerner mavefornemmelserne og holder spejlet op for ledelsen: Det her er, hvad jeres kunder og markedet rent faktisk ser.'
        : 'Does your internal conviction match reality? We eliminate gut assumptions and hold up the mirror to leadership: This is what your market actually sees.',
      trigger: lang === 'da'
        ? 'Når ledelsen eller bestyrelsen vil have uafhængige beviser for, at markedsføringen matcher strategien.'
        : 'When the board or executive team requires independent proof that marketing aligns with strategy.',
      auditFocus: lang === 'da' ? [
        'Uafhængig sammenligning af intern strategi vs. ekstern virkelighed',
        'Afdækning af blinde vinkler i den kommercielle eksekvering',
        'Perception-analyse af budskabsmodtagelsen hos kernesegmentet',
        'Konstruktiv diagnose til prioritering af B2B budgettet'
      ] : [
        'Independent comparison of internal strategy vs. external reality',
        'Uncovering blind spots in commercial messaging execution',
        'Perception analysis of messaging reception among core segments',
        'Constructive diagnosis to prioritize high-impact B2B budgets'
      ]
    }
  ];

  const activeSit = situations.find(s => s.id === selectedId) || situations[0];

  const getIcon = (id: string) => {
    switch(id) {
      case 'invest': return <Landmark className="w-5 h-5" />;
      case 'win-rate': return <TrendingDown className="w-5 h-5" />;
      case 'rebrand': return <Sparkles className="w-5 h-5" />;
      case 'ai-seo': return <BrainCircuit className="w-5 h-5" />;
      case 'exit': return <ShieldCheck className="w-5 h-5" />;
      default: return <AlertOctagon className="w-5 h-5" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="situationer-panel-container">
      {/* Selector Side (4/12 weight) */}
      <div className="lg:col-span-5 space-y-2.5">
        {situations.map((sit) => {
          const isSelected = sit.id === selectedId;
          return (
            <button
              key={sit.id}
              onClick={() => setSelectedId(sit.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3.5 cursor-pointer relative group ${isSelected ? 'border-emerald-500 bg-emerald-500/5 shadow-[0_4px_20px_rgba(16,185,129,0.05)]' : 'border-slate-800 bg-slate-950/40 hover:border-slate-700 hover:bg-slate-900/30'}`}
              id={`btn-sit-${sit.id}`}
            >
              {isSelected && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l-xl" />
              )}
              <div className={`p-2.5 rounded-lg shrink-0 transition-colors ${isSelected ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-900 text-slate-400 group-hover:text-slate-200'}`}>
                {getIcon(sit.id)}
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono tracking-wider text-slate-500 uppercase block">
                  {sit.subtitle}
                </span>
                <span className={`text-xs font-bold transition-colors ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                  {sit.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Display Side (7/12 weight) */}
      <div className="lg:col-span-7 bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 sm:p-8 relative min-h-[360px] flex flex-col justify-between" id="situation-detail-box">
        <div className="absolute top-4 right-4 pointer-events-none">
          <span className="text-[10px] font-mono text-emerald-500/40 tracking-widest font-bold uppercase">
            SITUATION {situations.findIndex(s => s.id === selectedId) + 1} OF 6
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Headline and tags */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 py-1 px-2.5 rounded">
                {activeSit.subtitle}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white mt-2">
                {activeSit.title}
              </h3>
            </div>

            {/* Core Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {activeSit.description}
            </p>

            {/* Context/Trigger */}
            <div className="p-4 bg-slate-950/60 border border-slate-800/60 rounded-xl space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 block">
                {lang === 'da' ? 'Udløsende begivenhed:' : 'Trigger / Event:'}
              </span>
              <p className="text-xs text-slate-300 font-medium">
                {activeSit.trigger}
              </p>
            </div>

            {/* Audit Focus List */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                {lang === 'da' ? 'Hvad diagnosticerer vi i analysen?' : 'What do we diagnose in the audit?'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeSit.auditFocus.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA in detail panel */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              {lang === 'da' ? 'Analysefase:' : 'Analysis scope:'}
            </p>
            <p className="text-xs font-bold text-slate-200">
              {lang === 'da' ? 'Fuld udefra-ind rapport på 14 dage' : 'Full outside-in report in 14 days'}
            </p>
          </div>
          <a
            href="#kontakt-sektion"
            className="w-full sm:w-auto px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>{lang === 'da' ? 'Start analyse' : 'Get Started'}</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
