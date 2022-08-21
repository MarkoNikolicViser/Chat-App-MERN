import ctl from '@netlify/classnames-template-literals';
import React from 'react';

export const Icon = props => {
  //const {image,status, size}=props
  const image = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
  return (
    <div className={divStyle}>
      <img src={image} className={imageStyle} alt='user-icon' />
      <div className={statusDivStyle}></div>
    </div>
  );
};
const imageStyle = ctl(`rounded-full
w-12
h-12`);
const divStyle = ctl(`w-16
h-16
flex
justify-center
items-center
rounded-full
relative`);
const statusDivStyle = ctl(`w-4
h-4
bg-green-600
rounded-full
absolute
bottom-2
right-2
border-2
border-color-white`);
