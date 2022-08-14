import React from 'react';
import { gsapFade } from './utils';
const Li = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li className='mb-2 w-1/2 mx-auto h-12 grid content-center'>
    <a
      href={href}
      className='w-full h-full block text-md text-center hover:cursor-pointer hover:text-accent hover:underline hover:decoration-accent hover:underline-offset-8 transition duration-300'>
      {children}
    </a>
  </li>
);
export default function Navbar() {
  const navbarContainer = React.useRef<HTMLDivElement>(null);
  const [showMenu, toggleNav] = React.useState(false);
  React.useEffect(() => {
    gsapFade(navbarContainer.current);
  }, []);

  return (
    <div className='navbar' ref={navbarContainer}>
      <div className='md:hidden flex items-center absolute right-4 top-4'>
        <button
          className='outline-none '
          onClick={() => toggleNav((prev) => !prev)}>
          {showMenu ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 50 50'
              className='w-6 h-6 text-gray-500 hover:fill-accent '>
              <path d='M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z'></path>
            </svg>
          ) : (
            <svg
              className=' w-6 h-6 text-gray-500 hover:text-accent '
              x-show='!showMenu'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`bg-gray-light absolute divide-y divide-dashed divide-gray-darken/25 py-4 rounded-b-lg shadow-md duration-500 ${
          showMenu
            ? ' z-20 transform-x-0 opacity-100'
            : '-transform-x-full opacity-0 z-0 '
        } top-full -right-0 w-[60vw] h-[75vh] grid content-center`}
        onClick={() => {
          toggleNav((prev) => !prev);
        }}>
        <Li href='#Home'>Home</Li>
        <Li href='#About'>About</Li>
        <Li href='#Bookings'>Bookings</Li>
        <Li href='#Contacts'>Contacts</Li>
      </ul>
    </div>
  );
}
