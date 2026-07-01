"use client";

import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// --- اینترفیس‌ها برای رفع خطاهای TypeScript ---
interface Spec {
  label: string;
  value: string;
  desc: string;
}

interface ProductProps {
  title: string;
  image: string;
  priceData: { month: string; price: number }[];
  specs: Spec[];
  description: string;
}

// --- داده‌ها ---
const ureaPrice = [{ month: 'Jul 25', price: 320 }, { month: 'Sep 25', price: 340 }, { month: 'Nov 25', price: 380 }, { month: 'Jan 26', price: 390 }, { month: 'Mar 26', price: 690 }, { month: 'May 26', price: 480 }];
const ureaSpecs: Spec[] = [{ label: "Nitrogen Content", value: "46.0 %", desc: "Minimum" }, { label: "Biuret", value: "1.0 %", desc: "Maximum" }, { label: "Moisture", value: "0.5 %", desc: "Maximum" }, { label: "Form", value: "Granular", desc: "Standard" }];

const sulfurPrice = [{ month: 'Jul 25', price: 340 }, { month: 'Sep 25', price: 395 }, { month: 'Nov 25', price: 460 }, { month: 'Jan 26', price: 520 }, { month: 'Mar 26', price: 512 }, { month: 'May 26', price: 1050 }];
const sulfurSpecs: Spec[] = [{ label: "Purity", value: "99.6 %", desc: "Minimum" }, { label: "Ash Content", value: "0.03 %", desc: "Maximum" }, { label: "Form", value: "Granular", desc: "Standard" }, { label: "Color", value: "Bright Yellow", desc: "Typical" }];

const methanolPrice = [{ month: 'Jul 25', price: 280 }, { month: 'Sep 25', price: 300 }, { month: 'Nov 25', price: 290 }, { month: 'Jan 26', price: 310 }, { month: 'Mar 26', price: 320 }, { month: 'May 26', price: 315 }];
const methanolSpecs: Spec[] = [{ label: "Purity", value: "99.85 %", desc: "Minimum" }, { label: "Water Content", value: "0.1 %", desc: "Maximum" }, { label: "Acetone", value: "20 ppm", desc: "Maximum" }, { label: "Appearance", value: "Clear", desc: "Liquid" }];

const otherProducts = ["POLYETHYLENE (PE)", "POLYPROPYLENE (PP)"];

export default function PetrochemicalPage() {
  return (
    <div className="bg-white overflow-hidden pb-20">
      <ProductSection title="UREA 46% GRANULAR" image="/urea.png" priceData={ureaPrice} specs={ureaSpecs} description="Our high-quality Urea 46% Granular is a premium nitrogen fertilizer widely used in global agriculture. With a minimum nitrogen content of 46%, it ensures optimal crop yield and soil health. Our product is manufactured under strict quality controls, offering excellent physical strength and low moisture levels to ensure stability during long-haul transport." />
      <div className="max-w-6xl mx-auto my-12 border-t-4 border-[#0F2E4D]/20" />
      <ProductSection title="SULFUR" image="/sulfur.png" priceData={sulfurPrice} specs={sulfurSpecs} description="Sulfur is a vital industrial raw material widely used in the production of sulfuric acid, phosphate fertilizers, chemical manufacturing, mining, and various industrial processes. We supply high-quality sulfur in bulk, meeting international specifications and suitable for global industrial applications. Through our reliable sourcing network, we are able to provide sulfur from leading producing countries, including Kazakhstan, Turkmenistan, Uzbekistan, and other CIS and regional suppliers, ensuring competitive pricing, consistent quality, and dependable delivery for international buyers." />
      <div className="max-w-6xl mx-auto my-12 border-t-4 border-[#0F2E4D]/20" />
      <ProductSection title="METHANOL" image="/methanol.png" priceData={methanolPrice} specs={methanolSpecs} description="Methanol is a versatile chemical building block essential for producing formaldehyde, acetic acid, and various fuel additives. With a minimum purity of 99.85%, our methanol meets the most rigorous international standards. We facilitate efficient, large-scale supply chains, serving diverse industrial sectors from plastics to energy storage and chemical synthesis." />
      <OtherProducts />
      <Footer />
    </div>
  );
}

