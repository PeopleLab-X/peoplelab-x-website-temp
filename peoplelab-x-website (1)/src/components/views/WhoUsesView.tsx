import React, { useState } from 'react';
import { Language } from '../../types';
import { 
  CornerDownRight, 
  ArrowRight, 
  Briefcase, 
  DollarSign, 
  Megaphone, 
  Handshake, 
  Settings, 
  Users, 
  Landmark, 
  Key, 
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Premium Strategic Editorial Images
import plxInvestBlueprint from '../../assets/images/plx_invest_light_1783150309974.jpg';
import plxDecisionNotebook from '../../assets/images/plx_decision_light_1783150322324.jpg';
import plxValueMarble from '../../assets/images/plx_value_light_1783150334821.jpg';
import plxAiLaptop from '../../assets/images/plx_ai_light_1783150346746.jpg';
import plxStrategicSteps from '../../assets/images/plx_steps_light_1783150359438.jpg';
import plxMarketBridge from '../../assets/images/plx_bridge_light_1783150374466.jpg';
import plxReadabilityLoupe from '../../assets/images/plx_loupe_light_1783150389860.jpg';
import plxExecutiveBrief from '../../assets/images/plx_brief_light_1783150401773.jpg';

interface WhoUsesViewProps {
  lang: Language;
  onNavigateToContact: () => void;
}

type RoleKey = 'ceo' | 'cfo' | 'cmo' | 'sales' | 'coo' | 'chro' | 'board' | 'owner';

interface RoleData {
  key: RoleKey;
  icon: React.ComponentType<any>;
  image: string;
  titleDa: string;
  titleEn: string;
  subDa: string;
  subEn: string;
  ctaDa: string;
  ctaEn: string;
  parasDa: string[];
  parasEn: string[];
}

export default function WhoUsesView({ lang, onNavigateToContact }: WhoUsesViewProps) {
  const [activeRole, setActiveRole] = useState<RoleKey>('ceo');

  const rolesList: RoleData[] = [
    {
      key: 'ceo',
      icon: Briefcase,
      image: plxExecutiveBrief,
      titleDa: "Ledelse / CEO",
      titleEn: "Management / CEO",
      subDa: "Når ledelsen skal vælge næste kommercielle træk",
      subEn: "When choosing the next commercial move",
      ctaDa: "Afklar om Reality Check er relevant for jer",
      ctaEn: "Clarify whether Reality Check is relevant for you",
      parasDa: [
        "Når ledelsen skal vælge næste kommercielle træk, er interne antagelser sjældent nok. Reality Check giver et eksternt grundlag for at se, hvordan markedet faktisk læser jer, før I vælger retning, investering eller næste initiativ.",
        "Undersøgelsen kortlægger den kolde, synlige virkelighed udefra-ind, så næste skridt ikke baseres på interne antagelser eller gætværk, men på en præcis markedsdiagnose.",
        "Det sikrer et fælles og solidt beslutningsgrundlag på tværs af hele ledelsen, før nye ressourcer og budgetter aktiveres."
      ],
      parasEn: [
        "When management needs to choose the next commercial move, internal assumptions are rarely enough. Reality Check provides an external foundation to see how the market actually reads you, before you choose direction, investment, or the next initiative.",
        "The assessment maps the cold, visible reality from the outside-in, so your next step is not based on internal assumptions or guesswork, but on a precise market diagnosis.",
        "This ensures a shared and solid decision-making foundation across the entire executive team before new resources and budgets are committed."
      ]
    },
    {
      key: 'cfo',
      icon: DollarSign,
      image: plxInvestBlueprint,
      titleDa: "Økonomi / CFO",
      titleEn: "Finance / CFO",
      subDa: "Når en investering i website, marketing, salg, AI, CRM eller go-to-market skal vurderes",
      subEn: "When assessing investments in website, marketing, sales, AI, CRM, or go-to-market",
      ctaDa: "Afklar om Reality Check er relevant for jer",
      ctaEn: "Clarify whether Reality Check is relevant for you",
      parasDa: [
        "Når en investering i website, marketing, salg, AI, CRM eller go-to-market skal vurderes, kan Reality Check give et eksternt grundlag for at se, om investeringen adresserer den rigtige friktion — eller blot symptomet.",
        "Før der frigives budgetter to store kommercielle genopretninger eller teknologiplatforme, skal I vide, om problemet ligger i jeres markedssignal, jeres værdiforklaring eller i buying group'ens interne forsvar.",
        "Derved sikres det, at kapitalen indsættes præcis dér, hvor den har den største strategiske og økonomiske effekt."
      ],
      parasEn: [
        "When an investment in a website, marketing, sales, AI, CRM, or go-to-market is being evaluated, Reality Check can provide an external foundation to see if the investment addresses the actual friction — or merely a symptom.",
        "Before releasing budgets for major commercial redesigns or new technology platforms, you must know whether the issue lies in your market signal, your value proposition, or the buying group's internal alignment.",
        "This ensures that capital is deployed exactly where it has the greatest strategic and financial impact."
      ]
    },
    {
      key: 'cmo',
      icon: Megaphone,
      image: plxReadabilityLoupe,
      titleDa: "Marketing / CMO",
      titleEn: "Marketing / CMO",
      subDa: "Når marketing skal prioritere før website, kampagner, content eller positionering",
      subEn: "When prioritizing marketing efforts before website, campaigns, content, or positioning",
      ctaDa: "Afklar om Reality Check er relevant for jer",
      ctaEn: "Clarify whether Reality Check is relevant for you",
      parasDa: [
        "Når marketing skal prioritere før website, kampagner, content, positionering eller AI-initiativer, viser Reality Check, hvad markedet faktisk kan forstå, bruge og tage videre i en beslutning.",
        "Det handler ikke om at skabe mere larm, men om at styrke virksomhedens eksterne læsbarhed. Ved at diagnosticere, hvor markedet tøver, eller hvor signalerne svigter, kan I prioritere indsatserne langt mere præcist.",
        "Resultatet er, at jeres næste marketinginvestering bygger på dokumenteret ekstern realitet frem for interne mavefornemmelser."
      ],
      parasEn: [
        "When marketing needs to prioritize before launching websites, campaigns, content, positioning, or AI initiatives, Reality Check shows what the market can actually understand, utilize, and carry forward into a decision.",
        "It is not about generating more noise, but about strengthening the company's external readability. By diagnosing where the market hesitates or where signals fail, you can prioritize efforts far more accurately.",
        "The result is that your next marketing investment is built on documented external reality rather than internal gut feelings."
      ]
    },
    {
      key: 'sales',
      icon: Handshake,
      image: plxMarketBridge,
      titleDa: "Salg",
      titleEn: "Sales",
      subDa: "Når salg mærker interesse uden tilstrækkelig beslutning",
      subEn: "When sales senses interest without a sufficient decision-making basis",
      ctaDa: "Afklar om Reality Check er relevant for jer",
      ctaEn: "Clarify whether Reality Check is relevant for you",
      parasDa: [
        "Når salg mærker interesse uden tilstrækkelig beslutning, kan Reality Check vise, hvor friktionen opstår før eller under salgsdialogen — i markedssignalet, værdiforklaringen, dokumentationen eller buying group’ens interne forsvar.",
        "Ofte er dialogen god og relationen stærk, men beslutningerne trækker i langdrag, fordi kunden mangler det nødvendige grundlag for at forklare og forsvare valget internt i deres egen organisation.",
        "Reality Check giver jer de præcise indsigter, der skal til for at fjerne denne friktion og gøre det nemt for kunden at vælge jer til."
      ],
      parasEn: [
        "When sales experiences customer interest without a sufficient decision-making outcome, Reality Check can reveal where friction arises before or during the sales dialogue — in the market signal, value explanation, documentation, or the buying group's internal alignment.",
        "Often, the dialogue is excellent and the relationship is strong, yet decisions drag on because the client lacks the necessary foundation to explain and defend the choice internally within their own organization.",
        "Reality Check provides the precise insights needed to remove this friction and make it simple for the customer to confidently choose you."
      ]
    },
    {
      key: 'coo',
      icon: Settings,
      image: plxStrategicSteps,
      titleDa: "Drift / COO",
      titleEn: "Operations / COO",
      subDa: "Når operationelle initiativer skal kobles til markedets virkelighed",
      subEn: "When operational initiatives must be coupled with market reality",
      ctaDa: "Afklar om Reality Check er relevant for jer",
      ctaEn: "Clarify whether Reality Check is relevant for you",
      parasDa: [
        "Når operationelle initiativer skal kobles til markedets virkelighed, kan Reality Check vise, om det synlige signal understøtter den position, effektivitet og troværdighed, I ønsker at stå med.",
        "Hvis den interne leveranceevne og de faglige processer er stærkere end det, markedet faktisk kan se udefra, går vigtig kommerciel styrke tabt.",
        "Reality Check skaber bro mellem organisationens faktiske kapacitet og markedets reelle opfattelse, så jeres leverancesignal understøtter jeres kommercielle ambitioner."
      ],
      parasEn: [
        "When operational initiatives must be coupled with market reality, Reality Check can show whether your visible signal supports the positioning, efficiency, and credibility you wish to project.",
        "If your internal delivery capability and professional processes are stronger than what the market can actually see from the outside, vital commercial strength is lost.",
        "Reality Check bridges the gap between your actual organizational capacity and the market's perception, ensuring your delivery signal fully backs your commercial ambitions."
      ]
    },
    {
      key: 'chro',
      icon: Users,
      image: plxValueMarble,
      titleDa: "HR / CHRO",
      titleEn: "HR / CHRO",
      subDa: "Når employer brand og organisationens eksterne troværdighed skal styrkes",
      subEn: "When employer branding, recruitment, or external credibility must be strengthened",
      ctaDa: "Afklar om Reality Check er relevant for jer",
      ctaEn: "Clarify whether Reality Check is relevant for you",
      parasDa: [
        "Når employer brand, rekruttering eller organisationens eksterne troværdighed er afhængig af, hvordan I bliver læst udefra, kan Reality Check vise, om jeres synlige signal understøtter den virkelighed, I ønsker at tiltrække mennesker til.",
        "Det handler om at sikre overensstemmelse mellem den interne kultur og det eksterne aftryk. Hvis medarbejdere, kandidater og samarbejdspartnere møder modstridende signaler, svækkes troværdigheden.",
        "Reality Check hjælper med at kortlægge og rette disse signaler, så organisationens reelle styrke og formål står klart og troværdigt frem."
      ],
      parasEn: [
        "When employer branding, recruitment, or the organization's external credibility depends on how you are read from the outside, Reality Check can show whether your visible signal supports the reality you wish to attract people to.",
        "It is about ensuring alignment between internal culture and your external footprint. If employees, candidates, and partners encounter conflicting signals, credibility is weakened.",
        "Reality Check helps map and correct these signals, so the organization's genuine strength and purpose stand out clearly and credibly."
      ]
    },
    {
      key: 'board',
      icon: Landmark,
      image: plxDecisionNotebook,
      titleDa: "Bestyrelse / ejerkreds",
      titleEn: "Board / Owners",
      subDa: "Når bestyrelse eller ejerkreds skal vurdere næste kommercielle træk",
      subEn: "When the board or ownership needs to evaluate the next commercial move",
      ctaDa: "Afklar om Reality Check er relevant for jer",
      ctaEn: "Clarify whether Reality Check is relevant for you",
      parasDa: [
        "Når bestyrelse eller ejerkreds skal vurdere næste kommercielle træk, giver Reality Check et eksternt beslutningsgrundlag før større investeringer i marked, brand, salg, website eller go-to-market.",
        "Ved at vurdere virksomhedens kommercielle læsbarhed udefra-ind reduceres den strategiske risiko markant. I får et objektivt billede af, om virksomheden kan vælges og skaleres selvstændigt uden tunge personafhængige forklaringer.",
        "Det ruster bestyrelsen til at yde optimal strategisk sparring og træffe langsigtede beslutninger på et dokumenteret grundlag."
      ],
      parasEn: [
        "When the board or ownership needs to evaluate the next commercial move, Reality Check provides an external decision foundation before major investments in markets, brand, sales, websites, or go-to-market.",
        "By assessing the company's commercial readability from the outside-in, strategic risk is significantly reduced. You get an objective picture of whether the business can be chosen and scaled independently, without heavy dependency on personal explanations.",
        "This equips the board to provide optimal strategic guidance and make long-term decisions on a documented foundation."
      ]
    },
    {
      key: 'owner',
      icon: Key,
      image: plxAiLaptop,
      titleDa: "Ejerlederen",
      titleEn: "The Owner-Manager",
      subDa: "Når virksomheden skal kunne forstås, vælges og skaleres uden jer i rummet",
      subEn: "When the company must be understood, chosen, and scaled without you in the room",
      ctaDa: "Afklar om Reality Check er relevant for jer",
      ctaEn: "Clarify whether Reality Check is relevant for you",
      parasDa: [
        "Når ejerledede virksomheder skal skaleres eller gøres klar til næste generation eller ejerkreds, skal værdien kunne forstås uden ejerens personlige tilstedeværelse.",
        "Reality Check viser, hvordan virksomhedens signal og dokumentation fremstår selvstændigt, når I ikke selv sidder i rummet for at udfylde hullerne.",
        "Det danner et solidt fundament for at professionalisere markedsindsatsen, styrke salget og øge virksomhedens langsigtede værdi."
      ],
      parasEn: [
        "When owner-managed companies need to scale or prepare for the next generation or ownership structure, the value proposition must be understood without the owner's personal presence.",
        "Reality Check shows how the company's signal and documentation appear independently when you are not personally in the room to fill in the blanks.",
        "This forms a solid foundation for professionalizing market efforts, strengthening sales, and increasing long-term enterprise value."
      ]
    }
  ];

  const activeRoleData = rolesList.find(r => r.key === activeRole) || rolesList[0];

  return (
    <div className="py-16 md:py-24 max-w-5xl mx-auto w-full px-6 space-y-16 text-left" id="view-whouses">
      
      {/* Intro section */}
      <div className="space-y-6">
        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase border-b border-brand-accent/20 pb-1">
          {lang === 'da' ? 'KOMMERCIELLE ANVENDELSER' : 'COMMERCIAL APPLICATIONS'}
        </span>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-brand-charcoal leading-tight tracking-tight">
          {lang === 'da' ? 'Hvem bruger PeopleLab X' : 'Who uses PeopleLab X'} — <br />
          <span className="text-brand-accent">
            {lang === 'da' ? 'og til hvad?' : 'and for what?'}
          </span>
        </h1>
        
        <p className="text-sm sm:text-base text-brand-muted font-sans leading-relaxed max-w-3xl">
          {lang === 'da' ? (
            <>
              Behovet for Reality Check kan opstå i ledelse, marketing, salg, økonomi, drift, ejerkreds eller bestyrelse — alt efter hvilken beslutning I står foran. Værdien er den samme: et eksternt beslutningsgrundlag, før I vælger retning, investering eller næste kommercielle initiativ.
            </>
          ) : (
            <>
              The need for a Reality Check can arise in executive management, marketing, sales, finance, operations, ownership, or the board — depending on the decision your company is facing. The value is the same: an external decision foundation before choosing your direction, investment, or next commercial initiative.
            </>
          )}
        </p>
      </div>

      {/* Diagnostic situations block */}
      <div className="bg-brand-card/70 border border-brand-border p-6 sm:p-8 rounded-lg text-xs sm:text-sm text-brand-charcoal space-y-4 shadow-sm">
        <p className="font-bold text-brand-charcoal font-sans text-sm">
          {lang === 'da' ? 'Står I overfor en af følgende situationer?' : 'Are you facing any of the following scenarios?'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 font-sans">
          <div className="flex items-start space-x-2">
            <span className="text-brand-accent font-bold">↳</span>
            <span>{lang === 'da' ? 'Skal I ændre positionering?' : 'Are you about to change positioning?'}</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-brand-accent font-bold">↳</span>
            <span>{lang === 'da' ? 'Investere i nyt website?' : 'Invest in a new website?'}</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-brand-accent font-bold">↳</span>
            <span>{lang === 'da' ? 'Styrke salget?' : 'Strengthen sales?'}</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-brand-accent font-bold">↳</span>
            <span>{lang === 'da' ? 'Forbedre marketingeffekt?' : 'Improve marketing effectiveness?'}</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-brand-accent font-bold">↳</span>
            <span>{lang === 'da' ? 'Gå ind i et nyt marked?' : 'Enter a new market?'}</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-brand-accent font-bold">↳</span>
            <span>{lang === 'da' ? 'Arbejde med AI, CRM, content eller go-to-market?' : 'Work with AI, CRM, content, or go-to-market?'}</span>
          </div>
          <div className="flex items-start space-x-2 sm:col-span-2">
            <span className="text-brand-accent font-bold">↳</span>
            <span>{lang === 'da' ? 'Eller forstå, hvorfor markedet ikke reagerer stærkt nok?' : 'Or understand why the market is not reacting strongly enough?'}</span>
          </div>
        </div>
        <p className="text-xs text-brand-muted pt-3 border-t border-brand-border font-sans leading-relaxed">
          {lang === 'da' ? (
            "En PeopleLab X-analyse giver et eksternt beslutningsgrundlag. Analysen viser, hvordan markedet faktisk kan læse, forstå, stole på og vurdere jer ud fra det, der allerede er synligt. Den kan initieres af én funktion – men skaber ofte værdi på tværs af hele ledelsesgruppen."
          ) : (
            "A PeopleLab X analysis provides an external decision foundation. The analysis reveals how the market actually reads, understands, trusts, and evaluates you based on what is already visible. It can be initiated by a single function – but often creates value across the entire leadership team."
          )}
        </p>
      </div>

      {/* Interactive roles matrix */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
        
        {/* Left Roles Selector Stack */}
        <div className="md:col-span-4 flex flex-col gap-1.5 overflow-x-auto md:overflow-x-visible pb-3 md:pb-0 scrollbar-none flex-row md:flex-col">
          {rolesList.map((role) => {
            const RoleIcon = role.icon;
            const isSelected = activeRole === role.key;
            return (
              <button
                key={role.key}
                onClick={() => setActiveRole(role.key)}
                className={`flex items-center space-x-3 px-4 py-3 rounded text-left transition-all cursor-pointer whitespace-nowrap md:whitespace-normal border flex-shrink-0 md:flex-shrink-0 ${
                  isSelected 
                    ? 'bg-brand-charcoal text-white border-brand-charcoal shadow-md' 
                    : 'bg-brand-card hover:bg-brand-bg text-brand-charcoal border-brand-border hover:border-brand-accent/40'
                }`}
              >
                <RoleIcon size={14} className={isSelected ? 'text-brand-accent' : 'text-brand-muted'} />
                <span className="text-xs font-mono font-bold tracking-wider uppercase">
                  {lang === 'da' ? role.titleDa : role.titleEn}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Active Role Content Area */}
        <div className="md:col-span-8 bg-brand-card border border-brand-border rounded-lg p-6 sm:p-8 flex flex-col justify-between min-h-[460px] shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
              className="space-y-6"
            >
              {/* Header info */}
              <div className="space-y-2 border-b border-brand-border pb-4">
                <span className="text-[9px] font-mono tracking-widest text-brand-accent font-bold uppercase">
                  {lang === 'da' ? 'KOMMERCIEL RELEVANS' : 'COMMERCIAL RELEVANCE'}
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-bold text-brand-charcoal leading-tight">
                  {lang === 'da' ? activeRoleData.titleDa : activeRoleData.titleEn} — <span className="text-brand-accent font-medium">{lang === 'da' ? activeRoleData.subDa : activeRoleData.subEn}</span>
                </h3>
              </div>

              {/* Grid split inside the active role card */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Left side: Paragraphs (8 cols) */}
                <div className="md:col-span-8 text-xs sm:text-sm text-brand-muted space-y-4 leading-relaxed font-sans">
                  {(lang === 'da' ? activeRoleData.parasDa : activeRoleData.parasEn).map((para, idx) => (
                    <p key={idx} className={idx === (lang === 'da' ? activeRoleData.parasDa.length - 1 : activeRoleData.parasEn.length - 1) ? "font-semibold text-brand-charcoal pt-1" : ""}>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Right side: Illustration (4 cols) */}
                <div className="md:col-span-4 flex flex-col items-center">
                  <div className="relative group overflow-hidden rounded border border-brand-border/80 shadow-sm w-full aspect-square bg-brand-bg/50">
                    <img 
                      src={activeRoleData.image} 
                      alt={lang === 'da' ? activeRoleData.titleDa : activeRoleData.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-charcoal/5 mix-blend-overlay"></div>
                  </div>
                  <div className="mt-2 text-[9px] font-mono text-brand-muted text-center tracking-wider uppercase">
                    {lang === 'da' ? 'Strategisk fokus' : 'Strategic perspective'}
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
              <span>{lang === 'da' ? activeRoleData.ctaDa : activeRoleData.ctaEn}</span>
              <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Conclusion block: Én analyse. Flere anvendelser. */}
      <div className="bg-brand-card/30 border border-brand-border rounded p-6 sm:p-8 space-y-4 max-w-4xl mx-auto text-center mt-8">
        <h3 className="text-base font-bold text-brand-charcoal font-sans">
          {lang === 'da' ? 'Én analyse. Flere anvendelser.' : 'One analysis. Multiple applications.'}
        </h3>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans max-w-2xl mx-auto">
          {lang === 'da' ? (
            "Det afgørende er ikke, hvor i organisationen behovet opstår. Det afgørende er, at Reality Check giver et eksternt beslutningsgrundlag, før I bruger tid, budget og ledelseskraft på næste store initiativ."
          ) : (
            "The crucial factor is not where in the organization the need arises. What matters is that Reality Check provides an external decision foundation before you spend time, budget, and leadership energy on your next major initiative."
          )}
        </p>
        <p className="text-xs sm:text-sm text-brand-charcoal font-semibold font-sans max-w-2xl mx-auto">
          {lang === 'da' ? (
            "Reality Check viser, hvad markedet faktisk kan se, forstå, stole på og forsvare. Det sikrer, at jeres næste kommercielle investering ikke bygger på interne antagelser, men på den synlige eksterne virkelighed."
          ) : (
            "Reality Check shows what the market can actually see, understand, trust, and defend. This ensures that your next commercial investment is not based on internal assumptions, but on visible external reality."
          )}
        </p>
        <div className="pt-4 flex justify-center">
          <button
            onClick={onNavigateToContact}
            className="inline-flex items-center space-x-2 bg-brand-accent hover:bg-brand-charcoal text-white px-5 py-2.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider transition-all shadow-md group cursor-pointer"
          >
            <span>{lang === 'da' ? 'Afklar om Reality Check er relevant for jer' : 'Clarify whether Reality Check is relevant for you'}</span>
            <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

    </div>
  );
}
