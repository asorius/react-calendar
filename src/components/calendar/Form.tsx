import React, { useContext, useState, useEffect, useRef } from 'react';
import { CalendarContext } from './context';
import './styles/form-element.css';
import { InputElement, ErrorElement } from '.';
import './styles/select-element.css';
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
  const formElement = useRef<HTMLDivElement>(null);
  // const dispatch = context.dispatch;
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
  useEffect(
    () => formElement.current?.scrollIntoView({ behavior: 'smooth' }),
    []
  );
  useEffect(() => {
    const timer = setTimeout(() => setError(''), 4000);
    return () => clearTimeout(timer);
  }, [errorMessage]);
  const submitHandler = (e: React.SyntheticEvent) => {
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
      ref={formElement}
      className={`creation-form-container ${open && 'form-active'}`}>
      <h1>
        {' '}
        Availability for {date.day}/{date.month}/{date.year}
      </h1>
      <form className='form-element' onSubmit={submitHandler}>
        {times && (
          <div className='time-selection'>
            <label htmlFor='time-select'>Available times : </label>
            <select
              name='time'
              id='time-select'
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
        <p className='sub-text'>
          * We will send confirmation to either either your phone or email
        </p>
        {errorMessage && <ErrorElement message={errorMessage} />}

        <div className='form-buttons'>
          <button
            type='submit'
            className='form-button submit-button'
            disabled={
              values.firstname.length <= 2 || values.lastname.length <= 2
            }>
            Submit
          </button>
          <button
            className='button'
            type='button'
            onClick={(e) => {
              e.preventDefault();
              handleAction(false);
            }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
