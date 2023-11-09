import React from "react";
import Project from "../../components/Project";
import projectImg from "../../../public/assets/projects/beatdriver.webp";

const Beatdriver = () => {
  return (
    <Project
      type="Projects"
      title="Beatdriver"
      projectImg={projectImg}
      p1={
        <p>
          Beatdriver is a beginner friendly music creation tool using{" "}
          <span className="font-bold">
            Next.Js, Firebase, JavaScript, React, Web Audio API
          </span>{" "}
          that can be used right in the browser. Users can create beats with
          built-in sounds and effects, upload their own samples, and save and
          record their project to share with anyone!
        </p>
      }
      p2={
        <p>
          Using Web Audio Api and TUNAJs, an audio effects library, Beatdriver
          uses modular routing system to create a mixer with 4 different
          effects: Chorus, Phaser, Tremolo and Moog. User`&apos;`s can save
          their creations and browse through the Discover page showcasing other
          user`&apos;`s saved creations.
        </p>
      }
      deployed="https://beatdriver.vercel.app"
      github="https://github.com/FC-TEAM-VISA/beatdriver"
    />
  );
};

export default Beatdriver;
