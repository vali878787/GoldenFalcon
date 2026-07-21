"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";

export default function VerifyPage() {
  const t = useTranslations("verify");

  const [reference, setReference] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function verifyDocument() {
    if (!reference.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        `/api/verify?reference=${reference.trim()}`
      );

      const data = await response.json();

      setResult(data);
    } catch {
      setResult({
        verified: false,
        message: t("serviceUnavailable"),
      });
    }

    setLoading(false);
  }

  return (
    <>
      <main className="min-h-screen bg-[#F8F8F6] px-6 py-16">
        <div className="max-w-3xl mx-auto">

          {/* Top Gold Line */}

          <div className="h-1 bg-[#C8A24A] mb-10"></div>

          <div
            className="
          bg-white
          rounded-2xl
          shadow-lg
          p-8
          md:p-12
          "
          >
            <h1
              className="
            text-3xl
            md:text-4xl
            text-center
            font-semibold
            text-[#0F2E4D]
            "
            >
              {t("title")}
            </h1>

            <p
              className="
            text-center
            text-gray-600
            mt-4
            "
            >
              {t("subtitle")}
            </p>

            <div className="mt-10 flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder={t("placeholder")}
                className="
                flex-1
                border
                border-gray-300
                rounded-lg
                px-5
                py-3
                focus:outline-none
                focus:border-[#C8A24A]
                "
              />

              <button
                onClick={verifyDocument}
                className="
                bg-[#0F2E4D]
                text-white
                px-8
                py-3
                rounded-lg
                hover:opacity-90
                "
              >
                {loading ? t("verifying") : t("verify")}
              </button>
            </div>

            {result && result.verified && (
              <div
                className="
              mt-10
              border
              border-green-200
              rounded-xl
              p-8
              text-center
              "
              >
                <div
                  className="
mx-auto
w-24
h-24
rounded-full
bg-green-100
flex
items-center
justify-center
"
                >
                  <div
                    className="
w-16
h-16
rounded-full
bg-green-600
flex
items-center
justify-center
text-white
text-4xl
font-bold
"
                  >
                    ✓
                  </div>
                </div>

                <h2
                  className="
                text-2xl
                font-semibold
                text-green-700
                mt-5
                "
                >
                  {t("verified")}
                </h2>

                <p
                  className="
text-gray-600
mt-4
leading-7
"
                >
                  {t("verifiedText")}
                  <br />

                  <span
                    className="
font-semibold
text-[#0F2E4D]
"
                  >
                    Golden Falcon Energy L.L.C
                  </span>
                </p>

                <div
                  className="
                mt-6
                text-sm
                text-gray-700
                "
                >
                  <p>{t("referenceCode")}</p>

                  <p className="font-semibold mt-1">
                    {result.document.reference}
                  </p>
                </div>

                <div className="mt-8">
                  <p
                    className="
text-sm
text-gray-500
mb-4
"
                  >
                    {t("downloadText")}
                  </p>

                  <a
                    href={result.document.file}
                    target="_blank"
                    className="
inline-flex
items-center
gap-3
bg-[#C8A24A]
text-white
px-8
py-3
rounded-lg
font-medium
hover:opacity-90
"
                  >
                    <span className="text-lg">↓</span>

                    {t("download")}
                  </a>
                </div>
              </div>
            )}
                        {result && !result.verified && (

              <div
                className="
                mt-10
                border
                border-red-200
                rounded-xl
                p-8
                text-center
                "
              >

                <div
                  className="
                  mx-auto
                  w-20
                  h-20
                  rounded-full
                  bg-red-100
                  flex
                  items-center
                  justify-center
                  text-red-600
                  text-5xl
                  "
                >

                  ✕

                </div>

                <h2
                  className="
                  text-2xl
                  font-semibold
                  text-red-700
                  mt-5
                  "
                >

                  {t("failed")}

                </h2>

                <p
                  className="
                  text-gray-600
                  mt-4
                  "
                >

                  {t("failedText")}

                </p>

                <p
                  className="
                  text-sm
                  text-gray-500
                  mt-3
                  "
                >

                  {result.message}

                </p>

              </div>

            )}

          </div>

        </div>

      </main>

      <Footer />

    </>

  );

}