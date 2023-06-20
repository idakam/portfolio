import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = ({ type, title, projectImg, p1, p2, deployed, github }) => {
  return (
    <div id="about" className="lg:mx-[10%] 2xl:mx-[15%]">
      <div className="gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-red-700 ">
            {type}
          </p>
          <h1 className="py-4 uppercase">{title}</h1>
          <div className="flex flex-col">
            <div className="py-2  tracking-widest">{p1}</div>
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group opacity-85 hover:bg-gradient-to-r from-[#0b316e] to-[#3d69e4]">
              <Image
                className="rounded-xl group-hover:opacity-10"
                src={projectImg}
                alt="/"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                {deployed ? (
                  <a target="_blank" href={deployed} rel="noopener noreferrer">
                    <p
                      target="_blank"
                      className="text-center py-3 text-white font-bold text-lg cursor-pointer hover:scale-105"
                    >
                      Deployed
                    </p>
                  </a>
                ) : null}
                <a target="_blank" href={github} rel="noopener noreferrer">
                  <p
                    target="_blank"
                    className="text-center py-3 text-white font-bold text-lg cursor-pointer hover:scale-105"
                  >
                    Github
                  </p>
                </a>
              </div>
            </div>
            {p2 ? <p className="py-2  tracking-widest">{p2}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
