"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";

export default function Header() {
  const t = useTranslations("header");
  const pathname = usePathname();
const isHome =
  pathname === "/" ||
  pathname === "/en" ||
  pathname === "/zh";
  const sectionLink = (section: string) =>
  isHome ? `#${section}` : `/#${section}`;
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [marketOpen, setMarketOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);

  const languageRef = useRef<HTMLDivElement>(null);

  // Scroll tracker
  useEffect(() => {
    const sections = ["home", "about", "products", "workflow", "insights", "market-prices","contact"];
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) current = section;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setProductOpen(false);
    setMarketOpen(false);
    setLanguageOpen(false);
    setMobileLanguageOpen(false);
  };

  const linkClass = (section: string) =>
    `transition ${activeSection === section ? "text-[#D4AF37] font-semibold" : "text-gray-700"}`;

  return (
    <header className="flex items-center justify-between px-6 py-5 border-b bg-gray-50 sticky top-0 z-50">
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-3">
        <img src="/LOGO.png" alt="Golden Falcon Energy Logo" className="h-10 w-auto" />
      </Link>

      {/* DESKTOP MENU */}
      <nav className="hidden md:flex gap-8 text-sm">
        <a href={sectionLink("home")} className={linkClass("home")}>{t("home")}</a>

<a href={sectionLink("about")} className={linkClass("about")}>{t("about")}</a>

<a href={sectionLink("products")} className={linkClass("products")}>{t("products")}</a>

<a href={sectionLink("workflow")} className={linkClass("workflow")}>{t("workflow")}</a>

<a href={sectionLink("insights")} className={linkClass("insights")}>{t("insights")}</a>

<a href={sectionLink("market-prices")} className={linkClass("market-prices")}>{t("marketPrices")}</a>

<a href={sectionLink("contact")} className={linkClass("contact")}>{t("contact")}</a>
        <a href="verify" className="transition text-gray-700">{t("verify")}</a>
      </nav>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block" ref={languageRef}>
          <button
            onClick={() => setLanguageOpen(!languageOpen)}
            className={`
              flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full border transition-all duration-200
              ${languageOpen
                ? "border-[#D4AF37] bg-[#0F2E4D]/5 text-[#0F2E4D]"
                : "border-[#C8A24A]/30 text-gray-700 hover:border-[#C8A24A] hover:bg-[#C8A24A]/5"}
            `}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C8A24A" strokeWidth="1.6" className="w-4 h-4">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18" />
              <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z" />
            </svg>
            <span>Language</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-3 h-3 transition-transform duration-200 ${languageOpen ? "rotate-180" : ""}`}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <div
            className={`
              absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl border border-[#C8A24A]/15 overflow-hidden z-50 origin-top-right transition-all duration-200 ease-out
              ${languageOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
            `}
          >
            <p className="px-4 pt-3 pb-1 text-[11px] uppercase tracking-wide text-gray-400 font-semibold">
              Select Language
            </p>

            <Link
              href="/"
              locale="en"
              onClick={() => setLanguageOpen(false)}
              className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-[#0F2E4D] font-medium hover:bg-[#C8A24A]/10 transition-colors"
            >
              <span className="flex items-center gap-3">
                🇬🇧 <span>English</span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C8A24A" strokeWidth="2.5" className="w-3.5 h-3.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </Link>

            <Link
              href="/"
              locale="zh"
              onClick={() => setLanguageOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-[#C8A24A]/10 hover:text-[#0F2E4D] transition-colors border-t border-gray-100"
            >
              🇨🇳 <span>中文</span>
            </Link>
          </div>
        </div>

        <a href="/#contact" className="hidden md:block bg-[#0F2E4D] text-white px-4 py-2 rounded-lg hover:bg-[#D4AF37] transition">
          Submit LOI
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-md border border-[#C8A24A] text-[#C8A24A] transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-0.5 bg-[#C8A24A] transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#C8A24A] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#C8A24A] transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0F2E4D] border-b border-[#C8A24A] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[calc(100vh-80px)] opacity-100 py-6 overflow-y-auto" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 text-white">
          <a href={sectionLink("home")} onClick={closeMenu} className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition">
            {t("home")}
          </a>
          <a href={sectionLink("about")} onClick={closeMenu} className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition">
            {t("about")}
          </a>

          <button onClick={() => setProductOpen(!productOpen)} className="w-full flex justify-between items-center text-left">
            <span>{t("products")}</span>
            <span>{productOpen ? "−" : "+"}</span>
          </button>

          <div className={`ml-4 flex flex-col space-y-2 overflow-hidden transition-all duration-300 ${productOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
            <a href={sectionLink("products")} onClick={closeMenu} className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition">All products</a>
            <a href="/mining" onClick={closeMenu}>Mining</a>

<a href="/energy" onClick={closeMenu}>Energy</a>

<a href="/petrochemical" onClick={closeMenu}>Petrochemical</a>
          </div>

          <a href={sectionLink("workflow")} onClick={closeMenu} className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition">
            {t("workflow")}
          </a>
          <a href={sectionLink("insights")} onClick={closeMenu} className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition">
            {t("insights")}
          </a>

          <button onClick={() => setMarketOpen(!marketOpen)} className="w-full flex justify-between items-center text-left">
            <span>{t("marketPrices")}</span>
            <span>{marketOpen ? "−" : "+"}</span>
          </button>

          <div className={`ml-4 flex flex-col space-y-2 overflow-hidden transition-all duration-300 ${marketOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
            <a href="/market-prices/energy" onClick={closeMenu}>Energy</a>
            <a href="/market-prices/petrochemical/urea" onClick={closeMenu}>Urea</a>
            <a href="/market-prices/petrochemical/sulphur" onClick={closeMenu}>Sulphur</a>
            <a href="/market-prices/petrochemical/other" onClick={closeMenu}>Other</a>
          </div>

          <a href={sectionLink("contact")} onClick={closeMenu} className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition">
            {t("contact")}
          </a>
          <a href="/verify" onClick={closeMenu} className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition">
            {t("verify")}
          </a>

          {/* MOBILE LANGUAGE SWITCHER */}
          <button onClick={() => setMobileLanguageOpen(!mobileLanguageOpen)} className="w-full flex justify-between items-center text-left pt-2">
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C8A24A" strokeWidth="1.6" className="w-4 h-4">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z" />
              </svg>
              Language
            </span>
            <span>{mobileLanguageOpen ? "−" : "+"}</span>
          </button>

          <div className={`ml-4 flex flex-col space-y-2 overflow-hidden transition-all duration-300 ${mobileLanguageOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}>
            <Link href="/" locale="en" onClick={closeMenu} className="flex items-center gap-3 border-b border-white/10 pb-2 hover:text-[#C8A24A] transition">
              🇬🇧 <span>English</span>
            </Link>
            <Link href="/" locale="zh" onClick={closeMenu} className="flex items-center gap-3 border-b border-white/10 pb-2 hover:text-[#C8A24A] transition">
              🇨🇳 <span>中文</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}