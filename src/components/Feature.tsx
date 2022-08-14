import React from 'react';
import { useObserver } from './utils';

const Feature = ({
  feature: { name, description },
}: {
  feature: { name: string; description: string };
}) => {
  const [containerRef, isVisible] = useObserver();

  return (
    <div
      ref={containerRef}
      className={`xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 duration-500 border-opacity-60 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
      <h2 className='text-lg sm:text-xl text-text-lighter font-medium title-font mb-2 underline underline-offset-4 decoration-main'>
        {name}
      </h2>
      <p className='leading-relaxed text-base mb-4 text-text-light'>
        {description}
      </p>
    </div>
  );
};
export default Feature;
