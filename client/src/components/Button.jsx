import React from 'react'

export const Button = (props) => {
    const { text, disabled, type, functionClick } = props
    return (
        <button
            type={type ? type : 'submit'}
            disabled={disabled}
            onClick={functionClick ? functionClick : null}
            className={`${disabled && 'hover:cursor-auto bg-blue-400 hover:bg-blue-400'
                } group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 ${!disabled && 'hover:bg-blue-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-2`}
        >
            {text}
        </button>
    )
}
