import React from 'react';
import { gsap } from 'gsap';
interface Data {
  day: number;
  month: number;
  year: number;
  bookRate: number;
  timeAvailability: string[];
}
const generateData = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const days = new Date(date.getFullYear(), month, 0).getDate();
  const times = Array.from(Array(8), (e, i) => i + 8 + ':00');
  const rng = (range: number) => Math.floor(Math.random() * range) + 1;
  const mockBookRate = () => +(1 / rng(times.length)).toFixed(2);
  const randomNumbers = [...Array(15)].map((el) => rng(days));
  const removedDuplicates = Array.from(new Set(randomNumbers));
  const list = removedDuplicates.map((el, i) => {
    const bookRate = mockBookRate();
    return {
      day: el,
      month: month,
      year: 2022,
      bookRate,
      timeAvailability: times.slice(0, times.length - times.length * bookRate),
    };
  });

  const allDaysArray = [...Array(days)].map((val, ind) => ++ind);
  const replaced: Data[] = allDaysArray.map((el) => {
    const cellWithData = list.find((e) => e.day === el);

    if (cellWithData) {
      return cellWithData;
    } else {
      return {
        day: el,
        month,
        year: 2022,
        bookRate: 0,
        timeAvailability: times,
      };
    }
  });
  return replaced;
};
const gsapFade = (element: HTMLDivElement | null, delay = 0.5) =>
  gsap.from(element, {
    opacity: 0,
    duration: 0.8,
    delay,
  });

const headerClasses =
  'sm:text-4xl text-3xl font-medium text-center title-font  mb-4';

const useObserver = (): [
  containerRef: React.RefObject<any>,
  isVisible: boolean
] => {
  const [isVisible, setVisibility] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setVisibility(entry.isIntersecting);
    });
    const current = containerRef.current;
    if (!current) return;
    observer.observe(current);
    return () => {
      observer.unobserve(current);
    };
  }, [containerRef]);

  return [containerRef, isVisible];
};
export { generateData, gsapFade, headerClasses, useObserver };
