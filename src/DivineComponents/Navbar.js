"use client"
import { useState, useEffect } from 'react';
import img from '../../public/Assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { RxAvatar } from "react-icons/rx";


export default function Navbar() {
    const [secondNavbarItems, setSecondNavbarItems] = useState([]);
    const [activeFirstNavItem, setActiveFirstNavItem] = useState('My Shaadi');

    useEffect(() => {
        // Define second navbar items based on the initially active item in the first navbar
        handleFirstNavbarItemClick(activeFirstNavItem);
    }, []);

    const handleFirstNavbarItemClick = (item) => {
        // Define second navbar items based on the clicked item
        switch (item) {
            case 'Matches':
                setSecondNavbarItems([
                    { link: '/new-matches', value: 'New Matches' },
                    { link: '/my-matches', value: 'My Matches' },
                    { link: '/near-me', value: 'Near Me' }
                ]);
                break;
            case 'Search':
                setSecondNavbarItems([
                    { link: '/basic-search', value: 'Basic' },
                    { link: '/advanced-search', value: 'Advanced' }
                ]);
                break;
            case 'My Shaadi':
                setSecondNavbarItems([
                    { link: '/dashboard', value: 'Dashboard' },
                    { link: '/my-profile', value: 'My Profile' }
                ]);
                break;
            default:
                setSecondNavbarItems([]);
        }
    };

    return (
        <div>
            {/* First Navbar */}
            <nav className={` px-3 lg:px-11 lg:px-20 w-full text-black flex justify-between items-center  transition duration-300 ease-in-out z-30 drop-shadow-lg `} >
                <Link href='/' ><Image src={img} width={150} height={150} alt='DivinsDuos logo' style={{ width: '8rem', height: "4rem" }} /></Link>
                <ul className='flex justify-between gap-16 text-lg font-medium'>
                    <li onClick={() => { handleFirstNavbarItemClick('My Shaadi'); setActiveFirstNavItem('My Shaadi'); }} className='px-5'>My Shaadi</li>
                    <li onClick={() => { handleFirstNavbarItemClick('Matches'); setActiveFirstNavItem('Matches'); }} className='px-5'>Matches</li>
                    <li onClick={() => { handleFirstNavbarItemClick('Search'); setActiveFirstNavItem('Search'); }} className='px-5'>Search</li>
                    {/* Add more first navbar items as needed */}
                </ul>
                <div>
                    <RxAvatar size={40} />
                </div>
            </nav>
            {/* Second Navbar */}
            <nav className='bg-red-400 text-white shadow-md'>
                <ul className='flex justify-center  gap-16 text-lg font-medium'>
                    {secondNavbarItems.map((item, index) => (
                        <li key={index} className='border-b-2 px-10 py-2 border-black'>
                            <Link href={item.link} className='  '>
                                {item.value}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <style jsx>{`
                nav ul li {
                    cursor: pointer;
                }

                nav ul li.active {
                    border-bottom: 10px solid red;
                
                }
            `}</style>
        </div>
    )
}