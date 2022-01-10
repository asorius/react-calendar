import { createContext, useReducer } from 'react';
import { mockupData } from '../utils';
const ACTIONS = {
  CALL_API: 'call-api',
  GET_SINGLE_DAY: 'get-information-on-day',
  BOOK_NEW: 'book-new',
};
type ACTIONTYPE =
  | { type: 'call-api'; payload: undefined }
  | { type: 'get-information-on-day'; payload: FULLDATE };
type FULLDATE = {
  day: number;
  month: number;
  year: number;
};
type INDIVIDUAL_DAY = FULLDATE & {
  timeAvailability: string[];
  bookingRate: number;
};

const initialState: {} = {
  data: [],
  informationOnSelectedDay: {},
};
const DatesContext = createContext(initialState);

const reducerFunction = (state: typeof initialState, action: ACTIONTYPE) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.CALL_API: {
      return {
        ...state,
        data: [...mockupData],
      };
    }
    case ACTIONS.GET_SINGLE_DAY: {
      let result = mockupData.find(
        (el: FULLDATE) =>
          el.day === payload?.day &&
          el.month === payload?.month &&
          el.year === payload?.year
      );
      if (result) {
        return {
          ...state,
          informationOnSelectedDay: result,
        };
      } else {
        return {
          ...state,
        };
      }
    }
    default: {
      console.log('From default reducer case');
      return state;
    }
  }
};
const ContextProviderComponentWithReducerAsAState: React.FC = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const contextValue = { state, dispatch };
  return (
    <DatesContext.Provider value={contextValue}>
      {children}
    </DatesContext.Provider>
  );
};
export { ContextProviderComponentWithReducerAsAState, DatesContext };
