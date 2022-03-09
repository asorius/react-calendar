import './App.css';
import { Calendar } from './components/calendar';
import './components/styling/css-vars.css';
import { useEffect, useState } from 'react';
import generateData from './components/utils';
const mockupData = generateData();
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
