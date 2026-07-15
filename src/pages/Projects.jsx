import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CaseStudy from "../components/Landingsection/AllProject/CaseStudy";
import DesignProjects from "../components/Landingsection/AllProject/DesignProjects";
import SeoHead from "../components/SeoHead";

const Projects = () => {


  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <SeoHead
        title="Product Management Case Studies | Suman Sourabh"
        description="Product management case studies by Suman Sourabh — the user problem, the product decisions, and the measured outcomes across AdTech, HealthTech, and SaaS."
        keywords="product management case studies, product manager portfolio, 0-to-1 products, PRD, AI product management"
        canonicalUrl="https://www.sumansourabh.com/projects"
      />
      <Navbar />
      <CaseStudy />
      <DesignProjects />

      <Footer />
    </div>
  );
};



export default Projects;
