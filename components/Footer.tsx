import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#0F2E4D] text-white py-12 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* COMPANY */}
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37]">
            Golden Falcon Energy
          </h3>

          <p className="mt-4 text-sm text-gray-300 leading-6">
            {t("company.description")}
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37]">
            {t("quickLinks.title")}
          </h3>

          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-[#D4AF37] transition">{t("quickLinks.home")}</Link></li>
            <li><Link href="#about" className="hover:text-[#D4AF37] transition">{t("quickLinks.about")}</Link></li>
            <li><Link href="#products" className="hover:text-[#D4AF37] transition">{t("quickLinks.products")}</Link></li>
            <li><Link href="#workflow" className="hover:text-[#D4AF37] transition">{t("quickLinks.workflow")}</Link></li>
            <li><Link href="#insights" className="hover:text-[#D4AF37] transition">{t("quickLinks.insights")}</Link></li>
            <li><Link href="#contact" className="hover:text-[#D4AF37] transition">{t("quickLinks.contact")}</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37]">
            {t("contact.title")}
          </h3>

          <p className="mt-4 text-sm text-gray-300">
            {t("contact.email")}{" "}
            <a
              href="mailto:sales@goldenfalconenergy.com"
              className="hover:text-[#D4AF37] transition"
            >
              sales@goldenfalconenergy.com
            </a>
          </p>

          <p className="mt-2 text-sm text-gray-300">
            {t("contact.whatsapp")}{" "}
            <a
              href="https://wa.me/971502845790"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition"
            >
              +971 50 284 5790
            </a>
          </p>

          <p className="mt-2 text-sm text-gray-300">
            {t("contact.address")}
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Golden Falcon Energy. {t("copyright")}
      </div>

    </footer>
  );
}