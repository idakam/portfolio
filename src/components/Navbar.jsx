import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import logo from "../../public/assets/eyeduhlogo.png";
import head from "../../public/assets/headlogo.png";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="hidden md:flex w-full h-screen overflow-scroll ">
        <div className="flex flex-col w-full py-4 px-4">
          <div className="flex-1 w-auto h-auto m-auto">
            <Link className="" href="/">
              <Image src={head} alt="/" />
            </Link>
          </div>

          <div className="flex flex-col sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl px-[5%]">
            <ul>
              <Link href="/about">
                <li className="ml- uppercase hover:border-b">About</li>
              </Link>
              <ul className="ml- uppercase py-2">
                <span className="md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
                  Projects
                </span>
                <Link href="/projects/beatdriver">
                  <li className=" uppercase hover:border-b py-.5">
                    Beatdriver
                  </li>
                </Link>
                <Link href="/projects/vinylshop">
                  <li className=" uppercase hover:border-b py-.5">
                    Vinyl Shop
                  </li>
                </Link>
                <Link href="/projects/beatdriver">
                  <li className="  uppercase hover:border-b py-.5">Manican</li>
                </Link>
              </ul>
              <ul className="ml- uppercase py-2">
                <span className="md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
                  MISC
                </span>
                <Link href="/projects/beatdriver">
                  <li className=" uppercase hover:border-b py-.5">Painting</li>
                </Link>
                <Link href="/projects/beatdriver">
                  <li className=" uppercase hover:border-b py-.5">
                    Video + Design
                  </li>
                </Link>
              </ul>
            </ul>
            <div className="flex items-center justify-around w-full">
              <div className="rounded-full shadow-xl shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-xl shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-xl shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div onClick={handleNav} className="flex md:hidden cursor-pointer w-full">
        {" "}
        <AiOutlineMenu size={40} />
      </div>
      {/* bg-[url('../../public/assets/background.png')] */}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-full md:hidden h-screen p-5 ease-in duration-500 z-40 bg-cover bg-[url('../../public/assets/background.png')]"
            : "hidden"
        }
      >
        <div className="flex w-full justify-end">
          <div onClick={handleNav} className="cursor-pointer ">
            <AiOutlineClose size={40} />
          </div>
        </div>
        <div className="py-5 max-w-[400px] h-auto m-auto">
          <Link className="flex justify-center" onClick={handleNav} href="/">
            <Image src={head} alt="/" />
          </Link>
        </div>

        <div className="flex-col py-4 items-center justify-end">
          <ul>
            <Link onClick={handleNav} href="/">
              <li className="ml- text-md  uppercase hover:border-b py-2">
                About
              </li>
            </Link>

            <ul className="ml- text-md  uppercase hover:border-b py-2">
              Projects
              <Link onClick={handleNav} href="/projects/beatdriver">
                <li className="ml-2 text-sm  uppercase hover:border-b py-.5">
                  Beatdriver
                </li>
              </Link>
              <Link onClick={handleNav} href="/projects/beatdriver">
                <li className="ml-2 text-sm  uppercase hover:border-b py-.5">
                  Vinyl Shop
                </li>
              </Link>
              <Link onClick={handleNav} href="/projects/beatdriver">
                <li className="ml-2 text-sm  uppercase hover:border-b py-.5">
                  Manican
                </li>
              </Link>
            </ul>
            <ul className="ml- text-md  uppercase hover:border-b py-2">
              Art
              <Link onClick={handleNav} href="/projects/beatdriver">
                <li className="ml-2 text-sm  uppercase hover:border-b py-.5">
                  Painting
                </li>
              </Link>
              <Link onClick={handleNav} href="/projects/beatdriver">
                <li className="ml-2 text-sm  uppercase hover:border-b py-.5">
                  Video + Design
                </li>
              </Link>
              <Link onClick={handleNav} href="/projects/beatdriver">
                <li className="ml-2 text-sm  uppercase hover:border-b py-.5">
                  Misc
                </li>
              </Link>
            </ul>
          </ul>
        </div>
        <div className="flex items-center justify-between my-4 w-full sm:w-[100%]">
          <div className="rounded-full shadow-xl shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
            <FaLinkedinIn />
          </div>
          <div className="rounded-full shadow-xl shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
            <FaGithub />
          </div>
          <div className="rounded-full shadow-xl shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
            <AiOutlineMail />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
