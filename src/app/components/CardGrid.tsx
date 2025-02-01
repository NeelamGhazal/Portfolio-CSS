import type React from "react"
import Card from "./Card"

const CardGrid: React.FC = () => {
  const cards = [
    { title: "Toy Heaven", imageUrl: "/images/my-web.PNG", link: "/card1" },
    { title: "Nike Ecommerce", imageUrl: "/images/nike.PNG", link: "/card2" },
    { title: "Pizzeria", imageUrl: "/images/pizza.PNG", link: "/card3" },
    { title: "Furniture", imageUrl: "/images/figma.PNG", link: "/card4" },
    { title: "Figma design", imageUrl: "/images/figma1.PNG", link: "/card5" },
    { title: "Resume Builder", imageUrl: "/images/resume.PNG", link: "/card6" },
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

// const cards = [
//   { title: "Toy Heaven", description: "Description for Card 1", imageUrl: "/images/my-web.PNG", link: "/card1" },
//   { title: "Card 2", description: "Description for Card 2", imageUrl: "/images/blog.PNG", link: "/card2" },
//   { title: "Card 3", description: "Description for Card 3", imageUrl: "/images/blog.PNG", link: "/card3" },
//   { title: "Card 4", description: "Description for Card 4", imageUrl: "/images/blog.PNG", link: "/card4" },
//   { title: "Card 5", description: "Description for Card 5", imageUrl: "/images/blog.PNG", link: "/card5" },
//   { title: "Card 6", description: "Description for Card 6", imageUrl: "/images/blog.PNG", link: "/card6" },
// ]


// import type React from "react"
// import Card from "./Card"

// const CardGrid: React.FC = () => {
//   const cards = [
//     { title: "Toy Heaven", description: "Description for Card 2", imageUrl: "/images/my-web.PNG", link: "/card1" },
//     { title: "Card 2", description: "Description for Card 2", imageUrl: "/images/blog.PNG", link: "/card2" },
//     { title: "Card 3", description: "Description for Card 3", imageUrl: "/images/blog.PNG", link: "/card3" },
//     { title: "Card 4", description: "Description for Card 4", imageUrl: "/images/blog.PNG", link: "/card4" },
//     { title: "Card 5", description: "Description for Card 5", imageUrl: "/images/blog.PNG", link: "/card5" },
//     { title: "Card 6", description: "Description for Card 6", imageUrl: "/images/blog.PNG", link: "/card6" },
//   ]

//   return (
//     <>

// <div className="allprojects">
//           <h1>All Projects</h1>
//         </div>

//     <div className="custom-card-container">
//       <div className="custom-card-grid">
//         {cards.map((card, index) => (
//           <Card key={index} {...card} />
//         ))}
//       </div>
//     </div>
//     </>
//   )
// }

// export default CardGrid


  

// import type React from "react"
// import Card from "./Card"

// const CardGrid: React.FC = () => {
//   const cards = [
//     { title: "Card 1", description: "Description for Card 1", imageUrl: "/images/card1.jpg", link: "/card1" },
//     { title: "Card 2", description: "Description for Card 2", imageUrl: "/images/card2.jpg", link: "/card2" },
//     { title: "Card 3", description: "Description for Card 3", imageUrl: "/images/card3.jpg", link: "/card3" },
//     { title: "Card 4", description: "Description for Card 4", imageUrl: "/images/card4.jpg", link: "/card4" },
//     { title: "Card 5", description: "Description for Card 5", imageUrl: "/images/card5.jpg", link: "/card5" },
//     { title: "Card 6", description: "Description for Card 6", imageUrl: "/images/card6.jpg", link: "/card6" },
//   ]

//   return (
//     <div className="custom-card-grid">
//       {cards.map((card, index) => (
//         <Card key={index} {...card} />
//       ))}
//     </div>
//   )
// }

// export default CardGrid

