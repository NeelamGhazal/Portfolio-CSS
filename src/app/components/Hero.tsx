import React from 'react'
import Typewriter from './Typewriter'
import GlowingButton from './GlowingButton'
import Link from 'next/link'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";


const Hero = () => {
  return (
    <>
    <div id="home" className='text-white flex justify-center ml-[76rem]'>&nbsp;</div>
      <div className='hero'>

        <div className='head-text'><Typewriter /></div>

        <div className='heading3'>Determined to Shape the Future with Cutting-Edge Technology</div>
        <div className='heading4'>Mastering the Craft of Web Development</div>

        <div className='para'>
        <p>
            Hi, I’m Neelam, a passionate web developer focused on creating
            sleek, responsive, and user-friendly websites. With a keen eye for
            detail and a love for modern technology, I craft websites that
            deliver seamless experiences across all devices. My goal is to bring
            your vision to life through clean design and functional code.
          </p>
        </div>
         {/* icons */}
        <div className="main-icons btn3">
            <div className="icon1">
              <Link href="">
                <IoLogoLinkedin />
              </Link>
            </div>
            <div className="icon2">
              <Link href="">
                <FaSquareGithub />
              </Link>
            </div>
            <div className="icon3">
              <Link href="">
                <FaTwitter />
              </Link>
            </div>
            <div className="icon4">
              <Link href="">
                <FaDiscord />
              </Link>
            </div>
          </div>
        {/* icons end */}
        <div>
            <GlowingButton />
          </div>
      </div>

     
    </>
  )
}

export default Hero
