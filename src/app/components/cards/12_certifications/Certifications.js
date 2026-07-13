import React from "react";
import "./Certifications.scss";
import Link from "next/link";

export const Certifications = () => {
  const title = "CERTIFICACIONES";
  let certificationsData = [
    {
      id: 1,
      description: "Curso de gestión de proyectos con Jira.",
      url: "https://drive.google.com/file/d/18hsd5yMxYecSIY77HpSNLKAOobuYstUi/view",
    },
    {
      id: 2,
      description: "Curso profesional de Scrum.",
      url: "https://drive.google.com/file/d/1XWo-zwlXM1PXBjUHXUAS-zwsxEVcZn_z/view",
    },
    {
      id: 3,
      description:
        "Diploma de participación Censo Agropecuario y de Pesca 2025.",
      url: "https://drive.google.com/file/d/11CEfWSH5mNcWRzRAxkB0N0hJokkSO6eD/view",
    },
    {
      id: 4,
      description: "Participación en Upskilling & Reskilling Challenge 2023.",
      url: "https://drive.google.com/file/d/1dlpsuHHu4DY4rXNr0_dhZHl6ePREi1U8/view",
    },
    {
      id: 5,
      description:
        "FrontEnd - Desarrollo de Software con Python HTML, CSS, JavaScript, REST API (Básico-Intermedio).",
      url: "https://drive.google.com/file/d/1SFcCbNofUhiDVillBQuoJFjtVLq999nT/view",
    },
    {
      id: 6,
      description:
        "Curso de FastAPI: Fundamentos, Path Operations y Validaciones.",
      url: "https://drive.google.com/file/d/1DcZAZomeCNWx4KWstYmODPtltZOJUxT9/view",
    },
    {
      id: 7,
      description:
        "Curso de Python: Comprehensions, Lambdas y Manejo de Errores.",
      url: "https://drive.google.com/file/d/1n7zcSMAPv9rNgcerlukdTiTY_cnu6xWe/view",
    },
    {
      id: 8,
      description: "Curso de Backend con Node.js: API REST con Express.js.",
      url: "https://drive.google.com/file/d/12YNpZ418z3jzJQlvYFs48AFkmnNw2VfU/view",
    },
    {
      id: 9,
      description: "Curso de Fundamentos de Bases de Datos.",
      url: "https://drive.google.com/file/d/1pE7KdlTeizkukVtanK6wKN4yor6pgJKK/view",
    },
    {
      id: 10,
      description: "Curso de Gestión de Dependencias y Paquetes con NPM.",
      url: "https://drive.google.com/file/d/1t19_cvKPAUheD3iGxaaTWSQWem3hSzfc/view",
    },
    {
      id: 11,
      description: "Curso de Introducción al Desarrollo Backend.",
      url: "https://drive.google.com/file/d/1A-Z7tS4b5IKn1H185lPR2e-ukaBo9aZK/view",
    },
    {
      id: 12,
      description: "Curso de Frameworks y Librerías de JavaScript.",
      url: "https://drive.google.com/file/d/1ZMCBCqYYpW2XlgZ5YvFNr7uB_rMFJRkW/view",
    },
    {
      id: 13,
      description: "Curso Práctico de JavaScript.",
      url: "https://drive.google.com/file/d/13CpW0yiit_tZsBVFzlg8uSFISatJI35F/view",
    },
    {
      id: 14,
      description: "Curso de Frontend Developer.",
      url: "https://drive.google.com/file/d/1rD6r83Mr0QCFLSrIKUhXln-Np5YTIAHm/view",
    },
    {
      id: 15,
      description: "Curso Definitivo de HTML y CSS.",
      url: "https://drive.google.com/file/d/1Kl2E_y2ZRLEFLRSo0h53gsJZrMxtyMfb/view",
    },
    {
      id: 16,
      description:
        "Curso de Prework: Configuración de Entorno de Desarrollo en Windows.",
      url: "https://drive.google.com/file/d/1W5HMQ5qFupiys9ksdophrvuCN-0_HRmW/view",
    },
    {
      id: 17,
      description: "Curso Profesional de Git y GitHub.",
      url: "https://drive.google.com/file/d/1-7hiuUlIqJSPQBVjoAR0EnjBqvVlW6-d/view",
    },
    {
      id: 18,
      description: "Curso Introducción a terminal y línea de comandos.",
      url: "https://drive.google.com/file/d/1yiZG6-HjwJ9gY0Lrt_TFMrpPG4E7-53i/view",
    },
  ];
  return (
    <section className="certificationscard">
      <h2 className="certificationscard__title">{title}</h2>
      <ul className="certificationscard__list">
        {certificationsData.map((item) => (
          <li key={item.id} className="certificationscard__list--item">
            <Link
              href={{ pathname: item.url }}
              className="item__linkb"
              target="_blank"
              title={item.description}
            >
              {item.description}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
