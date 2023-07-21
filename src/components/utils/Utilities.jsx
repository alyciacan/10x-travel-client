export const decimalToRatio = (decimal) => {
  let numerator = decimal;
  let denominator = 1;
  while (Math.floor(numerator) !== numerator) {
    numerator *= 10;
    denominator *= 10;
  }

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(numerator, denominator);

  const ratioNumerator = numerator / divisor;
  const ratioDenominator = denominator / divisor;

  return `${ratioNumerator} : ${ratioDenominator}`;
};
