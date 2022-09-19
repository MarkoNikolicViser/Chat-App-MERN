import axios from 'axios'

const url = import.meta.env.VITE_SERVER_URL

const RegisterUser = (formData) => axios.post(`${url}user/register`, formData)
const LoginUser = (formData) => axios.post(`${url}user/login`, formData)
const ImageUpload = (formData) =>
  axios.post(`${import.meta.env.VITE_CLOUDINARY_URL}`, formData)

export { RegisterUser, LoginUser, ImageUpload }
