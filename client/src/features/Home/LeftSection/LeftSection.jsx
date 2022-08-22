import React from 'react';
import ctl from '@netlify/classnames-template-literals';
import { Icon } from '../../../components';
import { Dots } from '../../../assets/Svgs';

export const LeftSection = props => {
  const { data } = props;
  return (
    <section className={sectionStyle}>
      <div className={divStyle}>
        <Icon />
        <h1>Marko Nikolic</h1>
        <Dots color='red' w={32} h={32} />
      </div>
      LeftSection
    </section>
  );
};
//min-w-[30%]
const sectionStyle = ctl(`w-full
md:w-[600px]
bg-gray-200
h-full
flex
flex-col
justify-center
items-center
border-r-2
border-gray-300`);
const divStyle = ctl(`flex
items-center
`);
