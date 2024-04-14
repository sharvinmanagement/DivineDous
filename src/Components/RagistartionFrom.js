"use client"
import axios from 'axios';
import React, { useState } from 'react';

export default function RagistartionFrom() {
    const [registerUser, setRegisterUser] = useState({
        createdFor: "",
        gender: "",
        dateofBirth: {
            day: "",
            month: "",
            year: ""
        },
        MaritalStatus:"",
        Disability:'',
        aboutYourself:'',
    });
    const [mulyipleUsers, setmulyipleUsers] = useState([]);

    const inputHandler = (e) => {
        setRegisterUser((currentData) => {
            return { ...currentData, [e.target.name]: e.target.value };
        })
    };

    const onRegister = async (e) => {
        e.preventDefault();
        // Add the current user to the array of registered users
        setmulyipleUsers(prevUsers => [...prevUsers, registerUser]);
        // Reset the state to clear the form fields
        setRegisterUser({
            createdFor: "",
            gender: "",
            dateofBirth: {
                day: "",
                month: "",
                year: ""
            },
            MaritalStatus:"",
            Disability:'',
        });
    };

    return (
        <>
            <div className=''>
                <div className='flex w-full mt-[4.5rem] justify-center bg-red-500 '>
                    <div className='w-full px-5  md:px-10 lg:px-20 py-6 my-[3rem] w-[85%] md:w-[75%] lg:w-[55%] bg-white  rounded-lg'>
                        <h1 className=' text-3xl font-normal '>Begin your love journey now!</h1>
                        <p className='text-base mt-3 text-[#72727d] mb-10'>Unlock your path to true love with our personalized matchmaking platform.</p>  
                        <div>

                      
                            <div className='flex flex-col mb-9'>
                                <p htmlFor="createdFor" className='text-[1.37rem] font-normal mb-2 text-[#41404d]'>Profile Created by </p>
                                <div className='flex gap-3 flex-wrap'>
                                    <div className='border-2 px-1 py-1  rounded-full flex items-center'>
                                        <input type="radio" id="createdFor" name="createdFor" value="MySelf" onChange={inputHandler} checked={registerUser.createdFor === "MySelf"} className={`h-6 w-6`} />
                                        <label htmlFor="createdForSelf" className='mx-2 text-sm font-medium text-gray-600'>MySelf</label>
                                    </div>
                                    <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                        <input type="radio" id="createdFor" name="createdFor" value="Parent Guardian" onChange={inputHandler} checked={registerUser.createdFor === "Parent Guardian"} className='h-6 w-6 ' />
                                        <label htmlFor="createdForSon" className='mx-2 text-sm font-medium text-gray-600'>Parent / Guardian</label>
                                    </div>

                                    <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                        <input type="radio" id="createdFor" name="createdFor" value="Sibling" onChange={inputHandler} checked={registerUser.createdFor === "Sibling"} className='h-6 w-6 ' />
                                        <label htmlFor="createdForSon" className='mx-2 text-sm font-medium text-gray-600'>	Sibling</label>
                                    </div>

                                    <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                        <input type="radio" id="createdFor" name="createdFor" value="Friend" onChange={inputHandler} checked={registerUser.createdFor === "Friend"} className='h-6 w-6 ' />
                                        <label htmlFor="createdForSon" className='mx-2 text-sm font-medium text-gray-600'>	Friend</label>
                                    </div>


                                    <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                        <input type="radio" id="createdFor" name="createdFor" value="Other" onChange={inputHandler} checked={registerUser.createdFor === "Other"} className='h-6 w-6 ' />
                                        <label htmlFor="createdForSon" className='mx-2 text-sm font-medium text-gray-700'>Other</label>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col mb-9'>
                                <p htmlFor="createdFor" className='text-[1.37rem] font-normal mb-2 text-[#41404d]'>Gender</p>
                                <div className='flex gap-3 flex-wrap'>
                                    <div className='border-2 px-1 py-1  rounded-full flex items-center'>
                                        <input type="radio" id="gender" name="gender" value="Male" onChange={inputHandler} checked={registerUser.gender === "Male"} className={`h-6 w-6`} />
                                        <label htmlFor="createdForSelf" className='mx-2 text-sm font-medium text-gray-600'>Male</label>
                                    </div>
                                    <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                        <input type="radio" id="gender" name="gender" value="Female" onChange={inputHandler} checked={registerUser.gender === "Female"} className='h-6 w-6 ' />
                                        <label htmlFor="createdForSon" className='mx-2 text-sm font-medium text-gray-600'>Female</label>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col mb-9'>
                                <p htmlFor="createdFor" className='text-[1.37rem] font-normal mb-4 text-[#41404d]'>Date of Birth</p>
                                <div className='grid grid-cols-3 gap-4 '>
                                    <div class="relative " data-twe-input-wrapper-init>
                                        <input type="number"
                                            name="dateofBirth_day"
                                            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 overflow-hidden"
                                            id="exampleFormControlInput1"
                                            placeholder="DD" 
                                            maxLength={2} 
                                            value={registerUser.dateofBirth.day}
                                            onChange={inputHandler}/>
                                            <label
                                           htmlFor="dateofBirth_day"
                                            class="pointer-events-none absolute left-3 top-0 text-sm mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.8rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400"
                                        >Day
                                        </label>
                                    </div>

                                    <div class="relative " data-twe-input-wrapper-init>
                                        <input type="number"
                                            name="dateofBirth_month"
                                            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 overflow-hidden"
                                            id="exampleFormControlInput1"
                                            placeholder="MM" 
                                            maxLength={2} 
                                            value={registerUser.dateofBirth.month}
                                            onChange={inputHandler}/>
                                            <label
                                            htmlFor="dateofBirth_month"
                                            class="pointer-events-none absolute left-3 top-0 text-sm mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.8rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400"
                                        >Month
                                        </label>
                                    </div>

                                    <div class="relative" data-twe-input-wrapper-init>
                                        <input type="number"
                                        name="dateofBirth_year"
                                            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 overflow-hidden"
                                            id="exampleFormControlInput1"
                                            placeholder="YYYY" maxLength={4}  value={registerUser.dateofBirth.year} onChange={inputHandler}/>
                                            <label
                                            htmlFor="dateofBirth_year"
                                            class="pointer-events-none absolute left-3 top-0 text-sm mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.8rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400"
                                        >Year
                                        </label>
                                    </div>

                                    

                                </div>
                            </div>


                            <div className='flex flex-col mb-9'> 
                                <p htmlFor="createdFor" className='text-[1.37rem] font-normal mb-2 text-[#41404d]'>Marital Status</p>
                                <div className='flex gap-3 flex-wrap'>
                                    <div className='border-2 px-1 py-1  rounded-full flex items-center'>
                                        <input type="radio" id="MaritalStatus" name="MaritalStatus" value="Never Married" onChange={inputHandler} checked={registerUser.MaritalStatus === "Never Married"} className={`h-6 w-6`} />
                                        <label htmlFor="MaritalStatus" className='mx-2 text-sm font-medium text-gray-600'>Never Married</label>
                                    </div>
                                    <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                        <input type="radio" id="MaritalStatus" name="MaritalStatus" value="Divorced" onChange={inputHandler} checked={registerUser.MaritalStatus === "Divorced"} className='h-6 w-6 ' />
                                        <label htmlFor="MaritalStatus" className='mx-2 text-sm font-medium text-gray-600'>Divorced</label>
                                    </div>
                                    <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                        <input type="radio" id="MaritalStatus" name="MaritalStatus" value="Awaiting Divorce" onChange={inputHandler} checked={registerUser.MaritalStatus === "Awaiting Divorce"} className='h-6 w-6 ' />
                                        <label htmlFor="MaritalStatus" className='mx-2 text-sm font-medium text-gray-600'>Awaiting Divorce</label>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col mb-9'>
                                <p htmlFor="createdFor" className='text-[1.37rem] font-normal mb-2 text-[#41404d]'>Any Disability</p>
                                <div className='flex gap-3 flex-wrap'>
                                    <div className='border-2 px-1 py-1  rounded-full flex items-center'>
                                        <input type="radio" id="Disability" name="Disability" value="None" onChange={inputHandler} checked={registerUser.Disability === "None"} className={`h-6 w-6`} />
                                        <label htmlFor="Disability" className='mx-2 text-sm font-medium text-gray-600'>None</label>
                                    </div>
                                    <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                        <input type="radio" id="Disability" name="Disability" value="Physical Disability" onChange={inputHandler} checked={registerUser.Disability === "Physical Disability"} className='h-6 w-6 ' />
                                        <label htmlFor="Disability" className='mx-2 text-sm font-medium text-gray-600'>Physical Disability</label>
                                    </div>
                                </div>
                            </div>


                            <div className='flex flex-col mb-9'>
                                <p htmlFor="createdFor" className='text-[1.37rem] font-normal mb-2 text-[#41404d]'>	Health Information</p>
                                <div className='flex gap-3 flex-wrap'>
                                    <div className='border-2 px-1 py-1  rounded-full flex items-center'>
                                        <input type="radio" id="HealthInformation" name="HealthInformation" value="No Health Problems" onChange={inputHandler} checked={registerUser.HealthInformation=== "No Health Problems"} className={`h-6 w-6`} />
                                        <label htmlFor="HealthInformation" className='mx-2 text-sm font-medium text-gray-600'>No Health Problems</label>
                                    </div>
                                    <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                        <input type="radio" id="HealthInformation" name="HealthInformation" value="HIV Positive" onChange={inputHandler} checked={registerUser.HealthInformation === "HIV Positive"} className='h-6 w-6 ' />
                                        <label htmlFor="HealthInformation" className='mx-2 text-sm font-medium text-gray-600'>HIV Positive</label>
                                    </div>

                                    <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                        <input type="radio" id="HealthInformation" name="HealthInformation" value="Diabetes" onChange={inputHandler} checked={registerUser.HealthInformation === "Diabetes"} className='h-6 w-6 ' />
                                        <label htmlFor="HealthInformation" className='mx-2 text-sm font-medium text-gray-600'>Diabetes</label>
                                    </div>

                                    <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                        <input type="radio" id="" name="HealthInformation" value="Low BP" onChange={inputHandler} checked={registerUser.HealthInformation === "Low BP"} className='h-6 w-6 ' />
                                        <label htmlFor="HealthInformation" className='mx-2 text-sm font-medium text-gray-600'>Low BP</label>
                                    </div>

                                    <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                        <input type="radio" id="HealthInformation" name="HealthInformation" value="High BP" onChange={inputHandler} checked={registerUser.HealthInformation === "High BP"} className='h-6 w-6 ' />
                                        <label htmlFor="HealthInformation" className='mx-2 text-sm font-medium text-gray-600'>High BP</label>
                                    </div>

                                    <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                        <input type="radio" id="" name="HealthInformation" value="Heart Ailments" onChange={inputHandler} checked={registerUser.HealthInformation === "Heart Ailments"} className='h-6 w-6 ' />
                                        <label htmlFor="HealthInformation" className='mx-2 text-sm font-medium text-gray-600'>Heart Ailments</label>
                                    </div>

                                    <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                        <input type="radio" id="HealthInformation" name="HealthInformation" value="Other" onChange={inputHandler} checked={registerUser.HealthInformation === "Other"} className='h-6 w-6 ' />
                                        <label htmlFor="HealthInformation" className='mx-2 text-sm font-medium text-gray-700'>Other</label>
                                    </div>
                                </div>
                            </div>



                            <div className='flex flex-col mb-8'>
                                <p htmlFor="createdFor" className='text-[1.37rem] font-normal mb-2 text-[#41404d]'>More about your self, Partner and Family</p>
                                <div className='relative'>
                                    <textarea id="aboutYourself"
                                        name="aboutYourself"
                                        onChange={inputHandler}
                                        value={registerUser.aboutYourself}
                                        cols="30"
                                        rows="6"
                                        maxLength={500}
                                        className='w-full peer block w-full rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 overflow-hidden'
                                        placeholder="Tell us more about yourself, your partner, and your family...">
                                    </textarea>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 text-sm">
                                        <span id="characterCount">500 characters remaining</span>
                                    </div>
                                </div>
                            </div>



                            <button className='bg-blue-600 py-2 px-10 text-white rounded-md' onClick={onRegister} >submit</button>
                        </div>
                    </div>
                </div>



                <div className='  grid  md:grid-cols-3 gap-y-10  flex-warp my-[4.5rem] mx-[3rem] gap-5' >
                    {mulyipleUsers.map((user, index) => (
                        <div key={index} class="p-6 border-black border-2 bg-white shadow-md bg-clip-border rounded-xl  ">  
                                <p>{user.createdFor}</p>
                                <p>{user.gender}</p>
                                <p>{user.MaritalStatus}</p>
                                <p>{user.Disability}</p>
                                <p>{user.HealthInformation}</p>
                                <p>{user.aboutYourself}</p>
                        </div>
                    ))}
                </div>

</div>
    
   </>
  )
}
