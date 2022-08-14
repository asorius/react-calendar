import React from 'react';

export default function ToTop({ visible }: { visible: boolean }) {
  const svgElement = React.useRef<SVGSVGElement>(null);

  return (
    <a
      className={` grid content-center drop-shadow-lg border border-black/10 z-10 duration-500 fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full h-10 p-1 bg-gray-light/50 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
      }`}
      href='#home'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        ref={svgElement}
        className={` h-6 rotate-90 rounded-full  fill-transparent stroke-gray-800 `}
        viewBox='0 0 256 256'>
        <polyline
          points='80 136 32 88 80 40'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='16'></polyline>
        <path
          d='M80,200h88a56,56,0,0,0,56-56h0a56,56,0,0,0-56-56H32'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='16'></path>
      </svg>
    </a>
  );
}
