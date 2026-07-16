export interface ComparisonItem {

  market: string;

  currentPrice: string;

  previousPrice: string;

}



export interface ComparisonSection {

  title: string;

  items: ComparisonItem[];

}



export interface ComparisonWeeklyData {

  category: string;

  product: string;

  date: string;

  previousDate: string;

  updatedAt: string;

  sections: ComparisonSection[];

}