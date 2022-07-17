import React, { createContext, useReducer } from 'react';
enum ACTIONS {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
  SELECT = 'select',
}
type FULLDATETYPE = {
  day: number;
  month: number;
  year: number;
};
type TIMESTYPE = { times?: string[] | [] };
type SELECTPAYLOADTYPE = FULLDATETYPE & TIMESTYPE;
type ACTIONTYPE =
  | { type: ACTIONS.INCREMENT }
  | { type: ACTIONS.DECREMENT }
  | { type: ACTIONS.SELECT; payload: SELECTPAYLOADTYPE };
// | { type: 'create-booking'; payload: undefined };
type INITIALSTATETYPE = {
  currentDate: FULLDATETYPE;
  currentDisplayDate: FULLDATETYPE & TIMESTYPE;
};
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
const CalendarContext = createContext<{
  state: INITIALSTATETYPE;
  dispatch: React.Dispatch<ACTIONTYPE>;
}>({
  state: initialState,
  dispatch: () => null,
});

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
      return {
        ...state,
        currentDisplayDate: {
          ...state.currentDisplayDate,
          day: action.payload.day,
          month: action.payload.month,
          year: action.payload.year,
          times: action.payload.times,
        },
      };
    }
    default: {
      return state;
    }
  }
};
const CalendarContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <CalendarContext.Provider value={{ state, dispatch }}>
      {children}
    </CalendarContext.Provider>
  );
};
export { CalendarContextProvider, CalendarContext, ACTIONS };
