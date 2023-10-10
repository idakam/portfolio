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
  console.log(ModelViewer);
  return (
    <>
      {/* <ModelViewer modelPath={"/assets/faceblend.glb"} /> */}

      <div className="md:hidden flex flex-col h-full m-auto  w-full justify-center">
        <Link className="flex" href="/">
          <Image src={head} alt="/" />
        </Link>
        <h1 className="text-center uppercase"> hello </h1>
        <h1 className="text-center uppercase"> my name</h1>
        <h1 className="text-center uppercase"> is ida</h1>
        <h1 className="text-center uppercase text-red-700">(eye-duh)</h1>
      </div>

      <div className="hidden md:fixed mr-4 text-justify items-center justify-center ">
        <p className="z-0 uppercase tracking-widest text-black overflow-y-hidden sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          hello my name is ida <span className="text-red-700">(eye-duh)</span>{" "}
          and welcome to my website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website hello my name is ida{" "}
          <span className="text-red-700">(eye-duh)</span> and welcome to my
          website
        </p>
      </div>
    </>
  );
};

export default Main;
