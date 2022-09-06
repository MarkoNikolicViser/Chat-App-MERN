import ctl from '@netlify/classnames-template-literals'
import React,{useState} from 'react'
import { Background } from '../components'
import { LeftSection } from '../features/Home/LeftSection/LeftSection'
import { RightSection } from '../features/Home/RightSection/RightSection'
export const Home = () => {
  const [selectedChat,setSelectedChat]=useState(null)
  return (
    <Background>
      <div className={divStyle}>
        <LeftSection setSelectedChat={setSelectedChat}/>
        <RightSection selectedChat={selectedChat}/>
      </div>
    </Background>
  )
}
const divStyle = ctl(`flex
w-[90%]
h-[85%]
`)
