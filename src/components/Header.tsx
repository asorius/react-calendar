// import './styling/main-header.css';

import Hero from './Hero';
import Navigation from './Navigation';

// import './styling/action-button.css';
const MainHeader = () => {
  return (
    <header id='header' className='text-gray-600 min-h-screen flex flex-col'>
      <Navigation />
      <Hero />
    </header>
  );
};
export default MainHeader;
