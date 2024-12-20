"use client";
import React from "react";
import { useState } from "react";

const Experience = () => {
  const [tab, setTab] = useState(1);

  const experience = [
    {
      id: 1,
      company: "INTELLIGENCE SAC",
      position: "Freelancer",
      description:
        "Maquetacion de una base de datos de un banco. Desarrollo de diagrama de casos de uso y explicación del mismo.",
      from: "06-2024",
      to: "07-2024",
    },
    {
      id: 2,
      company: "Apple",
      position: "Frontend Developer",
      description:
        "Lorem Apple ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      from: "2018",
      to: "2022",
    },
    {
      id: 3,
      company: "Microsoft",
      position: "Frontend Developer",
      description:
        "Lorem Microsoft ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      from: "2016",
      to: "2018",
    },
  ];

  return (
    <section id="experience" className="pt-14">
      <h2 className="font-bold text-4xl lg:text-6xl">
        Experiencia<span className="text-primary">.</span>
      </h2>
      <div className="flex flex-col lg:flex lg:flex-row items-center align-middle pt-14 lg:mt-0|">
        <div className="flex flex-row lg:flex-col gap-4 mt-4">
          <button onClick={() => setTab(1)} className="text-start">
            <h3
              className={`font-medium text-xl lg:border-l-4 pl-6 ${
                tab === 1 && "text-primary lg:border-primary"
              }`}
            >
              INTELLIGENCE SAC
            </h3>
          </button>
        </div>
        <div className="lg:pl-64 text-center lg:text-start py-9">
          <div className="flex flex-col">
            <h4 className="font-medium text-xl">
              {experience.find((exp) => exp.id === tab).position}
            </h4>
            <div className="flex gap-2 justify-center lg:justify-start">
              <p className="text-sm">
                {experience.find((exp) => exp.id === tab).from}
              </p>
              <p className="text-sm"> - </p>
              <p className="text-sm">
                {experience.find((exp) => exp.id === tab).to}{" "}
              </p>
            </div>
          </div>
          <p>{experience.find((exp) => exp.id === tab).description}</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
