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
    // ["About", "/about"],
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
        <AiOutlineMail />
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

  // const lastUpdate = () => {
  //   let now = new Date();
  //   const update = new Date("Oct 24, 2023 14:25:00");

  //   // To calculate the time difference of two dates
  //   let timeDifference = now.getTime() - birth.getTime();

  //   // To calculate the no. of days between two dates
  //   let dayDifference = Math.trunc(timeDifference / (1000 * 3600 * 24));
  // };

  const lastUpdate = () => {
    const now = new Date();
    const update = new Date("Oct 24, 2023 15:24:00");

    // Calculate the time difference in milliseconds
    const timeDifference = now.getTime() - update.getTime();

    // Calculate the days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 3600 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 3600 * 24)) / (1000 * 3600)
    );
    const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
    // const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Initialize an array to store the time parts
    const timeParts = [];

    if (days > 0) {
      timeParts.push(`${days} day${days === 1 ? "" : "s"}`);
    }

    if (hours > 0) {
      timeParts.push(`${hours} hour${hours === 1 ? "" : "s"}`);
    }

    if (minutes > 0) {
      timeParts.push(`${minutes} minute${minutes === 1 ? "" : "s"}`);
    }

    // if (seconds > 0) {
    //   timeParts.push(`${seconds} second${seconds === 1 ? "" : "s"}`);
    // }

    // Construct the sentence
    let sentence = "Last updated: ";

    if (timeParts.length === 1) {
      sentence += timeParts[0] + " ago.";
    } else {
      sentence += timeParts.slice(0, -1).join(", ");
      if (timeParts.length > 2) {
        sentence += ",";
      }
      sentence += ` and ${timeParts[timeParts.length - 1]} ago.`;
    }

    return sentence;
  };

  // Example usage
  const timeSinceLastUpdate = lastUpdate();
  console.log(timeSinceLastUpdate);

  return (
    <>
      <div className="hidden md:flex h-full flex-col text-xs justify-between">
        <nav className="bg-white bg-opacity-30 p-2 shadow-2xl">
          <ul className="flex flex-col uppercase py-2">
            <Link href="/">
              <li
                className={
                  router.pathname == "/"
                    ? "uppercase text-red-700 font-bold"
                    : "uppercase hover:text-red-700"
                }
              >
                Home
              </li>
            </Link>
            <br></br>
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
          {lastUpdate()}
        </div>
      </div>
      <div
        onClick={handleNav}
        className="fixed top-2 left-2 md:hidden cursor-pointer w-full"
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
              <Link href="/">
                <li
                  onClick={handleNav}
                  className={
                    router.pathname == "/"
                      ? "uppercase text-red-700 font-bold"
                      : "uppercase hover:text-red-700"
                  }
                >
                  Home
                </li>
              </Link>
              <br></br>
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
            {lastUpdate()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
