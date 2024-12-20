import React from "react";
import Link from "next/link";

export const DesktopNav = () => {
  return (
    <ul className="hidden lg:flex lg:flex-row lg:justify-between items-center">
      <Link href={"/"} className="text-lg font-bold">
        Daniel Pérez<span className="text-primary">.</span>
      </Link>
      <div className="flex gap-8">
        <Link
          href="/#home"
          className="hover:text-primary font-bold text-base ease-in-out duration-300"
        >
          Inicio
        </Link>
        <Link
          href="/#projects"
          className="hover:text-primary font-bold text-base ease-in-out duration-300"
        >
          Proyectos
        </Link>
        <Link
          href="/#about"
          className="hover:text-primary font-bold text-base ease-in-out duration-300"
        >
          Acerca de
        </Link>
      </div>
    </ul>
  );
};
