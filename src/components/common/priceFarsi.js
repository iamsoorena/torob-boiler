import digitsToFa from './digitsToFa';

export default function priceFarsi(raw) {
  let raw2 = raw.toLocaleString();
  return digitsToFa(raw2);
}