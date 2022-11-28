import React from 'react';
import { headerClasses } from './utils';
const bookingDetails =
  'We fully support online booking. Select your date, choose time, fill the form and submit it. We will confirm your booking by your selected method as soon as possible.';
export default function Bookings({ children }: { children: React.ReactNode }) {
  return (
    <section
      id='Bookings'
      className=' px-8 py-24 lg:py-0 mx-auto bg-bookings-background bg-no-repeat bg-cover bg-center bg-fixed h-full w-full min-h-screen lg:min-h-min'>
      <div className='container mx-auto lg:p-14 lg:px-14 min-h-[75vh] lg:grid lg:grid-cols-2 bg-white/95  '>
        <div className='slogan lg:grid lg:justify-center lg:content-center grid-cols-2 gap-4 my-6 '>
          <h1 className={headerClasses + ' lg:hidden'}>Book Yours</h1>
          <h1
            className={
              headerClasses +
              ' hidden lg:block lg:rotate-180 lg:[writing-mode:vertical-lr] lg:text-7xl'
            }>
            Book
          </h1>
          <h1
            className={
              headerClasses +
              ' hidden lg:block lg:[writing-mode:vertical-lr] lg:text-7xl lg:text-accent'
            }>
            Yours
          </h1>
          <div className='text-center lg:text-right py-6 lg:p-10 px-2 relative rounded-lg bg-white shadow-lg shadow-gray-light mt-10 lg:col-span-2 lg:max-w-xl'>
            {bookingDetails}
            {/* <svg
              width='130'
              height='130'
              viewBox='0 0 130 130'
              className='arrow absolute top-36 lg:-top-60 left-[50%] lg:left-[75%] rotate-90 lg:rotate-[5deg] h-24 lg:h-44  fill-accent z-30'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M24.0948 80.449C24.4487 79.3153 24.7479 78.3369 24.9033 77.819C25.8413 74.6653 29.1217 67.1149 29.6137 61.0952C29.9907 56.5028 28.7505 52.7851 24.5177 51.7434C20.6706 50.7967 16.786 53.1361 13.3445 57.3516C5.93792 66.4243 0.321149 84.0804 0.00175015 89.8526C-0.0327794 90.4827 0.447754 91.0208 1.07792 91.0553C1.70521 91.0899 2.24327 90.6093 2.2778 89.9792C2.58569 84.44 8.00111 67.5033 15.1113 58.7932C17.891 55.3892 20.8662 53.1937 23.9739 53.9591C27.0412 54.713 27.6139 57.5789 27.3406 60.9081C26.8629 66.7666 23.6315 74.0984 22.7164 77.1687C22.1438 79.0937 19.7527 86.3737 19.698 87.047C19.6289 87.8901 20.2303 88.1721 20.4346 88.2498C20.5929 88.3102 21.4014 88.5606 21.905 87.6542C29.0929 74.7343 49.0654 59.8838 70.3414 53.9648C91.4303 48.0977 113.866 51.0471 126.262 73.8165C126.564 74.3689 127.258 74.5732 127.81 74.2739C128.363 73.9718 128.567 73.2784 128.265 72.7259C115.276 48.8688 91.8245 45.6201 69.7313 51.7664C51.1112 56.9458 33.5041 68.8298 24.0948 80.449Z'
                fill='inherit'
              />
              <path
                d='M126.459 72.1762C123.97 71.1575 121.524 70.0641 118.955 69.2383C112.109 67.037 104.53 66.1996 97.4257 67.4657C96.8042 67.5779 96.3926 68.1707 96.502 68.7894C96.6142 69.4109 97.207 69.8224 97.8256 69.713C104.568 68.5074 111.761 69.3217 118.256 71.4107C121.196 72.3574 123.976 73.6609 126.845 74.7917C126.989 74.8464 128.22 75.3759 128.511 75.4162C129.187 75.514 129.53 75.1227 129.665 74.9213C129.78 74.7544 129.878 74.527 129.886 74.222C129.892 73.9717 129.791 73.494 129.521 72.884C128.661 70.9273 125.999 66.6514 125.636 65.9033C121.478 57.3284 119.05 48.6529 116.264 39.5831C116.077 38.9817 115.439 38.6421 114.837 38.8263C114.236 39.0105 113.899 39.6493 114.083 40.2507C116.903 49.4356 119.375 58.2176 123.585 66.896C123.832 67.4111 125.36 70.1878 126.459 72.1762Z'
                fill='inherit'
              />
            </svg> */}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
