import React, { useState } from 'react'
import ctl from '@netlify/classnames-template-literals'
import { Icon, Input } from '../../../components'
import { Dots } from '../../../assets/Svgs'
import { ChatList } from './components'

export const LeftSection = props => {
  const { setSelectedChat } = props
  const [searchText, setSearchText] = useState('')
  const Function = e => {
    setSearchText(e.target.value)
  }
  return (
    <section className={sectionStyle}>
      <div className={divStyle}>
        <div className='flex items-center'>
          <Icon
            image='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
            status={true}
          />
          <div>
            <h1>Marko Nikolic</h1>
            <h6>Set a status</h6>
          </div>
        </div>
        <Dots color='gray' w={22}/>
      </div>
      <Input
        value={searchText}
        Function={Function}
        placeholder='Search for people'
      />
      <ChatList setSelectedChat={setSelectedChat}/>
    </section>
  )
}
//min-w-[30%]
const sectionStyle = ctl(`w-full
md:w-[600px]
min-w-[400px]
bg-gray-100
h-full
flex
flex-col
items-center
border-r-2
border-gray-300
p-2`)
const divStyle = ctl(`w-full
flex
items-center
justify-between
`)
