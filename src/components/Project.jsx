import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex flex-col md:flex-row h-full">
      <div className="flex flex-col md:mr-[5%] justify-center md:w-1/2">
        <Image
          className="object-contain  md:max-h-full min-w-0 pb-3 md:pb-0"
          src={projectImg}
          alt="/"
        />
      </div>
      <div className="bg-white bg-opacity-30 p-2 overflow-auto shadow-xl md:w-1/2 h-1/2s">
        {p1}
      </div>
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
