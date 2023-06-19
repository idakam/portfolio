import React from "react";
import Project from "../../components/Project";
import projectImg from "../../../public/assets/projects/beatdriver.png";

const Beatdriver = () => {
  return (
    <Project
      type="Projects"
      title="Beatdriver"
      projectImg={projectImg}
      p1="Beatdriver is a beginner friendly music creation tool that you can use right in the browser. Users can create beats with built-in sounds and effects, upload their own samples, and save and record their project to share with anyone!"
      p2="Using Web Audio Api and TUNAJs, an audio effects library, Beatdriver uses modular routing system to create a mixer with 4 different effects: Chorus, Phaser, Tremolo and Moog. As a user, you can also browse a Discover page showcasing all saved creations, complete with visual previews of board states."
      deployed="https://beatdriver.vercel.app"
      github="https://github.com/FC-TEAM-VISA/beatdriver"
    />
  );
};

export default Beatdriver;
