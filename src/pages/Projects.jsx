import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CaseStudy from "../components/Landingsection/AllProject/CaseStudy";
import DesignProjects from "../components/Landingsection/AllProject/DesignProjects";
import SEO from "../components/SEO";

const Projects = () => {


  return (
    <div className="container__wrapper">
      <SEO
        title="Projects - Suman Sourabh | Product Designer"
        description="Explore the design portfolio of Suman Sourabh. Case studies on SaaS products, mobile apps, and design systems."
        keywords="design portfolio, case studies, ui/ux projects, saas design, mobile app design"
        url="https://www.sumansourabh.com/projects"
      />
      <Navbar />
      <CaseStudy />
      <DesignProjects />

      <Footer />
    </div>
  );
};



export default Projects;
