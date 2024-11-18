"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderSection = (): JSX.Element => {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = (): void => {
        setIsClick(!isClick);
    };

    return (
        <>
            <nav className="bg-[#111]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between h-16">
                        <div className="flex items-end">
                            {/* Logo or Placeholder */}
                            <Image 
                              src="/images/logo1.png" 
                              alt="Logo" 
                              width={30}
                              height={30}   
                              className='w-18 h-15 pb-2'
                            />                     
                        </div>
                        {/* Center the navbar links */}
                        <div className="hidden md:flex w-full justify-end space-x-8 font-medium py-4 text-white">
                            <Link href="/" className="navbar__link relative">HOME</Link>
                            <Link href="/aboutus" className="navbar__link relative">ABOUT US</Link>
                            <Link href="/contactus" className="navbar__link relative">CONTACT US</Link>
                        </div>
                        {/* Hamburger icon for mobile */}
                        <div className="md:hidden flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-[#065a60] hover:text-[#2abecc] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2abecc] mb-2"
                                onClick={toggleNavbar}
                            >
                                {isClick ? (
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`md:hidden fixed top-0 left-0 w-full bg-[#111] transform ${
                        isClick ? "translate-y-0" : "-translate-y-full"
                    } transition-transform duration-300 ease-in-out z-50`}
                >
                    <div className="px-6 pt-4 pb-6 space-y-1 sm:px-3 flex justify-center items-center">
                        <div className="flex space-x-4 font-bold text-white">
                            <Link href="/" onClick={toggleNavbar} className="navbar__link relative">HOME</Link>
                            <Link href="/aboutus" onClick={toggleNavbar} className="navbar__link relative">ABOUT US</Link>
                            <Link href="/contactus" onClick={toggleNavbar} className="navbar__link relative">CONTACT US</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default HeaderSection;


