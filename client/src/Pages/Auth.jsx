import React, { useState } from 'react'
import { AppHeadLine, Background } from '../components'
import { Login, Register } from '../features/Auth/'
import { Tabs } from '../features/Auth/parts'

export const Auth = () => {
    const [show, setShow] = useState(true)

    return <Background>
        <div className='w-full flex flex-col items-center justify-center'>
            <AppHeadLine />
            <Tabs show={show} setShow={setShow} />
            {show ? <Login /> : <Register />}
        </div>
    </Background >
}
