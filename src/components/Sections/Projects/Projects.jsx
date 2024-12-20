import React from "react";
import Cards from "./Cards";

const Projects = () => {
  return (
    <section id="projects" className="pt-28">
      <h2 className="font-bold text-4xl md:text-6xl">
        Proyectos<span className="text-primary">.</span>
      </h2>
      <div className="flex flex-col flex-wrap justify-center items-center md:grid md:grid-cols-3">
        <Cards
          src="/tiendamia.webp"
          alt="Proyecto TiendaMia"
          name="TiendaMia-Replica"
          description={"Una replica de TiendaMia en React.tsx con manejo de estados tanto globales como locales."}
          link={"https://github.com/Orbitadoo/TiendaMia-Replica"}
        />
      </div>
    </section>
  );
};

export default Projects;
