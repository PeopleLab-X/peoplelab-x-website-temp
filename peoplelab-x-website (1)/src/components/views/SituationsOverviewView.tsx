import React from 'react';
import { Language } from '../../types';
import { ArrowRight, HelpCircle } from 'lucide-react';

// Light color-saturated image assets for vibrant branding (no greyscale)
import plxInvestBlueprint from '../../assets/images/plx_invest_light_1783150309974.jpg';
import plxDecisionNotebook from '../../assets/images/plx_decision_light_1783150322324.jpg';
import plxValueMarble from '../../assets/images/plx_value_light_1783150334821.jpg';
import plxAiLaptop from '../../assets/images/plx_ai_light_1783150346746.jpg';
import plxStrategicSteps from '../../assets/images/plx_steps_light_1783150359438.jpg';
import plxMarketBridge from '../../assets/images/plx_bridge_light_1783150374466.jpg';
import plxReadabilityLoupe from '../../assets/images/plx_loupe_light_1783150389860.jpg';
import plxExecutiveBrief from '../../assets/images/plx_brief_light_1783150401773.jpg';

interface SituationsOverviewViewProps {
  lang: Language;
  onNavigateToSituation: (id: string) => void;
  onNavigateToIndikator?: () => void;
}

export default function SituationsOverviewView({ lang, onNavigateToSituation, onNavigateToIndikator }: SituationsOverviewViewProps) {
  const situations = [
    {
      id: 'situation-before-invest',
      num: '01',
      image: plxInvestBlueprint,
      titleDa: 'Før I investerer',
      titleEn: 'Before You Invest',
      symptomDa: 'I overvejer nyt website, ny positionering, AI, salg, marketing eller go-to-market-tiltag. Der er energi i processen, men også en reel risiko for at løse et symptom i stedet for årsagen.',
      symptomEn: 'You are considering a new website, repositioning, AI, sales, marketing, or go-to-market initiatives. While the process has momentum, there is a real risk of treating a symptom rather than the root cause.',
      relevanceDa: 'Når I overvejer nyt website, ny positionering, AI, salg, marketing eller go-to-market, er det afgørende først at se, hvad markedet faktisk kan forstå og forsvare. Ellers risikerer I at investere i symptomet — ikke i årsagen.',
      relevanceEn: 'When considering a new website, repositioning, AI, sales, marketing, or go-to-market, it is crucial to first see what the market can actually understand and defend. Otherwise, you risk investing in the symptom — not the cause.',
      ctaDa: 'Afklar før I investerer',
      ctaEn: 'Clarify before you invest'
    },
    {
      id: 'situation-interest-decision',
      num: '02',
      image: plxDecisionNotebook,
      titleDa: 'Fra interesse til beslutning',
      titleEn: 'From Interest to Decision',
      symptomDa: 'Møderne går godt. Dialogen virker positiv. Kunden nikker, spørger ind og viser interesse. Men når beslutningen skal tages videre internt, mister sagen tempo eller forsvinder.',
      symptomEn: 'Meetings go well. The dialogue feels positive. The prospect nods, asks questions, and shows interest. But when the decision needs to move forward internally, the deal loses momentum or disappears entirely.',
      relevanceDa: 'Når der er interesse, møder eller dialog — men beslutningen udebliver — ligger friktionen ofte før selve salgsafslutningen. Reality Check undersøger, om markedet har nok grundlag for at forstå, begrunde og tage jer videre internt.',
      relevanceEn: 'When there is interest, meetings, or dialogue — but the decision fails to materialize — friction often lies prior to the close. Reality Check investigates whether the market has sufficient ground to understand, justify, and carry you forward internally.',
      ctaDa: 'Afklar hvorfor interesse ikke bliver til beslutning',
      ctaEn: 'Clarify why interest does not turn into a decision'
    },
    {
      id: 'situation-value-defensibility',
      num: '03',
      image: plxValueMarble,
      labelDa: 'Værdi der kan begrundes',
      labelEn: 'Value That Can Be Justified',
      titleDa: 'Når jeres værdi skal kunne forsvares',
      titleEn: 'When your value must be defended',
      symptomDa: 'I ved, at jeres løsning, erfaring eller tilgang skaber større værdi end billigere alternativer. Alligevel bliver I ofte vurderet på pris, leverance eller overfladisk sammenligning.',
      symptomEn: 'You know that your solution, experience, or approach creates greater value than cheaper alternatives. Yet you are frequently evaluated on price, deliverables, or superficial comparisons.',
      relevanceDa: 'Hvis jeres værdi ikke kan forklares, dokumenteres og forsvares internt hos kunden, bliver pris, prioritet og risiko sværere at håndtere. Reality Check undersøger, om jeres synlige signal giver markedet nok grundlag for at vælge jer.',
      relevanceEn: 'If your value cannot be explained, documented, and defended internally by the customer, price, priority, and risk become harder to manage. Reality Check investigates whether your visible signal provides the market with sufficient ground to choose you.',
      ctaDa: 'Afklar om jeres værdi kan forsvares',
      ctaEn: 'Clarify whether your value can be defended'
    },
    {
      id: 'situation-buyer-led',
      num: '04',
      image: plxAiLaptop,
      titleDa: 'Klarhed før dialogen',
      titleEn: 'Clarity Before Dialogue',
      symptomDa: 'Potentielle kunder undersøger jer via website, LinkedIn, cases, søgning, AI og kolleger, før de kontakter jer. En stor del af vurderingen sker derfor uden jeres egen forklaring.',
      symptomEn: 'Potential clients research you via your website, LinkedIn, case studies, searches, AI, and peers before contacting you. Much of the assessment happens without your own explanation.',
      relevanceDa: 'Før I selv får ordet, har markedet allerede læst jeres website, søgning, LinkedIn, cases, dokumentation og konkurrenter. Reality Check viser, hvad der kan forstås, før dialogen begynder.',
      relevanceEn: 'Before you get to speak for yourself, the market has already read your website, search footprint, LinkedIn, cases, documentation, and competitors. Reality Check shows what can be understood before the dialogue begins.',
      ctaDa: 'Afklar hvad markedet ser før dialogen',
      ctaEn: 'Clarify what the market sees before dialogue'
    },
    {
      id: 'situation-strategic-relevance',
      num: '05',
      image: plxStrategicSteps,
      titleDa: 'Fra leverandør til strategisk relevans',
      titleEn: 'From Supplier to Strategic Relevance',
      symptomDa: 'I kan skabe større værdi end markedet umiddelbart opfatter. Men kunderne placerer jer stadig som leverandør, specialist eller udførende partner.',
      symptomEn: 'You deliver greater value than the market immediately perceives. Yet clients continue to categorize you as a vendor, specialist, or execution partner.',
      relevanceDa: 'Hvis I vil læses som mere end leverandør, skal markedet kunne se jeres strategiske relevans hurtigt og konkret. Reality Check undersøger, om jeres signal viser den værdi, risikoaflastning og forretningsbetydning, I selv mener, I har.',
      relevanceEn: 'If you want to be read as more than a supplier, the market must be able to see your strategic relevance quickly and concretely. Reality Check investigates whether your signal shows the value, risk mitigation, and business significance you believe you possess.',
      ctaDa: 'Afklar jeres strategiske relevans',
      ctaEn: 'Clarify your strategic relevance'
    },
    {
      id: 'situation-market-entry',
      num: '06',
      image: plxMarketBridge,
      titleDa: 'Nyt marked eller ny kategori',
      titleEn: 'New Market or Category Entry',
      symptomDa: 'I står foran en markedsbevægelse og vil vide, om jeres position, fortælling og dokumentation kan bære mødet med et nyt beslutningsmiljø.',
      symptomEn: 'You are about to make a market move and want to know if your position, narrative, and documentation can sustain the encounter with a new decision-making environment.',
      relevanceDa: 'Når I går ind i et nyt marked eller en ny kategori, bliver I læst af mennesker, der ikke deler jeres interne historik. Reality Check undersøger, om jeres signal er tydeligt nok til at blive forstået, sammenlignet og valgt i et nyt beslutningsmiljø.',
      relevanceEn: 'When entering a new market or a new category, you are read by people who do not share your internal history. Reality Check investigates whether your signal is clear enough to be understood, compared, and chosen in a new decision-making environment.',
      ctaDa: 'Afklar før nyt marked eller ny kategori',
      ctaEn: 'Clarify before new market or new category'
    },
    {
      id: 'situation-readability',
      num: '07',
      image: plxReadabilityLoupe,
      labelDa: 'Kommerciel læsbarhed',
      labelEn: 'Commercial Readability',
      titleDa: 'Når markedet har svært ved at læse jer',
      titleEn: 'When the market struggles to read you',
      symptomDa: 'I har substans, erfaring, kvalitet eller potentiale, men det bliver ikke tydeligt nok udefra. Det, I ved om jer selv, bliver ikke nødvendigvis opfattet af markedet.',
      symptomEn: 'You possess substance, experience, quality, or potential, but it is not clear enough from the outside. What you know about yourselves is not necessarily perceived by the market.',
      relevanceDa: 'I kan være stærkere, end markedet kan se. Reality Check undersøger, om jeres synlige signal gør det let nok at forstå, hvad I kan, hvorfor det betyder noget, og hvorfor I er værd at vælge.',
      relevanceEn: 'You can be stronger than what the market is able to see. Reality Check investigates whether your visible signal makes it simple enough to understand what you do, why it matters, and why you are worth choosing.',
      ctaDa: 'Afklar jeres kommercielle læsbarhed',
      ctaEn: 'Clarify your commercial readability'
    },
    {
      id: 'situation-decision-brief',
      num: '08',
      image: plxExecutiveBrief,
      labelDa: 'Eksternt beslutningsgrundlag',
      labelEn: 'External Decision Brief',
      titleDa: 'Når næste træk kræver et eksternt grundlag',
      titleEn: 'When the next move requires an external basis',
      symptomDa: 'I står foran en beslutning om investering, retning, prioritering, marked, website, positionering eller vækst — og vil gerne se situationen udefra, før I vælger næste skridt.',
      symptomEn: 'You are facing a critical decision regarding investments, priorities, markets, websites, positioning, or growth — and want to see the situation from the outside before choosing your next step.',
      relevanceDa: 'Når I skal vælge næste kommercielle træk, er interne antagelser ikke nok. Reality Check giver et eksternt grundlag for at se, hvad markedet faktisk kan forstå, forsvare og vælge jer ud fra.',
      relevanceEn: 'When you have to choose your next commercial move, internal assumptions are not enough. Reality Check provides an external basis to see what the market can actually understand, defend, and choose you based on.',
      ctaDa: 'Afklar næste træk udefra',
      ctaEn: 'Clarify your next move from the outside'
    }
  ];

  return (
    <div className="py-16 md:py-24 max-w-6xl mx-auto w-full px-6 space-y-16" id="view-situations-overview">
      {/* 1. Header Area with Tension and Serious Tone */}
      <div className="text-left space-y-4 max-w-3xl">
        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-brand-accent uppercase block">
          {lang === 'da' ? 'FOR HVEM // RETNINGSLINJER' : 'FOR WHOM // DIRECTIONS'}
        </span>
        <h1 className="text-4xl md:text-5xl font-sans font-black text-brand-charcoal uppercase leading-none tracking-tight">
          {lang === 'da' ? 'De 8 strategiske situationer' : 'The 8 Strategic Situations'}
        </h1>
        <p className="text-base md:text-lg text-brand-muted font-sans leading-relaxed pt-2">
          {lang === 'da'
            ? 'Vælg den situation eller kommercielle friktion, jeres ledelse mærker i dag, og se hvordan Reality Check undersøger, hvad markedet faktisk kan forstå, forsvare og vælge jer ud fra.'
            : 'Select the situation or commercial friction your leadership experiences today, and see how Reality Check investigates what the market can actually understand, defend, and choose you based on.'}
        </p>
      </div>

      {/* 2. Grid representing high-end executive problem portals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {situations.map((sit) => (
          <button
            key={sit.id}
            onClick={() => onNavigateToSituation(sit.id)}
            className="bg-white border border-brand-border rounded text-left hover:border-brand-accent transition-all cursor-pointer flex flex-col justify-between group overflow-hidden h-auto min-h-[440px] shadow-sm hover:shadow-md"
          >
            <div className="w-full">
              {/* Vibrant Image Frame (full opacity, no grayscale) */}
              <div className="relative w-full aspect-[16/10] bg-stone-100 border-b border-brand-border overflow-hidden">
                <img 
                  src={sit.image} 
                  alt={lang === 'da' ? sit.titleDa : sit.titleEn} 
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                />
                <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-[8px] font-mono font-black text-brand-accent uppercase tracking-widest shadow-sm">
                  {lang === 'da' ? `DIAGNOSE ${sit.num}` : `DIAGNOSTIC ${sit.num}`}
                </div>
              </div>

              {/* Card content formatted with spacious editorial hierarchy */}
              <div className="p-6 space-y-4">
                <span className="text-[9px] font-mono text-brand-accent/75 font-black block tracking-widest uppercase">
                  {(lang === 'da' ? (sit.labelDa || sit.titleDa) : (sit.labelEn || sit.titleEn)).toUpperCase()}
                </span>
                <h3 className="text-lg font-sans font-black text-brand-charcoal group-hover:text-brand-accent transition-colors leading-snug uppercase">
                  {lang === 'da' ? sit.titleDa : sit.titleEn}
                </h3>
                <div className="space-y-3 pt-1">
                  <div>
                    <span className="text-[8px] font-mono font-bold text-brand-muted uppercase block tracking-wider">
                      {lang === 'da' ? 'OBSERVERET SITUATION' : 'OBSERVED SITUATION'}
                    </span>
                    <p className="text-xs text-brand-charcoal font-medium leading-relaxed font-sans pt-0.5">
                      {lang === 'da' ? sit.symptomDa : sit.symptomEn}
                    </p>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono font-bold text-brand-accent uppercase block tracking-wider">
                      {lang === 'da' ? 'HVAD DET OFTE BETYDER' : 'WHAT THIS OFTEN MEANS'}
                    </span>
                    <p className="text-xs text-brand-muted leading-relaxed font-sans pt-0.5">
                      {lang === 'da' ? sit.relevanceDa : sit.relevanceEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with a precise and urgent action label */}
            <div className="px-6 pb-6 w-full">
              <div className="flex items-center space-x-1.5 text-[9px] font-mono uppercase tracking-widest font-black text-brand-accent pt-4 border-t border-brand-border/40 w-full">
                <span>{lang === 'da' ? sit.ctaDa : sit.ctaEn}</span>
                <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Strategiske situationer CTA for Indikator */}
      <div className="border border-brand-border rounded bg-brand-accent-light/10 p-8 md:p-12 text-center space-y-6">
        <h3 className="text-xl sm:text-2xl font-sans font-black text-brand-charcoal uppercase leading-tight">
          {lang === 'da' ? 'Er flere af situationerne relevante for jer?' : 'Are several of these situations relevant to you?'}
        </h3>
        <p className="text-xs sm:text-sm text-brand-muted font-sans leading-relaxed max-w-xl mx-auto">
          {lang === 'da'
            ? 'Få en kort indikation af, hvad der bør afklares, før I vælger næste skridt.'
            : 'Get a brief indication of what should be clarified before you choose your next step.'}
        </p>
        <div className="flex justify-center">
          <button
            onClick={onNavigateToIndikator}
            className="px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer border-none shadow-sm flex items-center justify-center gap-2 group"
          >
            <span>{lang === 'da' ? 'Få en indikation' : 'Get an indication'}</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* 3. Serious, action-provoking lower panel */}
      <div className="border border-brand-border rounded bg-brand-card p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-4">
          <h3 className="text-xl md:text-2xl font-sans font-black text-brand-charcoal uppercase leading-tight">
            {lang === 'da' 
              ? 'Er I klar til at teste jeres kommercielle spor?' 
              : 'Are you ready to diagnostic your commercial footprint?'}
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted font-sans leading-relaxed">
            {lang === 'da'
              ? 'Lad os læse jeres virksomhed udefra — som beslutningstagere, buying groups og AI-baseret research møder jer, før I selv får ordet.'
              : 'Let us read your enterprise from the outside — as decision-makers, buying groups, and AI-based research meet you before you get to speak.'}
          </p>
        </div>
        <div className="md:col-span-4 flex justify-start md:justify-end">
          <button
            onClick={() => onNavigateToSituation('situation-before-invest')}
            className="px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer border-none shadow-sm hover:shadow-md flex items-center space-x-2"
          >
            <span>{lang === 'da' ? 'Afklar om Reality Check er relevant for jer' : 'Clarify whether Reality Check is relevant for you'}</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
