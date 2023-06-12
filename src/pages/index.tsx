import Image from "next/image";
import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Beatdriver from "./projects/beatdriver";

export default function Home() {
  return (
    <div>
      <Head>
        <title>EYEDUH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
}