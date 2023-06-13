import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/eyeduhlogo.png";

const Beatdriver = () => {
  return (
    <div id="about" className="">
      <div className="gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#0e1f26] ">
            Projects
          </p>
          <h1 className="py-4 uppercase">Beatdriver</h1>
          <div>
            <p className="py-2  tracking-widest">
              I specialize in building mobile responsive front-end UI
              applications that connect with API’s and other backend
              technologies. I’m passionate about learning new technologies and
              understand there is more than one way to accomplish a task. Though
              I am most proficient in building front-end applications using
              HTML, CSS, Javascript, and React, I am a quick learner and can
              pick up new tech stacks as needed. I believe that being a great
              developer is not using one specific language, but choosing the
              best tool for the job.
            </p>
            <p className="py-2  tracking-widest">
              I started web developement in 2013 managing multiple e-commerce
              websites on CMS platforms such as WordPress, BigCommerce, and
              Shopify. I have experience working directly with clients and
              taking mock wireframes all the way to deployed applications. In my
              spare time I run Code Commerce, a Youtube channel where I teach
              web developement and various front-end technologies.
            </p>
            <Link href="/#projects">
              <p className="py-2 text-gray-600 underline cursor-pointer">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
        </div>
        <div className="w-auto h-auto m-auto rounded-xl flex items-center justify-center py-4 hover:scale-105 ease-in duration-300">
          <Image src={logo} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Beatdriver;
