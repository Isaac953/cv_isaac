import React from "react";
import "./About.scss";

export const About = () => {
  const title = "ACERCA DE MÍ";
  /* const description ="Soy Ingeniero en Sistemas y Computación, con experiencia en el desarrollo de aplicaciones web y escritorio,\
  enfocado con la entrega de soluciones creativas y eficientes, comprometido con asegurar resultados \
  sobresalientes mediante un trabajo orientado a objetivos." */
  const description = "Soy Ingeniero en Sistemas y Computación, orientado al desarrollo de soluciones tecnológicas creativas y eficientes mediante aplicaciones web y móviles,\
  con experiencia en análisis de requerimientos, implementación de buenas prácticas de desarrollo y aseguramiento de la calidad,\
  garantizando resultados alineados con los objetivos establecidos." 
  return (
    <section className="aboutcard">
      <h2 className="aboutcard__title">{title}</h2>
      <span className="aboutcard__text">{description}</span>
    </section>
  );
};