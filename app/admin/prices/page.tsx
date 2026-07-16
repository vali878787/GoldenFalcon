"use client";

import { useState } from "react";

export default function AdminPricesPage() {
  const [category, setCategory] = useState("petroleum");
  const [product, setProduct] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleUpload() {
    if (!file) {
      setMessage("Please select an Excel file.");
      return;
    }

    if (
      category === "petrochemical" &&
      !product
    ) {
      setMessage("Please select a product.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const formData = new FormData();

      formData.append("file", file);

      formData.append(
        "category",
        category
      );

      if (category === "petrochemical") {
        formData.append(
          "product",
          product
        );
      }

      const response = await fetch(
        "/api/prices/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ??
            "Upload failed."
        );
      }

      setMessage(
        "Upload completed successfully."
      );
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Upload failed."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F8FA] py-16 px-6">
      <div className="max-w-2xl mx-auto rounded-2xl bg-white p-10 shadow-lg">

        <h1 className="text-3xl font-bold text-[#0F2E4D]">
          Upload Market Prices
        </h1>

        <p className="mt-2 text-gray-500">
          Upload the latest weekly Excel report.
        </p>

        {/* Category */}

        <div className="mt-10">

          <label className="mb-3 block text-sm font-semibold">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => {
              setCategory(
                e.target.value
              );
              setProduct("");
            }}
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-[#C8A24A]
            "
          >

            <option value="petroleum">
              Petroleum
            </option>

            <option value="petrochemical">
              Petrochemical
            </option>

          </select>

        </div>

        {/* Product */}

        {category === "petrochemical" && (

          <div className="mt-8">

            <label className="mb-3 block text-sm font-semibold">
              Product
            </label>

            <select
              value={product}
              onChange={(e) =>
                setProduct(
                  e.target.value
                )
              }
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-[#C8A24A]
              "
            >

              <option value="">
                Select Product
              </option>

              <option value="urea">
                Urea
              </option>

              <option value="sulphur">
                Sulphur
              </option>

              <option value="other">
                Other
              </option>

            </select>

          </div>

        )}

        {/* File */}

        <div className="mt-8">

          <label className="mb-3 block text-sm font-semibold">
            Excel File
          </label>

          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={(e) => {
              if (
                e.target.files?.length
              ) {
                setFile(
                  e.target.files[0]
                );
              }
            }}
            className="block w-full"
          />

        </div>

        {/* Upload */}

        <button
          onClick={handleUpload}
          disabled={loading}
          className="
            mt-10
            w-full
            rounded-xl
            bg-[#0F2E4D]
            py-4
            font-semibold
            text-white
            transition
            hover:bg-[#143d65]
            disabled:opacity-50
          "
        >

          {loading
            ? "Uploading..."
            : "Upload"}

        </button>

        {message && (

          <p className="mt-5 text-sm text-gray-600">
            {message}
          </p>

        )}

        {file && (

          <p className="mt-5 text-sm text-gray-500">
            Selected File: {file.name}
          </p>

        )}

      </div>
    </main>
  );
}