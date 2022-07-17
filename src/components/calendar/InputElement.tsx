import React from 'react';
import './styles/input-element.css';
type PROPTYPES = {
  changeHandler: (
    arg: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  labelText: string;
  name: string;
  validationMessage?: string;
  value: string;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
};
export default function InputElement({
  changeHandler,
  labelText,
  name,
  validationMessage,
  value = '',
  type = 'text',
  required = false,
}: PROPTYPES) {
  const [focused, setFocus] = React.useState(false);
  return (
    <div className={`input-element`}>
      <label
        className={`input-label ${focused || value ? 'active' : ''} `}
        htmlFor={name}>
        {labelText}
      </label>
      <input
        type={type}
        onChange={changeHandler}
        name={name}
        onFocus={() => setFocus(!focused)}
        onBlur={() => setFocus(!focused)}
        value={value}
        required={required}
        minLength={2}
        maxLength={type === 'email' ? 30 : 15}
        pattern={type === 'email' ? undefined : '[A-Za-z0-9]+'}
        aria-required={required}></input>
    </div>
  );
}
