import React,{createContext,useEffect,useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
const ChatContext=createContext()

const ChatProvider=({children})=>{
  const [userState,setUserState]=useState(null)
  const navigate=useNavigate()

  useEffect(()=>{
    let userData=localStorage.getItem('userInfo')
    if(userData){
      userData=JSON.parse(userData)
      navigate('/home')
      setUserState(userData)
    }else{
      navigate('/auth')
    }
  },[])

  return (<ChatContext.Provider value={{userState,setUserState}}>{children}</ChatContext.Provider>)
}

export const ChatState=()=>{
  return useContext(ChatContext)
}

export default ChatProvider