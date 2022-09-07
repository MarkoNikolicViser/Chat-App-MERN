import React from 'react'
import {Icon} from '../../../../components/Icon'
import ctl from '@netlify/classnames-template-literals'

export const WelcomePart = () => {
  return (
    <div className={divContainer}>
      <Icon status={true} image='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'/>
      <div>            
        <h1 className={h1}>Welcome</h1>
        <b className={b}>Marko Nikolic</b>
      </div>
    </div>
  )
}
const divContainer=ctl(`w-full
flex
items-center
justify-center`)
const h1=ctl(`text-4xl
`)
const b=ctl(`text-2xl
`)