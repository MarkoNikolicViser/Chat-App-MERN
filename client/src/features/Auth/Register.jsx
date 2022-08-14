import React, { useState } from 'react'
import { Input, Button } from '../../components'
import { FormContainer } from './parts'
import { toast } from 'react-toastify'
import { useMutation } from 'react-query'
import { RegisterUser, ImageUpload } from '../../api/User'

export const Register = () => {
    const registerUser = useMutation(RegisterUser, {
        onSuccess: (data) => toast.success(data.statusText),
        onError: (err) => toast.error(err.message)
    })
    const imageUpload = useMutation(ImageUpload, {
        onSuccess: (data) => toast.success(data.statusText),
        onError: (err) => toast.error(err.message)
    })
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [image, setImage] = useState('')

    const InputValues = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const Submit = (e) => {
        e.preventDefault()
        const { name, email, password } = inputs
        registerUser.mutate({ name, email, password })
    }

    const SubmitImage = (e) => {
        // if (e.target?.files[0])
        //     return

        const image = e.target.files[0]
        if (image.type !== 'image/jpeg') {
            toast.error('You can only upload .jpg/.png file')
            return
        }
        const data = new FormData()
        data.append = ('file', image)
        data.append = ('upload_preset', 'chat-app')
        data.append = ('coud_name', 'markonikolicviser')
        data.append = ("upload_preset", "default-preset");
        imageUpload.mutate(data)
    }

    return <FormContainer Function={Submit}>
        <Input Function={InputValues}
            placeholder='Enter your name'
            label='Name'
            name='name'
            required={true}
            type='text' />
        <Input Function={InputValues}
            placeholder='Enter your email adress'
            label='Email Adress:'
            name='email'
            required={true}
            type='email' />
        <Input Function={InputValues}
            placeholder='Enter your password'
            label='Password:'
            name='password'
            required={true}
            type='password' />
        <Input Function={InputValues}
            placeholder='Confirm your password'
            label='Password confirm:'
            name='confirmPassword'
            required={true}
            type='password' />
        <Input Function={SubmitImage}
            placeholder='Upload profile image'
            label='Image:'
            required={false}
            type='file' />
        <Button text='Register' />
    </FormContainer>

}
