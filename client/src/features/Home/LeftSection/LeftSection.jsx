import React from 'react';
import ctl from '@netlify/classnames-template-literals';
import { Icon } from '../../../components';
import { Dots } from '../../../assets/Svgs';
import { Input } from '../../../components';

export const LeftSection = props => {
  const { data } = props;
  return (
    <section className={sectionStyle}>
      <div className={divStyle}>
        <div className='flex items-center'>
          <Icon />
          <div>
            <h1>Marko Nikolic</h1>
            <h6>Set a status</h6>
          </div>
        </div>
        <Dots color='red' w={32} h={32} />
      </div>
      <Input />
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
border-gray-300
p-10`);
const divStyle = ctl(`w-full
flex
items-center
justify-between
`);
