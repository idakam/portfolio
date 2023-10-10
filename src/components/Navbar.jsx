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
      <div className="hidden md:flex flex-col">
        <nav className="bg-white bg-opacity-30">
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
          <div className="flex justify-around">
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
        </nav>
        <div className="bg-white bg-opacity-30">
          This website was born <br></br>
          {updateTime()} days ago.
        </div>
      </div>
    </>
  );
};

export default Navbar;
