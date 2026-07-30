/* eslint-disable react-refresh/only-export-components */
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToHash from "./components/ScrollToHash";
import AnimatedCursor from "react-animated-cursor";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";

// Lazy load pages for performance optimization
const Carter = React.lazy(() => import("./components/Landingsection/Casestudy/Carter"));
const Resume = React.lazy(() => import("./pages/Resume"));
const Contact = React.lazy(() => import("./pages/Contact"));
// const Blog = React.lazy(() => import("./pages/Blog")); // Commented intentionally
const ExpenseDashboard = React.lazy(() => import("./pages/ExpenseDashboard"));
// /resource page removed — was a junior links/bookmarks page.

// Lazy load Case Studies
const Godiverse = React.lazy(() => import("./components/Landingsection/Casestudy/Godiverse"));
const Uvc = React.lazy(() => import("./components/Landingsection/Casestudy/Uvc"));

// Lazy load Tools
const InquiryProtocol = React.lazy(() => import("./pages/InquiryProtocol"));


const isMouseDevice = window.matchMedia("(pointer: fine)").matches;

// Password for private tools (/expense, /ask) comes from the build environment
// (VITE_TOOLS_PASSWORD in .env / Vercel env). If unset, those routes stay locked
// with no valid password instead of shipping a hardcoded one in the bundle.
const TOOLS_PASSWORD = import.meta.env.VITE_TOOLS_PASSWORD || null;

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white gap-4 px-4 text-center">
    <p className="font-mono text-xs text-[#d6f928] tracking-widest uppercase">[ 404 ]</p>
    <h1 className="text-3xl font-bold">Page not found</h1>
    <p className="text-gray-400 text-sm">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
    <a href="/" className="mt-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors">
      Back to home
    </a>
  </div>
);

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
        <ScrollToHash />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            {/* Case studies + design gallery now live on the landing page.
                Old /projects URLs redirect to the on-page section. */}
            <Route path="/projects" element={<Navigate to="/#case-studies" replace />} />


            {/* <Route path="/blog" element={<Blog />} /> */}

            <Route
              path="/expense"
              element={
                <ProtectedRoute correctPassword={TOOLS_PASSWORD}>
                  <ExpenseDashboard />
                </ProtectedRoute>
              }
            />
            {/* Case studies — public (password lock disabled).
                Keep the <ProtectedRoute> snippets below for future re-lock;
                swap the `element={...}` back to the commented version to re-enable. */}
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
                <ProtectedRoute correctPassword={TOOLS_PASSWORD}>
                  <InquiryProtocol />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  </HelmetProvider>
);