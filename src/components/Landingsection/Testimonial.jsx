import React from "react";
import rgv from "../../assets/Img/rgv.png";
import sam from "../../assets/Img/sam.png";

const Testimonial = () => {
  return (
    <section className="bg-black py-24 px-4 flex flex-col items-center justify-center">
      {/* Headline */}
      <div className="max-w-6xl w-full mb-16">
        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* Left Heading */}
          <div>
            <div className="inline-flex items-center gap-2 text-sm bg-white/5 text-white px-4 py-1 rounded-full border border-white/10 backdrop-blur-md">
              ⭘ Happy Clients
            </div>
            <h1 className="text-4xl font-light text-white mt-4">
              Clients <span className="text-gray-400 font-medium">Love me</span>
            </h1>
            <p className="text-sm text-gray-400 mt-2 max-w-md">
              Trusted by 100+ happy clients, adding $250M+ in revenue.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition"
          >
             Let's Work Together
          </a>
         
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl w-full bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl shadow-md p-6">
        {/* Profile image */}
        <div className="relative h-60 xl:h-80 w-full md:w-auto">
          <img
            src={sam}
            alt="profile"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="hidden md:flex items-center justify-center w-14 h-14 bg-[#d6f928] rounded-md absolute -top-4 -right-4 shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              className="w-5 h-5"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
          </div>
        </div>

        {/* Testimonial content */}
        <div className="md:ml-20 lg:w-2/3 mt-6 md:mt-0">
          <h1 className="text-2xl font-medium text-white">
            He was definitely the person who, if commits, would deliver with utmost excellence.
          </h1>
          <blockquote className="text-sm text-gray-400 mt-4 leading-relaxed">
            "Suman worked on our dream project as a UX/UI Design Lead. His gift
            to perfect the designs was seen since very beginning of the project
            in his every action. From understanding the product & brand to
            understanding founders’ vision to executing those minutest details.
            His sincerity and dedication to execute plans inspite of numerous
            huddles is what makes him a true winner. I believe his attitude and
            grit for his work will help him carve his mark in this industry."
          </blockquote>

          {/* Footer */}
          <div className="mt-6">
            <p className="text-md font-semibold text-white">Samira Pujari</p>
            <p className="text-sm text-gray-400">
              Founder & Owner, Art & Décor Brand "RaikarsGoodVibes"
            </p>
            <div className="w-40 bg-[#dab853] px-3 py-1 mt-2 rounded-md overflow-hidden">
              <img
                src={rgv}
                alt="brand logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
