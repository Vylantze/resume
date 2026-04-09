export type UncheckedString = string | null | undefined;

export function isNonEmptyString (value: UncheckedString): value is string {
  return typeof value === 'string' && value.trim() !== '';
}
