import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <section
      id="home"
      className="grid grid-row xl:grid-cols-2 pt-4 lg:pt-28 content-center items-center"
    >
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <p className="">Hola! Soy Daniel. 👋🏻</p>
          <h1 className=" text-5xl md:text-8xl font-extrabold overflow-hidden">
            <span className="text-primary">Full</span>stack Developer 
          </h1>
          <p className="pr-12">
            Soy un desarrollador. Con mi experiencia y
            conocimientos, haré tus ideas tangibles.
          </p>
        </div>
        <div className="mt-8 flex flex-row flex-wrap gap-4 items-center">
          <Link
            href="/contact"
            className="rounded-full text-white font-bold bg-primary py-2 px-4 hover:bg-primary-white hover:text-white transition-all ease-in-out duration-300"
          >
            Contactame
          </Link>
          <Link
            href="/Daniel-perez-resume.pdf"
            download="Daniel-perez-resume.pdf"
            target="_blank"
            className="rounded-full text-secondary font-bold border border-secondary py-2 px-4 hover:bg-secondary hover:text-white transition-all ease-in-out duration-300"
          >
            Descargar CV
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/115122920?v=4"
          alt="Imagen de Daniel Pérez"
          className="mt-14 lg:mt-0 size-60 lg:size-80 rounded-full hover:grayscale-0 transition-all ease-in-out duration-300"
        />
      </div>
    </section>
  );
};

export default Home;
