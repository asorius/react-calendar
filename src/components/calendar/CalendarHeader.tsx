import { useContext } from 'react';
import { CalendarContext, ACTIONS } from './context';
import { monthNames, CalendarHeaderButton } from './utils';
// import './styles/calendar-header.css';

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

  return (
    <div className='calendar-header flex flex-row items-center py-4'>
      <CalendarHeaderButton
        onclick={actionFn}
        type='dec'
        hide={hideButton}></CalendarHeaderButton>
      <div className='calendar-header-date grow flex flex-col items-center'>
        <div className='display-year font-bold py-1'>{year}</div>
        <div className='display-month pb-1 underline underline-offset-8 decoration-accent'>
          {monthNames[month]}
        </div>
      </div>
      <CalendarHeaderButton
        type='inc'
        onclick={actionFn}></CalendarHeaderButton>
    </div>
  );
}
