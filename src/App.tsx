import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CompanyPage from "./pages/CompanyPage";

import { trackEvent } from "./lib/analytics";
import { contentDa } from "./content/da";
import { contentEn } from "./content/en";

type PLXRoute = "/" | "/reality-scan" | "/reality-check" | "/reality-roadmap" | "/peoplelab-x";

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  // 1. Resolve initial Language and Route from current location path
  const [lang, setLang] = useState<"da" | "en">(() => {
    const path = window.location.pathname;
    if (path.startsWith("/en")) {
      return "en";
    }
    const stored = localStorage.getItem("plx_lang");
    if (stored === "en") {
      return "en";
    }
    return "da";
  });

  const [route, setRoute] = useState<PLXRoute>(() => {
    const path = window.location.pathname;
    const cleanPath = path.replace(/^\/en/, "");
    if (
      cleanPath === "/reality-scan" ||
      cleanPath === "/reality-check" ||
      cleanPath === "/reality-roadmap" ||
      cleanPath === "/peoplelab-x"
    ) {
      return cleanPath as PLXRoute;
    }
    return "/";
  });

  // 2. Backward / Forward navigation handling (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith("/en")) {
        setLang("en");
        const subPath = path.replace(/^\/en/, "") || "/";
        setRoute(subPath as PLXRoute);
      } else {
        setLang("da");
        setRoute((path || "/") as PLXRoute);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // 3. Navigation and Language State Synchronization with Browser URL
  const handleSetLanguage = (newLang: "da" | "en") => {
    setLang(newLang);
    localStorage.setItem("plx_lang", newLang);
    
    // Construct new URL path
    const pathPrefix = newLang === "en" ? "/en" : "";
    const cleanRoute = route === "/" ? "" : route;
    const newPath = `${pathPrefix}${cleanRoute}` || "/";
    
    window.history.pushState({}, "", newPath);
    trackEvent("page_view", {
      page_language: newLang,
      page_location: window.location.href,
      page_path: newPath,
    });
  };

  const handleSetRoute = (newRoute: string) => {
    const targetRoute = newRoute as PLXRoute;
    setRoute(targetRoute);
    
    const pathPrefix = lang === "en" ? "/en" : "";
    const cleanRoute = targetRoute === "/" ? "" : targetRoute;
    const newPath = `${pathPrefix}${cleanRoute}` || "/";
    
    window.history.pushState({}, "", newPath);
    trackEvent("page_view", {
      page_language: lang,
      page_location: window.location.href,
      page_path: newPath,
    });
  };

  const t = lang === "en" ? contentEn : contentDa;

  // 4. Dynamic SEO Metatags and Titles management
  useEffect(() => {
    // A. Update HTML Lang
    document.documentElement.lang = lang;

    // B. Resolve Page Title based on active route and language
    let pageTitle = t.metadata.title;
    if (route === "/reality-scan") {
      pageTitle = lang === "en" ? "Reality Scan | External signal audit — PeopleLab X" : "Reality Scan | Ekstern signalanalyse — PeopleLab X";
    } else if (route === "/reality-check") {
      pageTitle = lang === "en" ? "Reality Check | Diagnostic & Root-cause — PeopleLab X" : "Reality Check | Diagnostik & Årsagsanalyse — PeopleLab X";
    } else if (route === "/reality-roadmap") {
      pageTitle = lang === "en" ? "Reality Roadmap | Prioritization & Decision — PeopleLab X" : "Reality Roadmap | Prioritering & Retning — PeopleLab X";
    } else if (route === "/peoplelab-x") {
      pageTitle = lang === "en" ? "PeopleLab X | Independent B2B perception intelligence" : "PeopleLab X | Uafhængig B2B perception intelligence";
    }
    document.title = pageTitle;

    // C. Description Update
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", t.metadata.description);

    // D. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const baseUrl = "https://peoplelabx.com";
    const cleanRoute = route === "/" ? "" : route;
    canonical.setAttribute("href", lang === "en" ? `${baseUrl}/en${cleanRoute}` : `${baseUrl}${cleanRoute}`);

    // E. Alternates (Hreflang)
    const setHreflang = (langCode: string, href: string) => {
      let link = document.querySelector(`link[hreflang="${langCode}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", langCode);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };
    setHreflang("da-DK", `${baseUrl}${cleanRoute}`);
    setHreflang("en", `${baseUrl}/en${cleanRoute}`);
    setHreflang("x-default", `${baseUrl}${cleanRoute}`);
  }, [lang, route, t]);

  return (
    <div
      id="plx-app-wrapper"
      className="min-h-screen bg-[#F4F1EA] text-[#171817] flex flex-col font-sans selection:bg-[#DFFF54] selection:text-[#171817] antialiased"
    >
      {/* Global Header */}
      <SiteHeader
        currentLanguage={lang}
        setLanguage={handleSetLanguage}
        currentRoute={route}
        setRoute={handleSetRoute}
      />

      {/* Main Content Router */}
      <main id="main-content-scroller" className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={route}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {route === "/" && (
              <Home
                currentLanguage={lang}
                setRoute={handleSetRoute}
              />
            )}
            {(route === "/reality-scan" || route === "/reality-check" || route === "/reality-roadmap") && (
              <ProductPage
                currentLanguage={lang}
                productPath={route as any}
                setRoute={handleSetRoute}
              />
            )}
            {route === "/peoplelab-x" && (
              <CompanyPage
                currentLanguage={lang}
                setRoute={handleSetRoute}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <SiteFooter
        currentLanguage={lang}
        setRoute={handleSetRoute}
        openPrivacy={() => setPrivacyOpen(true)}
      />

      {/* Simple, Non-intrusive Privacy Policy Overlay */}
      {privacyOpen && (
        <div
          id="privacy-policy-modal"
          className="fixed inset-0 z-50 bg-[#171817]/70 flex items-center justify-center p-6"
        >
          <div
            className="bg-[#F4F1EA] text-[#171817] max-w-2xl w-full rounded-[4px] shadow-xl p-8 md:p-10 relative space-y-6 max-h-[85vh] overflow-y-auto border border-[#171817]/10"
          >
            <button
              id="privacy-modal-close-icon"
              onClick={() => setPrivacyOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#737771] hover:text-[#171817] bg-transparent border-none cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="space-y-2 border-b border-[#171817]/10 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#244C43] font-bold block">
                {t.privacyModal.tag}
              </span>
              <h2 className="font-sans font-bold text-2xl uppercase tracking-wide">
                {t.privacyModal.title}
              </h2>
            </div>

            <div className="font-sans text-sm text-[#737771] space-y-4 leading-relaxed">
              <p className="font-semibold text-[#171817]">{t.privacyModal.p1}</p>
              <p>{t.privacyModal.p2}</p>
              
              <h3 className="font-sans font-bold text-sm text-[#171817] uppercase tracking-wide pt-2">
                {t.privacyModal.p3}
              </h3>
              <p>{t.privacyModal.p4}</p>

              <h3 className="font-sans font-bold text-sm text-[#171817] uppercase tracking-wide pt-2">
                {t.privacyModal.p5}
              </h3>
              <p>{t.privacyModal.p6}</p>
              <p>{t.privacyModal.p7}</p>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                id="privacy-modal-close-button"
                onClick={() => setPrivacyOpen(false)}
                className="h-11 px-6 bg-[#244C43] hover:bg-[#244C43]/90 text-white font-sans font-bold text-xs tracking-wider uppercase rounded-[4px] border-none cursor-pointer"
              >
                {t.privacyModal.confirmBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
