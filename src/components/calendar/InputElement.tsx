import React from 'react';
// import './styles/input-element.css';
interface PROPTYPES {
  changeHandler: React.ChangeEventHandler;
  labelText: string;
  name: string;
  validationMessage?: string;
  value: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  required?: boolean;
}

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
  const inputRef = React.useRef<HTMLInputElement>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  return (
    <div className={`input-element relative flex flex-col text-md p-2 mt-2 `}>
      <label
        className={`input-label  absolute ${
          textareaRef.current ? 'top-[13%] ' : 'bottom-1/4 '
        } left-[5%] ease-in duration-150 py-0 px-4 bg-transparent leading-snug ${
          focused || value
            ? '-translate-y-[190%] text-[.7rem] text-gray-darken/50 z-1 pb-[.1rem]'
            : ' -translate-y-[25%] text-sm text-gray-darken -z-1 pb-0'
        }`}
        htmlFor={name}
        onClick={() =>
          textareaRef ? textareaRef.current?.focus() : inputRef.current?.focus()
        }>
        {labelText}
      </label>
      {type === 'textarea' ? (
        <textarea
          ref={textareaRef}
          className='bg-gray-lighter rounded-md w-[90%] mx-auto text-md p-1 border border-gray-darken/50 active:border-accent focus:border-accent h-32'
          onChange={changeHandler}
          name={name}
          onFocus={() => setFocus(!focused)}
          onBlur={() => setFocus(!focused)}
          value={value}
          required={required}
          minLength={20}
          maxLength={200}
          // pattern={type === 'email' ? undefined : '[A-Za-z0-9]+'}
          aria-required={required}></textarea>
      ) : (
        <input
          ref={inputRef}
          className='bg-gray-lighter rounded-md w-[90%] mx-auto text-md p-1 border border-gray-darken/50 active:border-accent focus:border-accent'
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
      )}
    </div>
  );
}
