import { Link } from "react-router-dom";
import suman from "../../assets/Img/suman.jpg";
import { Code, TrendingUp, Zap } from "lucide-react";

export const AboutMe = () => {
  return (
    <div className="bg-black flex justify-center items-center py-24 px-4 border-t border-white/10">
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 backdrop-blur px-4 py-1 rounded-full mb-4">
            <span className="text-gray-400">◎</span> About
          </div>
          <h2 className="text-5xl font-bold text-white">
            Not Just Art.{" "}
            <span className="text-gray-400">System Logic.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-md p-8 md:p-12">
          {/* Desktop Image */}
          <div className="hidden lg:block flex-shrink-0">
            <img
              src={suman}
              className="object-cover rounded-xl h-[400px] w-[400px] brightness-110"
              alt="Suman Sourabh"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Mobile Image */}
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto mt-4 h-32 w-32 bg-cover bg-center"
              style={{ backgroundImage: `url(${suman})` }}
            ></div>

            {/* Name & Title */}
            <h3 className="text-3xl font-bold text-white mt-6">Suman Sourabh</h3>
            <p className="text-base text-gray-400 mt-2">
              SaaS Product Strategist | B.Tech in Computer Science, 2024
            </p>

            {/* The "Efficiency" Pitch */}
            <div className="mt-8 space-y-6 text-gray-300 text-base leading-relaxed">
              <p>
                I don't believe in <span className="line-through text-gray-500">"Passion for Design."</span>{" "}
                I believe in <span className="font-semibold text-white">Obsession with Efficiency</span>.
              </p>

              <p>
                My background isn't just art—it's <span className="font-semibold text-white">System Logic</span>. 
                Whether it's organizing a chaotic browser with custom scripts or organizing a chaotic SaaS product 
                with better UX, my goal is the same: <span className="font-semibold text-white">Remove Friction</span>.
              </p>

              <p>
                I work best with <span className="font-semibold text-white">Founders</span> who care about{" "}
                <span className="font-semibold text-white">metrics</span>,{" "}
                <span className="font-semibold text-white">data</span>, and{" "}
                <span className="font-semibold text-white">shipping fast</span>. If you need someone to make things "pretty," 
                hire a graphic designer. If you need someone to make your product <span className="font-semibold text-white">profitable</span>, let's talk.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="bg-black/50 border border-white/10 rounded-lg p-4">
                <Code size={24} className="text-blue-400 mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">Tech-Literate</h4>
                <p className="text-xs text-gray-400">I understand code constraints. No "impossible" designs.</p>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-lg p-4">
                <TrendingUp size={24} className="text-green-400 mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">Metrics-Driven</h4>
                <p className="text-xs text-gray-400">Every design decision backed by data & psychology.</p>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-lg p-4">
                <Zap size={24} className="text-yellow-400 mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">Ship Fast</h4>
                <p className="text-xs text-gray-400">I prioritize ruthlessly. MVP over perfection.</p>
              </div>
            </div>

            {/* Testimonial */}
            <blockquote className="mt-8 text-sm text-gray-400 leading-relaxed italic border-l-2 border-white/20 pl-4">
              "Suman worked on our dream project as a UX/UI Design Lead. His gift to perfect the designs was seen 
              since the very beginning. From understanding the product & brand to executing the minutest details. 
              His sincerity and dedication inspite of numerous hurdles is what makes him a true winner."
            </blockquote>
            <p className="text-sm text-gray-500 mt-2">— Founder, Healthcare Startup</p>

            {/* CTA */}
            <div className="mt-8">
              <Link to="/contact">
                <button 
                  data-testid="about-contact-btn"
                  className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all shadow-lg"
                >
                  Let's Work Together
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};