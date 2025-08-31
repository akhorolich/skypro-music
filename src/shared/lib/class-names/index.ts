type cn = (string | Record<string, boolean>)[];

export default function cn(...args: cn) {
  if (args.every((el) => typeof el === 'string')) return args.join(' ');
  const result: string[] = [];

  for (const el of args) {
    if (typeof el === 'string') {
      result.push(el);
      continue;
    }
    if (typeof el === 'object') {
      for (const key in el) {
        const value = el[key];
        if (value) result.push(key);
      }
      continue;
    }
  }

  return result.join(' ');
}
