import React from "react";
import SocialMediaLink from "@/components/SocialMediaLink";

const ContactPage = () => {
  return (
    <section className="h-[660px] px-6 py-8 sm:py-0 flex flex-row justify-center flex-wrap md:grid md:grid-cols-2 items-center align-middle">
      <div className="flex flex-row flex-wrap gap-4">
        <h2 className="text-4xl md:text-6xl py-2 font-extrabold">
          ¿Creamos algo juntos?<span className="text-primary">.</span>
        </h2>
        <p>
          ¿Quieres asociarte o trabajar conmigo? Envíame un mensaje a mi correo
          electrónico o llámame, y te responderé dentro de las próximas 24
          horas.
        </p>
        <div className="flex gap-6">
          <SocialMediaLink
            link="mailto:danny2003renato@gmail.com" 
            src="/mail.svg"
            alt="Mail Logo"
            size="size-8"
          />
          <SocialMediaLink
            link="tel:+54958683729"
            src="/phone.svg"
            alt="Phone Logo"
            size="size-8"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/115122920?v=4"
          alt="Imagen de Leonardo Valdez"
          className="mt-14 lg:mt-0 size-60 lg:size-80 rounded-full hover:grayscale-0 transition-all ease-in-out duration-300"
        />
      </div>
    </section>
  );
};

export default ContactPage;
