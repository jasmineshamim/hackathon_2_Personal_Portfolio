
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  reverse: boolean;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, description, imageSrc, link, reverse }) => (
  <div className={`flex flex-col md:flex-row w-full mt-20 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    {/* Text Section */}
    <div className="md:w-1/2 text-right md:text-left flex flex-col justify-center">
      <h3 className="text-[#f4b6c2] font-medium md:text-4xl text-2xl text-justify mb-3">
        {title}
      </h3>
      <p className="text-justify mt-2 text-white mb-4 whitespace-normal font-normal">
        {description}
        <br />
        <span className="text-[#f4b6c2]"> (Using):</span>
      </p>
      <ul className="list-none flex flex-row gap-3 pt-3 md:text-sm text-xs font-medium">
        <li className="rounded-2xl h-[40px] w-[120px] flex items-center justify-center bg-gradient-to-r from-[#f4b6c2] via-[#f4b6c2] to-pink-400 text-white">
          HTML
        </li>
        <li className="rounded-2xl h-[40px] w-[120px] flex items-center justify-center bg-gradient-to-r from-[#f4b6c2] via-[#f4b6c2] to-pink-400 text-white">
          TailwindCSS
        </li>
        <li className="rounded-2xl h-[40px] w-[120px] flex items-center justify-center bg-gradient-to-r from-[#f4b6c2] via-[#f4b6c2] to-pink-400 text-white">
          Next.js
        </li>
        <li className="rounded-2xl h-[40px] w-[120px] flex items-center justify-center bg-gradient-to-r from-[#f4b6c2] via-[#f4b6c2] to-pink-400 text-white">
          JavaScript
        </li>
      </ul>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 flex justify-center items-center mt-20 md:mt-5 relative">
      <Link href={link} className="relative group hover:scale-105 ease-in-out duration-100">
        {/* Button Positioned Behind the Image */}
        <span className="flex font-semibold group-hover:-top-14 ease-jump duration-200 bg-gradient-to-r from-[#2abecc] via-[#f4b6c2] to-pink-500 px-5 py-2 rounded w-max items-center gap-1 absolute top-5 left-1/2 -translate-x-1/2 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 after:bg-gradient-to-r from-[#f4b6c2] via-[#f4b6c2] to-pink-500 text-white">
          Latest Project          
        </span>
        <Image
          src={imageSrc}
          alt="Project showcase"
          width={400}
          height={400}
          blurDataURL="data:..."
          placeholder="blur"
          className="relative w-[300px] h-[200px] md:w-[360px] md:h-[240px] lg:w-[370px] lg:h-[230px] z-10" // Higher z-index to appear above the button
        />
      </Link>
    </div>
  </div>
);

export default ProjectSection;
