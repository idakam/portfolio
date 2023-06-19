import React from "react";
import Image from "next/image";
import Link from "next/link";
import Project from "../../components/Project";
import projectImg from "../../../public/assets/projects/interactive.png";

const PoseDetection = () => {
  return (
    <Project
      type="Projects"
      title="3D Pose Detection"
      projectImg={projectImg}
      p1="Coming soon.."
      github="https://github.com/idakam/interactiveRoom"
    />
  );
};

export default PoseDetection;
