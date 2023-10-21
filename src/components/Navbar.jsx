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

  const listOfLinks = [
    ["About", "/about"],
    ["BeatDriver", "/projects/beatdriver"],
    ["Groove Records", "/projects/grooverecords"],
    ["3D Pose Detection", "/projects/posedetection"],
    ["View From My Window", "/projects/viewfrommywindow"],
  ];

  const listOfButtons = [
    [
      <>
        <FaLinkedinIn />
      </>,
      "https://www.linkedin.com/in/ida-kam/",
    ],
    [
      <>
        <FaGithub />
      </>,
      "https://github.com/idakam",
    ],
    [
      <>
        <FaGithub />
      </>,
      "mailto:ida.kamali10@gmail.com",
    ],
  ];

  const updateTime = () => {
    let now = new Date();
    const birth = new Date("June 20, 2023 19:47:00");

    // setTimeout(() => {
    //   const millis = Date.now() - start;

    //   console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
    //   // Expected output: "seconds elapsed = 2"
    // }, 2000);

    // To calculate the time difference of two dates
    let timeDifference = now.getTime() - birth.getTime();

    // To calculate the no. of days between two dates
    let dayDifference = Math.trunc(timeDifference / (1000 * 3600 * 24));

    return dayDifference;
  };

  updateTime();
  return (
    <>
      <div className="hidden md:flex h-full flex-col text-xs justify-between">
        <nav className="bg-white bg-opacity-30 p-2 shadow-2xl">
          <ul className="flex flex-col uppercase py-2">
            {listOfLinks.map(function (link, index) {
              return (
                <Link href={link[1]} key={index}>
                  <li
                    className={
                      router.pathname == link[1]
                        ? "uppercase text-red-700 font-bold"
                        : "uppercase hover:text-red-700"
                    }
                  >
                    {link[0]}
                  </li>
                </Link>
              );
            })}
          </ul>
          <div className="flex justify-around">
            {listOfButtons.map(function (button, index) {
              return (
                <div
                  key={index}
                  className="rounded-full shadow-xl shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <a target="_blank" href={button[1]} rel="noopener noreferrer">
                    {button[0]}
                  </a>
                </div>
              );
            })}
          </div>
        </nav>
        <div className="bg-white bg-opacity-30 p-2 shadow-xl">
          This website was born <br></br>
          {updateTime()} days ago.
        </div>
      </div>
      <div
        onClick={handleNav}
        className="fixed -m-[5%] md:hidden cursor-pointer w-full"
      >
        {" "}
        <AiOutlineMenu size={40} />
      </div>
      <div
        className={
          menuOpen
            ? "fixed flex-col left-0 top-0 w-full md:hidden h-full ease-in duration-500 z-40 bg-cover bg-[url('../../public/assets/background.png')]"
            : "hidden"
        }
      >
        <div className="flex flex-col h-full py-4 px-4 text-lg justify-between">
          <div
            onClick={handleNav}
            className="fixed right-3 cursor-pointer z-40"
          >
            {""}
            <AiOutlineClose size={40} />
          </div>
          <div className="bg-white bg-opacity-30 p-2 shadow-2xl text-3xl">
            <ul className="flex flex-col uppercase py-2">
              {listOfLinks.map(function (link, index) {
                return (
                  <Link href={link[1]} key={index}>
                    <li
                      onClick={handleNav}
                      className={
                        router.pathname == link[1]
                          ? "uppercase text-red-700 font-bold py-2"
                          : "uppercase hover:text-red-700 py-2"
                      }
                    >
                      {link[0]}
                    </li>
                  </Link>
                );
              })}
            </ul>
            <div className="flex justify-around">
              {listOfButtons.map(function (button, index) {
                return (
                  <div
                    key={index}
                    className="rounded-full shadow-xl shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <a
                      target="_blank"
                      href={button[1]}
                      rel="noopener noreferrer"
                    >
                      {button[0]}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white bg-opacity-30 p-2 shadow-xl">
            This website was born <br></br>
            {updateTime()} days ago.
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
