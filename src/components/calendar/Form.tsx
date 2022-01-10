import { useContext, useState, useEffect } from 'react';
import { DatesContext } from '../context/DatesContext';
// import './styling/creation-form.css';
import { InputElement, ErrorElement } from '.';
// import './styling/select-element.css';
export default function CreationForm({ handleAction, open }) {
  const context = useContext(DatesContext);
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
  });
  const [errorMessage, setError] = useState('');
  // const dispatch = context.dispatch;
  const date = context.state.currentDisplayDate;
  const availableTimes = context.state.timeAvailability;
  useEffect(() => {
    setValues((v) => ({ ...v, time: availableTimes[0] }));
  }, [availableTimes]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  useEffect(() => {
    const timer = setTimeout(() => setError(''), 4000);
    return () => clearTimeout(timer);
  }, [errorMessage]);
  const submitHandler = (e) => {
    e.preventDefault();
    values.phone.length < 8 &&
      values.email.length < 8 &&
      setError('Please enter either your phone number or email address');
  };
  return (
    <div className={`creation-form-container ${open && 'form-active'}`}>
      <h1>
        {' '}
        Availability for {date.day}/{date.month}/{date.year}
      </h1>
      {availableTimes && (
        <div className='time-selection'>
          <label htmlFor='time-select'>Choose time : </label>
          <select name='time' id='time-select' onChange={handleInputChange}>
            {availableTimes.map((time, i) => (
              <option key={i} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      )}
      <form className='form' onSubmit={submitHandler}>
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
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
