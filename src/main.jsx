import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Resource from "./pages/Resource";
import Shyftlabs from "./pages/Shyftlabs";
// import Blog from "./pages/Blog"; // Commented intentionally
import Projects from "./pages/Projects";
import ExpenseDashboard from "./pages/ExpenseDashboard";
import RaikarGoodVibes from "./components/Landingsection/Casestudy/RaikarGoodVibes";
import CarterRedesign from "./components/Landingsection/Casestudy/CarterRedesign";
import Uvc from "./components/Landingsection/Casestudy/Uvc";

import ProtectedRoute from "./components/ProtectedRoute";
import AnimatedCursor from "react-animated-cursor";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CarterDsp from "./components/Landingsection/Casestudy/CarterDsp";
import CarterCampaign from "./components/Landingsection/Casestudy/CarterCampaign";

// Check if device has fine pointer (like a mouse)
const isMouseDevice = window.matchMedia("(pointer: fine)").matches;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {isMouseDevice && (
      <AnimatedCursor
        showSystemCursor={false}
        innerSize={16}
        outerSize={60}
        color="266, 266, 266"
        outerAlpha={0.1}
        innerScale={0.7}
        outerScale={2}
        trailingSpeed={18}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />
    )}
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/shyftlabs" element={<Shyftlabs />} />
        
        {/* <Route path="/blog" element={<Blog />} /> */}

        <Route
          path="/expense"
          element={
            <ProtectedRoute correctPassword="1196">
              <ExpenseDashboard />
            </ProtectedRoute>
          }
        />
         <Route
          path="/Projects/Raikar"
          element={
            <ProtectedRoute correctPassword="9155">
              <RaikarGoodVibes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Projects/CarterRedesign"
          element={
            <ProtectedRoute correctPassword="9155">
              <CarterRedesign />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Projects/uvc"
          element={
            <ProtectedRoute correctPassword="9155">
              <Uvc />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Projects/carterdsp"
          element={
            <ProtectedRoute correctPassword="9155">
              <CarterDsp/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Projects/cartercampaign"
          element={
            <ProtectedRoute correctPassword="9155">
             <CarterCampaign/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  </div>
);
