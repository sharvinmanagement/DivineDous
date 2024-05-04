import React from 'react'

export default function Radioinput({ id, name, value, checked, onChange, label }) {
    return (
        <>
            <div className='border-2 px-1 py-1 rounded-full flex items-center'>
                <input
                    type="radio"
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    checked={checked}
                    className='h-6 w-6'
                />
                <label htmlFor={id} className='mx-2 text-sm font-medium text-gray-600'>{label}</label>
            </div>
        </>
    )
}
