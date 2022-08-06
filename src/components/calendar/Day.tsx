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
  bookingInformation?: { rate: number; times: string[] };
  onClickAction: (show: boolean) => void;
};
export default function Day({
  day,
  monthQueue,
  isCurrentDay,
  weekdayName,
  bookingInformation,
  onClickAction,
}: PROPTYPES) {
  const context = useContext(CalendarContext);
  const dispatch = context.dispatch;
  const [lastFocus, setLastFocus] = React.useState<React.ReactNode>(null);
  const dayElement = React.useRef<HTMLButtonElement>(null);
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
  const currentlyMountedDaysMonthValue = adjustMonth(monthQueue);
  const currentDaysYear = adjustYear(monthQueue);
  const isWeekend = weekdayName === 'sat' || weekdayName === 'sun';
  const isFromPreviousYear = currentDaysYear < currentYear;
  const isLastMonthOfPreviousYear = monthQueue === 'prev' && isFromPreviousYear;
  const dayHasPassed = () => {
    if (currentlyMountedDaysMonthValue < currentMonth) {
      //check for previous month
      return true;
    } else if (
      day <= currentDayDate &&
      currentlyMountedDaysMonthValue <= currentMonth
    ) {
      //check for current month already passed days
      return true;
    } else {
      return false;
    }
  };
  const dayIsAvailable =
    !isLastMonthOfPreviousYear && !isFromPreviousYear && !dayHasPassed();

  return (
    <button
      className={`day ${monthQueue} ${isCurrentDay && 'current-day'} ${
        isWeekend || !dayIsAvailable ? 'unavailable' : ''
      }`}
      tabIndex={!isWeekend && dayIsAvailable ? 0 : 1}
      title={`${day}-${month}-${year}`}
      onClick={() => {
        if (isWeekend || !dayIsAvailable) return;
        dispatch({
          type: ACTIONS.SELECT,
          payload: {
            day,
            month: currentlyMountedDaysMonthValue,
            year: currentDaysYear,
            times: bookingInformation && bookingInformation.times,
          },
        });
        onClickAction(true);
        setLastFocus(dayElement);
      }}
      ref={dayElement}>
      {day}
      {dayIsAvailable && bookingInformation && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            content: '',
            width: '150%',
            height: `${
              bookingInformation &&
              (bookingInformation.rate !== 1
                ? bookingInformation.rate * 100
                : 120)
            }%`,
            zIndex: -5,
          }}
          className='box'>
          <div className='wave -one'></div>
          <div className='wave -two'></div>
          <div className='wave -three'></div>
        </div>
      )}
    </button>
  );
}
