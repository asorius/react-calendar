import './styling/contacts.css';
export default function About() {
  return (
    <article id='Contacts'>
      <h1>Reach us</h1>
      <div className='contacts-container'>
        <div className='phone'>
          <h2 className='phone-label'>Phone us</h2>
          <div className='phone-number'>
            <a href='tel:+447123 123 458'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.2'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                />
              </svg>
              +447123 123 458
            </a>
          </div>
        </div>
        <div className='map-container'>
          <h2 className='visit-text'>Visit us </h2>
          <div className='map'>
            <iframe
              title='Location on map'
              width='100%'
              height='500'
              id='gmap_canvas'
              src='https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed'
              frameBorder='0'
              scrolling='no'
              marginHeight={0}
              marginWidth={0}></iframe>
          </div>
        </div>
      </div>
    </article>
  );
}
