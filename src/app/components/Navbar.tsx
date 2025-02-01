"use client";
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { AiFillHome } from "react-icons/ai"
import { IoInformationCircle } from "react-icons/io5"
import { FaBook, FaSpinner, FaComment, FaPhone } from "react-icons/fa"
import { BiSolidBriefcase } from "react-icons/bi"
import { CgGirl } from "react-icons/cg"

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")
      const href = link?.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        if (pathname === "/") {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        } else {
          router.push(`/${href}`)
        }
      }
    }

    const navbar = document.querySelector(".navbar")
    if (navbar) {
      navbar.addEventListener("click", handleClick)
    }

    return () => {
      if (navbar) {
        navbar.removeEventListener("click", handleClick)
      }
    }
  }, [router, pathname])

  return (
    <div className="sidebar">
      {/* Image */}
      <div>
        <div className="main-container">
          <div className="image btn3">
            <Image src="/images/Girl02.PNG" alt="Photo" width={500} height={500} />
          </div>
        </div>
      </div>

      {/* name  */}
      <div className="name">
        <h1>Neelam</h1>
      </div>

      <div className="line"></div>

      {/* navbarlinks   */}
      <div className="navbar">
        <Link href="/#home">
          <button className="btn">
            <span>
              <AiFillHome />
            </span>
            Home
          </button>
        </Link>
        <Link href="/#about">
          <button className="btn">
            <span>
              <IoInformationCircle />
            </span>
            About
          </button>
        </Link>
        <Link href="/#skills">
          <button className="btn">
            <span>
              <FaBook />
            </span>
            Skills
          </button>
        </Link>
        <Link href="/#currentProject">
          <button className="btn">
            <span>
              <FaSpinner />
            </span>
            Current Project
          </button>
        </Link>
        <Link href="/#projects">
          <button className="btn">
            <span>
              <BiSolidBriefcase />
            </span>
            All Projects
          </button>
        </Link>
        <Link href="/feedback">
          <button className="btn">
            <span>
              <FaComment />
            </span>
            Feedback
          </button>
        </Link>
        <Link href="/contact">
          <button className="btn">
            <span>
              <FaPhone />
            </span>
            Contact
          </button>
        </Link>
        <Link href="/hire-me">
          <button className="btn">
            <span>
              <CgGirl />
            </span>
            Hire me
          </button>
        </Link>
      </div>
      {/* navbarlinks end  */}
    </div>
  )
}

export default Navbar














// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { AiFillHome } from "react-icons/ai";
// import { IoInformationCircle } from "react-icons/io5";
// import { FaBook } from "react-icons/fa";
// import { FaSpinner } from "react-icons/fa";
// import { BiSolidBriefcase } from "react-icons/bi";
// import { FaComment } from "react-icons/fa";
// import { FaSquarePhone } from "react-icons/fa6";
// import { CgGirl } from "react-icons/cg";


// const Navbar = () => {
//   return (
//     <div className='sidebar'>
//           {/* Image */}
//         <div>
//           <div className="main-container">
//           <div className="image btn3">
//             <Image
//               src="/images/Girl02.PNG"
//               alt="Photo"
//               width={500}
//               height={500}
//             />
//             </div>
//           </div>
//          </div>
//          {/* Image  end*/}
         
//          {/* name  */}
//          <div className='name'>
//             <h1>Neelam</h1>
//          </div>
//          {/* name end */}

// <div className='line'></div>

//          {/* navbarlinks   */}
//          <div className='navbar'>
//               <Link href="#home"><button className='btn'><span><AiFillHome /></span>Home</button></Link>
//               <Link href="#about"><button className='btn'><span><IoInformationCircle /></span>About</button></Link>
//               <Link href="#skills"><button className='btn'><span><FaBook /></span>Skills</button></Link>
//               <Link href="#currentProject"><button className='btn'><span><FaSpinner /></span>Current Project</button></Link>
//               <Link href="#projects"><button className='btn'><span><BiSolidBriefcase /></span>All Projects</button></Link>
//               <Link href=""><button className='btn'><span><FaComment /></span>Feedback</button></Link>
//               <Link href="/contact"><button className='btn'><span><FaSquarePhone /></span>Contact</button></Link>
//               <Link href="/hire-me"><button className='btn'><span><CgGirl /></span>Hire me</button></Link>
          
//          </div>
//          {/* navbarlinks end  */}

//     </div>
//   )
// }

// export default Navbar
