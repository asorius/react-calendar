import './App.css';
import {
  ContextProviderComponentWithReducerAsAState,
  DatesContext,
} from './components/context/DatesContext';
import Calendar from './components/calendar/Calendar';
import './components/styling/css-vars.css';
import { useContext, useEffect } from 'react';
function App() {
  const globalContext = useContext(DatesContext);
  useEffect(() => {
    const { state, dispatch } = globalContext;
    dispatch({ action: 'call-api' });
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
