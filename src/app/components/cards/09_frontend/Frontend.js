import React from "react";
import "./Frontend.scss";

export const Frontend = () => {
  const title = "FRONTEND";
  let frontendData = [
    {
      id: 1,
      description: "Angular",
    },
    {
      id: 2,
      description: "JavaScript",
    },
    {
      id: 3,
      description: "API REST",
    },
    {
      id: 4,
      description: "Git/GitHub",
    },
    {
      id: 5,
      description: "ODK/XLSForm",
    },
    {
      id: 6,
      description: "Flutter",
    },
    {
      id: 7,
      description: "HTML5",
    },
    {
      id: 8,
      description: "CSS3",
    },
    {
      id: 9,
      description: "Sass",
    },
    {
      id: 10,
      description: "Bootstrap",
    },
    {
      id: 11,
      description: "React",
    },
    {
      id: 12,
      description: "Vue.js",
    },
    {
      id: 13,
      description: "Jinja2",
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
