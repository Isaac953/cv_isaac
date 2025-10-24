import React from "react";
import "./About.scss";

export const About = () => {
  const title = "ACERCA DE MÍ";
  /* const description ="Soy Ingeniero en Sistemas y Computación, con experiencia en el desarrollo de aplicaciones web y escritorio,\
  enfocado con la entrega de soluciones creativas y eficientes, comprometido con asegurar resultados \
  sobresalientes mediante un trabajo orientado a objetivos." */
  const description = "Soy Ingeniero en Sistemas y Computación, orientado a brindar soluciones creativas y eficientes mediante el desarrollo de aplicaciones web y móviles,\
  asegurando procesos de control de calidad óptimos y resultados alineados con objetivos establecidos."
  return (
    <section className="aboutcard">
      <h2 className="aboutcard__title">{title}</h2>
      <span className="aboutcard__text">{description}</span>
    </section>
  );
};