import { useContext } from 'react';
import { CalendarContext, ACTIONS } from './context';
import { monthNames, arrowImage } from './utils';
import './styles/calendar-header.css';

export default function CalendarHeader() {
  const context = useContext(CalendarContext);
  const dispatch = context.dispatch;
  const { year, month } = context.state.currentDisplayDate;
  const { currentDate } = context.state;
  const actionFn = (type: string) => {
    type === 'inc'
      ? dispatch({ type: ACTIONS.INCREMENT })
      : dispatch({ type: ACTIONS.DECREMENT });
    //in case of previously opened creation form, close it
    // creationHandler(false);
  };
  const hideButton: boolean =
    new Date(year, month - 1, 1) <=
    new Date(`${currentDate.year}-${currentDate.month}-1`);
  console.log({
    hideButton,
  });
  return (
    <div className='calendar-header'>
      {hideButton ? (
        <div className='button-select hidden'></div>
      ) : (
        <button className='button-select left' onClick={() => actionFn('dec')}>
          {arrowImage}
        </button>
      )}

      <div className='calendar-header-date'>
        <div className='display-year'>{year}</div>
        <div className='display-month'>{monthNames[month]}</div>
      </div>
      <button className='button-select' onClick={() => actionFn('inc')}>
        {arrowImage}
      </button>
    </div>
  );
}
