import React from "react";
import "./Works.scss";

export const Works2 = () => {
  const title = "EXPERIENCIA LABORAL";

  let expecienceData = [
   {
      id: 4,
      styleList: "item-top",
      position: "Programador Frontend",
      company: "IMOVES S.A. de C.V.",
      date: "Febrero 2018 - Abril 2018",
      project: "Revisión de aplicaciones existentes.",
      responsibilities: "Actividades:",
      activities: [
        {
          idt: 1,
          tasks: "Ejecutar tareas específicas basadas en la metodología Scrum.",
        },
        {
          idt: 2,
          tasks: "Colaborar en equipo utilizando control de versiones GIT.",
        },
        {
          idt: 3,
          tasks: "Desarrollar un Dashboard con filtro de fechas.",
        },
        {
          idt: 4,
          tasks:
            "Programar gráficos lineales y de dona en JavaScript con Highcharts.",
        },
        {
          idt: 5,
          tasks: "Diseñar una barra de navegación con HTML, CSS y JavaScript.",
          styleList: "item-bottom",
        },
      ],
    },
    {
      id: 5,
      position: "Pasante del Área de Innovación y Gestión del conocimiento",
      company: "Plan Internacional El Salvador",
      date: "Julio 2016 - Febrero 2017",
      project: "Aplicación Web para gestión de Consultorias.",
      // styleClass: "margin-botton",
      responsibilities: "Actividades:",
      activities: [
        {
          idt: 1,
          tasks: "Diseñar diagramas de caso de uso para especificar procesos.",
        },
        {
          idt: 2,
          tasks: "Crear diagramas de entidad-relación (ER) de la base de datos SQL Server.",
        },
        {
          idt: 3,
          tasks:
            "Diseñar vistas y formularios de la aplicación web con HTML y CSS.",
        },
        {
          idt: 4,
          tasks:
            "Programar funciones especificas con PHP según roles de usuario.",
        },
        {
          idt: 5,
          tasks: "Migrar datos desde archivos CSV a base de datos SQL Server utilizando PHP.",
        },
      ],
    },
  ];
  return (
    <section className="workscard">
      {/* <h2 className="workscard__title">{title}</h2> */}
      {expecienceData.map((item) => (
        <div key={item.id} className={`workscard__history ${item.styleClass}`}>
          <span className="workscard__history--position">{item.position}</span>
          <span className="workscard__history--company">
            {item.company} | {item.date}
          </span>
          <span className="workscard__history--project">{item.project}</span>
          <span className="workscard__history--resp">{item.responsibilities}</span>
          {item.activities?.map((listI) => (
            <ul key={listI.idt} className="workscard__history--list">
              <li className={`list__activities ${listI.styleList}`}>{listI.tasks}</li>
            </ul>
          ))}
          <span className="workscard__history--resp">{item.achievement}</span>
          {item.description?.map((listI) => (
            <ul key={listI.idc} className="workscard__history--list">
              <li className={`list__activities ${listI.styleList}`}>{listI.tasks}</li>
            </ul>
          ))}
        </div>
      ))}
    </section>
  );
};
