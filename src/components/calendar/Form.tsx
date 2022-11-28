import React, { useContext, useState, useEffect, useRef } from 'react';
import { CalendarContext } from './context';
import { InputElement, ErrorElement } from '.';

import { FormButton } from './utils';
// import { useObserver } from '../utils/index';
export default function Form({
  handleAction,
  open,
}: {
  handleAction: (arg: boolean) => void;
  open: boolean;
}) {
  const context = useContext(CalendarContext);
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    time: '',
  });
  const [errorMessage, setError] = useState('');
  const date = context.state.currentDisplayDate;
  const { times } = context.state.currentDisplayDate;
  useEffect(() => {
    times && setValues((v) => ({ ...v, time: times[0] }));
  }, [times]);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setError(''), 4000);
    return () => clearTimeout(timer);
  }, [errorMessage]);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const confirmmation = window.confirm(
      `Book appointment on ${date.day}/${date.month}/${date.year} at ${values.time} ?`
    );
    if (confirmmation) {
      console.log(
        `Booked appointment on ${date} at ${values.time} for ${values.firstname} ${values.lastname}`
      );
    }
    values.phone.length < 8 &&
      values.email.length < 8 &&
      setError('Please enter either your phone number or email address');
  };
  return (
    <div
      className={`creation-form-container duration-700 absolute lg:block top-0 left-0  bg-white rounded-md border border-gray-50  lg:w-full  ${
        open ? 'translate-x-0 opacity-100 z-20' : 'translate-x-full opacity-100'
      } `}>
      <h2 className='text-center py-4 italic font-semibold'>
        {' '}
        Availability for {date.day}/{date.month}/{date.year}
      </h2>
      <form
        className='form-element grid grid-flow-row '
        onSubmit={submitHandler}>
        {times && (
          <div className='time-selection text-right py-4'>
            <label
              htmlFor='time-select'
              className='text-sm  underline decoration-accent/50 underline-offset-8'>
              Available times :{' '}
            </label>
            <select
              name='time'
              id='time-select'
              className='rounded-md mx-2 px-1 bg-gray-light border border-gray-darken/75'
              onChange={handleInputChange}
              required>
              {times.map((time, i) => (
                <option key={i} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        )}
        <InputElement
          name='firstname'
          labelText='First Name'
          value={values.firstname}
          changeHandler={handleInputChange}
          required={true}></InputElement>
        <InputElement
          name='lastname'
          labelText='Last Name'
          value={values.lastname}
          required={true}
          changeHandler={handleInputChange}></InputElement>
        <InputElement
          name='email'
          labelText='Email *'
          value={values.email}
          type='email'
          changeHandler={handleInputChange}></InputElement>
        <InputElement
          name='phone'
          labelText='Phone number *'
          value={values.phone}
          type='tel'
          changeHandler={handleInputChange}></InputElement>
        <p className='italic text-gray-darken text-xs text-center block py-4 w-5/6 mx-auto'>
          * We will send confirmation to either your phone or email
        </p>
        {errorMessage && <ErrorElement message={errorMessage} />}

        <div className='form-buttons grid grid-flow-col gap-2 justify-center py-6 px-2 w-full'>
          <FormButton
            type='submit'
            disabled={
              values.firstname.length <= 2 || values.lastname.length <= 2
            }>
            Submit
          </FormButton>
          <FormButton
            cancel={true}
            autoFocus={open}
            onClick={(e: React.SyntheticEvent) => {
              e.preventDefault();
              handleAction(false);
            }}>
            Cancel
          </FormButton>
        </div>
      </form>
    </div>
  );
}
