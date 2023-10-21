import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import head from "../../public/assets/face.png";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const Navbar = () => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="hidden md:flex w-full h-screen overflow-scroll ">
        <div className="flex h-screen flex-col w-full py-4 px-4">
          <div className="flex flex-col sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-3xl px-[5%]">
            <ul>
              <Link href="/about">
                <li
                  className={
                    router.pathname == "/about"
                      ? "ml- uppercase text-red-700 font-bold"
                      : "ml- uppercase hover:text-red-700"
                  }
                >
                  About
                </li>
              </Link>
              <ul className="ml- uppercase py-2">
                <Link href="/projects/beatdriver">
                  <li
                    className={
                      router.pathname == "/projects/beatdriver"
                        ? "ml- uppercase text-red-700 font-bold"
                        : "ml- uppercase hover:text-red-700"
                    }
                  >
                    Beatdriver
                  </li>
                </Link>
                <Link href="/projects/grooverecords">
                  <li
                    className={
                      router.pathname == "/projects/grooverecords"
                        ? "ml- uppercase text-red-700 font-bold"
                        : "ml- uppercase hover:text-red-700"
                    }
                  >
                    Groove Records
                  </li>
                </Link>
                <Link href="/projects/posedetection">
                  <li
                    className={
                      router.pathname == "/projects/posedetection"
                        ? "ml- uppercase text-red-700 font-bold"
                        : "ml- uppercase hover:text-red-700"
                    }
                  >
                    3D Pose Detection
                  </li>
                </Link>
                <Link href="/projects/viewfrommywindow">
                  <li
                    className={
                      router.pathname == "/projects/viewfrommywindow"
                        ? "ml- uppercase text-red-700 font-bold"
                        : "ml- uppercase hover:text-red-700"
                    }
                  >
                    View From My Window
                  </li>
                </Link>
              </ul>
            </ul>
            <div className="flex items-center justify-around w-full">
              <div className="rounded-full shadow-xl shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ida-kam/"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="rounded-full shadow-xl shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                <a
                  target="_blank"
                  href="https://github.com/idakam"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="rounded-full shadow-xl shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                <a
                  target="_blank"
                  href="mailto:ida.kamali10@gmail.com"
                  rel="noopener noreferrer"
                >
                  <AiOutlineMail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div onClick={handleNav} className="flex md:hidden cursor-pointer w-full">
        {" "}
        <AiOutlineMenu size={40} />
      </div>
      <div
        className={
          menuOpen
            ? "fixed flex-col left-0 top-0 w-full md:hidden h-screen ease-in duration-500 z-40 bg-cover bg-[url('../../public/assets/background.png')]"
            : "hidden"
        }
      >
        <div className="flex flex-col h-screen py-4 px-4 overflow-auto text-lg">
          <div
            onClick={handleNav}
            className="fixed right-3 cursor-pointer z-40"
          >
            {""}
            <AiOutlineClose size={40} />
          </div>
          <div className="flex justify-center w-auto h-auto m-auto">
            <Link onClick={handleNav} className="" href="/">
              <Image src={head} alt="/" />
            </Link>
          </div>

          <div className="flex-1 text-5xl flex-col h-auto w-auto px-[5%]">
            <ul>
              <Link href="/about">
                <li
                  onClick={handleNav}
                  className={
                    router.pathname == "/about"
                      ? "ml- uppercase text-red-700"
                      : "ml- uppercase"
                  }
                >
                  About
                </li>
              </Link>
              <ul className="ml- uppercase py-2">
                <span className="text-3xl">Projects</span>
                <Link href="/projects/beatdriver">
                  <li
                    onClick={handleNav}
                    className={
                      router.pathname == "/projects/beatdriver"
                        ? "ml- uppercase text-red-700"
                        : "ml- uppercase"
                    }
                  >
                    Beatdriver
                  </li>
                </Link>
                <Link href="/projects/grooverecords">
                  <li
                    onClick={handleNav}
                    className={
                      router.pathname == "/projects/grooverecords"
                        ? "ml- uppercase text-red-700 font-bold"
                        : "ml- uppercase"
                    }
                  >
                    Groove Records
                  </li>
                </Link>
                <Link href="/projects/posedetection">
                  <li
                    onClick={handleNav}
                    className={
                      router.pathname == "/projects/posedetection"
                        ? "ml- uppercase text-red-700 font-bold"
                        : "ml- uppercase"
                    }
                  >
                    3D Pose Detection
                  </li>
                </Link>
                <Link onClick={handleNav} href="/projects/viewfrommywindow">
                  <li
                    className={
                      router.pathname == "/projects/viewfrommywindow"
                        ? "ml- uppercase text-red-700 font-bold"
                        : "ml- uppercase"
                    }
                  >
                    View From My Window
                  </li>
                </Link>
              </ul>
              <ul className="ml- uppercase py-2">
                <span className="text-3xl">MISC</span>
                <Link href="/misc/painting">
                  <li
                    onClick={handleNav}
                    className={
                      router.pathname == "/misc/painting"
                        ? "ml- uppercase text-red-700 font-bold"
                        : "ml- uppercase"
                    }
                  >
                    Painting
                  </li>
                </Link>
                <Link onClick={handleNav} href="/misc/design">
                  <li
                    className={
                      router.pathname == "/misc/design"
                        ? "ml- uppercase text-red-700 font-bold"
                        : "ml- uppercase"
                    }
                  >
                    Video + Design
                  </li>
                </Link>
              </ul>
            </ul>
            <div className="flex items-center justify-around w-full">
              <div className="rounded-full shadow-xl shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ida-kam/"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
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
      </div>
    </>
  );
};

export default Navbar;
