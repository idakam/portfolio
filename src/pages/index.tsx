import Image from "next/image";
import Head from "next/head";
import Beatdriver from "./projects/beatdriver";
import head from "../../public/assets/face.png";
import Project from "@/components/Project";
// import logo from "../../public/assets/logo.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>EYEDUH</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <Project
        projectImg={head}
        p1="Ida Kamali is a full-stack software engineer and artist with a passion for creating immersive and visually engaging applications. They are in pursuit of experiences centered around music, web design, community, and computational experimentation. When not coding, they are either listening to music, baking bread or painting. "
      />
    </>
  );
}
