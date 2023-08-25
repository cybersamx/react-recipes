export function capitalize<T extends string = string>(str: T): Capitalize<typeof str> {
  return (str[0].toUpperCase() + str.slice(1)) as Capitalize<typeof str>
}
