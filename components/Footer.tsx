import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F2E4D] text-white py-12 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* COMPANY */}
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37]">
            Golden Falcon Energy
          </h3>

          <p className="mt-4 text-sm text-gray-300 leading-6">
            International commodity trading & service provider specializing in energy, mining, and petrochemical markets. Based in Dubai, UAE.
          </p >
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37]">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-[#D4AF37] transition">Home</Link></li>
            <li><Link href="/#about" className="hover:text-[#D4AF37] transition">About Us</Link></li>
            <li><Link href="/#products" className="hover:text-[#D4AF37] transition">Products</Link></li>
            <li><Link href="/#workflow" className="hover:text-[#D4AF37] transition">Workflow</Link></li>
            <li><Link href="/#insights" className="hover:text-[#D4AF37] transition">Industry Insights</Link></li>
            <li><Link href="/#contact" className="hover:text-[#D4AF37] transition">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37]">
            Contact
          </h3>

          <p className="mt-4 text-sm text-gray-300">
            Email: sales@goldenfalconenergy.com
          </p >

          <p className="mt-2 text-sm text-gray-300">
  WhatsApp:{" "}
  <a 
    href="https://wa.me/971502845790" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    +971 50 284 5790
  </a >
</p >




          <p className="mt-2 text-sm text-gray-300">
            Office Entrance, Voco Hotel, Sheikh Zayed, Dubai, UAE
          </p >
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Golden Falcon Energy. All rights reserved.
      </div>

    </footer>
  );
}
