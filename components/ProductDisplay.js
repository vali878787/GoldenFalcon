"use client";

import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function ProductDisplay({ priceData, specs }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* نمودار قیمت */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold text-[#0F2E4D] mb-6">Market Price Trend (USD/MT)</h3>
        <div className="h-75">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#0F2E4D" strokeWidth={4} dot={{ r: 6 }} animationDuration={2000} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* بخش مشخصات فنی */}
      <div className="grid grid-cols-2 gap-4">
        {specs.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}
            className="bg-[#0F2E4D] p-6 rounded-3xl text-white flex flex-col justify-center">
            <span className="text-blue-200 text-sm">{item.label}</span>
            <h4 className="text-2xl font-bold my-1">{item.value}</h4>
            <span className="text-xs opacity-70">{item.desc}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
