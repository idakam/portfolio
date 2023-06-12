import React from "react";
import Image from "next/image";
import Link from "next/link";
import selfie from "../../public/assets/selfie.png";

const Beatdriver = () => {
  return (
    <div id="about" className="">
      <div className="gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#0e1f26]">
            About
          </p>
          <h1 className="py-4 uppercase">Eyeduh</h1>
          <div className="flex flex-col">
            <p className="py-2 tracking-widest ">
              Ida Kamali is a full-stack software engineer with a passion for
              collaborating on and creating user-centered programs to enhance
              everyday life. I am in pursuit of experiences centered around
              design, community, and computational exploration, and am excited
              to participate in environments where I can work on innovative
              projects and cultivate my skills. In between coding, I work as a
              freelance designer. I have experience working in various
              collaborative environments as a graphic and production designer.
              The world of freelance designing has allowed me to work with
              people to make their creative visions become realities. With a
              background in design and social media, a lot of my past experience
              has been about user experience.
            </p>

            <div className="w-auto h-auto m-auto rounded-xl  py-4 hover:scale-105 ease-in duration-300">
              <Image src={selfie} className="rounded-xl" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beatdriver;
