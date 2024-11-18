// src/app/_components/Latest.tsx

'use client';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import ProjectSection from './ProjectSection';  // Import the newly created ProjectSection component
import FooterSection from './Footer';

const LatestSection = () => {
  const projects = [
    {
      title: 'Countdown Timer',
      description:
        'I created Countdown Timer using Next.js, HTML, and Tailwind CSS, delivering dynamic and responsive design with accurate countdown functionality and clean user interface.',
      imageSrc: '/images/moCup.png',
      link: 'https://countdown-timer-theta-indol.vercel.app/', // Different link for each project
    },
    {
      title: 'Fashion Brand Website',
      description:
        'Discover elegance and style with Jasmine Sheikh Clothing Brand. Explore our collections for every occasion, crafted with quality and sophistication.',
      imageSrc: '/images/moCup2.png',
      link: 'https://clothing-brand-web.vercel.app/', // Different link for each project
    },
    {
      title: 'Next.js Pixel-Perfect Web',
      description:
        'A pixel-perfect, responsive webpage in Next.js, HTML, and Tailwindcss, precisely matching the Figma design with optimized structure and seamless cross-device experience.',
      imageSrc: '/images/moCup3.png',
      link: 'https://figma-assig-01-7pes.vercel.app/', // Different link for each project
    },
    {
      title: 'Resume Builder',
      description:
        'Create  professional, customizable resume with ease using our Shareable Resume Builder. Input your details, choose template, and generate sleek, shareable resume ready for employers.',
      imageSrc: '/images/moCup4.png',
      link: 'https://my-hackathon-project-milestone05.vercel.app/', // Different link for each project
    },
    {
      title: 'Static Interactive Resume',
      description:
        'A static yet visually appealing resume that effectively showcases your skills and achievements in clean and professional layout',
      imageSrc: '/images/moCup5.png',
      link: 'https://hackathon-1-updated-resume-builder-uqqk.vercel.app/', // Different link for each project
    },
  ];

  // Define scrollToTop function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section className="max-w-screen-xl md:mx-auto mx-[5px] px-4 relative h-full mb-16">
        <div className="text-[#2abecc] w-auto h-auto p-5 flex flex-col justify-center items-center mt-10">
          {/* Heading with adjusted spacing */}
          <div className="text-4xl font-semibold border-b-2 border-[#2abecc] py-2 mb-6">
            <h2 className="bg-[#111] relative z-10 text-center">
              Latest Works
            </h2>
          </div>
          

          {/* Map through the projects and render each one */}
          {projects.map((project, index) => (
            <ProjectSection
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              link={project.link} // Pass the link prop
              reverse={index % 2 !== 0} // Alternate layout for every other project
            />
          ))}
     
        </div>

        {/* Button to scroll to top */}
        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToTop}
            className="bg-[#7cdee6] text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-pink-400 hover:text-white transition duration-300 flex items-center bg-gradient-to-r from-pink-400 to-[#f4b6c2] hover:from-[#f4b6c2] hover:to-pink-400 relative hover:scale-110 ease-in-out"
          >
            <FaArrowUp className="mr-2" /> Go to Top
          </button>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default LatestSection;
