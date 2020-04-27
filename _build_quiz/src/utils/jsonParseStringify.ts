export function JSON_Parse_Stringify<T>(input: T): T;
export function JSON_Parse_Stringify<T>(input: T[]): T[] {
  return JSON.parse(JSON.stringify(input));
}
