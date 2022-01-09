import { useState, useRef, useEffect } from 'react';
import CalendarHeader from './CalendarHeader';
import Days from './Days';
import Creation from './CreationForm';
import { dayNames } from './utils';
import './styling/calendar/calendar-container.css';
import './styling/calendar/weekdays-container.css';

function Calendar() {
  const [creationIsOpen, setOpen] = useState(false);
  const openerHandler = (clickedInParentArea) => {
    if (clickedInParentArea) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className={`calendar-container`}>
      <div
        className={`form-weekday-container ${creationIsOpen && 'form-active'}`}>
        <CalendarHeader creationHandler={openerHandler}></CalendarHeader>
        <div
          className={`week-days-container ${creationIsOpen && 'form-active'}`}>
          <div className='week-days'>
            {
              // Just like table headings, nothing input depending here. < 6 condition cause of placeholder at index 0.
              dayNames.map(
                (day, i) =>
                  day.length < 6 && (
                    <div key={i} className='week-days__shortname'>
                      {day}
                    </div>
                  )
              )
            }
          </div>
          <div className='week-days-list'>
            <Days onDayClick={openerHandler}></Days>
          </div>
          <div className='week-days-asterix'>
            * Fully colored day represents fully booked.
          </div>
        </div>
      </div>
      {creationIsOpen && (
        <Creation open={creationIsOpen} handleAction={openerHandler}></Creation>
      )}
    </div>
  );
}

export default Calendar;
