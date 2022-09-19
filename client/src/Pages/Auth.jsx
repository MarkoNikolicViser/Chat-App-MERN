import React, { useState } from 'react'
import { AppHeadLine, Background } from '../components'
import { Login, Register } from '../features/Auth/'
import { Tabs } from '../features/Auth/parts'

export const Auth = () => {
  const [show, setShow] = useState(true)

  return (
    <Background>
      <div className="w-full min-h-[70%] flex flex-col items-center justify-between">
        <AppHeadLine />
        <Tabs show={show} setShow={setShow} />
        {show ? <Login /> : <Register />}
      </div>
    </Background>
  )
}
