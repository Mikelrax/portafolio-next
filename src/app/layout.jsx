import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar.jsx";
import Footer from "@/components/Sections/Footer.jsx";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title:
    "Portafolio de Daniel Pérez | Desarrollador FulLStack.", 
  description:
    `Portafolio de Daniel Pérez, desarrollador FullStack. 
    Descubre mis proyectos, habilidades y cómo puedo ayudarte a construir soluciones tecnológicas innovadoras.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <main className="container mx-auto xl:max-w-7xl">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
