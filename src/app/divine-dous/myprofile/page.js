import React from 'react'
import profileData from '@/fakeProfiledata'
import manimg from '../../../../public/manfakeprofile.jpeg'
import Image from 'next/image'
import { FaEdit } from "react-icons/fa";
import Link from 'next/link';


export default function page() {
    return (
        <>
            <div className='flex justify-center'>
                <div className='w-[90%]  md:w-[70%] lg:w-[60%] p-2 lg:p-4  mb-16 mt-3 bg-white flex flex-col gap-y-2 md:gap-y-3 '>
                    <div className='text-xl md:text-2xl lg:text-4xl p-2 md:p-3 text-gray-700 bg-violet-50 font-semibold text-center '>
                        {profileData.FirstName}  {profileData.LastName}
                    </div>
                    <div className='flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-3 border-b-2 border-violet-200 pb-2'>
                        
                        <Image src={manimg} alt="myprofile" className='w-40 lg:w-48'/>

<div className='flex flex-col w-full gap-5'>
                        <div className='flex flex-col md:grid grid-cols-2 w-full text-sm md:text-base py-2 gap-2 md:gap-3  ' >
                            <div className='flex flex-col gap-y-2 border-r-0 md:border-r-2 border-gray-300'>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Age / Height</p><span>: {profileData.DateOfBirth}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Material Status</p><span>: {profileData.MaritalStatus}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Created By</p><span>: {profileData.CreatedFor}</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                            <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Religion</p><span>: {profileData.Religion}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Location</p><span>: {profileData.LivingCity}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Mother Tongue</p><span>: {profileData.motherTongue}</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center md:justify-start'>
                        <Link href='/divine-dous/editprofile' className='px-10 py-2 rounded-lg bg-blue-600 text-sm md:text-base font-semibold text-white flex gap-5 flex items-center'>Edit <FaEdit size={20}/></Link>
                        </div>
                        

                        </div>
                    </div>
                    
                       <h1 className='bg-violet-400 text-sm md:text-base  text-white w-fit px-6 py-1'>About MySelf</h1> 
          
                    <div >
                        <h1 className='text-red-600 text-base font-bold md:text-xl py-1 border-b-2 '>Personality, Family Details, Career, Partner Expectations etc.</h1>
                        <p className='text-sm text-gray-600 px-2 py-2'>
                            {profileData.aboutYourself}
                        </p>
                    </div>

                    
                    <div >
                        <h1 className='text-red-600 text-base font-bold md:text-xl py-1 border-b-2 '>Basics & Lifestyle</h1>
                        <div className='flex flex-col md:grid grid-cols-2 w-full text-sm md:text-sm py-2 gap-3  gap-y-2 px-2' >
                            <div className='flex flex-col gap-y-2 border-r-0 md:border-r-2 border-gray-300'>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Date of Brith</p><span>: {profileData.DateOfBirth}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Material Status</p><span>: {profileData.MaritalStatus}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Height</p><span>: {profileData.Height}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Grew up in</p><span>: {profileData.LivingCountry}</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                            <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Diet</p><span>: {profileData.Diet}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Health Information</p><span>: {profileData.HealthInformation}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Disability</p><span>: {profileData.Disability}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div >
                        <h1 className='text-red-600 text-base font-bold md:text-xl py-1 border-b-2 '>Family details</h1>
                        <div className='flex flex-col md:grid grid-cols-2 w-full text-sm md:text-sm py-2 gap-3  gap-y-2 px-2' >
                            <div className='flex flex-col gap-y-2 border-r-0 md:border-r-2 border-gray-300'>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Father Status</p><span>: {profileData.FatherStatus}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Mother Status</p><span>: {profileData.MotherStatus}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>No of Siblings</p><span>: {profileData.NoofSiblings}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Family Type</p><span>: {profileData.FamilyType}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Affluence Level</p><span>: {profileData.AffluenceLevel}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Religion</p><span>: {profileData.Religion}</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                            <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Native City</p><span>: {profileData.NativeCity}</span>
                                </div>                            
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Mother Tongue</p><span>: {profileData.motherTongue}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Denominations</p><span>: {profileData.denominations}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Ethnic Origin</p><span>: {profileData.EthnicOrigin}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Family Tradition</p><span>: {profileData.FamilyTradition}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div >
                        <h1 className='text-red-600 text-base font-bold md:text-xl py-1 border-b-2 '>Education & Career</h1>
                        <div className='flex flex-col md:grid grid-cols-2 w-full text-sm md:text-sm py-2 gap-3  gap-y-2 px-2' >
                            <div className='flex flex-col gap-y-2 border-r-0 md:border-r-2 border-gray-300'>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Education</p><span>: {profileData.Qualification}- {profileData.Degree}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Working Sector</p><span>: {profileData.WorkingSector}</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                            <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Working As Role</p><span>: {profileData.WorkingAsRole}</span>
                                </div>
                            <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Profession area</p><span>: {profileData.WorkingWith}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Annual Income</p><span>: {profileData.Salary}</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>          
                    
                </div>
            </div>
        </>
    )
}

