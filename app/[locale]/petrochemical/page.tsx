"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import Footer from "@/components/Footer";

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

const ureaPrice = [{ month: 'Jul 25', price: 320 }, { month: 'Sep 25', price: 340 }, { month: 'Nov 25', price: 380 }, { month: 'Jan 26', price: 390 }, { month: 'Mar 26', price: 690 }, { month: 'May 26', price: 480 }];
const sulfurPrice = [{ month: 'Jul 25', price: 340 }, { month: 'Sep 25', price: 395 }, { month: 'Nov 25', price: 460 }, { month: 'Jan 26', price: 520 }, { month: 'Mar 26', price: 512 }, { month: 'May 26', price: 1050 }];
const methanolPrice = [{ month: 'Jul 25', price: 280 }, { month: 'Sep 25', price: 300 }, { month: 'Nov 25', price: 290 }, { month: 'Jan 26', price: 310 }, { month: 'Mar 26', price: 320 }, { month: 'May 26', price: 315 }];

export default function PetrochemicalPage() {
  const t = useTranslations("petrochemicalPage");

  const ureaSpecs: Spec[] = [
    { label: t("specLabels.nitrogenContent"), value: "46.0 %", desc: t("specDesc.minimum") },
    { label: t("specLabels.biuret"), value: "1.0 %", desc: t("specDesc.maximum") },
    { label: t("specLabels.moisture"), value: "0.5 %", desc: t("specDesc.maximum") },
    { label: t("specLabels.form"), value: t("specValues.granular"), desc: t("specDesc.standard") },
  ];

  const sulfurSpecs: Spec[] = [
    { label: t("specLabels.purity"), value: "99.6 %", desc: t("specDesc.minimum") },
    { label: t("specLabels.ashContent"), value: "0.03 %", desc: t("specDesc.maximum") },
    { label: t("specLabels.form"), value: t("specValues.granular"), desc: t("specDesc.standard") },
    { label: t("specLabels.color"), value: t("specValues.brightYellow"), desc: t("specDesc.typical") },
  ];

  const methanolSpecs: Spec[] = [
    { label: t("specLabels.purity"), value: "99.85 %", desc: t("specDesc.minimum") },
    { label: t("specLabels.waterContent"), value: "0.1 %", desc: t("specDesc.maximum") },
    { label: t("specLabels.acetone"), value: "20 ppm", desc: t("specDesc.maximum") },
    { label: t("specLabels.appearance"), value: t("specValues.clear"), desc: t("specDesc.liquid") },
  ];

  return (
    <div className="bg-white overflow-hidden pb-20">
      <ProductSection title={t("urea.title")} image="/urea.png" priceData={ureaPrice} specs={ureaSpecs} description={t("urea.description")} />
      <div className="max-w-6xl mx-auto my-12 border-t-4 border-[#0F2E4D]/20" />
      <ProductSection title={t("sulfur.title")} image="/sulfur.png" priceData={sulfurPrice} specs={sulfurSpecs} description={t("sulfur.description")} />
      <div className="max-w-6xl mx-auto my-12 border-t-4 border-[#0F2E4D]/20" />
      <ProductSection title={t("methanol.title")} image="/methanol.png" priceData={methanolPrice} specs={methanolSpecs} description={t("methanol.description")} />
      <OtherProducts />
      <Footer />
    </div>
  );
}

function ProductSection({ title, image, priceData, specs, description }: ProductProps) {
  const t = useTranslations("petrochemicalPage");

  return (
    <div className="mb-20">
      <section className="relative max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center min-h-0 md:min-h-125">
        <motion.div
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }} viewport={{ once: true }}
          className="w-full md:w-1/2 relative z-20 p-6 md:p-8 rounded-3xl border border-white/30 backdrop-blur-sm"
          style={{ background: "linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.2) 100%)" }}>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F2E4D] mb-6">{title}</h1>
          <p className="text-gray-800 leading-relaxed text-sm md:text-base text-justify">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }} viewport={{ once: true }}
          className="w-full md:absolute right-0 top-0 md:w-[75%] h-64 md:h-full z-10 overflow-hidden rounded-3xl mt-6 md:mt-0">
          <img src={image} className="w-full h-full object-cover" alt={title} />
          <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-white via-white/40 to-transparent" />
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }} viewport={{ once: true }}
          className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 h-75 md:h-100">
          <h3 className="text-xl md:text-2xl font-bold text-[#0F2E4D] mb-6">{t("chartTitle")}</h3>
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
  const t = useTranslations("petrochemicalPage");
  const otherProducts = t.raw("otherProducts") as string[];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-[#0F2E4D] mb-6 tracking-wide">{t("otherTitle")}</h3>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto border-t border-[#0F2E4D]/20 pt-6">
          {t("otherIntro")}
        </p>
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