import React from "react";
import Image from "next/image";
import Link from "next/link";
import Project from "../../components/Project";
import projectImg from "../../../public/assets/projects/grooveshop.png";

const VinylShop = () => {
  return (
    <Project
      type="Projects"
      title="The Groove Records"
      projectImg={projectImg}
      p1="Groove Records is an e-commerce website using the PERN stack and Material UI. It has various features for adding, increasing/decreasing, and removing items from the cart. Visitors can look through product, filter products by searching and add them to their cart. Visitors can also create an account to edit and finalize their orders. The code allows visitors a persistent cart that they can revisit and pick up Users can also view their order and purchase history as well as update their information. The code also features administrator features where if an administrator logs in, they have full rights to make backend requests to add, edit, and remove products as well as view all user information."
      p2="Using Web Audio Api and TUNAJs, an audio effects library, Beatdriver uses modular routing system to create a mixer with 4 different effects: Chorus, Phaser, Tremolo and Moog. As a user, you can also browse a Discover page showcasing all saved creations, complete with visual previews of board states."
      github="https://github.com/vinylShopFSA/vinylGraceShopper"
    />
  );
};

export default VinylShop;
