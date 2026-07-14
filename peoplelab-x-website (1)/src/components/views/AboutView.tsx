import React, { useState } from 'react';
import { Language } from '../../types';
import { 
  ArrowRight, 
  Linkedin, 
  Check, 
  ChevronDown, 
  BookOpen, 
  Shield, 
  Cpu, 
  Zap, 
  Award, 
  FileText, 
  Layers, 
  Compass, 
  Users, 
  Target, 
  LineChart, 
  ExternalLink,
  Eye,
  CheckSquare,
  Lock,
  Compass as CompassIcon,
  Zap as ZapIcon,
  FileText as FileTextIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Real Founder & Team Portraits
import founderCyril from '../../assets/images/strategy_expert_male_1783106167689.jpg';
import founderChristian from '../../assets/images/client_executive_male_1783106192790.jpg';

// Editorial / Evidence Images
import plxMissionLight from '../../assets/images/plx_mission_light_1783259227247.jpg';
import plxInvestBlueprint from '../../assets/images/plx_invest_light_1783150309974.jpg';
import plxDecisionNotebook from '../../assets/images/plx_decision_light_1783150322324.jpg';
import plxValueMarble from '../../assets/images/plx_value_light_1783150334821.jpg';
import plxStrategicSteps from '../../assets/images/plx_steps_light_1783150359438.jpg';
import plxMarketBridge from '../../assets/images/plx_bridge_light_1783150374466.jpg';
import plxReadabilityLoupe from '../../assets/images/plx_loupe_light_1783150389860.jpg';
import plxExecutiveBrief from '../../assets/images/plx_brief_light_1783150401773.jpg';

interface AboutViewProps {
  lang: Language;
  onNavigateToContact: () => void;
  onNavigateToRealityCheck?: () => void;
}

export default function AboutView({ lang, onNavigateToContact, onNavigateToRealityCheck }: AboutViewProps) {
  const [activeChapter, setActiveChapter] = useState<string>('chapter-1');
  const [expandedPrinciple, setExpandedPrinciple] = useState<number | null>(null);

  const chapters = [
    { 
      id: 'chapter-1', 
      labelDa: 'I. Mission & Filosofi', 
      labelEn: 'I. Mission & Philosophy',
      sections: ['hero', 'belief', 'why', 'worldview', 'against', 'target'] 
    },
    { 
      id: 'chapter-2', 
      labelDa: 'II. Vores Principper', 
      labelEn: 'II. Our Principles',
      sections: ['principles'] 
    },
    { 
      id: 'chapter-3', 
      labelDa: 'III. Fremtid & Standarder', 
      labelEn: 'III. Future & Standards',
      sections: ['future', 'standard', 'heritage'] 
    },
    { 
      id: 'chapter-4', 
      labelDa: 'IV. Erfaring & Autoritet', 
      labelEn: 'IV. Experience & Authority',
      sections: ['lessons', 'experience', 'apparat', 'founders'] 
    },
    { 
      id: 'chapter-5', 
      labelDa: 'V. Perspektiv & Handling', 
      labelEn: 'V. Perspective & Action',
      sections: ['cases', 'discipline', 'careers', 'action'] 
    },
  ];

  const handleScrollToSection = (id: string, chapterId: string) => {
    setActiveChapter(chapterId);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const principlesList = [
    {
      num: 1,
      icon: Eye,
      titleDa: 'Virkeligheden vinder',
      titleEn: 'Reality Wins',
      descDa: 'Virkeligheden er stærkere end strategi, branding, ambition og intern fortælling. En virksomhed kan mene, at den er strategisk relevant – markedet kan stadig læse den som leverandør. En virksomhed kan mene, at den er differentieret – markedet kan stadig sammenligne den med alle andre. En virksomhed kan mene, at den er troværdig – markedet kan stadig mangle bevis. En virksomhed kan mene, at den er klar til vækst – markedet kan stadig ikke forstå, hvorfor den skal vælges. Derfor starter vi med virkeligheden. Ikke den interne. Den eksterne.',
      descEn: 'Reality is stronger than strategy, branding, ambition, and internal narratives. A company may believe it is strategically relevant – the market can still read it as a mere supplier. A company may believe it is differentiated – the market can still compare it to everyone else. A company may believe it is trustworthy – the market can still lack proof. A company may believe it is ready for growth – the market can still fail to understand why it should be chosen. Therefore, we start with reality. Not the internal one. The external one.'
    },
    {
      num: 2,
      icon: CheckSquare,
      titleDa: 'Antagelser skal testes',
      titleEn: 'Assumptions Must Be Tested',
      descDa: 'De farligste beslutninger bygger sjældent på uvidenhed. De bygger på antagelser, der føles sande: "Vi skal bare være mere synlige." "Vi skal have et nyt website." "Vi skal have flere leads." "Vi skal bruge AI." "Vi skal fortælle historien bedre." "Markedet forstår os nok, når de møder os." "Kunderne ved godt, hvad vi kan." Måske er det rigtigt. Måske ikke. PeopleLab X eksisterer for at teste den slags antagelser mod den virkelighed, markedet faktisk ser. Det kræver ærlighed. Ikke pyntet ærlighed. Rigtig ærlighed. Den type ærlighed, der kan vise, at problemet ikke er det, organisationen først troede. Og den type ærlighed, der gør næste beslutning bedre.',
      descEn: 'The most dangerous decisions rarely build on ignorance. They build on assumptions that feel true: "We just need more visibility." "We need a new website." "We need more leads." "We need to use AI." "We need to tell our story better." "The market will understand us once we meet them." "Our clients know what we can do." Maybe they are right. Maybe not. PeopleLab X exists to test these assumptions against the reality the market actually sees. This requires candor. Not polished candor. Real candor. The kind of honesty that can reveal the problem is not what the organization initially thought. And the kind of honesty that makes the next decision better.'
    },
    {
      num: 3,
      icon: Compass,
      titleDa: 'Udefra og ind er en disciplin',
      titleEn: 'Outside-In is a Discipline',
      descDa: 'De fleste virksomheder begynder med sig selv: Deres produkt, historie, løsning, organisation, ambition, interne forklaring. Markedet begynder et andet sted. Det ser fragmenter: Et website, et søgehit, en case, en LinkedIn-profil, et pitch, en anbefaling, et konkurrentfelt, et AI-genereret sammendrag, et digitalt spor, en intern diskussion i en buying group. PeopleLab X starter dér. Ikke fordi den interne virkelighed er ligegyldig. Men fordi markedets eksterne læsning afgør, om den interne styrke overhovedet får mulighed for at blive forstået.',
      descEn: 'Most companies begin with themselves: Their product, history, solution, organization, ambition, internal explanation. The market begins somewhere else. It sees fragments: A website, a search hit, a case study, a LinkedIn profile, a pitch, a recommendation, a competitive landscape, an AI-generated summary, a digital footprint, an internal discussion in a buying group. PeopleLab X starts there. Not because internal reality is irrelevant. But because the market\'s external reading determines whether your internal strength ever gets the opportunity to be understood.'
    },
    {
      num: 4,
      icon: Zap,
      titleDa: 'Klarhed er en konkurrencefordel',
      titleEn: 'Clarity is a Competitive Advantage',
      descDa: 'Klarhed is ikke pynt. Klarhed reducerer risiko, forkorter beslutninger, gør salget lettere, hjælper buying groups med at blive enige, gør det lettere at forsvare et valg, og gør virksomheden mere skalerbar. Uklarhed gør det modsatte: Gør jer dyrere at sælge, lettere at sammenligne forkert, flytter samtalen mod pris, gør kunden mere forsigtig, og gør konkurrenten med den enkleste forklaring farligere. I en verden med stigende kompleksitet bliver klarhed ikke mindre værd. Den bliver more værd.',
      descEn: 'Clarity is not decoration. Clarity reduces risk, shortens decision cycles, makes sales easier, helps buying groups agree, makes choices easier to defend, and makes the enterprise more scalable. Ambiguity does the opposite: It makes you more expensive to sell, easier to miscompare, pushes the conversation toward price, makes the client more cautious, and makes the competitor with the simplest explanation more dangerous. In a world of increasing complexity, clarity does not decrease in value. It becomes more valuable.'
    },
    {
      num: 5,
      icon: Lock,
      titleDa: 'Tillid skal kunne aflæses',
      titleEn: 'Trust Must Be Readable',
      descDa: 'Tillid opstår ikke kun i mødet. Den starter tidligere – i det markedet kan se, før nogen taler med jer: Hvad I dokumenterer, hvordan I forklarer jer, hvilke cases I viser, hvordan jeres digitale spor hænger sammen, hvor tydeligt I viser jeres metode, hvor konkret I reducerer risiko, hvor stærkt I kan underbygge det, I påstår. Hvis tillid først opstår, når I selv sidder i rummet, er jeres markedssignal for svagt. Det gør salget tungere. Og virksomheden mere afhængig af personlige forklaringer.',
      descEn: 'Trust is not built solely in the meeting. It begins earlier – in what the market can observe before anyone speaks with you: What you document, how you explain yourself, which cases you showcase, how your digital footprints connect, how clearly you demonstrate your methodology, how concretely you reduce risk, how strongly you back up your claims. If trust only emerges when you are in the room, your market signal is too weak. It makes sales heavier. And the business too dependent on personal explanations.'
    },
    {
      num: 6,
      icon: Cpu,
      titleDa: 'AI ændrer, hvordan virksomheder findes',
      titleEn: 'AI Changes How Companies are Found',
      descDa: 'AI bliver ikke bare et værktøj inde i virksomheden. AI bliver en del af markedets læseapparat. Beslutningstagere vil bruge AI til at finde, sammenligne, opsummere og vurdere virksomheder. Søgemaskiner vil ændre sig. Digitale spor vil blive mere afgørende. Uklare virksomheder vil blive opsummeret uklart. Manglende dokumentation vil fremstå som manglende dokumentation. Det betyder, at fremtidens marked ikke bare spørger: Hvad siger virksomheden om sig selv? Men: Hvad kan systemer, mennesker og beslutningsmiljøer faktisk udlede om virksomheden ud fra det, der er synligt? Det er en ny virkelighed. PeopleLab X er bygget til at analysere den.',
      descEn: 'AI is not just an internal tool. AI is becoming part of the market’s decoding apparatus. Decision-makers will use AI to discover, compare, summarize, and evaluate companies. Search engines will shift. Digital footprints will become more critical. Ambiguous companies will be summarized ambiguously. Missing documentation will appear as missing documentation. This means the future market will not just ask: What does the company say about itself? But: What can systems, humans, and decision environments actually infer about the company based on what is visible? This is a new reality. PeopleLab X is built to analyze it.'
    },
    {
      num: 7,
      icon: FileText,
      titleDa: 'Beslutninger, ikke rapporter',
      titleEn: 'Decisions, Not Reports',
      descDa: 'Vi tror ikke på rapporter som slutprodukt. Vi tror på beslutninger. En analyse har kun værdi, hvis den gør det tydeligere, hvad ledelsen bør gøre næste gang: Skal I ændre positionering? Styrke proof? Bygge website om? Ændre salgsfortælling? Udvikle buying group-materiale? Stoppe et planlagt initiativ? Prioritere noget helt andet først? PeopleLab X skal ikke give mere information for informationens skyld. PeopleLab X skal reducere usikkerhed før beslutning.',
      descEn: 'We do not believe in reports as final products. We believe in decisions. An analysis only carries value if it makes it clearer what leadership should do next: Should you shift positioning? Strengthen proof? Rebuild your website? Adapt your sales narrative? Develop buying group assets? Stop a planned initiative? Prioritize something else entirely? PeopleLab X is not about supplying more information for the sake of information. PeopleLab X is about reducing uncertainty before a decision.'
    },
    {
      num: 8,
      icon: Target,
      titleDa: 'Ambition kræver præcision',
      titleEn: 'Ambition Requires Precision',
      descDa: 'Ambitiøse virksomheder kan ikke nøjes med mere aktivitet. De skal vide, hvad der faktisk flytter markedets forståelse. Det er her, mange fejler. De gør mere, men bliver ikke lettere at vælge. De kommunikerer mere, men bliver ikke tydeligere. De investerer mere, men løser ikke den reelle friktion. De moderniserer overfladen, men ændrer ikke markedets grundlag for at vælge dem. Ambition uden præcision bliver dyr. Præcision gør ambition operationel.',
      descEn: 'Ambitious companies cannot settle for more activity. They must know what actually shifts the market\'s understanding. This is where many fail. They do more, but don\'t become easier to choose. They communicate more, but don\'t become clearer. They invest more, but don\'t solve the actual friction. They modernize the surface, but don\'t change the market\'s foundation for selecting them. Ambition without precision is expensive. Precision makes ambition operational.'
    }
  ];

  const togglePrinciple = (num: number) => {
    if (expandedPrinciple === num) {
      setExpandedPrinciple(null);
    } else {
      setExpandedPrinciple(num);
    }
  };

  const samlerBadges = [
    { labelDa: 'Digitalt markedssignal', labelEn: 'Digital Market Signal' },
    { labelDa: 'Website-læsbarhed', labelEn: 'Website Readability' },
    { labelDa: 'LinkedIn og synlige kanaler', labelEn: 'LinkedIn & Visible Channels' },
    { labelDa: 'Søgning og AI-repræsentation', labelEn: 'Search & AI Representation' },
    { labelDa: 'Konkurrentlæsning', labelEn: 'Competitor Reading' },
    { labelDa: 'Brandpositionering', labelEn: 'Brand Positioning' },
    { labelDa: 'Buying group-forsvarbarhed', labelEn: 'Buying Group Defensibility' },
    { labelDa: 'Proof og dokumentation', labelEn: 'Proof & Documentation' },
    { labelDa: 'B2B-salg og beslutningsfriktion', labelEn: 'B2B Sales & Decision Friction' },
    { labelDa: 'Perception og psykologi', labelEn: 'Perception & Psychology' },
    { labelDa: 'Kommerciel læsbarhed', labelEn: 'Commercial Readability' },
    { labelDa: 'Beslutningsgrundlag', labelEn: 'Executive Decision Support' },
    { labelDa: 'Branchekontekst', labelEn: 'Industry Context' },
    { labelDa: 'Rolleforståelse', labelEn: 'Role Understanding' },
    { labelDa: 'Reality Notes / markedslæsninger', labelEn: 'Reality Notes / Market Readings' },
  ];

  const scenariosList = [
    { id: 'situation-before-invest', titleDa: 'Før I investerer', titleEn: 'Before You Invest' },
    { id: 'situation-interest-decision', titleDa: 'Fra interesse til beslutning', titleEn: 'From Interest to Decision' },
    { id: 'situation-value-defensibility', titleDa: 'Når jeres værdi skal kunne forsvares', titleEn: 'When your value must be defended' },
    { id: 'situation-buyer-led', titleDa: 'Klarhed før dialogen', titleEn: 'Clarity Before Dialogue' },
    { id: 'situation-strategic-relevance', titleDa: 'Fra leverandør til strategisk relevans', titleEn: 'From Supplier to Strategic Relevance' },
    { id: 'situation-market-entry', titleDa: 'Nyt marked eller ny kategori', titleEn: 'New Market or Category Entry' },
    { id: 'situation-readability', titleDa: 'Når markedet har svært ved at læse jer', titleEn: 'When the market struggles to read you' },
    { id: 'situation-decision-brief', titleDa: 'Når næste træk kræver et eksternt grundlag', titleEn: 'When the next move requires an external basis' },
  ];

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto w-full px-6 space-y-16 text-left" id="view-about">
      
      {/* 1. HERO / MISSION STATEMENT */}
      <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-28">
        <div className="lg:col-span-7 space-y-8">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase border-b border-brand-accent/20 pb-1 inline-block">
            {lang === 'da' ? 'OM PEOPLELAB X // MISSION' : 'ABOUT PEOPLELAB X // MISSION'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black text-brand-charcoal leading-none tracking-tight uppercase">
            {lang === 'da' ? (
              <>
                Fremtiden tilhører ikke dem, <br />
                <span className="text-brand-accent">der larmer mest.</span>
              </>
            ) : (
              <>
                The future does not belong to those <br />
                <span className="text-brand-accent">who make the most noise.</span>
              </>
            )}
          </h1>

          <div className="text-base sm:text-lg text-brand-muted font-sans space-y-4 max-w-3xl leading-relaxed">
            <p className="font-extrabold text-brand-charcoal">
              {lang === 'da' 
                ? 'Det er ikke længere nok at være stærk. I skal kunne aflæses som stærke.'
                : 'It is no longer enough to be strong. You must be readable as strong.'}
            </p>
            <p>
              {lang === 'da'
                ? 'PeopleLab X giver B2B-ledelser et eksternt beslutningsgrundlag, før de investerer videre i website, positionering, salg, AI, go-to-market eller nye markeder.'
                : 'PeopleLab X provides B2B leadership teams with an objective external decision baseline before investing further in websites, positioning, sales initiatives, AI, go-to-market, or new sectors.'}
            </p>
            <p>
              {lang === 'da'
                ? 'Vi viser, hvordan markedet faktisk læser jer — og hvor jeres synlige signal enten skaber klarhed, tillid og valgbarhed eller friktion, tvivl og usynlige fravalg.'
                : 'We reveal exactly how the market decodes you — and where your visible signal generates clarity, trust, and eligibility, or produces friction, hesitation, and silent deselections.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('principles');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-6 py-3 bg-brand-charcoal text-white hover:bg-brand-accent transition-all font-mono font-bold text-xs uppercase tracking-widest rounded cursor-pointer border-none"
            >
              {lang === 'da' ? 'Se Reality Check' : 'See Reality Check'}
            </button>
            <button
              onClick={onNavigateToContact}
              className="px-6 py-3 border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all font-mono font-bold text-xs uppercase tracking-widest rounded cursor-pointer"
            >
              {lang === 'da' ? 'Afklar om Reality Check er relevant for jer' : 'Clarify whether Reality Check is relevant for you'}
            </button>
          </div>
        </div>

        {/* Brand Mission Visualizer */}
        <div className="lg:col-span-5 w-full">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] bg-stone-100 border border-brand-border rounded overflow-hidden shadow-sm">
            <img 
              src={plxMissionLight} 
              alt="PeopleLab X Mission // Clarity over Noise" 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-100 hover:scale-102 transition-transform duration-[1s] ease-out"
            />
            <div className="absolute top-3 left-3 bg-white px-2.5 py-1 rounded text-[8px] font-mono font-black text-brand-accent uppercase tracking-widest shadow-sm border border-brand-border/40">
              {lang === 'da' ? 'MISSION // VISUALISERET' : 'MISSION // VISUALIZED'}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Left Grouped Sticky Swiss-style Nav Index, Right Substantive Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-brand-border">
        
        {/* Sticky Left Navigation Index */}
        <div className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-28 space-y-6">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-charcoal/40 mb-4 border-b border-brand-border pb-2">
              {lang === 'da' ? 'MANIFEST & STRUKTUR' : 'MANIFESTO & STRUCTURE'}
            </p>
            <nav className="flex flex-col space-y-4 pl-1">
              {chapters.map((chap) => {
                const isActive = activeChapter === chap.id;
                return (
                  <div key={chap.id} className="space-y-1">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${isActive ? 'text-brand-accent' : 'text-brand-muted'}`}>
                      {lang === 'da' ? chap.labelDa : chap.labelEn}
                    </span>
                    <div className="flex flex-col space-y-1 pl-3 border-l border-brand-border/60">
                      {chap.sections.map((sec) => (
                        <button
                          key={sec}
                          onClick={() => handleScrollToSection(sec, chap.id)}
                          className="text-left text-[11px] font-mono text-brand-muted hover:text-brand-accent transition-colors bg-transparent border-none cursor-pointer py-0.5"
                        >
                          ↳ {sec.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </nav>
            <div className="pt-6 border-t border-brand-border/60">
              <button 
                onClick={onNavigateToContact}
                className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-charcoal hover:text-brand-accent transition-colors border-none bg-transparent cursor-pointer"
              >
                <span>{lang === 'da' ? 'Afklar om Reality Check er relevant for jer' : 'Clarify whether Reality Check is relevant for you'}</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Content Column - Generous whitespace & high typography standards */}
        <div className="lg:col-span-9 space-y-28">
          
          {/* 2. HD VIL TRO PÅ */}
          <section id="belief" className="space-y-6 scroll-mt-28">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>02.</span>
              <span>{lang === 'da' ? 'Den nye kommercielle virkelighed' : 'The New Commercial Reality'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'Fremtiden tilhører ikke de virksomheder, der larmer mest.' 
                : 'The future does not belong to the companies that make the most noise.'}
            </h2>
            <div className="text-sm sm:text-base text-brand-muted font-sans space-y-5 leading-relaxed max-w-3xl">
              <p className="font-extrabold text-brand-charcoal text-base sm:text-lg">
                {lang === 'da'
                  ? 'Den tilhører de virksomheder, markedet hurtigt kan forstå, stole på og vælge.'
                  : 'It belongs to the enterprises that the market can quickly comprehend, trust, and choose.'}
              </p>
              <p>
                {lang === 'da'
                  ? 'B2B-markeder bliver ikke enklere. De bliver mere komplekse. Flere mennesker er involveret i beslutninger. Flere alternativer er synlige. Flere signaler konkurrerer om opmærksomheden. AI begynder at filtrere, opsummere og sammenligne virksomheder, før mennesker overhovedet taler med dem.'
                  : 'B2B markets are not getting simpler. They are becoming more complex. More stakeholders are involved in buying groups. More options are instantly visible. More signals compete for attention. AI is starting to filter, synthesize, and evaluate corporations before buyers ever request an initial meeting.'}
              </p>
              <p>
                {lang === 'da'
                  ? 'Det betyder, at virksomheder ikke længere kun bliver vurderet af kunder i møder. De bliver vurderet gennem website, søgning, cases, LinkedIn, digitale spor, dokumentation, kategorisprog, salgsbudskaber, AI-sammendrag, interne buying groups og alt det, markedet kan aflæse, før I selv får mulighed for at forklare jer.'
                  : 'This means enterprises are no longer judged solely by personal meetings. They are judged continuously through websites, search findings, clinical proof, LinkedIn, digital footprints, documentation, category taxonomy, sales content, AI briefings, and internal buying groups — all the clues the market evaluates before you speak.'}
              </p>
              <div className="border-l-2 border-brand-accent/50 pl-4 py-1 italic font-semibold text-brand-charcoal bg-brand-bg/40 pr-3 rounded-r text-xs sm:text-sm">
                {lang === 'da'
                  ? 'Det ændrer spillet. Det er ikke længere nok at være stærk. I skal kunne aflæses som stærke.'
                  : 'This alters the landscape. It is no longer sufficient to be operationally strong. You must be readable as strong.'}
              </div>
            </div>
          </section>

          {/* 3. HVORFOR VI FINDES */}
          <section id="why" className="space-y-6 scroll-mt-28 border-t border-brand-border/60 pt-12">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>03.</span>
              <span>{lang === 'da' ? 'Ofte starter virksomheder et skridt for sent' : 'Often Enterprises Start One Step Too Late'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'PeopleLab X er skabt, fordi for mange træffer beslutninger uden at kende virkeligheden.' 
                : 'PeopleLab X is created because too many make moves without knowing objective reality.'}
            </h2>
            <div className="text-sm sm:text-base text-brand-muted font-sans space-y-5 leading-relaxed max-w-3xl">
              <p>
                {lang === 'da'
                  ? 'Mange B2B-virksomheder investerer direkte i løsninger uden først at kende den rå virkelighed, markedet faktisk reagerer på.'
                  : 'Many B2B companies invest straight into downstream execution models without first checking the raw operational reality that the market actually experiences.'}
              </p>
              
              {/* Core downstream block */}
              <div className="bg-brand-bg/50 border border-brand-border p-5 rounded space-y-2">
                <p className="text-xs font-mono font-bold text-brand-charcoal uppercase tracking-wider">
                  {lang === 'da' ? 'Virksomheder investerer ofte direkte i løsninger:' : 'Typical direct-to-solution investments include:'}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-brand-charcoal font-semibold font-mono">
                  <div>↳ {lang === 'da' ? 'Nyt website' : 'New website'}</div>
                  <div>↳ {lang === 'da' ? 'Ny positionering' : 'New positioning'}</div>
                  <div>↳ {lang === 'da' ? 'Kampagner' : 'Campaigns'}</div>
                  <div>↳ {lang === 'da' ? 'CRM og AI' : 'CRM & AI'}</div>
                  <div>↳ {lang === 'da' ? 'Salgstræning' : 'Sales training'}</div>
                  <div>↳ {lang === 'da' ? 'Nye markeder' : 'New markets'}</div>
                  <div>↳ {lang === 'da' ? 'Go-to-market' : 'Go-to-market'}</div>
                  <div>↳ {lang === 'da' ? 'Nye systemer' : 'New systems'}</div>
                </div>
              </div>

              <p className="font-extrabold text-brand-charcoal">
                {lang === 'da'
                  ? 'De starter med løsningen. Ikke med virkeligheden.'
                  : 'They start with the solution. Not with reality.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2 border-y border-brand-border/40 my-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-brand-muted uppercase">
                    {lang === 'da' ? 'Det typiske spørgsmål:' : 'The typical question:'}
                  </span>
                  <p className="text-brand-charcoal italic font-bold">
                    "{lang === 'da' ? 'Hvad skal vi sætte i gang?' : 'What should we start?'}"
                  </p>
                </div>
                <div className="space-y-1 border-l border-brand-accent/40 pl-4">
                  <span className="text-[10px] font-mono font-bold text-brand-accent uppercase">
                    {lang === 'da' ? 'Det afgørende spørgsmål:' : 'The critical question:'}
                  </span>
                  <p className="text-brand-charcoal font-black text-xs sm:text-sm uppercase tracking-tight">
                    "{lang === 'da' ? 'Hvad kan markedet faktisk se, forstå, stole på og bruge som grundlag for at vælge os?' : 'What can the market actually see, understand, trust, and use as a basis to choose us?'}"
                  </p>
                </div>
              </div>

              <p>
                {lang === 'da'
                  ? 'Hvis det spørgsmål ikke er besvaret, risikerer alt andet at blive optimering af en forkert antagelse. Et nyt website kan være professionelt uden at gøre jer lettere at vælge. En kampagne kan skabe opmærksomhed uden at skabe tillid. En ny positionering kan lyde bedre uden at ændre det, markedet faktisk tror på.'
                  : 'If that question remains unanswered, everything else risks becoming the expensive optimization of a flawed assumption. A new website can look highly professional without making you any easier to choose. A campaign can spark interest without breeding institutional trust. A new positioning can read nicely without moving what the market actually registers.'}
              </p>
              <p className="font-extrabold text-brand-charcoal bg-brand-accent/5 p-4 rounded border border-brand-accent/20">
                {lang === 'da'
                  ? 'Det er præcis det, PeopleLab X er bygget for at teste. Før I bruger mere tid, budget og ledelseskraft.'
                  : 'This is precisely what PeopleLab X is built to test. Before you spend further hours, budgets, and leadership bandwidth.'}
              </p>
            </div>
          </section>

          {/* 4. VORES GRUNDSÝN */}
          <section id="worldview" className="space-y-6 scroll-mt-28 border-t border-brand-border/60 pt-12">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>04.</span>
              <span>{lang === 'da' ? 'Vores grundsyn' : 'Our Worldview'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'I bliver ikke valgt ud fra jeres intentioner.' 
                : 'You are not selected based on your intentions.'}
            </h2>
            <div className="text-sm sm:text-base text-brand-muted font-sans space-y-5 leading-relaxed max-w-3xl">
              <p className="font-extrabold text-brand-charcoal text-base sm:text-lg">
                {lang === 'da'
                  ? 'Vi tror på, at virksomheder ikke bliver valgt ud fra deres intentioner. De bliver valgt ud fra deres signaler.'
                  : 'We believe enterprises are never chosen based on their intentions. They are chosen based on their signals.'}
              </p>
              <p className="font-sans">
                {lang === 'da' ? 'Det er brutalt. Men det er nødvendigt at forstå:' : 'It is brutal. But necessary to understand:'}
              </p>

              <ul className="space-y-3 pl-4 border-l-2 border-brand-accent text-xs sm:text-sm text-brand-charcoal font-semibold font-sans">
                <li>↳ {lang === 'da' ? 'Jeres erfaring betyder ikke nok, hvis markedet ikke kan se, hvad den betyder.' : 'Your expertise does not count if the market cannot read what it achieves.'}</li>
                <li>↳ {lang === 'da' ? 'Jeres kvalitet betyder ikke nok, hvis den ikke kan dokumenteres.' : 'Your quality does not exist if it cannot be verified.'}</li>
                <li>↳ {lang === 'da' ? 'Jeres ambition betyder ikke nok, hvis den ikke virker troværdig udefra.' : 'Your ambition is useless if it does not read as credible from the outside.'}</li>
                <li>↳ {lang === 'da' ? 'Jeres forskel betyder ikke nok, hvis den ikke kan forstås hurtigt.' : 'Your differentiation is zero if it cannot be comprehended in seconds.'}</li>
                <li>↳ {lang === 'da' ? 'Jeres relationer betyder ikke nok, hvis virksomheden ikke kan skaleres uden personlig forklaring.' : 'Your relationships cannot carry you if the company cannot scale without you being in the room.'}</li>
              </ul>

              <p className="pt-2 font-black text-brand-charcoal uppercase tracking-tight text-xs sm:text-sm bg-brand-card border border-brand-border p-4 rounded">
                {lang === 'da'
                  ? 'Markedet vælger ikke den virksomhed, der internt ved mest om sig selv. Markedet vælger den virksomhed, der eksternt giver det bedste grundlag for at sige ja.'
                  : 'The market never selects the company that internally knows the most about itself. The market selects the company that externally provides the absolute best footing to say yes.'}
              </p>
            </div>
          </section>

          {/* 5. HVAD VI ARBEJDER IMOD */}
          <section id="against" className="space-y-6 scroll-mt-28 border-t border-brand-border/60 pt-12">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>05.</span>
              <span>{lang === 'da' ? 'Imod den kommercielle refleks' : 'Against the Commercial Reflex'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'Vi arbejder imod refleksen, der får virksomheder til at gøre mere, før de ser klart nok.' 
                : 'We fight the reflex of doing more before seeing clearly.'}
            </h2>
            <div className="text-sm sm:text-base text-brand-muted font-sans space-y-5 leading-relaxed max-w-3xl">
              <p>
                {lang === 'da'
                  ? 'Mere marketing. Mere content. Mere salg. Mere teknologi. Mere AI. Mere synlighed. Mere aktivitet.'
                  : 'More marketing. More content. More sales loops. More technology stacks. More AI tools. More visibility. More raw activity.'}
              </p>
              <p className="font-extrabold text-brand-charcoal">
                {lang === 'da' ? 'Mere er ikke altid svaret.' : 'More is not always the answer.'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-brand-charcoal bg-brand-bg/60 p-5 rounded border border-brand-border font-sans">
                <div className="space-y-2">
                  <p>↳ {lang === 'da' ? 'Hvis problemet er uklart, bliver mere aktivitet bare dyrere.' : 'If the core problem is misdiagnosed, more activity just gets more expensive.'}</p>
                  <p>↳ {lang === 'da' ? 'Hvis markedet ikke forstår forskellen, hjælper det ikke at vise mere af det samme.' : 'If the market cannot register your distinctiveness, showing more of the same fails.'}</p>
                </div>
                <div className="space-y-2">
                  <p>↳ {lang === 'da' ? 'Hvis buying group’en ikke kan forsvare valget, hjælper det ikke nok, at én person finder jer interessante.' : 'If the buying group cannot defend the selection internally, a single friendly contact is useless.'}</p>
                  <p>↳ {lang === 'da' ? 'Hvis AI ikke kan aflæse jer korrekt, hjælper det ikke, at I selv synes, jeres fortælling giver mening.' : 'If AI cannot synthesize your value properly, it does not matter that your internal deck makes sense.'}</p>
                </div>
              </div>

              <p className="text-xs font-mono font-black text-brand-accent tracking-widest uppercase">
                {lang === 'da' ? 'Først virkeligheden. Så beslutningen.' : 'First reality. Then decision.'}
              </p>
            </div>
          </section>

          {/* 5b. TARGET GROUP SECTION */}
          <section id="target" className="space-y-6 scroll-mt-28 border-t border-brand-border/60 pt-12">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>05b.</span>
              <span>{lang === 'da' ? 'For hvem' : 'For Whom'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'For virksomheder, der vil se sig selv udefra' 
                : 'For companies that want to see themselves from the outside'}
            </h2>
            <div className="text-sm sm:text-base text-brand-muted font-sans space-y-5 leading-relaxed max-w-3xl">
              {lang === 'da' ? (
                <>
                  <p className="font-extrabold text-brand-charcoal">
                    PeopleLab X er for jer, der vil forstå, hvordan markedet faktisk læser jer — før I bruger mere tid, budget og ledelseskraft på næste initiativ.
                  </p>
                  <ul className="space-y-3 pl-4 border-l-2 border-brand-accent text-xs sm:text-sm text-brand-charcoal font-semibold font-sans">
                    <li>↳ For jer, der vil teste antagelser, før I vælger løsning.</li>
                    <li>↳ For jer, der ved, at website, salg, marketing, AI og go-to-market kun virker stærkt, hvis markedet kan forstå, forsvare og tage jer videre i en beslutning.</li>
                    <li>↳ For jer, der vil gøre digital og kommerciel læsbarhed til en løbende ledelsesdisciplin — ikke en engangsøvelse.</li>
                  </ul>
                </>
              ) : (
                <>
                  <p className="font-extrabold text-brand-charcoal">
                    PeopleLab X is for those who want to understand how the market actually reads you — before spending more time, budget, and leadership effort on the next initiative.
                  </p>
                  <ul className="space-y-3 pl-4 border-l-2 border-brand-accent text-xs sm:text-sm text-brand-charcoal font-semibold font-sans">
                    <li>↳ For those who want to test assumptions before choosing a solution.</li>
                    <li>↳ For those who know that websites, sales, marketing, AI, and go-to-market only work strongly if the market can understand, defend, and carry you forward in a decision.</li>
                    <li>↳ For those who want to make digital and commercial readability an ongoing leadership discipline — not a one-time exercise.</li>
                  </ul>
                </>
              )}
            </div>
          </section>

          {/* 6. VORES PRINCIPPER */}
          <section id="principles" className="space-y-8 scroll-mt-28 border-t border-brand-border/60 pt-12">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>06.</span>
              <span>{lang === 'da' ? 'Vores principper' : 'Our Principles'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'Principperne bag Reality Check' 
                : 'The principles governing our diagnostics'}
            </h2>
            
            <p className="text-xs sm:text-sm text-brand-muted font-sans leading-relaxed">
              {lang === 'da' 
                ? 'Vores principper skal bevares i deres dybde, men vises her i et stramt, redaktionelt layout. Klik på de enkelte principper for at folde den fulde tekst ud.'
                : 'Our principles are documented with full depth. Click on any block to unfold our exact methodology.'}
            </p>

            {/* Principles Expandable/Collapsible List */}
            <div className="space-y-4 font-sans">
              {principlesList.map((princ) => {
                const isExpanded = expandedPrinciple === princ.num;
                const IconComp = princ.icon;
                return (
                  <div 
                    key={princ.num} 
                    className="border border-brand-border bg-white rounded transition-all shadow-sm hover:border-brand-accent"
                  >
                    <button
                      onClick={() => togglePrinciple(princ.num)}
                      className="w-full text-left p-5 flex items-center justify-between cursor-pointer bg-transparent border-none"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-brand-bg rounded text-brand-accent">
                          <IconComp size={16} />
                        </div>
                        <span className="font-mono text-xs text-brand-accent/60 font-bold">
                          {princ.num.toString().padStart(2, '0')} //
                        </span>
                        <h4 className="text-sm font-black text-brand-charcoal uppercase tracking-tight">
                          {lang === 'da' ? princ.titleDa : princ.titleEn}
                        </h4>
                      </div>
                      <ChevronDown 
                        size={16} 
                        className={`text-brand-muted transition-transform duration-200 ${isExpanded ? 'rotate-180 text-brand-accent' : ''}`} 
                      />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-0 border-t border-brand-border/40 text-xs sm:text-sm text-brand-muted leading-relaxed font-sans bg-brand-bg/20">
                            {lang === 'da' ? princ.descDa : princ.descEn}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 7. VORES SYN PÅ FREMTIDEN */}
          <section id="future" className="space-y-6 scroll-mt-28 border-t border-brand-border/60 pt-12">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>07.</span>
              <span>{lang === 'da' ? 'Den nye æra for B2B-markedet' : 'The New Era for the B2B Market'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'Virksomheder konkurrerer ikke kun på produkt. De konkurrerer på aflæselighed.' 
                : 'Enterprises do not just compete on features. They compete on readability.'}
            </h2>
            <div className="text-sm sm:text-base text-brand-muted font-sans space-y-5 leading-relaxed max-w-3xl">
              <p className="font-extrabold text-brand-charcoal">
                {lang === 'da'
                  ? 'B2B-markeder bevæger sig ind i en ny æra, hvor købsbeslutninger formes asynkront og digitalt.'
                  : 'B2B markets are entering a mature era where purchasing vectors are shaped asynchoronously and digitally.'}
              </p>
              <p>
                {lang === 'da' ? 'Spørgsmålene i denne æra er:' : 'The vital criteria in this era are:'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-brand-charcoal font-bold bg-brand-bg/50 p-5 rounded border border-brand-border font-sans">
                <p>↳ {lang === 'da' ? 'Kan markedet forstå jer hurtigt?' : 'Can the market comprehend you instantly?'}</p>
                <p>↳ {lang === 'da' ? 'Kan AI finde og forklare jer korrekt?' : 'Can AI locate and summarize you accurately?'}</p>
                <p>↳ {lang === 'da' ? 'Kan buying groups bruge jeres materiale internt?' : 'Can buying groups utilize your collateral internally?'}</p>
                <p>↳ {lang === 'da' ? 'Kan beslutningstagere se forskellen?' : 'Can clinical directors verify your unique value?'}</p>
                <p>↳ {lang === 'da' ? 'Kan kunder føle sig sikre nok ved at vælge jer?' : 'Can clients feel absolutely safe selecting you?'}</p>
                <p className="sm:col-span-2">↳ {lang === 'da' ? 'Kan jeres virksomhed forstås uden CEO eller salgsdirektør i rummet?' : 'Can your firm be understood without a founder or sales director in the room?'}</p>
              </div>

              <p>
                {lang === 'da'
                  ? 'De virksomheder, der kan det, får en fordel. De virksomheder, der ikke kan, vil opleve mere friktion, tungere salg, lavere tillid, mere prispresset dialog og flere usynlige fravalg.'
                  : 'The enterprises that achieve this get massive leverage. Those who cannot will experience dragged-out cycles, squeezed margins, increased pricing pushback, and continuous silent dropouts.'}
              </p>
              <p className="font-extrabold text-brand-charcoal">
                {lang === 'da'
                  ? 'Det er ikke fremtidsteori. Det er allerede i gang. PeopleLab X er skabt for at hjælpe virksomheder med at se det, før det bliver dyrt.'
                  : 'This is not future conjecture. It is taking place right now. PeopleLab X was founded to help enterprises detect this gap before it drains their budgets.'}
              </p>
            </div>
          </section>

          {/* 8. VORES STANDARD */}
          <section id="standard" className="space-y-6 scroll-mt-28 border-t border-brand-border/60 pt-12">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>08.</span>
              <span>{lang === 'da' ? 'Vores standard' : 'Our Standard'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'Modet til at se virkeligheden klart' 
                : 'The courage to see reality clearly'}
            </h2>
            <div className="text-sm sm:text-base text-brand-muted font-sans space-y-5 leading-relaxed max-w-3xl">
              <p className="font-extrabold text-brand-charcoal">
                {lang === 'da' ? 'Vi arbejder efter en enkel standard:' : 'We operate according to a strict standard:'}
              </p>
              <div className="text-base sm:text-lg font-mono font-black text-brand-accent uppercase tracking-tight text-center py-6 border-y border-brand-border max-w-2xl bg-brand-bg/30">
                {lang === 'da'
                  ? 'Se virkeligheden klart. Test antagelserne ærligt. Find den reelle friktion. Gør næste beslutning bedre.'
                  : 'See reality clearly. Test assumptions honestly. Map the actual friction. Make the next decision better.'}
              </div>
              <p>
                {lang === 'da'
                  ? 'Det kræver mod. For nogle gange viser analysen ikke det, ledelsen håbede. Den kan vise, at problemet ikke er website, leads, AI eller markedet — men at virksomheden ikke er tydelig, troværdig eller forsvarbar nok udefra.'
                  : 'This demands executive courage. Sometimes, our diagnostic findings do not mirror what leadership hoped for. It may expose that the core issue is not leadgen, AI, or websites, but that your company simply lacks readability, defensibility, or trust from the outside.'}
              </p>
              <p className="font-extrabold text-brand-charcoal">
                {lang === 'da'
                  ? 'Det er ikke en svaghed at opdage det. Det er en fordel. Den virksomhed, der ser virkeligheden først, kan handle først.'
                  : 'Discovering this is never a weakness. It is your ultimate commercial edge. The company that sees reality first is the one that acts first.'}
              </p>
            </div>
          </section>

          {/* 9. HVOR PEOPLELAB X KOMMER FRA */}
          <section id="heritage" className="space-y-6 scroll-mt-28 border-t border-brand-border/60 pt-12">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>09.</span>
              <span>{lang === 'da' ? 'Hvor PeopleLab X kommer fra' : 'Where PeopleLab X Originated'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'Fundamentet bag PeopleLab X' 
                : 'The foundation behind PeopleLab X'}
            </h2>
            <div className="text-sm sm:text-base text-brand-muted font-sans space-y-5 leading-relaxed max-w-3xl">
              <p>
                {lang === 'da'
                  ? 'PeopleLab X er ikke startet med et produkt. Det er startet med en erkendelse, der har vokset sig stærkere gennem mange års arbejde med B2B-beslutninger, positionering, digitale fodaftryk, mønstergenkendelse og markedets reelle modtagelse.'
                  : 'PeopleLab X did not launch with a product. It originated from an accumulation of realizations gathered over years of steering major campaigns, digital platforms, brand strategies, competitor mappings, and behavioral psychology.'}
              </p>
              <div className="border-l-2 border-brand-accent pl-4 font-mono text-xs sm:text-sm text-brand-charcoal font-bold space-y-1">
                <p>{lang === 'da' ? 'Erkendelsen bag:' : 'The core realization is simple, yet heavy:'}</p>
                <p className="text-brand-accent uppercase">
                  {lang === 'da' 
                    ? 'Mennesker handler ikke på hele virkeligheden. De handler på den virkelighed, de kan opfatte, forstå og forsvare.'
                    : 'Humans do not act on the entirety of reality. They act on the reality they can perceive.'}
                </p>
              </div>
              <p>
                {lang === 'da'
                  ? 'Det gælder også i B2B-beslutninger, hvor flere personer skal kunne danne tillid, sammenligne alternativer og begrunde et valg internt.'
                  : 'This applies when citizens vote. It applies when clients buy. It applies when board members recommend. It applies when recruits evaluate workplaces. And it applies when leaders must justify an expensive decision that others inside their buying groups must sign off on.'}
              </p>
            </div>
          </section>

          {/* 10. HD KAMPAGNER, BRANDS OG ADGANG LÆRTE OS */}
          <section id="lessons" className="space-y-6 scroll-mt-28 border-t border-brand-border/60 pt-12">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>10.</span>
              <span>{lang === 'da' ? 'Hvad erfaringen lærte os' : 'What Experience Taught Us'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'Hvad kampagner, brands og digital analyse har vist os' 
                : 'Lessons from campaigns, branding, and digital tracking'}
            </h2>
            <div className="text-sm sm:text-base text-brand-muted font-sans space-y-4 leading-relaxed max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs sm:text-sm text-brand-muted">
                <div className="space-y-3">
                  <p>
                    <strong className="text-brand-charcoal block uppercase font-mono text-[10px] tracking-wider text-brand-accent">↳ Moderne kampagner</strong>
                    {lang === 'da'
                      ? 'Har vist, hvor hurtigt mennesker, ideer og positioner kan få gennemslagskraft, når analyse, kanalforståelse, timing, modtagerpsykologi og konkurrentlæsning arbejder sammen.'
                      : 'Have proved how rapidly people, ideas, and strategic positions can win dominant share when analysis, timing, behavioral psychology, and competitor mapping intersect.'}
                  </p>
                  <p>
                    <strong className="text-brand-charcoal block uppercase font-mono text-[10px] tracking-wider text-brand-accent">↳ Branding</strong>
                    {lang === 'da'
                      ? 'Har vist, at en position ikke bor i virksomheden. Den bor i menneskers hoveder.'
                      : 'Has verified that a company position does not live in your headquarters. It lives in the minds of your target audience.'}
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    <strong className="text-brand-charcoal block uppercase font-mono text-[10px] tracking-wider text-brand-accent">↳ Digital analyse</strong>
                    {lang === 'da'
                      ? 'Har vist, at mennesker efterlader spor — og at sporene afslører, hvad de opsøger, hvad de undgår, hvad de sammenligner, og hvor interessen forsvinder.'
                      : 'Has proved that people leave distinct footprints — and these trails reveal exactly what they seek, what they avoid, and where their active interest evaporates.'}
                  </p>
                  <p>
                    <strong className="text-brand-charcoal block uppercase font-mono text-[10px] tracking-wider text-brand-accent">↳ B2B-salg</strong>
                    {lang === 'da'
                      ? 'Har vist, at interesse ikke er nok. Et valg skal kunne forstås, forklares, dokumenteres og forsvares — ofte af mennesker, der skal bringe sagen videre internt uden jer i rummet.'
                      : 'Has shown that interest is just a vanity metric. A selection must be defensible, explainable, and risk-mitigated — often by people advancing the case internally without you present.'}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-border">
                <p className="font-extrabold text-brand-charcoal">
                  {lang === 'da'
                    ? 'PeopleLab X samler disse erfaringer i én kommerciel disciplin: kommerciel læsbarhed.'
                    : 'PeopleLab X bridges these fields into a single, rigorous B2B discipline: commercial readability.'}
                </p>
                <p className="font-mono text-xs text-brand-accent uppercase font-bold pt-1">
                  {lang === 'da'
                    ? 'Hvordan bliver en virksomhed læst, forstået, vurderet, sammenlignet og valgt — før den selv får ordet?'
                    : 'How is your enterprise read, understood, evaluated, compared, and chosen — before you ever get the floor?'}
                </p>
              </div>
            </div>
          </section>

          {/* 11. VORES ERFARINGSGRUNDLAG */}
          <section id="experience" className="space-y-6 scroll-mt-28 border-t border-brand-border/60 pt-12">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>11.</span>
              <span>{lang === 'da' ? 'Erfaringen bag læsningen' : 'Experience Behind the Reading'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'PeopleLab X bygger på erfaring fra flere felter, der normalt behandles hver for sig' 
                : 'We operate at the convergence of fields normally treated in isolation'}
            </h2>
            <div className="text-sm sm:text-base text-brand-muted font-sans space-y-5 leading-relaxed max-w-3xl">
              <p>
                {lang === 'da'
                  ? 'Strategi. B2B-ledelse. Branding. Digital analyse. Kampagneforståelse. Positionering. Konkurrentlæsning. Beslutningspsykologi. AI-understøttet markedslæsning. Salg og kommerciel prioritering.'
                  : 'Strategy. B2B Leadership. Branding. Digital Analytics. Campaign Execution. Positioning. Competitive Intelligence. Decision Psychology. AI-supported Market Analysis. Sales Enablement.'}
              </p>
              <p>
                {lang === 'da'
                  ? 'Det er netop sammenhængen mellem disse felter, der er afgørende. Et marked reagerer ikke kun på budskaber. Det reagerer på det samlede signal: website, sprog, cases, proof, LinkedIn, søgning, kategori, fravær, konkurrenter, dokumentation, troværdighed og intern forsvarbarhed.'
                  : 'It is precisely the synergy between these disciplines that counts. The market does not buy messages; it evaluates signals: websites, vocabulary, client cases, clinical proof, LinkedIn feeds, search footprint, categories, competitors, documentation, and compliance.'}
              </p>

              {/* Verified Proof Tiles Module */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-brand-border/50">
                <div className="p-5 bg-brand-bg rounded border border-brand-border space-y-2">
                  <span className="text-2xl font-mono font-black text-brand-accent block">10–12+ ÅR</span>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-charcoal block">
                    {lang === 'da' ? 'Arbejde med kampagner, branding, digital analyse & beslutningsadfærd' : 'Steering campaigns, branding, analytics & decision psychology'}
                  </span>
                </div>
                <div className="p-5 bg-brand-bg rounded border border-brand-border space-y-2">
                  <span className="text-2xl font-mono font-black text-brand-accent block">B2B LEADERSHIP</span>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-charcoal block">
                    {lang === 'da' ? 'Erfaring med strategi, salg, marked, organisation og kommerciel styring' : 'Real-world strategy, sales, operations and corporate scaling'}
                  </span>
                </div>
                <div className="p-5 bg-brand-bg rounded border border-brand-border space-y-2">
                  <span className="text-2xl font-mono font-black text-brand-accent block">REALITY CHECK</span>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-charcoal block">
                    {lang === 'da' ? 'Struktureret outside-in-rapport til B2B-ledelser og bestyrelser' : 'Rigorous outside-in diagnostics for B2B boards and executive teams'}
                  </span>
                </div>
                <div className="p-5 bg-brand-bg rounded border border-brand-border space-y-2">
                  <span className="text-2xl font-mono font-black text-brand-accent block">2–4 UGER</span>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-charcoal block">
                    {lang === 'da' ? 'Typisk leveringstid for fokuseret Reality Check' : 'Standard turnaround for targeted Reality Check report'}
                  </span>
                </div>
                <div className="p-5 bg-brand-bg rounded border border-brand-border space-y-2 sm:col-span-2">
                  <span className="text-2xl font-mono font-black text-brand-accent block">FLERE BESLUTNINGSLAG</span>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-charcoal block">
                    {lang === 'da' ? 'Integration af rolle-, branche- og anvendelsesmodeller for B2B-valgbarhed' : 'Integration of role, industry, and application models for B2B eligibility'}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 12. DET PEOPLELAB X SAMLER */}
          <section id="apparat" className="space-y-6 scroll-mt-28 border-t border-brand-border/60 pt-12">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>12.</span>
              <span>{lang === 'da' ? 'Et samlet læseapparat' : 'A Unified Decoding Apparatus'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'Vi samler discipliner, der normalt ligger adskilt' 
                : 'Integrating disciplines that are traditionally fragmented'}
            </h2>
            <div className="text-sm sm:text-base text-brand-muted font-sans space-y-5 leading-relaxed max-w-3xl">
              <p>
                {lang === 'da'
                  ? 'Vi læser ikke kun kommunikation, marketing, salg eller digital synlighed isoleret. Vi læser det samlede signal, som markedet faktisk reagerer på.'
                  : 'We never analyze communications, marketing, sales, or digital channels in silos. We decode the collective market signature that clinical and operational buyers actually scan.'}
              </p>

              {/* Disciplines Grid Badges */}
              <div className="flex flex-wrap gap-2 pt-3">
                {samlerBadges.map((badge, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-brand-card hover:bg-brand-bg border border-brand-border text-[11px] font-mono font-bold text-brand-charcoal uppercase tracking-wider rounded transition-colors"
                  >
                    ✦ {lang === 'da' ? badge.labelDa : badge.labelEn}
                  </span>
                ))}
              </div>
              
              <p className="text-xs italic pt-2">
                {lang === 'da'
                  ? 'Reality Check gør disse discipliner til én samlet ekstern læsning af, hvordan jeres virksomhed bliver forstået, vurderet og valgt.'
                  : 'Our Reality Check crystallizes these diverse parameters into a single, cohesive external report on how your business is processed, benchmarked, and selected.'}
              </p>
            </div>
          </section>

          {/* 13. MENNESKENE BAG PEOPLELAB X */}
          <section id="founders" className="space-y-8 scroll-mt-28 border-t border-brand-border/60 pt-12">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>13.</span>
              <span>{lang === 'da' ? 'Menneskene bag læsningen' : 'The Minds Behind the Reading'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'Dømmekraft, mønstergenkendelse og ledelseserfaring' 
                : 'Judgment, pattern recognition, and commercial experience'}
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans max-w-3xl">
              {lang === 'da'
                ? 'Det kræver en særlig type dømmekraft at læse en virksomhed udefra. Man skal kunne se mønstre uden at forsimple, holde kompleksitet uden at drukne i den, og sige det præcist nok til, at en ledelse kan handle. Vi arbejder ikke med pyntede meninger, men med rå, ekstern realitet.'
                : 'It requires highly sharpened judgment to audit a corporation from the outside. One must map patterns without oversimplifying, handle complexity without drowning in details, and formulate insights with enough focus for a board to act. We do not provide polished opinions, but raw commercial truths.'}
            </p>

            {/* Founder Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 font-sans">
              
              {/* Founder 1: Cyril Alstrup */}
              <div className="border border-brand-border bg-white rounded-lg overflow-hidden flex flex-col justify-between hover:border-brand-accent transition-all group shadow-sm">
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded overflow-hidden border border-brand-border bg-brand-bg flex-shrink-0">
                      <img 
                        src={founderCyril} 
                        alt="Cyril Alstrup" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-brand-charcoal uppercase tracking-tight">Cyril Alstrup</h4>
                      <p className="text-[10px] font-mono font-semibold text-brand-accent uppercase">
                        {lang === 'da' ? 'Founder' : 'Founder'}
                      </p>
                      <p className="text-[9px] font-mono text-brand-muted uppercase">
                        Commercial Reality Intelligence
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    <strong>{lang === 'da' ? 'Rolle: ' : 'Role: '}</strong>
                    {lang === 'da' 
                      ? 'Stifter med fokus på kommerciel signalforståelse og outside-in-analyse.'
                      : 'Founder with focus on commercial signal decoding and outside-in diagnostics.'}
                  </p>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    <strong>{lang === 'da' ? 'Erfaring: ' : 'Experience: '}</strong>
                    {lang === 'da' 
                      ? 'Mange års arbejde i krydsfeltet mellem ledelse, strategi, branding, digital analyse, adfærdspsykologi og komplekse B2B-beslutninger.'
                      : 'Over a decade at the intersection of leadership, strategy, branding, digital analytics, behavioral psychology, and B2B procurement.'}
                  </p>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    <strong>{lang === 'da' ? 'Betydning for Reality Check: ' : 'Significance for Reality Check: '}</strong>
                    {lang === 'da' 
                      ? 'Sikrer den dybe diagnosticering af virksomhedens synlige fodaftryk og omsætter komplekse markedssignaler til præcis, operationel beslutningskraft.'
                      : 'Directs the deep diagnostics of the visible footprint and translates complex market signals into precise, operational boardroom decisions.'}
                  </p>
                </div>
                <div className="p-5 bg-brand-bg border-t border-brand-border/60 flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold text-brand-muted uppercase">LinkedIn Connected</span>
                  <span className="text-[9px] font-mono text-brand-accent font-bold group-hover:underline">↳ PROFILE</span>
                </div>
              </div>

              {/* Founder 2: Christian Lahn Høyer */}
              <div className="border border-brand-border bg-white rounded-lg overflow-hidden flex flex-col justify-between hover:border-brand-accent transition-all group shadow-sm">
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded overflow-hidden border border-brand-border bg-brand-bg flex-shrink-0">
                      <img 
                        src={founderChristian} 
                        alt="Christian Lahn Høyer" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-brand-charcoal uppercase tracking-tight">Christian Lahn Høyer</h4>
                      <p className="text-[10px] font-mono font-semibold text-brand-accent uppercase">
                        {lang === 'da' ? 'Co-founder & CEO' : 'Co-founder & CEO'}
                      </p>
                      <p className="text-[9px] font-mono text-brand-muted uppercase">
                        Commercial Development & Scaling
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    <strong>{lang === 'da' ? 'Rolle: ' : 'Role: '}</strong>
                    {lang === 'da' 
                      ? 'Medstifter og administrerende direktør med fokus på kommerciel udvikling og skalering.'
                      : 'Role: Co-founder & CEO focused on commercial development and scaling.'}
                  </p>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    <strong>{lang === 'da' ? 'Erfaring: ' : 'Experience: '}</strong>
                    {lang === 'da' 
                      ? 'Mere end 20 års international ledelseserfaring med salg, markedsudvikling og strategiske partnerskaber fra medie- og teknologitunge markeder.'
                      : 'Experience: More than 20 years of international leadership in sales, market expansion, and strategic channels across media and tech sectors.'}
                  </p>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    <strong>{lang === 'da' ? 'Betydning for Reality Check: ' : 'Significance for Reality Check: '}</strong>
                    {lang === 'da' 
                      ? 'Sikrer, at analyserne altid er solidt forankret i de reelle kommercielle, organisatoriske og ledelsesmæssige virkeligheder, B2B-virksomheder navigerer i.'
                      : 'Significance for Reality Check: Ensures the diagnostics are firmly grounded in the real commercial, operational, and organizational realities that B2B enterprises navigate.'}
                  </p>
                </div>
                <a 
                  href="https://www.linkedin.com/in/christian-hoeyer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-5 bg-brand-bg border-t border-brand-border/60 flex items-center justify-between no-underline group-hover:border-brand-accent"
                >
                  <span className="text-[9px] font-mono font-bold text-brand-muted uppercase">linkedin.com/in/christian-hoeyer/</span>
                  <ExternalLink size={10} className="text-brand-accent" />
                </a>
              </div>

            </div>
          </section>

          {/* 14. CASES OG ANVENDELSER */}
          <section id="cases" className="space-y-6 scroll-mt-28 border-t border-brand-border/60 pt-12">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>14.</span>
              <span>{lang === 'da' ? 'Cases & Anvendelser' : 'Cases & Applications'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'Hvor Reality Check skaber strategisk beslutningsværdi' 
                : 'Where Reality Check powers B2B decision-making'}
            </h2>
            <div className="text-sm sm:text-base text-brand-muted font-sans space-y-5 leading-relaxed max-w-3xl">
              <p>
                {lang === 'da'
                  ? 'De første dokumenterede kundecases vises først, når der foreligger konkrete, verificerbare resultater. Indtil da viser vi de strategiske situationer, hvor Reality Check typisk skaber beslutningsværdi.'
                  : 'The first documented client case studies will only be shown once concrete, verifiable results are present. Until then, we display the strategic situations where a Reality Check typically creates decision value.'}
              </p>

              {/* Scenarios Links List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono">
                {scenariosList.map((sol) => (
                  <div 
                    key={sol.id}
                    className="p-4 bg-brand-bg border border-brand-border rounded flex items-center justify-between text-xs font-bold text-brand-charcoal hover:border-brand-accent transition-all"
                  >
                    <span>↳ {sol.titleDa}</span>
                    <span className="text-[9px] text-brand-accent uppercase font-black tracking-wider">SCENARIO</span>
                  </div>
                ))}
              </div>

              <div className="bg-brand-card p-5 border border-brand-border rounded text-xs text-brand-charcoal space-y-2">
                <p className="font-extrabold uppercase font-mono tracking-wider text-brand-accent text-[10px]">
                  {lang === 'da' ? 'HVER FREMTIDIG CASE VIL VISUELLE KORTLÆGGE:' : 'EACH FUTURE CASE STUDY WILL MAP:'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 font-mono font-semibold pt-1">
                  <div>[1] SITUATION</div>
                  <div>[2] BLIND SPOTS</div>
                  <div>[3] DIAGNOSTICS</div>
                  <div>[4] BOARD ACTIONS</div>
                  <div>[5] REVENUE IMPACT</div>
                </div>
                <p className="text-[10px] text-brand-muted leading-relaxed border-t border-brand-border/60 pt-2 font-sans">
                  {lang === 'da'
                    ? 'Ingen falske logoer. Ingen opdigtede tal. Ingen fiktive cases.'
                    : 'No fake logos. No fabricated numbers. No fictional cases.'}
                </p>
              </div>
            </div>
          </section>

          {/* 15. DEN DISCIPLIN VI BYGGER */}
          <section id="discipline" className="space-y-6 scroll-mt-28 border-t border-brand-border/60 pt-12">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>15.</span>
              <span>{lang === 'da' ? 'Kommerciel Læsbarhed' : 'Commercial Readability'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'Vi professionaliserer en ny B2B-disciplin' 
                : 'Crystallizing a new operational B2B discipline'}
            </h2>
            <div className="text-sm sm:text-base text-brand-muted font-sans space-y-5 leading-relaxed max-w-3xl">
              <p>
                {lang === 'da'
                  ? 'Ikke som endnu et bureauområde. Ikke som en ny variant af marketinganalyse. Ikke som AI pakket ind som strategi.'
                  : 'Not as just another creative agency offering. Not as a quick marketing research framework. Not as standard AI copy wrapped in consultant jargon.'}
              </p>
              <p className="font-extrabold text-brand-charcoal">
                {lang === 'da'
                  ? 'Men som et dedikeret analyseunivers for, hvordan virksomheder bliver forstået, vurderet, sammenlignet og valgt i markeder, hvor beslutninger formes længe før den første samtale.'
                  : 'But as an analytical paradigm mapping how modern corporations are researched, processed, compared, and chosen in markets where buying groups complete 70% of their journey prior to contact.'}
              </p>
              <p>
                {lang === 'da'
                  ? 'Reality Check er den konkrete analyse. Kommerciel læsbarhed er disciplinen bag. Den sande langsigtede værdi ligger i den akkumulerede metodebank, signalforståelse, branchelæsninger, rolleforståelse, datamodeller og evnen til at dokumentere, hvorfor nogle virksomheder bliver nemmere at vælge — mens andre reduceres til pris.'
                  : 'Our Reality Check is the concrete analysis. Commercial Readability is the discipline behind. The ultimate long-term value, however, resides in our compiled database of signal tracking, role mappings, industry frameworks, and objective data models.'}
              </p>
              <p className="font-extrabold text-brand-charcoal italic">
                {lang === 'da'
                  ? 'Det er her, PeopleLab X kan blive mere end et rapportprodukt. Det bliver en ny måde for B2B-ledelser at styre deres eksterne markedssignal på.'
                  : 'This is where PeopleLab X expands past a simple report. It becomes a permanent steering engine for B2B boards and executive teams to direct their external readability.'}
              </p>
            </div>
          </section>

          {/* 16. BYG MED OS */}
          <section id="careers" className="space-y-6 scroll-mt-28 border-t border-brand-border/60 pt-12">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>16.</span>
              <span>{lang === 'da' ? 'Byg med os' : 'Build With Us'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'Er du med til at bygge en ny disciplin?' 
                : 'Will you help shape a new discipline?'}
            </h2>
            <div className="text-sm sm:text-base text-brand-muted font-sans space-y-5 leading-relaxed max-w-3xl">
              <p>
                {lang === 'da'
                  ? 'PeopleLab X er for mennesker, der kan arbejde i krydsfeltet mellem marked, psykologi, analyse, AI, brand, salg og ledelsesbeslutninger.'
                  : 'PeopleLab X is for professionals who operate fluently at the convergence of market signals, cognitive psychology, data crawls, AI synthesis, branding, and board decisions.'}
              </p>
              <p className="font-extrabold text-brand-charcoal bg-brand-bg border border-brand-border p-4 rounded text-xs sm:text-sm">
                {lang === 'da'
                  ? 'Vi søger ikke mennesker, der bare kan producere mere indhold. Vi søger mennesker, der kan læse signaler, forstå friktion, se mønstre, stille skarpe spørgsmål og omsætte kompleksitet til beslutningskraft.'
                  : 'We do not search for content producers. We search for analytical minds who read signals, trace friction, identify patterns, formulate sharp diagnoses, and translate complex signals into boardroom clarity.'}
              </p>
              <p>
                {lang === 'da'
                  ? 'Fremtidige roller kan ligge inden for research, analyse, AI og data, B2B-strategi, branding og positionering, sales intelligence, industry research, editorial thinking og produktudvikling.'
                  : 'Future paths will span research, diagnostics, AI and data engineering, B2B strategy, clinical branding, sales intelligence, and editorial architecture.'}
              </p>
              <div className="pt-2">
                <a 
                  href="https://www.linkedin.com/company/peoplelabx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-brand-charcoal text-white hover:bg-brand-accent px-5 py-2.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider transition-all no-underline"
                >
                  <span>{lang === 'da' ? 'Følg PeopleLab X på LinkedIn' : 'Follow PeopleLab X on LinkedIn'}</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </section>

          {/* 17. SLUT-CTA */}
          <section id="action" className="space-y-6 scroll-mt-28 border-t border-brand-border/60 pt-12 pb-16">
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brand-accent uppercase tracking-widest">
              <span>17.</span>
              <span>{lang === 'da' ? 'Næste Skridt' : 'Next Step'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-brand-charcoal tracking-tight uppercase leading-snug">
              {lang === 'da' 
                ? 'Hvad ser markedet, før I får ordet?' 
                : 'What does the market read before you speak?'}
            </h2>
            <div className="text-sm sm:text-base text-brand-muted font-sans space-y-5 leading-relaxed max-w-3xl">
              <p>
                {lang === 'da'
                  ? 'PeopleLab X læser virksomheden udefra og viser, hvad markedet faktisk har grundlag for at forstå, tro på, sammenligne og vælge.'
                  : 'PeopleLab X audits your enterprise from the outside, diagnosing what your prospects actually have the footing to comprehend, trust, benchmark, and choose.'}
              </p>
              <p className="font-extrabold text-brand-charcoal">
                {lang === 'da'
                  ? 'Reality Check er den konkrete analyse. Kommerciel læsbarhed er disciplinen bag.'
                  : 'Our Reality Check is the initial diagnostic report. Commercial Readability is the discipline.'}
              </p>
              <p className="font-mono text-xs text-brand-accent uppercase font-black tracking-widest">
                {lang === 'da' ? 'Først markedets læsning. Så ledelsens beslutning.' : 'First the market\'s reading. Then the board\'s decision.'}
              </p>

              <div className="pt-6 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    if (onNavigateToRealityCheck) {
                      onNavigateToRealityCheck();
                    } else {
                      const el = document.getElementById('principles');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="px-6 py-3 bg-brand-charcoal text-white hover:bg-brand-accent font-mono text-xs font-bold uppercase tracking-widest rounded transition-all cursor-pointer border-none"
                >
                  {lang === 'da' ? 'Se Reality Check' : 'See Reality Check'}
                </button>
                <button
                  onClick={onNavigateToContact}
                  className="px-6 py-3 bg-brand-accent text-white hover:bg-brand-charcoal font-mono text-xs font-bold uppercase tracking-widest rounded transition-all cursor-pointer border-none"
                >
                  {lang === 'da' ? 'Afklar om Reality Check er relevant for jer' : 'Clarify whether Reality Check is relevant for you'}
                </button>
              </div>
            </div>
          </section>

        </div>

      </div>

    </div>
  );
}
