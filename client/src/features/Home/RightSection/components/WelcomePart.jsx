import React from 'react'
import {Icon,Button,Modal} from '../../../../components'
import ctl from '@netlify/classnames-template-literals'

export const WelcomePart = () => {
  return (
    <div className={divContainer}>
      <div className='flex items-center justify-center'>
        <Icon status={true} image='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'/>
        <div>            
          <h1 className={h1}>Welcome</h1>
          <b className={b}>Marko Nikolic</b>
        </div>
      </div>
      <i className={i}>Here are some actions to get you started</i>
      <section className={sectionStyle}>
        <b>Easy meetings with anyone</b>
        <p className={p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quis?</p>
        <div className='w-28'>
          <Button text='Meet now'/>
        </div>
      </section>
      <section className={sectionStyle}>
        <b>Create group chat</b>
        <p className={p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, saepe.
        </p>
        <div className='w-28'>
          <Button text='Create chat'/>
        </div>
      </section>
      <Modal/>
    </div>
  )
}
const divContainer=ctl(`w-full
h-full
flex
flex-col
items-center
justify-evenly`)
const h1=ctl(`text-4xl
`)
const b=ctl(`text-2xl
`)
const p=ctl(`text-gray-500
text-center`)
const i=ctl('text-2xl')
const sectionStyle=ctl(`w-72
h-48
border
border-gray-300
flex
flex-col
items-center
justify-between
p-2
rounded-2xl`)