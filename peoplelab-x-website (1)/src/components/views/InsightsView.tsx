import React, { useState } from 'react';
import { Language } from '../../types';
import { 
  ArrowRight, 
  BookOpen, 
  UserCheck, 
  Compass, 
  Layers, 
  CornerDownRight, 
  X,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Editorial / Evidence Images supporting PeopleLab X's brand code: clear, tension-filled, premium
import plxInvestBlueprint from '../../assets/images/plx_invest_light_1783150309974.jpg';
import plxDecisionNotebook from '../../assets/images/plx_decision_light_1783150322324.jpg';
import plxValueMarble from '../../assets/images/plx_value_light_1783150334821.jpg';
import plxStrategicSteps from '../../assets/images/plx_steps_light_1783150359438.jpg';
import plxMarketBridge from '../../assets/images/plx_bridge_light_1783150374466.jpg';
import plxReadabilityLoupe from '../../assets/images/plx_loupe_light_1783150389860.jpg';
import plxExecutiveBrief from '../../assets/images/plx_brief_light_1783150401773.jpg';

interface InsightsViewProps {
  lang: Language;
  onNavigateToContact?: () => void;
  onNavigateToHome?: () => void;
}

type TrackType = 'funktioner' | 'brancher' | 'temaer';

interface NoteData {
  id: string;
  category: string;
  categoryDa: string;
  titleDa: string;
  titleEn: string;
  subtitleDa: string;
  subtitleEn: string;
  summaryDa: string;
  summaryEn: string;
  contentDa: string;
  contentEn?: string;
  quoteDa?: string;
  quoteEn?: string;
  readTime: string;
  image?: string;
  relatedSituationDa?: string;
  relatedSituationEn?: string;
}

export default function InsightsView({ lang, onNavigateToContact, onNavigateToHome }: InsightsViewProps) {
  const [activeTrack, setActiveTrack] = useState<TrackType>('temaer');
  const [selectedNote, setSelectedNote] = useState<NoteData | null>(null);

  const notesList: NoteData[] = [
    // --- TEMASPOR (Track 3) ---
    {
      id: 'tema-valgbarhed',
      category: 'temaer',
      categoryDa: 'Kommercielle temaer',
      titleDa: "Valgbarhed: Markedet vælger jer ud fra det, de kan se, ikke det, I ved",
      titleEn: "Readability: The market chooses based on what they see, not what you know",
      subtitleDa: "Den hårde virkelighed om udefra-ind differentiering.",
      subtitleEn: "The harsh reality of outside-in differentiation.",
      readTime: "3 min read",
      quoteDa: "Markedet kan ikke vælge jer ud fra jeres interne substans. Det kan kun vælge jer ud fra det, det kan se, forstå, stole på og forsvare.",
      quoteEn: "The market cannot choose you based on your internal substance. It can only choose you based on what it can see, understand, trust, and defend.",
      summaryDa: "Mange stærke B2B-virksomheder undervurderer den kommercielle virkelighed. De ved godt selv, hvad de kan, og hvorfor de er relevante. Men markedet starter et andet sted: med at vurdere, hvordan I fremstår, hvad I dokumenterer, og om forskellen på jer og alternativerne er tydelig.",
      summaryEn: "Many strong B2B companies underestimate commercial reality. They know their own strengths and relevance, but the market starts elsewhere: evaluating how you appear, what you document, and whether your differentiation is crystal clear.",
      contentDa: "Når en B2B-beslutningstager skal vælge en strategisk leverandør, er den største frygt at træffe et uforberedt valg. Hvis jeres reelle kvalitet og dybe substans kun eksisterer i jeres specialisters hoveder eller bag lukkede døre, er det værdiløst i researchfasen. En PeopleLab X-analyse viser jeres synlige kommercielle fodaftryk, før I forklarer jer selv, så I kan rette op på den friktion, der gør jer sværere at vælge, end I fortjener.",
      image: plxReadabilityLoupe,
      relatedSituationDa: "Relateret Reality Check-situation: Når markedet har svært ved at læse jer",
      relatedSituationEn: "Related Reality Check Situation: When the market struggles to read you"
    },
    {
      id: 'tema-buying-group',
      category: 'temaer',
      categoryDa: 'Kommercielle temaer',
      titleDa: "Buying group-friktion: Hvorfor B2B-beslutninger dør lydløst hos kundens CFO",
      titleEn: "Buying group friction: Why B2B decisions die silently at the client's CFO",
      subtitleDa: "Hvordan manglende beslutningsmateriale standser den interne sponsor.",
      subtitleEn: "How a lack of decision-making collateral halts the internal sponsor.",
      readTime: "4 min read",
      quoteDa: "Når jeres interne sponsor ikke kan forklare eller forsvare værdien over for ledelsen eller CFO'en, dør casen lydløst.",
      quoteEn: "When your internal champion cannot explain or defend the value to executive management or the CFO, the business case dies silently.",
      summaryDa: "Et godt salgsmøde skaber optimisme, men salget is ikke i mål. I gennemsnit består en B2B købergruppe af 6-10 personer. De fleste af dem møder aldrig jeres sælgere. Hvis jeres bevisbyrde, cases og forretningsmæssige argumenter ikke kan overleve internt uden jeres tilstedeværelse, vinder status quo.",
      summaryEn: "A great sales meeting breeds optimism, but the sale is far from done. The average B2B buying group comprises 6-10 stakeholders. Most of them never meet your sales rep. If your business case cannot survive without you, status quo wins.",
      contentDa: "For at reducere buying group-friktion skal I udstyre jeres sponsor med uafviselig dokumentation, der direkte taler til CFO'ens behov for risikominimering, CO2-regnskaber (ESG) eller finansielt afkast. Vi kortlægger, om jeres synlige bevisbyrde er stærk nok til at bære en intern beslutningsproces, så I kan fjerne friktionen før jeres konkurrenter gør det.",
      image: plxDecisionNotebook,
      relatedSituationDa: "Relateret Reality Check-situation: Fra interesse til beslutning",
      relatedSituationEn: "Related Reality Check Situation: From Interest to Decision"
    },
    {
      id: 'tema-ai-discoverability',
      category: 'temaer',
      categoryDa: 'Kommercielle temaer',
      titleDa: "AI-discoverability: Er jeres substans overhovedet læsbar for sprogmodeller?",
      titleEn: "AI Discoverability: Is your corporate substance readable by search and AI representation?",
      subtitleDa: "Hvorfor asynkrone indkøb starter med maskinlæsning.",
      subtitleEn: "Why asynchronous procurement begins with machine readability.",
      readTime: "3 min read",
      summaryDa: "B2B-købere researcher i dag asynkront. De bruger i stigende grad AI-søgeværktøjer som ChatGPT, Claude og Google Gemini til at screene markedet og opstille longlists. Hvis jeres dybe beviser, use cases og metodiske styrker ikke er optimeret til maskinlæsning, fravælges I tidligt.",
      summaryEn: "Modern B2B buyers research asynchronously. They increasingly leverage AI tools like ChatGPT, Claude, and Gemini to screen markets and draft vendor lists. If your evidence is not optimized for machine reading, you get filtered out.",
      contentDa: "AI-modeller læser ikke jeres intentioner; de analyserer jeres konkrete, strukturerede digitale spor. En PeopleLab X-analyse omfatter en dyb diagnosticering af jeres maskinlæsbare synlighed, så I sikrer, at jeres sande differentiering og substans føres med over på AI-modellernes anbefalingslister.",
      image: plxInvestBlueprint,
      relatedSituationDa: "Relateret Reality Check-situation: Klarhed før dialogen",
      relatedSituationEn: "Related Reality Check Situation: Clarity Before Dialogue"
    },
    {
      id: 'tema-beslutningsforsvarbarhed',
      category: 'temaer',
      categoryDa: 'Kommercielle temaer',
      titleDa: "Beslutningsforsvarbarhed: Kan jeres valg forsvares i bestyrelseslokalet?",
      titleEn: "Decision Defensibility: Can choosing you be defended in the boardroom?",
      subtitleDa: "At reducere kundens personlige og professionelle risiko.",
      subtitleEn: "Reducing the buyer's personal and professional career risk.",
      readTime: "4 min read",
      summaryDa: "Ingen B2B-beslutningstager vil risikere sin karriere eller virksomhedens drift på en leverandør, der fremstår uforberedt. Jeres opgave er at gøre det trygt og fuldstændig forsvarbart at vælge jer over billigere eller mere velkendte alternativer.",
      summaryEn: "No B2B decision-maker wants to risk their career or operations on an unproven vendor. Your job is to make choosing you completely defensible and secure over low-cost or legacy alternatives.",
      contentDa: "Beslutningsforsvarbarhed handler om at beskytte jeres margin mod procurement ved at præsentere beviser og strukturer, der ikke kan rystes. Det kræver, at I kender og synliggør jeres præcise metodik, kvalitetssikring, historik og dokumentation. Vi viser jer, hvor jeres svage punkter er, så I kan lukke hullerne før kunden opdager dem.",
      image: plxExecutiveBrief,
      relatedSituationDa: "Relateret Reality Check-situation: Når jeres værdi skal kunne forsvares",
      relatedSituationEn: "Related Reality Check Situation: When your value must be defended"
    },
    {
      id: 'tema-digitalt-footprint',
      category: 'temaer',
      categoryDa: 'Kommercielle temaer',
      titleDa: "Digitalt fodaftryk: Jeres fodaftryk afslører jeres virkelige kommercielle niveau",
      titleEn: "Digital footprint: Your public trail reveals your actual level of maturity",
      subtitleDa: "Hvad kunden og markedet ser, når I ikke selv kigger med.",
      subtitleEn: "What the customer and market see when you are not looking.",
      readTime: "3 min read",
      summaryDa: "Jeres digitale fodaftryk er jeres mest konstante markedssignal. Det er tilgængeligt 24 timer i døgnet for potentielle kunder, rekrutter og konkurrenter. Hvis der er afstand mellem jeres interne selvforståelse og jeres synlige spor, kan I blive fravalgt, før I selv får mulighed for at forklare jer.",
      summaryEn: "Your digital footprint is your most consistent market signal. It is available 24/7 for potential customers, recruiters, and competitors. If there is a distance between your internal self-conception and your public trails, you can be deselected before you get the opportunity to explain yourself.",
      contentDa: "Et svagt digitalt fodaftryk skyldes sjældent mangel på substans – det skyldes, at stærke beviser, cases, godkendelser, certifikater og metoder holdes lukket bag interne systemer. En diagnosticering fra PeopleLab X trækker jeres reelle styrker frem i lyset, så de kan ses af markedet og maskinerne uden behov for manuel forklaring.",
      image: plxStrategicSteps,
      relatedSituationDa: "Relateret Reality Check-situation: Klarhed før dialogen",
      relatedSituationEn: "Related Reality Check Situation: Clarity Before Dialogue"
    },

    // --- FUNKTIONER (Track 1) ---
    {
      id: 'funktion-ceo',
      category: 'funktioner',
      categoryDa: 'Funktioner',
      titleDa: "Kommerciel klarhed før næste store træk",
      titleEn: "Commercial clarity before the next big move",
      subtitleDa: "Relevant for ledelse, ejerkreds og bestyrelse",
      subtitleEn: "Relevant for leadership, owners, and the board",
      readTime: "3 min read",
      summaryDa: "Før I som administrerende direktør godkender et nyt website, en ny positionering, et go-to-market-initiativ eller et nyt salgsværktøj, skal I vide, om problemet reelt ligger dér, hvor organisationen formoder det.",
      summaryEn: "Before you approve a new website, positioning, go-to-market initiative, or sales tool, you must verify whether the problem actually lies where your organization assumes it does.",
      contentDa: "En PeopleLab X-analyse giver jer et uafhængigt, eksternt beslutningsgrundlag. Vi viser, hvordan jeres markedssignal opfattes udefra, så I kan stille skarpe strategiske krav til jeres team og sikre, at investeringerne løser den faktiske kommercielle friktion.",
      image: plxValueMarble,
      relatedSituationDa: "Relateret Reality Check-situation: Når næste træk kræver et eksternt grundlag",
      relatedSituationEn: "Related Reality Check Situation: When the next move requires an external basis"
    },
    {
      id: 'funktion-cfo',
      category: 'funktioner',
      categoryDa: 'Funktioner',
      titleDa: "Når det usynlige gør investeringen mere risikabel",
      titleEn: "When the invisible makes the investment riskier",
      subtitleDa: "Relevant før budget, investering og prioritering",
      subtitleEn: "Relevant before budget, investment, and prioritization",
      readTime: "3 min read",
      summaryDa: "For en finansdirektør handler kommerciel succes om risikostyring og afkast. Når budgetter anvendes på nye websites eller salgskampagner uden et eksternt grundlag, er risikoen for fejlinvestering enorm.",
      summaryEn: "For a CFO, commercial success is about risk management and ROI. When budgets are spent on new websites or campaigns without an external baseline, the risk of failure is massive.",
      contentDa: "Vi hjælper CFO'en med at diagnosticere, hvor markedet mister tillid eller klarhed, så kommercielle budgetter kan målrettes de specifikke beviser og strukturer, der faktisk forkorter salgscyklussen og forbedrer investeringsdisciplinen.",
      image: plxInvestBlueprint,
      relatedSituationDa: "Relateret Reality Check-situation: Før I investerer",
      relatedSituationEn: "Related Reality Check Situation: Before You Invest"
    },
    {
      id: 'funktion-cmo',
      category: 'funktioner',
      categoryDa: 'Funktioner',
      titleDa: "Fra aktivitet til reel markedsforståelse",
      titleEn: "From activity to genuine market fit",
      subtitleDa: "Relevant før website, kampagner, content og positionering",
      subtitleEn: "Relevant before website, campaigns, content, and positioning",
      readTime: "3 min read",
      summaryDa: "Hvis markedet ikke kan forstå jeres differentiering udefra, bliver mere marketing og øget aktivitet blot til mere støj. CMO'en skal kende de præcise kognitive barrierer i kundens asynkrope research.",
      summaryEn: "If the market cannot read your differentiation from the outside, more marketing activity simply adds to the noise. The CMO must understand the cognitive barriers in buyer-led research.",
      contentDa: "Vi giver marketingdirektøren en klar udefra-ind analyse af positionering, use cases, AI-synlighed og cases, så næste website eller contentindsats kan bygges på dokumenterede markedsbehov frem for interne mavefornemmelser.",
      image: plxMarketBridge,
      relatedSituationDa: "Relateret Reality Check-situation: Før I investerer",
      relatedSituationEn: "Related Reality Check Situation: Before You Invest"
    },

    // --- BRANCHER (Track 2) ---
    {
      id: 'branche-life-science',
      category: 'brancher',
      categoryDa: 'Brancher',
      titleDa: "Regulatorisk tryghed skal oversættes kommercielt",
      titleEn: "Translating regulatory compliance into commercial trust",
      subtitleDa: "Når godkendelser og dyb videnskab skal være umiddelbart læsbare.",
      subtitleEn: "When compliance and deep science must be immediately readable.",
      readTime: "4 min read",
      summaryDa: "Life Science, MedTech og HealthTech-virksomheder opererer i et stærkt reguleret marked med lange salgscykler. Her afgør tillid og videnskabelig dokumentation alt.",
      summaryEn: "Life Science, MedTech, and HealthTech companies operate in highly regulated environments with long sales cycles where trust and scientific evidence determine everything.",
      contentDa: "Problemet opstår, når dyb regulatorisk eller teknisk substans dækkes af komplekst fagsprog, som de ikke-tekniske beslutningstagere i købergruppen har svært ved at forstå. En PeopleLab X-analyse måler og optimerer jeres synlige trygheds- og tillidssignaler, så hele købergruppen kan vælge jer med ro i maven.",
      image: plxReadabilityLoupe,
      relatedSituationDa: "Relateret Reality Check-situation: Når jeres værdi skal kunne forsvares",
      relatedSituationEn: "Related Reality Check Situation: When your value must be defended"
    },
    {
      id: 'branche-tech',
      category: 'brancher',
      categoryDa: 'Brancher',
      titleDa: "Når use cases ikke dokumenterer nok til at blive valgt",
      titleEn: "When use cases do not document enough to be chosen",
      subtitleDa: "Undgå at drukne i feature-fokus og buzzwords.",
      subtitleEn: "Avoid drowning in feature focus and buzzwords.",
      readTime: "3 min read",
      summaryDa: "I tech- og AI-sektoren oversvømmes køberne med buzzwords og enslydende løfter. Det er ekstremt svært for en B2B-beslutningstager at gennemskue forskellen og vurdere, om produktet reelt virker.",
      summaryEn: "In the tech and AI sectors, buyers are flooded with buzzwords and identical claims. It is extremely difficult for B2B decision-makers to see the difference and assess real capabilities.",
      contentDa: "Vi diagnosticerer, om jeres reelle cases og leverancer are tydelige udefra, og om jeres use cases er kognitivt lette at forstå for en travl leder. Vi sikrer også, at jeres substans er maskinlæsbar for den søgning og AI-repræsentation, der præger asynkrone indkøb.",
      image: plxInvestBlueprint,
      relatedSituationDa: "Relateret Reality Check-situation: Når markedet har svært ved at læse jer",
      relatedSituationEn: "Related Reality Check Situation: When the market struggles to read you"
    }
  ];

  const filteredNotes = notesList.filter(note => note.category === activeTrack);

  return (
    <div className="py-16 md:py-24 max-w-5xl mx-auto w-full px-6 space-y-12 text-left" id="view-reality-notes">
      
      {/* Header section */}
      <div className="space-y-4">
        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase border-b border-brand-accent/20 pb-1">
          {lang === 'da' ? 'THOUGHT LEADERSHIP & EVALUERING' : 'THOUGHT LEADERSHIP & EVALUATION'}
        </span>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-brand-charcoal leading-tight tracking-tight">
          Reality Notes
        </h1>
        
        <p className="text-sm sm:text-base text-brand-muted font-sans leading-relaxed max-w-2xl">
          {lang === 'da' ? (
            "Korte, analytiske markedslæsninger om de beslutningssignaler, der gør B2B-virksomheder lettere eller sværere at forstå, stole på og vælge."
          ) : (
            "Short, analytical briefings on the decision signals that make B2B companies easier or harder to understand, trust, and choose."
          )}
        </p>
      </div>

      {/* Track Selector Tabs */}
      <div className="flex border-b border-brand-border pb-px gap-1 overflow-x-auto scrollbar-none">
        <button
          onClick={() => { setActiveTrack('temaer'); setSelectedNote(null); }}
          className={`px-5 py-3 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeTrack === 'temaer' 
              ? 'border-brand-accent text-brand-charcoal font-black' 
              : 'border-transparent text-brand-muted hover:text-brand-charcoal'
          }`}
        >
          {lang === 'da' ? 'Kommercielle temaer' : 'Commercial Themes'}
        </button>
        <button
          onClick={() => { setActiveTrack('funktioner'); setSelectedNote(null); }}
          className={`px-5 py-3 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeTrack === 'funktioner' 
              ? 'border-brand-accent text-brand-charcoal font-black' 
              : 'border-transparent text-brand-muted hover:text-brand-charcoal'
          }`}
        >
          {lang === 'da' ? 'Funktioner' : 'Roles / Functions'}
        </button>
        <button
          onClick={() => { setActiveTrack('brancher'); setSelectedNote(null); }}
          className={`px-5 py-3 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeTrack === 'brancher' 
              ? 'border-brand-accent text-brand-charcoal font-black' 
              : 'border-transparent text-brand-muted hover:text-brand-charcoal'
          }`}
        >
          {lang === 'da' ? 'Brancher' : 'Industries'}
        </button>
      </div>

      {/* Interactive Grid of Notes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            onClick={() => setSelectedNote(note)}
            className="group bg-brand-card hover:bg-brand-bg border border-brand-border hover:border-brand-accent p-6 sm:p-8 rounded-lg flex flex-col justify-between transition-all cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 space-y-6"
          >
            <div className="space-y-4">
              {/* Optional Editorial Image */}
              {note.image && (
                <div className="w-full h-48 overflow-hidden rounded relative border border-brand-border/30 bg-stone-50">
                  <img
                    src={note.image}
                    alt={lang === 'da' ? note.titleDa : note.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
              )}

              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-wider font-bold">
                  <span className="text-brand-accent uppercase">{note.categoryDa}</span>
                  <span className="text-brand-muted">{note.readTime}</span>
                </div>
                
                <h3 className="text-base sm:text-lg font-sans font-bold text-brand-charcoal group-hover:text-brand-accent transition-colors leading-tight">
                  {lang === 'da' ? note.titleDa : note.titleEn}
                </h3>
                
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans">
                  {lang === 'da' ? note.summaryDa : note.summaryEn}
                </p>
              </div>
            </div>

            {note.relatedSituationDa && (
              <div className="text-[10px] font-sans text-brand-muted/80 border-t border-brand-border/40 pt-3 italic">
                {lang === 'da' ? note.relatedSituationDa : note.relatedSituationEn}
              </div>
            )}

            <div className="pt-2 flex items-center space-x-1.5 text-[10px] font-mono font-bold tracking-wider uppercase text-brand-charcoal group-hover:text-brand-accent transition-all">
              <span>{lang === 'da' ? 'Læs Reality Note' : 'Read Reality Note'}</span>
              <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Slut-CTA Section */}
      <div className="border-t border-brand-border/60 pt-16 mt-8">
        <div className="bg-brand-card border border-brand-border p-8 sm:p-12 rounded-xl text-center space-y-6 max-w-3xl mx-auto">
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase block">
              {lang === 'da' ? 'Tid til et Reality Check?' : 'Time for a Reality Check?'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal uppercase leading-tight">
              {lang === 'da' ? 'Vil I have jeres eget signal testet?' : 'Want your own signal tested?'}
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted max-w-xl mx-auto leading-relaxed">
              {lang === 'da' ? (
                'PeopleLab X laver Reality Check: en ekstern læsning af, hvordan jeres virksomhed bliver forstået, vurderet og taget videre i en beslutning.'
              ) : (
                'PeopleLab X creates the Reality Check: an external assessment of how your company is understood, evaluated, and carried forward in a decision.'
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <button
              onClick={onNavigateToContact}
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer border-none shadow-md hover:shadow-lg"
            >
              {lang === 'da' ? 'Afklar om Reality Check er relevant for jer' : 'Clarify whether Reality Check is relevant for you'}
            </button>
            <button
              onClick={onNavigateToHome}
              className="w-full sm:w-auto px-8 py-4 border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal/5 font-mono font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer"
            >
              {lang === 'da' ? 'Se Reality Check' : 'See Reality Check'}
            </button>
          </div>
        </div>
      </div>

      {/* Single Detailed Overlay Note Reader */}
      <AnimatePresence>
        {selectedNote && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-brand-bg border border-brand-border rounded-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col p-6 sm:p-8 space-y-6 text-left"
            >
              {/* Top controls */}
              <div className="flex justify-between items-start border-b border-brand-border pb-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono tracking-widest text-brand-accent font-bold uppercase">
                    REALITY NOTE — {selectedNote.categoryDa.toUpperCase()}
                  </span>
                  <div className="text-[10px] font-mono text-brand-muted">{selectedNote.readTime}</div>
                </div>
                <button
                  onClick={() => setSelectedNote(null)}
                  className="p-1.5 hover:bg-brand-card border border-brand-border hover:border-brand-accent/50 rounded-full transition-colors cursor-pointer text-brand-muted hover:text-brand-charcoal bg-transparent"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Optional Large Editorial Banner */}
              {selectedNote.image && (
                <div className="w-full h-56 sm:h-64 overflow-hidden rounded-lg relative border border-brand-border/30 bg-stone-50 shadow-inner">
                  <img
                    src={selectedNote.image}
                    alt={lang === 'da' ? selectedNote.titleDa : selectedNote.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
              )}

              {/* Title and Quote */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-brand-charcoal leading-tight">
                  {lang === 'da' ? selectedNote.titleDa : selectedNote.titleEn}
                </h2>
                
                {selectedNote.quoteDa && (
                  <div className="bg-brand-card border-l-2 border-brand-accent p-4 rounded-r italic text-xs sm:text-sm text-brand-charcoal font-sans leading-relaxed">
                    "{lang === 'da' ? selectedNote.quoteDa : selectedNote.quoteEn}"
                  </div>
                )}

                {selectedNote.relatedSituationDa && (
                  <div className="bg-brand-card border border-brand-border/60 p-4 rounded text-xs text-brand-charcoal font-semibold font-sans flex items-center justify-between">
                    <span>{lang === 'da' ? selectedNote.relatedSituationDa : selectedNote.relatedSituationEn}</span>
                  </div>
                )}
              </div>

              {/* Comprehensive Body Content */}
              <div className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans space-y-4">
                <p className="font-semibold text-brand-charcoal">
                  {lang === 'da' ? selectedNote.summaryDa : selectedNote.summaryEn}
                </p>
                <p>
                  {lang === 'da' ? selectedNote.contentDa : (selectedNote.contentEn || selectedNote.contentDa)}
                </p>
                <p>
                  {lang === 'da' ? (
                    "En uafhængig databaseret diagnosticering fra PeopleLab X er det første skridt mod kommerciel klarhed. Vi indsamler og evaluerer de asynkrope markedssignaler, så jeres ledelse kan tage de næste strategiske træk baseret på kolde realiteter frem for interne antagelser."
                  ) : (
                    "An independent database diagnosis from PeopleLab X is the first step toward commercial clarity. We harvest and evaluate asynchronous market signals so that your leadership can make the next strategic move based on cold hard facts instead of internal assumptions."
                  )}
                </p>
              </div>

              {/* Bottom dismissal */}
              <div className="pt-4 border-t border-brand-border flex justify-end">
                <button
                  onClick={() => setSelectedNote(null)}
                  className="px-5 py-2.5 bg-brand-charcoal hover:bg-brand-accent text-white font-mono text-[10px] uppercase tracking-wider font-bold rounded transition-colors cursor-pointer border-none"
                >
                  {lang === 'da' ? 'Luk indlæg' : 'Close Note'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
