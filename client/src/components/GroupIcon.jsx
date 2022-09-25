import React from 'react'
import { Icon } from './Icon'

export const GroupIcon = (prop) => {
  //const {arr}=prop
  const arr=[1,2,3]
  return (
    <>
      {arr.map((m,index)=>
        <div key={index}>
          <Icon />
        </div>)}
    </>
  )
}
