"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import img from '../../public/Assets/img.jpg'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';


export default function FrontImage() {

  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isReligionOpen, setIsReligionOpen] = useState(false);
  const [isAgeOpen, setIsAgeOpen] = useState(false);
  const [isMotherTongueOpen, setIsMotherTongueOpen] = useState(false);

  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedReligion, setSelectedReligion] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedMotherTongue, setSelectedMotherTongue] = useState(null);

  const genderOptions = ['Man', 'Woman'];
  const religionOptions = ['Hindu', 'Muslim', "Sikh", 'Parsi', 'Jain', 'Christianity', 'Buddhist', 'Other', 'No religion'];
  const ageOptions = ['18-25', '26-35', '36-45'];
  const motherTongueOptions = ['English', 'Hindi', 'Spanish', 'Hindi', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Urdu', 'Gujarati', 'Kannada', 'Odia', 'Malayalam', 'Punjabi', 'Assamese', 'Kashmiri', 'Sindhi', 'Konkani', 'Nepali',];

  const toggleGenderDropdown = () => {
    setIsGenderOpen(!isGenderOpen);
    setIsReligionOpen(false);
    setIsAgeOpen(false);
    setIsMotherTongueOpen(false);
  };

  const toggleReligionDropdown = () => {
    setIsReligionOpen(!isReligionOpen);
    setIsGenderOpen(false);
    setIsAgeOpen(false);
    setIsMotherTongueOpen(false);
  };

  const toggleAgeDropdown = () => {
    setIsAgeOpen(!isAgeOpen);
    setIsGenderOpen(false);
    setIsReligionOpen(false);
    setIsMotherTongueOpen(false);
  };

  const toggleMotherTongueDropdown = () => {
    setIsMotherTongueOpen(!isMotherTongueOpen);
    setIsGenderOpen(false);
    setIsReligionOpen(false);
    setIsAgeOpen(false);
  };

  const selectGenderOption = (option) => {
    setSelectedGender(option);
    setIsGenderOpen(false);
  };

  const selectReligionOption = (option) => {
    setSelectedReligion(option);
    setIsReligionOpen(false);
  };

  const selectAgeOption = (option) => {
    setSelectedAge(option);
    setIsAgeOpen(false);
  };

  const selectMotherTongueOption = (option) => {
    setSelectedMotherTongue(option);
    setIsMotherTongueOpen(false);
  };



  return (

    <div >
      <Image src={img} className="w-full h-[600px] object-cover" alt="img"></Image>
      <section className='absolute mx-0 md:mx-12  lg:mx-28  top-[6.5%] md:top-[13%] lg:top-[14%] w-auto  rounded-[1rem]  '>
        <h1 className='text-white text-2xl md:text-3xl lg:text-4xl text-center py-3  px-1 md:px-4 lg:px-12 [text-shadow:2px_3px_2px_black] z-0'>Imagine your perfect match. Embrace the possibility. Create your love story with us!</h1>




        <form className=' rounded-b-lg flex-col md:flex-row  flex flex-wrap gap-2 gap-y-3 py-3 md:py-5 px-3 bg-black/60 z-0'>
          <div className='flex-1 flex flex-col lg:flex-row gap-2 gap-y-3 '>
            <div className='flex-row gap-2 flex '>


              <div className="flex-1   flex">
                <div className="relative">
                  <label htmlFor="gender" className="text-white text-base md:text-lg">
                    I'm looking for
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={selectedGender || ''}
                      placeholder="Select an option"
                      readOnly
                      name="gender"
                      onClick={toggleGenderDropdown}
                      className="block w-full py-1 pl-3 pr-10 leading-normal bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      {isGenderOpen ? (
                        <FaAngleUp className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      ) : (
                        <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      )}
                    </div>
                  </div>
                  {isGenderOpen && (
                    <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-0">
                      {genderOptions.map((option, index) => (
                        <div
                          key={index}
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                          onClick={() => selectGenderOption(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 flex">
                <div className="relative">
                  <label htmlFor="religion" className="text-white text-base md:text-lg">
                    of religion
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={selectedReligion || ''}
                      placeholder="Select an option"
                      readOnly
                      name="religion"
                      onClick={toggleReligionDropdown}
                      className="block w-full py-1 pl-3 pr-10 leading-normal bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      {isReligionOpen ? (
                        <FaAngleUp className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      ) : (
                        <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      )}
                    </div>
                  </div>
                  {isReligionOpen && (
                    <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10  h-60 overflow-scroll scrollbar-hide ">
                      {religionOptions.map((option, index) => (
                        <div
                          key={index}
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                          onClick={() => selectReligionOption(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>


            <div className='flex-row gap-2 flex'>
              <div className="flex-1 flex">
                <div className="relative">
                  <label htmlFor="age" className="text-white text-base md:text-lg">
                    Age
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={selectedAge || ''}
                      placeholder="Select an option"
                      readOnly
                      name="age"
                      onClick={toggleAgeDropdown}
                      className="block w-full py-1 pl-3 pr-10 leading-normal bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      {isAgeOpen ? (
                        <FaAngleUp className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      ) : (
                        <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      )}
                    </div>
                  </div>
                  {isAgeOpen && (
                    <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                      {ageOptions.map((option, index) => (
                        <div
                          key={index}
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                          onClick={() => selectAgeOption(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 flex">
                <div className="relative">
                  <label htmlFor="motherTongue" className="text-white text-base md:text-lg">
                    Mother Tongue
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={selectedMotherTongue || ''}
                      placeholder="Select an option"
                      readOnly
                      name="motherTongue"
                      onClick={toggleMotherTongueDropdown}
                      className="block w-full py-1 pl-3 pr-10 leading-normal bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      {isMotherTongueOpen ? (
                        <FaAngleUp className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      ) : (
                        <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      )}
                    </div>
                  </div>
                  {isMotherTongueOpen && (
                    <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 h-60 overflow-scroll scrollbar-hide">
                      {motherTongueOptions.map((option, index) => (
                        <div
                          key={index}
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100 "
                          onClick={() => selectMotherTongueOption(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
          <div class="w-full md:w-fit  md:mt-0 ">
            <div className='flex flex-col  '>
              <label htmlFor="" className='hidden md:flex'>hi</label>
              <button className='py-1 mt-1 rounded-lg font-semibold bg-[#FF9A8A] px-7'>Let's Begin</button>
            </div>
          </div>

        </form>
      </section>
    </div>

  )
}
