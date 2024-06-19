import React from "react";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  const navigate = useNavigate();

  const onNewsPage = () => {
    navigate("/news");
  };
  const onHomePage = () => {
    navigate("/");
  };
  const onFinace = () => {
    navigate("/finance");
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white ">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          YEREVAN Business
        </h1>
      </div>
      <ul className="hidden xl:flex">
        <li
          onClick={onHomePage}
          className="xl:text-xl hover:cursor-pointer hover:text-gray-300 hover:scale-[1.04] hover:[transition:.3s_ease-in-out]"
        >
          HOME
        </li>
        <li
          onClick={onNewsPage}
          className="xl:text-xl hover:cursor-pointer hover:text-gray-300 hover:scale-[1.04] hover:[transition:.3s_ease-in-out]"
        >
          NEWS
        </li>
        <li
          onClick={onFinace}
          className="xl:text-xl hover:cursor-pointer hover:text-gray-300 hover:scale-[1.04] hover:[transition:.3s_ease-in-out]"
        >
          FINANCE
        </li>
        <li className="xl:text-xl hover:cursor-pointer hover:text-gray-300 hover:scale-[1.04] hover:[transition:.3s_ease-in-out]">
          SERVICES
        </li>
        <li className="xl:text-xl hover:cursor-pointer hover:text-gray-300 hover:scale-[1.04] hover:[transition:.3s_ease-in-out]">
          ABOUT US
        </li>
      </ul>
      <div className="hidden xl:flex">
        <BiSearch className="mr-8 hover:cursor-pointer  hover:text-gray-300 hover:scale-[1.04] hover:[transition:.3s_ease-in-out]" size={25} />
        <BsPerson className="hover:cursor-pointer  hover:text-gray-300 hover:scale-[1.04] hover:[transition:.3s_ease-in-out]" size={25} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="xl:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={25} />
        ) : (
          <HiOutlineMenuAlt4 size={25} />
        )}
      </div>

      {/* Mobile Nav Menu */}
      {nav && (
        <div
          onClick={handleNav}
          className="absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col "
        >
          <ul>
            <h1>YEREVAN Business</h1>
            <li
              onClick={onHomePage}
              className="hover:cursor-pointer hover:underline"
            >
              HOME
            </li>
            <li
              onClick={onNewsPage}
              className="hover:cursor-pointer hover:underline"
            >
              NEWS
            </li>
            <li
              onClick={onFinace}
              className="hover:cursor-pointer hover:underline"
            >
              FINANCE
            </li>
            <li className="hover:cursor-pointer hover:underline">SERVICES</li>
            <li className="hover:cursor-pointer hover:underline">ABOUT US</li>
            <div className="flex flex-col">
              <button className="my-6 hover:underline hover:text-gray-300 hover:font-bold">
                Search
              </button>
              <button className="hover:underline hover:text-gray-300 hover:font-bold">
                Send ab offer
              </button>
            </div>
            <div className="flex justify-between my-6">
              <FaFacebook className="icon" />
              <FaTelegram className="icon" />
              <FaInstagram className="icon" />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
