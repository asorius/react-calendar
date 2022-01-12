import React from 'react';
import { CalendarContext, ACTIONS } from './context';
import { useContext } from 'react';
import './styles/day-element.css';
import './styles/waves-element.css';
type PROPTYPES = {
  day: number;
  monthQueue: string;
  isCurrentDay: boolean;
  weekdayName: string | false;
  bookRate: number;
  onClickAction: (show: boolean) => void;
};
export default function Day({
  day,
  monthQueue,
  isCurrentDay,
  weekdayName,
  bookRate,
  onClickAction,
}: PROPTYPES) {
  const context = useContext(CalendarContext);
  const dispatch = context.dispatch;
  const node = React.useRef<HTMLDivElement>(null);
  const { month, year } = context.state.currentDisplayDate;
  const currentYear = context.state.currentDate.year;
  const currentMonth = context.state.currentDate.month;
  const currentDayDate = context.state.currentDate.day;

  const adjustMonth = (q: string) => {
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
  const adjustYear = (q: string) => {
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
      className={`day ${monthQueue} ${isCurrentDay && 'current-day'} ${
        (isWeekend || unavailableDay) && 'unavailable'
      }`}
      onClick={(e) => {
        if (isWeekend || unavailableDay) return;
        dispatch({
          type: ACTIONS.SELECT,
          payload: { day, month: currentDaysMonth, year: currentDaysYear },
        });
        onClickAction(true);
      }}
      ref={node}>
      {day}
      {!unavailableDay && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            content: '',
            width: '150%',
            height: `${bookRate * 100}%`,
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
