import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <div className="w-full md:w-60">
          <Navbar />
        </div>
        <div className="p-10 flex-1 ">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
