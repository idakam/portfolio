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
      p1={
        <p>
          Groove Records is an RESTful e-commerce website using {""}
          <span className="font-bold">
            React, PostgreSQL, Node.Js, Express and Material UI
          </span>
          . Visitors can look through the product inventory, filter products by
          searching and add them to their cart.
        </p>
      }
      p2={
        <p>
          Visitors can also create an account to edit and finalize their orders
          through token-based authentication and password-hashing via
          JSON-web-token. Administrator accounts can update product inventory
          and access user data though gatekeeping middleware.
        </p>
      }
      github="https://github.com/vinylShopFSA/vinylGraceShopper"
    />
  );
};

export default VinylShop;
