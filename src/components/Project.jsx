import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const Project = ({
  type,
  title,
  projectImg,
  projectImg2,
  p1,
  p2,
  deployed,
  github,
}) => {
  return (
    <div className="flex flex-col md:flex-row h-full justify-between">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        exit={{ opacity: 0, y: -20 }}
        className="relative flex flex-col md:mr-[5%] items-center justify-center md:w-1/2 h-auto group opacity-85"
      >
        <Image
          className={
            deployed || github
              ? "object-contain md:max-h-full  min-w-0 pb-3 md:pb-0 md:group-hover:opacity-20"
              : "object-contain md:max-h-full  min-w-0 pb-3 md:pb-0 "
          }
          src={projectImg}
          alt="/"
          priority
          sizes="100vw"
          width={600}
          height={450}
        ></Image>
        <div id="text-overlay" className="hidden md:block">
          <div className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {deployed ? (
              <a target="_blank" href={deployed} rel="noopener noreferrer">
                <p
                  target="_blank"
                  className="text-center font-bold  text-lg cursor-pointer hover:scale-105 hover:text-red-700"
                >
                  Deployed
                </p>
              </a>
            ) : null}
            {github ? (
              <a target="_blank" href={github} rel="noopener noreferrer">
                <p
                  target="_blank"
                  className="text-center font-bold text-lg cursor-pointer hover:scale-105 hover:text-red-700"
                >
                  Github
                </p>
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-white bg-opacity-30 p-2 overflow-auto shadow-xl md:w-1/2 mb-3 md:mb-0 "
      >
        {p1}
      </motion.div>
      {deployed || github ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex flex-row md:hidden bg-white bg-opacity-30 p-2 items-center justify-around"
        >
          {deployed ? (
            <a target="_blank" href={deployed} rel="noopener noreferrer">
              <p
                target="_blank"
                className="text-center font-bold text-lg cursor-pointer hover:scale-105 hover:text-red-700"
              >
                Deployed
              </p>
            </a>
          ) : null}
          {github ? (
            <a target="_blank" href={github} rel="noopener noreferrer">
              <p
                target="_blank"
                className="text-center font-bold text-lg cursor-pointer hover:scale-105 hover:text-red-700"
              >
                Github
              </p>
            </a>
          ) : null}
        </motion.div>
      ) : null}
    </div>
  );
};

export default Project;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Project = ({
//   type,
//   title,
//   projectImg,
//   projectImg2,
//   p1,
//   p2,
//   deployed,
//   github,
// }) => {
//   return (
//     <div className="flex flex-col md:flex-row h-full">
//       <div className="flex justify-center items-center w-full md:w-1/2">
//         <div className="w-48 h-48 mr-[10%] md:w-auto md:h-auto max-w-full max-h-full min-w-0 pb-3">
//           <Image
//             src={projectImg}
//             alt="/"
//             layout="responsive"
//             width={600}
//             height={600}
//             objectFit="cover"
//           />
//         </div>
//       </div>
//       <div className="bg-white bg-opacity-30 p-2 overflow-auto shadow-xl w-full md:w-1/2">
//         {p1}
//       </div>
//     </div>
//   );
// };

// export default Project;

// {
//   projectImg2 ? (
//     <Image className="w-auto h-auto min-w-0" src={projectImg2} alt="/" />
//   ) : null;
// }
