import './styling/input-element.css';

export default function InputElement({
  changeHandler,
  labelText,
  name,
  validationMessage,
  value = '',
  type = 'text',
  required = false,
}) {
  return (
    <div className='input-element'>
      <label className='input-label' htmlFor={name}>
        {labelText}
      </label>
      <input
        type={type}
        onChange={changeHandler}
        name={name}
        value={value}
        label={labelText}
        required={required}
        aria-required={required}></input>
      <p className='validation-element'>
        {value.length <= 2 && value.length !== 0
          ? 'Entered text is too short'
          : ''}
      </p>
    </div>
  );
}
