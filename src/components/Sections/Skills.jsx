import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="pt-28">
      <h2 className="font-bold text-4xl lg:text-6xl">
        Habilidades<span className="text-primary">.</span>
      </h2>
      <div className="pt-14 flex flex-col text-center gap-6 lg:flex lg:flex-row lg:gap-0 lg:justify-between">
        <div>
          <h3 className="font-medium text-3xl">Frontend</h3>
          <p>TailwindCSS</p>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>ReactJS</p>
          <p>NextJS</p>
        </div>
        <div>
          <h3 className="font-medium text-3xl">Backend</h3>
          <p>NodeJS</p>
          <p>ExpressJS</p>
          <p>MongoDB</p>
          <p>NextJS SSR</p>
          <p>Java</p>
          <p>Python</p>
          <p>Spring</p>
          <p>MySQL</p>
        </div>
        <div>
          <h3 className="font-medium text-3xl">SoftSkills</h3>
          <p>Comunicación efectiva</p>
          <p>Trabajo en equipo</p>
          <p>Adaptabilidad</p>
          <p>Resolución de problemas</p>
          <p>Creatividad</p>
          <p>Capacidad para recibir feedback</p>
          <p>Orientación a resultados</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
