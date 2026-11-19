export function applyDiscount(price, discountPercent) {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error("Invalid discount percentage");
  }
  return price - (price * discountPercent) / 100;
}