"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export const MobileNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <ul className="lg:hidden gap-4 items-center">
      <li className="flex flex-wrap justify-between items-center">
        <Link href={"/"} className="text-lg font-bold">
          Daniel Pérez<span className="text-primary">.</span>
        </Link>
        <button onClick={handleNav}>
          <img
            src={`${nav ? "/close-nav.svg" : "/open-nav.svg"}`}
            alt="handle-nav"
            className="size-6"
          />
        </button>
      </li>
      <div
        className={`mobile-nav flex-col gap-4 pt-2 items-center ${
          nav ? "flex" : "hidden"
        }`}
      >
        <Link
          href="/#home"
          className="text-xl hover:text-primary font-bold text-base ease-in-out duration-300"
        >
          Inicio
        </Link>
        <Link
          href="/#projects"
          className="text-xl hover:text-primary font-bold text-base ease-in-out duration-300"
        >
          Proyectos
        </Link>
        <Link
          href="/#about"
          className="text-xl hover:text-primary font-bold text-base ease-in-out duration-300"
        >
          Acerca de
        </Link>
      </div>
    </ul>
  );
};
