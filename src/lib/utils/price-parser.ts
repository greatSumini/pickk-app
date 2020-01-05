export const priceHandler = (price: number) => {
  if (price % 1000 === 0) {
    return `${(price / 1000).toFixed(0)},000`;
  } else {
    return `${(price / 1000).toFixed(0)},${price % 1000}`;
  }
};
