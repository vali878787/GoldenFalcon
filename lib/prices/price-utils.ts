export function calculateAveragePrice(
  price: string
): number {

  const values =
    price
      .split("-")
      .map(
        (value) =>
          Number(value.trim())
      );


  if (
    values.length === 2 &&
    !isNaN(values[0]) &&
    !isNaN(values[1])
  ) {

    return Number(
      (
        (values[0] + values[1])
        /
        2
      )
      .toFixed(2)
    );

  }


  return Number(
    Number(price)
      .toFixed(2)
  );

}



export function calculatePriceChange(
  currentPrice: string,
  previousPrice?: string
): number {


  if (
    !previousPrice
  ) {

    return 0;

  }


  return Number(
    (
      calculateAveragePrice(currentPrice)
      -
      calculateAveragePrice(previousPrice)
    )
    .toFixed(2)
  );

}