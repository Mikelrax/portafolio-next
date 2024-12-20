import React from "react";
import Link from "next/link";
import SocialMediaLink from "@/components/SocialMediaLink";

const Cards = ({ src, alt, name, description, link}) => {
  return (
    <div className="max-w-96">
      <img src={src} alt={alt} className="size-96 rounded-lg object-contain" />
      <Link
        href={link}
        target="_blank"
        className="flex flex-row items-center gap-4"
      >
        <h3 className="text-xl font-bold hover:text-[#4e525a] ease-in-out duration-300">
          {name}
        </h3>
        <img
          src="/link-blue.svg"
          alt="Link al repositorio"
          className="size-6 hover:color-"
        />
      </Link>
      <p className="text-base">
        {description}
      </p>
    </div>
  );
};

export default Cards;
