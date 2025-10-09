import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CaseStudy from "../components/Landingsection/AllProject/CaseStudy";
import DesignProjects from "../components/Landingsection/AllProject/DesignProjects";

const Projects = () => {
  

  return (
    <div className="container__wrapper">
      <Navbar />
     {/* <CaseStudy/> */}
      <DesignProjects/>

      <Footer />
    </div>
  );
};



export default Projects;
