import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import head from "../../public/assets/face.png";
// import ModelViewer from "../components/Three/ModelViewer";
const ModelViewer = dynamic(import("../components/Three/ModelViewer"), {
  ssr: false,
});

const Main = () => {
  return (
    <div className="flex flex-col items-center">
      {/* <ModelViewer modelPath={"/assets/faceblend.glb"} /> */}
      <div className="flex justify-center">
        <Image className="h-full w-auto" src={head} alt="/" />
      </div>
      <div className="bg-white bg-opacity-30 p-2 overflow-auto shadow-xl">
        Be back shortly...
      </div>

      {/* <div className="hidden md:fixed mr-4 text-justify items-center justify-center "></div> */}
    </div>
  );
};

export default Main;
