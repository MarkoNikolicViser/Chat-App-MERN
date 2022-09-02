import React from 'react';
import ctl from '@netlify/classnames-template-literals';
export const RightSection = () => {
  return (
    <section className={sectionStyle}>
      <div className={divStyle}>RightSection</div>
    </section>
  );
};
const sectionStyle = ctl(`w-full
hidden
md:flex
bg-white
h-full
flex-col
justify-center
items-center`);
const divStyle = ctl(`
transition-opacity
duration-300
ease-out
opacity-0
lg:opacity-100
`);
