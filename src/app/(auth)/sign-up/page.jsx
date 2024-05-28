"use client";
import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
    page1Fields,
    page2Fields,
    page3Fields,
    page4Fields,
    page5Fields,
} from "@/validationMassage";
import {
    OptionsInput,
    Radioinput,
    Textinput,
} from "@/InputComponents/RegistrationInput";

import img from "../../../../public/Assets/logo.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import notify from "@/helpers/notify";

// TODO: fix the styling
export default function page() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const router = useRouter();
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post("/api/users/register/", formData);
            if (response.status === 200) {
                router.push(
                    `/complete-profile/?email=${encodeURIComponent(
                        formData.email
                    )}`
                );
            } else {
                notify("User already exists!", "error");
            }
        } catch (error) {
            console.log("signup error", error);
        }
    };

    // changes start from here

    const ageOptions = [];
    const heightOptions = [];
    for (let age = 18; age <= 55; age++) {
        ageOptions.push(age);
    }
    for (let feet = 4; feet <= 9; feet++) {
        for (let inches = 0; inches <= 12; inches++) {
            heightOptions.push(`${feet} ft ${inches} in`);
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

    const validateFields = () => {
        let isValid = true;
        let missingFields = [];
        switch (currentSlide) {
            case 1:
                Object.keys(page1Fields).forEach((field) => {
                    if (!registerUser[field]) {
                        isValid = false;
                        missingFields.push(page1Fields[field]);
                    }
                });
                break;
            case 2:
                Object.keys(page2Fields).forEach((field) => {
                    if (!registerUser[field]) {
                        isValid = false;
                    }
                });
                break;
            case 3:
                Object.keys(page3Fields).forEach((field) => {
                    if (!registerUser[field]) {
                        isValid = false;
                    }
                });
                break;
            case 4:
                Object.keys(page4Fields).forEach((field) => {
                    if (!registerUser[field]) {
                        isValid = false;
                    }
                });
                break;
            case 5:
                Object.keys(page5Fields).forEach((field) => {
                    if (!registerUser[field]) {
                        isValid = false;
                    }
                });
                break;
            default:
                break;
        }
        return isValid;
    };

    const [currentSlide, setCurrentSlide] = useState(1);
    const nextSlide = () => {
        if (validateFields()) {
            setCurrentSlide(currentSlide + 1);
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            alert(`Please fill in all required fields`);
        }
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide - 1);
    };

    return (
        <>
            {/* <div className="bg-red-400 flex itms-center">
            <div className="bg-white p-5 rounded shadow-2xl">
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <h1 className="text-xl text-center font-bold">Sign Up</h1>
                    <input
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-red-400"
                        type="text"
                        name="username"
                        placeholder="Name"
                        value={formData.username}
                        onChange={handleFormChange}
                    />
                    <input
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-red-400"
                        type="email"
                        name="email"
                        placeholder="user@email.com"
                        value={formData.email}
                        onChange={handleFormChange}
                    />
                    <input
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-red-400"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleFormChange}
                    />
                    <button
                        className="bg-red-400 hover:bg-red-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                    <Link href="/login">
                        <button className="bg-white hover:bg-red-400 text-red-400  hover:text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-red-400 w-full">
                            Login
                        </button>
                    </Link>
                </form>
            </div>
        </div>

            <div className='flex w-full mp-[4.5rem] justify-center bg-red-400 '>
                <div className='w-full  px-5  md:px-10 lg:px-20 py-12 my-[3rem] w-[85%] md:w-[75%] lg:w-[55%] bg-white  rounded-lg'>

                </div>
            </div> */}
            <div className="fixed  bg-red-400 h-full w-full flex justify-center items-center z-50">
                <div className="w-[90%] md:w-[50%] lg:w-[36%] xl:w-[28%] h-fit  relative  bg-white rounded-lg  mt-10 ">
                    <div className="px-5 md:px-9 py-7 z-10">
                        <div className="flex justify-center mb-2">
                            <Image
                                src={img}
                                width={120}
                                height={100}
                                alt="DivinsDuos logo"
                                style={{ width: "8rem", height: "4rem" }}
                            />
                        </div>
                        <h1 className="text-base md:text-lg text-center py-3 text-gray-700">
                            Hello, Please sign up
                        </h1>
                        <form
                            className="flex flex-col gap-y-4 my-6"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-y-1">
                                <label
                                    htmlFor="username"
                                    className="text-sm text-gray-600"
                                >
                                    Username
                                </label>
                                <input
                                    type="username"
                                    id="username"
                                    name="username"
                                    placeholder="username"
                                    value={formData.username}
                                    onChange={handleFormChange}
                                    className="block w-full py-2 pr-10 text-sm leading-normal px-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm text-gray-600"
                                >
                                    Email ID
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="user@email.com"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    className="block w-full py-2 pr-10 text-sm leading-normal px-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <label
                                    htmlFor="password"
                                    className="text-sm text-gray-600"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleFormChange}
                                    className="block w-full py-2 pr-10 text-sm leading-normal px-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                    placeholder="Enter Password"
                                />
                            </div>
                            <button className="bg-[#FF9A8A] text-white font-semibold py-2 rounded-lg w-full">
                                Sign Up
                            </button>
                        </form>
                        <div className="text-sm text-center text-gray-500 flex flex-row justify-center gap-2">
                            <span>Already have an account? </span>
                            <Link href="/login">
                                <span className="font-semibold flex items-center hover:underline gap-2">
                                    Login <FaArrowRightLong size={12} />
                                </span>{" "}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
