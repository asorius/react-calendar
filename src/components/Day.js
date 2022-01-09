import React from 'react';
import { DatesContext } from './context/DatesContext';
import { useContext } from 'react';
import './styling/calendar/day-element.css';
import './styling/waves-element.css';
export default function Day({
  day,
  monthQueue,
  currentDay,
  weekdayName,
  bookingInfo,
  onClickAction,
}) {
  const context = useContext(DatesContext);
  const dispatch = context.dispatch;
  const node = React.useRef();
  const { month, year } = context.state.currentDisplayDate;
  const currentYear = context.state.currentDate.year;
  const currentMonth = context.state.currentDate.month;
  const currentDayDate = context.state.currentDate.day;

  const adjustMonth = (q) => {
    switch (q) {
      case 'prev': {
        return month - 1 || 12;
      }
      case 'next': {
        return month + 1 > 12 ? 1 : month + 1;
      }
      default: {
        return month;
      }
    }
  };
  const adjustYear = (q) => {
    switch (q) {
      case 'prev': {
        return month - 1 < 1 ? year - 1 : year;
      }
      case 'next': {
        return month + 1 > 12 ? year + 1 : year;
      }
      default: {
        return year;
      }
    }
  };
  const currentDaysMonth = adjustMonth(monthQueue);
  const currentDaysYear = adjustYear(monthQueue);
  const isWeekend = weekdayName === 'sat' || weekdayName === 'sun';
  const isFromPreviousMonthOrYear =
    monthQueue === 'prev' && currentDaysYear < currentYear;
  const dayHasPassed =
    day < currentDayDate && currentMonth === currentDaysMonth;
  const unavailableDay = isFromPreviousMonthOrYear || dayHasPassed;

  return (
    <div
      className={`day ${monthQueue} ${currentDay} ${
        (isWeekend || unavailableDay) && 'unavailable'
      }`}
      onClick={(e) => {
        if (isWeekend || unavailableDay) return;
        dispatch({
          type: 'select',
          payload: { day, month: currentDaysMonth, year: currentDaysYear },
        });
        onClickAction(node.current.contains(e.target));
      }}
      ref={node}>
      {day}
      {bookingInfo && !unavailableDay && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            content: '',
            width: '150%',
            height: `${bookingInfo * 100}%`,
            zIndex: -2,
          }}
          className='box'>
          <div className='wave -one'></div>
          <div className='wave -two'></div>
          <div className='wave -three'></div>
        </div>
      )}
    </div>
  );
}
