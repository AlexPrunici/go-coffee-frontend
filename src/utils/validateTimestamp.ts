export function isValidTimestamp(timestamp: string) {
  const parsedTimestamp = Date.parse(timestamp);
  return !isNaN(parsedTimestamp);
}
