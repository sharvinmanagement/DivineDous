"use client"
import Footer from '@/HomePageComponents/Footer';
import { EditOptionsInput, EditTextinput } from '@/InputComponents/EditeInput';
import formdata from '@/formdata';
import Image from 'next/image';
import NutralProfileImg from '../../../../public/NutralProfileImg.webp'
import React, { useState } from 'react';
import { CiSaveUp2 } from "react-icons/ci";


export default function page() {

    const [edit, setedit] = useState({
        CreatedFor: '', Gender: '', FirstName: '', LastName: '', MaritalStatus: '', DateOfBirth: '',
        Height: '', Disability: '', HealthInformation: '', Diet: '', aboutYourself: '',
        ChurchName: '', ChurchAddress: '', IsBaptized: '', BaptismDate: '', FatherStatus: '',
        MotherStatus: '', FamilyType: '', FamilyTradition: '', AffluenceLevel: '', NoofSiblings: '',
        Religion: '', motherTongue: '', EthnicOrigin: '', denominations: '',
        NativeCity: '', LivingCountry: '', LivingState: '', LivingCity: '', ResidencyStatus: '',
        Qualification: '', Degree: '', WorkingSector: '', WorkingAsRole: '', WorkingWith: '',
        Salary: '', GamilAddress: '', passward: "", ReEnterpassward: "", number: "", profileImages:"",


        lookingforMaxAge: '', lookingforMinAge: '', lookingforMaxHeight: '', lookingforMinHeight: '', lookingforMaritalStatus: '', lookingforEthnicOrigin: '', lookingforReligion: '', lookingforDenomination: '', lookingforAnnualIncome: "",
        lookingforProfileCreatedby: "", lookingforDiet: "", lookingforCountryLiving: '', lookingforStateLiving: '', lookingforCity: '', lookingforQualification: "", lookingforDegree: "", lookingforWorkingSector: '', lookingforWorkingAsRole: ''
    });
    const [mulyipleUsers, setmulyipleUsers] = useState([]);

    const edithandler = (e) => {
        setedit((currentData) => {
            return { ...currentData, [e.target.name]: e.target.value };
        })
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setedit((currentData) => ({
                ...currentData,
                profileImages: reader.result,
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const ageOptions = [];
    const heightOptions = [];
    for (let age = 18; age <= 55; age++) {
        ageOptions.push(age);
    }
    for (let feet = 4; feet <= 9; feet++) {
        for (let inches = 0; inches <= 12; inches++) {
            heightOptions.push(`${feet}ft ${inches}in`);
        }
    }
    const Salary = [];
    const rangeStep = 3;
    const maxSalary = 50; // Maximum salary in LPA
    for (let i = rangeStep; i <= maxSalary; i += rangeStep) {
        const lowerRange = i - rangeStep;
        const upperRange = i;
        const category = `${lowerRange} LPA to ${upperRange} LPA`;
        Salary.push(category);
    }
    Salary.push(`Above ${maxSalary} LPA`);

    return (
        <>
            <div className='flex justify-center flex-col px-2 md:px-16 lg:px-36 mb-12'>

                <h1 className='text-red-400 text-center text-lg md:text-xl lg:text-3xl font-bold  py-6'>Edit Personal Profile</h1>
                <div className=' grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className='flex flex-col gap-5'>

                        <div className='grid bg-white px-3 py-1'>
                            <h1 className='py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-lg lg:text-xl '>Profile Image</h1>
                           
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                           
                    <div>
                    {/* {edit.profileImages && ( */}
                    <div>
                        <img src={NutralProfileImg } alt="Profile" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    </div>
                {/* )} */}
                    </div>
                
                        </div>

                        {/* Basic Info */}
                        <div className='grid bg-white px-3 py-1'>
                            <h1 className='py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-lg lg:text-xl '>Basic Info</h1>
                            <div className='flex flex-col w-full text-sm md:text-base py-5 gap-y-2 md:gap-y-4'>
                                <EditOptionsInput
                                    name="Gender"
                                    options={formdata.Gender}
                                    inputHandler={edithandler}
                                    label="Gender"
                                    className='w-full' />
                                <EditOptionsInput
                                    name="CreatedFor"
                                    options={formdata.CreatedFor}
                                    inputHandler={edithandler}
                                    label="Created For"
                                    className='w-full' />
                                <EditTextinput
                                    id="FirstName"
                                    name="FirstName"
                                    onChange={edithandler}
                                    value={edit.FirstName}
                                    placeholder='FirstName'
                                    label='First Name' />
                                <EditTextinput
                                    id="LastName"
                                    name="LastName"
                                    onChange={edithandler}
                                    value={edit.LastName}
                                    placeholder='Last Name'
                                    label='Last Name' />
                                <div className='grid grid-cols-2   items-center '>
                                    <label className=' text-sm md:text-base peer-focus:text-black'>Date of Brith</label>
                                    <input
                                        type="date"
                                        id="DateOfBirth"
                                        name="DateOfBirth"
                                        value={edit.DateOfBirth}
                                        onChange={edithandler}
                                        className='w-full peer   rounded border-2 bg-transparent px-3 py-1 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none' />
                                </div>
                                <EditOptionsInput
                                    name="Height"
                                    options={heightOptions}
                                    inputHandler={edithandler}
                                    label="Your Height"
                                    className='w-full' />
                                <EditOptionsInput
                                    name="MaritalStatus"
                                    options={formdata.Status}
                                    inputHandler={edithandler}
                                    className='w-full'
                                    label='Marital Status' />
                                <EditOptionsInput
                                    name="Diet"
                                    options={formdata.Diet}
                                    inputHandler={edithandler}
                                    label="Diet"
                                    className='w-full' />
                                <div className='grid grid-cols-2   items-center '>
                                    <label className=' text-sm md:text-base peer-focus:text-black'>Any Disability</label>
                                    <div className='flex gap-3 flex-wrap'>
                                        <div className='border-2 px-1 py-1  rounded-full flex items-center'>
                                            <input type="radio" id="Disability" name="Disability" value="None" onChange={edithandler} checked={edit.Disability === "None"} className={`h-5 w-5`} />
                                            <label htmlFor="Disability" className='mx-2 text-sm font-medium text-gray-600'>None</label>
                                        </div>
                                        <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                            <input type="radio" id="Disability" name="Disability" value="Physical Disability" onChange={edithandler} checked={edit.Disability === "Physical Disability"} className='h-5 w-5 ' />
                                            <label htmlFor="Disability" className='mx-2 text-sm font-medium text-gray-600'>Physical Disability</label>
                                        </div>
                                    </div>
                                </div>

                                <EditOptionsInput
                                    name="healthOptions"
                                    options={formdata.healthInformation}
                                    inputHandler={edithandler}
                                    className='w-full'
                                    label='Health Information' />
                            </div>
                        </div>
                    </div>



                    <div className='flex flex-col gap-5'>
                        {/* Family Backround */}
                        <div className='grid bg-white px-3 py-1'>
                            <h1 className='py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-lg lg:text-xl  '>About Yourself</h1>
                            <div className='relative w-full text-sm md:text-base pt-3 '>
                                <textarea id="aboutYourself"
                                    name="aboutYourself"
                                    onChange={edithandler}
                                    value={edit.aboutYourself}
                                    cols="30"
                                    rows="6"
                                    maxLength={500}
                                    className='w-full peer bg-white rounded border-2 bg-transparent px-3 py-1 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'
                                    placeholder="Tell us more about yourself, your partner, and your family...">
                                </textarea>
                                <div className="absolute bottom-5 right-0 flex items-center pr-3 pointer-events-none text-gray-400 text-sm">
                                    <span id="characterCount">500 characters remaining</span>
                                </div>
                            </div>
                        </div>

                        {/* Location & Career Backround */}
                        <div className='grid bg-white px-3 py-1'>
                            <h1 className='py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-lg lg:text-xl  '>Location & Career Backround</h1>
                            <div className='flex flex-col w-full text-sm md:text-base py-5 gap-y-2 md:gap-y-4'>

                                {formdata.LivingLoactionFields.map((fields, index) => (
                                    <EditTextinput
                                        key={index}
                                        id="NativeCity"
                                        name={fields.name}
                                        value={edit[fields.name]}
                                        onChange={edithandler}
                                        placeholder='Type Here..'
                                        label={fields.label}
                                    />
                                ))}
                                <EditOptionsInput
                                    name="ResidencyStatus"
                                    options={formdata.ResidencyStatus}
                                    inputHandler={edithandler}
                                    label="Residency Status"
                                />

                                <EditOptionsInput
                                    name="Qualification"
                                    options={formdata.Qualification}
                                    inputHandler={edithandler}
                                    label="Qualification"
                                />
                                {edit.Qualification &&
                                    <EditOptionsInput
                                        name="Degree"
                                        options={formdata.Degree[edit.Qualification]}
                                        inputHandler={edithandler}
                                        label="Degree"
                                    />}
                                <EditOptionsInput
                                    name="WorkingSector"
                                    options={formdata.WorkingSector}
                                    inputHandler={edithandler}
                                    className='w-full'
                                    label='Working Sector'
                                />
                                {edit.WorkingSector &&
                                    <EditOptionsInput
                                        name="WorkingAsRole"
                                        options={formdata.WorkingAsRole[edit.WorkingSector]}
                                        inputHandler={edithandler}
                                        label="Working As Role"
                                    />}
                                <EditOptionsInput
                                    name="WorkingWith"
                                    options={formdata.WorkingWith}
                                    inputHandler={edithandler}
                                    className='w-full'
                                    label='Working With'
                                />
                                <EditOptionsInput
                                    name="Salary"
                                    options={Salary}
                                    inputHandler={edithandler}
                                    label="Annual Income"
                                />
                            </div>
                        </div>

                        {/*      Religious Background */}
                        <div className='grid bg-white px-3 py-1'>
                            <h1 className='py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-lg lg:text-xl  '>Religious Background</h1>
                            <div className='flex flex-col w-full text-sm md:text-base py-5 gap-y-2 md:gap-y-4'>

                                <EditOptionsInput
                                    name="Religion"
                                    options={formdata.Religion}
                                    inputHandler={edithandler}
                                    label="Religion"
                                    className='w-full'
                                />
                                <EditOptionsInput
                                    name="denominations"
                                    options={formdata.denominations}
                                    inputHandler={edithandler}
                                    label="Denominations"
                                    className='w-full'
                                />
                                <EditOptionsInput
                                    name="EthnicOrigin"
                                    options={formdata.EthnicOrigin}
                                    inputHandler={edithandler}
                                    label="Ethnic Origin"
                                    className='w-full'
                                />
                                <EditOptionsInput
                                    name="motherTongue"
                                    options={formdata.motherTongue}
                                    inputHandler={edithandler}
                                    className='w-full'
                                    label='Mother Tongue'
                                />
                                <EditTextinput
                                    id="ChurchName"
                                    name="ChurchName"
                                    onChange={edithandler}
                                    value={edit.ChurchName}
                                    placeholder='Church Name'
                                    label='Church Name'
                                />
                                <EditTextinput
                                    id="ChurchAddress"
                                    name="ChurchAddress"
                                    onChange={edithandler}
                                    value={edit.ChurchAddress}
                                    placeholder='Church Address'
                                    label='Church Address'
                                />
                                <div className='grid grid-cols-2  items-center' >
                                    <label className=' text-sm md:text-base peer-focus:text-black'>Is baptized ?</label>
                                    <div className='flex gap-3 flex-wrap'>
                                        <div className='border-2 px-1 py-1  rounded-full flex items-center'>
                                            <input type="radio" id="IsBaptized " name="IsBaptized" value="Yes" onChange={edithandler} checked={edit.IsBaptized === "Yes"} className={`h-5 w-5`} />
                                            <label htmlFor="IsBaptized" className='mx-2 text-sm font-medium text-gray-600'>Yes</label>
                                        </div>
                                        <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                            <input type="radio" id="IsBaptized" name="IsBaptized" value="NO" onChange={edithandler} checked={edit.IsBaptized === "NO"} className='h-5 w-5 ' />
                                            <label htmlFor="IsBaptized" className='mx-2 text-sm font-medium text-gray-600'>No</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2   items-center '>
                                    <label className=' text-sm md:text-base peer-focus:text-black'>BaptismDate</label>
                                    <input
                                        type="date"
                                        id="BaptismDate"
                                        name="BaptismDate"
                                        value={edit.BaptismDate}
                                        onChange={edithandler}
                                        className='w-full peer   rounded border-2 bg-transparent px-3 py-1 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'
                                    />
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='flex flex-col gap-5'>

                        {/* Family Backround */}
                        <div className='grid bg-white px-3 py-1'>
                            <h1 className='py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-lg lg:text-xl  '>Family Backround</h1>
                            <div className='flex flex-col w-full text-sm md:text-base py-5 gap-y-2 md:gap-y-4'>
                                <EditOptionsInput
                                    name="FatherStatus"
                                    options={formdata.FatherStatus}
                                    inputHandler={edithandler}
                                    label="Father Status"
                                    className='w-full' />
                                <EditOptionsInput
                                    name="Mother Status"
                                    options={formdata.MotherStatus}
                                    inputHandler={edithandler}
                                    label="Mother Status"
                                    className='w-full' />
                                <EditOptionsInput
                                    name="NoofSiblings"
                                    options={formdata.NoofSiblings}
                                    inputHandler={edithandler}
                                    label="No of Siblings"
                                    className='w-full' />
                                <EditTextinput
                                    id="NativeCity"
                                    name="NativeCity"
                                    onChange={edithandler}
                                    value={edit.NativeCity}
                                    placeholder='Native City'
                                    label='Native City'
                                />
                                <EditOptionsInput
                                    name="FamilyType"
                                    options={formdata.FamilyType}
                                    inputHandler={edithandler}
                                    label="Family Type"
                                    className='w-full' />
                                <EditOptionsInput
                                    name="FamilyTradition"
                                    options={formdata.FamilyTradition}
                                    inputHandler={edithandler}
                                    className='w-full'
                                    label='Family Tradition'
                                />
                                <EditOptionsInput
                                    name="AffluenceLevel"
                                    options={formdata.AffluenceLevel}
                                    inputHandler={edithandler}
                                    className='w-full'
                                    label='AffluenceLevel'
                                />
                            </div>
                        </div>

                        {/* Parter Preferences */}
                        <div className='grid bg-white px-3 py-1'>
                            <h1 className='py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-lg lg:text-xl  '>Parter Preferences</h1>
                            <div className='flex flex-col w-full text-sm md:text-base py-5 gap-y-2 md:gap-y-4'>
                                <EditOptionsInput
                                    name="lookingforProfileCreatedby"
                                    options={formdata.CreatedFor}
                                    inputHandler={edithandler}
                                    label="Created For"
                                    className='w-full' />

                                <div className='grid grid-cols-2   items-center '>
                                    <label className=' text-sm md:text-base peer-focus:text-black'>Age</label>
                                    <div className='flex flex-row  w-full gap-2 items-center'>
                                        <EditOptionsInput
                                            name="lookingforMinAge"
                                            options={ageOptions}
                                            inputHandler={edithandler}
                                            className='w-full' />
                                        to
                                        <EditOptionsInput
                                            name="lookingforMaxAge"
                                            options={ageOptions}
                                            inputHandler={edithandler}
                                            className='w-full' />
                                    </div>
                                </div>

                                <div className='grid grid-cols-2   items-center '>
                                    <label className=' text-sm md:text-base peer-focus:text-black'>Height</label>
                                    <div className='flex flex-row  w-full gap-2 items-center'>
                                        <EditOptionsInput
                                            name="lookingforMinHeight"
                                            options={heightOptions}
                                            inputHandler={edithandler}
                                            className='w-full' />
                                        to
                                        <EditOptionsInput
                                            name="lookingforMaxHeight"
                                            options={heightOptions}
                                            inputHandler={edithandler}
                                            className='w-full' />
                                    </div>
                                </div>

                                <EditOptionsInput
                                    name="lookingforMaritalStatus"
                                    options={formdata.Status}
                                    inputHandler={edithandler}
                                    className='w-full'
                                    label='Marital Status' />
                                <EditOptionsInput
                                    name="lookingforDiet"
                                    options={formdata.Diet}
                                    inputHandler={edithandler}
                                    label="Diet"
                                    className='w-full' />
                                <EditOptionsInput
                                    name="lookingforReligion"
                                    options={formdata.Religion}
                                    inputHandler={edithandler}
                                    label="Religion"
                                    className='w-full'
                                />
                                <EditOptionsInput
                                    name="lookingforDenomination"
                                    options={formdata.denominations}
                                    inputHandler={edithandler}
                                    label="Denominations"
                                    className='w-full'
                                />
                                <EditOptionsInput
                                    name="lookingforEthnicOrigin"
                                    options={formdata.EthnicOrigin}
                                    inputHandler={edithandler}
                                    label="Ethnic Origin"
                                    className='w-full'
                                />
                                {formdata.lookingforLivingLoactionFields.map((fields, index) => (
                                    <EditTextinput
                                        key={index}
                                        id="NativeCity"
                                        name={fields.name}
                                        value={edit[fields.name]}
                                        onChange={edithandler}
                                        placeholder='Type Here..'
                                        label={fields.label}
                                    />
                                ))}
                                <EditOptionsInput
                                    name="lookingforWorkingSector"
                                    options={formdata.WorkingSector}
                                    inputHandler={edithandler}
                                    className='w-full'
                                    label='Working Sector'
                                />
                                {edit.lookingforWorkingSector &&
                                    <EditOptionsInput
                                        name="lookingforWorkingAsRole"
                                        options={formdata.WorkingAsRole[edit.lookingforWorkingSector]}
                                        inputHandler={edithandler}
                                        label="Working As Role"
                                    />}

                                <EditOptionsInput
                                    name="lookingforQualification"
                                    options={formdata.Qualification}
                                    inputHandler={edithandler}
                                    label="Qualification"
                                />
                                {edit.lookingforQualification &&
                                    <EditOptionsInput
                                        name="lookingforDegree"
                                        options={formdata.Degree[edit.lookingforQualification]}
                                        inputHandler={edithandler}
                                        label="Degree"
                                    />}
                                <EditOptionsInput
                                    name="lookingforAnnualIncome"
                                    options={Salary}
                                    inputHandler={edithandler}
                                    label="Annual Income"
                                />
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex justify-center py-5'>
                    <button className='flex  items-center px-5 py-2 border-2 gap-3 text-base md:text-lg font-medium bg-red-400 text-white rounded-lg'><CiSaveUp2 className="font-bold" size={20} /> Save Edit </button>
                </div>

            </div>
            <Footer />
        </>
    )
}

