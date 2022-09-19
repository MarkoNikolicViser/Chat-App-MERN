import { useState } from 'react'
import { toast } from 'react-toastify'
import { useMutation } from 'react-query'
import { RegisterUser, ImageUpload } from '../../api/User'
import { useNavigate } from 'react-router-dom'

export const useRegister = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [image, setImage] = useState('')

  const registerUser = useMutation(RegisterUser, {
    onSuccess: (data) => {
      toast.success(data.statusText)
      navigate('/home')
    },
    onError: (err) => toast.error(err.message),
  })
  const imageUpload = useMutation(ImageUpload, {
    onSuccess: (data) => {
      toast.success(data.statusText)
      setImage(data.data.secure_url)
    },
    onError: (err) => toast.error(err.message),
  })

  const InputValues = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const Submit = () => {
    // e.preventDefault()
    const { name, email, password } = inputs
    let data = { name, email, password }

    if (image) data = { ...data, picture: image }

    registerUser.mutate(data)
  }
  const SubmitImage = (e) => {
    if (!e.target?.files[0]) return

    const image = e.target.files[0]
    if (image.type === 'image/jpeg' || image.type === 'image/png') {
      const data = new FormData()
      data.append('file', image)
      data.append('upload_preset', 'chat-app')
      data.append('cloud_name', 'markonikolicviser')
      imageUpload.mutate(data)
    } else {
      toast.error('You can only upload .jpg/.png file')
    }
  }
  return {
    InputValues,
    Submit,
    SubmitImage,
    imageLoading: imageUpload.isLoading,
    loading: registerUser.isLoading,
  }
}
