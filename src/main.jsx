import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import AnimatedCursor from "react-animated-cursor";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Resource from "./pages/Resource";
import Shyftlabs from "./pages/Shyftlabs";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import RaikarGoodVibes from "./components/Landingsection/Casestudy/RaikarGoodVibes";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <AnimatedCursor
      showSystemCursor={false}
      innerSize={16}
      outerSize={60}
      color="0, 0, 0"
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
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="shyftlabs" element={<Shyftlabs />} />
        {/* <Route path="blog" element={<Blog />} /> */}
        <Route path="/Projects/Raikar" element={<RaikarGoodVibes />} />
      </Routes>
    </Router>
  </div>
);

reportWebVitals();