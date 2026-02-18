import React from "react";
import FloatingGrid from "../../components/FloatingGrid";
// import image from "../../../public"
const paintings = [
  {
    image: "/assets/paintings/bathroom.JPG",
    description: "Sunflower bloom, 2024"
  },
  {
    image: "/assets/paintings/Breakfast.JPG",
    description: "Moonlight over water, 2023"
  },
  {
    image: "/assets/paintings/chair.jpg",
    description: "Untitled abstract, 2025"
  },
  {
    image: "/assets/paintings/chess.jpg",
    description: "Untitled abstract, 2025"
  },
  {
    image: "/assets/paintings/dots.png",
    description: "Untitled abstract, 2025"
  },
  {
    image: "/assets/paintings/drawing.png",
    description: "Untitled abstract, 2025"
  },
  {
    image: "/assets/paintings/pool.png",
    description: "Untitled abstract, 2025"
  },
  {
    image: "/assets/paintings/stool.jpg",
    description: "Untitled abstract, 2025"
  },

];

const GalleryPage = () => {
  return (
      // <FloatingGrid items={paintings} />
      <div className="flex flex-col md:flex-row h-full justify-between"></div>
  );
};

export default GalleryPage;
