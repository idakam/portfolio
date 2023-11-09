import React from "react";
import Image from "next/image";
import Link from "next/link";
import Project from "../../components/Project";
import projectImg from "../../../public/assets/projects/interactive.webp";

const PoseDetection = () => {
  return (
    <Project
      type="Projects"
      title="3D Pose Detection"
      projectImg={projectImg}
      p1={
        <p>
          An experimentation and exploration within the realm of human-computer
          interaction. Using{" "}
          <span className="font-bold">
            Three.Js, Tensorflow.Js, and BlazePose, p5.JS
          </span>
          , I created an interactive interface where elements of the room change
          in real-time based on a user’s body positions through webcam video
          capture. In order to render web-based GUIs, I created a 3D model in
          Blender and imported it into Three.Js to render web-based GUI assets.
        </p>
      }
      github="https://github.com/idakam/interactiveRoom"
    />
  );
};

export default PoseDetection;
