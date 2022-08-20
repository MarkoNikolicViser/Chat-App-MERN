import React from 'react';
import ctl from '@netlify/classnames-template-literals';

export const RightSection = () => {
  return <div className={divStyle}>RightSection</div>;
};
const divStyle = ctl(`w-full
hidden
md:flex
bg-white
h-full
flex-col
justify-center
items-center`);
