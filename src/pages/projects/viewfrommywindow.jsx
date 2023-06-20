import React from "react";
import Project from "../../components/Project";
import projectImg from "../../../public/assets/projects/viewfrommywindowyes.gif";
const ViewFromMyWindow = () => {
  return (
    <Project
      type="Projects"
      title="View From My Window"
      projectImg={projectImg}
      p1={
        <p>
          Inspired by the ambient track, View From My Window, by Hiroshi
          Yoshimura I created a web-based synthesizer and audio visualizer using
          vanilla <span className="font-bold">Javascript and P5.js</span>. I
          programmed a particle system where each particle rapidly analyzes and
          reacts to the currentt audio’s frequency and amplitude playing using
          the Fast-Fourier Transform algorirthm, whether it be from the song,
          the user’s audio or the synthesizer. The synthesizer uses P5.js’s
          oscilattor, tuned to D Major so users can play along with the song.
        </p>
      }
      github="https://github.com/FC-TEAM-VISA/beatdriver"
    />
  );
};

export default ViewFromMyWindow;
