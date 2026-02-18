import Image from "next/image";
import Head from "next/head";
import Beatdriver from "./projects/beatdriver";
import head from "../../public/assets/face.png";
import Project from "../components/Project";
// import logo from "../../public/assets/logo.png"
import ModelViewer from "../components/Three/ModelViewer";



export default function Home() {
  return (
    <>
      <Head>
        <title>Ida Kamali</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      {/* <ModelViewer modelPath={"/assets/faceblend.glb"} /> */}

      <Project
        type="Home"
        title="Home"
        projectImg={   <div style={{ width: 400, height: 400 }}>
      <ModelViewer />
    </div>}
        p1={
          <p className="">
            Ida Kamali is a web developer and designer with a passion for creating immersive, accessible, and visually engaging applications. They are driven by a curiosity for computational experimentation and a desire to build tools that streamline workflows, increase engagement, and make everyday experiences easier. Ida is currently open to work. Full CV available upon request.

            <br></br>
            <br></br>
            When not coding, they are baking bread, surfing wikipedia or
            painting.
          </p>
        }
      />
    </>
  );
}