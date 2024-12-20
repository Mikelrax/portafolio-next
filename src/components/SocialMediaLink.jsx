import React from "react";
import Link from "next/link";

const SocialMediaLink = ({ link, src, alt, size }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="hover:scale-110 transition-all ease-in-out duration-300"
    >
      <img src={src} alt={alt} className={size} />
    </Link>
  );
};

export default SocialMediaLink;
