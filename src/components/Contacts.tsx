import React from 'react';
import { InputElement } from './calendar';
import { FormButton } from './calendar/utils';
import './styling/contacts.css';
import { headerClasses } from './utils';
const feedbackDetails = 'Let us know how we did!';
export default function About() {
  const [formValues, setFormValues] = React.useState({
    feedbackName: '',
    feedbackMessage: '',
    feedbackEmail: '',
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.currentTarget.name]: e.currentTarget.value,
    }));
  };
  return (
    <section id='Contacts' className='body-font relative mt-20 overflow-hidden'>
      <h1 className={headerClasses}>Contact us</h1>
      <div className='container mx-auto'>
        <div className=' px-5 py-24  flex sm:flex-nowrap flex-wrap'>
          <div className='lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
            <iframe
              width='100%'
              height='100%'
              className='absolute inset-0'
              frameBorder='0'
              title='map'
              scrolling='no'
              src='https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed'
              style={{
                filter: 'grayscale(1)',
                opacity: 0.4,
              }}></iframe>
            <div className='bg-white relative flex flex-wrap py-6 rounded shadow-md'>
              <div className='lg:w-1/2 px-6'>
                <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                  ADDRESS
                </h2>
                <p className='mt-1'>
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                  EMAIL
                </h2>
                <a
                  href='mailto:google@google.com'
                  className='text-main leading-relaxed'>
                  example@email.com
                </a>
                <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-4'>
                  PHONE
                </h2>
                <p className='leading-relaxed'>123-456-7890</p>
              </div>
            </div>
          </div>
          <div className='lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
            <h2 className='text-gray-900 text-lg mb-1 font-medium title-font underline decoration-accent underline-offset-4'>
              Feedback
            </h2>
            <p className='leading-relaxed mb-5 text-gray-600 lg:py-4 lg:px-6'>
              {feedbackDetails}
            </p>
            <div className='relative '>
              <InputElement
                labelText='Name'
                changeHandler={onChange}
                name='feedbackName'
                value={formValues.feedbackName}
              />
            </div>
            <div className='relative mb-4'>
              <InputElement
                type='textarea'
                labelText='Message'
                changeHandler={onChange}
                name='feedbackMessage'
                value={formValues.feedbackMessage}></InputElement>
            </div>
            <FormButton>Submit</FormButton>
            <p className='text-xs text-gray-500 mt-3 lg:px-6'>
              By submiting this form you declare that you agree with terms and
              conditions. All information is stored in according to EU and UK
              internal law.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
