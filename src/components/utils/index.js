const mockupData = [
  {
    day: 28,
    month: 1,
    year: 2022,
    timeAvailability: ['13:00', '14:00'],
    bookRate: 0.7,
  },
  {
    day: 6,
    month: 1,
    year: 2022,
    bookRate: 0.1,
    timeAvailability: ['09:00', '10:00'],
  },
  {
    day: 13,
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
    timeAvailability: ['09:00', '10:00', '11:00,12:00'],
  },
];
const dayNames = [
  'placeholder, because new Date().getDay() starts at 0',
  'mon',
  'tue',
  'wed',
  'thur',
  'fri',
  'sat',
  'sun',
];
const monthNames = [
  'placeholder, because new Date().getMonth() starts at 0',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const arrowImage = (
  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACWUlEQVRYhcWXwWsTQRTGv8na0JS0l0Lp7jaHiiBYL503wYsapbQ9eag0ghcV/AM8iP+BoHgt6kWQKkIpFARBPAj2EkICi6wHEVEQITMJEi0kEEvLPi/1IuIm2834nb+Z78ebt292gBgR0Tul1GKcL6kycQZmvsXMm0qpc8MAcOIMxpjPrut+BLDhum7FGPPVKsABxAff9z8BeDYzM/NGa62tAgCA1vq953ktZn7qed5rY4yxCgAAxpjQ9/02gMfT09Mvm83mN6sAAKC1fut53p4Q4pHv+y+01m2rAABgjKl5nscA7hcKheeNRmPHKsABRNV13Ulmvjc1NbXVarU6SfYRSQF+i4juArgIoBQEwcCNeWgAAEIptcbMZx3HOV+v1wfqiTQAAEBIKR8KIU5ls9mFarX63TYAAGSUUuvMfGx0dHSpUqn01ROxd8EAimZnZ68x85der/dqbm4u38+iNCsAACCiESHEVhRFuYmJiQvb29s//+VPswIAgCAI9vL5/CUhRNTpdDbi/KkD/CG2DkBEI91ud5OZM+Pj45etApTLZYeZn0RRNLm7u7sSd/7AIUbxX5QZGxtbB3A0l8stB0HQ7WfRkZTChZTyATOfzGazC/3OACCdCgil1BqA047jLNRqtb6nIJBCBYjoDjMvASgNeg8cGkBKeRvA6v7+fikMw0S/aIm/AiK6KYS44jjOYhiGjaT7JA2/QURNpdRxq8EAoJS6TkSt+fn5E9bDiegqEbWJSFoPV0qtElG7WCwWrYdLKVeIaEdKeeZ/hC8T0Y9hPU5jNezn+S/II90FBF8/SQAAAABJRU5ErkJggg==' />
);
export { mockupData, dayNames, monthNames, arrowImage };
