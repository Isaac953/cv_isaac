import React from "react";
import "./SoftSkills.scss";

export const SoftSkills = () => {
  const title = "APTITUDES";

  let softSkillsData = [
    {
      id: 1,
      description: "Capacidad de análisis",
    },
    {
      id: 2,
      description: "Resolución de problemas",
    },
    {
      id: 3,
      description: "Trabajo en equipo",
    },
    {
      id: 4,
      description: "Comunicación efectiva",
    },
    {
      id: 5,
      description: "Gestión del tiempo",
    },
    {
      id: 6,
      description: "Proactividad",
    },
    {
      id: 7,
      description: "Orientación a resultados",
    },
    {
      id: 8,
      description: "Adaptabilidad",
    },
  ];
  return (
    <section className="softskillscard">
      <h2 className="softskillscard__title">{title}</h2>
      <ul className="softskillscard__list">
        {softSkillsData.map((item) => (
          <li key={item.id} className="softskillscard__list--item">
            {item.description}
          </li>
        ))}
      </ul>
    </section>
  );
};
