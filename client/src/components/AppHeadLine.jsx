import React from 'react'
import ctl from '@netlify/classnames-template-literals'

export const AppHeadLine = () => {
  return <h1 className={style}>Online Chat</h1>
}
const style = ctl(`w-2/3
md:w-1/3
flex
justify-center 
items-center 
text-3xl  
py-2 
text-white 
font-semibold 
bg-blue-300 
rounded-2xl`)
