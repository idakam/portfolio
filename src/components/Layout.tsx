import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Main from "./Main";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="fixed h-full mr-[10%] ml-[10%] flex items-center justify-center">
      <div id="main" className="flex flex-row md:h-[50%] h-[80%]">
        <div className="md:flex md:w-1/6">
          <Navbar />
        </div>
        <div className="flex md:ml-[5%] md:flex-row md:w-5/6 h-full">
          <div>{children}</div>
        </div>

        {/* <div>{children}</div> */}
      </div>
    </div>
  );
};
export default Layout;
