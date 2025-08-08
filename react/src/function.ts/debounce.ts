export default function debounce<T>(fun: (arg: T) => void, delay: number): (arg: T) => void {
  let timeId: ReturnType<typeof setTimeout> | null = null;
  return (arg: T) => {
    if (timeId !== null) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      fun(arg);
    }, delay);
  };
}
