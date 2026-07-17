

import {
  ParsedWorkbook,
  WeeklyPriceData,
  PriceSection,
  RawExcelRow,
} from "./types";

import {
  calculateAveragePrice,
  calculatePriceChange,
} from "@/lib/prices/price-utils";


function detectUnit(
  text: string
): string {

  const value =
    text.toLowerCase();


  if (
    value.includes("/barrel")
  ) {
    return "USD / Barrel";
  }


  if (
    value.includes("/mt")
  ) {
    return "USD / MT";
  }


  return "USD";

}



function isSectionRow(
  row: RawExcelRow
): boolean {

  const text =
    `${row.product} ${row.code} ${row.price}`
      .toLowerCase();


  return (
    text.includes("fob") ||
    text.includes("$/barrel") ||
    text.includes("$/mt") ||
    text.includes("($")
  );

}



function createSection(
  title: string,
  unit: string,
  rows: RawExcelRow[]
): PriceSection {

  return {

    title,

    term: title,

    priceTitle: unit,


items:

  rows.map(
    (row) => ({

      product:
        row.product,

      code:
        row.code,

      price:
        row.price,

      previousPrice:
        row.previousPrice,

      average:
        calculateAveragePrice(
          row.price
        ),

      change:
        calculatePriceChange(
          row.price,
          row.previousPrice
        ),

    })
  ),

  };

}



export function mapExcelToPrices(
  workbook: ParsedWorkbook
): WeeklyPriceData {


  const sections: PriceSection[] = [];


  let currentTitle = "";

  let currentUnit =
    "USD";


  let currentRows: RawExcelRow[] =
    [];



  workbook.rows.forEach(
    (row) => {


      const text =
        `${row.product} ${row.code} ${row.price}`;



      if (
        isSectionRow(row)
      ) {


        if (
          currentRows.length > 0
        ) {

          sections.push(
            createSection(
              currentTitle,
              currentUnit,
              currentRows
            )
          );

        }



        currentTitle =
          row.product ||
          text;



        currentUnit =
          detectUnit(text);



        currentRows = [];


        return;

      }



      if (
        row.product ||
        row.code ||
        row.price
      ) {

        currentRows.push(row);

      }


    }
  );



  if (
    currentRows.length > 0
  ) {

    sections.push(
      createSection(
        currentTitle,
        currentUnit,
        currentRows
      )
    );

  }



  return {

    week:
      getWeekNumber(
        new Date(
          workbook.uploadedAt
        )
      ),


    date:
      new Date(
        workbook.uploadedAt
      )
      .toLocaleDateString(
        "en-GB",
        {
          day:"2-digit",
          month:"long",
          year:"numeric",
        }
      ),


    updatedAt:
      workbook.uploadedAt,


    sections,

  };

}



function getWeekNumber(
  date: Date
): number {


  const firstDay =
    new Date(
      date.getFullYear(),
      0,
      1
    );


  const days =
    Math.floor(
      (
        date.getTime()
        -
        firstDay.getTime()
      )
      /
      86400000
    );


  return Math.ceil(
    (
      days
      +
      firstDay.getDay()
      +
      1
    )
    /
    7
  );

}