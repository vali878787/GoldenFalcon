import { PriceCategory } from "@/lib/prices/config";

export interface ParsedWorkbook {
  category: PriceCategory;

  uploadedAt: string;

  fileName: string;

  rows: RawExcelRow[];
}



/**
 * Single product inside a price table
 */
export interface PriceItem {
  product: string;
  code: string;
  price: string;
}

/**
 * One complete price section
 * Example:
 * Singapore
 * FOB Singapore
 * USD / Barrel
 */
export interface PriceSection {
  title: string;
  term: string;
  priceTitle: string;
  items: PriceItem[];
}

/**
 * Weekly market prices
 */
export interface WeeklyPriceData {
  week: number;
  date: string;
  updatedAt: string;
  sections: PriceSection[];
}

/**
 * Raw row extracted from Excel
 */
export interface RawExcelRow {
  product: string;
  code: string;
  price: string;
}

/**
 * Raw Excel data
 */
export interface RawExcelData {
  rows: RawExcelRow[];
}