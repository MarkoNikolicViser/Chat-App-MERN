import React from 'react'
import { Icon,GroupIcon } from '../../../../components'
import ctl from '@netlify/classnames-template-literals'
import { DateFormater } from '../../../../Helper/Formating'

export const ChatListElement = (props) => {
  const { setSelectedChat, data } = props
  const {chatName,updatedAt,groupAdmin,isGroupChat}=data
  return (
    <div onClick={() => setSelectedChat(data?._id)} className={mainDivStyle}>
      {!isGroupChat?
        <GroupIcon />:
        <Icon image={groupAdmin?.picture} />}
      <div className="w-full flex flex-col justify-center">
        <div className="w-[95%] flex justify-between">
          <h1>{chatName}</h1>
          <p>{DateFormater(updatedAt)}</p>
        </div>
        <p>Poslednja poruka...</p>
      </div>
    </div>
  )
}
const mainDivStyle = ctl(`w-full
flex
relative
hover:bg-blue-100
hover:cursor-pointer
rounded-lg
m-2`)
