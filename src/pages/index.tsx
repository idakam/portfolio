import Image from "next/image";
import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Beatdriver from "../components/Beatdriver";

export default function Home() {
  return (
    <div>
      <Head>
        <title>EYEDUH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <Main />
      <Beatdriver />
    </div>
  );
}
