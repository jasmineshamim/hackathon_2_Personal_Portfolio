'use client';
import React from 'react';
import HeaderSection from '../_components/Header';
import Footer from '../_components/Footer';
import Image from 'next/image';
import { FaArrowUp } from 'react-icons/fa';

const AboutUs = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <HeaderSection />
      <div className="min-h-screen bg-[#111] text-white py-8 px-4 sm:px-6 lg:px-8">
        {/* Profile Image Section */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/profile.jpg"
            alt="Jasmine Sheikh"
            width={250}
            height={250}
            className="w-64 h-64 rounded-full border-4 border-[#7cdee6] shadow-lg shadow-[#7cdee6]"
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-6 text-[#7cdee6]">
          ABOUT ME
        </h1>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-lg mb-4">
            I'm Jasmine Sheikh, a 15-year-old full-stack developer with a passion for AI, Metaverse, and Web 3.0 technologies.
            Currently, I'm a 9th-grade student under the Governor Sindh IT Initiative (GIAIC), exploring TypeScript, Next.js, Tailwind CSS, and HTML.
            I enjoy building websites and learning new technologies to improve my skills and contribute to future projects.
          </p>

          <h2 className="text-2xl font-semibold text-[#7cdee6] mb-3">My Journey</h2>
          <p className="text-lg mb-4">
            My journey in tech began early, sparking my interest in problem-solving and coding. I now focus on full-stack development, combining both frontend and backend skills.
          </p>

          <h2 className="text-2xl font-semibold text-[#7cdee6] mb-3">What Drives Me</h2>
          <p className="text-lg mb-4">
            I'm passionate about creating impactful applications, and I'm excited by the potential of AI and the Metaverse in shaping the future of technology.
          </p>

          <h2 className="text-2xl font-semibold text-[#7cdee6] mb-3">Looking Ahead</h2>
          <p className="text-lg">
            I'm eager to collaborate on innovative projects that push technological boundaries, especially in AI, blockchain, and web development.
          </p>
        </div>

        {/* Go to Top Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToTop}
            className="bg-[#7cdee6] font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-[#065a60] hover:text-white transition duration-300 flex items-center bg-gradient-to-r from-[#065a60] to-[#2abecc] hover:from-[#2abecc] hover:to-[#065a60] relative hover:scale-110 ease-in-out"
          >
            <FaArrowUp className="mr-2" /> Go to Top
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
