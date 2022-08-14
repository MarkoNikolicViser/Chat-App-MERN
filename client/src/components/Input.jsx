import React, { useState } from 'react';
import ctl from '@netlify/classnames-template-literals';

export const Input = props => {
  const { label, required, type, disable, placeholder, value, Function, name } =
    props;
  const [showPass, setShowPass] = useState(type);

  const invertType = () => {
    if (showPass === 'password') setShowPass('text');
    else {
      setShowPass('password');
    }
  };

  return (
    <div className='flex flex-col items-start mb-5 w-full'>
      {Boolean(label) && (
        <label
          className='text-sm ml-2 font-semibold mb-2 italic md:whitespace-normal lg:whitespace-nowrap w-96 mr-2'
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <div className='relative w-full'>
        <input
          id={label}
          className={`bg-white appearance-none relative block h-10 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs`}
          value={value}
          placeholder={placeholder}
          onChange={Function}
          type={showPass}
          required={required}
          name={name}
          //  autoComplete={autoComplete}
          //  onFocus={focus ? focus : null}
          disabled={disable}
        />
        {type === 'password' && (
          <button
            type='button'
            onClick={invertType}
            className={
              showPass === 'text' ? buttonBg.secondary : buttonBg.primary
            }
          >
            Show
          </button>
        )}
      </div>
    </div>
  );
};
const buttonStyle = `w-2/12
text-white
absolute
right-0.5
bottom-0.5
hover:bg-gray-500
font-small
rounded-lg
text-sm
py-2 z-10`;
const buttonBg = {
  primary: ctl(`bg-gray-400 ${buttonStyle}`),
  secondary: ctl(`bg-gray-600 ${buttonStyle}`),
};
