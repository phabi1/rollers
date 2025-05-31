export function extractValue(
  item: Record<string, any>,
  column: string | string[]
): any {
  if (Array.isArray(column)) {
    return column.reduce((acc, col) => acc?.[col], item);
  }
  return item[column];
}
