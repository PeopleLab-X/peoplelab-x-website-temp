import React, { useState } from 'react';
import { Language } from '../../types';
import { 
  ArrowRight, 
  Dna, 
  Laptop, 
  Factory, 
  Leaf, 
  Briefcase, 
  Truck, 
  Key, 
  HelpCircle 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Premium Strategic Editorial Images (including newly generated industry assets)
import plxLifescienceLight from '../../assets/images/plx_lifescience_light_1783195357086.jpg';
import plxManufacturingLight from '../../assets/images/plx_manufacturing_light_1783195370325.jpg';
import plxGreentechLight from '../../assets/images/plx_greentech_light_1783195383159.jpg';
import plxLogisticsLight from '../../assets/images/plx_logistics_light_1783195397078.jpg';
import plxAiLaptop from '../../assets/images/plx_ai_light_1783150346746.jpg';
import plxStrategicSteps from '../../assets/images/plx_steps_light_1783150359438.jpg';
import plxDecisionNotebook from '../../assets/images/plx_decision_light_1783150322324.jpg';

interface BrancherViewProps {
  lang: Language;
  onNavigateToContact: () => void;
}

type IndustryKey = 
  | 'life-science' 
  | 'tech-saas' 
  | 'manufacturing' 
  | 'greentech' 
  | 'professional-services' 
  | 'service-operations' 
  | 'owner-led';

interface IndustryData {
  key: IndustryKey;
  icon: React.ComponentType<any>;
  image: string;
  titleDa: string;
  titleEn: string;
  taglineDa: string;
  taglineEn: string;
  contextDa: string;
  contextEn: string;
  frictionDa: string;
  frictionEn: string;
  analysisDa: string;
  analysisEn: string;
  outcomeDa: string;
  outcomeEn: string;
  ctaDa: string;
  ctaEn: string;
}

export default function BrancherView({ lang, onNavigateToContact }: BrancherViewProps) {
  const [activeIndustry, setActiveIndustry] = useState<IndustryKey>('life-science');

  const industriesList: IndustryData[] = [
    {
      key: 'life-science',
      icon: Dna,
      image: plxLifescienceLight,
      titleDa: "Life Science, MedTech & HealthTech",
      titleEn: "Life Science, MedTech & HealthTech",
      taglineDa: "Når tillid, dokumentation og modenhed afgør, om markedet tør vælge jer",
      taglineEn: "When trust, documentation, and maturity decide if the market dares choose you",
      contextDa: "Life Science og MedTech-virksomheder opererer i et stærkt reguleret marked med lange godkendelsesprocesser, dyb klinisk substans og ekstremt høje krav til tillid og integritet.",
      contextEn: "Life Science and MedTech enterprises operate in a highly regulated market with long approval processes, deep clinical substance, and extremely high requirements for trust and integrity.",
      frictionDa: "Mange virksomheder overfokuserer på den tekniske eller videnskabelige proces internt, men glemmer at gøre modenheden, godkendelserne og trygheden umiddelbart læsbar udefra. Det skaber tøven hos kliniske og kommercielle beslutningstagere.",
      frictionEn: "Many companies overfocus on internal technical or scientific processes, but fail to make their maturity, approvals, and compliance immediately readable from the outside. This creates hesitation among clinical and commercial decision-makers.",
      analysisDa: "Vi diagnosticerer, om jeres beviser, valideringer, cases og faglige troværdighed er præcist læsbare for de ikke-tekniske medlemmer af købergruppen udefra.",
      analysisEn: "We diagnose whether your evidence, validations, cases, and academic credibility are precisely readable to non-technical members of the buying group from the outside.",
      outcomeDa: "Klarhed over jeres tillidssignaler og en optimeret bevisbyrde, der fjerner regulatorisk og kommerciel tøven hos kunden.",
      outcomeEn: "Clarity on your trust signals and an optimized evidence baseline that eliminates regulatory and commercial hesitation for the customer.",
      ctaDa: "Se hvordan analysen bruges",
      ctaEn: "See how the analysis is used"
    },
    {
      key: 'tech-saas',
      icon: Laptop,
      image: plxAiLaptop,
      titleDa: "Tech, SaaS & AI",
      titleEn: "Tech, SaaS & AI",
      taglineDa: "Når produktet er stærkt, men kategori, use case og proof skal være lettere at forstå",
      taglineEn: "When the product is strong, but category, use case, and proof must be easier to understand",
      contextDa: "Tech- og SaaS-virksomheder udvikler stærke, innovative og ofte komplekse softwareløsninger. Markedet er fyldt med buzzwords, og kunderne researcher asynkront.",
      contextEn: "Tech and SaaS companies develop powerful, innovative, and often complex software solutions. The market is saturated with buzzwords, and customers research asynchronously.",
      frictionDa: "Der opstår let et 'feature-fokus' i stedet for et use case-fokus. Købere har svært ved at forstå den præcise forretningsværdi, kategorisere jeres løsning eller vurdere jeres reelle proof-cases.",
      frictionEn: "A 'feature-focus' easily overshadows a use-case focus. Buyers struggle to grasp the exact business impact, categorize your solution, or evaluate your actual proof of delivery.",
      analysisDa: "Vi analyserer og måler jeres reelle kognitive forståelighed, jeres differentiering over for standardalternativer, og hvordan AI-baseret research og søgemaskiner tolker jeres use cases.",
      analysisEn: "We analyze and measure your actual cognitive readability, your differentiation against generic alternatives, and how AI-based research and search engines interpret your use cases.",
      outcomeDa: "En klar strategi for at gøre jeres kategori, use cases og proof indiskutable, så I kan drive mere asynkront salg uden tunge personlige forklaringer.",
      outcomeEn: "A clear strategy to make your category, use cases, and proof indisputable, allowing you to drive more asynchronous sales without heavy personal explanation.",
      ctaDa: "Læs markedslæsningen",
      ctaEn: "Read the market reading"
    },
    {
      key: 'manufacturing',
      icon: Factory,
      image: plxManufacturingLight,
      titleDa: "Advanced Manufacturing & Industrial B2B",
      titleEn: "Advanced Manufacturing & Industrial B2B",
      taglineDa: "Når teknisk styrke skal omsættes til tydeligere markedssignal og stærkere salgsgrundlag",
      taglineEn: "When technical strength must be translated into clearer market signals and stronger sales collateral",
      contextDa: "Industrielle B2B-virksomheder besidder enorm ingeniørmæssig og produktionsteknisk styrke, ofte opbygget over årtier.",
      contextEn: "Industrial B2B enterprises possess immense engineering and production capabilities, often accumulated over decades.",
      frictionDa: "Den tekniske overlegenhed lever ofte skjult bag en forældet digital facade eller uforståeligt fagsprog. Kunder har svært ved at se forskel på jer og lavpris-konkurrenter, før de reelt taler med jeres specialister.",
      frictionEn: "Technical superiority often remains hidden behind an outdated digital facade or incomprehensible jargon. Customers struggle to differentiate you from low-cost competitors before actually speaking with your specialists.",
      analysisDa: "Vi diagnosticerer, om jeres proces, kvalitet, leveringssikkerhed og faglige overlegenhed fremgår klart og overbevisende af jeres eksterne fodaftryk.",
      analysisEn: "We diagnose whether your process, quality, delivery reliability, and technical superiority are clear and convincing in your external footprint.",
      outcomeDa: "Præcis indsigt i, hvor jeres markedssignal svækkes, og hvordan I omsætter teknisk styrke til et premium, tillidsvækkende salgsgrundlag udefra.",
      outcomeEn: "Precise insight into where your market signal weakens, and how to translate technical strength into premium, trust-building sales collateral from the outside.",
      ctaDa: "Se hvordan analysen bruges",
      ctaEn: "See how the analysis is used"
    },
    {
      key: 'greentech',
      icon: Leaf,
      image: plxGreentechLight,
      titleDa: "GreenTech, Energy & Sustainability",
      titleEn: "GreenTech, Energy & Sustainability",
      taglineDa: "Når grøn relevans skal blive til konkret kommerciel troværdighed",
      taglineEn: "When green relevance must turn into concrete commercial credibility",
      contextDa: "Virksomheder inden for GreenTech, energi og bæredygtighed tilbyder løsninger, der skal hjælpe kunderne med at reducere CO2 og opnå ESG-mål.",
      contextEn: "Enterprises in GreenTech, energy, and sustainability offer solutions to help customers reduce carbon footprints and achieve ESG targets.",
      frictionDa: "Der er stor træthed over for 'greenwashing' i markedet. Hvis jeres grønne løfter ikke understøttes af benhård, synlig dokumentation, konkrete beregningsmodeller og faktiske cases, mister B2B-købere hurtigt tilliden.",
      frictionEn: "There is widespread exhaustion with 'greenwashing' in the market. If your green promises are not backed by hard, visible documentation, concrete calculation models, and actual cases, B2B buyers quickly lose interest.",
      analysisDa: "Vi undersøger troværdigheden og dokumentationsgraden af jeres grønne budskaber, og kortlægger om jeres ESG-beviser reelt er læsbare for kundens CFO.",
      analysisEn: "We examine the credibility and documentation depth of your green messaging, mapping out whether your ESG proofs are genuinely readable to the buyer's CFO.",
      outcomeDa: "Et styrket kommercielt fundament, der gør jeres bæredygtige værditilbud konkret, dokumenteret og let at vælge uden frygt for greenwashing-anklager.",
      outcomeEn: "A strengthened commercial foundation that makes your sustainable value proposition concrete, documented, and easy to choose without fear of greenwashing accusations.",
      ctaDa: "Læs markedslæsningen",
      ctaEn: "Read the market reading"
    },
    {
      key: 'professional-services',
      icon: Briefcase,
      image: plxStrategicSteps,
      titleDa: "Professional Services & Consulting",
      titleEn: "Professional Services & Consulting",
      taglineDa: "Når ekspertise skal gøres tydelig, differentieret og lettere at vælge",
      taglineEn: "When expertise must be made clear, differentiated, and easier to choose",
      contextDa: "Konsulent- og videnshuse sælger immateriel ekspertise, kloge hoveder og komplekse rådgivningsforløb.",
      contextEn: "Consulting and knowledge-based firms sell intangible expertise, brainpower, and complex advisory processes.",
      frictionDa: "Næsten alle rådgivningsvirksomheder lyder ens udefra. De bruger de samme ord om 'partnerskab', 'skræddersyede løsninger' og 'værdiskabelse'. Kunden kan ikke kende forskel på kvaliteten før efter købet.",
      frictionEn: "Almost all professional service firms sound identical from the outside. They use the same words like 'partnership,' 'tailored solutions,' and 'value creation.' The customer cannot judge quality before buying.",
      analysisDa: "Vi diagnosticerer jeres faktiske differentieringsgrad, jeres metodiske klarhed, jeres synlige bevisbyrde (cases) og jeres udefra-ind troværdighed.",
      analysisEn: "We diagnose your actual degree of differentiation, methodological clarity, visible evidence baseline (cases), and your outside-in credibility.",
      outcomeDa: "Præcis viden om, hvordan I adskiller jer i markedets øjne, og hvordan I gør jeres dybe ekspertise kognitivt let og tryg at købe.",
      outcomeEn: "Precise knowledge of how you differentiate in the eyes of the market, and how to make your deep expertise cognitively easy and reassuring to buy.",
      ctaDa: "Se hvordan analysen bruges",
      ctaEn: "See how the analysis is used"
    },
    {
      key: 'service-operations',
      icon: Truck,
      image: plxLogisticsLight,
      titleDa: "B2B Service & Operations",
      titleEn: "B2B Service & Operations",
      taglineDa: "Når tryghed, kvalitet og leveranceevne skal kunne ses, før kunden vælger",
      taglineEn: "When reassurance, quality, and delivery capability must be visible before selection",
      contextDa: "Virksomheder inden for B2B service, logistik, outsourcing og drift håndterer kritiske funktioner for deres kunder.",
      contextEn: "Companies within B2B service, logistics, outsourcing, and operations handle critical business-critical functions for their customers.",
      frictionDa: "Kunden føler en stor operationel risiko ved at skifte leverandør. Hvis jeres processer, kvalitetsstyring, backup-rutiner og kundehistorik ikke er synlige og beroligende udefra, vælger kunden det sikre og velkendte alternativ.",
      frictionEn: "The customer feels massive operational risk when changing service providers. If your processes, quality control, backup routines, and customer track record are not visible and reassuring, the customer chooses the safe, familiar status quo.",
      analysisDa: "Vi undersøger, om jeres eksterne fodaftryk fjerner kundens operationelle frygt og demonstrerer en uafviselig, stabil leveranceevne.",
      analysisEn: "We investigate whether your external footprint mitigates the buyer's operational fear and demonstrates an undeniable, stable delivery capability.",
      outcomeDa: "Et skarpere, risikominimerende markedssignal, der beviser jeres operationelle præcision og gør et skift af leverandør trygt og velbegrundet.",
      outcomeEn: "A sharper, risk-reducing market signal that proves your operational precision and makes changing suppliers safe and well-founded.",
      ctaDa: "Læs markedslæsningen",
      ctaEn: "Read the market reading"
    },
    {
      key: 'owner-led',
      icon: Key,
      image: plxDecisionNotebook,
      titleDa: "Ejerledede B2B-virksomheder",
      titleEn: "Owner-Managed B2B Enterprises",
      taglineDa: "Når virksomheden skal kunne forstås, vælges og skaleres uden ejerens personlige forklaring",
      taglineEn: "When the company must be understood, chosen, and scaled without the owner's personal explanation",
      contextDa: "Mange succesfulde B2B-virksomheder er opbygget af passionerede ejerledere, som personligt har båret salget og kunderelationerne i mange år.",
      contextEn: "Many successful B2B enterprises are built by passionate owner-managers who have personally carried sales and customer relationships for years.",
      frictionDa: "Virksomhedens styrke, troværdighed og historie eksisterer primært 'inde i ejerens hoved' og i de personlige relationer. Det gør virksomheden sårbar, svær at skalere, og begrænser dens værdi ved et eventuelt generationsskifte eller salg.",
      frictionEn: "The company's strength, credibility, and history exist primarily 'inside the owner's head' and in personal relationships. This makes the business vulnerable, hard to scale, and limits its value during a transition or sale.",
      analysisDa: "Vi diagnosticerer, hvordan jeres virksomhed fremstår udefra, når ejerlederen IKKE sidder i rummet til at udfylde hullerne i kundens forståelse.",
      analysisEn: "We diagnose how your enterprise appears from the outside when the owner-manager is NOT in the room to fill in the gaps in customer understanding.",
      outcomeDa: "Et solidt, uafhængigt fundament for at gøre virksomhedens sande styrker synlige, overførbare og uafhængige af ejeren personligt.",
      outcomeEn: "A solid, independent foundation to make the company's true strengths visible, transferable, and independent of the owner personally.",
      ctaDa: "Se hvordan analysen bruges",
      ctaEn: "See how the analysis is used"
    }
  ];

  const activeIndData = industriesList.find(i => i.key === activeIndustry) || industriesList[0];

  return (
    <div className="py-16 md:py-24 max-w-5xl mx-auto w-full px-6 space-y-16 text-left" id="view-branches">
      
      {/* Intro section */}
      <div className="space-y-6">
        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase border-b border-brand-accent/20 pb-1">
          {lang === 'da' ? 'BRANCHER & VIRKSOMHEDSTYPER' : 'INDUSTRIES & SECTORS'}
        </span>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-brand-charcoal leading-tight tracking-tight">
          {lang === 'da' ? 'Hvor analysen skaber størst værdi' : 'Where the analysis adds highest value'}
        </h1>
        
        <p className="text-sm sm:text-base text-brand-muted font-sans leading-relaxed max-w-3xl">
          {lang === 'da' ? (
            <>
              PeopleLab X er særligt relevant for B2B-virksomheder, hvor det ikke er nok blot at blive fundet. Markedet skal kunne forstå jer, stole på jer og bruge det, I viser, som grundlag for at vælge jer. Det gælder især virksomheder med komplekse løsninger, flere beslutningstagere, høj faglighed, teknisk substans, strategisk ambition eller stor afhængighed af personlig forklaring.
            </>
          ) : (
            <>
              PeopleLab X is highly relevant for B2B enterprises where being found is simply not enough. The market must be able to understand you, trust you, and use your visible signals as a secure basis to choose you. This is especially true for businesses with complex offerings, multiple decision-makers, high expertise, technical depth, or heavy reliance on personal relationships.
            </>
          )}
        </p>
      </div>

      {/* Grid: Left selector, Right details card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        
        {/* Left selector stack */}
        <div className="lg:col-span-5 flex flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-none flex-row lg:flex-col">
          {industriesList.map((ind) => {
            const IndIcon = ind.icon;
            const isSelected = activeIndustry === ind.key;
            return (
              <button
                key={ind.key}
                onClick={() => setActiveIndustry(ind.key)}
                className={`flex items-center space-x-3.5 px-4 py-4 rounded text-left transition-all cursor-pointer whitespace-nowrap lg:whitespace-normal border flex-shrink-0 lg:flex-shrink-0 ${
                  isSelected 
                    ? 'bg-brand-charcoal text-white border-brand-charcoal shadow-md' 
                    : 'bg-brand-card hover:bg-brand-bg text-brand-charcoal border-brand-border hover:border-brand-accent/40'
                }`}
              >
                <div className={`p-2 rounded ${isSelected ? 'bg-brand-accent text-white' : 'bg-brand-bg text-brand-accent'}`}>
                  <IndIcon size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-sans font-bold tracking-tight">
                    {lang === 'da' ? ind.titleDa : ind.titleEn}
                  </span>
                  <span className={`text-[9px] font-mono tracking-wider truncate max-w-[220px] ${isSelected ? 'text-brand-accent-light/80' : 'text-brand-muted'}`}>
                    {lang === 'da' ? ind.taglineDa : ind.taglineEn}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Active Industry Details Panel */}
        <div className="lg:col-span-7 bg-brand-card border border-brand-border rounded-lg p-6 sm:p-8 flex flex-col justify-between min-h-[520px] shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Header info */}
              <div className="space-y-2 border-b border-brand-border pb-4">
                <span className="text-[9px] font-mono font-bold tracking-widest text-brand-accent uppercase">
                  {lang === 'da' ? 'BRANCHEKONTEKST' : 'INDUSTRY CONTEXT'}
                </span>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-brand-charcoal leading-tight">
                  {lang === 'da' ? activeIndData.titleDa : activeIndData.titleEn}
                </h3>
                <p className="text-sm font-sans font-semibold text-brand-accent">
                  {lang === 'da' ? activeIndData.taglineDa : activeIndData.taglineEn}
                </p>
              </div>

              {/* Grid split inside the active industry card */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Left side: details content (8 cols) */}
                <div className="md:col-span-8 space-y-5 text-xs sm:text-sm font-sans leading-relaxed">
                  
                  {/* 1. Branchekontekst */}
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-charcoal">
                      {lang === 'da' ? 'SITUATIONSBESKRIVELSE' : 'SECTOR CONTEXT'}
                    </h4>
                    <p className="text-brand-charcoal font-medium">
                      {lang === 'da' ? activeIndData.contextDa : activeIndData.contextEn}
                    </p>
                  </div>

                  {/* 2. Typisk kommerciel friktion */}
                  <div className="space-y-1 bg-brand-bg/40 border-l-2 border-brand-accent/70 p-3 rounded-r">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent flex items-center space-x-1.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                      <span>{lang === 'da' ? 'TYPISK KOMMERCIEL FRIKTION' : 'TYPICAL COMMERCIAL FRICTION'}</span>
                    </h4>
                    <p className="text-brand-muted text-xs italic">
                      {lang === 'da' ? activeIndData.frictionDa : activeIndData.frictionEn}
                    </p>
                  </div>

                  {/* 3. Hvad analyserer PeopleLab X */}
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-charcoal">
                      {lang === 'da' ? 'HVAD VI ANALYSERER' : 'WHAT WE ANALYZE'}
                    </h4>
                    <p className="text-brand-muted">
                      {lang === 'da' ? activeIndData.analysisDa : activeIndData.analysisEn}
                    </p>
                  </div>

                  {/* 4. Udbytte */}
                  <div className="space-y-1 border-t border-brand-border/60 pt-3">
                    <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-brand-accent">
                      {lang === 'da' ? 'FORVENTET UDBYTTE AF ANALYSEN' : 'EXPECTED OUTCOME'}
                    </h4>
                    <p className="text-brand-charcoal text-xs font-semibold">
                      {lang === 'da' ? activeIndData.outcomeDa : activeIndData.outcomeEn}
                    </p>
                  </div>

                </div>

                {/* Right side: Illustration (4 cols) */}
                <div className="md:col-span-4 flex flex-col items-center">
                  <div className="relative group overflow-hidden rounded border border-brand-border/80 shadow-sm w-full aspect-square bg-brand-bg/50">
                    <img 
                      src={activeIndData.image} 
                      alt={lang === 'da' ? activeIndData.titleDa : activeIndData.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-charcoal/5 mix-blend-overlay"></div>
                  </div>
                  <div className="mt-2 text-[9px] font-mono text-brand-muted text-center tracking-wider uppercase">
                    {lang === 'da' ? 'Branchefokus' : 'Industry perspective'}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Contextual CTA */}
          <div className="pt-6 mt-8 border-t border-brand-border/60 flex justify-start">
            <button
              onClick={onNavigateToContact}
              className="inline-flex items-center space-x-2 bg-brand-charcoal hover:bg-brand-accent text-white hover:text-white px-5 py-2.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider transition-all shadow-sm group cursor-pointer"
            >
              <span>{lang === 'da' ? activeIndData.ctaDa : activeIndData.ctaEn}</span>
              <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
