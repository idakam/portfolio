import Image from "next/image";
import Head from "next/head";
import Beatdriver from "./projects/beatdriver";
import head from "../../public/assets/face.png";
// import logo from "../../public/assets/logo.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>EYEDUH</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex justify-between flex-col mr-[5%] basis-1/3">
          <Image className="w-auto h-auto min-w-0 pb-3" src={head} alt="/" />
        </div>
        <div className=" bg-white bg-opacity-30 p-2 overflow-auto shadow-xl basis-2/3">
          Ida Kamali is a full-stack software engineer and artist with a passion
          for creating immersive and visually engaging applications. They are in
          pursuit of experiences centered around music, web design, community,
          and computational experimentation. When not coding, they are either
          listening to music, baking bread or painting. Ida Kamali is a
          full-stack software engineer and artist with a passion for creating
          immersive and visually engaging applications. They are in pursuit of
          experiences centered around music, web design, community, and
          computational experimentation. When not coding, they are either
          listening to music, baking bread or painting. Ida Kamali is a
          full-stack software engineer and artist with a passion for creating
          immersive and visually engaging applications. They are in pursuit of
          experiences centered around music, web design, community, and
          computational experimentation. When not coding, they are either
          listening to music, baking bread or painting.Ida Kamali is a
          full-stack software engineer and artist with a passion for creating
          immersive and visually engaging applications. They are in pursuit of
          experiences centered around music, web design, community, and
          computational experimentation. When not coding, they are either
          listening to music, baking bread or painting. Ida Kamali is a
          full-stack software engineer and artist with a passion for creating
          immersive and visually engaging applications. They are in pursuit of
          experiences centered around music, web design, community, and
          computational experimentation. When not coding, they are either
          listening to music, baking bread or painting. Ida Kamali is a
          full-stack software engineer and artist with a passion for creating
          immersive and visually engaging applications. They are in pursuit of
          experiences centered around music, web design, community, and
          computational experimentation. When not coding, they are either
          listening to music, baking bread or painting.
        </div>
      </div>
    </>
  );
}
