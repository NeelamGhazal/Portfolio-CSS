import Link from "next/link"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1 className="contact-page__title">Get in Touch</h1>

      <div className="contact-container">
        {/* Send Message Section */}
        <div className="contact-section contact-form">
          <h2 className="contact-section__title">Send a Message</h2>
          <form>
            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="name">
                Name
              </label>
              <input className="contact-form__input" id="name" type="text" required />
            </div>
            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="email">
                Email
              </label>
              <input className="contact-form__input" id="email" type="email" required />
            </div>
            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="message">
                Message
              </label>
              <textarea className="contact-form__textarea" id="message" required></textarea>
            </div>
            <button className="contact-form__button" type="submit">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="contact-section contact-info">
          <h2 className="contact-section__title">Contact Information</h2>
          <div className="contact-info__item">
            <FaEnvelope />
            <span>your.email@example.com</span>
          </div>
          <div className="contact-info__item">
            <FaPhone />
            <span>+1 (123) 456-7890</span>
          </div>
          <div className="contact-info__item">
            <FaMapMarkerAlt />
            <span>City, Country</span>
          </div>
        </div>

        {/* Connect with Me Section */}
        <div className="contact-section connect-section">
          <h2 className="contact-section__title">Connect with Me</h2>
          <div className="contact-social-links">
            <Link href="#" aria-label="GitHub" className="contact-social-links__link">
              <FaGithub />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="contact-social-links__link">
              <FaLinkedin />
            </Link>
            <Link href="#" aria-label="Twitter" className="contact-social-links__link">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}




// import Link from "next/link"
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

// export default function ContactPage() {
//   return (
//     <div className="contact-page">
//       <h1>Get in Touch</h1>

//       <div className="contact-container">
//         {/* Send Message Section */}
//         <div className="contact-section contact-form">
//           <h2>Send a Message</h2>
//           <form>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input id="name" type="text" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input id="email" type="email" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea id="message" required></textarea>
//             </div>
//             <button type="submit">Send Message</button>
//           </form>
//         </div>

//         {/* Contact Information Section */}
//         <div className="contact-section contact-info">
//           <h2>Contact Information</h2>
//           <div className="info-item">
//             <FaEnvelope />
//             <span>your.email@example.com</span>
//           </div>
//           <div className="info-item">
//             <FaPhone />
//             <span>+1 (123) 456-7890</span>
//           </div>
//           <div className="info-item">
//             <FaMapMarkerAlt />
//             <span>City, Country</span>
//           </div>
//         </div>

//         {/* Connect with Me Section */}
//         <div className="contact-section connect-section">
//           <h2>Connect with Me</h2>
//           <div className="social-links">
//             <Link href="#" aria-label="GitHub">
//               <FaGithub />
//             </Link>
//             <Link href="#" aria-label="LinkedIn">
//               <FaLinkedin />
//             </Link>
//             <Link href="#" aria-label="Twitter">
//               <FaTwitter />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }








// import Link from "next/link"
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

// export default function ContactPage() {
//   return (
//     <div className="contact-page">
//       <h1>Get in Touch</h1>

//       <div className="contact-container">
//         {/* Send Message Section */}
//         <div className="contact-form">
//           <h2>Send a Message</h2>
//           <form>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input id="name" type="text" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input id="email" type="email" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea id="message" required></textarea>
//             </div>
//             <button type="submit">Send Message</button>
//           </form>
//         </div>

//         {/* Contact Information Section */}
//         <div className="contact-info">
//           <h2>Contact Information</h2>
//           <div className="info-item">
//             <FaEnvelope />
//             <span>your.email@example.com</span>
//           </div>
//           <div className="info-item">
//             <FaPhone />
//             <span>+1 (123) 456-7890</span>
//           </div>
//           <div className="info-item">
//             <FaMapMarkerAlt />
//             <span>City, Country</span>
//           </div>
//         </div>

//         {/* Connect with Me Section */}
//         <div className="connect-section">
//           <h2>Connect with Me</h2>
//           <div className="social-links">
//             <Link href="#" aria-label="GitHub">
//               <FaGithub />
//             </Link>
//             <Link href="#" aria-label="LinkedIn">
//               <FaLinkedin />
//             </Link>
//             <Link href="#" aria-label="Twitter">
//               <FaTwitter />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }






















// import Link from "next/link"

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-[#171923] text-white p-6 md:p-12">
//       <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#f20089]">Get in Touch</h1>

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
//         {/* Contact Form */}
//         <div className="bg-[#1A202C] p-6 rounded-lg">
//           <h2 className="text-2xl font-semibold mb-6 text-[#f20089]">Send a Message</h2>
//           <form className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block mb-2 text-[#f20089]">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 className="w-full bg-[#2D3748] border border-[#4A5568] focus:border-[#f20089] text-white rounded-md p-2 outline-none"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block mb-2 text-[#f20089]">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 className="w-full bg-[#2D3748] border border-[#4A5568] focus:border-[#f20089] text-white rounded-md p-2 outline-none"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block mb-2 text-[#f20089]">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 className="w-full bg-[#2D3748] border border-[#4A5568] focus:border-[#f20089] text-white rounded-md p-2 min-h-[150px] outline-none"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-[#f20089] hover:bg-[#d4008c] text-white py-2 px-4 rounded-md transition-colors"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Contact Information */}
//         <div className="space-y-8">
//           <div className="bg-[#1A202C] p-6 rounded-lg">
//             <h2 className="text-2xl font-semibold mb-6 text-[#f20089]">Contact Information</h2>
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-[#f20089]"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                   <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                 </svg>
//                 <span>your.email@example.com</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-[#f20089]"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                 </svg>
//                 <span>+1 (123) 456-7890</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-[#f20089]"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span>City, Country</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-[#1A202C] p-6 rounded-lg">
//             <h2 className="text-2xl font-semibold mb-6 text-[#f20089]">Connect with Me</h2>
//             <div className="flex justify-around">
//               <Link href="#" className="text-[#f20089] hover:text-[#d4008c] transition-colors">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                 </svg>
//                 <span className="sr-only">GitHub</span>
//               </Link>
//               <Link href="#" className="text-[#f20089] hover:text-[#d4008c] transition-colors">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                 </svg>
//                 <span className="sr-only">LinkedIn</span>
//               </Link>
//               <Link href="#" className="text-[#f20089] hover:text-[#d4008c] transition-colors">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                 </svg>
//                 <span className="sr-only">Twitter</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

