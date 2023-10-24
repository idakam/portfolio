import React from "react";
import Image from "next/image";
import Link from "next/link";
import selfie from "../../public/assets/selfie.png";
import Project from "../components/Project";

const About = () => {
  return (
    <Project
      projectImg={selfie}
      p1={
        <p>
          Ida Kamali is a full-stack software engineer and artist with a passion
          for creating immersive and visually engaging applications. They are in
          pursuit of experiences centered around music, web design, community,
          and computational experimentation. When not coding, they are either
          listening to music, baking bread or painting.
        </p>
      }
    />
  );
};

export default About;
