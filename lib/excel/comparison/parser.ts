import * as XLSX from "xlsx";

import {
  ComparisonWeeklyData,
  ComparisonSection,
} from "./comparison-types";


interface ParseComparisonOptions {

  category: string;

  product: string;

}


function formatExcelDate(
  value: unknown
): string {

  if (!value) return "";


  // Excel numeric date
  if (
    typeof value === "number"
  ) {

    const date =
      XLSX.SSF.parse_date_code(
        value
      );


    if (!date) return "";


    return new Date(
      date.y,
      date.m - 1,
      date.d
    ).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );

  }


  // String date
  const parsed =
    new Date(
      String(value)
    );


  if (
    !isNaN(
      parsed.getTime()
    )
  ) {

    return parsed.toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );

  }


  return String(value);

}



export async function parseComparisonExcel(

  buffer: ArrayBuffer,

  options: ParseComparisonOptions

): Promise<ComparisonWeeklyData> {


  const workbook =
    XLSX.read(
      buffer,
      {
        type: "array",
      }
    );


  const sheet =
    workbook.Sheets[
      workbook.SheetNames[0]
    ];


  const rows =
    XLSX.utils.sheet_to_json<
      (string | number | null)[]
    >(
      sheet,
      {
        header: 1,
        blankrows: false,
      }
    );


  let date = "";

  let previousDate = "";


  const sections:
    ComparisonSection[] = [];


  let currentSection:
    ComparisonSection | null = null;



  for (
    const row of rows
  ) {


    const col1 =
      String(
        row[0] ?? ""
      ).trim();


    const col2 =
      String(
        row[1] ?? ""
      ).trim();


    const col3 =
      String(
        row[2] ?? ""
      ).trim();


    const col4 =
      String(
        row[3] ?? ""
      ).trim();



    /*
      Current Date
    */

    if (
      col1.toLowerCase()
      ===
      "current date"
    ) {

      date =
        formatExcelDate(
          row[1]
        );


      continue;

    }



    /*
      Previous Date
    */

    if (
      col1.toLowerCase()
      ===
      "previous date"
    ) {

      previousDate =
        formatExcelDate(
          row[1]
        );


      continue;

    }




    /*
      Section title

      Example:

      Prilled urea - fob bulk

    */

    if (

      col1 &&
      !col2 &&
      !col3 &&
      !col4

    ) {


      currentSection =
      {

        title:
          col1,

        items:
          [],

      };


      sections.push(
        currentSection
      );


      continue;

    }




    /*
      Price rows

      Excel:

      Market | Current | Previous

    */

    if (

      currentSection &&
      !col1 &&
      col2 &&
      col3 &&
      col4

    ) {


      currentSection.items.push({

        market:
          col2,

        currentPrice:
          col3,

        previousPrice:
          col4,

      });


    }


  }



  return {

    category:
      options.category,


    product:
      options.product,


    date,


    previousDate,


    updatedAt:
      new Date()
        .toISOString(),


    sections,

  };


}