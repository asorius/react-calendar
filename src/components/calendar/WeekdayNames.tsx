import { dayNames } from './utils';
// import './styles/weekdays-container.css';

function WeekdayNames() {
  return (
    <div className='week-days grid grid-cols-7 h-8 gap-2 '>
      {dayNames.map(
        (day, i) =>
          day.length < 6 && (
            <div
              key={i}
              className='week-days__shortname text-center grid place-items-center capitalize font-semibold'>
              {day}
            </div>
          )
      )}
    </div>
  );
}

export default WeekdayNames;
