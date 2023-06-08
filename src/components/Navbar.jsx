import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed min-h-screen shadow-xl flex">
      <div className="flex-col justify-between items-center w-full h-full py-2 px-2 2xl:px-16">
        <Image
          src="/../public/assets/eyeduhlogo.png"
          alt="/"
          width="125"
          height="125"
        />
        <div>
          <ul>
            <Link href="/">
              <li className="ml- text-sm uppercase hover:border-b">HOME</li>
            </Link>
            <Link href="/">
              <li className="ml- text-sm uppercase hover:border-b">ABOUT</li>
            </Link>
            <Link href="/">
              <li className="ml- text-sm uppercase hover:border-b">Projects</li>
            </Link>
            <Link href="/">
              <li className="ml- text-sm uppercase hover:border-b">ART</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
