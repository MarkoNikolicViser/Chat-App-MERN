import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import { Modal } from '../components'
import { useNavigate } from 'react-router-dom'
export const Dots = (props) => {
  const { w } = props
  const svgStyle = ctl(`hover:cursor-pointer
  fill-gray-500
  hover:fill-gray-400
 `)
  const navigate=useNavigate()
  const LogoutFunction=()=>{
    localStorage.removeItem('userInfo')
    navigate('/auth')
  }
  return (
    <>
      <label htmlFor="settingsModal" className="modal-button">
        <svg
          style={{ width: w + 'px' }}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={svgStyle}
        >
          <path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z" />
        </svg>
      </label>
      <Modal modalName="settingsModal">
        <button className='bg-gray-400 border-2 border-gray-500' onClick={LogoutFunction}>Logout</button>
      </Modal>
    </>
  )
}
