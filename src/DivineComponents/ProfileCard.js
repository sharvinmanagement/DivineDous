import React from 'react'
import img from '../../public/fakeprofileimg.webp'
import Image from 'next/image'

export default function ProfileCard() {
  return (
    <div className='h-72 w-full flex shadow-xl'>
      <Image src={img} alt="" className='w-[27%] cover' sizes='' />
    

      <div className='w-full p-3 flex flex-col gap-2'>
        <h1 className='text-2xl font-semibold'>Pranali p </h1>
        <div className='flex justify-between w-full'>
          <p>Online Now</p>
          <p>You & her</p>
          <p>Astro</p>
        </div>

        <div className='grid grid-cols-2'>
          <div>
            <p>20yrs, 5'12"</p>
            <p>Hindu, Maratha</p>
            <p>Maratha</p>
          </div>
          <div>
            <p>Never Married</p>
            <p>Puna, Maharashtra</p>
            <p>Designer</p>
          </div>
        </div>
        <p>The Indian Premier League, also known as the TATA IPL for sponsorship reasons, is a men's Twenty20 cricket league held annually in India</p>
      </div>
      <div className='flex items-center justify-center flex-col w-[30%] gap-6 border-l-2 border-black'>
        <h1 className='text-center'>Like this profile</h1>
        <p className='text-center'>Upcharge to connect</p>
      </div>
    </div>
  )
}
