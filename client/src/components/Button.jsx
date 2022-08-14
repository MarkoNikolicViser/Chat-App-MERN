import React from 'react';
import ctl from '@netlify/classnames-template-literals';

export const Button = props => {
  const { text, disabled, type, functionClick } = props;
  return (
    <button
      type={type ? type : 'submit'}
      disabled={disabled}
      onClick={functionClick ? functionClick : null}
      className={!disabled ? style.primary : style.secondary}
    >
      {text}
    </button>
  );
};
const buttonStyle = `group
relative
w-full
flex
justify-center
py-2 px-4
border
border-transparent
text-sm font-medium
rounded-md text-white mb-2`;
const style = {
  primary: ctl(`bg-blue-600 hover:bg-blue-700 ${buttonStyle}`),
  secondary: ctl(
    `bg-blue-400 hover:bg-blue-400 hover:cursor-auto ${buttonStyle}`
  ),
};
