import Link from "next/link"
import {
  FaBriefcase,
  FaGraduationCap,
  FaRocket,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si"

export default function HireMePage() {
  return (
    <div className="hire-me-page">
      <h1>Hire Me</h1>

      <div className="hire-me-container">
        <section className="hire-me-section about-me">
          <h2>About Me</h2>
          <p>
            I'm a skilled developer with expertise in modern web technologies. I specialize in creating responsive,
            user-friendly web applications using the latest tools and frameworks.
          </p>
        </section>

        <section className="hire-me-section skills">
          <h2>My Skills</h2>
          <ul>
            <li>
              <FaHtml5 /> HTML
            </li>
            <li>
              <FaCss3Alt /> CSS
            </li>
            <li>
              <FaJs /> JavaScript
            </li>
            <li>
              <SiTypescript /> TypeScript
            </li>
            <li>
              <FaReact /> React.js
            </li>
            <li>
              <SiNextdotjs /> Next.js
            </li>
            <li>
              <SiTailwindcss /> Tailwind CSS
            </li>
            <li>
              <FaBootstrap /> Bootstrap
            </li>
            <li>
              <FaFigma /> Figma
            </li>
          </ul>
        </section>

        <section className="hire-me-section experience">
          <h2>Experience</h2>
          <div className="experience-item">
            <FaBriefcase />
            <div>
              <h3>Frontend Developer</h3>
              <p>Web Solutions Inc. | 2020 - Present</p>
              <ul>
                <li>Developed responsive web applications using React and Next.js</li>
                <li>Implemented designs using Tailwind CSS and Bootstrap</li>
                <li>Collaborated with designers using Figma for seamless design-to-code workflow</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="hire-me-section education">
          <h2>Education</h2>
          <div className="education-item">
            <FaGraduationCap />
            <div>
              <h3>BSc in Computer Science</h3>
              <p>Tech University | 2016 - 2020</p>
            </div>
          </div>
        </section>

        <section className="hire-me-section why-hire-me">
          <h2>Why Hire Me?</h2>
          <ul>
            <li>
              <FaRocket /> Proficient in modern frontend technologies including React, Next.js, and TypeScript
            </li>
            <li>
              <FaRocket /> Strong understanding of responsive design principles using Tailwind CSS and Bootstrap
            </li>
            <li>
              <FaRocket /> Experience with design tools like Figma for effective collaboration with design teams
            </li>
            <li>
              <FaRocket /> Committed to writing clean, maintainable, and efficient code
            </li>
          </ul>
        </section>

        <section className="hire-me-section cta">
          <h2>Ready to Work Together?</h2>
          <Link href="/contact" className="cta-button">
            Contact Me
          </Link>
        </section>
      </div>
    </div>
  )
}

