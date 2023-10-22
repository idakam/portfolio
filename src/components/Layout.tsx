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
    <div className="fixed m-[10%] h-full">
      <div className="flex flex-row md:h-[50%]">
        <div className="md:flex md:basis-1/6">
          <Navbar />
        </div>
        <div className="flex md:ml-[5%] md:flex-row md:basis-5/6 h-full">
          <div>{children}</div>
        </div>

        {/* <div>{children}</div> */}
      </div>
    </div>
  );
};
export default Layout;
