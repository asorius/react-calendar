import './App.css';
import { ContextProviderComponentWithReducerAsAState } from './components/context/DatesContext';
import Calendar from './components/calendar/Calendar';
import './components/styling/css-vars.css';
function App() {
  return (
    <div className='App'>
      <ContextProviderComponentWithReducerAsAState>
        <Calendar></Calendar>
      </ContextProviderComponentWithReducerAsAState>
    </div>
  );
}

export default App;
