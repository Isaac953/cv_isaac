import React from "react";
import "./Backend.scss";

export const Backend = () => {
    const title = "BACKEND";
    let backendData = [
      {
        id: 1,
        description: "PHP",
      },
      {
        id: 2,
        description: "Laravel",
      },
      {
        id: 3,
        description: "Java",
      },
      {
        id: 4,
        description: "Spring Boot",
      },
      {
        id: 5,
        description: "C#",
      },
      {
        id: 6,
        description: ".NET Core",
      },
      {
        id: 7,
        description: "Python",
      },
      {
        id: 8,
        description: "Django",
      },
      {
        id: 9,
        description: "FastAPI",
      },
      {
        id: 10,
        description: "Node.js",
      },
      {
        id: 11,
        description: "Express.js",
      },
    ];
  return (
    <section className="backendcard">
    <h2 className="backendcard__title">{title}</h2>
    <ul className="backendcard__list">
      {backendData.map((item) => (
        <li key={item.id} className="backendcard__list--item">
          {item.description}
        </li>
      ))}
    </ul>
  </section>
  )
}
