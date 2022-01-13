import { useState } from 'react';
import { CalendarHeader, WeekdayNames, DaysGrid, Form } from './';
import './styles/calendar-container.css';
import './styles/weekdays-container.css';
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
    <div className='calendar-container'>
      <CalendarContextProvider>
        <div
          className={`form-weekday-container ${
            creationIsOpen ? 'form-active' : ''
          }`}>
          <CalendarHeader></CalendarHeader>
          <div
            className={`week-days-container ${
              creationIsOpen ? 'form-active' : ''
            }`}>
            <WeekdayNames />

            <div className='week-days-list'>
              <DaysGrid onDayClick={openerHandler} data={data}></DaysGrid>
            </div>
            <div className='week-days-asterix'>
              * Fully colored day represents fully booked.
            </div>
          </div>
        </div>
        {creationIsOpen && (
          <Form open={creationIsOpen} handleAction={openerHandler}></Form>
        )}
      </CalendarContextProvider>
    </div>
  );
}

export default Calendar;
