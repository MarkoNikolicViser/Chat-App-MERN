import axios from 'axios'

const url = import.meta.env.VITE_SERVER_URL

const bearerToken=(token)=>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  return config
}

const getAllChats=(token)=>axios.get(`${url}chat/getallchats`,bearerToken(token))

export {getAllChats}

