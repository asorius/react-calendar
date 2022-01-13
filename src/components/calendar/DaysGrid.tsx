import { useContext, useState, useEffect } from 'react';
import { CalendarContext } from './context';

import { dayNames } from './utils';
import Day from './Day';
type DATAELEMENTTYPE = {
  day: number;
  month: number;
  year: number;
  timeAvailability: string[];
  bookRate: number;
};
type PROPTYPES = {
  onDayClick: (showelement: boolean) => void;
  data: DATAELEMENTTYPE[];
};
type OBJECTTYPES = {
  dayNumber: number;
  monthNumber: number;
  year: number;
  weekdayName: string;
  monthQueue: string;
  isCurrentDay: boolean;
  bookingInformation?: { rate: number; times: string[] };
};
const DaysGrid = ({ onDayClick, data }: PROPTYPES) => {
  const [dayObjectsList, updateList] = useState<OBJECTTYPES[] | []>([]);
  const context = useContext(CalendarContext);
  const { year, month } = context.state.currentDisplayDate;
  useEffect(() => {
    const { currentDate } = context.state;
    let list: OBJECTTYPES[] = [];
    //Days in current month
    const daysInCurrentlyDisplayedMonth = new Date(year, month, 0).getDate();

    //Find out weekday name of first day of currently displayed month
    const weekdayIndexofFirstday = new Date(`${year}-${month}-1`).getDay();

    //If first day is sunday, new Date() returns 0. In that case simply replace that supposed index with sundays
    const weekdayNameofFirstday =
      weekdayIndexofFirstday > 0
        ? dayNames[weekdayIndexofFirstday]
        : dayNames[7];

    //Find out weekday name of last day of currently displayed month
    const weekdayIndexofLastday = new Date(
      `${year}-${month}-${daysInCurrentlyDisplayedMonth}`
    ).getDay();
    const weekdayNameofLastDay = dayNames[weekdayIndexofLastday];

    //To see how many elementents to add from previous month, get amount of days from first current month day and the closest monday
    // value || 7 in case the last day of currently selected month is to be sunday, then the index is 0 therefore i decided to put fallback value
    const amountOfDaysToAddForNextMonth =
      7 - (dayNames.indexOf(weekdayNameofLastDay) || 7);

    //To see how many elementents to add from previous month, get amount of days from first current month day and the closest monday
    const amountOfDaysBeforeFirstDayOfCurrentlyDisplayedMonth =
      dayNames.indexOf(weekdayNameofFirstday) - 1;

    //Days in previous month
    const daysInPrevMonth = new Date(year, month - 1, 0).getDate();

    //Query mockup data and provide data on that date
    const bookingFinder = (weekdayName: string, dayNumber: number) => {
      if (weekdayName !== 'sat' && weekdayName !== 'sun') {
        let result = data.find(
          (el: DATAELEMENTTYPE) =>
            el.day === dayNumber && el.month === month && el.year === year
        );
        return (
          result && {
            rate: result?.bookRate,
            times: result.timeAvailability,
          }
        );
      }
    };

    //First loop to create day objects for previous month days that overflow into current
    for (
      let i = 0;
      i < amountOfDaysBeforeFirstDayOfCurrentlyDisplayedMonth;
      i++
    ) {
      list.push({
        dayNumber:
          daysInPrevMonth -
          amountOfDaysBeforeFirstDayOfCurrentlyDisplayedMonth +
          1 +
          i,
        monthNumber: month - 1,
        year: year,
        weekdayName: dayNames[weekdayIndexofFirstday - i - 1],
        monthQueue: 'prev',
        isCurrentDay: false,
      });
    }
    //Loop to create day objects for currently displayed month
    for (let i = 1; i <= daysInCurrentlyDisplayedMonth; i++) {
      //dayCounter used to determine weekday. The loop iterates 28-31 times depending on total days in month. dayCounter=(i + index of the first day of the month -1[cause i started the loop at 1]) % 7[meaning i-days from the first weekday index(1-7), the remainder accounts for i-day weekday index, and in case remainder is 0 , that means its sunday therefore the fallback to hard coded 7]
      let dayCounter = (i + weekdayIndexofFirstday - 1) % 7 || 7;
      let weekdayName = dayNames[dayCounter];

      list.push({
        dayNumber: i,
        monthNumber: month,
        year: year,
        weekdayName,
        monthQueue: 'current-month',
        isCurrentDay:
          i === currentDate.day &&
          month === currentDate.month &&
          year === currentDate.year,
        bookingInformation: bookingFinder(weekdayName, i),
      });
    }
    for (let i = 1; i <= amountOfDaysToAddForNextMonth; i++) {
      list.push({
        dayNumber: i,
        monthNumber: month + 1,
        year: year,
        weekdayName: dayNames[weekdayIndexofLastday + i],
        monthQueue: 'next',
        isCurrentDay: false,
      });
    }
    updateList(list);
  }, [data, month, year, context.state]);
  return (
    <>
      {dayObjectsList.map((el, i) => (
        <Day
          key={i + 20}
          day={el.dayNumber}
          monthQueue={el.monthQueue}
          isCurrentDay={el.isCurrentDay}
          weekdayName={el.weekdayName}
          onClickAction={onDayClick}
          bookingInformation={el.bookingInformation}></Day>
      ))}
    </>
  );
};
export default DaysGrid;
