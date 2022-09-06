import React from 'react'
import { ChatListElement } from './ChatListElement'
export const ChatList = (props) => {
  const {setSelectedChat}=props
  const [arr, ] = React.useState([1, 2, 3, 4, 6, 7, 7, 7, 77, 8])
  return (
    <div className='flex w-full flex-col overflow-x-hidden overflow-scroll'>
      {arr.map((m, index) => (
        <ChatListElement key={index} data={{name:'Branislava Mitrovic'}} setSelectedChat={setSelectedChat}/>
      ))}
    </div>
  )
}
