import React from "react";
import Image from "next/image";
import Link from "next/link";
import projectImg from "../../../public/assets/projects/beatdriver.png";

const Beatdriver = () => {
  return (
    <div id="about" className="lg:mx-[10%] 2xl:mx-[15%]">
      <div className="gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-red-700 ">
            Projects
          </p>
          <h1 className="py-4 uppercase">Beatdriver</h1>
          <div className="flex flex-col">
            <p className="py-2  tracking-widest">
              Beatdriver is a beginner friendly music creation tool that you can
              use right in the browser. Users can create beats with built-in
              sounds and effects, upload their own samples, and save and record
              their project to share with anyone!
            </p>
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group opacity-80 hover:bg-gradient-to-r from-[#0b316e] to-[#3d69e4]">
              <Image
                className="rounded-xl group-hover:opacity-10"
                src={projectImg}
                alt="/"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <Link href="www.beatdriver.vercel.com">
                  <p className="text-center py-3 text-white font-bold text-lg cursor-pointer hover:scale-105">
                    Deployed
                  </p>
                </Link>
                <Link href="www.beatdriver.vercel.com">
                  <p className="text-center py-3 text-white font-bold text-lg cursor-pointer hover:scale-105">
                    Github
                  </p>
                </Link>
              </div>
            </div>

            <p className="py-2  tracking-widest">
              Using Web Audio Api and TUNAJs, an audio effects library,
              Beatdriver uses modular routing system to create a mixer with 4
              different effects: Chorus, Phaser, Tremolo and Moog. As a user,
              you can also browse a Discover page showcasing all saved
              creations, complete with visual previews of board states.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beatdriver;
