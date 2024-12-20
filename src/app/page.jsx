import Experience from "@/components/Sections/Experience";
import Home from "@/components/Sections/Home.jsx";
import Projects from "@/components/Sections/Projects/Projects.jsx";
import Skills from "@/components/Sections/Skills";
import About from "@/components/Sections/About";
import React from "react";

const IndexPage = () => {
  return (
    <div className="px-6">
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
    </div>
  );
};

export default IndexPage;
