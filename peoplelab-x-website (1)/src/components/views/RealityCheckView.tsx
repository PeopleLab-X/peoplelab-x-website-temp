import React from 'react';
import { Language } from '../../types';

interface RealityCheckViewProps {
  lang: Language;
  onNavigateToContact: () => void;
  onNavigateToIndikator?: () => void;
  image?: string;
}

export default function RealityCheckView({ lang, onNavigateToContact, onNavigateToIndikator, image }: RealityCheckViewProps) {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto w-full px-6 space-y-16" id="view-reality-check">
      
      {/* 1. Hero Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-brand-border pb-10">
        <div className="md:col-span-7 space-y-4 text-left">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase block max-w-fit">
            {lang === 'da' ? 'KERNEN' : 'THE CORE ANALYSIS'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-semibold text-brand-charcoal tracking-tight leading-[1.15]">
            PeopleLab X Reality Check
          </h1>
          <p className="text-lg md:text-xl text-brand-accent font-semibold leading-snug">
            {lang === 'da' 
              ? 'Få virksomheden læst udefra, før I investerer videre.' 
              : 'Get your company read from the outside, before you invest further.'}
          </p>
        </div>
        {image && (
          <div className="md:col-span-5 relative aspect-[16/10] w-full bg-brand-bg overflow-hidden border border-brand-border rounded shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent z-10" />
            <img 
              src={image} 
              alt="PeopleLab X Reality Check" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-95"
            />
          </div>
        )}
      </div>

      {/* 2. Core Body and IP Language (The 42 signal- and decision-area sentence) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-brand-muted font-bold">
            {lang === 'da' ? 'DIAGNOSEN' : 'THE DIAGNOSIS'}
          </h3>
        </div>
        <div className="md:col-span-8 text-sm sm:text-base text-brand-charcoal leading-relaxed font-sans space-y-4">
          {lang === 'da' ? (
            <>
              <p>
                Reality Check er en uafhængig outside-in-diagnose af jeres synlige kommercielle fodaftryk. Den viser, hvor markedet forstår jer, hvor det misforstår jer, hvor værdien bliver uklar, og hvad ledelsen bør gøre tydeligere, før næste store beslutning træffes.
              </p>
              <p className="font-semibold text-brand-charcoal">
                PeopleLab X analyserer sammenhængen mellem 42 signal- og beslutningsområder — fra position, dokumentation, cases og value clarity til AI-repræsentation, buying group-forsvarbarhed og synlige markedsvalg. Resultatet er ikke en metodegennemgang. Det er en ledelsesdiagnose.
              </p>
            </>
          ) : (
            <>
              <p>
                Reality Check is an independent outside-in-diagnose of your visible commercial footprint. It shows where the market understands you, where it misunderstands you, where the value becomes unclear, and what leadership should make clearer before the next decision is made.
              </p>
              <p className="font-semibold text-brand-charcoal">
                PeopleLab X analyzes the alignment across 42 precise signal and decision areas—from position, documentation, cases, and value clarity to AI representation, buying group defensibility, and visible market choices. The result is not a methodology overview. It is an executive-grade diagnostic.
              </p>
            </>
          )}
        </div>
      </div>

      {/* 3. What Leadership Receives */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-brand-muted font-bold">
            {lang === 'da' ? 'LEDELSENS OUTPUT' : 'LEADERSHIP OUTPUT'}
          </h3>
          <p className="text-[10px] font-mono text-brand-accent uppercase tracking-wider mt-2 font-bold">
            {lang === 'da' ? 'TIDSHORISONT: 2-3 UGER' : 'TIMEFRAME: 2-3 WEEKS'}
          </p>
        </div>
        <div className="md:col-span-8 space-y-4">
          <p className="text-sm font-bold text-brand-charcoal">
            {lang === 'da' ? 'På typisk 2-3 uger får ledelsen:' : 'Within typically 2-3 weeks, leadership receives:'}
          </p>
          <ul className="space-y-3 text-sm text-brand-muted font-sans">
            {lang === 'da' ? (
              [
                'en samlet kommerciel diagnose',
                '5–8 kritiske fund',
                'én central årsagsforklaring',
                'de vigtigste perception- og evidensgaps',
                'den væsentligste kommercielle friktion',
                'det underkommunikerede potentiale',
                'den primære ledelsesprioritet',
                'konkrete krav til næste investering, brief, website, salg, AI, brand eller markedsindgang'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-brand-accent font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))
            ) : (
              [
                'a comprehensive commercial diagnosis',
                '5–8 critical findings',
                'one central causal explanation',
                'the key perception and evidence gaps',
                'the most significant commercial friction points',
                'the undercommunicated latent potential',
                'the primary leadership priority',
                'concrete requirements for your next investment, brief, website, sales, AI, brand, or market entry'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-brand-accent font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* 4. What They Can Use It For */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-border pt-8">
        <div className="md:col-span-4">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-brand-muted font-bold">
            {lang === 'da' ? 'ANVENDELSE' : 'APPLICATION'}
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4">
          <p className="text-sm font-bold text-brand-charcoal">
            {lang === 'da' ? 'I kan bruge Reality Check til at:' : 'You can use the Reality Check to:'}
          </p>
          <ul className="space-y-3 text-sm text-brand-muted font-sans">
            {lang === 'da' ? (
              [
                'beslutte, hvad der skal ændres først',
                'skrive et skarpere brief',
                'stille bedre krav til bureauer og leverandører',
                'forbedre website, cases, salgsmateriale og positionering',
                'beskytte pris og forskel',
                'vurdere om næste investering løser årsagen eller kun symptomet',
                'skabe et fælles beslutningsgrundlag i ledelsen'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-brand-accent font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))
            ) : (
              [
                'decide what should be changed first',
                'write a sharper agency brief',
                'set better requirements for agencies and suppliers',
                'improve website, cases, sales collateral, and positioning',
                'protect pricing and differentiation',
                'assess if the next investment resolves the cause or only the symptom',
                'create a unified decision basis in the leadership team'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-brand-accent font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* 5. CTA Button & Action Section */}
      <div className="border-t border-brand-border pt-12 space-y-12">
        <div className="flex justify-start">
          <button
            onClick={onNavigateToContact}
            className="px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer border-none"
          >
            {lang === 'da' ? 'Se Reality Check' : 'Request Reality Check'}
          </button>
        </div>

        {/* Secondary Indikator CTA Box */}
        <div className="bg-brand-card border border-brand-border p-8 rounded-lg space-y-4 max-w-2xl text-left shadow-sm">
          <h4 className="text-base font-sans font-black text-brand-charcoal uppercase leading-tight">
            {lang === 'da' ? 'Ikke klar til det fulde Reality Check endnu?' : 'Not ready for the full Reality Check yet?'}
          </h4>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans">
            {lang === 'da' 
              ? 'Start med en hurtig indikation af jeres kommercielle klarhed og parathed. Det tager under 4 minutter og giver jer en første retning.'
              : 'Start with a quick indication of your commercial clarity and readiness. It takes less than 4 minutes and provides a first direction.'}
          </p>
          <div className="pt-2">
            <button
              onClick={onNavigateToIndikator}
              className="px-6 py-3 border border-brand-charcoal hover:bg-brand-charcoal/5 text-brand-charcoal font-mono font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer bg-transparent"
            >
              {lang === 'da' ? 'Få en indikation først' : 'Get an indication first'}
            </button>
            <span className="block text-[10px] font-mono text-brand-muted mt-2 tracking-wider uppercase">
              {lang === 'da' ? '• 100% uforpligtende & fortroligt' : '• 100% non-binding & confidential'}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
