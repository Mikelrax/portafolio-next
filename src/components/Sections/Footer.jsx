"use client";
import Link from "next/link";
import SocialMediaLink from "@/components/SocialMediaLink.jsx";
import { useParams } from "next/navigation";

const Footer = () => {
  const page = useParams().contact;
  return (
    <footer className="my-12 grid gap-2 px-6">
      <div className="flex flex-col justify-center sm:flex sm:flex-row sm:justify-between items-center gap-2">
        <div className="flex flex-wrap gap-8">
          <Link
            href="/#home"
            className="text-sm md:text-xl hover:text-primary font-bold text-base ease-in-out duration-300"
          >
            {" "}
            Inicio{" "}
          </Link>
          <Link
            href="/#projects"
            className="text-sm md:text-xl hover:text-primary font-bold text-base ease-in-out duration-300"
          >
            {" "}
            Proyectos{" "}
          </Link>
          <Link
            href="/#about"
            className="text-sm md:text-xl hover:text-primary font-bold text-base ease-in-out duration-300"
          >
            {" "}
            Acerca de{" "}
          </Link>
        </div>

        <div className="flex gap-6">
          <SocialMediaLink
            link="https://github.com/Mikelrax"
            src="/github.svg"
            alt="GitHub Logo"
            size="size-6"
          />
          <SocialMediaLink
            link="https://www.linkedin.com/in/danielrmp/"
            src="/linkedin.svg"
            alt="Linkedin Logo"
            size="size-6"
          />
        </div>
      </div>

      <div className="gap-2 flex flex-col justify-center sm:flex sm:flex-row sm:justify-between items-center">
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <p className="text-md text-secondary font-bold">
            ¿Quieres trabajar conmigo?
          </p>
          <Link
            href={
              page === "contact"
                ? `mailto:danny2003renato@gmail.com`
                : `/contact`
            }
            className="w-fit rounded-full text-white font-bold bg-primary py-2 px-4 hover:bg-primary-white hover:text-white transition-all ease-in-out duration-300"
          >
            Contáctame
          </Link>
        </div>

        <div>
          <p className="text-sm">© 2024. Todos los derechos reservados.</p>
          <p className="text-sm">Hecho por Daniel Renato Mamani Pérez.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
