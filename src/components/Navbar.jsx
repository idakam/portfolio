import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const returnLinks = () => {
    return (
      <>
        <Link href="/">
          <Image
            src="/../public/assets/eyeduhlogo.png"
            alt="/"
            width="125"
            height="125"
          />
        </Link>

        <div className="flex-col py-4 items-center justify-end">
          <ul>
            <Link href="/">
              <li className="ml- text-sm uppercase hover:border-b py-2">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml- text-sm uppercase hover:border-b py-2">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml- text-sm uppercase hover:border-b py-2">Art</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
          <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <FaLinkedinIn />
          </div>
          <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <FaGithub />
          </div>
          <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <AiOutlineMail />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <nav className="hidden md:flex fixed min-h-screen shadow-xl">
        <div className="flex-col justify-between items-center w-full h-full py-2 px-2 2xl:px-16">
          {returnLinks()}
        </div>
      </nav>
      <div onClick={handleNav} className="fixed md:hidden cursor-pointer ">
        {" "}
        <AiOutlineMenu size={40} />
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[40%] md:hidden h-screen bg-[#e1d59f] shadow-xl p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={40} />
          </div>
        </div>
        {returnLinks()}
      </div>
    </>
  );
};

export default Navbar;
