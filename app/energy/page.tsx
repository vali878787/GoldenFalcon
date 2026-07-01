"use client";

import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// --- رابط‌ها (Interfaces) ---
interface PriceData {
  month: string;
  price: number;
}

interface SpecItem {
  label: string;
  value: string;
  desc: string;
}

interface ProductSectionProps {
  title: string;
  image: string;
  priceData: PriceData[];
  specs: SpecItem[];
  description: string;
}

// --- داده‌ها ---
const dieselPrice = [{ month: 'Jul 25', price: 820 }, { month: 'Sep 25', price: 860 }, { month: 'Nov 25', price: 840 }, { month: 'Jan 26', price: 890 }, { month: 'Mar 26', price: 920 }, { month: 'May 26', price: 910 }];
const dieselSpecs = [{ label: "Sulfur Content", value: "10 ppm", desc: "Max limit" }, { label: "Density at 15°C", value: "835 kg/m³", desc: "Typical" }, { label: "Flash Point", value: "> 55°C", desc: "Minimum" }, { label: "Cetane Number", value: "> 51", desc: "Minimum" }];

const jetPrice = [{ month: 'Jul 25', price: 950 }, { month: 'Sep 25', price: 980 }, { month: 'Nov 25', price: 960 }, { month: 'Jan 26', price: 1020 }, { month: 'Mar 26', price: 1050 }, { month: 'May 26', price: 1080 }];
const jetSpecs = [{ label: "Freezing Point", value: "-47°C", desc: "Maximum" }, { label: "Flash Point", value: "> 38°C", desc: "Minimum" }, { label: "Density at 15°C", value: "800 kg/m³", desc: "Typical" }, { label: "Smoke Point", value: "> 25 mm", desc: "Minimum" }];

const hsfoPrice = [{ month: 'Jul 25', price: 480 }, { month: 'Sep 25', price: 510 }, { month: 'Nov 25', price: 495 }, { month: 'Jan 26', price: 530 }, { month: 'Mar 26', price: 560 }, { month: 'May 26', price: 550 }];
const hsfoSpecs = [{ label: "Viscosity at 50°C", value: "380 cSt", desc: "Maximum" }, { label: "Sulfur Content", value: "3.5 %", desc: "Max wt" }, { label: "Flash Point", value: "> 60°C", desc: "Minimum" }, { label: "Pour Point", value: "30°C", desc: "Maximum" }];

const otherProducts = ["LPG", "LNG", "LIGHT CRUDE OIL", "HEAVY CRUDE OIL", "NAPHTHA", "BITUMEN"];

export default function EnergyPage() {
  return (
    <div className="bg-white overflow-hidden pb-20">
      <ProductSection 
        title="DIESEL EN590 10PPM" 
        image="/diesel.png" 
        priceData={dieselPrice} 
        specs={dieselSpecs} 
        description="Our offered Diesel Fuel strictly complies with the latest EN 590:2022 specifications for automotive diesel oils. It is characterized as an Ultra-Low Sulfur Diesel (ULSD) with a maximum sulfur content of 10 ppm (mg/kg), ensuring full compatibility with Euro 5 and Euro 6 emission control systems (including DPF and SCR technologies). We are fully equipped to execute spot and term contracts with FOB or CIF (Cost, Insurance, and Freight) terms to the following key strategic ports: Rotterdam (ARA Region, Netherlands) Fujairah (UAE – Indian Ocean bunkering hub) Jurong (Singapore – APAC regional hub) Houston (USGC – Americas regional hub)" 
      />
      <div className="max-w-6xl mx-auto my-12 border-t-4 border-[#0F2E4D]/20" />
      <ProductSection 
        title="JET A-1 FUEL" 
        image="/jet-a1.png" 
        priceData={jetPrice} 
        specs={jetSpecs} 
        description="Jet A-1 is a high-performance kerosene-type aviation fuel, meticulously refined to meet the most stringent international specifications, including ASTM D1655 and DEF STAN 91-91. As the primary fuel for commercial and cargo turbine-engine aircraft worldwide, Jet A-1 guarantees exceptional reliability, safety, and operational efficiency across diverse climatic conditions and high-altitude flight envelopes. Our Jet A-1 is sourced from leading refineries across strategic global hubs, including the United States, UAE, Saudi Arabia, Qatar, Singapore, South Korea, and the Netherlands." 
      />
      <div className="max-w-6xl mx-auto my-12 border-t-4 border-[#0F2E4D]/20" />
      <ProductSection 
        title="HSFO CST 180 & 380" 
        image="/HSFO.png" 
        priceData={hsfoPrice} 
        specs={hsfoSpecs} 
        description="Our High Sulfur Fuel Oil (HSFO) range, available in both 180 cSt and 380 cSt grades, serves as the industry-standard energy source for maritime shipping. Engineered for reliability, these fuels are widely utilized in large-scale marine diesel engines and boilers, offering excellent combustion efficiency and high energy output per ton. We strictly adhere to global bunker fuel quality standards, ensuring our HSFO provides optimal lubrication properties and thermal stability. Our robust supply chain ensures consistent availability at major global bunkering hubs, meeting the operational requirements of modern maritime fleets with precision." 
      />
      <OtherProducts />
      <Footer />
    </div>
  );
}

function ProductSection({ title, image, priceData, specs, description }: ProductSectionProps) {
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
          {specs.map((item: SpecItem, i: number) => (
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {otherProducts.map((product, i) => (
          <motion.div key={i} 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: i * 0.1 }} viewport={{ once: true }}
            className="p-6 rounded-3xl border border-yellow-500/30 backdrop-blur-md"
            style={{ background: "linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(234, 179, 8, 0.05) 100%)" }}>
            <h4 className="text-center font-bold text-[#0F2E4D] text-sm md:text-lg tracking-wider">{product}</h4>
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
