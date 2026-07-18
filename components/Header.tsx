

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [marketOpen, setMarketOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  const closeMenu = () => {
  setMenuOpen(false);
  setProductOpen(false);
  setMarketOpen(false);
};

  const linkClass = (section: string) =>
    `transition ${activeSection === section ? "text-[#D4AF37] font-semibold" : "text-gray-700"}`;

  return (
    <header className="flex items-center justify-between px-6 py-5 border-b bg-gray-50 sticky top-0 z-50">
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-3">
        < img src="/LOGO.png" alt="Golden Falcon Energy Logo" className="h-10 w-auto" />
      </Link>

      {/* DESKTOP MENU */}
      <nav className="hidden md:flex gap-8 text-sm">
        <a href="/" className={linkClass("home")}>Home</a >
        <a href="/#about" className={linkClass("about")}>About</a >
        <a href="/#products" className={linkClass("products")}>Products</a >
        <a href="/#workflow" className={linkClass("workflow")}>Workflow</a >
        <a href="/#insights" className={linkClass("insights")}>Industry Insights</a >
        <a
  href="/#market-prices"
  className={linkClass("market-prices")}
>
  Market Prices
</a>
        <a href="/#contact" className={linkClass("contact")}>Contact</a >
      </nav>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 hidden md:block">EN</div>
        <a
          href="/#contact"
          className="hidden md:block bg-[#0F2E4D] text-white px-4 py-2 rounded-lg hover:bg-[#D4AF37] transition"
        >
          Submit LOI
        </a >

        {/* MOBILE MENU BUTTON */}
        <button
  className="md:hidden w-10 h-10 flex items-center justify-center rounded-md border border-[#C8A24A] text-[#C8A24A] transition"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <div className="space-y-1.5">
    <span
      className={`block w-5 h-0.5 bg-[#C8A24A] transition-transform ${
        menuOpen ? "rotate-45 translate-y-2" : ""
      }`}
    />

    <span
      className={`block w-5 h-0.5 bg-[#C8A24A] transition-opacity ${
        menuOpen ? "opacity-0" : ""
      }`}
    />

    <span
      className={`block w-5 h-0.5 bg-[#C8A24A] transition-transform ${
        menuOpen ? "-rotate-45 -translate-y-2" : ""
      }`}
    />
  </div>
</button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0F2E4D] border-b border-[#C8A24A] overflow-hidden transition-all duration-300 ${
          menuOpen
  ? "max-h-[calc(100vh-80px)] opacity-100 py-6 overflow-y-auto"
  : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 text-white">
          <a 
href="/"
onClick={closeMenu}
className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition"
>
Home
</a>
          <a 
href="/#about" 
onClick={closeMenu}
className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition"
>
About
</a>

          <button
            onClick={() => setProductOpen(!productOpen)}
            className="w-full flex justify-between items-center text-left"
          >
            <span>Products</span>
            <span>{productOpen ? "−" : "+"}</span>
          </button>

          <div
            className={`ml-4 flex flex-col space-y-2 overflow-hidden transition-all duration-300 ${
              productOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <a 
href="/#products" 
onClick={closeMenu}
className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition"
>
All products
</a>

<a 
href="/mining" 
onClick={closeMenu}
className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition"
>
Mining
</a>

<a 
href="/energy" 
onClick={closeMenu}
className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition"
>
Energy
</a>

<a 
href="/petrochemical" 
onClick={closeMenu}
className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition"
>
Petrochemical
</a>
          </div>

          <a 
href="/#workflow" 
onClick={closeMenu}
className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition"
>
Workflow
</a>
          <a 
href="/#insights" 
onClick={closeMenu}
className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition"
>
Industry Insight
</a>
          

<button
  onClick={() => setMarketOpen(!marketOpen)}
  className="w-full flex justify-between items-center text-left"
>
  <span>Market Prices</span>
  <span>{marketOpen ? "−" : "+"}</span>
</button>


<div
className={`ml-4 flex flex-col space-y-2 overflow-hidden transition-all duration-300 ${
marketOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
}`}
>

<a href="/market-prices/energy" onClick={closeMenu}>
Energy
</a>

<a href="/market-prices/petrochemical/urea" onClick={closeMenu}>
Urea
</a>

<a href="/market-prices/petrochemical/sulphur" onClick={closeMenu}>
Sulphur
</a>

<a href="/market-prices/petrochemical/other" onClick={closeMenu}>
Other
</a>

</div>
          <a 
href="/#contact"
onClick={closeMenu}
className="border-b border-white/10 pb-2 hover:text-[#C8A24A] transition"
>
Contact
</a>
        </div>
      </div>
    </header>
  );
}
