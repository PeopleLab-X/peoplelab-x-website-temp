import React from 'react';
import { Language } from '../../types';
import { ArrowLeft, ArrowRight, ShieldCheck, Search, Lightbulb, Users, Target, BarChart2, Eye, HelpCircle } from 'lucide-react';

interface SituationViewProps {
  lang: Language;
  onNavigateToContact: () => void;
  image?: string;
  onBackToOverview?: () => void;
}

// 1. BEFORE YOU INVEST VIEW
export function BeforeYouInvestView({ lang, onNavigateToContact, image, onBackToOverview }: SituationViewProps) {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto w-full px-6 space-y-16" id="view-before-invest">
      {/* Back button to situations list */}
      {onBackToOverview && (
        <button 
          onClick={onBackToOverview}
          className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-muted hover:text-brand-accent transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>{lang === 'da' ? 'Tilbage til situationer' : 'Back to situations'}</span>
        </button>
      )}

      {/* 1. Hero with Product Image */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-brand-border pb-12">
        <div className="md:col-span-7 space-y-4 text-left">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase block">
            {lang === 'da' ? 'KOMMERCIEL DIAGNOSE 01' : 'COMMERCIAL DIAGNOSTIC 01'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-brand-charcoal tracking-tight leading-[1.1] uppercase">
            {lang === 'da' 
              ? 'Når næste investering risikerer at løse det forkerte problem' 
              : 'When the next investment risks solving the wrong problem'}
          </h1>
          <p className="text-sm font-mono text-brand-muted uppercase tracking-wider pt-2">
            {lang === 'da' ? 'Før I investerer' : 'Before You Invest'}
          </p>
        </div>
        {image && (
          <div className="md:col-span-5 relative aspect-[16/10] w-full bg-stone-100 overflow-hidden border border-brand-border rounded shadow-md">
            <img 
              src={image} 
              alt="Before You Invest" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-100 transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
      </div>

      {/* 2. Observeret situation */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'B. OBSERVERET SITUATION' : 'B. THE OBSERVED SITUATION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Den mærkbare friktion i organisationen' : 'The feelable friction inside'}
          </h3>
        </div>
        <div className="md:col-span-8 text-base sm:text-lg text-brand-charcoal leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <p className="font-semibold text-brand-charcoal">
              Mange B2B-virksomheder mærker, at markedet ikke reagerer stærkt nok, og konkluderer hurtigt, at der skal sættes noget nyt i gang: et nyt website, en ny positionering, en kampagne, nye salgsindsatser eller AI-værktøjer. Det kan være rigtigt. Men det kan også være en dyr og ressourcekrævende måde at optimere på en uvalideret intern antagelse.
            </p>
          ) : (
            <p className="font-semibold text-brand-charcoal">
              Many B2B companies experience that the market does not respond strongly enough, quickly concluding that a major initiative is required: a new website, a repositioning campaign, fresh sales activities, or AI implementation. This may be true, but launching without verification is a costly way to optimize an unvalidated internal assumption.
            </p>
          )}
        </div>
      </div>

      {/* 3. Underliggende problem */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'C. UNDERLIGGENDE PROBLEM' : 'C. THE UNDERLYING CAUSE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad der reelt blokerer for effekten' : 'What actually blocks the impact'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p>
                Hvis markedet ikke forstår jer, ikke ser forskellen på jer og konkurrenterne, ikke stoler nok på jeres dokumentation eller ikke kan forsvare valget af jer internt, hjælper det ikke at ændre formaterne. Så risikerer I blot at gøre mere af det samme – bare i en ny og dyrere indpakning.
              </p>
              <p>
                Virksomheder bygger ofte nye platforme for at løse et sprog- eller bevisproblem. Det svarer til at bygge en flottere og dyrere højttaler, selvom signalet, der sendes igennem den, fortsat er mudret og svagt.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p>
                If the market fails to comprehend your value, cannot isolate your differentiation, lacks confidence in your indexed proof, or cannot justify choosing you to internal committees, building more infrastructure will not help. You risk producing more of the same noise – simply packaged in a fresh, expensive format.
              </p>
              <p>
                Companies often build new digital platforms to fix what is fundamentally a messaging or evidence issue. It is the equivalent of building a more beautiful and expensive speaker, while the signal transmitted through it remains muffled and weak.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 4. Det reelle spørgsmål */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'D. DET REELLE SPØRGSMÅL' : 'D. THE CRITICAL QUESTION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvorfor gætterier koster dyrt' : 'Why guessing is expensive'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              At igangsætte store, dyre kommercielle projekter uden et uafhængigt billede af markedets reelle oplevelse udefra, øger risikoen for spildt kapital. Vi skal turde spørge: Løser det kommende projekt det rigtige problem, eller flytter det blot opmærksomheden væk fra det, der rent faktisk holder salget tilbage?
            </p>
          ) : (
            <p>
              Launching large, expensive commercial projects without an independent, cold view of how the market actually experiences you from the outside increases the risk of wasted capital. We must ask: Does the upcoming project solve the correct bottleneck, or does it merely shift focus away from what is truly stalling the pipeline?
            </p>
          )}
        </div>
      </div>

      {/* 5. Reality Check undersøger */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'E. DIAGNOSTISERING' : 'E. DIAGNOSTIC SCOPE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad Reality Check undersøger' : 'What Reality Check inspects'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              Reality Check leverer en klinisk og uafhængig diagnosticering af jeres synlige markedssignal. Vi undersøger jeres website, cases, beviser, konkurrenternes positionering og markedets asynkrone indkøbspor for at kortlægge, hvor jeres differentiering står stærkt, og hvor den svækkes i markedets øjne.
            </p>
          ) : (
            <p>
              Reality Check delivers a clinical, independent audit of your public commercial signal. We inspect your website, published cases, evidence metrics, peer positions, and the digital trails left by modern self-guided buyers to locate exactly where your differentiation stands firm and where it dissolves in the eyes of the market.
            </p>
          )}
        </div>
      </div>

      {/* 6. Hvad ledelsen får ud af det */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'F. EFFEKT & RESULTATER' : 'F. STRATEGIC OUTCOMES'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Det får ledelsen ud af analysen' : 'What leadership receives'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">I kan bruge analysen direkte til at:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Sikre investeringen:</strong> Sørge for, at det næste budget bruges præcist der, hvor det skaber mest effekt for jeres win-rate.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Skærpe jeres scope:</strong> Undgå at betale eksterne bureauer for overflødige eller forkerte leverancer.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Users size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Skabe ledelseskonsensus:</strong> Etablere en fælles, faktabaseret forståelse af, hvad der virker, og hvad der skal justeres.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Forkorte time-to-market:</strong> Komme hurtigere i mål ved at fjerne unødvendig kompleksitet og retningsskift.</span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">You can leverage this diagnostic to:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Secure the investment:</strong> Ensure that your next commercial budget is deployed precisely where it drives the greatest impact on your pipeline.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Refine project scope:</strong> Avoid paying external agencies for redundant work or off-target deliverables.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Users size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Build executive consensus:</strong> Establish a unified, evidence-backed alignment in the leadership team regarding commercial priorities.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Accelerate time-to-market:</strong> Reach commercial goals faster by removing unnecessary operational complexity and scope creep.</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-brand-border pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={onNavigateToContact}
          className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer border-none shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
        >
          <span>{lang === 'da' ? 'Afklar før I investerer' : 'Clarify before you invest'}</span>
          <ArrowRight size={14} />
        </button>
        {onBackToOverview && (
          <button
            onClick={onBackToOverview}
            className="text-xs font-mono tracking-widest text-brand-muted hover:text-brand-charcoal transition-colors uppercase cursor-pointer"
          >
            {lang === 'da' ? 'Se alle 8 situationer' : 'View all 8 situations'}
          </button>
        )}
      </div>
    </div>
  );
}

