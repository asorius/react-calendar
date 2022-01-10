import { createContext, useReducer } from 'react';
import { act } from 'react-dom/test-utils';
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  SELECT: 'select',
};
type SELECTPAYLOAD = {
  day: number;
  month: number;
  year: number;
};
type ACTIONTYPE =
  | { type: 'increment'; payload: undefined }
  | { type: 'decrement'; payload: undefined }
  | { type: 'select'; payload: SELECTPAYLOAD }
  | { type: 'create-booking'; payload: undefined };
const initialState = {
  currentDate: {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  },
  currentDisplayDate: {
    day: 1,
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  },
};
const CalendarContext: any = createContext('');

const reducerFunction = (state: typeof initialState, action: ACTIONTYPE) => {
  const { type } = action;
  switch (type) {
    case ACTIONS.INCREMENT: {
      if (state.currentDisplayDate.month >= 12) {
        return {
          ...state,
          currentDisplayDate: {
            ...state.currentDisplayDate,
            month: 1,
            year: state.currentDisplayDate.year + 1,
          },
        };
      } else {
        return {
          ...state,
          currentDisplayDate: {
            ...state.currentDisplayDate,
            month: state.currentDisplayDate.month + 1,
          },
        };
      }
    }
    case ACTIONS.DECREMENT: {
      if (state.currentDisplayDate.month <= 1) {
        return {
          ...state,
          currentDisplayDate: {
            ...state.currentDisplayDate,
            month: 12,
            year: state.currentDisplayDate.year - 1,
          },
        };
      } else {
        return {
          ...state,
          currentDisplayDate: {
            ...state.currentDisplayDate,
            month: state.currentDisplayDate.month - 1,
          },
        };
      }
    }
    case ACTIONS.SELECT: {
      // let informationAboutThatDay;
      // const dataFromProps = [];
      // let result = dataFromProps.find(
      //   (el) =>
      //     el.day === action.payload.day &&
      //     el.month === action.payload.month &&
      //     el.year === action.payload.year
      // );
      // informationAboutThatDay = result?.timeAvailability ?? false;
      console.log(action.payload?.month);
      return {
        ...state,
        // currentDisplayDate: {
        //   ...state.currentDisplayDate,
        //   day: action.payload.day,
        //   month: action.payload.month,
        //   year: action.payload.year,
        // },
        // timeAvailability: informationAboutThatDay,
      };
    }
    default: {
      console.log('From default reducer case');
      return state;
    }
  }
};
const CalendarContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const contextValue = { state, dispatch };
  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
export { CalendarContextProvider, CalendarContext };
