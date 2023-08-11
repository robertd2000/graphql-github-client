export const kFormatter = (num: number) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * ((Math.abs(num) / 1000) as any).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num)
}

export const formatNumber = (num: number, precision: number = 2) => {
  const map = [
    { suffix: 'T', threshold: 1e12 },
    { suffix: 'B', threshold: 1e9 },
    { suffix: 'M', threshold: 1e6 },
    { suffix: 'K', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ]
  if (num < 1000) precision = 0

  const found = map.find((x) => Math.abs(num) >= x.threshold)
  if (found) {
    const formatted = (num / found.threshold).toFixed(precision) + found.suffix
    return formatted
  }

  return num
}
