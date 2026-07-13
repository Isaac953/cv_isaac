import React from "react";
import "./Works.scss";

export const Works = () => {
  const title = "EXPERIENCIA LABORAL";

  let expecienceData = [
    {
      id: 1,
      position:
        "Desarrollador de Sistemas de Información | Consultor Informático",
      company: "Banco Central de Reserva de El Salvador",
      date: "Abril 2024 - Presente",
      project:
        "Programa de Modernización del Sistema Estadístico de El Salvador",
      technologies: "Angular, Visual Studio code, PostgreSQL, Git, Postman, IntelliJ IDEA, ODK/XLSForm, XLSForm Online, ODK Collect, Android Studio, Jira.",
      responsibilities: "Actividades:",
      activities: [
        {
          idt: 1,
          tasks:
            "Desarrollo de módulos frontend en Angular, integrando formularios y consumiendo APIs REST.",
        },
        {
          idt: 2,
          tasks: "Ejecutar pruebas de aseguramiento de calidad (QA) y aplicar procesos de control de calidad.",
        },
        {
          idt: 3,
          tasks:
            "Diseño de formularios ODK/XLSForm con validaciones, lógica condicional y pruebas funcionales en ODK Collect.",
        },
        {
          idt: 4,
          tasks:
            "Gestionar el control de versiones, los cambios de código y scripts de bases de datos utilizando Git.",
        },
        {
          idt: 5,
          tasks:
            "Preparar y configurar DMC para la ejecución de operativos en campo.",
        },
        {
          idt: 6,
          tasks:
            "Brindar soporte técnico a usuarios y mantener actualizada la documentación de mejoras y cambios en formularios ODK.",
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
      position: "Programador .NET C# | Consultor Informático",
      company: "Elementos Industriales S.A de C.V",
      date: "Febrero 2017 - Abril 2019",
      project: "Sistema de Inventario y Facturación.",
      technologies: "C#, .NET, MySQL, Windows Forms, Visual Studio.",
      responsibilities: "Responsabilidades:",
      activities: [
        {
          idt: 1,
          tasks:
            "Elaboré un diagrama entidad-relación (ER) para la base de datos MySQL.",
        },
        {
          idt: 2,
          tasks:
            "Migré datos mediante la importación de archivos CSV hacia MySQL.",
        },
        {
          idt: 3,
          tasks:
            "Diseñé interfaces de usuario utilizando Windows Forms en C#.",
        },
        {
          idt: 4,
          tasks:
            "Desarrollé funcionalidades para los módulos de facturación e inventario.",
        },
        {
          idt: 5,
          tasks:
            "Instalé la aplicación y la base de datos en el servidor para su implementación.",
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
      id: 3,
      position: "Programador PHP | Consultor Informático",
      company: "Plan Internacional El Salvador",
      date: "Mayo 2018 - Octubre 2018",
      project: "Aplicación Web SIPAB 2.0 Actualizaciones.",
      technologies: "PHP, JavaScript, HTML5, CSS3, PostgreSQL, FusionCharts.",
      responsibilities: "Responsabilidades:",
      activities: [
        {
          idt: 1,
          tasks: "Migré datos desde archivos CSV hacia PostgreSQL utilizando PHP.",
        },
        {
          idt: 2,
          tasks:
            "Capacité al equipo de usuarios en el uso de la aplicación.",
        },
        {
          idt: 3,
          tasks:
            "Desarrollé un módulo de reportes con tablas y gráficos utilizando FusionCharts.",
        },
        {
          idt: 4,
          tasks:
            "Implementé actualizaciones de la aplicación web en el servidor.",
        },
        {
          idt: 5,
          tasks: "Incorporé la funcionalidad para exportar reportes en formatos PDF y Excel.",
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
