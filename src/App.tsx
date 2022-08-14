import './index.css';
import { Calendar } from './components/calendar';
// import './components/styling/css-vars.css';
// import './components/styling/animations.css';
import { useEffect, useState } from 'react';
import { generateData } from './components/utils';
import Header from './components/Header';
import Bookings from './components/Bookings';
import Contacts from './components/Contacts';
import About from './components/About';
import ToTop from './components/ToTop';
const mockupData = generateData();
const debounce = (func: Function, timeout = 50) => {
  let timer: any;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(args), timeout);
  };
};
function App() {
  const [data, setData] = useState<typeof mockupData>([]);
  const [toTopVisible, toggleToTopButton] = useState(false);
  useEffect(() => {
    setData(mockupData);

    const scrollWatcher = () => {
      if (window.scrollY > 400) {
        toggleToTopButton(true);
      } else {
        toggleToTopButton(false);
      }
    };
    window.addEventListener('scroll', debounce(scrollWatcher));
    return () => window.removeEventListener('scroll', debounce(scrollWatcher));
  }, []);
  return (
    <div className='App '>
      <ToTop visible={toTopVisible} />
      <Header />
      <About />
      <Bookings>
        <Calendar data={data}></Calendar>
      </Bookings>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
