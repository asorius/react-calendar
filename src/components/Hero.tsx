import React from 'react';
import { gsap } from 'gsap';
import ActionButton from './utils/ActionButton';

export default function Hero() {
  const svg = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    const toothTL = gsap.timeline({});
    const tl2 = gsap.timeline({ duration: 1.4 });
    const q = gsap.utils.selector(svg.current);
    toothTL.from('.tooth', {
      opacity: 0,
      left: '-100%',
      top: '50%',
      duration: 2.5,
      rotate: -15,
      scale: 10,
    });
    toothTL.to('.tooth', {
      rotate: -10,
    });
    toothTL.to('.tooth', {
      rotate: 15,
    });
    tl2.from('.header', {
      opacity: 0,
      scale: 0,
      x: 100,
    });
    tl2.from('.sub-header', {
      opacity: 0,
      scale: 0,
      x: 100,
      delay: 1,
    });

    gsap.from(q('.sparkle'), {
      opacity: 0,
      stagger: 0.5,
      duration: 0.5,
      yoyo: true,
      width: 0,
      height: 0,
      repeat: -1,
    });
  }, []);
  const emergencyPhone = '070 123456';
  const afterElementStyling =
    'after:content-["otherwise.."] after:absolute after:-bottom-[75%] after:left-0 after:w-full after:text-center after:italic after:text-neutral-400 after:text-lg';
  return (
    <div className='container mx-auto h-full flex flex-col overflow-hidden grow'>
      <div className=' relative grid place-content-center flex-grow w-full text-center'>
        <h1 className=' header text-6xl mb-4 p-2 font-bold text-black'>
          Dentistry
        </h1>
        <h2
          className={`sub-header text-xl my-8 pt-4 relative w-4/5 mx-auto ${afterElementStyling}`}>
          <span className='text-danger font-bold block w-full pb-4'>
            Emergency?
          </span>{' '}
          Call us now!{' '}
          <button className='italic font-bold text-2xl px-2 underline decoration-danger underline-offset-8 block w-full'>
            <a href={`tel:${emergencyPhone}`}>{emergencyPhone}</a>
          </button>
        </h2>
      </div>
      <svg
        version='1.1'
        id='Capa_1'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        ref={svg}
        className='tooth absolute scale-[0.5] -top-[8%] left-2 w-[60vw] h-[60vh]'
        viewBox='0 0 56.598 56.598'>
        <path
          d='M53.065,10.657c-0.819-3.095-3.213-6.049-6.743-8.317c-4.35-2.797-10.498-3.108-16.049-0.813l-0.177,0.076
		c-0.098,0.042-0.193,0.085-0.294,0.12c-0.465,0.161-0.822,0.3-1.112,0.412c-0.924,0.359-0.923,0.358-2.442-0.089
		c-4.334-1.277-9.852-2.553-14.086-1.053c-5.73,2.031-10.809,8.752-9.238,19.19c0.186,1.235,0.367,2.481,0.549,3.732
		c1.312,9.016,2.668,18.339,6.155,26.757l0.119,0.288c0.866,2.108,2.315,5.638,4.837,5.638h0.203l0.187-0.079
		c2.313-0.979,3.18-3.202,3.812-4.824c0.427-1.095,0.807-2.211,1.174-3.289c0.483-1.418,0.954-2.794,1.516-4.114
		c1.27,2.585,3.865,6.8,7.292,6.8c0.402,0,0.816-0.058,1.24-0.184c2.253-0.668,3.383-2.995,4.209-4.694l0.067-0.139
		c0.174-0.357,0.395-0.771,0.633-1.22c0.238-0.447,0.498-0.944,0.754-1.455c0.25,0.807,0.468,1.636,0.683,2.458
		c0.239,0.913,0.485,1.857,0.771,2.739c1.21,3.729,2.782,7.574,5.267,7.829c1.309,0.136,2.516-0.751,3.589-2.631
		c1.958-3.431,2.798-7.255,3.61-10.953l0.288-1.3c0.32-1.43,0.676-2.904,1.039-4.412C52.961,28.64,55.277,19.018,53.065,10.657z
		 M33.151,43.916c-0.251,0.472-0.482,0.908-0.666,1.284l-0.068,0.14c-0.7,1.44-1.571,3.233-2.978,3.65
		c-3.324,1-6.392-6.003-6.73-6.804l-0.088-0.211c0.107-0.19,0.209-0.363,0.311-0.531c0.133-0.215,0.266-0.431,0.41-0.642
		c1.197-1.75,4.428-5.561,8.555-3.101c0.321,0.191,0.612,0.41,0.885,0.644c0.099,0.085,0.19,0.184,0.285,0.277
		c0.158,0.153,0.314,0.309,0.456,0.476c0.131,0.155,0.255,0.323,0.378,0.494c0.081,0.112,0.162,0.223,0.238,0.339
		c0.159,0.248,0.313,0.512,0.459,0.794c0.016,0.031,0.033,0.061,0.049,0.092C34.256,41.84,33.673,42.936,33.151,43.916z
		 M48.973,36.662c-0.366,1.519-0.723,3.004-1.045,4.443l-0.29,1.309c-0.781,3.552-1.587,7.224-3.395,10.391
		c-0.608,1.066-1.226,1.654-1.647,1.633c-0.458-0.048-1.724-0.771-3.569-6.457c-0.268-0.826-0.497-1.701-0.738-2.628
		c-0.789-3.022-1.674-6.398-4.246-8.567c-0.008-0.007-0.016-0.012-0.024-0.019c-0.337-0.282-0.7-0.546-1.098-0.783
		c-3.817-2.271-8.12-0.857-11.23,3.69c-1.733,2.535-2.694,5.357-3.624,8.087c-0.361,1.059-0.733,2.153-1.145,3.208
		c-0.64,1.642-1.239,2.961-2.511,3.608c-1.135-0.283-2.345-3.231-2.815-4.376l-0.121-0.294c-3.391-8.188-4.729-17.385-6.023-26.279
		c-0.183-1.255-0.364-2.503-0.551-3.741c-1.009-6.71,1.051-14.57,7.929-17.009c1.12-0.396,2.388-0.557,3.716-0.557
		c3.058,0,6.428,0.849,9.025,1.61c6.423,3.65,6.423,5.228,6.398,11.755l-0.003,1.318c0,0.553,0.448,1,1,1s1-0.447,1-1l0.003-1.312
		c0.022-5.721,0.014-8.415-4.557-11.694c0.001,0,0.001,0,0.002-0.001c0.273-0.105,0.608-0.235,1.041-0.387
		c0.147-0.05,0.292-0.112,0.439-0.176l0.147-0.063c4.954-2.048,10.395-1.799,14.2,0.648c3.108,1.998,5.2,4.536,5.891,7.147
		C53.214,19.041,50.961,28.403,48.973,36.662z'
        />
        <path
          className='fill-spark sparkle'
          d='M14.5,7.59c0.521-0.185,0.793-0.756,0.608-1.276c-0.185-0.521-0.757-0.794-1.276-0.608
		c-5.238,1.856-6.764,8.42-5.964,13.733c0.075,0.496,0.501,0.852,0.987,0.852c0.05,0,0.1-0.004,0.15-0.011
		c0.546-0.083,0.922-0.592,0.84-1.138C9.164,14.614,10.33,9.068,14.5,7.59z'
        />
        <path
          className='fill-spark sparkle'
          d='M47.965,11.004h-1.586L43.965,8.59V7.004c0-0.553-0.448-1-1-1s-1,0.447-1,1V8.59l-2.414,2.414h-1.586c-0.552,0-1,0.447-1,1
		s0.448,1,1,1h1.586l2.414,2.414v1.586c0,0.553,0.448,1,1,1s1-0.447,1-1v-1.586l2.414-2.414h1.586c0.552,0,1-0.447,1-1
		S48.517,11.004,47.965,11.004z M42.965,13.59l-1.586-1.586l1.586-1.586l1.586,1.586L42.965,13.59z'
        />
        <path
          className='fill-spark sparkle'
          d='M20.965,29.004h-1.586l-2.414-2.414v-1.586c0-0.553-0.448-1-1-1s-1,0.447-1,1v1.586l-2.414,2.414h-1.586
		c-0.552,0-1,0.447-1,1s0.448,1,1,1h1.586l2.414,2.414v1.586c0,0.553,0.448,1,1,1s1-0.447,1-1v-1.586l2.414-2.414h1.586
		c0.552,0,1-0.447,1-1S21.517,29.004,[60vw].965,29.004z M15.965,31.59l-1.586-1.586l1.586-1.586l1.586,1.586L15.965,31.59z'
        />
      </svg>
      <ActionButton />
    </div>
  );
}