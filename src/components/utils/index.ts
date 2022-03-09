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
  const rng = () => Math.floor(Math.random() * days) + 1;
  const randomNumbers = [...Array(15)].map((el) => rng());
  const removedDuplicates = Array.from(new Set(randomNumbers));
  const list = removedDuplicates.map((el) => ({
    day: el,
    month: month,
    year: 2022,
    bookRate: +Math.random().toFixed(2),
    timeAvailability: ['09:00', '10:00', '11:00', '12:00'],
  }));

  return list;
};
export default generateData;