// 2. FROM INTEREST TO DECISION VIEW
export function FromInterestView({ lang, onNavigateToContact, image, onBackToOverview }: SituationViewProps) {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto w-full px-6 space-y-16" id="view-interest-decision">
      {onBackToOverview && (
        <button 
          onClick={onBackToOverview}
          className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-muted hover:text-brand-accent transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>{lang === 'da' ? 'Tilbage til situationer' : 'Back to situations'}</span>
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-brand-border pb-12">
        <div className="md:col-span-7 space-y-4 text-left">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase block">
            {lang === 'da' ? 'KOMMERCIEL DIAGNOSE 02' : 'COMMERCIAL DIAGNOSTIC 02'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-brand-charcoal tracking-tight leading-[1.1] uppercase">
            {lang === 'da' 
              ? 'Når de indledende møder går godt, men beslutningen udebliver' 
              : 'When initial meetings go well, but the buying decision stalls'}
          </h1>
          <p className="text-sm font-mono text-brand-muted uppercase tracking-wider pt-2">
            {lang === 'da' ? 'Fra interesse til beslutning' : 'From Interest to Decision'}
          </p>
        </div>
        {image && (
          <div className="md:col-span-5 relative aspect-[16/10] w-full bg-stone-100 overflow-hidden border border-brand-border rounded shadow-md">
            <img 
              src={image} 
              alt="From Interest to Decision" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-100 transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
      </div>

      {/* 2. Observeret situation */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'B. OBSERVERET SITUATION' : 'B. THE OBSERVED SITUATION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Den mærkbare friktion i organisationen' : 'The feelable friction inside'}
          </h3>
        </div>
        <div className="md:col-span-8 text-base sm:text-lg text-brand-charcoal leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <p className="font-semibold text-brand-charcoal">
              Møderne forløber positivt, kunden udtrykker interesse og anerkender jeres kompetencer. Men efter møderne stopper processen. Sagen trækker ud, jeres kontaktperson svarer asynkront, og dialogen dør langsomt ud uden en egentlig forklaring. Jeres stærke indtryk omsættes ikke til en reel beslutning.
            </p>
          ) : (
            <p className="font-semibold text-brand-charcoal">
              Initial consultations go smoothly, clients are highly engaged, and they openly acknowledge your expertise. Yet, after the meeting, the process stalls. Follow-ups stretch out, your champion answers asynchronously, and the deal slowly dissolves into quiet inaction. Your excellent first impression does not translate into an actual decision.
            </p>
          )}
        </div>
      </div>

      {/* 3. Underliggende problem */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'C. UNDERLIGGENDE PROBLEM' : 'C. THE UNDERLYING CAUSE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad der reelt blokerer for effekten' : 'What actually blocks the impact'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p>
                I B2B-indkøb sker over 80% af beslutningen asynkront – uden jeres tilstedeværelse. Jeres primære kontaktperson skal gå tilbage og forsvare investeringen overfor kolleger, ledelse, finans og andre interessenter, som aldrig har mødt jer.
              </p>
              <p>
                Hvis jeres kontaktperson ikke har adgang til letforståelige, uafviselige beviser og tydeligt strukturerede cases, der retfærdiggør jeres premium-pris uafhængigt, taber de internt. Uden de rigtige asynkrone redskaber bliver det for svært og risikabelt for kunden at vælge jer over status quo.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p>
                In complex B2B buying, more than 80% of the evaluation occurs asynchronously – when you are not in the room. Your internal champion must go back and defend your proposed solution to peers, CFOs, and other board members who have never met you.
              </p>
              <p>
                If your champion lacks standalone, boardroom-ready proof points and structured use cases that justify your premium independently, they will fail. Without the proper asynchronous resources, navigating the internal risk assessment makes choosing you over status quo too difficult.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 4. Det reelle spørgsmål */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'D. DET REELLE SPØRGSMÅL' : 'D. THE CRITICAL QUESTION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvorfor gætterier koster dyrt' : 'Why guessing is expensive'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              At tro, at stærke personlige relationer alene kan bære en kompleks B2B-beslutning igennem til underskrift, er en dyr fejlantagelse. Vi skal spørge os selv: Er vores digitale og skriftlige materiale stærkt nok til at sælge og forsvare jeres løsning uafhængigt, når vi ikke selv sidder med ved bordet?
            </p>
          ) : (
            <p>
              Believing that excellent personal relationships alone can carry a complex B2B buying decision is a costly assumption. We must ask ourselves: Is our public, asynchronous collateral structured well enough to defend our premium independently when we are not present to address doubts?
            </p>
          )}
        </div>
      </div>

      {/* 5. Reality Check undersøger */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'E. DIAGNOSTISERING' : 'E. DIAGNOSTIC SCOPE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad Reality Check undersøger' : 'What Reality Check inspects'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              Reality Check kortlægger jeres kommercielle materialer udefra-ind. Vi analyserer, om jeres use cases, webelementer og dokumentation reelt klæder jeres interne ambassadører på til at forsvare jeres værdi, dæmpe risiko og lukke informationstab under de asynkrone, interne møder hos kunden.
            </p>
          ) : (
            <p>
              Reality Check maps your public assets from an outside-in perspective. We evaluate whether your use cases, digital evidence, and documentation actually arm your internal champions to defend your value, reduce risk perceptions, and prevent information loss during asynchronous internal screenings.
            </p>
          )}
        </div>
      </div>

      {/* 6. Hvad ledelsen får ud af det */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'F. EFFEKT & RESULTATER' : 'F. STRATEGIC OUTCOMES'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Det får ledelsen ud af analysen' : 'What leadership receives'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">I kan bruge analysen direkte til at:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Klæde ambassadører på:</strong> Gøre det nemt for jeres kontaktpersoner at forklare og forsvare jeres premium-pris internt.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Fjerne købsfriktion:</strong> Lukke de dokumentationshuller, der skaber unødig tvivl hos kolde beslutningstagere.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Users size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Forkorte salgsrejsen:</strong> Gøre det nemmere og hurtigere for kunden at sige ja uafhængigt af jeres tilstedeværelse.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Beskytte jeres win-rate:</strong> Forhindre at spændende leads og varme møder dør ud i asynkron stilhed.</span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">You can leverage this diagnostic to:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Arm your champions:</strong> Supply your contact persons with standalone, boardroom-ready evidence that defends your margins.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Eliminate buying friction:</strong> Close information gaps that generate risk perception among colder executive board members.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Users size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Compress sales cycles:</strong> Make it dramatically simpler and faster for accounts to execute a buying decision asynchronously.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Protect pipeline win-rates:</strong> Prevent high-quality initial meetings from evaporating into quiet, chronic indecision.</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-brand-border pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={onNavigateToContact}
          className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer border-none shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
        >
          <span>{lang === 'da' ? 'Afklar hvorfor interesse ikke bliver til beslutning' : 'Clarify why interest does not turn into a decision'}</span>
          <ArrowRight size={14} />
        </button>
        {onBackToOverview && (
          <button
            onClick={onBackToOverview}
            className="text-xs font-mono tracking-widest text-brand-muted hover:text-brand-charcoal transition-colors uppercase cursor-pointer"
          >
            {lang === 'da' ? 'Se alle 8 situationer' : 'View all 8 situations'}
          </button>
        )}
      </div>
    </div>
  );
}

// 3. VALUE DEFENSIBILITY VIEW
export function ValueDefensibilityView({ lang, onNavigateToContact, image, onBackToOverview }: SituationViewProps) {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto w-full px-6 space-y-16" id="view-value-defensibility">
      {onBackToOverview && (
        <button 
          onClick={onBackToOverview}
          className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-muted hover:text-brand-accent transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>{lang === 'da' ? 'Tilbage til situationer' : 'Back to situations'}</span>
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-brand-border pb-12">
        <div className="md:col-span-7 space-y-4 text-left">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase block">
            {lang === 'da' ? 'KOMMERCIEL DIAGNOSE 03' : 'COMMERCIAL DIAGNOSTIC 03'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-brand-charcoal tracking-tight leading-[1.1] uppercase">
            {lang === 'da' 
              ? 'Når jeres værdi skal kunne forsvares' 
              : 'When your value must be defended'}
          </h1>
          <p className="text-sm font-mono text-brand-muted uppercase tracking-wider pt-2">
            {lang === 'da' ? 'Værdi der kan begrundes' : 'Value That Can Be Justified'}
          </p>
        </div>
        {image && (
          <div className="md:col-span-5 relative aspect-[16/10] w-full bg-stone-100 overflow-hidden border border-brand-border rounded shadow-md">
            <img 
              src={image} 
              alt="Value Defensibility" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-100 transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
      </div>

      {/* 2. Observeret situation */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'B. OBSERVERET SITUATION' : 'B. THE OBSERVED SITUATION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Den mærkbare friktion i organisationen' : 'The feelable friction inside'}
          </h3>
        </div>
        <div className="md:col-span-8 text-base sm:text-lg text-brand-charcoal leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <p className="font-semibold text-brand-charcoal">
              Prispres starter sjældent i indkøb eller procurement. Det starter meget tidligere. Det sker, når markedet ikke kan se jeres reelle forskel tydeligt nok udefra. Når jeres faglige tyngde kræver for meget mundtlig forklaring, og kunden ikke selv kan begrunde, hvorfor I er det sikreste valg over billigere alternativer.
            </p>
          ) : (
            <p className="font-semibold text-brand-charcoal">
              Margin compression rarely originates in the procurement department. It initiates much earlier: when the market fails to see your structural differentiation. If the buying group cannot independently defend why you are worth more than cheaper peers, price takes over as the easiest metrics.
            </p>
          )}
        </div>
      </div>

      {/* 3. Underliggende problem */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'C. UNDERLIGGENDE PROBLEM' : 'C. THE UNDERLYING CAUSE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad der reelt blokerer for effekten' : 'What actually blocks the impact'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p>
                Når kunden ikke selv kan forklare, hvorfor valget af jer er mindre risikabelt eller mere værdifuldt, reduceres I til en sammenlignelig commodity. I kan have stærk kvalitet, erfaring og resultater, men hvis forskellen ikke er krystalskarpt beskrevet og maskinlæsbar udefra, kan den ikke bruges som beslutningsparameter.
              </p>
              <p>
                Uden klare, synlige spor, der beviser jeres værdiforskel asynkront, overlades jeres pris til tilfældigheder. Indkøbere vil pille jeres argumenter fra hinanden, fordi I ikke har tilgængeligt bevisbyrde-materiale, der gør jeres premium-pris logisk uundgåelig.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p>
                When a prospect fails to articulate why selecting you is less risky, more valuable, or operationally superior, price remains their only tangible baseline. You may possess superior quality, heritage, and methodology. Yet, if that variance is invisible from the outside, it cannot influence their purchasing spreadsheet.
              </p>
              <p>
                Absent sharp, public-facing evidence that validates your premium, your price point is left completely unprotected. Procurement officers will commoditize your proposals because you have neglected to index the hard proof that makes your premium pricing logically unavoidable.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 4. Det reelle spørgsmål */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'D. DET REELLE SPØRGSMÅL' : 'D. THE CRITICAL QUESTION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvorfor gætterier koster dyrt' : 'Why guessing is expensive'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              Markedet betaler ikke for den værdi, det ikke selv kan aflæse – og købsbeslutningstagere forsvarer ikke en premium-pris, de ikke kan dokumentere. At fortsætte med at pitche "høj kvalitet" uden asynkrope kildebeviser er en dyr vej, der tvinger jeres salgsorganisation til at give rabatter for at lukke aftaler.
            </p>
          ) : (
            <p>
              The market refuses to pay for value it cannot easily decode. And buying groups are incapable of defending a premium they cannot document. Pitching "high quality" without structured, public-facing evidence is an expensive strategy that forces your commercial engine to rely on discounts to hit quarterly quotas.
            </p>
          )}
        </div>
      </div>

      {/* 5. Reality Check undersøger */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'E. DIAGNOSTISERING' : 'E. DIAGNOSTIC SCOPE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad Reality Check undersøger' : 'What Reality Check inspects'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              Reality Check afdækker, hvor jeres værdiforskel står stærkt udefra, og hvor den udvandes i markedets øjne. Vi analyserer jeres webelementer, cases, konkurrentbillede og asynkrone salgsspor for at se, om markedet får et solidt grundlag for at forstå, tro på og begrunde jeres pris uafhængigt.
            </p>
          ) : (
            <p>
              Reality Check maps exactly where your competitive advantage is highlighted – and where it evaporates in the eyes of the market. We evaluate your website, indexed cases, proof material, marketing copy, and peer positions to discover if the public domain provides enough material to justify your premium.
            </p>
          )}
        </div>
      </div>

      {/* 6. Hvad ledelsen får ud af det */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'F. EFFEKT & RESULTATER' : 'F. STRATEGIC OUTCOMES'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Det får ledelsen ud af analysen' : 'What leadership receives'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">I kan bruge analysen direkte til at:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Forsvare pris premium:</strong> Sikre at jeres differentiering er synlig og uafviselig for eksterne købere.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Gøre værdien synlig:</strong> Strukturere jeres faglige substans så den ikke kræver lange personlige møder at forklare.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Users size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Rust salg til værdidialog:</strong> Give salgsteamet de præcise beviser, der neutraliserer koldt prispres tidligt.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Styrke premium position:</strong> Sikre at markedet betaler for jeres reelle kvalitet, ikke jeres laveste fællesnævner.</span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">You can leverage this diagnostic to:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Protect pricing premium:</strong> Verify that your competitive margins are completely insulated and publically backed.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Expose latent value:</strong> Re-structure complex capabilities so they don't require lengthy physical meetings to explain.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Users size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Arm sales for value dialogues:</strong> Supply reps with the exact public evidence needed to neutralize commoditization.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Secure true premium status:</strong> Guarantee that the market pays for your actual calibre, rather than a discounted compromise.</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-brand-border pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={onNavigateToContact}
          className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer border-none shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
        >
          <span>{lang === 'da' ? 'Afklar om jeres værdi kan forsvares' : 'Clarify whether your value can be defended'}</span>
          <ArrowRight size={14} />
        </button>
        {onBackToOverview && (
          <button
            onClick={onBackToOverview}
            className="text-xs font-mono tracking-widest text-brand-muted hover:text-brand-charcoal transition-colors uppercase cursor-pointer"
          >
            {lang === 'da' ? 'Se alle 8 situationer' : 'View all 8 situations'}
          </button>
        )}
      </div>
    </div>
  );
}

// 4. BUYER-LED AND AI READINESS VIEW
export function BuyerLedView({ lang, onNavigateToContact, image, onBackToOverview }: SituationViewProps) {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto w-full px-6 space-y-16" id="view-buyer-led">
      {onBackToOverview && (
        <button 
          onClick={onBackToOverview}
          className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-muted hover:text-brand-accent transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>{lang === 'da' ? 'Tilbage til situationer' : 'Back to situations'}</span>
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-brand-border pb-12">
        <div className="md:col-span-7 space-y-4 text-left">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase block">
            {lang === 'da' ? 'KOMMERCIEL DIAGNOSE 04' : 'COMMERCIAL DIAGNOSTIC 04'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-brand-charcoal tracking-tight leading-[1.1] uppercase">
            {lang === 'da' 
              ? 'Når markedet og AI-systemer vurderer jer, før I får ordet' 
              : 'When the market and AI agents vet you before you speak'}
          </h1>
          <p className="text-sm font-mono text-brand-muted uppercase tracking-wider pt-2">
            {lang === 'da' ? 'Klarhed før dialogen' : 'Clarity Before Dialogue'}
          </p>
        </div>
        {image && (
          <div className="md:col-span-5 relative aspect-[16/10] w-full bg-stone-100 overflow-hidden border border-brand-border rounded shadow-md">
            <img 
              src={image} 
              alt="Buyer-Led and AI Readiness" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-100 transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
      </div>

      {/* 2. Observeret situation */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'B. OBSERVERET SITUATION' : 'B. THE OBSERVED SITUATION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Den mærkbare friktion i organisationen' : 'The feelable friction inside'}
          </h3>
        </div>
        <div className="md:col-span-8 text-base sm:text-lg text-brand-charcoal leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <p className="font-semibold text-brand-charcoal">
              Moderne B2B-købere researcher asynkront. De går ikke til salgsmøder for at blive informeret; de går til møder for at bekræfte det, de allerede tror, de ved. Samtidig sorterer og filtrerer AI-modeller (ChatGPT, Claude, Gemini) markedet og udarbejder "vendor-lister" for travle ledere baseret udelukkende på jeres tilgængelige digitale substans.
            </p>
          ) : (
            <p className="font-semibold text-brand-charcoal">
              Modern B2B buyers research asynchronously. They don't attend sales meetings to get informed; they attend meetings to verify what they already believe they know. Concurrently, LLM search engines and AI systems (ChatGPT, Claude, Gemini) scrub, sort, and filter the market, drafting "vendor lists" for busy decision-makers based entirely on your publicly available substance.
            </p>
          )}
        </div>
      </div>

      {/* 3. Underliggende problem */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'C. UNDERLIGGENDE PROBLEM' : 'C. THE UNDERLYING CAUSE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad der reelt blokerer for effekten' : 'What actually blocks the impact'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p>
                Hvis jeres kildebeviser, cases og faglige dybde ikke er let tilgængelige, maskinlæsbare eller optimeret til asynkront indkøb, risikerer I tidlig frasortering. AI og moderne indkøbere læser ikke jeres interne ambitioner; de forholder sig kun til jeres synlige, strukturerede data.
              </p>
              <p>
                Hvis jeres faglige tyngde, metodik, sikkerhed og cases ligger skjult bag firewall-logins, uindekserede PDF-filer eller kun findes i jeres sælgeres hoveder, eksisterer de v praksis ikke for den AI-baserede research, der danner kundernes langliste.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p>
                If your source evidence, use cases, and technical depth are not structured for machine readability or optimized for self-guided buyer evaluation, you get filtered out early. AI bots and modern buyers do not read your internal ambitions; they parse only your actual indexed files, structures, and digital footprints.
              </p>
              <p>
                If your credentials, expert methodologies, security compliance, and cases reside behind firewalls, in non-indexed PDFs, or exclusively inside your employees' minds, they simply do not exist for the automated systems compiling your prospective customers' vendor lists.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 4. Det reelle spørgsmål */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'D. DET REELLE SPØRGSMÅL' : 'D. THE CRITICAL QUESTION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvorfor gætterier koster dyrt' : 'Why guessing is expensive'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              At investere i opsøgende salg eller dyre branding-kampagner er ineffektivt, hvis jeres digitale fundament fejler i "screeningen" fra AI-systemer og asynkrone købere. I risikerer at blive valgt fra uden nogensinde at vide hvorfor, og jeres kundetilgang dør, før dialogen overhovedet begynder.
            </p>
          ) : (
            <p>
              Pouring millions into outbound sales structures or branding initiatives is entirely futile if your digital foundation fails the initial "vetting" of AI-based research and self-guided buyers. You get disqualified without ever knowing why, and your pipeline shrinks before dialogue can ever begin.
            </p>
          )}
        </div>
      </div>

      {/* 5. Reality Check undersøger */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'E. DIAGNOSTISERING' : 'E. DIAGNOSTIC SCOPE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad Reality Check undersøger' : 'What Reality Check inspects'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              Reality Check vurderer jeres asynkrone fodaftryk. Vi undersøger, om jeres metodik og cases er kognitivt nemme at afkode for mennesker, og om jeres beviser er struktureret og formateret korrekt til den søgning og AI-repræsentation, der styrer moderne asynkrone indkøb.
            </p>
          ) : (
            <p>
              Reality Check audits your public digital assets to analyze whether your use cases are cognitively lightweight for humans to process, and whether your proof points are structured, indexed, and formatted correctly for the AI-based research compiling B2B vendor shortlists.
            </p>
          )}
        </div>
      </div>

      {/* 6. Hvad ledelsen får ud af det */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'F. EFFEKT & RESULTATER' : 'F. STRATEGIC OUTCOMES'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Det får ledelsen ud af analysen' : 'What leadership receives'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">I kan bruge analysen direkte til at:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Search size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Sikre AI-synlighed:</strong> Strukturere og indeksere jeres use cases så de fanges og fremhæves af sprogmodeller.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Støtte asynkront indkøb:</strong> Gøre jeres vigtigste beviser og cases tilgængelige 24/7 for travle købere.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Fjerne blinde vinkler:</strong> Sikre at jeres faglige niveau afspejles korrekt i de asynkrone screeningskanaler.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Undgå tidlig fravælgelse:</strong> Sørge for at jeres virksomhed overlever "vasken" og inviteres med til dialogerne.</span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">You can leverage this diagnostic to:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Search size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Secure AI visibility:</strong> Structure and index your case metrics so AI-based research can locate and recommend you.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Insulate self-guided buyers:</strong> Make your technical advantages and compliance markers accessible 24/7.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Eliminate indexing blindspots:</strong> Ensure your actual maturity is cleanly mirrored in machine-read data.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Halt silent drop-offs:</strong> Protect your position from being filtered out in early, non-public procurement steps.</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-brand-border pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={onNavigateToContact}
          className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer border-none shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
        >
          <span>{lang === 'da' ? 'Afklar hvad markedet ser før dialogen' : 'Clarify what the market sees before dialogue'}</span>
          <ArrowRight size={14} />
        </button>
        {onBackToOverview && (
          <button
            onClick={onBackToOverview}
            className="text-xs font-mono tracking-widest text-brand-muted hover:text-brand-charcoal transition-colors uppercase cursor-pointer"
          >
            {lang === 'da' ? 'Se alle 8 situationer' : 'View all 8 situations'}
          </button>
        )}
      </div>
    </div>
  );
}

// 5. FROM SUPPLIER TO STRATEGIC RELEVANCE VIEW
export function StrategicRelevanceView({ lang, onNavigateToContact, image, onBackToOverview }: SituationViewProps) {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto w-full px-6 space-y-16" id="view-strategic-relevance">
      {onBackToOverview && (
        <button 
          onClick={onBackToOverview}
          className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-muted hover:text-brand-accent transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>{lang === 'da' ? 'Tilbage til situationer' : 'Back to situations'}</span>
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-brand-border pb-12">
        <div className="md:col-span-7 space-y-4 text-left">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase block">
            {lang === 'da' ? 'KOMMERCIEL DIAGNOSE 05' : 'COMMERCIAL DIAGNOSTIC 05'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-brand-charcoal tracking-tight leading-[1.1] uppercase">
            {lang === 'da' 
              ? 'Når I vil højere op i værdikæden, men stadig læses som leverandør' 
              : 'When you want to climb the value chain, but are still read as a supplier'}
          </h1>
          <p className="text-sm font-mono text-brand-muted uppercase tracking-wider pt-2">
            {lang === 'da' ? 'Fra leverandør til strategisk relevans' : 'From Supplier to Strategic Relevance'}
          </p>
        </div>
        {image && (
          <div className="md:col-span-5 relative aspect-[16/10] w-full bg-stone-100 overflow-hidden border border-brand-border rounded shadow-md">
            <img 
              src={image} 
              alt="From Supplier to Strategic Relevance" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-100 transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
      </div>

      {/* 2. Observeret situation */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'B. OBSERVERET SITUATION' : 'B. THE OBSERVED SITUATION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Den mærkbare friktion i organisationen' : 'The feelable friction inside'}
          </h3>
        </div>
        <div className="md:col-span-8 text-base sm:text-lg text-brand-charcoal leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <p className="font-semibold text-brand-charcoal">
              I leverer kritiske løsninger og har strategisk indsigt, men kunden ser jer primært som en taktisk leverandør eller en udførende ressource. Når strategiske beslutninger træffes, sidder I ikke med ved bordet. Dialogen handler ofte om pris, detaljer og leverance i stedet for forretningsmæssig impact.
            </p>
          ) : (
            <p className="font-semibold text-brand-charcoal">
              You deliver highly critical enterprise solutions and possess deep, strategic domain expertise. Yet, your customers address you primarily as a tactical utility vendor or an execution arm. When corporate budgets are reviewed or strategic initiatives are debated, you are excluded. Conversations center around task details and hourly rates rather than business transformation.
            </p>
          )}
        </div>
      </div>

      {/* 3. Underliggende problem */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'C. UNDERLIGGENDE PROBLEM' : 'C. THE UNDERLYING CAUSE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad der reelt blokerer for effekten' : 'What actually blocks the impact'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p>
                Kundens ledelse kan ikke afkode jeres strategiske relevans ud fra jeres eksterne signaler. Hvis jeres website, cases og publicerede dokumenter primært taler et operationelt sprog, placeres I uundgåeligt i det operationelle lag.
              </p>
              <p>
                For at tages seriøst af C-level beslutningstagere skal jeres offentlige profil matche deres strategiske dagsorden. I skal bevise, at jeres ydelser hænger direkte sammen med forretningsrisiko, driftseffektivitet og strategiske balancer – ikke blot teknisk eksekvering.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p>
                The prospect's executive committee cannot isolate your strategic value from your public profile. If your website architecture, published cases, and evidence material use an operational or technical jargon, you are permanently parked in the execution basement.
              </p>
              <p>
                To earn credibility among C-level decision-makers, your external brand footprint must directly mirror their agenda. You must document that your solutions influence business risk mitigations, operational cash flow, or strategic value defensibility – not simply technical execution.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 4. Det reelle spørgsmål */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'D. DET REELLE SPØRGSMÅL' : 'D. THE CRITICAL QUESTION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvorfor gætterier koster dyrt' : 'Why guessing is expensive'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              Det er ineffektivt at forsøge at løfte sig til en strategisk partner udelukkende gennem personlige relationer, hvis jeres samlede, synlige ansigt udefra signalerer "leverandør". I ender med at vinde mindre, rådgivende opgaver på pris frem for store, langsigtede partnerskaber på ledelsesniveau.
            </p>
          ) : (
            <p>
              Attempting to elevate your positioning to a strategic partner solely through personal relationship building is highly inefficient if your corporate brand signal screams "commodity developer." You end up fighting for smaller, operational bids on razor-thin margins rather than capturing enterprise-level strategic accounts.
            </p>
          )}
        </div>
      </div>

      {/* 5. Reality Check undersøger */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'E. DIAGNOSTISERING' : 'E. DIAGNOSTIC SCOPE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad Reality Check undersøger' : 'What Reality Check inspects'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              Reality Check analyserer jeres eksterne positionering. Vi undersøger, om jeres sprog, cases og bevisbærende elementer taler direkte til en strategisk beslutningstager (CEO, CFO, bestyrelse), eller om de cementerer jer som en udskiftelig leverandør under procurement-radaren.
            </p>
          ) : (
            <p>
              Reality Check dissects the public signal and available evidence your enterprise presents. We analyze whether your vocabulary, case studies, and corporate statements engage C-level executives (CEO, CFO, Board members), or if they trap you as an easily substitutable vendor beneath the procurement radar.
            </p>
          )}
        </div>
      </div>

      {/* 6. Hvad ledelsen får ud af det */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'F. EFFEKT & RESULTATER' : 'F. STRATEGIC OUTCOMES'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Det får ledelsen ud af analysen' : 'What leadership receives'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">I kan bruge analysen direkte til at:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Løfte cases til strategisk niveau:</strong> Omstrukturere jeres referencer så de beviser forretningsmæssigt afkast.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Justere jeres sprog:</strong> Sikre at jeres eksterne signaler matcher dagsordenen hos ledelser og bestyrelser.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Users size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Vinde større mandat:</strong> Give salgsteamet den strategiske bevisbyrde, der omgår rå og kold indkøbsfokus.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Etablere værdirelevans:</strong> Undgå timebaserede priskonkurrencer og vinde store, langsigtede forretningspartnerskaber.</span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">You can leverage this diagnostic to:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Elevate case studies:</strong> Re-orient your published customer successes to document clear fiscal and strategic impact.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Calibrate messaging syntax:</strong> Match your public vocabulary with the precise priorities of the board of directors.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Users size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Secure broader mandates:</strong> Empower sales resources to bypass lower-level gatekeepers and engage executive sponsors.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Command strategic relevance:</strong> Halt pricing negotiations on hourly metrics and close long-term enterprise arrangements.</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-brand-border pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={onNavigateToContact}
          className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer border-none shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
        >
          <span>{lang === 'da' ? 'Afklar jeres strategiske relevans' : 'Clarify your strategic relevance'}</span>
          <ArrowRight size={14} />
        </button>
        {onBackToOverview && (
          <button
            onClick={onBackToOverview}
            className="text-xs font-mono tracking-widest text-brand-muted hover:text-brand-charcoal transition-colors uppercase cursor-pointer"
          >
            {lang === 'da' ? 'Se alle 8 situationer' : 'View all 8 situations'}
          </button>
        )}
      </div>
    </div>
  );
}

// 6. MARKET AND CATEGORY ENTRY READINESS VIEW
export function MarketEntryView({ lang, onNavigateToContact, image, onBackToOverview }: SituationViewProps) {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto w-full px-6 space-y-16" id="view-market-entry">
      {onBackToOverview && (
        <button 
          onClick={onBackToOverview}
          className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-muted hover:text-brand-accent transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>{lang === 'da' ? 'Tilbage til situationer' : 'Back to situations'}</span>
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-brand-border pb-12">
        <div className="md:col-span-7 space-y-4 text-left">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase block">
            {lang === 'da' ? 'KOMMERCIEL DIAGNOSE 06' : 'COMMERCIAL DIAGNOSTIC 06'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-brand-charcoal tracking-tight leading-[1.1] uppercase">
            {lang === 'da' 
              ? 'Når I går ind i et nyt marked eller en ny kategori med de forkerte antagelser' 
              : 'Entering a new category or segment with the wrong assumptions'}
          </h1>
          <p className="text-sm font-mono text-brand-muted uppercase tracking-wider pt-2">
            {lang === 'da' ? 'Nyt marked eller ny kategori' : 'New Market or Category Entry'}
          </p>
        </div>
        {image && (
          <div className="md:col-span-5 relative aspect-[16/10] w-full bg-stone-100 overflow-hidden border border-brand-border rounded shadow-md">
            <img 
              src={image} 
              alt="Market and Category Entry Readiness" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-100 transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
      </div>

      {/* 2. Observeret situation */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'B. OBSERVERET SITUATION' : 'B. THE OBSERVED SITUATION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Den mærkbare friktion i organisationen' : 'The feelable friction inside'}
          </h3>
        </div>
        <div className="md:col-span-8 text-base sm:text-lg text-brand-charcoal leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <p className="font-semibold text-brand-charcoal">
              I forbereder at gå ind på et nyt marked, henvende jer til et nyt kundesegment eller lancere en ny produktkategori. Internt giver alt god mening. Men når markedet mødes, er interessen flad. Det nye marked kender jer ikke, forstår ikke jeres kategori-afgrænsning og overfører ikke automatisk jeres gamle styrke til den nye kontekst.
            </p>
          ) : (
            <p className="font-semibold text-brand-charcoal">
              You are preparing to expand into a new regional territory, approach a completely new customer vertical, or launch a highly innovative product category. Internally, the business case is clean and the product is robust. Yet, upon market activation, the response is cold. The new audience doesn't know your heritage, doesn't grasp your category boundaries, and doesn't automatically trust your reputation.
            </p>
          )}
        </div>
      </div>

      {/* 3. Underliggende problem */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'C. UNDERLIGGENDE PROBLEM' : 'C. THE UNDERLYING CAUSE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad der reelt blokerer for effekten' : 'What actually blocks the impact'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p>
                Jeres omdømme og position på hjemmemarkedet bærer ikke over grænsen af sig selv. Hvis jeres udefra-ind signaler ikke er præcist tilpasset det nye beslutningsmiljøs sprog og friktion, taler I forbi dem fra dag ét.
              </p>
              <p>
                Nye markeder kræver en ekstrem skarphed i, hvordan jeres use cases opfattes. De har allerede alternativer og etablerede vaner. Hvis I ikke beviser, at I forstår deres specifikke udfordringer bedre end konkurrenterne, forbliver I en ligegyldig parentes.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p>
                Domestically earned trust does not cross territorial or vertical boundaries automatically. If your external signal is not calibrated to the exact friction, terms, and alternatives of the target environment, you talk past them from day one.
              </p>
              <p>
                Approaching new segments requires extreme, uncompromised readability of your core use cases. Prospects in new spaces already have legacy habits and local providers. If your public footprint fails to prove that you understand their unique vertical bottlenecks better than local peers, you remain invisible.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 4. Det reelle spørgsmål */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'D. DET REELLE SPØRGSMÅL' : 'D. THE CRITICAL QUESTION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvorfor gætterier koster dyrt' : 'Why guessing is expensive'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              At aktivere et nyt marked med store budgetter, PR-bureauer eller aggressive salgskampagner, før budskaber og signaler er valideret udefra, er risikabelt. I risikerer at brænde dyrebar go-to-market-kapital af på uafklarede og uvaliderede interne antagelser.
            </p>
          ) : (
            <p>
              Activating a brand-new territory with heavy advertising budgets, local PR agencies, or aggressive outbound sales before your public-facing signals are clinical, readable, and verified is incredibly wasteful. You burn precious GTM capital testing subjective boardroom assumptions in a cold, unforgiving market.
            </p>
          )}
        </div>
      </div>

      {/* 5. Reality Check undersøger */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'E. DIAGNOSTISERING' : 'E. DIAGNOSTIC SCOPE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad Reality Check undersøger' : 'What Reality Check inspects'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              Reality Check tester jeres eksterne parathed mod det nye segment eller markeds specifikke forretningsmæssige dagsorden. Vi undersøger, om det nye marked kan afkode, tro på og begrunde valget af jer baseret udelukkende på jeres tilgængelige digitale substans og asynkrone kildebeviser.
            </p>
          ) : (
            <p>
              Reality Check stress-tests your external maturity against the specific operational friction of the target territory. We discover whether the prospective market can decode, trust, and justify selecting your brand based entirely on your publicly available evidence and indexed proof points.
            </p>
          )}
        </div>
      </div>

      {/* 6. Hvad ledelsen får ud af det */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'F. EFFEKT & RESULTATER' : 'F. STRATEGIC OUTCOMES'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Det får ledelsen ud af analysen' : 'What leadership receives'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">I kan bruge analysen direkte til at:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Målrette budskaber:</strong> Tilpasse jeres go-to-market positionering præcist til den nye konteksts dagsorden.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Identificere dokumentationshuller:</strong> Lukke vitale huller i jeres bevisbyrde, før I igangsætter store kampagner.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Users size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Sikre hurtig kategoriforståelse:</strong> Sørge for at det nye marked straks forstår jeres use cases og differentiering.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Reducere lanceringsrisiko:</strong> Minimere risikoen for fejlslagne go-to-market investeringer og spildt kapital.</span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">You can leverage this diagnostic to:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Calibrate value narratives:</strong> Tune your GTM positioning to match the vocabulary and friction of the target vertical.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Isolate evidence deficits:</strong> Seal crucial information gaps in your public footprint prior to executing marketing plans.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Users size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Guarantee category grasp:</strong> Ensure the newly targeted market segments immediately decode your competitive variance.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Minimize expansion risk:</strong> Eradicate unvalidated boardroom hypotheses, safeguarding GTM financial expenditures.</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-brand-border pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={onNavigateToContact}
          className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer border-none shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
        >
          <span>{lang === 'da' ? 'Afklar før nyt marked eller ny kategori' : 'Clarify before new market or category'}</span>
          <ArrowRight size={14} />
        </button>
        {onBackToOverview && (
          <button
            onClick={onBackToOverview}
            className="text-xs font-mono tracking-widest text-brand-muted hover:text-brand-charcoal transition-colors uppercase cursor-pointer"
          >
            {lang === 'da' ? 'Se alle 8 situationer' : 'View all 8 situations'}
          </button>
        )}
      </div>
    </div>
  );
}

// 7. COMMERCIAL READABILITY CHECK VIEW
export function CommercialReadabilityView({ lang, onNavigateToContact, image, onBackToOverview }: SituationViewProps) {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto w-full px-6 space-y-16" id="view-commercial-readability">
      {onBackToOverview && (
        <button 
          onClick={onBackToOverview}
          className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-muted hover:text-brand-accent transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>{lang === 'da' ? 'Tilbage til situationer' : 'Back to situations'}</span>
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-brand-border pb-12">
        <div className="md:col-span-7 space-y-4 text-left">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase block">
            {lang === 'da' ? 'KOMMERCIEL DIAGNOSE 07' : 'COMMERCIAL DIAGNOSTIC 07'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-brand-charcoal tracking-tight leading-[1.1] uppercase">
            {lang === 'da' 
              ? 'Når I er stærkere på indersiden, end markedet kan afkode udefra' 
              : 'When you are stronger on the inside than the market can decode'}
          </h1>
          <p className="text-sm font-mono text-brand-muted uppercase tracking-wider pt-2">
            {lang === 'da' ? 'Kommerciel læsbarhed' : 'Commercial Readability'}
          </p>
        </div>
        {image && (
          <div className="md:col-span-5 relative aspect-[16/10] w-full bg-stone-100 overflow-hidden border border-brand-border rounded shadow-md">
            <img 
              src={image} 
              alt="Commercial Readability Check" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-100 transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
      </div>

      {/* 2. Observeret situation */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'B. OBSERVERET SITUATION' : 'B. THE OBSERVED SITUATION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Den mærkbare friktion i organisationen' : 'The feelable friction inside'}
          </h3>
        </div>
        <div className="md:col-span-8 text-base sm:text-lg text-brand-charcoal leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <p className="font-semibold text-brand-charcoal">
              Jeres leverancer, faglige dybde og resultater er uovertrufne. Når I først har kunden i hus, er de loyale og begejstrede. Men udefra ser jeres digitale tilstedeværelse generisk, tung eller direkte uforståelig ud. En travl leder kan ikke gennemskue, hvad I rent faktisk leverer af forretningsmæssig impact på under 30 sekunder.
            </p>
          ) : (
            <p className="font-semibold text-brand-charcoal">
              Your operational quality, specialized delivery, and project outcomes are truly world-class. Once accounts onboard, they remain deeply loyal and enthusiastic. Yet, from the outside, your digital presence looks generic, overly dense, or impossible to decode. A hurried decision-maker cannot parse your core value and business impact in under 30 seconds.
            </p>
          )}
        </div>
      </div>

      {/* 3. Underliggende problem */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'C. UNDERLIGGENDE PROBLEM' : 'C. THE UNDERLYING CAUSE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad der reelt blokerer for effekten' : 'What actually blocks the impact'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p>
                B2B-virksomheder lider ofte af "curse of knowledge". I forklarer jeres forretning ud fra interne processer, tekniske specifikationer og faglige detaljer i stedet for at gøre det kognitivt nemt for en ekstern køber at forstå jeres use cases og reelle resultater.
              </p>
              <p>
                Hvis kunden skal kæmpe for at forstå, hvorfor de skal vælge jer, vælger de det mest velkendte eller det billigste alternativ. Markedet har ikke tid til at gætte sig til jeres geni. Læsbarhed (readability) handler om at bringe jeres sande styrker frem i lyset, så de afkodes øjeblikkeligt.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p>
                Your leadership suffers from the classic "curse of knowledge." You articulate your enterprise based on complex internal processes and granular technical specs rather than making it cognitively effortless for an external buyer to decode your use cases and verified case studies.
              </p>
              <p>
                If a prospect has to exert cognitive energy to comprehend why choosing you is logical, they default to the legacy provider or the cheapest quote. The market lacks the patience to search for your brilliance. Commercial readability is about arranging your true calibre so it is instantly decoded.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 4. Det reelle spørgsmål */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'D. DET REELLE SPØRGSMÅL' : 'D. THE CRITICAL QUESTION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvorfor gætterier koster dyrt' : 'Why guessing is expensive'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              At kaste flere penge efter annoncering, SEO, PR eller salgskampagner øger blot trafikken til et uforståeligt eller uattraktivt markedssignal. Det øger ikke konverteringen – det gør blot jeres manglende eksterne gennemslagskraft markant dyrere.
            </p>
          ) : (
            <p>
              Scaling advertising spends, organic search optimizations, or hiring outbound sales reps simply drives traffic to an unreadable, complex signal. It fails to trigger conversions – it merely makes your public-facing ambiguity significantly more expensive to maintain.
            </p>
          )}
        </div>
      </div>

      {/* 5. Reality Check undersøger */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'E. DIAGNOSTISERING' : 'E. DIAGNOSTIC SCOPE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad Reality Check undersøger' : 'What Reality Check inspects'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              Vi diagnosticerer jeres eksterne "læsbarhed". Vi undersøger, om jeres substans, cases, referencer og værdibudskaber er præsenteret, så det er kognitivt let og umiddelbart for en travl beslutningstager at forstå jeres reelle kvalitet, differentiering og use cases på et par sekunder.
            </p>
          ) : (
            <p>
              We run a systematic diagnostic on your external "readability." We analyze whether your technical depth, case metrics, reference list, and primary value pillars are structured so a hurried executive can decode your actual quality and differentiation in seconds.
            </p>
          )}
        </div>
      </div>

      {/* 6. Hvad ledelsen får ud af det */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'F. EFFEKT & RESULTATER' : 'F. STRATEGIC OUTCOMES'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Det får ledelsen ud af analysen' : 'What leadership receives'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">I kan bruge analysen direkte til at:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Fjerne unødig kompleksitet:</strong> Præsentere jeres faglige tyngde på en umiddelbar og overbevisende måde.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Gøre use cases krystalklare:</strong> Sikre at en travl leder på under 30 sekunder forstår jeres forretningsmæssige impact.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Users size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Bringe kvaliteten frem:</strong> Sørge for at jeres reelle indre kvalitet matcher markedets første indtryk udefra.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Forbedre konverteringen:</strong> Forvandle jeres passive kanaler til overbevisende og asynkrone salgsredskaber.</span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">You can leverage this diagnostic to:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Eradicate friction:</strong> Condense expert technical jargon into lightweight, board-level strategic value propositions.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Streamline use cases:</strong> Guarantee that busy buyers immediately absorb your bottom-line relevance in under 30 seconds.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Users size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Align external optics:</strong> Ensure your spectacular operational reality matches your public digital handshake perfectly.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Boost conversion performance:</strong> Transform static website traffic into qualified, proactive, inbound B2B pipeline.</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-brand-border pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={onNavigateToContact}
          className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer border-none shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
        >
          <span>{lang === 'da' ? 'Afklar jeres kommercielle læsbarhed' : 'Clarify your commercial readability'}</span>
          <ArrowRight size={14} />
        </button>
        {onBackToOverview && (
          <button
            onClick={onBackToOverview}
            className="text-xs font-mono tracking-widest text-brand-muted hover:text-brand-charcoal transition-colors uppercase cursor-pointer"
          >
            {lang === 'da' ? 'Se alle 8 situationer' : 'View all 8 situations'}
          </button>
        )}
      </div>
    </div>
  );
}

// 8. EXECUTIVE DECISION BRIEF VIEW
export function ExecutiveDecisionBriefView({ lang, onNavigateToContact, image, onBackToOverview }: SituationViewProps) {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto w-full px-6 space-y-16" id="view-executive-decision-brief">
      {onBackToOverview && (
        <button 
          onClick={onBackToOverview}
          className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-muted hover:text-brand-accent transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>{lang === 'da' ? 'Tilbage til situationer' : 'Back to situations'}</span>
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-brand-border pb-12">
        <div className="md:col-span-7 space-y-4 text-left">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase block">
            {lang === 'da' ? 'KOMMERCIEL DIAGNOSE 08' : 'COMMERCIAL DIAGNOSTIC 08'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-brand-charcoal tracking-tight leading-[1.1] uppercase">
            {lang === 'da' 
              ? 'Når næste træk er vigtigt, skal ledelsen se virksomheden udefra først' 
              : 'Independent clarity before major commercial investments'}
          </h1>
          <p className="text-sm font-mono text-brand-muted uppercase tracking-wider pt-2">
            {lang === 'da' ? 'Eksternt beslutningsgrundlag' : 'External Decision Brief'}
          </p>
        </div>
        {image && (
          <div className="md:col-span-5 relative aspect-[16/10] w-full bg-stone-100 overflow-hidden border border-brand-border rounded shadow-md">
            <img 
              src={image} 
              alt="Executive Decision Brief" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-100 transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
      </div>

      {/* 2. Observeret situation */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'B. OBSERVERET SITUATION' : 'B. THE OBSERVED SITUATION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Den mærkbare friktion i organisationen' : 'The feelable friction inside'}
          </h3>
        </div>
        <div className="md:col-span-8 text-base sm:text-lg text-brand-charcoal leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <p className="font-semibold text-brand-charcoal">
              I står overfor en markant kommerciel beslutning eller en strategisk investering. Internt er der mange stærke meninger, historiske mønstre og måske uenighed i ledelsen eller bestyrelsen. Bureauer og leverandører presser på med hver deres løsning (nyt website, ny kampagne, nyt CRM). Men I mangler en klinisk, uafhængig vurdering af jeres reelle udgangspunkt.
            </p>
          ) : (
            <p className="font-semibold text-brand-charcoal">
              Your leadership team stands before a critical commercial milestone or a massive capital allocation. Internally, you encounter a sea of subjective employee opinions, historical biases, and boardroom debates. External agencies and technology vendors push hard for their respective systems (new websites, CRM overhauls, custom platforms). You lack a cold, objective diagnosis of your actual baseline.
            </p>
          )}
        </div>
      </div>

      {/* 3. Underliggende problem */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'C. UNDERLIGGENDE PROBLEM' : 'C. THE UNDERLYING CAUSE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad der reelt blokerer for effekten' : 'What actually blocks the impact'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p>
                Beslutninger, der tages på baggrund af interne kompromiser eller eksterne leverandørers egne kommercielle interesser, fører næsten altid til oppustede projekt-scopes, forsinkede udrulninger og spildt kapital.
              </p>
              <p>
                Uden en uafhængig diagnosticering, der har absolut nul økonomisk interesse i selve implementeringen, er I blinde for, hvad der rent faktisk svækker jeres markedssignalering. I risikerer at bruge millioner på at ombygge funktioner, som markedet alligevel ikke tillægger værdi.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p>
                Strategic choices made based on internal compromises or vendor self-interest almost inevitably lead to massive scope creep, delayed rollouts, and wasted capital.
              </p>
              <p>
                Absent a completely independent advisory assessment – with zero financial incentive to sell you subsequent implementation, programming, or management services – you are blind to where your public handshake is failing. You risk investing millions in rebuilding assets that do not target your active bottlenecks.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 4. Det reelle spørgsmål */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'D. DET REELLE SPØRGSMÅL' : 'D. THE CRITICAL QUESTION'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvorfor gætterier koster dyrt' : 'Why guessing is expensive'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              At godkende et stort budget til et nyt website, branding eller softwareudvikling uden en uafhængig diagnosticering af jeres udefra-ind status, er et risikabelt sats. Det skaber spild og forsinker den reelle forretningsmæssige effekt.
            </p>
          ) : (
            <p>
              Approving substantial capital expenditure for a corporate rebranding, a website overhaul, or complex custom software without a neutral, evidence-backed outside diagnostic of your market position is a high-risk gamble. It creates corporate waste and delays actual strategic yield.
            </p>
          )}
        </div>
      </div>

      {/* 5. Reality Check undersøger */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted font-black block">
            {lang === 'da' ? 'E. DIAGNOSTISERING' : 'E. DIAGNOSTIC SCOPE'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Hvad Reality Check undersøger' : 'What Reality Check inspects'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <p>
              Vi diagnosticerer jeres samlede synlige markedsaftryk. Da vi ikke tilbyder eller sælger implementering (websites, kodning, SEO, CRM osv.), er vores undersøgelse 100% uafhængig. Vi leverer en klinisk og ærlig analyse af, hvad markedet og maskinerne rent faktisk ser, og hvor de tøver, når de møder jer.
            </p>
          ) : (
            <p>
              We run a comprehensive diagnostic on your public commercial footprint. Because we do not offer or sell implementation services (re-programming, website building, active advertising, SEO execution, CRM configuration), our diagnostic is completely objective. We deliver a neutral, evidence-driven breakdown of what buyers and algorithms actually encounter when vetting you.
            </p>
          )}
        </div>
      </div>

      {/* 6. Hvad ledelsen får ud af det */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-black block">
            {lang === 'da' ? 'F. EFFEKT & RESULTATER' : 'F. STRATEGIC OUTCOMES'}
          </span>
          <h3 className="text-lg font-sans font-black text-brand-charcoal uppercase mt-2">
            {lang === 'da' ? 'Det får ledelsen ud af analysen' : 'What leadership receives'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-muted leading-relaxed font-sans space-y-6">
          {lang === 'da' ? (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">I kan bruge analysen direkte til at:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Få uafhængigt beslutningsgrundlag:</strong> Minimere interne diskussioner og subjektive gætterier i ledelsen.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Udfordre eksterne scopes:</strong> Skære unødvendige ydelser ud af leverandørernes tilbud og spare kapital.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Users size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Skabe ledelseskonsensus:</strong> Sikre enighed om, hvor virksomhedens reelle kommercielle friktion ligger.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Prioritere kommerciel kapital:</strong> Vide nøjagtigt hvilke investeringer, der vil flytte jeres salgstal hurtigst.</span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="font-semibold text-brand-charcoal">You can leverage this diagnostic to:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <ShieldCheck size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Secure neutral insights:</strong> Terminate subjective debates among leadership and board members with cold proof.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Target size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Audit agency specifications:</strong> Trim redundant modules or bloated budgets from external supplier RFP responses.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <Users size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Align executive alignment:</strong> Drive fast corporate alignment on where your public signal is losing client confidence.</span>
                </li>
                <li className="flex items-start space-x-2 bg-brand-card p-4 rounded border border-brand-border">
                  <BarChart2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Master capital allocation:</strong> Determine with surgical precision which initiative will compress your sales cycle fastest.</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-brand-border pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={onNavigateToContact}
          className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer border-none shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
        >
          <span>{lang === 'da' ? 'Afklar næste træk udefra' : 'Clarify your next move from the outside'}</span>
          <ArrowRight size={14} />
        </button>
        {onBackToOverview && (
          <button
            onClick={onBackToOverview}
            className="text-xs font-mono tracking-widest text-brand-muted hover:text-brand-charcoal transition-colors uppercase cursor-pointer"
          >
            {lang === 'da' ? 'Se alle 8 situationer' : 'View all 8 situations'}
          </button>
        )}
      </div>
    </div>
  );
}
