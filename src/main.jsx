/* eslint-disable react-refresh/only-export-components */
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";
import AnimatedCursor from "react-animated-cursor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";

// Lazy load pages for performance optimization
const Carter = React.lazy(() => import("./components/Landingsection/Casestudy/Carter"));
const Resume = React.lazy(() => import("./pages/Resume"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Resource = React.lazy(() => import("./pages/Resource"));
// const Blog = React.lazy(() => import("./pages/Blog")); // Commented intentionally
const Projects = React.lazy(() => import("./pages/Projects"));
const ExpenseDashboard = React.lazy(() => import("./pages/ExpenseDashboard"));

// Lazy load Case Studies
const RaikarGoodVibes = React.lazy(() => import("./components/Landingsection/Casestudy/RaikarGoodVibes"));
const Godiverse = React.lazy(() => import("./components/Landingsection/Casestudy/Godiverse"));
const Uvc = React.lazy(() => import("./components/Landingsection/Casestudy/Uvc"));

// Lazy load Tools
const InquiryProtocol = React.lazy(() => import("./pages/InquiryProtocol"));


const isMouseDevice = window.matchMedia("(pointer: fine)").matches;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>

    <div>
      {isMouseDevice && (
        <AnimatedCursor
          showSystemCursor={false}
          innerSize={16}
          outerSize={60}
          color="255, 255, 255"
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
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resource" element={<Resource />} />


            {/* <Route path="/blog" element={<Blog />} /> */}

            <Route
              path="/expense"
              element={
                <ProtectedRoute correctPassword="sexy">
                  <ExpenseDashboard />
                </ProtectedRoute>
              }
            />
            {/* Case studies — public (password lock disabled).
                Keep the <ProtectedRoute> snippets below for future re-lock;
                swap the `element={...}` back to the commented version to re-enable. */}
            <Route
              path="/Projects/Raikar"
              element={<RaikarGoodVibes />}
              // element={
              //   <ProtectedRoute correctPassword="9155">
              //     <RaikarGoodVibes />
              //   </ProtectedRoute>
              // }
            />
            <Route
              path="/Projects/GoDiverse"
              element={<Godiverse />}
              // element={
              //   <ProtectedRoute correctPassword="9155">
              //     <Godiverse />
              //   </ProtectedRoute>
              // }
            />
            <Route
              path="/Projects/carter"
              element={<Carter />}
              // element={
              //   <ProtectedRoute correctPassword="9155">
              //     <Carter />
              //   </ProtectedRoute>
              // }
            />
            <Route
              path="/Projects/uvc"
              element={<Uvc />}
              // element={
              //   <ProtectedRoute correctPassword="9155">
              //     <Uvc />
              //   </ProtectedRoute>
              // }
            />
            <Route
              path="/ask"
              element={
                <ProtectedRoute correctPassword="sexy">
                  <InquiryProtocol />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  </HelmetProvider>
);
