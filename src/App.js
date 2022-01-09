import './App.css';
import Header from './components/Header';
import { ContextProviderComponentWithReducerAsAState } from './components/context/DatesContext';
import Calendar from './components/Calendar';
import './components/styling/css-vars.css';
function App() {
  return (
    <div className='App'>
      <ContextProviderComponentWithReducerAsAState>
        <Header />
        <Calendar></Calendar>
      </ContextProviderComponentWithReducerAsAState>
    </div>
  );
}

export default App;
