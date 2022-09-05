import React from 'react'
import { Icon } from '../../../../components'
import ctl from '@netlify/classnames-template-literals'

export const ChatListElement = () => {
  return (
    <div className={mainDivStyle}>
      <Icon image='https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png' />
      <div className='w-full flex flex-col justify-center'>
        <div className='w-[95%] flex justify-between'>
          <h1>Branislava Mitrovic</h1>
          <p>8/28/2022</p>
        </div>
        <p>Poslednja poruka...</p>
      </div>
    </div>
  )
}
const mainDivStyle = ctl(`w-full
flex
hover:bg-blue-100
hover:cursor-pointer
rounded-lg
m-2`)
