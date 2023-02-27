import React, { useEffect, useRef } from "react";
import "./About.css";
function About() {
  const aboutCard = useRef();
  const hrRef = useRef();
  const observer = new IntersectionObserver(
    (entry) => {
      if (entry[0].isIntersecting) {
        hrRef.current.classList.add("animate");
      } else {
        hrRef.current.classList.remove("animate");
      }
    },
    { threshold: 0.7 }
  );
  useEffect(() => {
    observer.observe(aboutCard.current);
  });
  return (
    <div className="about" ref={aboutCard} id="about">
      <h1>
        About <hr ref={hrRef} />
      </h1>

      <p>
       Placed as a <span>Associate Software Developer </span> at  <span> Unthinkable Solutions</span>
      </p>
      <p>
        Pursuing <span>BCA </span> from <span> PSIT College of Higher Education </span> , Kanpur
      </p>
      <p className="res-1280">
        Completed <span>Full-Stack Web Development</span> using
        <span>&nbsp;MERN stack</span> at <span>CodingShuttle</span>
      </p>
      <p className="res-1280">
        Aspiring to be a Web Developer and Passionate about Coding and learning
        new technologies in development
      </p>
    </div>
  );
}

export default About;
