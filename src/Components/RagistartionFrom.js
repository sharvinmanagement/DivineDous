"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';
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
        MaritalStatus: "",
        Disability: '',
        HealthInformation: '',
        Diet:'',
        aboutYourself: '',
        FatherStatus: '',
        MotherStatus: '',
        NativePlace: '',
        NoofSiblings: '',
        FamilyType: '',
        FamilyTradition: '',
        AffluenceLevel: '',
        Qualification: '',
        Degree: '',
        WorkingSector: "",
        WorkingAsRole: "",
        WorkingWith : ''
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
            MaritalStatus: "",
            Disability: '',
            HealthInformation: '',
            Diet:'',
            aboutYourself: '',
            FatherStatus: '',
            MotherStatus: '',
            NativePlace: '',
            NoofSiblings: '',
            FamilyType: '',
            FamilyTradition: '',
            AffluenceLevel: '',
            Qualification: '',
            Degree: '',
            WorkingSector: "",
            WorkingAsRole: " ",
            WorkingWith:' '
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
    const Diet = ["Veg", "Non-Veg", "Occasionally Non-Veg", "Eggetarian", "Jain", "Vegan"];
     
    const FatherStatus = ["Employed", "Business", "Retired", "Not Employed", "Passed Away"]
    const MotherStatus = ["Homemaker", "Employed", "Business", "Retired", "Passed Away"]
    const NativePlace = ["Specify where you belong to (e.g.: Delhi)"]
    const NoofSiblings = ['1', '2', '3', '4', '5 or Above ']
    const FamilyType = ["Joint", "Nuclear"]
    const FamilyTradition = ["Traditional", "Moderate", "Liberal"]
    const AffluenceLevel = ["Affluent", "Upper Middle Class", "Middle Class", "Lower Middle Class"]


    const ResidencyStatus = ['Citizen', 'Permanent Resident', 'Student Visa', 'Temporary Visa', 'Work Permit'];

    const WorkingSector = [ "Accounting, Banking & Finance",  "Administration & HR",  "Advertising, Media & Entertainment",  "Agriculture",  "Airline & Aviation", "Architecture & Design", "Artists, Animators & Web Designers", "Beauty, Fashion & Jewelry Designers", "BPO, KPO, & Customer Support", "Civil Services / Law Enforcements", "Defense", "Education & Training", "Engineering", "Hotel & Hospitality", "IT & Software Engineering", "Legal",  "Medical & Healthcare", "Merchant Navy", "Sales & Marketing", "Science", "Corporate Professionals", "Others", "Non Working"];

    const WorkingAsRole = {
        "Accounting, Banking & Finance": ["Banking Professional", "Chartered Accountant", "Company Secretary", "Finance Professional", "Investment Professional", "Accounting Professional (Other)"],
        "Administration & HR": ["Admin Professional", "Human Resources Professional"],
        "Advertising, Media & Entertainment": ["Actor", "Advertising Professional", "Entertainment Professional", "Event Manager", "Journalist", "Media Professional", "Public Relations Professional"],
        "Agriculture": ["Farming", "Horticulturist", "Agricultural Professional (Others)"],
        "Airline & Aviation": ["Air Hostess / Flight Attendant", "Pilot / Co-Pilot", "Other Airline Professional"],
        "Architecture & Design": ["Architect", "Interior Designer", "Landscape Architect"],
        "Artists, Animators & Web Designers": ["Animator", "Commercial Artist", "Web / UX Designers", "Artists (Others)"],
        "Beauty, Fashion & Jewelry Designers": ["Beautician", "Fashion Designer", "Hair Stylist", "Jewelry Designer", "Designer (Others)"],
        "BPO, KPO, & Customer Support": ["Customer Support / BPO / KPO Professional"],
        "Civil Services / Law Enforcements": ["IAS / IRS / IES / IFS", "Indian Police Services (IPS)", "Law Enforcement Employee (Others)"],
        "Defense": ["Airforce", "Army", "Navy", "Defense Services (Others)"],
        "Education & Training": ["Lecturer", "Professor", "Research Assistant", "Research Scholar", "Teacher", "Training Professional (Others)"],
        "Engineering": ["Civil Engineer", "Electronics / Telecom Engineer", "Mechanical / Production Engineer", "Non-IT Engineer (Others)"],
        "Hotel & Hospitality": ["Chef / Sommelier / Food Critic", "Catering Professional", "Hotel & Hospitality Professional (Others)"],
        "IT & Software Engineering": ["Software Developer / Programmer", "Software Consultant", "Hardware & Networking Professional", "Software Professional (Others)"],
        "Legal": ["Lawyer", "Legal Assistant", "Legal Professional (Others)"],
        "Medical & Healthcare": ["Dentist", "Doctor", "Medical Transcriptionist", "Nurse", "Pharmacist", "Physician Assistant", "Physiotherapist / Occupational Therapist", "Psychologist", "Surgeon", "Veterinary Doctor", "Therapist (Others)", "Medical / Healthcare Professional (Others)"],
        "Merchant Navy": ["Merchant Navy Officer", "Mariner"],
        "Sales & Marketing": ["Marketing Professional", "Sales Professional"],
        "Science": ["Biologist / Botanist", "Physicist", "Science Professional (Others)"],
        "Corporate Professionals": ["CxO / Chairman / Director / President", "VP / AVP / GM / DGM", "Sr. Manager / Manager", "Consultant / Supervisor / Team Leads", "Team Member / Staff"],
        "Others": ["Agent / Broker / Trader / Contractor", "Business Owner / Entrepreneur", "Politician", "Social Worker / Volunteer / NGO", "Sportsman", "Travel & Transport Professional", "Writer"],
        "Non Working": ["Student", "Retired", "Not Working", "Select"]
    };


    const WorkingWith = ["Private Company", "Government / Public Sector", "Defense / Civil Services", "Business / Self Employed", "Not Working"];

    return (
        <>
            <div className=''>
                <div className='flex w-full mt-[4.5rem] justify-center bg-red-500 '>
                    <div className='w-full px-5  md:px-10 lg:px-20 py-6 my-[3rem] w-[85%] md:w-[75%] lg:w-[55%] bg-white  rounded-lg'>
                        <h1 className=' text-3xl font-normal '>Begin your love journey now!</h1>
                        <p className='text-base mt-3 text-[#72727d] mb-10'>Unlock your path to true love with our personalized matchmaking platform.</p>
                        <div>


                            <div className='flex flex-col mb-9 gap-3'>
                                <p className='text-[1.37rem] font-normal  text-[#41404d]'>Profile Created by </p>
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
                                <p className='text-[1.37rem] font-normal  text-[#41404d]'>Gender</p>
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
                                <p className='text-[1.37rem] font-normal  text-[#41404d]'>Date of Birth</p>
                                <div className='grid grid-cols-3 gap-4 '>
                                    <div className="relative " >
                                        <input type="number"
                                            name="dateofBirth_day"
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 overflow-hidden"
                                            id="exampleFormControlInput1"
                                            placeholder="DD"
                                            maxLength={2}
                                            value={registerUser.dateofBirth.day}
                                            onChange={inputHandler} />
                                        <label
                                            htmlFor="dateofBirth_day"
                                            className="pointer-events-none absolute left-3 top-0 text-sm mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.8rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400"
                                        >Day
                                        </label>
                                    </div>

                                    <div className="relative " data-twe-input-wrapper-init>
                                        <input type="number"
                                            name="dateofBirth_month"
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 overflow-hidden"
                                            id="exampleFormControlInput1"
                                            placeholder="MM"
                                            maxLength={2}
                                            value={registerUser.dateofBirth.month}
                                            onChange={inputHandler} />
                                        <label
                                            htmlFor="dateofBirth_month"
                                            className="pointer-events-none absolute left-3 top-0 text-sm mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.8rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400"
                                        >Month
                                        </label>
                                    </div>

                                    <div className="relative" data-twe-input-wrapper-init>
                                        <input type="number"
                                            name="dateofBirth_year"
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 overflow-hidden"
                                            id="exampleFormControlInput1"
                                            placeholder="YYYY" maxLength={4} value={registerUser.dateofBirth.year} onChange={inputHandler} />
                                        <label
                                            htmlFor="dateofBirth_year"
                                            className="pointer-events-none absolute left-3 top-0 text-sm mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.8rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400"
                                        >Year
                                        </label>
                                    </div>



                                </div>
                            </div>


                            <div className='flex flex-col mb-9 gap-3 '>
                                <p className='text-[1.37rem] font-normal  text-[#41404d]'>Marital Status</p>
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
                                <p className='text-[1.37rem] font-normal  text-[#41404d]'>Any Disability</p>
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
                                <p className='text-[1.37rem] font-normal  text-[#41404d]'>	Health Information</p>
                                <div className='flex gap-3 flex-wrap'>
                                    <div className='border-2 px-1 py-1  rounded-full flex items-center'>
                                        <input type="radio" id="HealthInformation" name="HealthInformation" value="No Health Problems" onChange={inputHandler} checked={registerUser.HealthInformation === "No Health Problems"} className={`h-6 w-6`} />
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

                            <div className='flex flex-col mb-9 gap-3'>
                                <p className='text-[1.37rem] font-normal  text-[#41404d]'>Diet</p>
                                <div className='flex gap-3 flex-wrap'>
    {Diet.map(option => (
        <div key={option} className='border-2 px-1 py-1 rounded-full flex items-center'>
            <input 
                type="radio" 
                id={option} 
                name="HealthInformation" 
                value={option} 
                onChange={inputHandler} 
                checked={registerUser.HealthInformation === option} 
                className={`h-6 w-6`} 
            />
            <label htmlFor={option} className='mx-2 text-sm font-medium text-gray-600'>{option}</label>
        </div>
    ))}
</div>
                            </div>


                            <div className='flex flex-col mb-8 gap-3'>
                                <p className='text-[1.37rem] font-normal text-[#41404d]'>More about your self, Partner and Family</p>
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

                            <div className='flex justify-center my-12 text-[1.37rem] font-normal text-[#41404d]'><p>Family Backround</p></div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                                <div className='relative mb-9 gap-3'>
                                    <select name="FatherStatus" id="FatherStatus" onChange={inputHandler} placeholder='select' className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>
                                        <option value='' id='' className='' >select</option>
                                        {
                                            FatherStatus.map((item, index) => {
                                                return <option value={ item } key={index} className='my-3'>{ item }</option>
                                            })
                                        }
                                    </select>
                                    <label
                                        htmlFor=" FatherStatus"
                                        className="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem]"
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
                                            MotherStatus.map((item, index) => {
                                                return <option value={item} key={index} className='my-3'>{item}</option>
                                            })
                                        }
                                    </select>
                                    <label
                                        htmlFor="dateofBirth_day"
                                        className="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem]"
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
                                            FamilyType.map((item, index) => {
                                                return <option value={item} key={index} className='my-3'>{item}</option>
                                            })
                                        }
                                    </select>
                                    <label
                                        htmlFor="dateofBirth_day"
                                        className="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem]"
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
                                            FamilyTradition.map((item, index) => {
                                                return <option value={item} key={index} className='my-3'>{item}</option>
                                            })
                                        }
                                    </select>
                                    <label
                                        htmlFor="dateofBirth_day"
                                        className="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem]"
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
                                            AffluenceLevel.map((item, index) => {
                                                return <option value={item} key={index} className='my-3'>{item}</option>
                                            })
                                        }
                                    </select>
                                    <label
                                        htmlFor="dateofBirth_day"
                                        className="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem]"
                                    >Affluence Level
                                    </label>
                                    <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                                        <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>


                                <div className='relative mb-9  gap-3'>
                                    <select name="NoofSiblings" id="NoofSiblings" onChange={inputHandler} placeholder='select' className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>
                                        <option value='' id='' className='' >select</option>
                                        {
                                           NoofSiblings.map((item, index) => {
                                                return <option value={item} key={index} className='my-3'>{item}</option>
                                            })
                                        }
                                    </select>
                                    <label
                                        htmlFor="NoofSiblings"
                                        className="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem] "
                                    >No of Siblings
                                    </label>
                                    <div className="absolute  inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                                        <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>

                            </div>

                            <div className='flex justify-center my-12 text-[1.37rem] font-normal text-[#41404d]'><p>	Location, Education & Career Backround</p></div>


                            <div className='relative mb-9 gap-3'>
                                <select name="ResidencyStatus" id="ResidencyStatus" onChange={inputHandler} placeholder='select' className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>
                                    <option value='' id='' className='' >select</option>
                                    {
                                        ResidencyStatus.map((item, index) => {
                                            return <option value={item} key={index} className='my-3 '>{item}</option>
                                        })
                                    }
                                </select>
                                <label
                                    htmlFor="ResidencyStatus"
                                    className="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem] "
                                >Residency Status
                                </label>
                                <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                                    <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                </div>
                            </div>

                            <div className='flex flex-col mb-9 gap-6'>
                                <p className='text-[1.37rem] font-normal text-[#41404d]'>Highest Qualification</p>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 flex-wrap '>
                                    <div className='relative'>
                                        <select name="Qualification" id="Qualification" onChange={inputHandler} placeholder='select' className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>

                                            <option value='' id='' className='' >select</option>
                                            {
                                                Qualification.map((Qualification, index) => {
                                                    return <option value={Qualification} key={index} className='my-3'>{Qualification}</option>
                                                })
                                            }
                                        </select>
                                        <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                                            <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <label
                                    htmlFor="Qualification"
                                    className="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem] "
                                >Field
                                </label>
                                    </div>

                                    {
                                        registerUser.Qualification && <div className='relative'>
                                            <select name="Degree" id="Degree" onChange={inputHandler} className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>
                                                <option value='' id=''>select</option>
                                                {
                                                    Degree[registerUser.Qualification].map((Degree, index) => {
                                                        return <option value={Degree} key={index}>{Degree}</option>
                                                    })
                                                }
                                            </select>
                                            <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                                                <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                            <label
                                    htmlFor="Degree"
                                    className="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem] "
                                >Degree
                                </label>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className='flex flex-col mb-9 gap-6'>
                                <p className='text-[1.37rem] font-normal text-[#41404d]'>Working As</p>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 flex-wrap '>
                                    <div className='relative'>
                                        <select name="WorkingSector" id="WorkingSector" onChange={inputHandler} placeholder='select' className='w-full peer  rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>
                                            <option value='' id='' className='' >select</option>
                                            {
                                                WorkingSector.map((WorkingSector, index) => {
                                                    return <option value={WorkingSector} key={index} className='my-3'>{WorkingSector}</option>
                                                })
                                            }
                                        </select>
                                        <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                                            <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <label
                                    htmlFor="WorkingSector"
                                    className="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem] " >Working Sector</label>
                                    </div>

                                    {
                                        registerUser.WorkingSector && <div className='relative'>
                                            <select name="WorkingAsRole" id="WorkingAsRole" onChange={inputHandler} className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>
                                                <option value='' id=''>select</option>
                                                {
                                                    WorkingAsRole[registerUser.WorkingSector].map((WorkingAsRole, index) => {
                                                        return <option value={WorkingAsRole} key={index}>{WorkingAsRole}</option>
                                                    })
                                                }
                                            </select>
                                            <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                                                <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                            <label
                                    htmlFor="WorkingAsRole"
                                    className="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem] "
                                >Working Role
                                </label>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className='relative mb-9 gap-3'>
                                <select name="WorkingWith" id="WorkingWith" onChange={inputHandler} placeholder='select' className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'>
                                    <option value='' id='' className='' >select</option>
                                    {
                                        WorkingWith.map((item, index) => {
                                            return <option value={item} key={index} className='my-3 '>{item}</option>
                                        })
                                    }
                                </select>
                                <label
                                    htmlFor="WorkingWith"
                                    className="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem] "
                                >Working With
                                </label>
                                <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                                    <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                </div>
                            </div>
                            

                            <button className='bg-blue-600 mt-10 py-2 px-10 text-white rounded-md' onClick={onRegister} >submit</button>
                        </div>
                    </div>
                </div>
            </div>



                <div className='  grid  md:grid-cols-3 gap-y-10  flex-warp my-[4.5rem] mx-[3rem] gap-5' >
                    {mulyipleUsers.map((user, index) => (
                        <div key={index} className="p-6 border-black border-2 bg-white shadow-md bg-clip-border rounded-xl  ">  
                                <p>{user.createdFor}</p>
                                <p>{user.gender}</p>
                                <p>{user.MaritalStatus}</p>
                                <p>{user.Disability}</p>
                                <p>{user.HealthInformation}</p>
                                <p>{user.Diet}</p>
                                <p>{user.aboutYourself}</p>
                                <p>{user.FatherStatus}</p>
                                <p>{user.MotherStatus}</p>
                                <p>{user.NativePlace}</p>
                                <p>{user.NoofSiblings}</p>
                                <p>{user.FamilyType}</p>
                                <p>{user.FamilyTradition}</p>
                                <p>{user.AffluenceLevel}</p>
                                <p>{user.Qualification}</p>
                                <p>{user.Degree}</p>
                                <p>{user.WorkingAsRole}</p>
                                <p>{user.WorkingSector}</p>
                                <p>{user.WorkingWith}</p>
                        </div>
                    ))}
                </div>


    
   </>
  )
}
