import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = ({ type, title, projectImg, p1, p2, deployed, github }) => {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="flex justify-between flex-col mr-[5%] basis-1/3">
        <Image
          className="w-auto h-auto min-w-0 pb-3"
          src={projectImg}
          alt="/"
        />
        {p2 ? (
          <Image className="w-auto h-auto min-w-0" src={projectImg} alt="/" />
        ) : null}
      </div>
      <div className=" bg-white bg-opacity-30 p-2 overflow-auto shadow-xl basis-2/3">
        {p1}
      </div>
    </div>
  );
};

export default Project;
