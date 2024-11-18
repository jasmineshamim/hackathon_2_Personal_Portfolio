import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import HeaderSection from '../_components/Header';
import Footer from "../_components/Footer";

const ContactUs = () => {
  return (
    <>
    <HeaderSection />
      <div className="max-w-8xl mx-auto p-6 bg-[#111]">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#2abecc]">CONTACT US</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="bg-[#111] p-6 rounded-lg border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-[#2abecc]">Let's Work Together</h2>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="name">Your Name (required)</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded bg-[#222] text-white"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="email">Your Email (required)</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded bg-[#222] text-white"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="number">Your Phone Number</label>
              <input
                type="text"
                id="number"
                className="w-full p-3 border border-gray-300 rounded bg-[#222] text-white"
                placeholder="Enter Your Phone Number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded bg-[#222] text-white"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className=" text-white py-2 px-4 rounded bg-gradient-to-r
              from-[#065a60] to-[#2abecc] hover:from-[#2abecc] hover:to-[#065a60] hover:scale-110 ease-in-out duration-100 font-semibold ">
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="bg-[#111] p-6 rounded-lg border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-[#2abecc]">CONTACT INFORMATION</h2>
            <p className="text-gray-300 mb-6">
            "Thank you for visiting my portfolio! If you would like to discuss a project, collaborate, or have any inquiries, feel free to reach out. I am always open to new opportunities and excited to connect with creative professionals, businesses, and individuals. Whether you're looking for a web development expert or just want to chat about design, don't hesitate to get in touch. I look forward to hearing from you and working together!"
            </p>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <IoHome className="w-5 h-5 text-[#2abecc]" />
                <span className="ml-2">Orangi Town Sector 12L</span>
              </div>

              <div className="flex items-center">
                <FaPhoneVolume className="w-5 h-5 text-[#2abecc]" />
                <span className="ml-2">03491839458</span>
              </div>

              <div className="flex items-center">
                <MdMarkEmailUnread className="w-5 h-5 text-[#2abecc]" />
                <span className="ml-2">jasminesheikh349@gmail.com</span>
              </div>

              <div className="flex items-center">
                <FaClock className="w-5 h-5 text-[#2abecc]" />
                <span className="ml-2">Everyday 9:00 AM to 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
