import { useState } from 'react';
import { CalendarHeader, WeekdayNames, DaysGrid, Form } from './';
// // import './styles/calendar-container.css';
// import './styles/weekdays-container.css';
import { CalendarContextProvider } from './context';
type DATAELEMENTTYPE = {
  day: number;
  month: number;
  year: number;
  timeAvailability: string[];
  bookRate: number;
};
type PROPTYPES = {
  data: DATAELEMENTTYPE[];
};
function Calendar({ data }: PROPTYPES) {
  const [creationIsOpen, setOpen] = useState(false);
  const openerHandler = (clickedInParentArea: boolean): void => {
    if (clickedInParentArea) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <article
      className={`calendar-container rounded-lg bg-white relative pb-6 px-2 mt-10 ${
        creationIsOpen ? 'mb-20' : 'border border-gray-50'
      } shadow-md`}>
      <CalendarContextProvider>
        <div
          className={`form-weekday-container rounded-lg z-10 duration-300   ${
            creationIsOpen
              ? '-translate-x-full opacity-0'
              : 'translate-x-0 opacity-100 '
          }`}>
          <CalendarHeader></CalendarHeader>
          <div className={`week-days-container `}>
            <WeekdayNames />
            <div className='week-days-list grid grid-cols-7 gap-2 py-2 border-t '>
              <DaysGrid onDayClick={openerHandler} data={data}></DaysGrid>
            </div>
            <div className='sub-text text-gray-600 ml-1 text-sm text-center py-6'>
              * Fill level represents availability
            </div>
          </div>
        </div>
        {creationIsOpen && (
          <Form open={creationIsOpen} handleAction={openerHandler}></Form>
        )}
      </CalendarContextProvider>
    </article>
  );
}

export default Calendar;
