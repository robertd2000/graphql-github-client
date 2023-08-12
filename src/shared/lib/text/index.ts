export const trimText = (text: string, len: number) => {
  if (text.length <= len) return text
  return text.slice(0, len) + '...'
}
