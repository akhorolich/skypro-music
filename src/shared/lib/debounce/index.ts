export const debounce = <Args extends unknown[]>(
  ms: number,
  fn: (...args: Args) => void,
) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fn(...args), ms);
  };
};
