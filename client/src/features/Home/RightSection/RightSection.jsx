import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import { WelcomePart,ChatPart } from './components'
export const RightSection = (props) => {
  const {selectedChat}=props
  return (
    <section className={sectionStyle}>
      <div className={divStyle}>
        {selectedChat?<ChatPart/>:<WelcomePart/>}
      </div>
    </section>
  )
}
const sectionStyle = ctl(`w-full
hidden
md:flex
bg-white
h-full
flex-col
justify-center
items-center`)
const divStyle = ctl(`w-full
h-full
transition-opacity
duration-300
ease-out
opacity-0
lg:opacity-100
`)
