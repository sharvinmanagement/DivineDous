"use client"
import axios from 'axios';
import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import '../app/globals.css'

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
        Qualification:'',
        Degree:'',
        FamilyDetails: {
            FatherStatus: '',
            MotherStatus: '',
            NativePlace: '',
            NoofSiblings: '',
            FamilyType: '',
            FamilyTradition: '',
            AffluenceLevel: ''
        }
    });
    const [mulyipleUsers, setmulyipleUsers] = useState([]);

    const inputHandler = (e) => {

        const { name, value } = e.target;
    // For nested fields like dateofBirth, FamilyDetails, etc., use spread operator to maintain previous state
    if (name.includes('.')) {
        const [parentField, childField] = name.split('.');
        setRegisterUser((currentData) => ({
            ...currentData,
            [parentField]: {
                ...currentData[parentField],
                [childField]: value
            }
        }));
    } else {
        setRegisterUser((currentData) => ({
            ...currentData,
            [name]: value
        }));
    }



        // setRegisterUser((currentData) => {
        //     return { ...currentData, [e.target.name]: e.target.value };
        // })
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
            Qualification:'',
            Degree:'',
            FamilyDetails: {
                FatherStatus: '',
                MotherStatus: '',
                NativePlace: '',
                NoofSiblings: '',
                FamilyType: '',
                FamilyTradition: '',
                AffluenceLevel: ''
            }
        });
    };

    const Qualification = ['Engineering', 'Arts / Design', 'Finance / Commerce', 'Computers / IT', 'Science', 'Medicine', 'Management', 'Law', 'Doctorate', 'Others', 'Non-Graduate']
    const Degree = {
        "Engineering": ["B.E / B.Tech", "M.E / M.Tech", "M.S Engineering", "B.Eng. (Hons)", "M.Eng (Hons)", "Engineering Diploma", "AE", "AET"],
        "Arts / Design": ["B.A", "B.Ed.", "BJMC", "BFA", "B.Arch.", "B.Des", "BMM", "MFA", "M.Ed.", "M.A", "MSW", "MJMC", "M. Arch", "M.Des", "BA (Hons)", "B.Arch (Hons)", "DFA", "D.Ed.", "D. Arch", "AA", "AFA"],
        "Finance / Commerce": ["B. Com", "CA / CPA", "CFA", "BSc / B.fin", "M.Com", "MSc / M.fin / MS", "B.com (Hons)", "PGD Finance"],
        "Computers / IT": ["BCA", "B.IT", "BCS", "BA Computer Science", "MCA", "PGDCS", "IT Diploma", "Others"],
        "Science": ["B.Sc.", "M.Sc.", "B.Sc. (Hons)", "M.Sc. (hons)", "Dip SC", "As", "AAS", "Others"],
        "Medicine": ["MBBS", "BDS", "BPT", "BAMS", "BHMS", "B.Pharma", "BVSc", "BSC / BScN", "MDS", "M.D", "M.S Medicine", "MPT", "DM", "M. Pharma", "PGD Medicine", "Others"],
        "Management": ["BBA", "BHM", "BBM", "MBA", "PGDM", "ABA", "Others"],
        "Law": ["BL / LLB", "ML / LLM", "LLB (Hons)", "ALA"],
        "Doctorate": ["Ph.D.", "M.Phil."],
        "Others": ["Bachelor", "Master", "Diploma", "Honors", "Doctorate", "Associate"],
        "Non-Graduate": ["High School", "Less than high School"]
    }
    const FamilyDetails = {
        "FatherStatus": [ "Employed", "Business", "Retired", "Not Employed", "Passed Away"],
        "MotherStatus": [ "Homemaker", "Employed", "Business", "Retired", "Passed Away"],
        "NativePlace": "Specify where you belong to (e.g.: Delhi)",
        "NoofSiblings": ['1', '2', '3', '4', '5 or Above '],
        "FamilyType": [ "Joint", "Nuclear"],
        "FamilyTradition": ["Traditional", "Moderate", "Liberal"],
        "AffluenceLevel": [ "Affluent", "Upper Middle Class", "Middle Class", "Lower Middle Class"]
    };

    return (
        <>
            <div className=''>
                <div className='flex w-full mt-[4.5rem] justify-center bg-red-500 '>
                    <div className='w-full px-5  md:px-10 lg:px-20 py-6 my-[3rem] w-[85%] md:w-[75%] lg:w-[55%] bg-white  rounded-lg'>
                        <h1 className=' text-3xl font-normal '>Begin your love journey now!</h1>
                        <p className='text-base mt-3 text-[#72727d] mb-10'>Unlock your path to true love with our personalized matchmaking platform.</p>  
                        <div>

                      
                            <div className='flex flex-col mb-9 gap-3'>
                                <p htmlFor="createdFor" className='text-[1.37rem] font-normal  text-[#41404d]'>Profile Created by </p>
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

                            <div className='flex flex-col mb-9 gap-3'>
                                <p htmlFor="createdFor" className='text-[1.37rem] font-normal  text-[#41404d]'>Gender</p>
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

                            <div className='flex flex-col mb-9 gap-4'>
                                <p htmlFor="createdFor" className='text-[1.37rem] font-normal  text-[#41404d]'>Date of Birth</p>
                                <div className='grid grid-cols-3 gap-4 '>
                                    <div classname="relative " data-twe-input-wrapper-init>
                                        <input type="number"
                                            name="dateofBirth_day"
                                            classname="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 overflow-hidden"
                                            id="exampleFormControlInput1"
                                            placeholder="DD" 
                                            maxLength={2} 
                                            value={registerUser.dateofBirth.day}
                                            onChange={inputHandler}/>
                                            <label
                                           htmlFor="dateofBirth_day"
                                            classname="pointer-events-none absolute left-3 top-0 text-sm mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.8rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400"
                                        >Day
                                        </label>
                                    </div>

                                    <div classname="relative " data-twe-input-wrapper-init>
                                        <input type="number"
                                            name="dateofBirth_month"
                                            classname="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 overflow-hidden"
                                            id="exampleFormControlInput1"
                                            placeholder="MM" 
                                            maxLength={2} 
                                            value={registerUser.dateofBirth.month}
                                            onChange={inputHandler}/>
                                            <label
                                            htmlFor="dateofBirth_month"
                                            classname="pointer-events-none absolute left-3 top-0 text-sm mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.8rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400"
                                        >Month
                                        </label>
                                    </div>

                                    <div classname="relative" data-twe-input-wrapper-init>
                                        <input type="number"
                                        name="dateofBirth_year"
                                            classname="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 overflow-hidden"
                                            id="exampleFormControlInput1"
                                            placeholder="YYYY" maxLength={4}  value={registerUser.dateofBirth.year} onChange={inputHandler}/>
                                            <label
                                            htmlFor="dateofBirth_year"
                                            classname="pointer-events-none absolute left-3 top-0 text-sm mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.8rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400"
                                        >Year
                                        </label>
                                    </div>

                                    

                                </div>
                            </div>


                            <div className='flex flex-col mb-9 gap-3 '> 
                                <p htmlFor="createdFor" className='text-[1.37rem] font-normal  text-[#41404d]'>Marital Status</p>
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

                            <div className='flex flex-col mb-9 gap-3' >
                                <p htmlFor="createdFor" className='text-[1.37rem] font-normal  text-[#41404d]'>Any Disability</p>
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


                            <div className='flex flex-col mb-9 gap-3'>
                                <p htmlFor="createdFor" className='text-[1.37rem] font-normal  text-[#41404d]'>	Health Information</p>
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



                            <div className='flex flex-col mb-8 gap-3'>
                                <p htmlFor="createdFor" className='text-[1.37rem] font-normal text-[#41404d]'>More about your self, Partner and Family</p>
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
                                    <div className="absolute bottom-1 right-0 flex items-center pr-3 pointer-events-none text-gray-400 text-sm">
                                        <span id="characterCount">500 characters remaining</span>
                                    </div>
                                </div>
                            </div>


                            <div className='flex flex-col mb-9 gap-3'>
                                <p htmlFor="createdFor" className='text-[1.37rem] font-normal text-[#41404d]'>Highest Qualification</p>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 flex-wrap '>
                                    <div className='relative'>
                                    <select name="Qualification" id="Qualification" onChange={inputHandler} placeholder='select' className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>

                                    <option value='' id='' className='' >select</option>
                                        {
                                            Qualification.map((Qualification,index) => {
                                                return <option value={Qualification} id={index} className='my-3'>{Qualification}</option>
                                            })
                                        }
                                    </select>
                                        <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                                            <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                    </div>

                                    {
                                        registerUser.Qualification && <div className='relative'>
                                            <select name="Degree" id="Degree" onChange={inputHandler} className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>
                                            <option value='' id=''>select</option>
                                                {
                                                    Degree[registerUser.Qualification].map((Degree, index) => {
                                                        return <option value={Degree} id={index} key={index}>{Degree}</option>
                                                    })
                                                }
                                            </select>
                                            <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                                                <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className='flex justify-center my-12 text-[1.37rem] font-normal text-[#41404d]'><p>Family Backround</p></div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>


                                <div className='relative mb-9 gap-3'>
                                    <select name="FatherStatus" id="FatherStatus" onChange={inputHandler} placeholder='select' className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>
                                        <option value='' id='' className='' >select</option>
                                        {
                                            FamilyDetails.FatherStatus.map((item, index) => {
                                                return <option value={item} key={index} className='my-3'>{item}</option>
                                            })
                                        }
                                    </select>
                                    <label
                                        htmlFor="dateofBirth_day"
                                        classname="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem]"
                                    >Father's Status
                                    </label>
                                    <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180 ">
                                        <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>

                                <div className='relative  mb-9 gap-3'>
                                    <select name="MotherStatus" id="MotherStatus" onChange={inputHandler} placeholder='select' className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>
                                        <option value='' id='' className='' >select</option>
                                        {
                                            FamilyDetails.MotherStatus.map((item, index) => {
                                                return <option value={item} key={index} className='my-3'>{item}</option>
                                            })
                                        }
                                    </select>
                                    <label
                                        htmlFor="dateofBirth_day"
                                        classname="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem]"
                                    >Mother's Status
                                    </label>
                                    <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                                        <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>

                                <div className='relative  mb-9 gap-3'>
                                    <select name="FamilyType" id="FamilyType" onChange={inputHandler} placeholder='select' className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>
                                        <option value='' id='' className='' >select</option>
                                        {
                                            FamilyDetails.FamilyType.map((item, index) => {
                                                return <option value={item} key={index} className='my-3'>{item}</option>
                                            })
                                        }
                                    </select>
                                    <label
                                        htmlFor="dateofBirth_day"
                                        classname="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem]"
                                    >Family Type
                                    </label>
                                    <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                                        <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>

                                <div className='relative  mb-9 gap-3'>
                                    <select name="AffluenceLevel" id="AffluenceLevel" onChange={inputHandler} placeholder='select' className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>
                                        <option value='' id='' className='' >select</option>
                                        {
                                            FamilyDetails.FamilyTradition.map((item, index) => {
                                                return <option value={item} key={index} className='my-3'>{item}</option>
                                            })
                                        }
                                    </select>
                                    <label
                                        htmlFor="dateofBirth_day"
                                        classname="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem]"
                                    >Family Tradition
                                    </label>
                                    <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                                        <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>

                                <div className='relative  mb-9 gap-3'>
                                    <select name="AffluenceLevel" id="AffluenceLevel" onChange={inputHandler} placeholder='select' className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>
                                        <option value='' id='' className='' >select</option>
                                        {
                                            FamilyDetails.AffluenceLevel.map((item, index) => {
                                                return <option value={item} key={index} className='my-3'>{item}</option>
                                            })
                                        }
                                    </select>
                                    <label
                                        htmlFor="dateofBirth_day"
                                        classname="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem]"
                                    >Affluence Level
                                    </label>
                                    <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                                        <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>


                                <div className='relative  mb-9 gap-3'>
                                    <select name="NoofSiblings" id="NoofSiblings" onChange={inputHandler} placeholder='select' className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>
                                        <option value='' id='' className='' >select</option>
                                        {
                                            FamilyDetails.NoofSiblings.map((item, index) => {
                                                return <option value={item} key={index} className='my-3'>{item}</option>
                                            })
                                        }
                                    </select>
                                    <label
                                        htmlFor="dateofBirth_day"
                                        classname="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem]"
                                    >No of Siblings
                                    </label>
                                    <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                                        <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>

                            


                            <button className='bg-blue-600 py-2 px-10 text-white rounded-md' onClick={onRegister} >submit</button>
                        </div>
                    </div>
                </div>
            </div>



                <div className='  grid  md:grid-cols-3 gap-y-10  flex-warp my-[4.5rem] mx-[3rem] gap-5' >
                    {mulyipleUsers.map((user, index) => (
                        <div key={index} classname="p-6 border-black border-2 bg-white shadow-md bg-clip-border rounded-xl  ">  
                                <p>{user.createdFor}</p>
                                <p>{user.gender}</p>
                                <p>{user.MaritalStatus}</p>
                                <p>{user.Disability}</p>
                                <p>{user.HealthInformation}</p>
                                <p>{user.aboutYourself}</p>
                                <p>{user.Qualification}</p>
                                <p>{user.Degree}</p>
                                <p>{user.FamilyDetails}</p>
                                <p>{user.aboutYourself}</p>
                                <p>{user.Qualification}</p>
                                <p>{user.Degree}</p>
                        </div>
                    ))}
                </div>


    
   </>
  )
}
