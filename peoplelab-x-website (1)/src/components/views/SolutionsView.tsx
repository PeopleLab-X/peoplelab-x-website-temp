import React, { useState } from 'react';
import { Language } from '../../types';
import { 
  ArrowRight, 
  HelpCircle, 
  Search, 
  TrendingUp, 
  Cpu, 
  Users, 
  Sparkles, 
  ShieldAlert, 
  FileCheck, 
  Workflow, 
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import premium images
import plxInvestBlueprint from '../../assets/images/plx_invest_light_1783150309974.jpg';
import plxDecisionNotebook from '../../assets/images/plx_decision_light_1783150322324.jpg';
import plxValueMarble from '../../assets/images/plx_value_light_1783150334821.jpg';
import plxAiLaptop from '../../assets/images/plx_ai_light_1783150346746.jpg';
import plxStrategicSteps from '../../assets/images/plx_steps_light_1783150359438.jpg';
import plxMarketBridge from '../../assets/images/plx_bridge_light_1783150374466.jpg';
import plxReadabilityLoupe from '../../assets/images/plx_loupe_light_1783150389860.jpg';
import plxExecutiveBrief from '../../assets/images/plx_brief_light_1783150401773.jpg';

interface SolutionsViewProps {
  lang: Language;
  onNavigateToContact: () => void;
  initialSolution?: SolutionKey;
}

type SolutionKey = 
  | 'reality-check' 
  | 'strategic-relevance' 
  | 'before-rebuild' 
  | 'market-entry' 
  | 'buyer-led' 
  | 'buying-group' 
  | 'choice-clarity' 
  | 'ai-discoverability' 
  | 'interest-decision' 
  | 'decision-defensibility';

interface SolutionData {
  key: SolutionKey;
  num: string;
  icon: React.ComponentType<any>;
  image: string;
  titleDa: string;
  titleEn: string;
  taglineDa: string;
  taglineEn: string;
  situationDa: string;
  situationEn: string;
  misunderstandingDa: string;
  misunderstandingEn: string;
  analysisDa: string;
  analysisEn: string;
  outcomeDa: string;
  outcomeEn: string;
  usageDa: string;
  usageEn: string;
  ctaDa: string;
  ctaEn: string;
}

export default function SolutionsView({ lang, onNavigateToContact, initialSolution }: SolutionsViewProps) {
  const [activeSolution, setActiveSolution] = useState<SolutionKey>('reality-check');

  React.useEffect(() => {
    if (initialSolution) {
      setActiveSolution(initialSolution);
    }
  }, [initialSolution]);

  const solutionsList: SolutionData[] = [
    {
      key: 'reality-check',
      num: '01',
      icon: Activity,
      image: plxReadabilityLoupe,
      titleDa: "PeopleLab X Reality Check",
      titleEn: "PeopleLab X Reality Check",
      taglineDa: "Når I vil forstå, hvordan markedet faktisk læser jer",
      taglineEn: "When you want to understand how the market actually reads you",
      situationDa: "Virksomheden fungerer stærkt internt, men I oplever, at markedet ikke reagerer stærkt nok på jeres styrker, fordi jeres eksterne fodaftryk ikke gør jeres reelle substans retfærdighed.",
      situationEn: "The organization is strong internally, but you find that the market does not react strongly enough to your strengths because your external footprint fails to do justice to your true substance.",
      misunderstandingDa: "Organisationen tror ofte, at problemet kan løses med øget marketingaktivitet eller en ny salgskampagne, men problemet ligger i de kognitive barrierer og uoverensstemmelser i jeres eksisterende fodaftryk.",
      misunderstandingEn: "The organization often believes that the issue can be solved with increased marketing activity or a new sales campaign, but the problem lies in the cognitive barriers and misalignments in your existing footprint.",
      analysisDa: "Vi diagnosticerer hele jeres eksterne fodaftryk udefra-ind: digitale spor, budskaber, cases, dokumentation, AI-discoverability og jeres synlige kategorisering.",
      analysisEn: "We diagnose your entire external footprint from the outside-in: digital trace, messaging, cases, documentation, AI discoverability, and your visible categorization.",
      outcomeDa: "Et uafhængigt, fuldstændigt og objektivt beslutningskort over jeres kommercielle friktion og markedets reelle læsning af jer.",
      outcomeEn: "An independent, complete, and objective decision map of your commercial friction and the market's actual reading of you.",
      usageDa: "Bruges til at fjerne blinde vinkler i ledelsen, prioritere de næste kommercielle indsatser og sikre, at I ikke investerer i forkerte løsninger.",
      usageEn: "Used to eliminate executive blind spots, prioritize the next commercial actions, and ensure you do not invest in the wrong solutions.",
      ctaDa: "Afklar om Reality Check er relevant for jer",
      ctaEn: "Clarify whether Reality Check is relevant for you"
    },
    {
      key: 'strategic-relevance',
      num: '02',
      icon: TrendingUp,
      image: plxStrategicSteps,
      titleDa: "From Supplier to Strategic Relevance",
      titleEn: "From Supplier to Strategic Relevance",
      taglineDa: "Når I vil bevæge jer fra leverandør til strategisk partner",
      taglineEn: "When you want to move from tactical supplier to strategic partner",
      situationDa: "I oplever at blive betragtet som en traditionel leverandør, hvor dialogen primært handler om pris, specifikationer og drift, selvom jeres løsninger har strategisk betydning for kundens forretning.",
      situationEn: "You experience being perceived as a traditional supplier, where the dialogue primarily revolves around price, specs, and operations, even though your solutions have strategic value for the customer's business.",
      misunderstandingDa: "Man forsøger ofte at løse det ved at træne sælgerne i 'strategisk salg', men hvis jeres eksterne fodaftryk, cases og bevisbyrde kun taler til det operationelle niveau, vil C-level ikke prioritere jer.",
      misunderstandingEn: "Companies often attempt to solve this by training salespeople in 'strategic selling,' but if your external footprint, cases, and proof points only speak to the operational level, C-level will not prioritize you.",
      analysisDa: "Vi analyserer, om jeres beviser, kundecases, positionering og digitale fodaftryk understøtter en strategisk beslutning, eller om de fastholder jer i leverandørrollen.",
      analysisEn: "We analyze whether your evidence, customer cases, positioning, and digital footprint support a strategic decision or keep you locked in the supplier role.",
      outcomeDa: "Præcis viden om, hvor signalerne knækker, og et konkret roadmap to, hvordan jeres substans gøres strategisk læsbar for C-level.",
      outcomeEn: "Precise knowledge of where your signals falter, and a concrete roadmap on how to make your substance strategically readable to the C-suite.",
      usageDa: "Bruges til at opgradere jeres værdifortælling, skrive mere strategiske cases og åbne døre til de reelle beslutningstagere.",
      usageEn: "Used to upgrade your value narrative, draft more strategic case studies, and open doors to the actual executive decision-makers.",
      ctaDa: "Afklar jeres strategiske relevans",
      ctaEn: "Clarify your strategic relevance"
    },
    {
      key: 'before-rebuild',
      num: '03',
      icon: Workflow,
      image: plxInvestBlueprint,
      titleDa: "Before You Rebuild",
      titleEn: "Before You Rebuild",
      taglineDa: "Når I står foran nyt website, ny positionering eller ny platform",
      taglineEn: "When facing a new website, new positioning, or new commercial platform",
      situationDa: "I står over for at skulle investere betydelige ressourcer i et nyt website, en ny positionering, et nyt brand-bureau eller en ny go-to-market platform.",
      situationEn: "You are about to invest significant resources in a new website, a new positioning, a brand agency, or a new go-to-market platform.",
      misunderstandingDa: "Man går næsten altid direkte to design, wireframes, teknik og tekstforfatning ud fra interne antagelser, uden at have diagnosticeret den reelle kognitive friktion, det nye setup skal løse.",
      misunderstandingEn: "Organizations almost always jump straight to design, wireframes, development, and copywriting based on internal assumptions, without diagnosing the actual cognitive friction the new setup must solve.",
      analysisDa: "Vi diagnosticerer jeres nuværende eksterne signaler udefra-ind og kortlægger præcist, hvor markedet mister tillid, tøver eller misforstår jer.",
      analysisEn: "We diagnose your current external signals from the outside-in and map out exactly where the market loses trust, hesitates, or misunderstands you.",
      outcomeDa: "Et uafhængigt diagnosekort, der fungerer som en præcis, objektiv og strategisk kravspecifikation to marketing, bureauer og designere.",
      outcomeEn: "An independent diagnostic map that acts as a precise, objective, and strategic requirement brief for marketing, agencies, and designers.",
      usageDa: "Bruges som styringsredskab før og under genopbygningen for at sikre, at det nye website faktisk fjerner markedets barrierer og skaber kommerciel effekt.",
      usageEn: "Used as a steering tool before and during development to ensure the new website actually eliminates market barriers and drives commercial impact.",
      ctaDa: "Få en diagnostisk brief før I bygger",
      ctaEn: "Get a diagnostic brief before you build"
    },
    {
      key: 'market-entry',
      num: '04',
      icon: Search,
      image: plxMarketBridge,
      titleDa: "Market Entry Reality Check",
      titleEn: "Market Entry Reality Check",
      taglineDa: "Når I overvejer nyt marked, ny målgruppe eller ny retning",
      taglineEn: "When considering a new market, new target group, or new direction",
      situationDa: "I planlægger at ekspandere to et nyt geografisk marked, henvende jer to et nyt kundesegment eller lancere en ny go-to-market-retning.",
      situationEn: "You are planning to expand into a new geographic market, target a new customer segment, or launch a new go-to-market direction.",
      misunderstandingDa: "Man overfokuserer typisk på markedsstørrelse, konkurrenter og demografi, men glemmer at vurdere, om virksomhedens eksisterende bevisbyrde og fodaftryk overhovedet kan forstås og accepteres af den nye målgruppe.",
      misunderstandingEn: "Companies typically overfocus on market size, competitors, and demographics, but forget to assess whether the company's existing evidence and footprint can be understood and accepted by the new target group.",
      analysisDa: "Vi tester jeres nuværende eksterne fodaftryk mod den nye målgruppes kognitive forventninger, og ser om jeres referencer og beviser er overførbare.",
      analysisEn: "We test your current external footprint against the cognitive expectations of the new audience, verifying if your references and proof points are transferable.",
      outcomeDa: "En klar risikovurdering og en præcis guide to, hvilke beviser og signaler der mangler for at blive valgt på det nye marked.",
      outcomeEn: "A clear risk assessment and a precise guide on which proof points and signals are missing to be selected in the new market.",
      usageDa: "Bruges af direktionen og bestyrelsen to at kvalificere ekspansionsbeslutninger og reducere risikoen ved markedsindtrængning.",
      usageEn: "Used by management and the board to qualify expansion decisions and minimize market entry risk.",
      ctaDa: "Undersøg jeres markedsparathed",
      ctaEn: "Check your market entry readiness"
    },
    {
      key: 'buyer-led',
      num: '05',
      icon: Sparkles,
      image: plxAiLaptop,
      titleDa: "Buyer-Led Readiness",
      titleEn: "Buyer-Led Readiness",
      taglineDa: "Når I vil forstå, om markedet får nok grundlag to at gå videre",
      taglineEn: "When you want to know if the market gets enough basis to proceed",
      situationDa: "Moderne B2B-købere researcher asynkront og anonymt online. De foretager 70-80% af deres research, før de overhovedet kontakter en sælger hos jer.",
      situationEn: "Modern B2B buyers research asynchronously and anonymously online. They complete 70-80% of their research before ever contacting a salesperson.",
      misunderstandingDa: "Organisationen tror, at gatede whitepapers, formularer og hårdt lead-opsøgende arbejde er vejen frem, men det skaber blot irritation, hvis kunden ikke kan finde de nødvendige åbne svar på egen hånd.",
      misunderstandingEn: "The organization often believes gated whitepapers, lead forms, and aggressive outbound sales are the answer, but this only creates friction if the customer cannot find necessary open answers independently.",
      analysisDa: "Vi diagnosticerer jeres synlige fodaftryk ud fra en ren 'buyer-led' logik. Kan en køber kvalificere jer, forstå jeres metode og stole på jeres proof uden at skulle tale med jer først?",
      analysisEn: "We evaluate your visible footprint through a pure 'buyer-led' logic. Can a buyer qualify you, understand your methodology, and trust your proof without having to speak with you first?",
      outcomeDa: "En kortlægning af de kognitive blindgyder og mangler i jeres asynkrone købsrejse.",
      outcomeEn: "A mapping of the cognitive dead ends and deficiencies in your asynchronous buyer journey.",
      usageDa: "Bruges to at tilpasse jeres digitale tilstedeværelse, fjerne unødvendig salgsfriktion og gøre det let for markedet at vælge jer til.",
      usageEn: "Used to adapt your digital presence, eliminate unnecessary sales friction, and make it easy for the market to opt in.",
      ctaDa: "Test jeres Buyer-Led Readiness",
      ctaEn: "Test your Buyer-Led Readiness"
    },
    {
      key: 'buying-group',
      num: '06',
      icon: Users,
      image: plxDecisionNotebook,
      titleDa: "Buying Group Clarity",
      titleEn: "Buying Group Clarity",
      taglineDa: "Når flere beslutningstagere skal kunne forstå og forsvare valget",
      taglineEn: "When multiple decision-makers must understand and defend the choice",
      situationDa: "En gennemsnitlig B2B-købsbeslutning involverer i dag 6-10 beslutningstagere (buying group) fra jura, it, finans, drift og direktion. Det skaber intern uenighed og fastlåste processer hos kunden.",
      situationEn: "An average B2B purchasing decision now involves 6-10 stakeholders (the buying group) from legal, IT, finance, operations, and management. This leads to internal misalignment and stalled processes.",
      misunderstandingDa: "Man antager, at kunden selv kan oversætte jeres generiske salgsmateriale to de forskellige interne afdelinger, men de mangler de specifikke beviser, der beroliger de enkelte interessenter.",
      misunderstandingEn: "Companies assume the buyer can translate generic sales materials to different internal departments themselves, but they lack the specific evidence needed to reassure individual stakeholders.",
      analysisDa: "Vi undersøger, om jeres eksterne fodaftryk og materialer svarer præcist på de bekymringer, der opstår hos de forskellige roller i en buying group.",
      analysisEn: "We examine whether your external footprint and materials address the specific concerns that arise within the various roles of a buying group.",
      outcomeDa: "En analyse af jeres 'buying group-friktion' med konkrete indikationer af, hvor I overser vigtige interne modtagere.",
      outcomeEn: "An analysis of your 'buying group friction' with concrete indications of where you overlook critical internal stakeholders.",
      usageDa: "Bruges to at udvikle differentieret materiale, cases og proof-punkter, der taler direkte to it-sikkerhed, jura, finans og direktion.",
      usageEn: "Used to develop segmented materials, cases, and proof points that speak directly to IT security, legal, finance, and leadership.",
      ctaDa: "Styrk jeres buying group-materiale",
      ctaEn: "Strengthen your buying group materials"
    },
    {
      key: 'choice-clarity',
      num: '07',
      icon: HelpCircle,
      image: plxValueMarble,
      titleDa: "Choice Clarity",
      titleEn: "Choice Clarity",
      taglineDa: "Når markedet skal forstå, hvorfor de skal vælge netop jer",
      taglineEn: "When the market must understand why they should choose you specifically",
      situationDa: "I oplever, at I lyder ligesom jeres konkurrenter, og at markedet har svært ved at se jeres unikke forskel, hvilket ofte fører to tunge prisforhandlinger.",
      situationEn: "You experience sounding just like your competitors, and the market struggles to see your unique difference, which frequently leads to grueling price negotiations.",
      misunderstandingDa: "Organisationen forsøger ofte at differentiere sig på generiske ord som 'kvalitet', 'høj faglighed' eller 'partnerskab' — ord som jeres konkurrenter også bruger, hvilket blot øger støjen.",
      misunderstandingEn: "Organizations often try to differentiate using generic terms like 'quality,' 'expertise,' or 'partnership' — words your competitors also use, which only increases the noise.",
      analysisDa: "Vi undersøger jeres reelle forskelspunkter udefra-ind. Vi måler, om jeres differentiering faktisk er synlig, beviselig og nem at afkode udefra.",
      analysisEn: "We examine your actual points of difference from the outside-in. We evaluate whether your differentiation is actually visible, provable, and easy to decode externally.",
      outcomeDa: "Et klart og ærligt spejl af jeres eksterne differentieringsgrad, og en plan for, hvordan I gør jeres valgargumenter indiskutable.",
      outcomeEn: "A clear and honest mirror of your external differentiation, and a blueprint for making your selection arguments indisputable.",
      usageDa: "Bruges to at fjerne generiske floskler, skærpe jeres reelle forskel og gøre det kognitivt let for kunden to vælge jer frem for alternativerne.",
      usageEn: "Used to strip away generic clichés, sharpen your real distinction, and make it cognitively easy for the client to choose you over alternatives.",
      ctaDa: "Skab Choice Clarity",
      ctaEn: "Create Choice Clarity"
    },
    {
      key: 'ai-discoverability',
      num: '08',
      icon: Cpu,
      image: plxAiLaptop,
      titleDa: "AI Discoverability and Trust",
      titleEn: "AI Discoverability and Trust",
      taglineDa: "Når I vil forstå, hvordan AI, søgning og digitale spor påvirker jer",
      taglineEn: "When you want to understand how AI, search, and digital traces affect you",
      situationDa: "Moderne B2B-beslutningstagere og AI-agenter (som ChatGPT, Gemini, Claude og Perplexity) gennemsøger og syntetiserer markedet, før I overhovedet kontaktes.",
      situationEn: "Modern B2B decision-makers and AI agents (such as ChatGPT, Gemini, Claude, and Perplexity) scan and synthesize the market before any human contact is made.",
      misunderstandingDa: "Man tror, at traditionel SEO og søgeordsoptimering er nok, men AI-modeller læser og evaluerer jeres troværdighed, substans og beviser på en helt anden, holistisk måde.",
      misunderstandingEn: "Companies assume traditional SEO and keyword optimization are sufficient, but AI models read and evaluate your credibility, substance, and proof in a completely different, holistic manner.",
      analysisDa: "Vi tester og diagnosticerer, hvordan de førende AI-modeller og AI-baseret research læser, kategoriserer, forstår og opsummerer jeres virksomhed ud fra jeres samlede digitale spor.",
      analysisEn: "We test and diagnose how leading AI models and AI-based research read, categorize, understand, and summarize your company based on your cumulative digital footprint.",
      outcomeDa: "En dybdegående analyse af jeres 'AI-discoverability' og præcise anbefalinger to, hvordan I gør jeres beviser og data lette at tolke for AI-modeller.",
      outcomeEn: "An in-depth analysis of your 'AI discoverability' and precise recommendations on how to make your proof points and data easy for AI models to interpret.",
      usageDa: "Bruges to at fremtidssikre jeres digitale tilstedeværelse og sikre, at jeres brand anbefales og opsummeres korrekt af AI-søgninger.",
      usageEn: "Used to future-proof your digital presence and ensure your brand is recommended and summarized accurately by AI searches.",
      ctaDa: "Få en AI-discoverability analyse",
      ctaEn: "Get an AI discoverability analysis"
    },
    {
      key: 'interest-decision',
      num: '09',
      icon: ShieldAlert,
      image: plxExecutiveBrief,
      titleDa: "From Interest to Decision",
      titleEn: "From Interest to Decision",
      taglineDa: "Når interesse opstår, men beslutningen ikke bevæger sig stærkt nok fremad",
      taglineEn: "When interest arises, but the decision does not progress strongly",
      situationDa: "I har gode, indledende samtaler med potentielle kunder, der udtrykker reel interesse, men processen går i stå bagefter, og pipeline bevæger sig smerteligt langsomt.",
      situationEn: "You have positive, initial meetings with prospects who express genuine interest, but the process stalls afterward, and pipeline movement becomes painfully sluggish.",
      misunderstandingDa: "Man tror, at sælgerne skal lukke hårdere eller mase på, men i virkeligheden skyldes opbremsningen kognitiv tøven, manglende tryghed eller uklarhed i jeres onboardingsignaler og leverancebeviser.",
      misunderstandingEn: "It is often assumed that salespeople need to push harder, but in reality, the slowdown is caused by cognitive hesitation, lack of reassurance, or ambiguity in your onboarding signals and delivery proofs.",
      analysisDa: "Vi undersøger de signaler, kunden møder efter den første dialog: jeres onboarding-fortælling, procesdokumentation, tryghedsbeviser og cases.",
      analysisEn: "We examine the signals the customer encounters after the initial dialogue: your onboarding narrative, process documentation, reassurance proofs, and cases.",
      outcomeDa: "Kortlægning af den kommercielle friktion og de skjulte barrierer, der bremser beslutningen efter den første positive dialog.",
      outcomeEn: "Mapping of the commercial friction and hidden barriers stalling the decision after the first positive meeting.",
      usageDa: "Bruges to at optimere salgsmaterialer, tydeliggøre jeres metoder og gøre det trygt og ukompliceret for kunden to tage det næste skridt.",
      usageEn: "Used to optimize sales collateral, clarify your methods, and make taking the next step safe and simple for the customer.",
      ctaDa: "Fjern jeres pipeline-friktion",
      ctaEn: "Remove your pipeline friction"
    },
    {
      key: 'decision-defensibility',
      num: '10',
      icon: FileCheck,
      image: plxDecisionNotebook,
      titleDa: "Decision Defensibility",
      titleEn: "Decision Defensibility",
      taglineDa: "Når I vil sikre, at valget af jer kan forklares og forsvares internt",
      taglineEn: "When you want to ensure the choice of you can be explained and defended internally",
      situationDa: "Jeres primære kontaktperson hos kunden er fuldstændig overbevist, men når sagen præsenteres for direktionen, CFO'en eller bestyrelsen, falder beslutningen til jorden.",
      situationEn: "Your primary contact at the customer is completely convinced, but when the proposal is presented to executive management, the CFO, or the board, the decision falls flat.",
      misunderstandingDa: "Man antager, at jeres interne sponsor selv kan forklare og forsvare jeres værdi, men de mangler det rette forretningsmæssige og risikominimerende materiale to imødegå CFO’ens kritiske spørgsmål.",
      misunderstandingEn: "We assume our internal sponsor can explain and defend our value alone, but they lack the professional, risk-reducing collateral required to counter the CFO's critical questioning.",
      analysisDa: "Vi undersøger, om I leverer de nødvendige dokumenter, forretningscases, risikovurderinger og klare beviser, som jeres sponsor skal bruge to det interne forsvar.",
      analysisEn: "We evaluate whether you deliver the necessary business cases, risk assessments, and clear proof points that your sponsor needs for internal defense.",
      outcomeDa: "Et klart billede af, hvilke materialer og beviser der mangler for at gøre beslutningen om at vælge jer fuldstændig defensibel internt hos kunden.",
      outcomeEn: "A clear picture of what collateral and evidence are missing to make the decision to choose you completely defensible inside the customer's organization.",
      usageDa: "Bruges to at opbygge et 'CFO-ready' og 'Board-ready' bevis- og businesscase-kartotek, der understøtter jeres sponsor i buying group'en.",
      usageEn: "Used to build a 'CFO-ready' and 'Board-ready' proof and business case repository that supports your champion in the buying group.",
      ctaDa: "Gør valget af jer forsvarbart",
      ctaEn: "Make the choice of you defensible"
    }
  ];

  const activeSolData = solutionsList.find(s => s.key === activeSolution) || solutionsList[0];

  return (
    <div className="py-16 md:py-24 max-w-5xl mx-auto w-full px-6 space-y-16 text-left" id="view-solutions">
      
      {/* Intro section */}
      <div className="space-y-6">
        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase border-b border-brand-accent/20 pb-1">
          {lang === 'da' ? 'KOMMERCIELLE LØSNINGER & PRODUKTER' : 'COMMERCIAL SOLUTIONS & PRODUCTS'}
        </span>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-brand-charcoal leading-tight tracking-tight">
          {lang === 'da' ? 'Kommercielle løsninger' : 'Commercial Solutions'} — <br />
          <span className="text-brand-accent">
            {lang === 'da' ? 'når I står overfor en beslutning' : 'when facing a decision'}
          </span>
        </h1>
        
        <p className="text-sm sm:text-base text-brand-muted font-sans leading-relaxed max-w-3xl">
          {lang === 'da' ? (
            <>
              Vi præsenterer ikke vores ydelser som traditionelle timer eller konsulentydelser. Vi definerer dem som de konkrete, kommercielle beslutningssituationer, I allerede står i. En PeopleLab X-analyse diagnosticerer jeres virkelige kommercielle friktion, før I bruger tid, budget og ledelseskræfter.
            </>
          ) : (
            <>
              We do not present our services as traditional consulting hours or generic deliveries. We define them as the concrete commercial decision scenarios you are already facing. A PeopleLab X analysis diagnoses your true commercial friction before you spend time, budget, and executive energy.
            </>
          )}
        </p>
      </div>

      {/* Grid: Left Sidebar Selector, Right details pane */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        
        {/* Left selector stack */}
        <div className="lg:col-span-5 flex flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-none flex-row lg:flex-col">
          {solutionsList.map((sol) => {
            const SolIcon = sol.icon;
            const isSelected = activeSolution === sol.key;
            return (
              <button
                key={sol.key}
                onClick={() => setActiveSolution(sol.key)}
                className={`flex items-center space-x-3 px-4 py-3.5 rounded text-left transition-all cursor-pointer whitespace-nowrap lg:whitespace-normal border flex-shrink-0 lg:flex-shrink-0 ${
                  isSelected 
                    ? 'bg-brand-charcoal text-white border-brand-charcoal shadow-md' 
                    : 'bg-brand-card hover:bg-brand-bg text-brand-charcoal border-brand-border hover:border-brand-accent/40'
                }`}
              >
                <div className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-mono font-bold ${isSelected ? 'bg-brand-accent text-white' : 'bg-brand-bg text-brand-accent'}`}>
                  {sol.num}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-sans font-bold tracking-tight">
                    {lang === 'da' ? sol.titleDa : sol.titleEn}
                  </span>
                  <span className={`text-[9px] font-mono tracking-wider truncate max-w-[240px] ${isSelected ? 'text-brand-accent-light/80' : 'text-brand-muted'}`}>
                    {lang === 'da' ? sol.taglineDa : sol.taglineEn}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Active Solution Card */}
        <div className="lg:col-span-7 bg-brand-card border border-brand-border rounded-lg p-6 sm:p-8 flex flex-col justify-between min-h-[560px] shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Header info */}
              <div className="space-y-2 border-b border-brand-border pb-4">
                <div className="flex items-center space-x-3">
                  <span className="px-2 py-0.5 bg-brand-accent/15 text-brand-accent text-[9px] font-mono font-bold uppercase rounded">
                    {lang === 'da' ? `SITUATION ${activeSolData.num}` : `SCENARIO ${activeSolData.num}`}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-brand-charcoal leading-tight">
                  {lang === 'da' ? activeSolData.titleDa : activeSolData.titleEn}
                </h3>
                <p className="text-sm font-sans font-semibold text-brand-accent">
                  {lang === 'da' ? activeSolData.taglineDa : activeSolData.taglineEn}
                </p>
              </div>

              {/* Grid split inside the active solution card */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Left side: content (8 cols) */}
                <div className="md:col-span-8 space-y-5 text-xs sm:text-sm font-sans leading-relaxed">
                  
                  {/* 1. Situationen */}
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-charcoal">
                      {lang === 'da' ? 'KUNDENS SITUATION' : 'THE BUYER\'S SITUATION'}
                    </h4>
                    <p className="text-brand-charcoal font-medium">
                      {lang === 'da' ? activeSolData.situationDa : activeSolData.situationEn}
                    </p>
                  </div>

                  {/* 2. Den typiske misforståelse */}
                  <div className="space-y-1 bg-brand-bg/40 border-l-2 border-amber-500/70 p-3 rounded-r">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-600 flex items-center space-x-1.5">
                      <span className="inline-block w-1 h-1 rounded-full bg-amber-500"></span>
                      <span>{lang === 'da' ? 'DEN TYPISKE MISFORSTÅELSE' : 'THE TYPICAL MISUNDERSTANDING'}</span>
                    </h4>
                    <p className="text-brand-muted text-xs italic">
                      {lang === 'da' ? activeSolData.misunderstandingDa : activeSolData.misunderstandingEn}
                    </p>
                  </div>

                  {/* 3. Hvad analyserer vi */}
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-charcoal">
                      {lang === 'da' ? 'HVAD PEOPLELAB X ANALYSERER' : 'WHAT PEOPLELAB X ANALYZES'}
                    </h4>
                    <p className="text-brand-muted">
                      {lang === 'da' ? activeSolData.analysisDa : activeSolData.analysisEn}
                    </p>
                  </div>

                  {/* 4. Udbytte & Anvendelse */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-brand-border/60">
                    <div className="space-y-1">
                      <h5 className="text-[9px] font-mono font-bold uppercase tracking-widest text-brand-accent">
                        {lang === 'da' ? 'ORGANISATORISK UDBYTTE' : 'ORGANIZATIONAL OUTCOME'}
                      </h5>
                      <p className="text-brand-charcoal text-xs font-semibold">
                        {lang === 'da' ? activeSolData.outcomeDa : activeSolData.outcomeEn}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-[9px] font-mono font-bold uppercase tracking-widest text-brand-accent">
                        {lang === 'da' ? 'ANVENDELSE AF ANALYSEN' : 'APPLICATION'}
                      </h5>
                      <p className="text-brand-muted text-xs">
                        {lang === 'da' ? activeSolData.usageDa : activeSolData.usageEn}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right side: Illustration (4 cols) */}
                <div className="md:col-span-4 flex flex-col items-center">
                  <div className="relative group overflow-hidden rounded border border-brand-border/80 shadow-sm w-full aspect-square bg-brand-bg/50">
                    <img 
                      src={activeSolData.image} 
                      alt={lang === 'da' ? activeSolData.titleDa : activeSolData.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-charcoal/5 mix-blend-overlay"></div>
                  </div>
                  <div className="mt-2 text-[9px] font-mono text-brand-muted text-center tracking-wider uppercase">
                    {lang === 'da' ? 'Karakteristisk element' : 'Signature focus'}
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
              <span>{lang === 'da' ? activeSolData.ctaDa : activeSolData.ctaEn}</span>
              <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      {/* Decision framework info box */}
      <div className="bg-brand-card/30 border border-brand-border rounded p-6 sm:p-8 space-y-4 max-w-4xl mx-auto text-center mt-8 font-sans">
        <h3 className="text-base font-bold text-brand-charcoal">
          {lang === 'da' ? 'Beslutningsfokuseret frem for timebaseret' : 'Decision-focused rather than hourly-based'}
        </h3>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed max-w-2xl mx-auto">
          {lang === 'da' ? (
            "En PeopleLab X-analyse er ikke en uendelig strategiproces. Det er en præcis, tidsafgrænset og fuldstændig uafhængig diagnosticering af jeres markedssignalering. Vi finder de sande årsager til, at markedet eventuelt tøver, så I kan foretage jeres næste kommercielle investeringer på et uafviseligt og solidt grundlag."
          ) : (
            "A PeopleLab X analysis is not an endless strategic process. It is a precise, time-bound, and completely independent diagnosis of your market signalling. We uncover the true causes of market hesitation, so you can make your next commercial investments on an undeniable and solid baseline."
          )}
        </p>
      </div>

    </div>
  );
}
