import React from 'react';
import ctl from '@netlify/classnames-template-literals';
import { Icon } from '../../../components';

export const LeftSection = () => {
  return (
    <div className={divStyle}>
      <Icon />
      LeftSection
    </div>
  );
};
//min-w-[30%]
const divStyle = ctl(`w-full
md:w-[600px]
bg-gray-200
h-full
flex
flex-col
justify-center
items-center
border-r-2
border-gray-300`);
