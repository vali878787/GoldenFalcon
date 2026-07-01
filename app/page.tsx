"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import WorkFlow from "@/components/WorkFlow";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">

      <Hero />
      <WhyChooseUs />
      <Products />
      <WorkFlow />
      <Contact />
      <Footer />

   



    </main>
  );
}