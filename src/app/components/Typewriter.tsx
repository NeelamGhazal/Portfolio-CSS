"use client";
import React, { useEffect, useState } from "react";

const Typewriter: React.FC = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [speed, setSpeed] = useState(100);

  const texts = [
    "Frontend Developer",
    "Website Developer",
    "UI/UX Designer",
    "Tech Enthusiast",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loop % texts.length;
      const fullText = texts[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setSpeed(1000); 
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoop((prev) => prev + 1);
        setSpeed(200); 
      } else {
        setSpeed(isDeleting ? 50 : 100); 
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <div className="typewriter-wrapper">  
      <span className="constant-text">I'm a&nbsp;</span>
      <span className="animated-text"> {text}</span>
      <span className="caret">|</span>
    </div>
  );
};

export default Typewriter;
