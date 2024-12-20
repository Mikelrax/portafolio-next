import React from "react";
import Link from "next/link";
import Image from "next/image";

const SocialMediaLink = ({ link, src, alt, size }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="hover:scale-110 transition-all ease-in-out duration-300"
    >
      <Image src={src} alt={alt} className={size} />
    </Link>
  );
};

export default SocialMediaLink;
