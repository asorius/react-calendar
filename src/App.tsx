import './App.css';
import { Calendar } from './components/calendar';
import './components/styling/css-vars.css';
import './components/styling/animations.css';
import { useEffect, useState } from 'react';
import generateData from './components/utils';
import Header from './components/Header';
import Bookings from './components/Bookings';
const mockupData = generateData();
function App() {
  const [data, setData] = useState<typeof mockupData>([]);
  useEffect(() => {
    setData(mockupData);
  }, []);
  return (
    <div className='App'>
      <div>
        <Header />
        <Bookings>
          <Calendar data={data}></Calendar>
        </Bookings>
      </div>
    </div>
  );
}

export default App;
