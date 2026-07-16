export const PRICE_CATEGORIES = {
  petroleum: {
    id: "petroleum",
    name: "Petroleum",
  },

  other: {
    id: "other",
    name: "Other Markets",
  },

  petrochemical: {
    id: "petrochemical",
    name: "Petrochemical",
  },
} as const;


export type PriceCategory =
  keyof typeof PRICE_CATEGORIES;
