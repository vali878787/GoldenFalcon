"use client";

import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* TITLE & DESCRIPTION */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4D] text-center">
          {t("title")}
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          {t("description")}
        </p>

        {/* FORM (Integrated with Web3Forms) */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mt-12 grid md:grid-cols-2 gap-10"
        >
          {/* ACCESS KEY */}
          <input
            type="hidden"
            name="access_key"
            value="b5924200-2bab-48f4-ae0f-56194ff2515b"
          />

          {/* FORM FIELDS */}
          <div className="space-y-4">
            <input
              name="Full Name"
              type="text"
              placeholder={t("form.fullName")}
              required
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />

            <input
              name="Company"
              type="text"
              placeholder={t("form.company")}
              required
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />

            <input
              name="WhatsApp"
              type="text"
              placeholder={t("form.whatsapp")}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />

            <select
              name="Product"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <option value="Energy">{t("products.energy")}</option>
              <option value="Mining">{t("products.mining")}</option>
              <option value="Petrochemical">{t("products.petrochemical")}</option>
              <option value="Other">{t("products.other")}</option>
            </select>

            <select
              name="Incoterm"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <option value="FOB">FOB</option>
              <option value="CIF">CIF</option>
              <option value="CFR">CFR</option>
              <option value="EXW">EXW</option>
            </select>

            <textarea
              name="Message"
              rows={5}
              placeholder={t("form.message")}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />

            <button
              type="submit"
              className="w-full bg-[#0F2E4D] text-white py-3 rounded-lg hover:bg-[#D4AF37] hover:text-[#0F2E4D] transition"
            >
              {t("form.submit")}
            </button>
          </div>

          {/* INFO & WHATSAPP */}
          <div className="space-y-6 text-gray-700 leading-7">
            <div>
              <p>
                <strong>{t("company.label")}</strong> {t("company.name")}
              </p>

              <p>
                <strong>{t("businessType.label")}</strong> {t("businessType.value")}
              </p>

              <p>
                <strong>{t("location.label")}</strong> {t("location.value")}
              </p>
            </div>

            <div className="pt-4">
              <p className="font-semibold mb-2">
                {t("whatsapp.title")}
              </p>

              <a
                href="https://wa.me/971502845790"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition"
              >
                {t("whatsapp.button")}
              </a>
            </div>

            <p className="text-sm text-gray-500 pt-4">
              {t("responseTime")}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}