import React, { useState, useRef } from "react";
import { ArrowRight, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { trackPeopleLabEvent } from "../lib/analytics";

interface ContactOpeningProps {
  currentLanguage: "da" | "en";
}

export default function ContactOpening({ currentLanguage }: ContactOpeningProps) {
  const isEn = currentLanguage === "en";
  const analyticsLanguage = isEn ? "EN" : "DA";
  const hasStartedRef = useRef(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    enquiry: "",
    website_hp: "", // honeypot field
    strategic_situation: "",
    product: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const t = {
    tag: isEn ? "INITIATE DIALOGUE" : "START EN SAMTALE",
    heading: isEn
      ? "Let's look at your reality"
      : "Lad os se på jeres virkelighed",
    p1: isEn
      ? "Perhaps you are facing a concrete commercial challenge."
      : "Måske står I med en konkret kommerciel udfordring.",
    p2: isEn
      ? "Perhaps you feel that others do not fully understand the value you create."
      : "Måske oplever I, at andre ikke helt forstår den værdi, I skaber.",
    p3: isEn
      ? "Or perhaps you want to know what customers, partners, and others actually encounter when they evaluate you from the outside."
      : "Eller måske vil I vide, hvad kunder, samarbejdspartnere og andre faktisk møder, når de vurderer jer udefra.",
    p4: isEn
      ? "Write to us."
      : "Skriv til os.",
    p5: isEn
      ? "We start by understanding where you stand, and what makes the conversation relevant."
      : "Vi starter med at forstå, hvor I står, og hvad der gør samtalen relevant.",
    subject: isEn ? "Initial conversation with PeopleLab X" : "Indledende samtale med PeopleLab X",
    
    // Form labels
    labelName: isEn ? "Name" : "Navn",
    labelCompany: isEn ? "Company" : "Virksomhed",
    labelEmail: isEn ? "Work email" : "Arbejdsmail",
    labelEnquiry: isEn ? "Enquiry" : "Henvendelse",
    btnSubmit: isEn ? "Send enquiry" : "Send henvendelse",
    btnSubmitting: isEn ? "Sending..." : "Sender...",

    // Feedback messages
    successMsg: isEn
      ? "Thank you for your enquiry. We will respond as soon as possible."
      : "Tak for jeres henvendelse. Vi vender tilbage hurtigst muligt.",
    errorMsg: isEn
      ? "Your enquiry could not be sent. Please try again or contact us directly."
      : "Henvendelsen kunne ikke sendes. Prøv igen eller kontakt os direkte.",
  };

  const mailtoUrl = `mailto:office@peoplelabx.com?subject=${encodeURIComponent(t.subject)}`;

  const handleFormInteraction = () => {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackPeopleLabEvent("form_start", {
        form_id: "contact_qualification_form",
        form_name: "PeopleLab X Contact Qualification",
        form_status: "started",
        conversion_type: "confidential_inquiry",
        funnel_stage: "QUALIFICATION",
        language: analyticsLanguage,
        page_path: typeof window !== "undefined" ? window.location.pathname : "",
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name !== "website_hp") {
      handleFormInteraction();
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "strategic_situation" || name === "situation") {
      trackPeopleLabEvent("form_selection", {
        form_id: "contact_qualification_form",
        form_name: "PeopleLab X Contact Qualification",
        selection_type: "strategic_situation",
        selected_value: value,
        strategic_situation: value,
        funnel_stage: "SITUATION",
        language: analyticsLanguage,
        page_path: typeof window !== "undefined" ? window.location.pathname : "",
      });
    } else if (name === "product") {
      trackPeopleLabEvent("form_selection", {
        form_id: "contact_qualification_form",
        form_name: "PeopleLab X Contact Qualification",
        selection_type: "product",
        selected_value: value,
        product: value,
        funnel_stage: "FIT",
        language: analyticsLanguage,
        page_path: typeof window !== "undefined" ? window.location.pathname : "",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (formData.website_hp) {
      // Honeypot triggered - stop without sending any GA4 analytics event
      setStatus("error");
      setErrorMessage(t.errorMsg);
      return;
    }

    if (!formData.name.trim() || !formData.company.trim() || !formData.email.trim() || !formData.enquiry.trim()) {
      setStatus("error");
      setErrorMessage(t.errorMsg);
      trackPeopleLabEvent("form_error", {
        form_id: "contact_qualification_form",
        form_name: "PeopleLab X Contact Qualification",
        form_status: "error",
        error_type: "validation",
        conversion_type: "confidential_inquiry",
        strategic_situation: formData.strategic_situation || undefined,
        product: formData.product || undefined,
        funnel_stage: "CONVERSION",
        language: analyticsLanguage,
        page_path: typeof window !== "undefined" ? window.location.pathname : "",
      });
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          language: isEn ? "UK" : "DK",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        trackPeopleLabEvent("form_submit", {
          form_id: "contact_qualification_form",
          form_name: "PeopleLab X Contact Qualification",
          form_status: "success",
          conversion_type: "confidential_inquiry",
          strategic_situation: formData.strategic_situation || undefined,
          product: formData.product || undefined,
          funnel_stage: "CONVERSION",
          language: analyticsLanguage,
          page_path: typeof window !== "undefined" ? window.location.pathname : "",
        });
        // Clear form on success
        setFormData({
          name: "",
          company: "",
          email: "",
          enquiry: "",
          website_hp: "",
          strategic_situation: "",
          product: "",
        });
      } else {
        setStatus("error");
        const errorCategory = data.error || "temporary server error";
        console.warn(`[Contact Form Submission Failed] Safe Category: ${errorCategory}`);
        setErrorMessage(t.errorMsg);
        trackPeopleLabEvent("form_error", {
          form_id: "contact_qualification_form",
          form_name: "PeopleLab X Contact Qualification",
          form_status: "error",
          error_type: "backend",
          conversion_type: "confidential_inquiry",
          strategic_situation: formData.strategic_situation || undefined,
          product: formData.product || undefined,
          funnel_stage: "CONVERSION",
          language: analyticsLanguage,
          page_path: typeof window !== "undefined" ? window.location.pathname : "",
        });
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      console.warn("[Contact Form Submission Failed] Safe Category: temporary server error");
      setErrorMessage(t.errorMsg);
      trackPeopleLabEvent("form_error", {
        form_id: "contact_qualification_form",
        form_name: "PeopleLab X Contact Qualification",
        form_status: "error",
        error_type: "network",
        conversion_type: "confidential_inquiry",
        strategic_situation: formData.strategic_situation || undefined,
        product: formData.product || undefined,
        funnel_stage: "CONVERSION",
        language: analyticsLanguage,
        page_path: typeof window !== "undefined" ? window.location.pathname : "",
      });
    }
  };

  return (
    <section
      id="contact-section"
      className="bg-[#F4F1EA] text-[#171817] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#DDE5E1] relative"
    >
      <div className="max-w-[850px] mx-auto text-center space-y-12">
        <div className="space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#244C43] block font-bold">
            {t.tag}
          </span>
          <h2 className="font-sans font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] uppercase text-[#171817]">
            {t.heading}
          </h2>
        </div>

        <div className="max-w-[650px] mx-auto text-base md:text-lg text-[#424641] space-y-6 leading-relaxed font-sans">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <p className="font-semibold text-[#171817]">{t.p4}</p>
          <p>{t.p5}</p>
        </div>

        {/* Contact Form Container */}
        <div className="max-w-[550px] mx-auto text-left bg-[#EBE7DD]/40 border border-[#DDE5E1] p-8 md:p-10 rounded-[6px] shadow-sm">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center py-8 space-y-4"
              role="status"
            >
              <div className="w-12 h-12 bg-[#244C43]/10 text-[#244C43] rounded-full flex items-center justify-center">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="font-sans font-bold text-lg uppercase text-[#171817]">
                {isEn ? "Success" : "Henvendelse modtaget"}
              </h3>
              <p className="text-sm md:text-base text-[#424641] max-w-[400px]">
                {t.successMsg}
              </p>
              <button
                type="button"
                onClick={() => {
                  hasStartedRef.current = false;
                  setStatus("idle");
                }}
                className="mt-4 text-xs font-mono uppercase tracking-widest text-[#244C43] font-bold border-b border-[#244C43] hover:border-transparent transition-all"
              >
                {isEn ? "Send another message" : "Send ny henvendelse"}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-[4px] flex items-start gap-3"
                  role="alert"
                >
                  <AlertCircle size={18} className="text-red-600 shrink-0 mt-0.5" />
                  <div className="text-xs md:text-sm">
                    {errorMessage}
                  </div>
                </motion.div>
              )}

              {/* Honeypot field (hidden from users, helps block spam bots) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_hp">Do not fill this out if you are human</label>
                <input
                  type="text"
                  id="website_hp"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={(e) => setFormData((prev) => ({ ...prev, website_hp: e.target.value }))}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Grid for Name and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="form-name"
                    className="block text-xs font-mono uppercase tracking-wider text-[#424641] font-bold"
                  >
                    {t.labelName} <span className="text-[#244C43] font-sans">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={handleFormInteraction}
                    required
                    aria-required="true"
                    disabled={status === "submitting"}
                    className="w-full h-12 px-4 bg-white/80 focus:bg-white border border-[#244C43]/20 focus:border-[#244C43] rounded-[4px] font-sans text-sm text-[#171817] placeholder-[#424641]/40 outline-none transition-all duration-200 focus:ring-1 focus:ring-[#244C43]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="form-company"
                    className="block text-xs font-mono uppercase tracking-wider text-[#424641] font-bold"
                  >
                    {t.labelCompany} <span className="text-[#244C43] font-sans">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={handleFormInteraction}
                    required
                    aria-required="true"
                    disabled={status === "submitting"}
                    className="w-full h-12 px-4 bg-white/80 focus:bg-white border border-[#244C43]/20 focus:border-[#244C43] rounded-[4px] font-sans text-sm text-[#171817] placeholder-[#424641]/40 outline-none transition-all duration-200 focus:ring-1 focus:ring-[#244C43]"
                  />
                </div>
              </div>

              {/* Work Email */}
              <div className="space-y-2">
                <label
                  htmlFor="form-email"
                  className="block text-xs font-mono uppercase tracking-wider text-[#424641] font-bold"
                >
                  {t.labelEmail} <span className="text-[#244C43] font-sans">*</span>
                </label>
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={handleFormInteraction}
                  required
                  aria-required="true"
                  disabled={status === "submitting"}
                  className="w-full h-12 px-4 bg-white/80 focus:bg-white border border-[#244C43]/20 focus:border-[#244C43] rounded-[4px] font-sans text-sm text-[#171817] placeholder-[#424641]/40 outline-none transition-all duration-200 focus:ring-1 focus:ring-[#244C43]"
                />
              </div>

              {/* Enquiry */}
              <div className="space-y-2">
                <label
                  htmlFor="form-enquiry"
                  className="block text-xs font-mono uppercase tracking-wider text-[#424641] font-bold"
                >
                  {t.labelEnquiry} <span className="text-[#244C43] font-sans">*</span>
                </label>
                <textarea
                  id="form-enquiry"
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleInputChange}
                  onFocus={handleFormInteraction}
                  required
                  aria-required="true"
                  disabled={status === "submitting"}
                  rows={4}
                  className="w-full p-4 bg-white/80 focus:bg-white border border-[#244C43]/20 focus:border-[#244C43] rounded-[4px] font-sans text-sm text-[#171817] placeholder-[#424641]/40 outline-none transition-all duration-200 focus:ring-1 focus:ring-[#244C43] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="form-submit-button"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-[#244C43] hover:bg-[#244C43]/95 disabled:bg-[#244C43]/40 text-white font-sans font-bold text-xs tracking-widest uppercase rounded-[4px] cursor-pointer transition-all active:scale-[0.98] shadow-sm w-full transition-all duration-200 disabled:cursor-not-allowed"
                >
                  <span>{status === "submitting" ? t.btnSubmitting : t.btnSubmit}</span>
                  {status !== "submitting" && <ArrowRight size={14} />}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Email Direct Fallback */}
        <div className="pt-8 text-center border-t border-[#DDE5E1] max-w-[550px] mx-auto">
          <p className="text-xs font-mono text-[#424641]">
            {isEn ? "Prefer direct email?" : "Foretrækker du direkte e-mail?"}{" "}
            <a
              id="visible-email-link"
              href={mailtoUrl}
              className="text-[#244C43] hover:text-[#244C43]/80 font-bold underline underline-offset-4"
            >
              office@peoplelabx.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
