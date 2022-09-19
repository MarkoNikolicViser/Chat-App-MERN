import {useQuery} from 'react-query'
import { getAllChats } from '../../../../api/Chat'
import {ChatState} from '../../../../../state/context'

export const useChatList = () => {
  const {userState}=ChatState()
  const allChats=useQuery('all-chats',async ()=>await getAllChats(userState?.token),{enabled:Boolean(userState?.token),
    // onSuccess: (data) => console.log(data),
    // onError: (err) => console.error(err.message),
  })

  return {data:allChats.data?.data,loading:allChats.isLoading}
}
