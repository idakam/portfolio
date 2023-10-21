import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Main from "./Main";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    // <div className="flex flex-col md:flex-row overflow-hidden h-screen">
    //   <div className="w-full bg-opacity-30 md:w-[30%]">
    //     <Navbar />
    //   </div>
    //   {/* <div className="p-5 flex-1 m-auto shadow-xl bg-white bg-opacity-30 shadow-black w-full h-screen items-center overflow-y-auto"> */}
    //   <div className="p-5 flex-1 m-auto shadow-xl bg-white bg-opacity-30 shadow-black w-full h-screen items-center overflow-y-auto">
    //     {children}
    //   </div>
    // </div>
    // <div className="grid md:grid-cols-3 sm:grid-cols-1">
    //   <div className="bg-white bg-opacity-30"></div>
    //   <div className="bg-black bg-opacity-30 col-span-2">hi</div>
    // </div>
    <div className="flex flex-row justify-center items-center h-full ">
      <div className="m-auto">
        <Main />
      </div>
    </div>
  );
};
export default Layout;
