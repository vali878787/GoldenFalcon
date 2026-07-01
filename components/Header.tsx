"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll tracker
  useEffect(() => {
    const sections = ["home", "about", "products", "workflow", "contact"];
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
  };

  const linkClass = (section: string) =>
    `transition ${activeSection === section ? "text-[#D4AF37] font-semibold" : "text-gray-700"}`;

  return (
    <header className="flex items-center justify-between px-6 py-5 border-b bg-white sticky top-0 z-50">
      {/* LOGO */}
      <a href=" " className="flex items-center gap-3">
        < img src="/LOGO.png" alt="Golden Falcon Energy Logo" className="h-10 w-auto" />
      </a >

      {/* DESKTOP MENU */}
      <nav className="hidden md:flex gap-8 text-sm">
        <a href="/" className={linkClass("home")}>Home</a >
        <a href="/#about" className={linkClass("about")}>About</a >
        <a href="/#products" className={linkClass("products")}>Products</a >
        <a href="/#workflow" className={linkClass("workflow")}>Workflow</a >
        <a href="/#contact" className={linkClass("contact")}>Contact</a >
      </nav>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 hidden md:block">EN</div>
        <a href="/#contact" className="hidden md:block bg-[#0F2E4D] text-white px-4 py-2 rounded-lg hover:bg-[#D4AF37] transition">
          Submit LOI
        </a >

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#dde7f1] border-b overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"}`}>
        <div className="flex flex-col space-y-4 px-6 text-gray-700">
          <a href="/" onClick={closeMenu}>Home</a >
          <a href="/#about" onClick={closeMenu}>About</a >
          
          <button onClick={() => setProductOpen(!productOpen)} className="w-full flex justify-between items-center text-left">
            <span>Products</span>
            <span>{productOpen ? "−" : "+"}</span>
          </button>
          
          <div className={`ml-4 flex flex-col space-y-2 overflow-hidden transition-all duration-300 ${productOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
            <a href="/#products" onClick={closeMenu}>All Products</a >
            <a href="/mining" onClick={closeMenu}>Mining</a >
            <a href="/energy" onClick={closeMenu}>Energy</a >
            <a href="/petrochemical" onClick={closeMenu}>Petrochemical</a >
          </div>

          <a href="/#workflow" onClick={closeMenu}>Workflow</a >
          <a href="/#contact" onClick={closeMenu}>Contact</a >
        </div>
      </div>
    </header>
  );
}
