'use client';
import React, { useEffect, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosArrowRoundDown } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";
import Link from 'next/link';
import Image from 'next/image';
import Typed from 'typed.js';

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Web Developer", "Frontend Developer", "Backend Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Function to scroll to Latest Works section
  const scrollToLatestWorks = () => {
    const section = document.getElementById("latest-works"); // Get the section by ID
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
    }
  };

  return (
    <div className='text-white max-w-screen-2xl mx-auto relative'>
      <div className='flex flex-col h-screen justify-center items-center'>
        
        {/* Background Logo Image */}
        <div className="absolute flex justify-center items-center mb-48">
          <Image 
            src="/images/logo.png" 
            alt="Logo Background" 
            width={500}
            height={500}
            className="w-96 h-96 md:w-70 md:h-70 lg:w-96 lg:h-96 object-contain opacity-100 mix-blend-lighten"
          />
        </div>

        {/* Main Content */}
        <div className='flex flex-col items-start -mt-44 relative px-5 md:mr-96'>
          <h3 className="md:text-5xl text-4xl  mb-4 font-semibold font-[Spartan] h-auto w-auto">
            <span className="text-[#7cdee6]">Hi</span>, I am Jasmine Sheikh
          </h3>
          <p className="mt-2 font-medium font-[Spartan] md:text-4xl text-3xl">
            And I' m a <span className="md:font-extrabold font-bold font-['Merriweather'] text-[#7cdee6] italic"><span ref={typedRef}></span></span>
          </p>
          <p className="text-start mt-4 max-w-md font-normal text-lg">
            I'm a Web Developer with extensive experience in both Frontend and Backend development. I specialize in creating and designing dynamic, responsive websites that deliver an exceptional user experience.
          </p>
          <div>
            <Link href="/contactus">
              <button
                type="button"
                className="mt-7 px-6 py-2 rounded font-bold bg-gradient-to-r
                  from-[#065a60] to-[#2abecc] hover:from-[#2abecc] hover:to-[#065a60] relative hover:scale-110 ease-in-out duration-100
                   group h-9 flex justify-center items-center"
              >
                Hire Me
                <IoIosArrowRoundForward className="absolute h-9 w-9 top-1/2 -translate-y-1/2 -right-6 group-hover:-right-7 ease-in-out duration-100" />
              </button>
            </Link>
          </div>
        </div>

        {/* Vertical Icon List on Right Side */}
        <ul className=' flex-col space-y-6 absolute md:right-8 right-2 top-[26%] hidden md:block'>
          <li>
            <Link href="https://www.facebook.com/profile.php?id=61556128057734" target='_blank'>
              <FaFacebookF className='header_top__icon_wrapper w-8 h-8 text-black'/>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/jasmineshamim" target='_blank'>
              <TbBrandGithubFilled className='header_top__icon_wrapper w-8 h-8 text-black hover:bg-black'/>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/stories/jasmineshamim4/" target='_blank'>
              <FaInstagram className='header_top__icon_wrapper w-8 h-8 text-black hover:bg-pink-500'/>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/jasmine-sheikh-8116b62ba/" target='_blank'>
              <FaLinkedinIn className='header_top__icon_wrapper w-8 h-8 text-black'/>
            </Link>
          </li>
          <li>
            <Link href="https://en.wikipedia.org/wiki/Twitter" target='_blank'>
              <FaTwitter className='header_top__icon_wrapper w-8 h-8 text-black hover:bg-black'/>
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Button to scroll to Latest Works */}
      <div className='flex flex-col items-center -mt-48
         after:content-[""] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[114px] after:-translate-y-1/2 relative'>
        <button 
          type='button' 
          onClick={scrollToLatestWorks} // Ensure this triggers scroll
          className="mt-8 px-6 py-2 rounded font-bold bg-gradient-to-r
            from-[#2abecc] to-[#065a60]  hover:from-[#065a60] hover:to-[#2abecc] relative hover:scale-110 ease-in-out duration-100
            group h-9 w-[127px] flex justify-center items-center whitespace-nowrap"
        >
          Latest Projects
          <IoIosArrowRoundDown className='absolute h-9 w-9 left-1/2 -translate-x-1/2 top-9 group-hover:top-10 ease-in-out duration-100'/>
        </button>
      </div>

      {/* Latest Works Section */}
      <div id="latest-works" >
        <h2 className="text-3xl font-bold text-center"></h2>
        {/* Add content for your latest works here */}
      </div>
    </div>
  );
};

export default HeroSection;
