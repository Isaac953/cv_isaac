import React from "react";
import "./Works.scss";

export const Works = () => {
  const title = "EXPERIENCIA LABORAL";

  let expecienceData = [
    {
      id: 1,
      position: "Desarrollador de Sistemas de Información | Consultor Informático",
      company: "Banco Central de Reserva de El Salvador",
      date: "Abril 2024 - Presente",
      project: "Programa de Modernización del Sistema Estadístico de El Salvador",
      responsibilities: "Actividades:",
      activities: [
        {
          idt: 1,
          tasks: "Desarrollo de módulos web en Angular, integrando formularios y consumo de APIs REST.",
        },
        {
          idt: 2,
          tasks: "Desarrollo de componentes utilizando Flutter.",
        },
        {
          idt: 3,
          tasks: "Ejecución de pruebas de aseguramiento de calidad (QA) y aplicación de procesos de control de calidad.",
        },
        {
          idt: 4,
          tasks: "Diseño de formularios ODK XLSForm con validaciones, lógica condicional y pruebas funcionales en ODK Collect.",
        }, 
        {
          idt: 5,
          tasks: "Control de versiones y gestión de cambios de código y scripts de bases de datos usando GIT.",
        }, 
        {
          idt: 6,
          tasks: "Preparación y configuración de DMC para la ejecución de operativos en campo.",
        }, 
        {
          idt: 7,
          tasks: "Atención y soporte técnico en chat para incidencias en formularios ODK.",
        }, 
        {
          idt: 8,
          tasks: "Documentación de mejoras, cambios y actualizaciones en formularios ODK.",
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
      responsibilities: "Actividades:",
      activities: [
        {
          idt: 1,
          tasks: "Elaborar un diagrama entidad-relación (ER) de la base de datos MySQL.",
        },
        {
          idt: 2,
          tasks: "Migrar los datos mediante la importación de archivos CSV a MySQL.",
        },
        {
          idt: 3,
          tasks:
            "Diseñar las interfaces de usuario mediante Windows Form en C#.",
        },
        {
          idt: 4,
          tasks: "Desarrollar las funciones del sistema para facturación e inventario.",
        },
        {
          idt: 5,
          tasks:
            "Instalar la aplicación y base de datos en el servidor para la implementación.",
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
      responsibilities: "Actividades:",
      activities: [
        {
          idt: 1,
          tasks: "Migrar los datos con PHP de archivos CSV a PostgreSQL.",
        },
        {
          idt: 2,
          tasks: "Capacitar al equipo de usuarios para el uso de la aplicación.",
        },
        {
          idt: 3,
          tasks: "Agregar un módulo de reportes de tipo cuadro y gráficos con FusionCharts.",
        },
        {
          idt: 4,
          tasks:
            "Implementar las actualizaciones de la aplicación web desde el servidor.",
        },
        {
          idt: 5,
          tasks: "Incluir botones para exportar reportes a PDF y Excel.",
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
