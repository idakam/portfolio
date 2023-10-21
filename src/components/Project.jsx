import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = ({ type, title, projectImg, p1, p2, deployed, github }) => {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="flex justify-between flex-col pr-3">
        <Image
          className="w-auto h-auto min-w-0 pb-3"
          src={projectImg}
          alt="/"
        />
        <Image className="w-auto h-auto min-w-0" src={projectImg} alt="/" />
      </div>
      <div className=" bg-white bg-opacity-30 p-2 overflow-auto shadow-xl">
        {p1}
      </div>
    </div>
  );
};

export default Project;
