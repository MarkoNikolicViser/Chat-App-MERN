import {useCallback,useState} from 'react'
import { LoginUser } from '../../api/User'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  const loginUser = useMutation(LoginUser, {
    onSuccess: data => {
      toast.success(data.statusText)
      navigate('/home')
    },
    onError: err => toast.error(err.message),
  })
    
  const InputValues =useCallback( e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  },[])
    
  const Submit = useCallback(() => {
    loginUser.mutate(inputs)
  },[inputs.email,inputs.password])
    
  const GuestLogin = useCallback(() => {
    const demoParams={ email: 'marko.nikolic@almaks.rs', password: 'marko' }
    loginUser.mutate(demoParams)
  },[])
  return {inputs,InputValues,Submit,GuestLogin,loading:loginUser.isLoading}  
}
