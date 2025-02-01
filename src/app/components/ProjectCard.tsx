
import React from "react"
import Image from "next/image"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

const ProjectCard = () => {
  return (
    <div className="card">
      <div className="card-image-container">
        <Image src="/images/blog2.PNG" alt="Card Image" width={500} height={500} className="card-image" />
      </div>
      <div className="card-hover-content">
        <span>Open</span>
        <FaArrowUpRightFromSquare />
      </div> 
    </div>
  )
}

export default ProjectCard



