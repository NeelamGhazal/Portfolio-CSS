
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


