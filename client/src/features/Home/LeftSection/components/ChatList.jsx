import React from 'react'
import { ChatListElement } from './ChatListElement'
import { useChatList } from './useChatList'
import { Loader } from '../../../../components'

export const ChatList = (props) => {
  const { setSelectedChat } = props
  const {data,loading}=useChatList()
  if(loading)
    return <Loader/>
  return (
    <div className="flex w-full flex-col overflow-x-hidden overflow-auto">
      {data?.map(m => (
        <ChatListElement
          key={m._id}
          data={m}
          setSelectedChat={setSelectedChat}
        />
      ))}
    </div>
  )
}
