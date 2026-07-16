import {
  readHistoryFile,
  readHistoryIndex,
  readLatestPrices,
} from "@/lib/storage/json";

import { PriceCategory } from "./config";

import {
  WeeklyPriceData,
} from "@/lib/excel/types";

import {
  ComparisonWeeklyData,
} from "@/lib/excel/comparison/comparison-types";



export async function loadLatestPrices(
  category: PriceCategory
): Promise<WeeklyPriceData | null> {

  const data =
    await readLatestPrices(
      category
    );

  return data as WeeklyPriceData | null;

}




export async function loadHistoryPrices(
  category: PriceCategory,
  filename: string
): Promise<WeeklyPriceData | null> {

  const data =
    await readHistoryFile(
      category,
      filename
    );


  return data as WeeklyPriceData | null;

}




export async function loadAvailableHistory(
  category: PriceCategory
) {

  return await readHistoryIndex(
    category
  );

}




// مخصوص پتروشیمی (Urea / Sulphur)

export async function loadLatestComparisonPrices(
  category: PriceCategory,
  product: string
): Promise<ComparisonWeeklyData | null> {


  const data =
    await readLatestPrices(
      category,
      product
    );


  return data as ComparisonWeeklyData | null;

}




export async function loadComparisonHistoryPrices(
  category: PriceCategory,
  filename: string,
  product: string
): Promise<ComparisonWeeklyData | null> {


  const data =
    await readHistoryFile(
      category,
      filename,
      product
    );


  return data as ComparisonWeeklyData | null;

}




export async function loadComparisonHistory(
  category: PriceCategory,
  product: string
) {


  return await readHistoryIndex(
    category,
    product
  );


}