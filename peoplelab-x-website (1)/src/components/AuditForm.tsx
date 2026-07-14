import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, Loader2, Mail, Building, User, Phone, Briefcase, HelpCircle, FileText
} from 'lucide-react';
import { Language } from '../types';
import { trackEvent } from '../utils/analytics';

const situationMapping: Record<string, { daLabel: string; enLabel: string; notionValue: string }> = {
  invest: {
    daLabel: "Vi overvejer en investering eller et nyt initiativ",
    enLabel: "We are considering an investment or a new initiative",
    notionValue: "Før I investerer"
  },
  interest: {
    daLabel: "Vi får interesse, men det bliver ikke tydeligt til næste skridt",
    enLabel: "We get interest, but it does not clearly move to the next step",
    notionValue: "Fra interesse til beslutning"
  },
  defensibility: {
    daLabel: "Vi skal gøre vores værdi lettere at forklare og forsvare",
    enLabel: "We need to make our value easier to explain and defend",
    notionValue: "Når jeres værdi skal kunne forsvares"
  },
  clarity: {
    daLabel: "Vi har brug for mere klarhed før en vigtig dialog",
    enLabel: "We need more clarity before an important dialogue",
    notionValue: "Klarhed før dialogen"
  },
  relevance: {
    daLabel: "Vi vil løfte os fra leverandør til mere strategisk partner",
    enLabel: "We want to move from supplier to more strategic partner",
    notionValue: "Fra leverandør til strategisk relevans"
  },
  'market-entry': {
    daLabel: "Vi går mod et nyt marked eller en ny kategori",
    enLabel: "We are entering a new market or category",
    notionValue: "Nyt marked eller ny kategori"
  },
  readability: {
    daLabel: "Markedet forstår os ikke tydeligt nok",
    enLabel: "The market does not understand us clearly enough",
    notionValue: "Når markedet har svært ved at læse jer"
  },
  basis: {
    daLabel: "Vi har brug for et eksternt blik før næste træk",
    enLabel: "We need an outside view before the next move",
    notionValue: "Når næste træk kræver et eksternt grundlag"
  },
  other: {
    daLabel: "Vi er ikke helt sikre endnu",
    enLabel: "We are not completely sure yet",
    notionValue: "Ikke afklaret endnu"
  }
};

interface AuditFormProps {
  lang: Language;
  preselectedSituation?: string;
}

