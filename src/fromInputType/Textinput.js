import React from 'react'

export default function Textinput({ id, name, value, onChange, placeholder, label }) {
    return (
        <>
            <div className='relative w-full'>
                <input
                    type="text"
                    id={id}
                    name={name}
                    onChange={onChange}
                    value={value}
                    className='w-full peer block rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 overflow-hidden'
                    placeholder={placeholder}
                />
                <label
                    htmlFor={id}
                    className={`pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8] motion-reduce:transition-none bg-${label ? 'white' : 'transparent'} px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem]`}
                >
                    {label}
                </label>
            </div>
        </>
    )
}
