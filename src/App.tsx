import './App.css';
import {
  ContextProviderComponentWithReducerAsAState,
  DatesContext,
  ACTIONS,
} from './components/context/DatesContext';
import Calendar from './components/calendar/Calendar';
import './components/styling/css-vars.css';
import { useContext, useEffect } from 'react';
function App() {
  const globalContext = useContext(DatesContext);
  useEffect(() => {
    const { state, dispatch } = globalContext;
    dispatch({ type: ACTIONS.CALL_API });
    console.log(state);
  }, [globalContext]);
  return (
    <div className='App'>
      <ContextProviderComponentWithReducerAsAState>
        <Calendar></Calendar>
      </ContextProviderComponentWithReducerAsAState>
    </div>
  );
}

export default App;
