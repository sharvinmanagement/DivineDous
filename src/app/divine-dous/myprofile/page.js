import React from 'react'
import profileData from '@/fakeProfiledata'
import img from '../../../../public/NutralProfileImg.webp'
import Image from 'next/image'
import { FaEdit } from "react-icons/fa";
import Link from 'next/link';
import Footer from '@/HomePageComponents/Footer';


export default function page() {
    return (
        <>
            <div className='flex justify-center px-0 lg:px-11 lg:px-36'>
                <div className='w-[90%]  md:w-[70%] lg:w-[60%] p-2 lg:p-4  mb-16 mt-3 bg-white flex flex-col gap-y-2 md:gap-y-3 '>
                    <div className='text-xl md:text-2xl lg:text-4xl p-2 md:p-3 text-gray-700 bg-violet-50 font-semibold text-center '>
                        {profileData.FirstName}  {profileData.LastName}
                    </div>
                    <div className='flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-3 border-b-2 border-violet-200 pb-2'>

                        <Image src={img} alt="myprofile" className='w-40 lg:w-48' />

                        <div className='flex flex-col w-full gap-5'>
                            <div className='flex flex-col md:grid grid-cols-2 w-full text-sm md:text-base py-2 gap-2 md:gap-3  ' >
                                <div className='flex flex-col gap-y-2 border-r-0 md:border-r-2 border-gray-300'>
                                    <MyProfileData title='Age / Height' data={profileData.DateOfBirth} />
                                    <MyProfileData title='Material Status' data={profileData.MaritalStatus} />
                                    <MyProfileData title='Created By' data={profileData.CreatedFor} />
                                </div>
                                <div className='flex flex-col gap-y-2'>
                                    <MyProfileData title='Religion' data={profileData.Religion} />
                                    <MyProfileData title='Location' data={profileData.LivingCity} />
                                    <MyProfileData title='Mother Tongue' data={profileData.motherTongue} />
                                </div>
                            </div>

                            <div className='flex justify-center md:justify-start'>
                                <Link href='/divine-dous/editprofile' className='px-10 py-2 rounded-lg bg-blue-600 text-sm md:text-base font-semibold text-white flex gap-5 flex items-center'>Edit <FaEdit size={20} /></Link>
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
                                <MyProfileData title='Date of Brith' data={profileData.DateOfBirth} />
                                <MyProfileData title='Material Status' data={profileData.MaritalStatus} />
                                <MyProfileData title='Height' data={profileData.Height} />
                                <MyProfileData title='Grew up in' data={profileData.LivingCountry} />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <MyProfileData title='Diet' data={profileData.Diet} />
                                <MyProfileData title='Health Information' data={profileData.HealthInformation} />
                                <MyProfileData title='Disability' data={profileData.Disability} />
                            </div>
                        </div>
                    </div>

                    <div >
                        <h1 className='text-red-600 text-base font-bold md:text-xl py-1 border-b-2 '>Family details</h1>
                        <div className='flex flex-col md:grid grid-cols-2 w-full text-sm md:text-sm py-2 gap-3  gap-y-2 px-2' >
                            <div className='flex flex-col gap-y-2 border-r-0 md:border-r-2 border-gray-300'>
                                <MyProfileData title='Father Status' data={profileData.FatherStatus} />
                                <MyProfileData title='Mother Status' data={profileData.MotherStatus} />
                                <MyProfileData title='No of Siblings' data={profileData.NoofSiblings} />
                                <MyProfileData title='Family Type' data={profileData.FamilyType} />
                                <MyProfileData title='Affluence Level' data={profileData.AffluenceLevel} />
                                <MyProfileData title='Religion' data={profileData.Religion} />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <MyProfileData title='Native City' data={profileData.NativeCity} />
                                <MyProfileData title='Mother Tongue' data={profileData.motherTongue} />
                                <MyProfileData title='Denominations' data={profileData.denominations} />
                                <MyProfileData title='Ethnic Origin' data={profileData.EthnicOrigin} />
                                <MyProfileData title='Family Tradition' data={profileData.FamilyTradition} />
                            </div>
                        </div>
                    </div>

                    <div >
                        <h1 className='text-red-600 text-base font-bold md:text-xl py-1 border-b-2 '>Education & Career & Location</h1>
                        <div className='flex flex-col md:grid grid-cols-2 w-full text-sm md:text-sm py-2 gap-3  gap-y-2 px-2' >
                            <div className='flex flex-col gap-y-2 border-r-0 md:border-r-2 border-gray-300'>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Education</p><span>: {profileData.Qualification} - {profileData.Degree}</span>
                                </div>
                                <MyProfileData title='Working Sector' data={profileData.WorkingSector} />
                                <MyProfileData title='Working As Role' data={profileData.WorkingAsRole} />
                                <MyProfileData title='Profession area' data={profileData.WorkingWith} />
                                <MyProfileData title='Annual Income' data={profileData.Salary} />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <MyProfileData title='Living Country' data={profileData.LivingCountry} />
                                <MyProfileData title='Living State' data={profileData.LivingState} />
                                <MyProfileData title='Living City' data={profileData.LivingCity} />
                                <MyProfileData title='Residency Statusy' data={profileData.ResidencyStatus} />
                            </div>
                        </div>
                    </div>


                    <div >
                        <h1 className='text-red-600 text-base font-bold md:text-xl py-1 border-b-2 '>Partner Preference</h1>
                        <div className='flex flex-col md:grid grid-cols-2 w-full text-sm md:text-sm py-2 gap-3  gap-y-2 px-2' >
                            <div className='flex flex-col gap-y-2 border-r-0 md:border-r-2 border-gray-300'>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Age</p><span>: {profileData.lookingforMinAge} - {profileData.lookingforMaxAge}</span>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <p className='text-gray-500'>Height</p><span>: {profileData.lookingforMinHeight}- {profileData.lookingforMaxHeight}</span>
                                </div>
                                <MyProfileData title='Profile Created by' data={profileData.lookingforProfileCreatedby} />
                                <MyProfileData title='Diet' data={profileData.lookingforDiet} />
                                <MyProfileData title='Denomination' data={profileData.lookingforDenomination} />
                                <MyProfileData title='Ethnic Origin' data={profileData.lookingforEthnicOrigin} />
                                <MyProfileData title='Marital Status' data={profileData.lookingforMaritalStatus} />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <MyProfileData title='Living Country' data={profileData.lookingforCountryLiving} />
                                <MyProfileData title='Living State' data={profileData.lookingforStateLiving} />
                                <MyProfileData title='Living City' data={profileData.lookingforCity} />
                                <MyProfileData title='Residency Statusy' data={profileData.ResidencyStatus} />
                                <MyProfileData title='Qualification' data={profileData.lookingforQualification} />
                                <MyProfileData title='Degree' data={profileData.lookingforDegree} />
                                <MyProfileData title='Working Sector' data={profileData.lookingforWorkingSector} />
                                <MyProfileData title='Working As Role' data={profileData.lookingforWorkingAsRole} />
                                <MyProfileData title='Annual Income' data={profileData.lookingforAnnualIncome} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

// 139

export function MyProfileData({ title, data }) {
    return (
        <>
            <div className='grid grid-cols-2 '>
                <p className='text-gray-500'>{title}</p><span>: {data}</span>
            </div>
        </>
    )
}

