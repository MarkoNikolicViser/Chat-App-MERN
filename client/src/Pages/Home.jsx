import ctl from '@netlify/classnames-template-literals';
import React from 'react';
import { Background } from '../components';
import { LeftSection } from '../features/Home/LeftSection/LeftSection';
import { RightSection } from '../features/Home/RightSection/RightSection';
export const Home = () => {
  return (
    <Background>
      <div className={divStyle}>
        <LeftSection />
        <RightSection />
      </div>
    </Background>
  );
};
const divStyle = ctl(`flex
w-11/12
h-full
m-12
`);
