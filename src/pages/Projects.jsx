import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CaseStudy from "../components/Landingsection/AllProject/CaseStudy";
import DesignProjects from "../components/Landingsection/AllProject/DesignProjects";
import SeoHead from "../components/SeoHead";

const Projects = () => {


  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <SeoHead
        title="SaaS Product Strategy Case Studies & Portfolio | Suman Sourabh"
        description="Explore the design portfolio of Suman Sourabh. Case studies on SaaS products, measurable churn reduction, and strategic UX redesigns."
        keywords="SaaS product strategy, design portfolio, case studies, ui/ux projects, saas design, measurable UX ROI, churn reduction"
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
