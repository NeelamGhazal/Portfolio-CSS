import type React from "react"
import Image from "next/image"
import Link from "next/link"

interface CardProps {
  title: string
  // description: string
  imageUrl: string
  link: string
} 

// const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
  const Card: React.FC<CardProps> = ({ title,  imageUrl, link }) => { 
return (
    <Link href={link} className="custom-card-link">
      <div className="custom-card">
        <div className="custom-card-image">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="custom-card-content">
          <h3>{title}</h3>
          {/* <p>{description}</p> */}
        </div>
      </div>
    </Link>
  )
}

export default Card



// import type React from "react"
// import Image from "next/image"
// import Link from "next/link"

// interface CardProps {
//   title: string
//   description: string
//   imageUrl: string
//   link: string
// } 

// const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
//   return (
//     <Link href={link} className="custom-card-link">
//       <div className="custom-card">
//         <div className="custom-card-image">
//           <Image src={imageUrl || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" />
//         </div>
//         <div className="custom-card-content">
//           <h3>{title}</h3>
//           <p>{description}</p>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default Card



