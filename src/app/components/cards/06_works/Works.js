import React from "react";
import "./Works.scss";

export const Works = () => {
  const title = "EXPERIENCIA LABORAL";

  let expecienceData = [
    {
      id: 1,
      position: "Programador .NET C# | Consultor Informático",
      company: "Elementos Industriales S.A de C.V",
      date: "Febrero 2017 - Abril 2019",
      project: "Sistema de Inventario y Facturación.",
      responsibilities: "Actividades:",
      activities: [
        {
          idt: 1,
          tasks: "Elaboración del diagrama Entidad-Relación (ER) de la base de datos.",
        },
        {
          idt: 2,
          tasks: "Migración de datos mediante la importación de archivos CSV a MySQL.",
        },
        {
          idt: 3,
          tasks:
            "Diseñar las interfaces de usuario mediante Windows Form en C#.",
        },
        {
          idt: 4,
          tasks: "Desarrollar las funciones para facturar, cotizar y ajustar inventario.",
        },
        {
          idt: 5,
          tasks:
            "Instalación de aplicación y base de datos en el servidor para implementación.",
          styleList: "item-bottom",
        },
      ],
      // achievement: "Logro:",
      // description: [
      //   {
      //     idc: 1,
      //     tasks: "Entrega de un nuevo sistema para la mejora en los procesos de facturar, cotizar y movimientos de inventario.",
      //     styleList: "item-bottom",
      //   },
      // ],
    },
    {
      id: 2,
      position: "Programador PHP / Consultor Informático",
      company: "Plan Internacional El Salvador",
      date: "Mayo 2018 - Octubre 2018",
      project: "Aplicación Web SIPAB 2.0 Actualizaciones.",
      responsibilities: "Actividades:",
      activities: [
        {
          idt: 1,
          tasks: "Migración de datos con PHP de CSV a PostgreSQL.",
        },
        {
          idt: 2,
          tasks: "Capacitación al equipo de usuarios.",
        },
        {
          idt: 3,
          tasks: "Integración de reportes gráficos con FusionChartz",
        },
        {
          idt: 4,
          tasks:
            "Implementación de actualizaciones desde el servidor.",
        },
        {
          idt: 5,
          tasks: "Integración de botones para exportar reportes a PDF y Excel.",
          styleList: "item-bottom",
        },

      ],
      // achievement: "Logro:",
      // description: [
      //   {
      //     idc: 1,
      //     tasks: "Entregar una mejora con módulo de reportes e implementación del sistema de participantes y beneficios SIPAB 2.0.",
      //     styleList: "item-bottom",
      //   },
      // ],
    },
    {
      id: 3,
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
            "Programar gráficos lineales y de dona en JavaScript con HighChartz.",
        },
        {
          idt: 5,
          tasks: "Diseñar una barra de navegación con HTML, CSS y JavaScript.",
          styleList: "item-bottom",
        },
      ],
    },
    {
      id: 4,
      position: "Pasante del Área de Innovación y Gestión del conocimiento",
      company: "Plan Internacional El Salvador",
      date: "Julio 2016 - Febrero 2017",
      project: "Aplicación Web para gestión de Consultorias.",
      // styleClass: "margin-botton",
      responsibilities: "Actividades:",
      activities: [
        {
          idt: 1,
          tasks: "Diseñar diagramas de caso de uso.",
        },
        {
          idt: 2,
          tasks: "Crear diagramas de entidad-relación.",
        },
        {
          idt: 3,
          tasks:
            "Programar vistas y funciones del sistema con HTML, CSS y PHP.",
        },
        {
          idt: 4,
          tasks:
            "Definir funciones específicas del sistema según roles de usuario.",
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
      <h2 className="workscard__title">{title}</h2>
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
