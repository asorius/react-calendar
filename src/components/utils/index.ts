const mockupData = [
  {
    day: 28,
    month: 1,
    year: 2022,
    timeAvailability: ['13:00', '14:00'],
    bookRate: 0.7,
  },
  {
    day: 26,
    month: 1,
    year: 2022,
    bookRate: 0.1,
    timeAvailability: ['09:00', '10:00'],
  },
  {
    day: 23,
    month: 1,
    year: 2022,
    bookRate: 0.3,
    timeAvailability: ['09:00', '10:00', '13:00'],
  },
  {
    day: 31,
    month: 1,
    year: 2022,
    bookRate: 1,
    timeAvailability: ['09:00', '10:00', '11:00', '12:00'],
  },
];
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
  const replaced = allDaysArray.map((el) => {
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
export default generateData;
