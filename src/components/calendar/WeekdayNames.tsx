import { dayNames } from './utils';
import './styles/weekdays-container.css';

function WeekdayNames() {
  return (
    <div className='week-days'>
      {dayNames.map(
        (day, i) =>
          day.length < 6 && (
            <div key={i} className='week-days__shortname'>
              {day}
            </div>
          )
      )}
    </div>
  );
}

export default WeekdayNames;
