export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      {/* Container اصلی که عرض متن را کنترل می‌کند */}
      <div className="max-w-5xl mx-auto relative">
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4D] text-center mb-12">
          About Us
        </h2>

        {/* لایه نقشه که فقط در محدوده محتوا قرار دارد */}
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{ 
            backgroundImage: "url('/world-map.png')", 
            backgroundSize: "contain", 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />

        {/* قاب متن با بلور ملایم */}
        <div className="relative z-10 bg-white/60 backdrop-blur-[0.5px] p-8 md:p-12 rounded-3xl border border-white/30 shadow-sm">
          <div className="text-gray-700 text-base md:text-lg leading-8 space-y-6 text-justify">
            <p>
              Golden Falcon Energy was established in Dubai, UAE, with a vision to redefine excellence in the international commodity trading landscape. Since our inception in 2018, we have evolved from a focused regional player into a robust global entity. In 2022, we successfully expanded our operations, leveraging a sophisticated network to facilitate the seamless supply of essential energy and industrial commodities across diverse markets.
            </p >

            <p>
              Our operational track record is our greatest credential. To date, we have successfully executed dozens of high-value transactions across our core sectors, navigating complex logistics and diverse Incoterms with precision. Our reach extends to some of the world’s most critical trading hubs, including the strategic ports of Fujairah and Rotterdam, solidifying our reputation as a reliable link in the global supply chain.
            </p >

            <p>
              Golden Falcon Energy stands at the forefront of the international commodity trading industry, bridging the gap between resource-rich origins and the global market’s evolving demands. With a steadfast commitment to excellence, we specialize in the strategic sourcing, logistics, and supply of essential energy and industrial commodities, including high-grade petroleum products, petrochemicals, and mineral resources.
            </p >

            <p>
              Our company rules are built upon the pillars of integrity, operational precision, and long-term partnership. We understand that in the world of commodity trading, reliability is the most valuable asset. By leveraging an extensive global network and deep market expertise, we ensure that our clients receive not only high-quality products that meet rigorous international standards but also seamless supply chain solutions that minimize risk and optimize time-to-market.
            </p >

            <p>
              We maintain direct relationships with certified refineries, verified producers, and established suppliers across multiple regions. This allows us to secure and supply commodities including EN590 diesel, jet fuel, fuel oil, iron ore, iron pellets, iron concentrate, urea, sulfur, and other petrochemical products without unnecessary intermediaries.
            </p >

            <p>
              At Golden Falcon Energy, we don’t just deliver commodities; we deliver the stability and competitive edge your business needs to thrive. Whether through complex logistics or market-driven pricing, our commercial team is dedicated to transparency, compliance, and excellence at every stage of the transaction.
            </p >

            <p>
              We are dedicated to fostering professional, long-term partnerships and warmly welcome inquiries from serious, qualified principals—both buyers and suppliers—who are committed to transparent, value-driven commodity transactions. We look forward to exploring mutually beneficial opportunities with those who prioritize integrity and operational efficiency.
            </p >
          </div>
        </div>

      </div>
    </section>
  );
}
