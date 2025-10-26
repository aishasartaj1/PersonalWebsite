type ClassValue = string | number | boolean | undefined | null | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat()
    .filter((x) => typeof x === 'string')
    .join(' ')
    .trim();
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

