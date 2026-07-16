import fs from "fs/promises";
import path from "path";

import { PriceCategory } from "@/lib/prices/config";

import {
  WeeklyPriceData,
} from "@/lib/excel/types";

import {
  ComparisonWeeklyData,
} from "@/lib/excel/comparison/comparison-types";

import {
  formatHistoryFilename,
} from "@/lib/utils/date";

const BASE_PATH = path.join(
  process.cwd(),
  "data",
  "prices"
);

interface HistoryIndexItem {

  file: string;

  date: string;

  updatedAt: string;

}

function getCategoryPath(

  category: PriceCategory,

  product?: string

) {

  if (

    category === "petrochemical" &&

    product

  ) {

    return path.join(

      BASE_PATH,

      category,

      product

    );

  }

  return path.join(

    BASE_PATH,

    category

  );

}

function getHistoryPath(

  category: PriceCategory,

  product?: string

) {

  return path.join(

    getCategoryPath(

      category,

      product

    ),

    "history"

  );

}

function getLatestFile(

  category: PriceCategory,

  product?: string

) {

  return path.join(

    getCategoryPath(

      category,

      product

    ),

    "latest.json"

  );

}

function getIndexFile(

  category: PriceCategory,

  product?: string

) {

  return path.join(

    getCategoryPath(

      category,

      product

    ),

    "index.json"

  );

}

async function ensureDirectory(

  directory: string

) {

  await fs.mkdir(

    directory,

    {

      recursive: true,

    }

  );

}

async function ensureCategoryFolders(

  category: PriceCategory,

  product?: string

) {

  await ensureDirectory(

    getCategoryPath(

      category,

      product

    )

  );

  await ensureDirectory(

    getHistoryPath(

      category,

      product

    )

  );

}

async function readIndex(

  category: PriceCategory,

  product?: string

): Promise<HistoryIndexItem[]> {

  try {

    const file =

      await fs.readFile(

        getIndexFile(

          category,

          product

        ),

        "utf8"

      );

    return JSON.parse(file);

  }

  catch {

    return [];

  }

}

async function writeIndex(

  category: PriceCategory,

  items: HistoryIndexItem[],

  product?: string

) {

  await fs.writeFile(

    getIndexFile(

      category,

      product

    ),

    JSON.stringify(

      items,

      null,

      2

    ),

    "utf8"

  );

}

async function archiveLatest(
  category: PriceCategory,
  product?: string
) {

  try {

    const latest =
      await fs.readFile(
        getLatestFile(
          category,
          product
        ),
        "utf8"
      );

    const json =
      JSON.parse(latest) as
        | WeeklyPriceData
        | ComparisonWeeklyData;

    const filename =
      formatHistoryFilename(
        new Date(
          json.updatedAt
        )
      );

    await fs.writeFile(
      path.join(
        getHistoryPath(
          category,
          product
        ),
        filename
      ),
      latest,
      "utf8"
    );

    const index =
      await readIndex(
        category,
        product
      );

    index.unshift({

      file: filename,

      date: json.date,

      updatedAt:
        json.updatedAt,

    });

    await writeIndex(
      category,
      index,
      product
    );

  }

  catch {

    // latest.json does not exist

  }

}

export async function readLatestPrices(

  category: PriceCategory,

  product?: string

): Promise<
  WeeklyPriceData |
  ComparisonWeeklyData |
  null
> {

  try {

    const file =
      await fs.readFile(
        getLatestFile(
          category,
          product
        ),
        "utf8"
      );

    return JSON.parse(file);

  }

  catch {

    return null;

  }

}

export async function saveLatestPrices(

  category: PriceCategory,

  data:
    | WeeklyPriceData
    | ComparisonWeeklyData,

  product?: string

) {

  await ensureCategoryFolders(

    category,

    product

  );

  await archiveLatest(

    category,

    product

  );

  data.updatedAt =
    new Date().toISOString();

  await fs.writeFile(

    getLatestFile(

      category,

      product

    ),

    JSON.stringify(

      data,

      null,

      2

    ),

    "utf8"

  );

}

export async function readHistoryIndex(

  category: PriceCategory,

  product?: string

) {

  const index =
    await readIndex(

      category,

      product

    );

  index.sort(

    (
      a,
      b
    ) =>

      new Date(
        b.updatedAt
      ).getTime()

      -

      new Date(
        a.updatedAt
      ).getTime()

  );

  return index;

}

export async function readHistoryFile(

  category: PriceCategory,

  filename: string,

  product?: string

): Promise<
  WeeklyPriceData |
  ComparisonWeeklyData |
  null
> {

  try {

    const file =
      await fs.readFile(

        path.join(

          getHistoryPath(

            category,

            product

          ),

          filename

        ),

        "utf8"

      );

    return JSON.parse(file);

  }

  catch {

    return null;

  }

}