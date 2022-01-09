import { useContext, useState, useEffect, useCallback } from 'react';
import { DatesContext } from './context/DatesContext';
import { mockupData, dayNames } from './utils';
import Day from './Day';

const Days = ({ onDayClick }) => {
  const [dayObjectsList, updateList] = useState([]);
  const context = useContext(DatesContext);
  const { year, month } = context.state.currentDisplayDate;
  useEffect(() => {
    const { currentDate } = context.state;
    let list = [];
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
    const bookingFinder = (weekdayName, dayNumber) => {
      if (weekdayName !== 'sat' || weekdayName !== 'sun') {
        let result = mockupData.find(
          (el) => el.day === dayNumber && el.month === month && el.year === year
        );
        return result?.bookRate;
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
        currentDay:
          i === currentDate.day &&
          month === currentDate.month &&
          year === currentDate.year &&
          'current-day',
        bookingInfo: bookingFinder(weekdayName, i),
      });
    }
    for (let i = 1; i <= amountOfDaysToAddForNextMonth; i++) {
      list.push({
        dayNumber: i,
        monthNumber: month + 1,
        year: year,
        weekdayName: dayNames[weekdayIndexofLastday + i],
        monthQueue: 'next',
      });
    }
    updateList(list);
  }, [year, month, context.state]);
  return (
    <>
      {dayObjectsList.map((el, i) => (
        <Day
          key={i + 20}
          day={el.dayNumber}
          monthQueue={el.monthQueue}
          currentDay={el.currentDay}
          weekdayName={el.weekdayName}
          onClickAction={onDayClick}
          bookingInfo={el.bookingInfo}></Day>
      ))}
    </>
  );
};
export default Days;
