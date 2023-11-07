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
        <title>Ida Kamali</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <Project
        projectImg={head}
        p1={
          <p className="">
            Ida Kamali is a full-stack software engineer and artist with a
            passion for creating immersive and visually engaging applications.
            They are in pursuit of experiences centered around music, web
            design, community, and computational experimentation. They are
            currently working for NeighborShare as a Software Engineer and are
            currently open to work. Full cv available upon request.
            <br></br>
            <br></br>
            When not coding, they are either listening to music, baking bread or
            painting.
          </p>
        }
      />
    </>
  );
}
