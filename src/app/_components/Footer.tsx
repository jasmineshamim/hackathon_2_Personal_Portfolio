import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IoLogoVercel } from "react-icons/io5";

const FooterSection = () => {
    return (
        <div className="bg-[#111] text-white py-4">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                {/* Copyright Text */}
                <p className="text-center sm:text-left text-[#7cdee6] text-sm mb-4 sm:mb-0">
                    &copy; {new Date().getFullYear()} Jasmine Sheikh. All rights reserved.
                </p>

                {/* Social Media Icons */}
                <div className="flex space-x-4 text-black">
                    <div className="header_top__icon_wrapper">
                        <a
                            href="https://www.facebook.com/profile.php?id=61556128057734"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsFacebook className="text-xl shadow-2xl " />
                        </a>
                    </div>
                    <div className="header_top__icon_wrapper hover:bg-black">
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <BsTwitter className="text-xl" />
                        </a>
                    </div>
                    <div className="header_top__icon_wrapper hover:bg-pink-500">
                        <a
                            href="https://www.instagram.com/jasmineshamim4/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsInstagram className="text-xl" />
                        </a>
                    </div>
                    <div className="header_top__icon_wrapper hover:text-white">
                        <a
                            href="https://www.linkedin.com/in/jasmine-sheikh-8116b62ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BVPlPU2QbTE2AdcMEJbyqoA%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsLinkedin className="text-xl" />
                        </a>
                    </div>
                    <div className="header_top__icon_wrapper hover:text-white hover:bg-black">
                        <a href="https://vercel.com/jasmine-sheikhs-projects" target="_blank" rel="noopener noreferrer">
                            <IoLogoVercel className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterSection;
