import React from 'react'

export const Tabs = (props) => {
    const { show, setShow } = props
    const tabStyle = 'w-32 flex items-center justify-center rounded-xl hover:cursor-pointer h-10 border-4'
    return (
        <div className='w-1/3 h-16 flex justify-evenly items-center'>
            <h1 className={`${show && 'bg-blue-300'} ${tabStyle}`} onClick={() => setShow(true)}>LOGIN</h1>
            <h1 className={`${!show && 'bg-blue-300'} ${tabStyle}`} onClick={() => setShow(false)}>REGISTER</h1>
        </div>
    )
}
