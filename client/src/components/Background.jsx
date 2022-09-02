import React from 'react'
import ctl from '@netlify/classnames-template-literals'

export const Background = ({ children }) => {
    return (
        <div className={style}>{children}</div>
    )
}
const style = ctl(`w-screen
h-screen 
bg-primary 
flex flex-col 
justify-center 
items-center`)
