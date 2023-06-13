import React from "react";
import Image from "next/image";
import Link from "next/link";
import selfie from "../../public/assets/selfie.png";

const About = () => {
  return (
    <div id="about" className="lg:mx-[10%] 2xl:mx-[15%]">
      <p className="uppercase text-xl tracking-widest text-red-700">About</p>
      <h1 className="py-4 uppercase">Eyeduh</h1>
      <div className="flex flex-col">
        <p className="py-2 tracking-widest">
          Ida Kamali is a full-stack software engineer with a passion for
          collaborating on and creating user-centered programs to enhance
          everyday life. I am in pursuit of experiences centered around design,
          community, and computational exploration, and am excited to
          participate in environments where I can work on innovative projects
          and cultivate my skills. In between coding, I work as a freelance
          designer.
        </p>

        <div className="w-auto h-auto m-auto rounded-xl py-4 hover:scale-105 ease-in duration-300 opacity-80">
          <Image src={selfie} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
