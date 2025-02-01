
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import CurrentProject from "./components/CurrentProject";
import CardGrid from "./components/CardGrid";


export default function Home() {
  return (
   <>

{/* 1stbg */}<div id="home"></div>
<div className="wrapper_outer">
  <div className="wrapper">
    <div className="parallax_section">
      <div
        className="parallax_bg"
        style={{
          
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/screen.png",
          
        }}
      >
<Hero />

      </div>
    </div>
  </div>
</div>
{/* 1stbg end*/}


{/* 2ndtbg */}
<div id="about"></div>
<div className="wrapper_outer">
  <div className="wrapper">
    <div className="parallax_section">
      <div
        className="parallax_bg"
        style={{
          
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/images/about.png",
  
          
        }}
      >

<About />

      </div>
    </div>
  </div>
</div>
{/* 2ndtbg end*/}

{/* 3hrdtbg */}
<div id="skills"> </div>  
<div className="wrapper_outer">
  <div className="wrapper">
    <div className="parallax_section">
      <div
        className="parallax_bg"
        style={{
          
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url('/images/key.webp",
          
        }}
      >
<Skills />

      </div>
    </div>
  </div>
</div>
{/* 3hrdtbg end*/}


{/* 4rthbg */}
<div id="currentProject"> </div>  
<div className="wrapper_outer">
  <div className="wrapper">
    <div className="parallax_section">
      <div
        className="parallax_bg"
        style={{
          
          // backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url('/images/AI-machine-learning.jpeg",
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url('/images/aigirl3.jpg",
          
        }}
      >

<CurrentProject />

      </div>
    </div>
  </div>
</div>
{/* 4rthbg end*/}

{/* 5thbg */}
<div id="projects"> </div>  
<div className="wrapper_outer">
  <div className="wrapper">
    <div className="parallax_section">
      <div
        className="parallax_bg"
        style={{
          
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url('/images/brain.png",
          
        }}
      >

<CardGrid />

      </div>
    </div>
  </div>
</div>
{/* 5thbg end*/}


   </>
  );
}








// import Image from "next/image";
// import Hero from "./components/Hero";
// import Skills from "./components/Skills";
// import About from "./components/About";
// import CurrentProject from "./components/CurrentProject";
// import Card from "./components/ProjectCard";
// import CardGrid from "./components/CardGrid";


// export default function Home() {
//   return (
//    <>

// {/* 1stbg */}<div id="home"></div>
// <div className="wrapper_outer">
//   <div className="wrapper">
//     <div className="parallax_section">
//       <div
//         className="parallax_bg"
//         style={{
          
//           backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/screen.png",
          
//         }}
//       >
// <Hero />

//       </div>
//     </div>
//   </div>
// </div>
// {/* 1stbg end*/}


// {/* 2ndtbg */}
// <div id="about"></div>
// <div className="wrapper_outer">
//   <div className="wrapper">
//     <div className="parallax_section">
//       <div
//         className="parallax_bg"
//         style={{
          
//           backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/images/about.png",
  
          
//         }}
//       >

// <About />

//       </div>
//     </div>
//   </div>
// </div>
// {/* 2ndtbg end*/}

// {/* 3hrdtbg */}
// <div id="skills"> </div>  
// <div className="wrapper_outer">
//   <div className="wrapper">
//     <div className="parallax_section">
//       <div
//         className="parallax_bg"
//         style={{
          
//           backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url('/images/key.webp",
          
//         }}
//       >
// <Skills />

//       </div>
//     </div>
//   </div>
// </div>
// {/* 3hrdtbg end*/}


// {/* 4rthbg */}
// <div id="currentProject"> </div>  
// <div className="wrapper_outer">
//   <div className="wrapper">
//     <div className="parallax_section">
//       <div
//         className="parallax_bg"
//         style={{
          
//           // backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url('/images/AI-machine-learning.jpeg",
//           backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url('/images/aigirl3.jpg",
          
//         }}
//       >

// <CurrentProject />

//       </div>
//     </div>
//   </div>
// </div>
// {/* 4rthbg end*/}

// {/* 5thbg */}
// <div id="projects"> </div>  
// <div className="wrapper_outer">
//   <div className="wrapper">
//     <div className="parallax_section">
//       <div
//         className="parallax_bg"
//         style={{
          
//           backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url('/images/brain.png",
          
//         }}
//       >

// <CardGrid />

//       </div>
//     </div>
//   </div>
// </div>
// {/* 5thbg end*/}


//    </>
//   );
// }




