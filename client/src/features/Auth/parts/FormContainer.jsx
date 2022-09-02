import React from 'react'
import ctl from '@netlify/classnames-template-literals'

export const FormContainer = (props) => {
    const { Function, children } = props
    return (
        <form onSubmit={Function} className={formStyle}>
            {children}</form>
    )
}
const formStyle = ctl(`w-full
md:w-2/3
lg:w-1/3
rounded-2xl
shadow-2xl
flex
justify-center
flex-col
items-center
bg-secondary
p-16`)