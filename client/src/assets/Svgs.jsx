import React from 'react'
import ctl from '@netlify/classnames-template-literals'
export const Dots = props => {
  const { w } = props
  const svgStyle=ctl(`hover:cursor-pointer
  fill-gray-500
  hover:fill-gray-400`)
  return (
    <svg  
      style={{  width: w + 'px'}}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={svgStyle}
    >
      <path d='m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z' />
    </svg>
  )
}

