"use client";

import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// --- اینترفیس‌های TypeScript برای رفع خطاها ---
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
const pelletPrice = [{ month: 'Jul 25', price: 120 }, { month: 'Sep 25', price: 125 }, { month: 'Nov 25', price: 118 }, { month: 'Jan 26', price: 130 }, { month: 'Mar 26', price: 135 }, { month: 'May 26', price: 132 }];
const pelletSpecs: Spec[] = [{ label: "Fe Content", value: "65-66 %", desc: "Concentrate" }, { label: "SiO2", value: "5 %", desc: "Maximum" }, { label: "Al2O3", value: "0.07 %", desc: "Maximum" }, { label: "Size (Pellets)", value: "9-16 mm", desc: "Standard" }];

const steelPrice = [{ month: 'Jul 25', price: 650 }, { month: 'Sep 25', price: 680 }, { month: 'Nov 25', price: 660 }, { month: 'Jan 26', price: 710 }, { month: 'Mar 26', price: 740 }, { month: 'May 26', price: 720 }];
const steelSpecs: Spec[] = [{ label: "Grade", value: "ASTM A36", desc: "Structural" }, { label: "Carbon", value: "0.26 %", desc: "Max" }, { label: "Yield Strength", value: "250 MPa", desc: "Min" }, { label: "Tensile Strength", value: "400 MPa", desc: "Min" }];

const copperPrice = [{ month: 'Jul 25', price: 8500 }, { month: 'Sep 25', price: 8900 }, { month: 'Nov 25', price: 9200 }, { month: 'Jan 26', price: 9500 }, { month: 'Mar 26', price: 9800 }, { month: 'May 26', price: 9700 }];
const copperSpecs: Spec[] = [{ label: "Purity", value: "99.99 %", desc: "Minimum" }, { label: "Grade", value: "LME Grade A", desc: "Standard" }, { label: "Form", value: "Cathodes", desc: "Standard" }, { label: "Impurity", value: "< 0.01 %", desc: "Max" }];

const otherProducts = ["ALUMINUM", "ZINC", "LEAD", "CHROMITE", "MANGANESE"];

export default function MiningPage() {
  return (
    <div className="bg-white overflow-hidden pb-20">
      <ProductSection title="IRON ORE PELLETS & CONCENTRATE" image="/pellet.png" priceData={pelletPrice} specs={pelletSpecs} description="Golden Falcon Energy supplies high-quality Iron Ore Pellets and Iron Ore Concentrate to international steel producers and industrial consumers. Through our established network of verified producers and strategic partners, we support long-term procurement programs with reliable logistics and consistent supply performance. We are capable of arranging continuous monthly shipments based on the buyer’s required volume and contractual schedule. Depending on project requirements and product specifications, supply can be sourced from Brazil, Australia, Iran, and other qualified origins. " />
      <div className="max-w-6xl mx-auto my-12 border-t-4 border-[#0F2E4D]/20" />
      <ProductSection title="STEEL & IRON PRODUCTS" image="/iron.png" priceData={steelPrice} specs={steelSpecs} description="Our portfolio of steel and iron products caters to the infrastructure, construction, and manufacturing sectors. We offer a diverse range of structural steel grades that combine high tensile strength with exceptional durability and weldability. Every shipment undergoes rigorous quality assurance to meet international construction codes, ensuring safety and efficiency for your large-scale infrastructure projects." />
      <div className="max-w-6xl mx-auto my-12 border-t-4 border-[#0F2E4D]/20" />
      <ProductSection title="COPPER CATHODE" image="/cooper.png" priceData={copperPrice} specs={copperSpecs} description="We supply high-purity Grade A Copper Cathodes, widely regarded as the gold standard in the electrical and manufacturing industries. With a minimum purity of 99.99%, our cathodes ensure optimal conductivity and performance. Our supply chain is optimized for the global electronics and energy transition sectors, providing consistent, reliable, and high-quality raw material essential for high-tech industrial applications." />
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
