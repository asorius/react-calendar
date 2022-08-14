import React from 'react';
import { gsap } from 'gsap';
import Navbar from './Navbar';

export default function Navigation() {
  const logo = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    gsap.from(logo.current, {
      y: -5,
      opacity: 0,
      duration: 0.8,
    });
  }, []);

  return (
    <div className='w-full p-2 grid place-items-center shadow grow-0 '>
      <div ref={logo} className='logo'>
        <a
          href='#header'
          className='flex title-font font-medium items-center text-gray-900 mb-0 md:mb-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full delay-100'
            viewBox='0 0 24 24'>
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <span className='ml-3 text-xl'>Dentistry</span>
        </a>
      </div>
      <Navbar />
    </div>
  );
}
