import * as XLSX from "xlsx";

import {
  ParsedWorkbook,
  RawExcelRow,
} from "./types";

import {
  PriceCategory,
} from "@/lib/prices/config";


export async function parseExcel(
  buffer: ArrayBuffer,
  category: PriceCategory
): Promise<ParsedWorkbook> {

  try {

    const workbook = XLSX.read(
      buffer,
      {
        type: "array",
      }
    );


    if (
      !workbook.SheetNames ||
      workbook.SheetNames.length === 0
    ) {

      throw new Error(
        "Excel file does not contain any sheet."
      );

    }


    const sheetName =
      workbook.SheetNames[0];


    const worksheet =
      workbook.Sheets[sheetName];


    if (!worksheet) {

      throw new Error(
        "Unable to read worksheet."
      );

    }


    const rows =
      XLSX.utils.sheet_to_json<
        (string | number | null)[]
      >(
        worksheet,
        {
          header: 1,
          defval: "",
        }
      );


    const parsedRows: RawExcelRow[] = [];


    rows.forEach((row) => {


      const values =
        row.map((item) =>
          String(item ?? "")
            .trim()
        );


      const isEmpty =
        values.every(
          (value) =>
            value === ""
        );


      if (isEmpty) {
        return;
      }


      parsedRows.push({

  product:
    values[0] ?? "",

  code:
    values[1] ?? "",

  price:
    values[2] ?? "",

  previousPrice:
    values[3] ?? "",

});


    });



    return {

      category,

      uploadedAt:
        new Date()
          .toISOString(),


      fileName:
        "uploaded_excel_file",


      rows: parsedRows,

    };


  } catch (error) {


    console.error(
      "Excel Parser Error:",
      error
    );


    throw new Error(
      "Unable to parse Excel file."
    );


  }

}