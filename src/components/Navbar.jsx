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
      <nav className="hidden md:flex fixed min-h-screen w-[30%]">
        <div className="flex-col w-full h-full py-4 px-4">
          <div className="w-auto h-auto m-auto">
            <Link className="flex justify-normal" href="/">
              <Image src={head} alt="/" />
            </Link>
          </div>

          <div className="flex-col py-4 items-center justify-end">
            <ul>
              <Link href="/about">
                <li className="ml- md:text-[4px] lg:text-xl 2xl:text-[40px] uppercase hover:border-b py-4">
                  About
                </li>
              </Link>
              <ul className="ml- 2xl:text-[40px] uppercase py-2">
                Projects
                <Link href="/projects/beatdriver">
                  <li className="ml-2 2xl:text-[25px] uppercase hover:border-b py-.5">
                    Beatdriver
                  </li>
                </Link>
                <Link href="/projects/beatdriver">
                  <li className="ml-2 2xl:text-[25px] uppercase hover:border-b py-.5">
                    Vinyl Shop
                  </li>
                </Link>
                <Link href="/projects/beatdriver">
                  <li className="ml-2 2xl:text-[25px] uppercase hover:border-b py-.5">
                    Manican
                  </li>
                </Link>
              </ul>

              <ul className="ml- 2xl:text-[40px]  uppercase py-2">
                Art
                <Link href="/projects/beatdriver">
                  <li className="ml-2 2xl:text-[25px]  uppercase hover:border-b py-.5">
                    Painting
                  </li>
                </Link>
                <Link href="/projects/beatdriver">
                  <li className="ml-2 2xl:text-[25px]  uppercase hover:border-b py-.5">
                    Video + Design
                  </li>
                </Link>
                <Link href="/projects/beatdriver">
                  <li className="ml-2 2xl:text-[25px]  uppercase hover:border-b py-.5">
                    Misc
                  </li>
                </Link>
              </ul>
            </ul>
          </div>
          <div className="flex items-center justify-around w-full sm:w-[80%]">
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
      </nav>
      <div
        onClick={handleNav}
        className="fixed md:hidden cursor-pointer w-full"
      >
        {" "}
        <AiOutlineMenu size={40} />
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[90%] md:hidden h-screen shadow-xl bg-slate-100 p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer ">
            <AiOutlineClose size={40} />
          </div>
        </div>
        <div className="max-w-[400px] h-auto m-auto">
          <Link className="flex justify-center" onClick={handleNav} href="/">
            <Image src={logo} alt="/" />
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
        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
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