export default function AuditForm({ lang, preselectedSituation = 'invest' }: AuditFormProps) {
  const initialSituationKey = preselectedSituation === 'broad' || preselectedSituation === 'invest' || !preselectedSituation ? 'invest' : preselectedSituation;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    situation: initialSituationKey,
    investmentText: '',
    outsideText: ''
  });

  const [consent, setConsent] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progressLog, setProgressLog] = useState<string>('');
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Tracking situation selection changes
    if (e.target.name === 'situation') {
      trackEvent('form_situation_selected', { situationId: e.target.value });
    }

    // Clear field-specific validation error on keypress
    if (validationErrors[e.target.name]) {
      setValidationErrors({
        ...validationErrors,
        [e.target.name]: ''
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = lang === 'da' ? 'Navn er påkrævet' : 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = lang === 'da' ? 'Arbejdsmail er påkrævet' : 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = lang === 'da' ? 'Indtast en gyldig e-mail-adresse' : 'Enter a valid email address';
    }
    if (!formData.company.trim()) {
      errors.company = lang === 'da' ? 'Virksomhed er påkrævet' : 'Company name is required';
    }
    if (!formData.role.trim()) {
      errors.role = lang === 'da' ? 'Rolle / funktion er påkrævet' : 'Role / function is required';
    }
    if (!formData.investmentText.trim()) {
      errors.investmentText = lang === 'da' ? 'Dette felt er påkrævet' : 'This field is required';
    }
    if (!formData.outsideText.trim()) {
      errors.outsideText = lang === 'da' ? 'Dette felt er påkrævet' : 'This field is required';
    }
    if (!consent) {
      errors.consent = lang === 'da' ? 'Du skal give samtykke for at indsende' : 'You must give consent to submit';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);
    trackEvent('form_reality_check_submit');
    trackEvent('cta_formular_send');
    
    const logs = lang === 'da' ? [
      'Validerer kontaktoplysninger...',
      'Etablerer forbindelse til afklaringskanal...',
      'Udlæser strategisk situation og kontekst...',
      'Sikrer dataforbindelse og opretter journal...',
      'Genererer personlig bekræftelse og underretning...'
    ] : [
      'Validating contact information...',
      'Establishing secure clarification channel...',
      'Analyzing strategic situation and context...',
      'Securing database connection and creating record...',
      'Generating custom confirmation and notifications...'
    ];

    let currentLogIdx = 0;
    setProgressLog(logs[0]);

    const logInterval = setInterval(() => {
      if (currentLogIdx < logs.length - 1) {
        currentLogIdx++;
        setProgressLog(logs[currentLogIdx]);
      }
    }, 600);

    // Combine fields into decisionText with clear label formatting as requested
    const combinedDecisionText = lang === 'da'
      ? `Hvad overvejer de at ændre, afklare eller sætte i gang:\n${formData.investmentText}\n\nHvad vil de gerne blive klogere på udefra:\n${formData.outsideText}`
      : `What are they considering changing, clarifying or starting:\n${formData.investmentText}\n\nWhat would they like to understand better from the outside:\n${formData.outsideText}`;

    try {
      // Retrieve Decision Entry hidden fields if they exist in session storage
      const decision_entry_company_type = sessionStorage.getItem('decision_entry_company_type') || null;
      const decision_entry_situation_id = sessionStorage.getItem('decision_entry_situation_id') || null;
      const decision_entry_situation_label = sessionStorage.getItem('decision_entry_situation_label') || null;
      const decision_entry_recommended_analysis = sessionStorage.getItem('decision_entry_recommended_analysis') || null;
      const decision_entry_cta_label = sessionStorage.getItem('decision_entry_cta_label') || null;
      const decision_entry_language = sessionStorage.getItem('decision_entry_language') || null;
      const decision_entry_page_path = sessionStorage.getItem('decision_entry_page_path') || null;
      const decision_entry_target_anchor = sessionStorage.getItem('decision_entry_target_anchor') || null;

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          phone: formData.phone || 'N/A',
          situation: situationMapping[formData.situation]?.notionValue || formData.situation,
          decisionText: combinedDecisionText,
          investmentText: formData.investmentText,
          outsideText: formData.outsideText,
          timeframe: lang === 'da' ? 'Afklaringssamtale' : 'Clarification Call',
          consent: true,
          language: lang === 'da' ? 'DA' : 'EN',
          url: window.location.href,
          decision_entry_company_type,
          decision_entry_situation_id,
          decision_entry_situation_label,
          decision_entry_recommended_analysis,
          decision_entry_cta_label,
          decision_entry_language,
          decision_entry_page_path,
          decision_entry_target_anchor
        })
      });

      const result = await response.json();
      clearInterval(logInterval);

      if (response.ok && result.success) {
        setIsSubmitting(false);
        setIsComplete(true);
        trackEvent('form_message_completed');
      } else {
        setIsSubmitting(false);
        setErrorMessage(lang === 'da'
          ? 'Henvendelsen blev ikke sendt.\nPrøv igen om lidt — eller skriv direkte til PeopleLab, hvis fejlen fortsætter.'
          : 'Your enquiry was not sent.\nPlease try again shortly — or contact PeopleLab directly if the issue continues.');
      }
    } catch (error) {
      clearInterval(logInterval);
      console.error("Submission failed:", error);
      setIsSubmitting(false);
      setErrorMessage(lang === 'da'
        ? 'Henvendelsen blev ikke sendt.\nPrøv igen om lidt — eller skriv direkte til PeopleLab, hvis fejlen fortsætter.'
        : 'Your enquiry was not sent.\nPlease try again shortly — or contact PeopleLab directly if the issue continues.');
    }
  };

  const situations = Object.entries(situationMapping).map(([key, info]) => ({
    id: key,
    label: lang === 'da' ? info.daLabel : info.enLabel
  }));

  return (
    <div className="bg-white border border-brand-border rounded overflow-hidden shadow-sm animate-fade-in" id="interactive-audit-wizard">
      
      {/* Progress Line */}
      {!isComplete && !isSubmitting && (
        <div className="h-1 bg-brand-accent w-full" />
      )}

      <div className="p-6 sm:p-8">
        
        <AnimatePresence mode="wait">
          {/* SUCCESS STATE */}
          {isComplete ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 space-y-6 text-brand-charcoal"
              id="form-complete-screen"
            >
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-500 rounded-full flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-black uppercase tracking-tight font-sans">
                  {lang === 'da' ? 'Tak for din henvendelse' : 'Thank you for your enquiry'}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                  {lang === 'da' 
                    ? 'Vi har modtaget din besked og vurderer jeres situation.'
                    : 'We have received your message and are evaluating your situation.'}
                </p>
              </div>

              {/* Step checklist exactly as requested by briefing */}
              <div className="p-5 bg-brand-card border border-brand-border rounded-lg max-w-md mx-auto text-left space-y-4">
                <span className="text-[10px] font-mono text-brand-accent uppercase block tracking-widest font-black border-b border-brand-border pb-1.5">
                  {lang === 'da' ? 'EFTER HENVENDELSEN — PROCES' : 'AFTER THE INQUIRY — PROCESS'}
                </span>
                <ol className="space-y-3 font-sans text-xs text-brand-charcoal font-medium">
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-[10px] bg-brand-accent text-white w-4 h-4 rounded-full flex items-center justify-center shrink-0">1</span>
                    <span>{lang === 'da' ? 'Vi læser jeres besked og vurderer situationen.' : 'We read your message and assess the situation.'}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-[10px] bg-brand-accent text-white w-4 h-4 rounded-full flex items-center justify-center shrink-0">2</span>
                    <span>{lang === 'da' ? 'Hvis der er et muligt fit, aftaler vi en kort afklaringssamtale.' : 'If there is a potential fit, we agree on a short clarification call.'}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-[10px] bg-brand-accent text-white w-4 h-4 rounded-full flex items-center justify-center shrink-0">3</span>
                    <span>
                      {lang === 'da' 
                        ? 'Hvis Reality Check er relevant, modtager I en kort scope note med formål, proces, output, tidsramme og pris.' 
                        : 'If a Reality Check is relevant, you receive a brief scope note with purpose, process, output, timeframe, and price.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-[10px] bg-brand-accent text-white w-4 h-4 rounded-full flex items-center justify-center shrink-0">4</span>
                    <span>{lang === 'da' ? 'Først derefter starter analysen.' : 'Only after that does the analysis start.'}</span>
                  </li>
                </ol>
              </div>
            </motion.div>
          ) : isSubmitting ? (
            /* LOADING STATE */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 space-y-6"
              id="form-submitting-screen"
            >
              <Loader2 className="w-8 h-8 text-brand-accent animate-spin mx-auto" />
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block animate-pulse font-bold">
                  {lang === 'da' ? 'FORBINDER SIKKERT...' : 'CONNECTING SECURELY...'}
                </span>
                <p className="text-xs text-brand-muted font-mono min-h-[18px]">
                  {progressLog}
                </p>
              </div>
            </motion.div>
          ) : (
            /* FORM STATE */
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              {/* Server/validation errors block */}
              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 rounded text-xs space-y-1">
                  <p className="font-bold uppercase tracking-wider text-[10px] text-red-700">⚠️ {lang === 'da' ? 'FEJL VED INDSENDELSE' : 'SUBMISSION ERROR'}</p>
                  <p className="font-sans text-red-950 leading-relaxed">{errorMessage}</p>
                </div>
              )}

              {/* Group 1: Profiloplysninger */}
              <div className="space-y-4">
                <div className="border-b border-brand-border pb-1.5 flex items-center gap-2">
                  <Briefcase size={12} className="text-brand-accent" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-charcoal font-black">
                    {lang === 'da' ? '01. Profil og virksomhed' : '01. Profile and company'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Navn */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-muted mb-1 font-bold">
                      {lang === 'da' ? 'Navn' : 'Name'} <span className="text-brand-accent">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Thomas Poulsen"
                        className={`w-full pl-9 pr-4 py-2 bg-brand-card border rounded text-xs text-brand-charcoal placeholder-brand-muted/40 focus:border-brand-accent outline-none font-sans ${validationErrors.name ? 'border-red-500 bg-red-50/10' : 'border-brand-border'}`}
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-muted" />
                    </div>
                    {validationErrors.name && (
                      <p className="text-[10px] text-red-600 font-bold mt-1 font-mono">✕ {validationErrors.name}</p>
                    )}
                  </div>

                  {/* Arbejdsmail */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-muted mb-1 font-bold">
                      {lang === 'da' ? 'Arbejdsmail' : 'Work email'} <span className="text-brand-accent">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="thomas@virksomhed.dk"
                        className={`w-full pl-9 pr-4 py-2 bg-brand-card border rounded text-xs text-brand-charcoal placeholder-brand-muted/40 focus:border-brand-accent outline-none font-sans ${validationErrors.email ? 'border-red-500 bg-red-50/10' : 'border-brand-border'}`}
                      />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-muted" />
                    </div>
                    {validationErrors.email && (
                      <p className="text-[10px] text-red-600 font-bold mt-1 font-mono">✕ {validationErrors.email}</p>
                    )}
                  </div>

                  {/* Virksomhed */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-muted mb-1 font-bold">
                      {lang === 'da' ? 'Virksomhed' : 'Company'} <span className="text-brand-accent">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enterprise A/S"
                        className={`w-full pl-9 pr-4 py-2 bg-brand-card border rounded text-xs text-brand-charcoal placeholder-brand-muted/40 focus:border-brand-accent outline-none font-sans ${validationErrors.company ? 'border-red-500 bg-red-50/10' : 'border-brand-border'}`}
                      />
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-muted" />
                    </div>
                    {validationErrors.company && (
                      <p className="text-[10px] text-red-600 font-bold mt-1 font-mono">✕ {validationErrors.company}</p>
                    )}
                  </div>

                  {/* Rolle / funktion */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-muted mb-1 font-bold">
                      {lang === 'da' ? 'Rolle / funktion' : 'Role / function'} <span className="text-brand-accent">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder={lang === 'da' ? 'F.eks. CEO, CCO, Ejerleder' : 'E.g. CEO, CCO, Founder'}
                        className={`w-full px-3 py-2 bg-brand-card border rounded text-xs text-brand-charcoal placeholder-brand-muted/40 focus:border-brand-accent outline-none font-sans ${validationErrors.role ? 'border-red-500 bg-red-50/10' : 'border-brand-border'}`}
                      />
                    </div>
                    {validationErrors.role && (
                      <p className="text-[10px] text-red-600 font-bold mt-1 font-mono">✕ {validationErrors.role}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Group 2: Strategisk Situation */}
              <div className="space-y-4">
                <div className="border-b border-brand-border pb-1.5 flex items-center gap-2">
                  <HelpCircle size={12} className="text-brand-accent" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-charcoal font-black">
                    {lang === 'da' ? '02. Hvad står I med?' : '02. What are you facing?'}
                  </span>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-muted mb-1 font-bold">
                    {lang === 'da' ? 'Hvad passer bedst på jeres situation?' : 'Which situation fits best?'} <span className="text-brand-accent">*</span>
                  </label>
                  <select
                    name="situation"
                    value={formData.situation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-brand-card border border-brand-border rounded text-xs text-brand-charcoal focus:border-brand-accent outline-none font-sans"
                  >
                    {situations.map((sit) => (
                      <option key={sit.id} value={sit.id} className="bg-white text-brand-charcoal">
                        {sit.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Group 3: Beslutningskontekst */}
              <div className="space-y-4">
                <div className="border-b border-brand-border pb-1.5 flex items-center gap-2">
                  <FileText size={12} className="text-brand-accent" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-charcoal font-black">
                    {lang === 'da' ? '03. Kort kontekst' : '03. Short context'}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Hvad overvejer I at ændre... */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-muted mb-1 font-bold">
                      {lang === 'da' ? 'Hvad overvejer I at ændre, afklare eller sætte i gang?' : 'What are you considering changing, clarifying or starting?'} <span className="text-brand-accent">*</span>
                    </label>
                    <textarea
                      name="investmentText"
                      value={formData.investmentText}
                      onChange={handleChange}
                      placeholder={lang === 'da' ? 'F.eks. website, markedsindsats, salgsproces, positionering, ny kategori, investor-/bestyrelsesbeslutning eller noget andet, der kræver mere klarhed.' : 'For example website, market initiative, sales process, positioning, new category, investor/board decision or something else that requires more clarity.'}
                      className={`w-full h-18 px-3 py-2 bg-brand-card border rounded text-xs text-brand-charcoal placeholder-brand-muted/40 focus:border-brand-accent outline-none resize-none font-sans ${validationErrors.investmentText ? 'border-red-500 bg-red-50/10' : 'border-brand-border'}`}
                    />
                    {validationErrors.investmentText && (
                      <p className="text-[10px] text-red-600 font-bold mt-1 font-mono">✕ {validationErrors.investmentText}</p>
                    )}
                  </div>

                  {/* Hvad vil I gerne forstå bedre udefra? */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-muted mb-1 font-bold">
                      {lang === 'da' ? 'Hvad vil I gerne blive klogere på udefra?' : 'What would you like to understand better from the outside?'} <span className="text-brand-accent">*</span>
                    </label>
                    <textarea
                      name="outsideText"
                      value={formData.outsideText}
                      onChange={handleChange}
                      placeholder={lang === 'da' ? 'F.eks. hvordan markedet forstår jer, hvor dialogen går i stå, hvad kunderne mangler for at tage jer videre, eller hvad der skal stå tydeligere, før I vælger næste skridt.' : 'For example how the market understands you, where the dialogue stops, what customers need in order to move you forward, or what needs to become clearer before you choose the next step.'}
                      className={`w-full h-18 px-3 py-2 bg-brand-card border rounded text-xs text-brand-charcoal placeholder-brand-muted/40 focus:border-brand-accent outline-none resize-none font-sans ${validationErrors.outsideText ? 'border-red-500 bg-red-50/10' : 'border-brand-border'}`}
                    />
                    {validationErrors.outsideText && (
                      <p className="text-[10px] text-red-600 font-bold mt-1 font-mono">✕ {validationErrors.outsideText}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Consent and Submit block */}
              <div className="pt-4 border-t border-brand-border space-y-4">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (e.target.checked && validationErrors.consent) {
                        setValidationErrors({ ...validationErrors, consent: '' });
                      }
                    }}
                    className="mt-0.5 rounded border-brand-border text-brand-accent focus:ring-brand-accent h-3.5 w-3.5 cursor-pointer"
                  />
                  <span className="text-[10px] text-brand-muted leading-tight font-sans select-none">
                    {lang === 'da' ? (
                      <span>Jeg accepterer, at PeopleLab må kontakte mig om denne henvendelse. <span className="text-brand-accent font-bold">*</span></span>
                    ) : (
                      <span>I agree that PeopleLab may contact me about this enquiry. <span className="text-brand-accent font-bold">*</span></span>
                    )}
                  </span>
                </label>
                {validationErrors.consent && (
                  <p className="text-[10px] text-red-600 font-bold font-mono">✕ {validationErrors.consent}</p>
                )}

                <div className="pt-2 flex flex-col items-center space-y-3.5">
                  <button
                    type="submit"
                    className="w-full py-3 bg-brand-accent hover:bg-brand-accent-dark text-white font-mono font-black text-xs uppercase tracking-widest rounded transition-all active:scale-98 cursor-pointer border-none shadow-[0_4px_15px_rgba(15,76,92,0.2)]"
                    id="btn-form-submit-final"
                  >
                    {lang === 'da' ? 'Send henvendelse' : 'Send enquiry'}
                  </button>

                  {/* Quality expectation message below the form exactly as requested */}
                  <p className="text-[10px] text-brand-muted text-center font-sans leading-relaxed max-w-sm px-2">
                    {lang === 'da'
                      ? 'Vi læser henvendelsen igennem og vender tilbage med forslag til et kort næste skridt.'
                      : 'We will read your enquiry and get back to you with a suggested next step.'}
                  </p>
                </div>
              </div>

            </form>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
