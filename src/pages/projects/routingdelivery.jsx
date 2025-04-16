import React from "react";
import Image from "next/image";
import Link from "next/link";
import Project from "../../components/Project";
import projectImg from "../../../public/assets/projects/routingdelivery.png";

const PoseDetection = () => {
  return (
    <Project
      type="Projects"
      title="SmartRoute"
      projectImg={projectImg}
      p1={
        <p>
        Built a command-line routing system to optimize last-mile delivery using a hybrid  <span className="font-bold">Nearest-Neighbor + 2-Opt algorithm</span>. Designed a custom hash table for efficient package lookups (O(1)) and implemented route logic that respected real-world constraints like staggered truck start times, incorrect addresses, and delivery deadlines. The algorithm delivered all packages by 11:20 AM with just 84 total miles, well under the required 140-mile threshold.
        <span className="font-bold"> Tools & Technologies:  </span> Python, Custom Data Structures, Hash Tables, Algorithm Design, CLI, Object-Oriented Programming
      
      </p>
      }
      github="https://github.com/idakam/interactiveRoom"
    />
  );
};

export default PoseDetection;
