import React from 'react'
import ctl from '@netlify/classnames-template-literals'

export const Background = ({ children }) => {
    return (
        <div className={style}>{children}</div>
    )
}
const style = ctl(`w-screen
h-screen 
bg-blue-100 
flex flex-col 
justify-center 
items-center`)
