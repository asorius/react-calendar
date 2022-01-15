import './App.css';
import { Calendar } from './components/calendar';
import './components/styling/css-vars.css';
import { useEffect, useState } from 'react';
import mockupData from './components/utils';
function App() {
  const [data, setData] = useState<typeof mockupData>([]);
  useEffect(() => {
    setData(mockupData);
  }, []);
  return (
    <div className='App'>
      <Calendar data={data}></Calendar>
    </div>
  );
}

export default App;
