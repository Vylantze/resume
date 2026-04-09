export function clear (): void {
  try {
    localStorage.clear();
  } catch (e: unknown) {
    console.error('[storage][clear] Failed to clear localStorage', e);
  }
}

export function getItem<T> (key: string): T | null {
  try {
    const value = localStorage.getItem(key);
    if (value === null) return null;
    if (value.constructor.name === 'string') return value as T;
    return JSON.parse(value) as T;
  } catch (e: unknown) {
    console.error('[storage][getItem] Failed to get item from localStorage', e);
    return null;
  }
}

export function removeItem (key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (e: unknown) {
    console.error('[storage][removeItem] Failed to remove item from localStorage', e);
  }
}

export function setItem<T> (key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e: unknown) {
    console.error('[storage][setItem] Failed to set item in localStorage', e);
  }
}

export default { clear, getItem, removeItem, setItem };
