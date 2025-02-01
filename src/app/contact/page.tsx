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

