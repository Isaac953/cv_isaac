import React from "react";
import "./Programs.scss";

export const Programs = () => {
  const title = "PROGRAMAS";
  let programsData = [
    {
      id: 1,
      description: "Visual Studio Code.",
    },
    {
      id: 2,
      description: "WSL2.",
    },
    {
      id: 3,
      description: "Git Bash.",
    },
    {
      id: 4,
      description: "Sender.",
    },
    {
      id: 5,
      description: "Visual Studio.",
    },
    {
      id: 6,
      description: "MySQL Workbench.",
    },
    {
      id: 7,
      description: "PG Admin.",
    },
    {
      id: 8,
      description: "SQL Management Studio.",
    },
    {
      id: 9,
      description: "Firebase.",
    },
    {
      id: 10,
      description: "Android Studio.",
    },
    {
      id: 11,
      description: "Docker.",
    },
    {
      id: 12,
      description: "DBeaver.",
    },
    {
      id: 13,
      description: "Git Desktop.",
    },
  ];

  let programsData2 = [
    {
      id: 1,
      description: "Oracle Virtual Box.",
    },
    {
      id: 2,
      description: "Plataforma Hyper-V.",
    },
    {
      id: 3,
      description: "Servidor Web IIS.",
    },
    {
      id: 4,
      description: "Veeam Backup & Replication.",
    },
    {
      id: 5,
      description: "Putty SSH.",
    },
    {
      id: 6,
      description: "WinSCP.",
    },
    {
      id: 7,
      description: "InnoSetup.",
    },
    {
      id: 8,
      description: "Notion.",
    },
    {
      id: 9,
      description: "Microsoft Project.",
    },
    {
      id: 10,
      description: "Microsoft Office.",
    },
    {
      id: 11,
      description: "IntelliJ IDEA.",
    },
    {
      id: 12,
      description: "Clockify.",
    },
    {
      id: 13,
      description: "ODK Build.",
    },
    {
      id: 14,
      description: "Postman.",
    },
  ];
  return (
    <section className="programscard">
      <h2 className="programscard__title">{title}</h2>
      <div className="programscard__sub">
        <ul className="programscard__sub--list">
          {programsData.map((item) => (
            <li key={item.id} className="list__item">
              {item.description}
            </li>
          ))}
        </ul>

        <ul className="programscard__sub--list">
          {programsData2.map((item) => (
            <li key={item.id} className="list__item">
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
