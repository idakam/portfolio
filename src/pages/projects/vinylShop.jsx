import React from "react";
import Image from "next/image";
import Link from "next/link";
import projectImg from "../../../public/assets/projects/beatdriver.png";

const vinylShop = () => {
  return (
    <div id="about" className="lg:mx-[10%] 2xl:mx-[15%]">
      <div className="gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-red-700 ">
            Projects
          </p>
          <h1 className="py-4 uppercase">Groove Records</h1>
          <div className="flex flex-col">
            <p className="py-2  tracking-widest">
              Groove Records is an e-commerce website using the PERN stack and
              Material UI. It has various features for adding,
              increasing/decreasing, and removing items from the cart. Visitors
              can look through product, filter products by searching and add
              them to their cart. Visitors can also create an account to edit
              and finalize their orders. The code allows visitors a persistent
              cart that they can revisit and pick up Users can also view their
              order and purchase history as well as update their information.
              The code also features administrator features where if an
              administrator logs in, they have full rights to make backend
              requests to add, edit, and remove products as well as view all
              user information.
            </p>
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group opacity-80 hover:bg-gradient-to-r from-[#0b316e] to-[#3d69e4]">
              <Image
                className="rounded-xl group-hover:opacity-10"
                src={projectImg}
                alt="/"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                {/* <Link href="https://beatdriver.vercel.app/">
                  <p className="text-center py-3 text-white font-bold text-lg cursor-pointer hover:scale-105">
                    Deployed
                  </p>
                </Link> */}
                <Link href="https://github.com/vinylShopFSA/vinylGraceShopper">
                  <p className="text-center py-3 text-white font-bold text-lg cursor-pointer hover:scale-105">
                    Github
                  </p>
                </Link>
              </div>
            </div>

            <p className="py-2  tracking-widest">
              Using gatekeeping middleware functions, all user data is secured
              to that no one can unrightfully manipulate information through
              route protection. The visitor cart implements the window&apos;s
              local storage in order to maintain a guest cart where the data can
              only be read on the client side.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default vinylShop;
