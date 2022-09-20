import React from 'react'
import { Icon } from '../../../../components'
import ctl from '@netlify/classnames-template-literals'

export const ChatListElement = (props) => {
  const { setSelectedChat, data } = props
  const {chatName,updatedAt,groupAdmin}=data
  console.log(data)
  return (
    <div onClick={() => setSelectedChat(data?.name)} className={mainDivStyle}>
      <Icon image={groupAdmin?.picture} />
      <div className="w-full flex flex-col justify-center">
        <div className="w-[95%] flex justify-between">
          <h1>{chatName}</h1>
          <p>{updatedAt}</p>
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
