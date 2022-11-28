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
  <svg
    aria-hidden='true'
    className='w-5 h-5'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
      clipRule='evenodd'></path>
  </svg>
);
interface FormButtonPropTypes {
  type?: 'submit';
  cancel?: boolean;
  autoFocus?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
  children: React.ReactNode;
  disabled?: boolean;
}
const FormButton = (props: FormButtonPropTypes) => (
  <button
    className={`rounded-md px-3.5 py-2 my-1 mx-auto overflow-hidden relative group peer  cursor-pointer disabled:cursor-not-allowed border font-medium max-w-[10rem] ${
      props.cancel ? 'border-gray-800 text-gray-800' : 'border-main text-main'
    } disabled:border-gray-darken/50  disabled:text-gray-darken/50 `}
    {...props}>
    <span
      className={`absolute w-[40rem] h-0 transition-all duration-300 origin-center rotate-45  -translate-x-20 bg-main peer-disabled:bg-transparent top-1/2 group-hover:h-64  ease`}></span>
    <span className='relative  transition duration-300 group-hover:text-white ease'>
      {props.children}
    </span>
  </button>
);
const CalendarHeaderButton = ({
  onclick,
  hide,
  type,
}: {
  onclick: (v: string) => void;
  hide?: boolean;
  type: string;
}) => (
  <button
    className={`button-select ${
      hide ? 'opacity-0' : 'opacity-100'
    } w-8 h-8 m-2 inline-flex items-center justify-center duration-200 rounded-full bg-gray-light/50 border border-gray-darken/50 text-accent hover:bg-main/80 hover:text-gray-light mb-4 ${
      type === 'dec' ? 'rotate-180' : 'rotate-0'
    }`}
    onClick={() => onclick(type)}>
    {arrowImage}
  </button>
);

export { dayNames, monthNames, arrowImage, FormButton, CalendarHeaderButton };
