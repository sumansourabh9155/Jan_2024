import React from "react";
import PenIcon from "@atlaskit/icon/core/pen";
import OperationsIcon from "@atlaskit/icon/core/operations";
import SmartLinkListIcon from "@atlaskit/icon/core/smart-link-list";
import AngleBracketsIcon from "@atlaskit/icon/core/angle-brackets";
import DashboardIcon from "@atlaskit/icon/core/dashboard";
import AutomationIcon from "@atlaskit/icon/core/automation";

const Skills = () => {
  return (
    <div className="bg-white py-40 ">
      <div className="max-w-6xl mx-auto">
        <div className="mt-4 md:mt-0">
          <h1 className="text-2xl font-medium text-gray-800 text-center">
            He was definitely the person who if commits would deliver with
            utmost excellence.
          </h1>
          <p className="text-sm font-regular text-gray-500 mt-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            cursus, elit vitae fermentum.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-y-10 gap-x-24 pt-20">
          <div className="  p-6 border-b border-gray-200">
            <div className="bg-[#f9f9f9] p-6 w-4 h-4 rounded-md flex justify-center items-center">
              {" "}
              <PenIcon />
            </div>
            <div class="text-md font-semibold pt-6">UI/UX Designer</div>
            <p className="text-sm font-regular text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              cursus, elit vitae fermentum.s
            </p>
          </div>
          <div className="border-b border-gray-200 p-6 ">
            <div className="bg-[#f9f9f9] p-6 w-4 h-4 rounded-md flex justify-center items-center">
              {" "}
              <OperationsIcon />
            </div>
            <div class="text-md font-semibold pt-6">Workshop & Planning</div>
            <p className="text-sm font-regular text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              cursus, elit vitae fermentum.s
            </p>
          </div>
          <div className="border-b border-gray-200 p-6 ">
            <div className="bg-[#f9f9f9] p-6 w-4 h-4 rounded-md flex justify-center items-center">
              <AngleBracketsIcon />
            </div>
            <div class="text-md font-semibold pt-6">Full Stack Development</div>
            <p className="text-sm font-regular text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              cursus, elit vitae fermentum.s
            </p>
          </div>
          <div className="border-b border-gray-200 p-6 ">
            <div className="bg-[#f9f9f9] p-6 w-4 h-4 rounded-md flex justify-center items-center">
              <AutomationIcon />
            </div>
            <div class="text-md font-semibold pt-6">
              Prototyping & Interaction Design
            </div>
            <p className="text-sm font-regular text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              cursus, elit vitae fermentum.s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
