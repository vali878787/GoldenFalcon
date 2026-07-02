"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        
        {/* TITLE & DESCRIPTION */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4D] text-center">
          Submit Your Inquiry
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Please provide your trading requirements. Our commercial team will review your inquiry and respond with the appropriate commercial documentation, including SCO or FCO, where applicable.
        </p >

        {/* FORM (Integrated with Web3Forms) */}
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          className="mt-12 grid md:grid-cols-2 gap-10"
        >
          {/* ACCESS KEY */}
          <input type="hidden" name="access_key" value="b5924200-2bab-48f4-ae0f-56194ff2515b" />
          
          {/* FORM FIELDS */}
          <div className="space-y-4">
            <input name="Full Name" type="text" placeholder="Full Name" required className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
            <input name="Company" type="text" placeholder="Company Name" required className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
            <input name="WhatsApp" type="text" placeholder="WhatsApp Number (+Country Code)" className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
            
            <select name="Product" className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
              <option value="Energy">Energy (Diesel, Fuel Oil, Jet A1)</option>
              <option value="Mining">Mining (Iron, Steel, Copper)</option>
              <option value="Petrochemical">Petrochemical (Urea, Sulfur, Methanol)</option>
              <option value="Other">Other</option>
            </select>

            <select name="Incoterm" className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
              <option value="FOB">FOB</option>
              <option value="CIF">CIF</option>
              <option value="CFR">CFR</option>
              <option value="EXW">EXW</option>
            </select>

            <textarea name="Message" rows={5} placeholder="Message" className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />

            <button type="submit" className="w-full bg-[#0F2E4D] text-white py-3 rounded-lg hover:bg-[#D4AF37] hover:text-[#0F2E4D] transition">
              Send Inquiry
            </button>
          </div>

          {/* INFO & WHATSAPP */}
          <div className="space-y-6 text-gray-700 leading-7">
            <div>
              <p><strong>Company:</strong> Golden Falcon Energy</p >
              <p><strong>Business Type:</strong> Commodity Trading & Service Provider</p >
              <p><strong>Location:</strong> Office Entrance, Voco Hotel, Sheikh Zayed, Dubai, UAE </p >
            </div>

            <div className="pt-4">
              <p className="font-semibold mb-2">WhatsApp Direct:</p >
              <a
                href="https://wa.me/971502845790"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition"
              >
                Chat on WhatsApp
              </a >
            </div>

            <p className="text-sm text-gray-500 pt-4">
              We respond to all legitimate inquiries within 24–48 hours.
            </p >
          </div>
        </form>
      </div>
    </section>
  );
}
