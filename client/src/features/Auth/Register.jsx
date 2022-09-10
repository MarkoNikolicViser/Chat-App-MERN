import React from 'react'
import { Input, Button, Loader } from '../../components'
import { FormContainer } from './parts'
import { useRegister } from './useRegister'
export const Register = () => {
  const{InputValues,Submit,SubmitImage,imageLoading,loading}=useRegister()
  
  if(loading)
    return <FormContainer>
      <Loader/>
    </FormContainer>

  return (
    <FormContainer Function={Submit}>
      <Input
        Function={InputValues}
        placeholder='Enter your name'
        label='Name'
        name='name'
        required={true}
        type='text'
      />
      <Input
        Function={InputValues}
        placeholder='Enter your email adress'
        label='Email Adress:'
        name='email'
        required={true}
        type='email'
      />
      <Input
        Function={InputValues}
        placeholder='Enter your password'
        label='Password:'
        name='password'
        required={true}
        type='password'
      />
      <Input
        Function={InputValues}
        placeholder='Confirm your password'
        label='Password confirm:'
        name='confirmPassword'
        required={true}
        type='password'
      />
      {!imageLoading?<Input
        Function={SubmitImage}
        placeholder='Upload profile image'
        label='Image:'
        required={false}
        type='file'
      />:<Loader/>}
      <Button disabled={imageLoading} text='Register' />
    </FormContainer>
  )
}
