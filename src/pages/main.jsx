import React from "react";
import Image from "next/image";
import Link from "next/link";
import head from "../../public/assets/face.png";

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="flex justify-between flex-col mr-[5%] basis-1/3">
        <Image className="w-auto h-auto min-w-0 pb-3" src={head} alt="/" />
      </div>
      <div className=" bg-white bg-opacity-30 p-2 flex-none overflow-auto shadow-xl basis-2/3">
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
