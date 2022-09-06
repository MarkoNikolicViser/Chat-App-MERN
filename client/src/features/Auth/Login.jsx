import React, { useState } from 'react'
import { Input, Button } from '../../components'
import { FormContainer } from './parts'
import { LoginUser } from '../../api/User'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
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
  const InputValues = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const Submit = e => {
    e.preventDefault()
    loginUser.mutate(inputs)
  }
  const GuestLogin = () => {
    setInputs({ email: 'marko.nikolic@almaks.rs', password: 'marko' })
  }
  return (
    <FormContainer Function={Submit}>
      <Input
        Function={InputValues}
        name={'email'}
        placeholder={'Enter your email address'}
        required={true}
        type={'email'}
        label={'Email address:'}
        value={inputs.email}
      />
      <Input
        Function={InputValues}
        name={'password'}
        placeholder={'Enter password'}
        required={true}
        type={'password'}
        label={'Password:'}
        value={inputs.password}
      />
      <Button text={'Login'} />
      <Button
        functionClick={GuestLogin}
        type={'button'}
        text={'Login as guest'}
      />
    </FormContainer>
  )
}