function ProductSection({ title, image, priceData, specs, description }: ProductProps) {
  return (
    <div className="mb-20">
      <section className="relative max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center min-h-0 md:min-h-125">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.2, ease: "easeInOut" }} viewport={{ once: true }}
          className="w-full md:w-1/2 relative z-20 p-6 md:p-8 rounded-3xl border border-white/30 backdrop-blur-sm"
          style={{ background: "linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.2) 100%)" }}>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F2E4D] mb-6">{title}</h1>
          <p className="text-gray-800 leading-relaxed text-sm md:text-base text-justify">{description}</p >
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.2, ease: "easeInOut" }} viewport={{ once: true }}
          className="w-full md:absolute right-0 top-0 md:w-[75%] h-64 md:h-full z-10 overflow-hidden rounded-3xl mt-6 md:mt-0">
          < img src={image} className="w-full h-full object-cover" alt={title} />
          <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-white via-white/40 to-transparent" />
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2 }} viewport={{ once: true }}
          className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 h-75 md:h-100">
          <h3 className="text-xl md:text-2xl font-bold text-[#0F2E4D] mb-6">Market Price Trend (USD/MT)</h3>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" fontSize={12} /> <YAxis domain={['auto', 'auto']} fontSize={12} /> <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#0F2E4D" strokeWidth={4} animationDuration={2500} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
        <div className="grid grid-cols-2 gap-4">
          {specs.map((item: Spec, i: number) => (
            <motion.div key={i} 
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1.2, delay: i * 0.2 }} viewport={{ once: true }}
              className="bg-[#0F2E4D] p-4 md:p-6 rounded-3xl text-white flex flex-col justify-center">
              <span className="text-blue-200 text-xs md:text-sm">{item.label}</span>
              <h4 className="text-lg md:text-2xl font-bold my-1">{item.value}</h4>
              <span className="text-[10px] md:text-xs opacity-70">{item.desc}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function OtherProducts() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-[#0F2E4D] mb-6 tracking-wide">OTHER</h3>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto border-t border-[#0F2E4D]/20 pt-6">
          Beyond our primary products, we are fully capable of supplying the following commodities, 
          ensuring genuine sourcing and reliable delivery for our valued buyers worldwide.
        </p >
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherProducts.map((product: string, i: number) => (
          <motion.div key={i} 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: i * 0.1 }} viewport={{ once: true }}
            className="p-8 rounded-3xl border border-yellow-500/30 backdrop-blur-md"
            style={{ background: "linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(234, 179, 8, 0.05) 100%)" }}>
            <h4 className="text-center font-bold text-[#0F2E4D] text-lg tracking-wider">{product}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0F2E4D] text-white py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37]">Golden Falcon Energy</h3>
          <p className="mt-4 text-sm text-gray-300 leading-6">International commodity trading & service provider specializing in energy, mining, and petrochemical markets. Based in Dubai, UAE.</p >
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37]">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-300"><li>Home</li><li>Products</li><li>Why Choose Us</li><li>Contact</li></ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37]">Contact</h3>
          <p className="mt-4 text-sm text-gray-300">Email: sales@goldenfalconenergy.com</p >
          <p className="mt-2 text-sm text-gray-300">WhatsApp: +971 50 284 5790</p >
          <p className="mt-2 text-sm text-gray-300">Office Entrance, Voco Hotel, Sheikh Zayed, Dubai UAE</p >
        </div>
      </div>
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">© {new Date().getFullYear()} Golden Falcon Energy. All rights reserved.</div>
    </footer>
  );
}
