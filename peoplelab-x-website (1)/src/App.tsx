import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, Menu, X, ArrowRight, ChevronRight, CornerDownRight
} from 'lucide-react';
import { Language } from './types';
import { trackEvent } from './utils/analytics';

// Dedicated Sub-Views
import RealityCheckView from './components/views/RealityCheckView';
import RealityCheckIndikatorView from './components/views/RealityCheckIndikatorView';
import { 
  BeforeYouInvestView, 
  FromInterestView, 
  ValueDefensibilityView, 
  BuyerLedView, 
  StrategicRelevanceView, 
  MarketEntryView,
  CommercialReadabilityView,
  ExecutiveDecisionBriefView
} from './components/views/SituationViews';
import WorkView from './components/views/WorkView';
import InsightsView from './components/views/InsightsView';
import AboutView from './components/views/AboutView';
import WhoUsesView from './components/views/WhoUsesView';
import SolutionsView from './components/views/SolutionsView';
import BrancherView from './components/views/BrancherView';
import SituationsOverviewView from './components/views/SituationsOverviewView';
import AuditForm from './components/AuditForm';
import OrderRealityCheckView from './components/views/OrderRealityCheckView';
import DecisionEntrySection from './components/DecisionEntrySection';

// Premium Strategic Editorial Images (Luminous, Transparent, Dynamic Nordic style)
import heroReflectionImg from './assets/images/plx_hero_people_market_1783150977934.jpg';
import insightBriefingImg from './assets/images/plx_decision_light_1783150322324.jpg';
import plxRealityCheckHero from './assets/images/plx_hero_people_market_1783150977934.jpg';

// 8 Entry Point Images (Bright, Transparent, and Dynamic)
import plxInvestBlueprint from './assets/images/plx_invest_light_1783150309974.jpg';
import plxDecisionNotebook from './assets/images/plx_decision_light_1783150322324.jpg';
import plxValueMarble from './assets/images/plx_value_light_1783150334821.jpg';
import plxAiLaptop from './assets/images/plx_ai_light_1783150346746.jpg';
import plxStrategicSteps from './assets/images/plx_steps_light_1783150359438.jpg';
import plxMarketBridge from './assets/images/plx_bridge_light_1783150374466.jpg';
import plxReadabilityLoupe from './assets/images/plx_loupe_light_1783150389860.jpg';
import plxExecutiveBrief from './assets/images/plx_brief_light_1783150401773.jpg';

