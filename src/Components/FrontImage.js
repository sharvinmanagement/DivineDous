import Image from 'next/image'
import React from 'react'
import img from '../../public/Assets/img.jpg'

export default function FrontImage() {
  return (
    <div>
      <Image src={img} className="w-full h-[600px]" alt="img"></Image>
      <section className='absolute mx-2 md:mx-16  lg:mx-28  top-[10%] md:top-[18%] lg:top-[20%] w-auto  rounded-t-[1rem]  backdrop-blur-md'> 
        <h1 className='text-white text-2xl md:text-3xl lg:text-4xl text-center py-3  md:py-4 lg:py-6 px-4 md:px-7 lg:px-12 '>Imagine your perfect match. Embrace the possibility. Create your love story with us!</h1>
        <form className=' rounded-b-lg bg-[#FF9A8A] text-center text-5xl py-12'>
         
     Form Section 
        </form>
      </section>
      {/* <div action="" className='absolute  flex justify-center top-[15%] w-full bg-black'>
        <div>


          <h1 className='text-4xl  text-center text-bold text-white  mb-20'>In the silence of the night,<br /> a hopeful heart echoes the melody of our shared destiny.</h1>
                  
          <form  className='flex  border-2 bg-[#FF9A8A] gap-2 px-5 py-5'>
              <div className='flex flex-col w-[20%]'>
                <label htmlFor="gender" className='text-white'>I'm looking for</label>
                <select id="gender">
                  <option value="woman">Woman</option>
                  <option value="man">Man</option>
                </select>
              </div>

              <div className='flex flex-col w-[20%]'>
                <label htmlFor="age" className='text-white'>Aged</label>
                <div className='flex flex-row '>
                  <select id="ageFrom">
                    <option value="18">18</option>
                  </select>
                  to
                  <select id="ageTo">
                    <option value="18">18</option>
                  </select>
                </div>
              </div>

              <div className='flex flex-col w-[20%]'>
                <label htmlFor="religion" className='text-white'>of religion</label>
                <select id="religion">
                  <option value="hindu">Hindu</option>
                  <option value="muslim">Muslim</option>
                </select>
              </div>

              <div className='flex flex-col w-[20%]'>
                <label htmlFor="language" className='text-white'>and mother tongue</label>
                <select id="language">
                  <option value="hindi">Hindi</option>
                  <option value="english">English</option>
                </select>
              </div>
              <button className='mt-4 bg-red-900 w-[20%]'>Let's Begin</button>
          </form>
        </div>
      </div> */}
    </div>
  )
}
