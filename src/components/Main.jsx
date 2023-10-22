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
    // <div className="flex flex-col  md:flex-row h-full">
    //   {/* <ModelViewer modelPath={"/assets/faceblend.glb"} /> */}
    //   <div className="flex justify-center md:flex-none">
    //     <Image className="h-full w-auto" src={head} alt="/" />
    //   </div>
    // <div className="bg-white bg-opacity-30 p-2 overflow-auto shadow-xl">
    // asdklfjsalkfjh asdkjfhasld sjkdfhsafmnsd ksjdkhfsakjfnsadkjhsdkjfh
    // askjhflaskjhfl askjhf skjdhfkjsdfksaf hfmhfjsdhfls dsj fs fhs hajhsf
    // kajsdh a asdklfjsalkfjh asdkjfhasld sjkdfhsafmnsd
    // ksjdkhfsakjfnsadkjhsdkjfh askjhflaskjhfl askjhf skjdhfkjsdfksaf
    // hfmhfjsdhfls dsj fs fhs hajhsf kajsdh a asdklfjsalkfjh asdkjfhasld
    // sjkdfhsafmnsd ksjdkhfsakjfnsadkjhsdkjfh askjhflaskjhfl askjhf
    // skjdhfkjsdfksaf hfmhfjsdhfls dsj fs fhs hajhsf kajsdh a sdfksaf
    // hfmhfjsdhfls dsj fs fhs hajhsf kajsdh avsdfksaf hfmhfjsdhfls dsj fs fhs
    // hajhsf kajsdh asdfksaf hfmhfjsdhfls dsj fs fhs hajhsf kajsdh asdfksaf
    // hfmhfjsdhfls dsj fs fhs hajhsf kajsdh asdfksaf hfmhfjsdhfls dsj fs fhs
    // hajhsf kajsdh a
    // </div>

    //   {/* <div className="hidden md:fixed mr-4 text-justify items-center justify-center "></div> */}
    // </div>
    <div className="flex flex-col md:flex-row h-full">
      <div className="flex justify-between flex-col mr-[5%] basis-1/3">
        <Image className="w-auto h-auto min-w-0 pb-3" src={head} alt="/" />
      </div>
      <div className=" bg-white bg-opacity-30 p-2 overflow-auto shadow-xl basis-2/3">
        asdklfjsalkfjh asdkjfhasld sjkdfhsafmnsd ksjdkhfsakjfnsadkjhsdkjfh
        askjhflaskjhfl askjhf skjdhfkjsdfksaf hfmhfjsdhfls dsj fs fhs hajhsf
        kajsdh a asdklfjsalkfjh asdkjfhasld sjkdfhsafmnsd
        ksjdkhfsakjfnsadkjhsdkjfh askjhflaskjhfl askjhf skjdhfkjsdfksaf
        hfmhfjsdhfls dsj fs fhs hajhsf kajsdh a asdklfjsalkfjh asdkjfhasld
        sjkdfhsafmnsd ksjdkhfsakjfnsadkjhsdkjfh askjhflaskjhfl askjhf
        skjdhfkjsdfksaf hfmhfjsdhfls dsj fs fhs hajhsf kajsdh a sdfksaf
        hfmhfjsdhfls dsj fs fhs hajhsf kajsdh avsdfksaf hfmhfjsdhfls dsj fs fhs
        hajhsf kajsdh asdfksaf hfmhfjsdhfls dsj fs fhs hajhsf kajsdh asdfksaf
        hfmhfjsdhfls dsj fs fhs hajhsf kajsdh asdfksaf hfmhfjsdhfls dsj fs fhs
        hajhsf kajsdh a
      </div>
    </div>
  );
};

export default Main;
