export const numberWithUnit = (value: number | string) => {
  // 1500000 -> 1.5M
  // 840000 -> 840K
  // 12000 -> 12K
  // 999 -> 999
  const num = Number(value);
  if (Number.isNaN(num)) return value;

  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num;
};
