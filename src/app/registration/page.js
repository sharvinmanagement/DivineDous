"use client"
import axios from 'axios';
import React, { useState } from 'react';



export default function page() {

  const [ragisterUser, setRagisterUser] = useState({
    name: "",
    gmail: "",
    password: ""
  })

  const inputhandler = (e) => {
    setRagisterUser((currentData) => {
      return { ...currentData, [e.target.name]: e.target.value }
    })
  }
  const onRegister = async (e) => {
    e.preventDefault()
    setRagisterUser({
      name: "",
      gmail: "",
      password: ""
    })
  }

  return (
    <>
      <div className=''>
        <div className='flex w-full mt-[4.5rem] justify-center bg-red-500 '>
          <div className='w-full px-5 md:px-20 py-6 my-[3rem] md:w-[55%] bg-white  rounded-lg'>
            <h1 className=' text-3xl font-normal '>Begin your love journey now!</h1>
            <p className='text-base mt-3 text-[#72727d]'>Unlock your path to true love with our personalized matchmaking platform.</p>
            <div>

              <div className='flex flex-col my-5'>
                <label htmlFor="">name</label>
                <input type="text"
                  id='name'
                  name='name'
                  value={ragisterUser.name}
                  onChange={inputhandler}
                  className='border-2 border-gray-300 p-1 rounded-lg' />
              </div>
              <div className='flex flex-col my-5'>
                <label htmlFor="">gmail</label>
                <input type="gmail"
                  id='gmail'
                  name='gmail'
                  value={ragisterUser.gmail}
                  onChange={inputhandler}
                  className='border-2 border-gray-300 p-1 rounded-lg' />
              </div>
              <div className='flex flex-col my-5'>
                <label htmlFor="">password</label>
                <input type="password"
                  id='password'
                  name='password'
                  value={ragisterUser.password}
                  onChange={inputhandler}
                  className='border-2 border-gray-300 p-1 rounded-lg' />
              </div>
              <button className='bg-blue-600 py-2 px-10 text-white rounded-md' onClick={onRegister} >submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
