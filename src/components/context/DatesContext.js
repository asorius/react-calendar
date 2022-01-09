import { createContext, useReducer } from 'react';
import { mockupData } from '../utils';
const DatesContext = createContext();

const contextIntialState = {
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
  timeAvailability: [],
};
const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'increment': {
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
    case 'decrement': {
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
    case 'select': {
      let informationAboutThatDay;
      let result = mockupData.find(
        (el) =>
          el.day === action.payload.day &&
          el.month === action.payload.month &&
          el.year === action.payload.year
      );
      informationAboutThatDay = result?.timeAvailability ?? false;
      console.log(action.payload.month);
      return {
        ...state,
        currentDisplayDate: {
          ...state.currentDisplayDate,
          day: action.payload.day,
          month: action.payload.month,
          year: action.payload.year,
        },
        timeAvailability: informationAboutThatDay,
      };
    }
    case 'create-booking': {
      return { ...state };
    }
    default: {
      console.log('From default reducer case');
      return state;
    }
  }
};
const ContextProviderComponentWithReducerAsAState = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, contextIntialState);
  const contextValue = { state, dispatch };
  return (
    <DatesContext.Provider value={contextValue}>
      {children}
    </DatesContext.Provider>
  );
};
export { ContextProviderComponentWithReducerAsAState, DatesContext };
