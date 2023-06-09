const defaultSize = 128;

export function parseSize(size: number | string| undefined): number {
  const parsed = Number(size);
  return (typeof size === 'string' && isNaN(parsed)) ? defaultSize : parsed;
}
