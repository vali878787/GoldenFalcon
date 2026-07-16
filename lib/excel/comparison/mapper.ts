import {
  ComparisonWeeklyData,
} from "./comparison-types";

interface MapperOptions {

  category: string;

  product: string;

}

export function mapComparisonExcel(

  data: ComparisonWeeklyData,

  options: MapperOptions

): ComparisonWeeklyData {

  return {

    ...data,

    category:
      options.category,

    product:
      options.product,

  };

}