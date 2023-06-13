import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden h-screen">
      <div className="w-full bg-opacity-30 md:w-[30%] z-40 ">
        <Navbar />
      </div>
      <div className="p-5 flex-1 m-auto shadow-xl bg-white bg-opacity-30 shadow-black w-full h-screen items-center overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
export default Layout;
