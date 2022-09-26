import React from 'react'
import { Icon } from './Icon'

export const GroupIcon = (prop) => {
  //const {arr}=prop
  const arr=[1,2,3,4]
  return (
    <div className={'absolute'}>
      {arr.map((m,index)=>
        <div className={`absolute left-${index+1}`} key={index}>
          <Icon image={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}/>
        </div>)}
    </div>
  )
}
