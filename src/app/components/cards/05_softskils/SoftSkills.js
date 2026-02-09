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
      description: "Orientado a objetivos",
    },
    {
      id: 3,
      description: "Trabajo en equipo",
    },
    {
      id: 4,
      description: "Toma de decisiones",
    },
    {
      id: 5,
      description: "Proactivo",
    },
    {
      id: 6,
      description: "Responsable",
    },
    {
      id: 7,
      description: "Resolución de problemas",
    },
    {
      id: 8,
      description: "Comunicación efectiva",
    },
    {
      id: 9,
      description: "Gestión del tiempo",
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
