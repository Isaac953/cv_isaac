import React from "react";
import "./Frontend.scss";

export const Frontend = () => {
  const title = "FRONTEND";
  let frontendData = [
    {
      id: 1,
      description: "HTML",
    },
    {
      id: 2,
      description: "CSS",
    },
    {
      id: 3,
      description: "JavaScript",
    },
    {
      id: 4,
      description: "Sass",
    },
    {
      id: 5,
      description: "Bootstrap",
    },
    {
      id: 6,
      description: "React JS",
    },
    {
      id: 7,
      description: "Angular",
    },
    {
      id: 8,
      description: "Vue JS",
    },
    {
      id: 9,
      description: "Git/Git Hub",
    },
    {
      id: 10,
      description: "API REST",
    },
    {
      id: 11,
      description: "Jinja2",
    },
    {
      id: 12,
      description: "Flutter",
    },
    {
      id: 13,
      description: "ODK",
    },
  ];
  return (
    <section className="frontendcard">
      <h2 className="frontendcard__title">{title}</h2>
      <ul className="frontendcard__list">
        {frontendData.map((item) => (
          <li key={item.id} className="frontendcard__list--item">
            {item.description}
          </li>
        ))}
      </ul>
    </section>
  );
};
