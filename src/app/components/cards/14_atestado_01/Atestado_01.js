import React from "react";
import "./Atestado_01.scss";

export const  Atestado_01 = () => {
  const title = "ATESTADOS";
  let logo_01 = "./img/atestados/01_Titulo_Ingeniero.jpg";
  return (
    <figure className="titulocard">
      <h2 className="titulocard__title">{title}</h2>
      <img className="titulocard__img" src={logo_01} alt="Logo" />
    </figure>
  );
};
