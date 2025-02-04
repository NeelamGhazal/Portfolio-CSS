import type React from "react"
import Card from "./Card"

const CardGrid: React.FC = () => {
  const cards = [
    { title: "Toy Heaven", imageUrl: "/images/my-web.png", link: "/card1" },
    { title: "Nike", imageUrl: "/images/nike.png", link: "/card2" },
    { title: "Pizzeria", imageUrl: "/images/pizza.png", link: "/card3" },
    { title: "Furniture", imageUrl: "/images/figma.png", link: "/card4" },
    { title: "Figma design", imageUrl: "/images/figma1.png", link: "/card5" },
    { title: "Resume Builder", imageUrl: "/images/resume.png", link: "/card6" },
  ]

  return (
    <>
      <div className="allprojects">
        <h1>All Projects</h1>
      </div>
      <div className="custom-card-container">
        <div className="custom-card-grid">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  )
}

export default CardGrid
