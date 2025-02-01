"use client"

import type React from "react"
import { useState } from "react"
import { FaStar, FaPaperPlane } from "react-icons/fa"

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Tech Corp",
    content: "Neelam is an exceptional developer. Her attention to detail and problem-solving skills are outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Project Manager, InnoSoft",
    content: "Working with Neelam was a pleasure. She consistently delivered high-quality work on time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Lead Developer, WebSolutions",
    content: "Neelam's expertise in React and Next.js significantly improved our project's performance.",
    rating: 5,
  },
]

const FeedbackPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the feedback to your backend
    console.log({ name, email, message, rating })
    // Reset form
    setName("")
    setEmail("")
    setMessage("")
    setRating(0)
    alert("Thank you for your feedback!")
  }

  return (
    <div className="feedback-page">
      <h1 className="feedback-page__title">Feedback</h1>

      <div className="feedback-container">
        <section className="feedback-form">
          <h2 className="feedback-section__title">Leave Your Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>
            <div className="form-group">
              <label>Rating</label>
              <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < rating ? "star active" : "star"}
                    onClick={() => setRating(index + 1)}
                  />
                ))}
              </div>
            </div>
            <button type="submit" className="submit-button">
              <FaPaperPlane /> Send Feedback
            </button>
          </form>
        </section>

        <section className="testimonials">
          <h2 className="feedback-section__title">What Others Say</h2>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <p className="testimonial__content">{testimonial.content}</p>
              <div className="testimonial__author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
              <div className="testimonial__rating">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} className="star active" />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default FeedbackPage

