import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <div className="w-full bg-opacity-30 md:w-[30%]">
          <Navbar />
        </div>
        <div className="p-5 m-auto flex-1 shadow-xl shadow-black w-full  h-full flex items-center">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Layout;
