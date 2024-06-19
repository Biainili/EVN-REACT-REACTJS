import React from "react";
import {
  FaTelegram,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[2000px]  mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-gray-800">
      <div>
        <h1 className="block text-white">YEREVAN Business</h1>
        <p className="text-white py-2">
          Empowering business growth in Armenia. Everything a business needs.
        </p>
        <br />
        <div className="flex justify-between md:w-[75%] text-white my-4">
          <FaFacebookSquare size={32} className="cursor-pointer  hover:text-gray-400" />
          <FaTelegram size={32} className="cursor-pointer  hover:text-gray-400" />
          <FaInstagramSquare size={32} className="cursor-pointer  hover:text-gray-400" />
          <FaGithubSquare size={32} className="cursor-pointer  hover:text-gray-400" />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between">
        <div className="text-white">
          <h6 className="font-bold sm:text-xl text-sm">Categories</h6>
          <br />
          <ul className="text-start">
            <li class="text-xs sm:text-sm my-[-15px] cursor-pointer  hover:text-gray-400">
              Market News
            </li>
            <li class="text-xs sm:text-sm my-[-15px] cursor-pointer  hover:text-gray-400">
              Financial Services
            </li>
            <li class="text-xs sm:text-sm my-[-15px] cursor-pointer  hover:text-gray-400">
              Economic Updates
            </li>
            <li class="text-xs sm:text-sm my-[-15px] cursor-pointer  hover:text-gray-400">
              Business Trends
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h6 className="font-bold sm:text-xl text-sm">Quick Links</h6>
          <br />
          <ul className="text-start">
            <li class="text-xs sm:text-sm my-[-15px] cursor-pointer  hover:text-gray-400">
              Advertise with Us
            </li>
            <li class="text-xs sm:text-sm my-[-15px] cursor-pointer  hover:text-gray-400">
              Contribute an Article
            </li>
            <li class="text-xs sm:text-sm my-[-15px] cursor-pointer  hover:text-gray-400">
              Careers
            </li>
            <li class="text-xs sm:text-sm my-[-15px] cursor-pointer  hover:text-gray-400">
              Site Map
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h6 className="font-bold sm:text-xl text-sm">Contact Information</h6>
          <br />
          <ul className="text-start">
            <li class="text-xs sm:text-sm my-[-15px] cursor-pointer  hover:text-gray-400">
              Email: contact@yourwebsite.com
            </li>
            <li class="text-xs sm:text-sm my-[-15px] cursor-pointer  hover:text-gray-400">
              Phone: (123) 456-7890
            </li>
            <li class="text-xs sm:text-sm my-[-15px] cursor-pointer  hover:text-gray-400">
              Address: 123 Business Street, City, Country
            </li>
            <li class="text-xs sm:text-sm my-[-15px] cursor-pointer hover:text-gray-400">
              Business Hours: Mon-Fri, 9:00 AM - 5:00 PM
            </li>
          </ul>
        </div>
      </div>
      <h4 className="text-white">
        Copyright © 2023 evn.am. All Rights Reserved.
      </h4>
    </div>
  );
}

export default Footer;
