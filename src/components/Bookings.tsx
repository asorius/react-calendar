import React from 'react';
import './styling/bookings.css';
export default function Bookings({ children }: { children: React.ReactNode }) {
  return (
    <article>
      <div className='slogan'>
        <h2 className='rotate'>Book</h2>
        <h2>Yours</h2>
      </div>
      {children}
    </article>
  );
}
