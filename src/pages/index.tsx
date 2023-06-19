import Image from "next/image";
import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Beatdriver from "./projects/beatdriver";
// import logo from "../../public/assets/logo.png"

export default function Home() {
  return (
    <div>
      <Head>
        <title>EYEDUH</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <Main />
    </div>
  );
}
