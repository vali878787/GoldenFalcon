import { NextRequest, NextResponse } from "next/server";

import {
  PriceCategory,
} from "@/lib/prices/config";

import {
  parseExcel,
} from "@/lib/excel/parser";

import {
  mapExcelToPrices,
} from "@/lib/excel/mapper";

import {
  saveLatestPrices,
} from "@/lib/storage/json";

import {
  parseComparisonExcel,
} from "@/lib/excel/comparison/parser";

import {
  mapComparisonExcel,
} from "@/lib/excel/comparison/mapper";


export async function POST(
  request: NextRequest
) {

  try {

    const formData =
      await request.formData();


    const file =
      formData.get("file");


    const category =
      formData.get("category");

      const product =
  formData.get("product");

  if (
  category !== "petroleum" &&
  (
    !product ||
    typeof product !== "string"
  )
) {

  return NextResponse.json(
    {
      success:false,
      message:
        "Product is required.",
    },
    {
      status:400,
    }
  );

}



    if (
      !file ||
      !(file instanceof File)
    ) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Excel file is required.",
        },
        {
          status: 400,
        }
      );

    }



    if (
      !category ||
      typeof category !== "string"
    ) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Category is required.",
        },
        {
          status: 400,
        }
      );

    }



    const validCategories: PriceCategory[] =
[
  "petroleum",
  "petrochemical",
  "other",
];



    if (
      !validCategories.includes(
        category as PriceCategory
      )
    ) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid category.",
        },
        {
          status: 400,
        }
      );

    }



    /*
      Convert uploaded file
      to ArrayBuffer
    */

    const buffer =
      await file.arrayBuffer();


      



    /*
  Convert uploaded file
  to ArrayBuffer
*/



/*
  Step 1
  Parse Excel
*/

let weeklyData = null;


if (
  category === "petroleum"
) {

  const parsedWorkbook =
    await parseExcel(
      buffer,
      category as PriceCategory
    );

  weeklyData =
    mapExcelToPrices(
      parsedWorkbook
    );

}


else if (

  category === "petrochemical" ||

  category === "other"

) {

  const parsedComparison =
    await parseComparisonExcel(
      buffer,
      {
        category,
        product:
          product as string,
      }
    );

  weeklyData =
    mapComparisonExcel(
      parsedComparison,
      {
        category,
        product:
          product as string,
      }
    );

}



/*
  Validation
*/

if (!weeklyData) {

  return NextResponse.json(
    {
      success: false,
      message:
        "Unable to process uploaded file.",
    },
    {
      status: 400,
    }
  );

}



/*
  Save JSON
*/

await saveLatestPrices(
  category as PriceCategory,
  weeklyData,
  product as string
);



    return NextResponse.json(
      {
        success: true,

        message:
          "Market prices updated successfully.",

        data:
          weeklyData,
      }
    );



  } catch (error) {


    console.error(
      "Upload API Error:",
      error
    );


    return NextResponse.json(
      {
        success: false,

        message:
          "Upload failed.",
      },
      {
        status:500,
      }
    );


  }

}