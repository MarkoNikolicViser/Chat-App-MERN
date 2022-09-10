import React from 'react'
import { Input, Button,Loader } from '../../components'
import { FormContainer } from './parts'
import { useLogin } from './useLogin'

export const Login = () => {
  const {inputs,InputValues,Submit,GuestLogin,loading}=useLogin()
  
  if(loading)
    return <FormContainer>
      <Loader/>
    </FormContainer>

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
