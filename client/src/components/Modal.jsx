import React from 'react'

export const Modal = (props) => {
  const {modalName,children}=props
  return (
    <>
      <input type="checkbox" id={modalName} className="modal-toggle" />
      <label htmlFor={modalName} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {children}
        </label>
      </label>
    </>  )
}
