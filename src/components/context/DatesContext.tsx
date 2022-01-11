import React, { createContext, useReducer } from 'react';
import { mockupData } from '../utils';
enum ACTIONS {
  CALL_API = 'call-api',
  GET_SINGLE_DAY = 'get-information-on-day',
  BOOK_NEW = 'book-new',
}
type FULLDATETYPE = {
  day: number;
  month: number;
  year: number;
};
type ACTIONTYPE =
  | { type: ACTIONS.CALL_API }
  | {
      type: ACTIONS.GET_SINGLE_DAY;
      payload: FULLDATETYPE;
    };
// { type: string; payload?: FULLDATETYPE };

type DAYOBJECT = FULLDATETYPE & {
  timeAvailability: string[];
  bookingRate: number;
};
type INITIALSTATETYPE = {
  all: DAYOBJECT[] | [];
  day: DAYOBJECT | {};
};
const initialState = {
  all: [],
  day: {},
};
const DatesContext = createContext<{
  state: INITIALSTATETYPE;
  dispatch: React.Dispatch<ACTIONTYPE>;
}>({
  state: initialState,
  dispatch: () => {},
});

const reducerFunction = (
  state: INITIALSTATETYPE,
  action: ACTIONTYPE
): INITIALSTATETYPE => {
  const { type } = action;
  switch (type) {
    case ACTIONS.CALL_API: {
      return {
        ...state,
        all: [...mockupData],
      };
    }
    case ACTIONS.GET_SINGLE_DAY: {
      const { payload } = action;
      let result = mockupData.find(
        (el: FULLDATETYPE) =>
          el.day === payload?.day &&
          el.month === payload?.month &&
          el.year === payload?.year
      );
      if (result) {
        return {
          ...state,
          day: result,
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
  return (
    <DatesContext.Provider value={{ state, dispatch }}>
      {children}
    </DatesContext.Provider>
  );
};
export { ContextProviderComponentWithReducerAsAState, DatesContext, ACTIONS };
