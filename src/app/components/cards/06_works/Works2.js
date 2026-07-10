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
      technologies: "JavaScript, HTML5, CSS3, Highcharts, Git",
      responsibilities: "Responsabilidades:",
      activities: [
        {
          idt: 1,
          tasks:
            "Ejecuté actividades de desarrollo bajo la metodología ágil Scrum.",
        },
        {
          idt: 2,
          tasks:
            "Colaboré con el equipo utilizando Git para el control de versiones.",
        },
        {
          idt: 3,
          tasks: "Desarrollé un dashboard con filtros por rango de fechas.",
        },
        {
          idt: 4,
          tasks:
            "Implementé gráficos lineales y de dona utilizando JavaScript y Highcharts.",
        },
        {
          idt: 5,
          tasks:
            "Diseñé una barra de navegación utilizando HTML, CSS y JavaScript.",
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
      technologies: "PHP, HTML5, CSS3, SQL Server",
      // styleClass: "margin-botton",
      responsibilities: "Responsabilidades:",
      activities: [
        {
          idt: 1,
          tasks:
            "Diseñé diagramas de casos de uso para definir los procesos del sistema.",
        },
        {
          idt: 2,
          tasks:
            "Diseñé diagramas entidad-relación (ER) para la base de datos SQL Server.",
        },
        {
          idt: 3,
          tasks:
            "Desarrollé vistas y formularios de la aplicación web utilizando HTML y CSS.",
        },
        {
          idt: 4,
          tasks:
            "Implementé funcionalidades en PHP según los roles de usuario.",
        },
        {
          idt: 5,
          tasks:
            "Migré datos desde archivos CSV hacia SQL Server utilizando PHP.",
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
          <span className="workscard__history--technologies">
            <strong>Tecnologías: </strong>
            {item.technologies}
          </span>
          <span className="workscard__history--resp">
            {item.responsibilities}
          </span>
          {item.activities?.map((listI) => (
            <ul key={listI.idt} className="workscard__history--list">
              <li className={`list__activities ${listI.styleList}`}>
                {listI.tasks}
              </li>
            </ul>
          ))}
          <span className="workscard__history--resp">{item.achievement}</span>
          {item.description?.map((listI) => (
            <ul key={listI.idc} className="workscard__history--list">
              <li className={`list__activities ${listI.styleList}`}>
                {listI.tasks}
              </li>
            </ul>
          ))}
        </div>
      ))}
    </section>
  );
};
