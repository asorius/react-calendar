import { useState, useRef, useEffect } from 'react';
import { CalendarHeader, WeekdayNames, DaysGrid, Form } from './';
import './styles/calendar-container.css';
import './styles/weekdays-container.css';

function Calendar() {
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
      <div
        className={`form-weekday-container ${
          creationIsOpen ? 'form-active' : ''
        }`}>
        <CalendarHeader creationHandler={openerHandler}></CalendarHeader>
        <div
          className={`week-days-container ${
            creationIsOpen ? 'form-active' : ''
          }`}>
          <WeekdayNames />

          <div className='week-days-list'>
            <DaysGrid onDayClick={openerHandler}></DaysGrid>
          </div>
          <div className='week-days-asterix'>
            * Fully colored day represents fully booked.
          </div>
        </div>
      </div>
      {creationIsOpen && (
        <Form open={creationIsOpen} handleAction={openerHandler}></Form>
      )}
    </div>
  );
}

export default Calendar;
