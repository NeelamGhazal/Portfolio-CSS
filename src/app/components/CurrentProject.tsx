// import React from "react";
// import Image from "next/image";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import Card from "./Card";

// const CurrentProject = () => {
//   return (
//     <>
//       <div className="currentmain">
//         <div className="containercurrent">
//           <div className="currenthead">
//             <h1>CurrentProject</h1>
//           </div>

//           <div className="currentpara">
//             <div className="curpara1">
//               <h1>Toy Heaven Website</h1>
//               {/* <p>This website is built using HTML, CSS, and TypeScript. It features a navigation bar, slide banner, and cards that showcase different toys. The goal of this project was to create a clean, simple, and user-friendly interface where visitors can easily explore various toy options. The slide banner adds a dynamic visual element, while the cards provide an organized display of toy information.</p> */}
//               <p>
//                 This website is created using HTML, CSS, and TypeScript, with a
//                 focus on delivering a clean and intuitive user experience. The
//                 design includes a navigation bar for easy access to different
//                 sections of the site, a dynamic slide banner to showcase
//                 featured toys, and cards that display detailed information about
//                 each toy.
//                 <br />
//                 The main goal of this project was to provide a simple yet
//                 engaging platform for users to explore various toy options. The
//                 slide banner adds a touch of interactivity, making the website
//                 visually appealing, while the cards present the toys in an
//                 organized and easy-to-navigate manner. Whether users are
//                 browsing for information or making a choice, the interface
//                 ensures a seamless and enjoyable experience.
//               </p>
//             </div>
//             <div>
//               {" "}
//               <Card />{" "}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CurrentProject;



"use client";

import React from "react"
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const CurrentProject = () => {
  return (
    <div className="currentmain">
      <div className="containercurrent">
        <div className="currenthead">
          <h1>CurrentProject</h1>
        </div>

        <div className="currentpara">
          <div className="curpara1">
            <h1>Blog Website</h1>
            <p>
              This website is built using Next.js, Tailwind CSS, HTML, and TypeScript to create a modern, fast, and
              visually appealing user experience. The design features a colorful navigation bar for easy access to
              different sections of the blog, a lively and interactive slide banner to highlight exciting content, and
              playful cards that present detailed articles, activities, and fun ideas for kids.
              <br />
              The primary goal of this project is to offer a creative and user-friendly platform for kids and parents to
              explore engaging activities, learn new things, and find inspiration. The use of Tailwind CSS ensures a
              clean, responsive, and customizable design, while Next.js guarantees fast performance and smooth
              navigation. Whether you're browsing for craft ideas, fun facts, or interactive games, this website
              promises an enjoyable and seamless experience for everyone!
            </p>
          </div>
          <div className="card-container">
            <Link
              href="https://kids-blog-web-ng7.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <ProjectCard />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentProject










// import React from "react"
// import Card from "./Card"
// import Link from "next/link"

// const CurrentProject = () => {
//   return (
//     <div className="currentmain">
//       <div className="containercurrent">
//         <div className="currenthead">
//           <h1>CurrentProject</h1>
//         </div>

//         <div className="currentpara">
//           <div className="curpara1">
//             <h1>Blog Website</h1>
//             <p>
//             This website is built using Next.js, Tailwind CSS, HTML, and TypeScript to create a modern, fast, and visually appealing user experience. The design features a colorful navigation bar for easy access to different sections of the blog, a lively and interactive slide banner to highlight exciting content, and playful cards that present detailed articles, activities, and fun ideas for kids.

// <br />
// The primary goal of this project is to offer a creative and user-friendly platform for kids and parents to explore engaging activities, learn new things, and find inspiration. The use of Tailwind CSS ensures a clean, responsive, and customizable design, while Next.js guarantees fast performance and smooth navigation. Whether you're browsing for craft ideas, fun facts, or interactive games, this website promises an enjoyable and seamless experience for everyone!

// </p>
//           </div>
//           <div className="card-container">
//           <Link href="https://kids-blog-web-ng7.vercel.app/">
//             <Card />
//           </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CurrentProject




{
  /* <div className="curimg">
  <Image
    src="/images/my-web.PNG" // Ensure the image path is correct
    alt="Photo"
    width={500}
    height={500}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</div>; */
}

{
  /* 
<div className="hover-content">
        <span>Open</span>
        <FaArrowUpRightFromSquare className="icon" />
      </div> */
}

{
  /* <div className="hover-box">
    <span className="hover-text">Open</span>
    <div className="hover-icon">
      <FaArrowUpRightFromSquare />
    </div>
  </div> */
}

// .curimg {
//   background-color: #000000;
//   position: relative;
//   width: 95%;
//   height: 75%;
//   border-radius: 2px;
//   overflow: hidden;
// }

// .curimg img {
//   width: 100%;
//   height: 100%;
//   display: block;
//   cursor: pointer;
//    opacity: 0.7;
//    transition: opacity 0.3s;
// }

// .curimg:hover img {
//   opacity: 1;
// }

// .hover-box{
//   /* background-color: #f20089; */
// position: absolute;
//  bottom: 0;
//  left: 50%;
//  transform: translateX(-50%);
//  background-color: #f2f2f2;
//  width: 50px;
//  height: 50px;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  border-radius: 2px;
//  opacity: 0;
//  transition: opacity 0.3s; /* add transition effect */
// }

// .curimg:hover .hover-box {
//  opacity: 1; /* show hover box on hover */
// }

// .hover-text {
//  font-size: 14px;
//  color: #333;
//  margin-right: 5px;
// }

// .hover-icon {
//  font-size: 18px;
//  color: #333;
// }