export default function App() {
  const [lang, setLang] = useState<Language>('da');
  const [activeView, setActiveView] = useState<string>('home');
  const [selectedSolution, setSelectedSolution] = useState<string>('reality-check');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<boolean>(false);

  // Router navigator helper with hash deep routing
  const navigateTo = (view: string) => {
    setActiveView(view);
    if (view === 'home') {
      window.location.hash = '';
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
      }
    } else if (view === 'who-uses') {
      window.location.hash = '#/funktioner';
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
      }
    } else if (view === 'branches') {
      window.location.hash = '#/brancher';
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
      }
    } else if (view === 'situations') {
      window.location.hash = '#/situationer';
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
      }
    } else if (view === 'reality-check-indikator') {
      window.location.hash = '#/reality-check-indikator';
      if (window.location.pathname !== '/reality-check-indikator') {
        window.history.pushState(null, '', '/reality-check-indikator');
      }
    } else {
      window.location.hash = `#/${view}`;
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
      }
    }
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Global navigation & CTA event tracking
    if (view === 'reality-check') {
      trackEvent('nav_reality_check_click');
      trackEvent('cta_se_reality_check_click');
    } else if (view === 'reality-check-indikator') {
      trackEvent('indicator_page_click');
    } else if (view === 'situations') {
      trackEvent('nav_situationer_click');
    } else if (view === 'who-uses') {
      trackEvent('nav_for_hvem_click');
    } else if (view === 'insights') {
      trackEvent('nav_reality_notes_click');
      trackEvent('cta_reality_notes_click');
    } else if (view === 'about') {
      trackEvent('nav_om_click');
    } else if (view === 'contact') {
      trackEvent('nav_afklar_reality_check_click');
      trackEvent('cta_reality_check_afklar_click');
      trackEvent('cta_formular_start');
      trackEvent('form_reality_check_start');
    }

    // Situation click tracking
    if (view === 'situation-before-invest') {
      trackEvent('situation_foer_investering_click');
      trackEvent('cta_situation_click', { situationId: 'situation-before-invest' });
    } else if (view === 'situation-interest-decision') {
      trackEvent('situation_interesse_til_beslutning_click');
      trackEvent('cta_situation_click', { situationId: 'situation-interest-decision' });
    } else if (view === 'situation-value-defensibility') {
      trackEvent('situation_vaerdi_forsvares_click');
      trackEvent('cta_situation_click', { situationId: 'situation-value-defensibility' });
    } else if (view === 'situation-clarity-before-dialog') {
      trackEvent('situation_klarhed_foer_dialog_click');
      trackEvent('cta_situation_click', { situationId: 'situation-clarity-before-dialog' });
    } else if (view === 'situation-strategic-relevance') {
      trackEvent('situation_strategisk_relevans_click');
      trackEvent('cta_situation_click', { situationId: 'situation-strategic-relevance' });
    } else if (view === 'situation-new-market-category') {
      trackEvent('situation_nyt_marked_kategori_click');
      trackEvent('cta_situation_click', { situationId: 'situation-new-market-category' });
    } else if (view === 'situation-commercial-readability') {
      trackEvent('situation_kommerciel_laesbarhed_click');
      trackEvent('cta_situation_click', { situationId: 'situation-commercial-readability' });
    } else if (view === 'situation-external-decision-basis') {
      trackEvent('situation_eksternt_beslutningsgrundlag_click');
      trackEvent('cta_situation_click', { situationId: 'situation-external-decision-basis' });
    }
  };

  const navigateToSolution = (solKey: string) => {
    setSelectedSolution(solKey);
    setActiveView('solutions');
    window.location.hash = `#/solutions/${solKey}`;
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Synchronize browser deep links & back buttons
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;

      if (path === '/reality-check-indikator' || hash === '#/reality-check-indikator') {
        setActiveView('reality-check-indikator');
      } else if (hash === '#/funktioner' || hash === '#/who-uses') {
        setActiveView('who-uses');
      } else if (hash === '#/brancher' || hash === '#/branches') {
        setActiveView('branches');
      } else if (hash === '#/situationer' || hash === '#/situations') {
        setActiveView('situations');
      } else if (hash.startsWith('#/situation-')) {
        setActiveView(hash.replace('#/', ''));
      } else if (hash.startsWith('#/solutions/')) {
        const sol = hash.replace('#/solutions/', '');
        setSelectedSolution(sol);
        setActiveView('solutions');
      } else if (hash === '#/reality-check') {
        setActiveView('reality-check');
      } else if (hash === '#/insights') {
        setActiveView('insights');
      } else if (hash === '#/about') {
        setActiveView('about');
      } else if (hash === '#/contact') {
        setActiveView('contact');
      } else if (hash === '#/home' || hash === '') {
        setActiveView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on mount
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const solutionList = [
    { id: 'reality-check', num: '01', titleDa: 'PeopleLab X Reality Check', titleEn: 'PeopleLab X Reality Check' },
    { id: 'strategic-relevance', num: '02', titleDa: 'From Supplier to Strategic Relevance', titleEn: 'From Supplier to Strategic Relevance' },
    { id: 'before-rebuild', num: '03', titleDa: 'Before You Rebuild', titleEn: 'Before You Rebuild' },
    { id: 'market-entry', num: '04', titleDa: 'Market and Category Entry', titleEn: 'Market and Category Entry' },
    { id: 'buyer-led', num: '05', titleDa: 'Buyer-Led and AI Readiness', titleEn: 'Buyer-Led and AI Readiness' },
    { id: 'buying-group', num: '06', titleDa: 'Buying Group Friction', titleEn: 'Buying Group Friction' },
    { id: 'choice-clarity', num: '07', titleDa: 'Choice Clarity Check', titleEn: 'Choice Clarity Check' },
    { id: 'ai-discoverability', num: '08', titleDa: 'AI Discoverability Check', titleEn: 'AI Discoverability Check' },
    { id: 'interest-decision', num: '09', titleDa: 'From Interest to Decision', titleEn: 'From Interest to Decision' },
    { id: 'decision-defensibility', num: '10', titleDa: 'Decision Defensibility Check', titleEn: 'Decision Defensibility Check' }
  ];

  // Translations for layout
  const t = {
    da: {
      navRealityCheck: 'Reality Check',
      navIndikator: 'Få en indikation',
      navWhatYouGet: 'Hvad I får',
      navApplications: 'Anvendelser',
      navForWhom: 'For hvem',
      navFunctions: 'Efter rolle',
      navBranches: 'Efter branche',
      navSituations: 'Efter situation',
      navRealityNotes: 'Reality Notes',
      navAbout: 'Om PeopleLab X',
      navContact: 'Afklar Reality Check',
      btnHeroPrimary: 'Afklar om Reality Check er relevant for jer',
      btnHeroSecondary: 'Se Reality Check'
    },
    en: {
      navRealityCheck: 'Reality Check',
      navIndikator: 'Get an indication',
      navWhatYouGet: 'What You Get',
      navApplications: 'Applications',
      navForWhom: 'For whom',
      navFunctions: 'By role',
      navBranches: 'By industry',
      navSituations: 'By situation',
      navRealityNotes: 'Reality Notes',
      navAbout: 'About PeopleLab X',
      navContact: 'Clarify Reality Check',
      btnHeroPrimary: 'Clarify whether Reality Check is relevant for you',
      btnHeroSecondary: 'See Reality Check'
    }
  }[lang];

  const handleNavApplications = () => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById('section-situations');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      const el = document.getElementById('section-situations');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavWhatYouGet = () => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById('hvad-reality-check-leverer');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      const el = document.getElementById('hvad-reality-check-leverer');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-charcoal font-sans flex flex-col antialiased selection:bg-brand-accent-light selection:text-brand-accent scroll-smooth" id="app-root-container">
      
      {/* 1. TOP EXECUTIVE HEADER */}
      <header className="sticky top-0 z-[100] bg-brand-bg/95 backdrop-blur-md border-b border-brand-border px-6 py-4 flex items-center justify-between shadow-sm">
        <button 
          onClick={() => navigateTo('home')}
          className="flex items-center space-x-3.5 text-left bg-transparent border-none cursor-pointer p-0 group"
        >
          <div className="px-3 py-1 bg-brand-accent text-white font-mono font-black text-sm tracking-wider hover:bg-brand-accent-dark transition-colors">
            PLX
          </div>
          <div>
            <h1 className="text-sm font-black tracking-widest text-brand-charcoal font-mono leading-none">PEOPLELAB X</h1>
          </div>
        </button>

        {/* Desktop Navigation Link panel */}
        <nav className="hidden xl:flex items-center space-x-7 text-xs font-mono font-bold text-brand-muted">
          <button 
            onClick={() => navigateTo('reality-check')} 
            className={`hover:text-brand-accent transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-none ${activeView === 'reality-check' ? 'text-brand-accent font-extrabold' : 'text-brand-muted'}`}
          >
            {t.navRealityCheck}
          </button>

          <button 
            onClick={() => navigateTo('reality-check-indikator')} 
            className={`hover:text-brand-accent transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-none ${activeView === 'reality-check-indikator' ? 'text-brand-accent font-extrabold' : 'text-brand-muted'}`}
          >
            {t.navIndikator}
          </button>

          {/* For hvem Dropdown */}
          <div 
            className="relative font-mono font-bold text-xs"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`hover:text-brand-accent flex items-center gap-1 transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-none font-mono font-bold text-xs ${
                activeView === 'who-uses' || activeView === 'branches' || activeView === 'situations' ? 'text-brand-accent font-extrabold' : 'text-brand-muted'
              }`}
            >
              <span>{t.navForWhom}</span>
              <ChevronDown size={12} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 mt-2 w-48 bg-white border border-brand-border rounded shadow-lg py-2 z-[110]"
                >
                  <button
                    onClick={() => {
                      navigateTo('who-uses');
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-brand-bg hover:text-brand-accent transition-colors border-none cursor-pointer bg-transparent block ${
                      activeView === 'who-uses' ? 'text-brand-accent bg-brand-bg/50 font-extrabold' : 'text-brand-muted'
                    }`}
                  >
                    {t.navFunctions}
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('branches');
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-brand-bg hover:text-brand-accent transition-colors border-none cursor-pointer bg-transparent block ${
                      activeView === 'branches' ? 'text-brand-accent bg-brand-bg/50 font-extrabold' : 'text-brand-muted'
                    }`}
                  >
                    {t.navBranches}
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('situations');
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-brand-bg hover:text-brand-accent transition-colors border-none cursor-pointer bg-transparent block ${
                      activeView === 'situations' ? 'text-brand-accent bg-brand-bg/50 font-extrabold' : 'text-brand-muted'
                    }`}
                  >
                    {t.navSituations}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={() => navigateTo('insights')} 
            className={`hover:text-brand-accent transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-none ${activeView === 'insights' ? 'text-brand-accent font-extrabold' : 'text-brand-muted'}`}
          >
            {t.navRealityNotes}
          </button>

          <button 
            onClick={() => navigateTo('about')} 
            className={`hover:text-brand-accent transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-none ${activeView === 'about' ? 'text-brand-accent font-extrabold' : 'text-brand-muted'}`}
          >
            {t.navAbout}
          </button>

          {/* Visually outstanding CTA button inside the navigation */}
          <button 
            onClick={() => navigateTo('contact')} 
            className={`px-4 py-2 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-black text-[10px] uppercase tracking-wider rounded transition-all active:scale-95 cursor-pointer border-none shadow-sm ${activeView === 'contact' ? 'ring-2 ring-brand-accent/55 ring-offset-2' : ''}`}
          >
            {t.navContact}
          </button>
        </nav>

        {/* Right Controls: Language & CTA Button */}
        <div className="flex items-center space-x-4">
          
          {/* Language selector pills */}
          <div className="flex items-center bg-brand-card p-1 border border-brand-border rounded">
            <button
              onClick={() => setLang('da')}
              className={`px-2.5 py-1 text-[9px] font-mono tracking-widest font-bold rounded transition-colors cursor-pointer border-none ${lang === 'da' ? 'bg-brand-accent text-white' : 'text-brand-muted hover:text-brand-charcoal'}`}
            >
              DA
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 text-[9px] font-mono tracking-widest font-bold rounded transition-colors cursor-pointer border-none ${lang === 'en' ? 'bg-brand-accent text-white' : 'text-brand-muted hover:text-brand-charcoal'}`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => navigateTo('contact')}
            className="hidden sm:inline-block xl:hidden px-4 py-2.5 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-[11px] uppercase tracking-wider rounded transition-all active:scale-95 cursor-pointer border-none"
            id="header-cta-btn"
          >
            {t.navContact}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-brand-muted hover:text-brand-charcoal transition-colors cursor-pointer bg-transparent border-none"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
 
      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-brand-bg border-l border-brand-border z-[150] p-6 flex flex-col justify-between shadow-2xl xl:hidden"
          >
            <div className="space-y-8">
              <div className="flex items-center justify-between pb-6 border-b border-brand-border">
                <div className="flex items-center space-x-2">
                  <div className="px-2 py-0.5 bg-brand-accent text-white font-mono font-black text-xs tracking-wider">
                    PLX
                  </div>
                  <span className="text-xs font-mono font-black text-brand-charcoal">PEOPLELAB X</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-brand-muted hover:text-brand-charcoal transition-colors cursor-pointer bg-transparent border-none"
                >
                  <X size={18} />
                </button>
              </div>
               <nav className="flex flex-col space-y-4 text-xs font-mono font-bold">
                <button 
                  onClick={() => navigateTo('reality-check')}
                  className={`text-left py-2 hover:text-brand-accent transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-none ${activeView === 'reality-check' ? 'text-brand-accent font-extrabold' : 'text-brand-muted'}`}
                >
                  {t.navRealityCheck}
                </button>

                <button 
                  onClick={() => navigateTo('reality-check-indikator')}
                  className={`text-left py-2 hover:text-brand-accent transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-none ${activeView === 'reality-check-indikator' ? 'text-brand-accent font-extrabold' : 'text-brand-muted'}`}
                >
                  {t.navIndikator}
                </button>

                {/* Mobile For hvem links group */}
                <div className="py-2 border-t border-b border-brand-border/40 my-1 space-y-2">
                  <span className="text-[9px] font-mono tracking-wider text-brand-accent uppercase block pl-2 font-black">{t.navForWhom}</span>
                  <button 
                    onClick={() => navigateTo('who-uses')}
                    className={`text-left py-1.5 pl-4 hover:text-brand-accent transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-none block w-full ${activeView === 'who-uses' ? 'text-brand-accent font-extrabold' : 'text-brand-muted'}`}
                  >
                    ↳ {t.navFunctions}
                  </button>
                  <button 
                    onClick={() => navigateTo('branches')}
                    className={`text-left py-1.5 pl-4 hover:text-brand-accent transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-none block w-full ${activeView === 'branches' ? 'text-brand-accent font-extrabold' : 'text-brand-muted'}`}
                  >
                    ↳ {t.navBranches}
                  </button>
                  <button 
                    onClick={() => navigateTo('situations')}
                    className={`text-left py-1.5 pl-4 hover:text-brand-accent transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-none block w-full ${activeView === 'situations' ? 'text-brand-accent font-extrabold' : 'text-brand-muted'}`}
                  >
                    ↳ {t.navSituations}
                  </button>
                </div>
 
                <button 
                  onClick={() => navigateTo('insights')}
                  className={`text-left py-2 hover:text-brand-accent transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-none ${activeView === 'insights' ? 'text-brand-accent font-extrabold' : 'text-brand-muted'}`}
                >
                  {t.navRealityNotes}
                </button>
 
                <button 
                  onClick={() => navigateTo('about')}
                  className={`text-left py-2 hover:text-brand-accent transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-none ${activeView === 'about' ? 'text-brand-accent font-extrabold' : 'text-brand-muted'}`}
                >
                  {t.navAbout}
                </button>
 
                <button 
                  onClick={() => navigateTo('contact')}
                  className={`text-left py-2 hover:text-brand-accent transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-none ${activeView === 'contact' ? 'text-brand-accent font-extrabold' : 'text-brand-muted'}`}
                >
                  {t.navContact}
                </button>
              </nav>
            </div>
 
            <div className="pt-6 border-t border-brand-border">
              <button
                onClick={() => navigateTo('contact')}
                className="w-full py-3 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-widest transition-all text-center cursor-pointer border-none"
              >
                {t.navContact}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN CONTENT AREA (ROUTER) */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >            {activeView === 'home' && (
              <>
                {/* HOMEPAGE SECTION 1: HERO */}
                <section className="pt-20 pb-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto w-full text-left space-y-12" id="hero-section">
                  <div className="space-y-6">
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-accent uppercase block border-b border-brand-accent/20 pb-1.5 max-w-fit">
                      {lang === 'da' ? 'COMMERCIAL REALITY ANALYSIS' : 'COMMERCIAL REALITY ANALYSIS'}
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black text-brand-charcoal leading-[1.1] tracking-tight uppercase">
                      {lang === 'da' ? (
                        <>
                          Jeres næste kunde vurderer jer,<br className="hidden sm:inline" />
                          før I får ordet.
                        </>
                      ) : (
                        <>
                          Your next customer evaluates you,<br className="hidden sm:inline" />
                          before you get to speak.
                        </>
                      )}
                    </h2>
                    <p className="text-base sm:text-lg text-brand-muted font-sans leading-relaxed max-w-3xl pt-2">
                      {lang === 'da' ? (
                        <>
                          Website, søgning, LinkedIn, cases, dokumentation, AI-baseret research og relevante alternativer former allerede billedet af jer — før I selv får mulighed for at forklare jer.
                          <br /><br />
                          Når markedet hurtigt kan forstå, hvad I står for, bliver I lettere at forsvare internt — og lettere at vælge.
                          <br /><br />
                          PeopleLab X laver Reality Check: en ekstern læsning af, hvordan jeres virksomhed bliver forstået, vurderet og taget videre i en beslutning.
                        </>
                      ) : (
                        <>
                          Your website, search footprint, LinkedIn, case studies, documentation, AI-based research, and relevant alternatives already shape the image of you — before you get the opportunity to speak for yourself.
                          <br /><br />
                          When the market can quickly understand what you stand for, you become easier to defend internally — and easier to choose.
                          <br /><br />
                          PeopleLab X creates the Reality Check: an external assessment of how your company is understood, evaluated, and carried forward in a decision.
                        </>
                      )}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                    <button
                      onClick={() => navigateTo('contact')}
                      className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-widest transition-all text-center cursor-pointer border-none rounded"
                    >
                      {t.btnHeroPrimary}
                    </button>
                    <button
                      onClick={handleNavWhatYouGet}
                      className="w-full sm:w-auto px-8 py-4 border border-brand-charcoal hover:bg-brand-charcoal/5 text-brand-charcoal font-mono font-bold text-xs uppercase tracking-widest transition-all text-center cursor-pointer rounded"
                    >
                      {t.btnHeroSecondary}
                    </button>
                  </div>

                  {/* Hero image section with premium editorial imagery */}
                  <div className="pt-8" id="hero-image-placeholder-container">
                    <div className="relative w-full aspect-[16/9] bg-stone-900 border border-brand-border overflow-hidden flex items-center justify-center group shadow-md rounded">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent z-10" />
                      <div className="absolute inset-y-0 left-1/3 w-px bg-white/20 backdrop-blur-[1px] z-15" />
                      <div className="absolute inset-y-0 left-2/3 w-px bg-white/15 backdrop-blur-[1px] z-15" />
                      
                      <img 
                        src={heroReflectionImg} 
                        alt="PeopleLab X - Internal intention vs external visibility" 
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-[1.01] transition-transform duration-[2.5s] ease-out"
                      />
                      
                      <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md border border-brand-border px-3 py-1.5 text-[8px] font-mono text-brand-accent uppercase tracking-widest font-black rounded shadow-sm">
                        {lang === 'da' ? 'DIAGNOSTISK PERSPEKTIV: OUTSIDE-IN SPEJL' : 'DIAGNOSTIC PERSPECTIVE: OUTSIDE-IN MIRROR'}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                        <div className="bg-white/95 backdrop-blur-md border border-brand-border p-4 max-w-sm rounded shadow-md text-brand-charcoal">
                          <p className="text-[10px] font-sans leading-relaxed">
                            {lang === 'da'
                              ? 'En lys, dynamisk realitet: We viser jer præcist, hvordan omverdenen og AI afkoder jeres værdi, så I kan handle med absolut sikkerhed.'
                              : 'A luminous, dynamic reality: We reveal exactly how the market and AI decode your value, empowering you to act with absolute certainty.'}
                          </p>
                        </div>
                        <span className="text-[9px] font-mono text-brand-charcoal/60 tracking-wider bg-white/90 px-2.5 py-1 rounded border border-brand-border/50">PLX REF. 01 // SIGNAL</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* HOMEPAGE SECTION 1.5: REALITY CHECK INDIKATOR BRIDGE */}
                <section className="py-16 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto w-full" id="indikator-bridge-section">
                  <div className="bg-brand-card border border-brand-border p-8 md:p-12 rounded-lg shadow-sm space-y-6">
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-accent uppercase block">
                      {lang === 'da' ? 'KOMMERCIEL AFKLARING' : 'COMMERCIAL CLARIFICATION'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black text-brand-charcoal leading-tight uppercase">
                      {lang === 'da' ? 'Står I foran en større kommerciel beslutning?' : 'Standing before a major commercial decision?'}
                    </h3>
                    <p className="text-sm sm:text-base text-brand-muted max-w-3xl leading-relaxed">
                      {lang === 'da' 
                        ? 'Før I investerer i nyt website, repositionering eller en Go-To-Market-strategi, bør I afklare jeres kommercielle forudsætninger. Vores uforpligtende situationslæser tager under 4 minutter og evaluerer jeres setup på tværs af fem strategiske akser.'
                        : 'Before you invest in a new website, repositioning, or a Go-To-Market strategy, you should clarify your commercial prerequisites. Our non-binding situation reader takes less than 4 minutes and evaluates your setup across five strategic axes.'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <button
                        onClick={() => navigateTo('reality-check-indikator')}
                        className="px-6 py-3.5 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer border-none shadow-sm flex items-center justify-center gap-2 group"
                      >
                        <span>{lang === 'da' ? 'Få en indikation' : 'Get an indication'}</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </button>
                      <button
                        onClick={() => navigateTo('reality-check')}
                        className="px-6 py-3.5 border border-brand-charcoal hover:bg-brand-charcoal/5 text-brand-charcoal font-mono font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer text-center"
                      >
                        {lang === 'da' ? 'Læs mere om Reality Check' : 'Read about Reality Check'}
                      </button>
                    </div>
                  </div>
                </section>

                <DecisionEntrySection lang={lang} onNavigate={navigateTo} />

                {/* HOMEPAGE SECTION 2: PEOPLELAB X REALITY CHECK */}
                <section className="py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto w-full border-t border-brand-border" id="section-reality-check">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-12 space-y-6">
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-accent uppercase block mb-3">
                        {lang === 'da' ? 'REALITY CHECK' : 'REALITY CHECK'}
                      </span>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-brand-charcoal tracking-tight leading-[1.1] uppercase">
                        {lang === 'da' 
                          ? 'Få virksomheden læst udefra, før I investerer videre.' 
                          : 'Get your company read from the outside, before you invest further.'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                        <div className="space-y-4 text-sm sm:text-base text-brand-muted font-sans leading-relaxed">
                          <p>
                            {lang === 'da' ? (
                              'Reality Check er en ekstern ledelsesdiagnose af, hvordan jeres digitale og kommercielle signal fremstår i markedet. Vi tager ikke udgangspunkt i jeres interne ønsker, men undersøger den kolde, synlige virkelighed udefra-ind.'
                            ) : (
                              'Reality Check is an external report mapping how your digital and commercial signal appears in the market. We do not base our work on internal preferences, but examine the cold, visible reality from the outside-in.'
                            )}
                          </p>
                          <p>
                            {lang === 'da' ? (
                              'Analysen viser, hvad der er tydeligt, hvad der er uklart, hvor tillid og dokumentation bør styrkes, og hvor markedet og AI kan få svært ved at forstå, sammenligne eller vælge jer.'
                            ) : (
                              'The analysis shows what is clear, what is ambiguous, where trust and proof points must be reinforced, and where the market and AI research struggle to understand, compare, or choose your firm.'
                            )}
                          </p>
                        </div>
                        <div className="bg-brand-card border border-brand-border rounded-lg p-8 space-y-4 flex flex-col justify-between">
                          <p className="text-sm font-sans font-semibold text-brand-charcoal italic">
                            {lang === 'da' ? (
                              '"Vi analyserer sammenhængen mellem 42 signal- og beslutningsområder — fra position, cases og value clarity til AI-repræsentation og buying group-forsvarbarhed."'
                            ) : (
                              '"We analyze alignment across 42 precise signal and decision areas — from position, cases, and value clarity to AI representation and buying group defensibility."'
                            )}
                          </p>
                          <div className="pt-2">
                            <button
                              onClick={() => navigateTo('contact')}
                              className="px-6 py-3.5 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-[10px] uppercase tracking-wider rounded transition-all cursor-pointer border-none"
                            >
                              {lang === 'da' ? 'Afklar om Reality Check er relevant for jer' : 'Start with a clarification call'}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Store statement-linjer - High design tension */}
                      <div className="text-center py-12 border-y border-brand-border/40 my-12 bg-white rounded-lg">
                        <p className="text-[11px] font-mono text-brand-accent font-bold uppercase tracking-[0.25em] mb-2">
                          {lang === 'da' ? 'OUTSIDE-IN LÆSNING' : 'OUTSIDE-IN READING'}
                        </p>
                        <div className="text-xl sm:text-2xl md:text-3xl font-sans font-black text-brand-charcoal uppercase space-y-2">
                          <div>{lang === 'da' ? 'Ikke en workshop.' : 'Not a workshop.'}</div>
                          <div>{lang === 'da' ? 'Ikke en intern proces.' : 'Not an internal process.'}</div>
                          <div className="text-brand-accent">{lang === 'da' ? 'En ekstern læsning af det, markedet allerede møder.' : 'An external reading of what the market already encounters.'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* HOMEPAGE SECTION 3: HVAD REALITY CHECK LEVERER */}
                <section className="py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto w-full border-t border-brand-border scroll-mt-24" id="hvad-reality-check-leverer">
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-accent uppercase block">
                        {lang === 'da' ? 'OUTPUT' : 'OUTPUT'}
                      </span>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-brand-charcoal tracking-tight leading-[1.1] uppercase">
                        {lang === 'da' ? 'Hvad Reality Check leverer' : 'What the Reality Check delivers'}
                      </h3>
                      <p className="text-sm sm:text-base text-brand-muted font-sans leading-relaxed max-w-3xl">
                        {lang === 'da' 
                          ? 'En Reality Check-analyse tager typisk 2–4 uger at udarbejde. Det færdige output er en fuldstændig klar, objektiv kommerciel diagnose, der indeholder:' 
                          : 'A Reality Check analysis typically takes 2–4 weeks to produce. The final output is an entirely clear, objective commercial diagnostic containing:'}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-4">
                      {lang === 'da' ? (
                        <>
                          <div className="flex items-start space-x-3 pb-4 border-b border-brand-border/40">
                            <span className="font-mono text-xs text-brand-accent font-bold mt-1">01 //</span>
                            <div>
                              <h4 className="font-sans font-bold text-brand-charcoal">Ekstern læsning af markedssignal</h4>
                              <p className="text-xs text-brand-muted mt-1 leading-relaxed">Præcis diagnose af, hvordan jeres virksomhed og værditilbud opfattes og afkodes af eksterne beslutningstagere.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 pb-4 border-b border-brand-border/40">
                            <span className="font-mono text-xs text-brand-accent font-bold mt-1">02 //</span>
                            <div>
                              <h4 className="font-sans font-bold text-brand-charcoal">Vurdering af markedets forståelse</h4>
                              <p className="text-xs text-brand-muted mt-1 leading-relaxed">Kortlægning af, hvor let eller svært det er for markedet at afkode jeres kernekompetencer og forskelle.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 pb-4 border-b border-brand-border/40">
                            <span className="font-mono text-xs text-brand-accent font-bold mt-1">03 //</span>
                            <div>
                              <h4 className="font-sans font-bold text-brand-charcoal">Signalvurdering af styrker & uklarheder</h4>
                              <p className="text-xs text-brand-muted mt-1 leading-relaxed">Identifikation af de steder, hvor jeres ydre spor styrker jer, og hvor de svækker jeres substans.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 pb-4 border-b border-brand-border/40">
                            <span className="font-mono text-xs text-brand-accent font-bold mt-1">04 //</span>
                            <div>
                              <h4 className="font-sans font-bold text-brand-charcoal">Friktionskort over købshindringer</h4>
                              <p className="text-xs text-brand-muted mt-1 leading-relaxed">Visuel kortlægning af den unødige kompleksitet eller manglende beviser, der gør jer svære at vælge.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 pb-4 border-b border-brand-border/40">
                            <span className="font-mono text-xs text-brand-accent font-bold mt-1">05 //</span>
                            <div>
                              <h4 className="font-sans font-bold text-brand-charcoal">5–8 prioriterede fund</h4>
                              <p className="text-xs text-brand-muted mt-1 leading-relaxed">De mest kritiske observationer, som ledelsen skal forholde sig til med det samme.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 pb-4 border-b border-brand-border/40">
                            <span className="font-mono text-xs text-brand-accent font-bold mt-1">06 //</span>
                            <div>
                              <h4 className="font-sans font-bold text-brand-charcoal">Konkrete og operationelle anbefalinger</h4>
                              <p className="text-xs text-brand-muted mt-1 leading-relaxed">Anbefalinger til, hvad der bør adresseres først for at opnå maksimal kommerciel slagkraft.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 pb-4 border-b border-brand-border/40 sm:col-span-2">
                            <span className="font-mono text-xs text-brand-accent font-bold mt-1">07 //</span>
                            <div>
                              <h4 className="font-sans font-bold text-brand-charcoal">Executive ledelsesgennemgang</h4>
                              <p className="text-xs text-brand-muted mt-1 leading-relaxed">En personlig gennemgang af analysen med ledelsen, hvor fund og fremtidige krav til go-to-market, websider eller salg tryktestes.</p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-start space-x-3 pb-4 border-b border-brand-border/40">
                            <span className="font-mono text-xs text-brand-accent font-bold mt-1">01 //</span>
                            <div>
                              <h4 className="font-sans font-bold text-brand-charcoal">External Reading of Market Signal</h4>
                              <p className="text-xs text-brand-muted mt-1 leading-relaxed">A precise diagnostic of how your enterprise and value propositions are perceived and decoded by external decision-makers.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 pb-4 border-b border-brand-border/40">
                            <span className="font-mono text-xs text-brand-accent font-bold mt-1">02 //</span>
                            <div>
                              <h4 className="font-sans font-bold text-brand-charcoal">Assessment of Market Comprehension</h4>
                              <p className="text-xs text-brand-muted mt-1 leading-relaxed">Mapping exactly how easy or difficult it is for the market to decode your core competencies and differentiators.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 pb-4 border-b border-brand-border/40">
                            <span className="font-mono text-xs text-brand-accent font-bold mt-1">03 //</span>
                            <div>
                              <h4 className="font-sans font-bold text-brand-charcoal">Signal Assessment of Strengths & Ambiguities</h4>
                              <p className="text-xs text-brand-muted mt-1 leading-relaxed">Identifying points where your external footprint validates your substance and where it dilutes it.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 pb-4 border-b border-brand-border/40">
                            <span className="font-mono text-xs text-brand-accent font-bold mt-1">04 //</span>
                            <div>
                              <h4 className="font-sans font-bold text-brand-charcoal">Friction Mapping of Buying Obstacles</h4>
                              <p className="text-xs text-brand-muted mt-1 leading-relaxed">A visual map showing the unnecessary complexities or missing proof points that hinder decision-making.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 pb-4 border-b border-brand-border/40">
                            <span className="font-mono text-xs text-brand-accent font-bold mt-1">05 //</span>
                            <div>
                              <h4 className="font-sans font-bold text-brand-charcoal">5–8 Prioritized Findings</h4>
                              <p className="text-xs text-brand-muted mt-1 leading-relaxed">The most critical discoveries that leadership must address immediately to protect market position.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 pb-4 border-b border-brand-border/40">
                            <span className="font-mono text-xs text-brand-accent font-bold mt-1">06 //</span>
                            <div>
                              <h4 className="font-sans font-bold text-brand-charcoal">Concrete & Actionable Recommendations</h4>
                              <p className="text-xs text-brand-muted mt-1 leading-relaxed">Strategic guidelines detailing exactly what needs to be optimized first for maximum commercial leverage.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 pb-4 border-b border-brand-border/40 sm:col-span-2">
                            <span className="font-mono text-xs text-brand-accent font-bold mt-1">07 //</span>
                            <div>
                              <h4 className="font-sans font-bold text-brand-charcoal">Executive Leadership Walkthrough</h4>
                              <p className="text-xs text-brand-muted mt-1 leading-relaxed">A personal walkthrough of findings with the board, pressure-testing future guidelines for go-to-market, websites, or sales.</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Store statement-linjer */}
                    <div className="text-center py-10 border-y border-brand-border/40 mt-12 bg-white rounded-lg">
                      <p className="text-[11px] font-mono text-brand-accent font-bold uppercase tracking-[0.25em] mb-2">
                        {lang === 'da' ? 'LEDELSESBESLUTNING' : 'LEADERSHIP DECISION'}
                      </p>
                      <div className="text-xl sm:text-2xl md:text-3xl font-sans font-black text-brand-charcoal uppercase space-y-2">
                        <div>{lang === 'da' ? 'Analysen er skrevet til beslutning.' : 'The report is written for decision.'}</div>
                        <div className="text-brand-accent">{lang === 'da' ? 'Ikke til arkiv.' : 'Not for the archive.'}</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* HOMEPAGE SECTION 4: FØR NÆSTE KOMMERCIELLE INITIATIV */}
                <section className="py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto w-full border-t border-brand-border" id="section-before-initiative">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4 space-y-2">
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-accent uppercase block">
                        {lang === 'da' ? 'RELEVANS' : 'RELEVANCE'}
                      </span>
                      <h3 className="text-3xl font-sans font-black text-brand-charcoal uppercase leading-[1.15]">
                        {lang === 'da' ? 'Før I sætter næste initiativ i gang' : 'Before launching your next initiative'}
                      </h3>
                    </div>
                    <div className="md:col-span-8 space-y-6 text-sm sm:text-base text-brand-muted font-sans leading-relaxed">
                      {lang === 'da' ? (
                        <div className="space-y-4">
                          <p>Når markedet ikke reagerer stærkt nok, starter mange B2B-virksomheder et nyt initiativ:</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs font-mono text-brand-charcoal pt-2 pl-2">
                            <div className="flex items-start space-x-2"><CornerDownRight size={12} className="text-brand-accent mt-1 flex-shrink-0" /><span>Et nyt website.</span></div>
                            <div className="flex items-start space-x-2"><CornerDownRight size={12} className="text-brand-accent mt-1 flex-shrink-0" /><span>En ny positionering.</span></div>
                            <div className="flex items-start space-x-2"><CornerDownRight size={12} className="text-brand-accent mt-1 flex-shrink-0" /><span>En kampagne.</span></div>
                            <div className="flex items-start space-x-2"><CornerDownRight size={12} className="text-brand-accent mt-1 flex-shrink-0" /><span>Et CRM- eller salgsprojekt.</span></div>
                            <div className="flex items-start space-x-2"><CornerDownRight size={12} className="text-brand-accent mt-1 flex-shrink-0" /><span>Et AI-initiativ.</span></div>
                            <div className="flex items-start space-x-2"><CornerDownRight size={12} className="text-brand-accent mt-1 flex-shrink-0" /><span>En ny go-to-market-indsats.</span></div>
                          </div>
                          <p className="pt-2">Det kan være nødvendigt.</p>
                          <p className="font-semibold text-brand-charcoal">Men før I vælger løsning, skal I vide, hvad markedet faktisk kan se, forstå og forsvare. Ellers risikerer I at investere i symptomet — ikke i årsagen.</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <p>When the market does not react strongly enough, many B2B companies launch new initiatives:</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs font-mono text-brand-charcoal pt-2 pl-2">
                            <div className="flex items-start space-x-2"><CornerDownRight size={12} className="text-brand-accent mt-1 flex-shrink-0" /><span>A new website.</span></div>
                            <div className="flex items-start space-x-2"><CornerDownRight size={12} className="text-brand-accent mt-1 flex-shrink-0" /><span>A new positioning.</span></div>
                            <div className="flex items-start space-x-2"><CornerDownRight size={12} className="text-brand-accent mt-1 flex-shrink-0" /><span>A campaign.</span></div>
                            <div className="flex items-start space-x-2"><CornerDownRight size={12} className="text-brand-accent mt-1 flex-shrink-0" /><span>A CRM or sales project.</span></div>
                            <div className="flex items-start space-x-2"><CornerDownRight size={12} className="text-brand-accent mt-1 flex-shrink-0" /><span>An AI initiative.</span></div>
                            <div className="flex items-start space-x-2"><CornerDownRight size={12} className="text-brand-accent mt-1 flex-shrink-0" /><span>A new go-to-market effort.</span></div>
                          </div>
                          <p className="pt-2">This may indeed be necessary and correct.</p>
                          <p className="font-semibold text-brand-charcoal">But the critical question is not whether something should happen. The critical question is what should actually be launched — and why.</p>
                          
                          <p>PeopleLab X investigates that reality from the outside-in before you select a direction.</p>
                          <p>We analyze how the market actually reads, understands, and evaluates you based on what is already visible, so your next investment does not start with internal assumptions, but with a precise external diagnosis.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </section>

                {/* HOMEPAGE SECTION 5: I VED / MARKEDET SER */}
                <section className="py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto w-full border-t border-brand-border" id="section-i-ved-markedet-ser">
                  <div className="space-y-12">
                    <div className="text-center">
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-muted uppercase">
                        {lang === 'da' ? 'STATUS' : 'ALIGNMENT'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch border border-brand-border">
                      {/* Left Side: I Ved */}
                      <div className="p-10 bg-white border-b md:border-b-0 md:border-r border-brand-border space-y-6 flex flex-col justify-between">
                        <div className="space-y-4">
                          <span className="text-4xl sm:text-5xl font-sans font-black text-brand-charcoal tracking-tight block uppercase">
                            {lang === 'da' ? 'I ved.' : 'You know.'}
                          </span>
                          <ul className="space-y-3 pt-4 text-brand-charcoal text-sm sm:text-base font-medium">
                            {lang === 'da' ? (
                              <>
                                <li className="flex items-start space-x-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-muted/70 mt-[8px] flex-shrink-0" />
                                  <span>I ved, hvad I kan og beviser.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-muted/70 mt-[8px] flex-shrink-0" />
                                  <span>I ved, hvorfor I er unikke.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-muted/70 mt-[8px] flex-shrink-0" />
                                  <span>I ved, hvorfor I er prisen værd.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-muted/70 mt-[8px] flex-shrink-0" />
                                  <span>I ved, hvorfor I burde blive valgt.</span>
                                </li>
                              </>
                            ) : (
                              <>
                                <li className="flex items-start space-x-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-muted/70 mt-[8px] flex-shrink-0" />
                                  <span>You know what you can deliver.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-muted/70 mt-[8px] flex-shrink-0" />
                                  <span>You know why you are unique.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-muted/70 mt-[8px] flex-shrink-0" />
                                  <span>You know why you are worth the price.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-muted/70 mt-[8px] flex-shrink-0" />
                                  <span>You know why you should be chosen.</span>
                                </li>
                              </>
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* Right Side: Markedet Ser */}
                      <div className="p-10 bg-brand-card space-y-6 flex flex-col justify-between">
                        <div className="space-y-4">
                          <span className="text-4xl sm:text-5xl font-sans font-black text-brand-accent tracking-tight block uppercase">
                            {lang === 'da' ? 'Markedet ser.' : 'The market sees.'}
                          </span>
                          <ul className="space-y-3 pt-4 text-brand-charcoal text-sm sm:text-base font-semibold">
                            {lang === 'da' ? (
                              <>
                                <li className="flex items-start space-x-2">
                                  <span className="text-brand-accent mt-[3px] flex-shrink-0 font-bold">↳</span>
                                  <span>Markedet ser kun, hvordan I fremstår.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="text-brand-accent mt-[3px] flex-shrink-0 font-bold">↳</span>
                                  <span>Markedet ser, hvor lette I er at forstå.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="text-brand-accent mt-[3px] flex-shrink-0 font-bold">↳</span>
                                  <span>Markedet ser, om valget føles trygt.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="text-brand-accent mt-[3px] flex-shrink-0 font-bold">↳</span>
                                  <span>Markedet ser, om I kan forsvares internt.</span>
                                </li>
                              </>
                            ) : (
                              <>
                                <li className="flex items-start space-x-2">
                                  <span className="text-brand-accent mt-[3px] flex-shrink-0 font-bold">↳</span>
                                  <span>The market only sees how you appear.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="text-brand-accent mt-[3px] flex-shrink-0 font-bold">↳</span>
                                  <span>The market sees how easy you are to understand.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="text-brand-accent mt-[3px] flex-shrink-0 font-bold">↳</span>
                                  <span>The market sees if the choice feels secure.</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="text-brand-accent mt-[3px] flex-shrink-0 font-bold">↳</span>
                                  <span>The market sees if you can be defended internally.</span>
                                </li>
                              </>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="text-center space-y-4 max-w-3xl mx-auto pt-6 font-sans">
                      <p className="text-lg sm:text-xl md:text-2xl font-black text-brand-charcoal leading-relaxed uppercase">
                        {lang === 'da' 
                          ? 'Når markedet hurtigt kan forstå, hvad I står for, bliver I lettere at forsvare internt — og lettere at vælge.' 
                          : 'If the market cannot understand you, trust you, and defend the choice of you, you become harder to choose.'}
                      </p>
                    </div>
                  </div>
                </section>

                {/* HOMEPAGE SECTION 6: GENKENDELIGE SITUATIONER */}
                <section className="py-24 px-6 md:px-12 lg:px-20 bg-brand-card border-t border-b border-brand-border" id="section-situations">
                  <div className="max-w-5xl mx-auto w-full space-y-12">
                    <div className="text-left space-y-2 max-w-2xl">
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-accent uppercase block mb-1">
                        {lang === 'da' ? 'ANVENDELSER' : 'APPLICATIONS'}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-sans font-black text-brand-charcoal uppercase">
                        {lang === 'da' ? 'Genkendelige situationer' : 'Recognizable situations'}
                      </h2>
                      <p className="text-xs sm:text-sm text-brand-muted font-sans leading-relaxed">
                        {lang === 'da'
                          ? 'Vælg den situation, jeres ledelse mærker i dag for at se, hvordan Reality Check anvendes:'
                          : 'Select the commercial situation your leadership team is experiencing today to see how the Reality Check is applied:'}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          id: 'situation-before-invest',
                          num: '01',
                          image: plxInvestBlueprint,
                          title: lang === 'da' ? 'Før I investerer' : 'Before You Invest',
                          symptom: lang === 'da'
                            ? 'I overvejer nyt website, ny positionering, AI, salg, marketing eller go-to-market-tiltag. Der er energi i processen, men også en reel risiko for at løse et symptom i stedet for årsagen.'
                            : 'You are considering a new website, repositioning, AI, sales, marketing, or go-to-market initiatives. While the process has momentum, there is a real risk of treating a symptom rather than the root cause.',
                          relevance: lang === 'da'
                            ? 'Når I overvejer nyt website, ny positionering, AI, salg, marketing eller go-to-market, er det afgørende først at se, hvad markedet faktisk kan forstå og forsvare. Ellers risikerer I at investere i symptomet — ikke i årsagen.'
                            : 'When considering a new website, repositioning, AI, sales, marketing, or go-to-market, it is crucial to first see what the market can actually understand and defend. Otherwise, you risk investing in the symptom — not the cause.'
                        },
                        {
                          id: 'situation-interest-decision',
                          num: '02',
                          image: plxDecisionNotebook,
                          title: lang === 'da' ? 'Fra interesse til beslutning' : 'From Interest to Decision',
                          symptom: lang === 'da'
                            ? 'Møderne går godt. Dialogen virker positiv. Kunden nikker, spørger ind og viser interesse. Men når beslutningen skal tages videre internt, mister sagen tempo eller forsvinder.'
                            : 'Meetings go well. The dialogue feels positive. The prospect nods, asks questions, and shows interest. But when the decision needs to move forward internally, the deal loses momentum or disappears entirely.',
                          relevance: lang === 'da'
                            ? 'Når der er interesse, møder eller dialog — men beslutningen udebliver — ligger friktionen ofte før selve salgsafslutningen. Reality Check undersøger, om markedet har nok grundlag for at forstå, begrunde og tage jer videre internt.'
                            : 'When there is interest, meetings, or dialogue — but the decision fails to materialize — friction often lies prior to the close. Reality Check investigates whether the market has sufficient ground to understand, justify, and carry you forward internally.'
                        },
                        {
                          id: 'situation-value-defensibility',
                          num: '03',
                          image: plxValueMarble,
                          label: lang === 'da' ? 'Værdi der kan begrundes' : 'Value That Can Be Justified',
                          title: lang === 'da' ? 'Når jeres værdi skal kunne forsvares' : 'When your value must be defended',
                          symptom: lang === 'da'
                            ? 'I ved, at jeres løsning, erfaring eller tilgang skaber større værdi end billigere alternativer. Alligevel bliver I ofte vurderet på pris, leverance eller overfladisk sammenligning.'
                            : 'You know that your solution, experience, or approach creates greater value than cheaper alternatives. Yet you are frequently evaluated on price, deliverables, or superficial comparisons.',
                          relevance: lang === 'da'
                            ? 'Hvis jeres værdi ikke kan forklares, dokumenteres og forsvares internt hos kunden, bliver pris, prioritet og risiko sværere at håndtere. Reality Check undersøger, om jeres synlige signal giver markedet nok grundlag for at vælge jer.'
                            : 'If your value cannot be explained, documented, and defended internally by the customer, price, priority, and risk become harder to manage. Reality Check investigates whether your visible signal provides the market with sufficient ground to choose you.'
                        },
                        {
                          id: 'situation-buyer-led',
                          num: '04',
                          image: plxAiLaptop,
                          title: lang === 'da' ? 'Klarhed før dialogen' : 'Clarity Before Dialogue',
                          symptom: lang === 'da'
                            ? 'Potentielle kunder undersøger jer via website, LinkedIn, cases, søgning, AI og kolleger, før de kontakter jer. En stor del af vurderingen sker derfor uden jeres egen forklaring.'
                            : 'Potential clients research you via your website, LinkedIn, case studies, searches, AI, and peers before contacting you. Much of the assessment happens without your own explanation.',
                          relevance: lang === 'da'
                            ? 'Før I selv får ordet, har markedet allerede læst jeres website, søgning, LinkedIn, cases, dokumentation og konkurrenter. Reality Check viser, hvad der kan forstås, før dialogen begynder.'
                            : 'Before you get to speak for yourself, the market has already read your website, search footprint, LinkedIn, cases, documentation, and competitors. Reality Check shows what can be understood before the dialogue begins.'
                        },
                        {
                          id: 'situation-strategic-relevance',
                          num: '05',
                          image: plxStrategicSteps,
                          title: lang === 'da' ? 'Fra leverandør til strategisk relevans' : 'From Supplier to Strategic Relevance',
                          symptom: lang === 'da'
                            ? 'I kan skabe større værdi end markedet umiddelbart opfatter. Men kunderne placerer jer stadig som leverandør, specialist eller udførende partner.'
                            : 'You deliver greater value than the market immediately perceives. Yet clients continue to categorize you as a vendor, specialist, or execution partner.',
                          relevance: lang === 'da'
                            ? 'Hvis I vil læses som more end leverandør, skal markedet kunne se jeres strategiske relevans hurtigt og konkret. Reality Check undersøger, om jeres signal viser den værdi, risikoaflastning og forretningsbetydning, I selv mener, I har.'
                            : 'If you want to be read as more than a supplier, the market must be able to see your strategic relevance quickly and concretely. Reality Check investigates whether your signal shows the value, risk mitigation, and business significance you believe you possess.'
                        },
                        {
                          id: 'situation-market-entry',
                          num: '06',
                          image: plxMarketBridge,
                          title: lang === 'da' ? 'Nyt marked eller ny kategori' : 'New Market or Category Entry',
                          symptom: lang === 'da'
                            ? 'I står foran en markedsbevægelse og vil vide, om jeres position, fortælling og dokumentation kan bære mødet med et nyt beslutningsmiljø.'
                            : 'You are about to make a market move and want to know if your position, narrative, and documentation can sustain the encounter with a new decision-making environment.',
                          relevance: lang === 'da'
                            ? 'Når I går ind i et nyt marked eller en ny kategori, bliver I læst af mennesker, der ikke deler jeres interne historik. Reality Check undersøger, om jeres signal er tydeligt nok til at blive forstået, sammenlignet og valgt i et nyt beslutningsmiljø.'
                            : 'When entering a new market or a new category, you are read by people who do not share your internal history. Reality Check investigates whether your signal is clear enough to be understood, compared, and chosen in a new decision-making environment.'
                        },
                        {
                          id: 'situation-readability',
                          num: '07',
                          image: plxReadabilityLoupe,
                          label: lang === 'da' ? 'Kommerciel læsbarhed' : 'Commercial Readability',
                          title: lang === 'da' ? 'Når markedet har svært ved at læse jer' : 'When the market struggles to read you',
                          symptom: lang === 'da'
                            ? 'I har substans, erfaring, kvalitet eller potentiale, men det bliver ikke tydeligt nok udefra. Det, I ved om jer selv, bliver ikke nødvendigvis opfattet af markedet.'
                            : 'You possess substance, experience, quality, or potential, but it is not clear enough from the outside. What you know about yourselves is not necessarily perceived by the market.',
                          relevance: lang === 'da'
                            ? 'I kan være stærkere, end markedet kan se. Reality Check undersøger, om jeres synlige signal gør det let nok at forstå, hvad I kan, hvorfor det betyder noget, og hvorfor I er værd at vælge.'
                            : 'You can be stronger than what the market is able to see. Reality Check investigates whether your visible signal makes it simple enough to understand what you do, why it matters, and why you are worth choosing.'
                        },
                        {
                          id: 'situation-decision-brief',
                          num: '08',
                          image: plxExecutiveBrief,
                          label: lang === 'da' ? 'Eksternt beslutningsgrundlag' : 'External Decision Brief',
                          title: lang === 'da' ? 'Når næste træk kræver et eksternt grundlag' : 'When the next move requires an external basis',
                          symptom: lang === 'da'
                            ? 'I står foran en beslutning om investering, retning, prioritering, marked, website, positionering eller vækst — og vil gerne se situationen udefra, før I vælger næste skridt.'
                            : 'You are facing a critical decision regarding investments, priorities, markets, websites, positioning, or growth — and want to see the situation from the outside before choosing your next step.',
                          relevance: lang === 'da'
                            ? 'Når I skal vælge næste kommercielle træk, er interne antagelser ikke nok. Reality Check giver et eksternt grundlag for at se, hvad markedet faktisk kan forstå, forsvare og vælge jer ud fra.'
                            : 'When you have to choose your next commercial move, internal assumptions are not enough. Reality Check provides an external basis to see what the market can actually understand, defend, and choose you based on.'
                        }
                      ].map((sit) => (
                        <button
                          key={sit.id}
                          onClick={() => navigateTo(sit.id)}
                          className="bg-white border border-brand-border rounded text-left hover:border-brand-accent transition-all cursor-pointer flex flex-col justify-between group overflow-hidden h-auto min-h-[460px] shadow-sm hover:shadow-md"
                        >
                          <div className="w-full">
                            {/* Card Image Banner */}
                            <div className="relative w-full aspect-[16/10] bg-stone-100 border-b border-brand-border overflow-hidden">
                              <img 
                                src={sit.image} 
                                alt={sit.title} 
                                referrerPolicy="no-referrer"
                                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                              />
                              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-brand-border/40 px-2 py-1 rounded text-[8px] font-mono font-black text-brand-accent uppercase tracking-widest shadow-sm">
                                {sit.num} // PLX
                              </div>
                            </div>

                            {/* Card Content with elegant spacing */}
                            <div className="p-6 space-y-4">
                              <span className="text-[9px] font-mono text-brand-accent/60 font-black block tracking-widest uppercase">{sit.num} // {(sit.label || sit.title).toUpperCase()}</span>
                              <h4 className="text-base font-sans font-black text-brand-charcoal group-hover:text-brand-accent transition-colors leading-snug uppercase">
                                {sit.title}
                              </h4>
                              <div className="space-y-3 pt-1">
                                <div>
                                  <span className="text-[8px] font-mono font-bold text-brand-muted uppercase block tracking-wider">
                                    {lang === 'da' ? 'OBSERVERET SYMPTOM' : 'OBSERVED SYMPTOM'}
                                  </span>
                                  <p className="text-xs text-brand-charcoal font-medium leading-relaxed font-sans pt-0.5 line-clamp-3">
                                    {sit.symptom}
                                  </p>
                                </div>
                                <div>
                                  <span className="text-[8px] font-mono font-bold text-brand-accent uppercase block tracking-wider">
                                    {lang === 'da' ? 'KØBS- & RELEVANS' : 'DECISION RELEVANCE'}
                                  </span>
                                  <p className="text-xs text-brand-muted leading-relaxed font-sans pt-0.5 line-clamp-2">
                                    {sit.relevance}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Card Footer Action */}
                          <div className="px-6 pb-6 w-full">
                            <div className="flex items-center space-x-1.5 text-[9px] font-mono uppercase tracking-widest font-black text-brand-accent pt-4 border-t border-brand-border/40 w-full">
                              <span>{lang === 'da' ? 'Se Reality Check' : 'See Reality Check'}</span>
                              <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Homepage Strategic Situations Indikator CTA */}
                    <div className="mt-16 pt-12 border-t border-brand-border/50 max-w-2xl mx-auto text-center space-y-6">
                      <h3 className="text-xl sm:text-2xl font-sans font-black text-brand-charcoal uppercase leading-tight">
                        {lang === 'da' ? 'Er flere af situationerne relevante for jer?' : 'Are several of these situations relevant to you?'}
                      </h3>
                      <p className="text-sm text-brand-muted leading-relaxed font-sans max-w-xl mx-auto">
                        {lang === 'da' 
                          ? 'Få en kort indikation af, hvad der bør afklares, før I vælger næste skridt.'
                          : 'Get a brief indication of what should be clarified before you choose your next step.'}
                      </p>
                      <div className="flex justify-center">
                        <button
                          onClick={() => navigateTo('reality-check-indikator')}
                          className="px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer border-none shadow-sm flex items-center justify-center gap-2 group"
                        >
                          <span>{lang === 'da' ? 'Få en indikation' : 'Get an indication'}</span>
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* HOMEPAGE SECTION 7: REALITY NOTES */}
                <section className="py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto w-full border-b border-brand-border" id="section-reality-notes">
                  <div className="space-y-12">
                    <div className="text-left space-y-2 max-w-2xl">
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-accent uppercase block mb-1">
                        {lang === 'da' ? 'TROVÆRDIGHED' : 'CREDIBILITY'}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-sans font-black text-brand-charcoal uppercase">
                        Reality Notes
                      </h2>
                      <p className="text-xs sm:text-sm text-brand-muted font-sans leading-relaxed">
                        {lang === 'da'
                          ? 'Korte markedslæsninger om, hvorfor B2B-virksomheder ofte bliver sværere at vælge, end de selv tror.'
                          : 'Short market readings on why B2B enterprises often become more difficult to choose than they believe.'}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                      {[
                        {
                          num: '01',
                          title: lang === 'da' ? 'Markedet kan ikke læse jeres intentioner' : 'The market cannot read your intentions',
                          sub: lang === 'da' 
                            ? 'De fleste virksomheder tror, at markedet automatisk forstår deres gode intentioner og høje kvalitet. Sandheden er, at markedet kun læser de spor, I efterlader.' 
                            : 'Most enterprises believe the market automatically understands their excellent intentions and high quality. The truth is, the market only decodes the signals you leave behind.'
                        },
                        {
                          num: '02',
                          title: lang === 'da' ? 'Interesse er ikke en beslutning' : 'Interest is not a decision',
                          sub: lang === 'da' 
                            ? 'Et godt og positivt indledende salgsmøde er sjældent nok til at overleve den efterfølgende interne godkendelsesproces hos kunden.' 
                            : 'A highly positive initial meeting is rarely sufficient to survive the subsequent internal decision-making cycle within the client\'s organization.'
                        },
                        {
                          num: '03',
                          title: lang === 'da' ? 'AI læser jeres spor, ikke jeres intentioner' : 'AI reads your footprints, not your intentions',
                          sub: lang === 'da' 
                            ? 'Købere og AI-agenter researcher og vurderer jer uafhængigt, længe før I overhovedet inviteres til det første egentlige salgsmøde.' 
                            : 'Buyers and AI search models research and evaluate you completely independently, long before you are ever invited to a formal sales dialogue.'
                        },
                        {
                          num: '04',
                          title: lang === 'da' ? 'Prispres starter før procurement' : 'Price pressure starts long before procurement',
                          sub: lang === 'da' 
                            ? 'Når jeres differentiering og unikke værdi ikke er letlæselig, tvinges markedet til at sammenligne jer direkte på pris.' 
                            : 'When your differentiation and unique value points are not easily readable from the outside, the market is forced to compare you purely on price.'
                        }
                      ].map((item, index) => (
                        <div key={index} className="p-8 bg-white border border-brand-border flex flex-col justify-between space-y-4 hover:border-brand-accent transition-all group rounded shadow-sm">
                          <div className="space-y-2">
                            <span className="text-xs font-mono text-brand-accent/50 font-bold block">{item.num} // NOTE</span>
                            <h4 className="text-base font-sans font-black text-brand-charcoal leading-snug uppercase">{item.title}</h4>
                            <p className="text-xs text-brand-muted leading-relaxed font-sans pt-2">{item.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-start pt-4">
                      <button
                        onClick={() => navigateTo('insights')}
                        className="px-8 py-4 border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal/5 font-mono font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer"
                      >
                        {lang === 'da' ? 'Læs Reality Notes' : 'Read Reality Notes'}
                      </button>
                    </div>
                  </div>
                </section>

                {/* HOMEPAGE SECTION 8: FINAL CTA */}
                <section className="py-24 px-6 md:px-12 bg-white" id="final-cta-section">
                  <div className="max-w-3xl mx-auto w-full text-center space-y-8">
                    <div className="space-y-4">
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-accent uppercase block">
                        {lang === 'da' ? 'KOM I GANG' : 'GET STARTED'}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-sans font-black text-brand-charcoal leading-tight uppercase">
                        {lang === 'da' ? 'Hvad ser markedet, før I får ordet?' : 'What does the market see before you speak?'}
                      </h2>
                      <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto leading-relaxed font-sans">
                        {lang === 'da' 
                          ? 'PeopleLab X læser jeres virksomhed udefra og viser, hvad markedet faktisk har grundlag for at forstå, tro på, sammenligne og vælge.' 
                          : 'PeopleLab X reads your enterprise from the outside and shows exactly what the market has the footing to comprehend, believe, compare, and choose.'}
                      </p>
                    </div>

                    <div className="bg-brand-bg border border-brand-border p-6 rounded-lg max-w-lg mx-auto text-left text-xs font-mono text-brand-muted space-y-2">
                      <div className="flex justify-between border-b border-brand-border/50 pb-2">
                        <span>{lang === 'da' ? 'TYPISK LEVERING:' : 'TYPICAL DELIVERY:'}</span>
                        <span className="text-brand-charcoal font-bold">2–4 UGER / WEEKS</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="whitespace-nowrap">{lang === 'da' ? 'LEVERET OUTPUT:' : 'DELIVERABLES:'}</span>
                        <span className="text-brand-charcoal font-bold text-right ml-4">
                          {lang === 'da' 
                            ? 'Reality Check-rapport, signalvurdering, friktionskort, prioriterede fund og ledelsesgennemgang' 
                            : 'Reality Check report, signal assessment, friction map, prioritized findings, and executive review'}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => navigateTo('contact')}
                        className="px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer border-none"
                      >
                        {lang === 'da' ? 'Afklar om Reality Check er relevant for jer' : 'Start with a clarification call'}
                      </button>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* DEDICATED DIAGNOSTIC PRODUCT PAGE */}
            {activeView === 'reality-check' && (
              <RealityCheckView 
                lang={lang} 
                onNavigateToContact={() => navigateTo('contact')} 
                onNavigateToIndikator={() => navigateTo('reality-check-indikator')}
                image={plxRealityCheckHero} 
              />
            )}

            {/* SITUATIONS OVERVIEW */}
            {activeView === 'situations' && (
              <SituationsOverviewView 
                lang={lang} 
                onNavigateToSituation={(id) => navigateTo(id)} 
                onNavigateToIndikator={() => navigateTo('reality-check-indikator')}
              />
            )}

            {/* STRATEGIC SCENARIO PAGES */}
            {activeView === 'situation-before-invest' && (
              <BeforeYouInvestView 
                lang={lang} 
                onNavigateToContact={() => navigateTo('contact')} 
                image={plxInvestBlueprint} 
                onBackToOverview={() => navigateTo('situations')} 
              />
            )}
            {activeView === 'situation-interest-decision' && (
              <FromInterestView 
                lang={lang} 
                onNavigateToContact={() => navigateTo('contact')} 
                image={plxDecisionNotebook} 
                onBackToOverview={() => navigateTo('situations')} 
              />
            )}
            {activeView === 'situation-value-defensibility' && (
              <ValueDefensibilityView 
                lang={lang} 
                onNavigateToContact={() => navigateTo('contact')} 
                image={plxValueMarble} 
                onBackToOverview={() => navigateTo('situations')} 
              />
            )}
            {activeView === 'situation-buyer-led' && (
              <BuyerLedView 
                lang={lang} 
                onNavigateToContact={() => navigateTo('contact')} 
                image={plxAiLaptop} 
                onBackToOverview={() => navigateTo('situations')} 
              />
            )}
            {activeView === 'situation-strategic-relevance' && (
              <StrategicRelevanceView 
                lang={lang} 
                onNavigateToContact={() => navigateTo('contact')} 
                image={plxStrategicSteps} 
                onBackToOverview={() => navigateTo('situations')} 
              />
            )}
            {activeView === 'situation-market-entry' && (
              <MarketEntryView 
                lang={lang} 
                onNavigateToContact={() => navigateTo('contact')} 
                image={plxMarketBridge} 
                onBackToOverview={() => navigateTo('situations')} 
              />
            )}
            {activeView === 'situation-readability' && (
              <CommercialReadabilityView 
                lang={lang} 
                onNavigateToContact={() => navigateTo('contact')} 
                image={plxReadabilityLoupe} 
                onBackToOverview={() => navigateTo('situations')} 
              />
            )}
            {activeView === 'situation-decision-brief' && (
              <ExecutiveDecisionBriefView 
                lang={lang} 
                onNavigateToContact={() => navigateTo('contact')} 
                image={plxExecutiveBrief} 
                onBackToOverview={() => navigateTo('situations')} 
              />
            )}

            {/* SOLUTIONS VIEW */}
            {activeView === 'solutions' && (
              <SolutionsView 
                lang={lang} 
                onNavigateToContact={() => navigateTo('contact')} 
                initialSolution={selectedSolution as any} 
              />
            )}

            {/* INDUSTRIES / BRANCHER VIEW */}
            {activeView === 'branches' && (
              <BrancherView 
                lang={lang} 
                onNavigateToContact={() => navigateTo('contact')} 
              />
            )}

            {/* METHODOLOGY/PROCESS VIEW */}
            {activeView === 'work' && (
              <WorkView lang={lang} onNavigateToContact={() => navigateTo('contact')} />
            )}

            {/* ESSAY INSIGHT BOARD */}
            {activeView === 'insights' && (
              <InsightsView 
                lang={lang} 
                onNavigateToContact={() => navigateTo('contact')}
                onNavigateToHome={() => navigateTo('reality-check')}
              />
            )}

            {/* PHILOSOPHY/ABOUT VIEW */}
            {activeView === 'about' && (
              <AboutView 
                lang={lang} 
                onNavigateToContact={() => navigateTo('contact')} 
                onNavigateToRealityCheck={() => navigateTo('reality-check')}
              />
            )}

            {/* WHO USES PEOPLELAB X VIEW */}
            {activeView === 'who-uses' && (
              <WhoUsesView lang={lang} onNavigateToContact={() => navigateTo('contact')} />
            )}

            {/* DEDICATED FULL-PAGE CONTACT WIZARD */}
            {activeView === 'contact' && (
              <OrderRealityCheckView lang={lang} />
            )}

            {/* REALITY CHECK INDIKATOR VIEW */}
            {activeView === 'reality-check-indikator' && (
              <RealityCheckIndikatorView 
                lang={lang} 
                onNavigateToContact={() => navigateTo('contact')}
                onNavigateToRealityCheck={() => navigateTo('reality-check')}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. PREMIUM FOOTER */}
      <footer className="mt-auto bg-brand-bg border-t border-brand-border py-12 px-6 sm:px-12 text-center space-y-8">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center space-y-6">
          
          {/* Footer Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] font-mono font-bold tracking-widest text-brand-muted uppercase">
            <button 
              onClick={() => navigateTo('reality-check')}
              className="hover:text-brand-accent transition-colors cursor-pointer bg-transparent border-none"
            >
              {t.navRealityCheck}
            </button>
            <button 
              onClick={() => navigateTo('situations')}
              className="hover:text-brand-accent transition-colors cursor-pointer bg-transparent border-none"
            >
              {lang === 'da' ? 'SITUATIONER' : 'SITUATIONS'}
            </button>
            <button 
              onClick={() => navigateTo('reality-check-indikator')}
              className="hover:text-brand-accent transition-colors cursor-pointer bg-transparent border-none"
            >
              {t.navIndikator}
            </button>
            <button 
              onClick={() => navigateTo('who-uses')}
              className="hover:text-brand-accent transition-colors cursor-pointer bg-transparent border-none"
            >
              {t.navForWhom}
            </button>
            <button 
              onClick={() => navigateTo('insights')}
              className="hover:text-brand-accent transition-colors cursor-pointer bg-transparent border-none"
            >
              {t.navRealityNotes}
            </button>
            <button 
              onClick={() => navigateTo('about')}
              className="hover:text-brand-accent transition-colors cursor-pointer bg-transparent border-none"
            >
              {t.navAbout}
            </button>
            <button 
              onClick={() => navigateTo('contact')}
              className="text-brand-accent hover:text-brand-accent-dark font-black transition-colors cursor-pointer bg-transparent border-none"
            >
              {lang === 'da' ? 'AFKLAR REALITY CHECK' : 'CLARIFY REALITY CHECK'}
            </button>
          </nav>

          <div className="w-full border-t border-brand-border/40" />

          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6">
            <button 
              onClick={() => navigateTo('home')}
              className="flex items-center space-x-3.5 bg-transparent border-none cursor-pointer p-0 group"
            >
              <div className="px-2.5 py-0.5 bg-brand-accent text-white font-mono font-black text-xs tracking-wider">
                PLX
              </div>
              <span className="text-xs font-mono font-black text-brand-charcoal tracking-widest uppercase">
                PEOPLELAB X
              </span>
            </button>
            
            <p className="text-[10px] font-mono text-brand-muted uppercase tracking-widest">
              © 2026 PEOPLELAB X. {lang === 'da' ? 'ALLE RETTIGHEDER FORBEHOLDES' : 'ALL RIGHTS RESERVED'}.
            </p>

            <div className="text-[10px] font-mono text-brand-muted flex items-center space-x-4">
              <span className="hover:text-brand-accent transition-colors cursor-pointer">PRIVACY</span>
              <span className="hover:text-brand-accent transition-colors cursor-pointer">TERMS</span>
              <span className="hover:text-brand-accent transition-colors cursor-pointer">COMPLIANCE</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
