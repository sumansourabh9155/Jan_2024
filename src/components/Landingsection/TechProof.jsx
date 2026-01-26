import React from "react";
import { Code, GitBranch, Cpu, CheckCircle } from "lucide-react";

const TechProof = () => {
  return (
    <section className="bg-black text-white py-24 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 backdrop-blur px-4 py-1 rounded-full mb-4">
            <Code size={14} className="text-blue-400" />
            <span className="text-gray-400">Tech-Literate Design</span>
          </div>
          <h2 className="text-5xl font-bold mt-4">
            I Don't Design{" "}
            <span className="text-gray-400">"Impossible" Features</span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg max-w-3xl leading-relaxed">
            I understand <span className="font-semibold text-white">HTML/CSS/JS constraints</span>,{" "}
            <span className="font-semibold text-white">browser capabilities</span>, and{" "}
            <span className="font-semibold text-white">API limitations</span>. I ship designs that developers can actually build without rewriting the code.
          </p>
        </div>

        {/* Chrome Extension Showcase */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Extension Info */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Cpu size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Tab Organizer Extension</h3>
                <p className="text-sm text-gray-400">Chrome Extension • Built with JavaScript</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              I didn't just design the interface—I built the entire logic. This extension handles complex array sorting, 
              grouping algorithms, and Chrome API integrations to automatically organize browser tabs based on domain, 
              activity, and user behavior.
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-400 mb-3">TECHNOLOGIES USED:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs">JavaScript ES6+</span>
                <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs">Chrome APIs</span>
                <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs">JSON Storage</span>
                <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs">Manifest V3</span>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <p className="text-xs font-semibold text-gray-400 mb-3">KEY CAPABILITIES:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-400 mt-0.5" />
                  <span className="text-sm text-gray-300">Automatic tab grouping by domain & category</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-400 mt-0.5" />
                  <span className="text-sm text-gray-300">Smart sorting algorithms (array manipulation)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-400 mt-0.5" />
                  <span className="text-sm text-gray-300">Persistent storage with Chrome Storage API</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-400 mt-0.5" />
                  <span className="text-sm text-gray-300">Real-time tab monitoring & updates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Logic Diagram */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <h4 className="text-sm font-semibold text-gray-400 mb-4">LOGIC FLOWCHART</h4>
            
            {/* Flowchart Visual */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <p className="text-sm font-semibold">Listen to Tab Events</p>
                </div>
                <p className="text-xs text-gray-400 font-mono">chrome.tabs.onCreated / onUpdated</p>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-6 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <p className="text-sm font-semibold">Extract Domain & Metadata</p>
                </div>
                <p className="text-xs text-gray-400 font-mono">URL parsing → domain extraction</p>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-6 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 border border-pink-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <p className="text-sm font-semibold">Group by Logic Rules</p>
                </div>
                <p className="text-xs text-gray-400 font-mono">Array.sort() + custom comparators</p>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-6 bg-gradient-to-b from-pink-500 to-green-500"></div>
              </div>

              {/* Step 4 */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <p className="text-sm font-semibold">Update UI & Storage</p>
                </div>
                <p className="text-xs text-gray-400 font-mono">chrome.storage.local.set()</p>
              </div>
            </div>

            {/* Code Snippet */}
            <div className="mt-6 bg-black/50 border border-white/5 rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-400 mb-2">SAMPLE CODE SNIPPET:</p>
              <pre className="text-xs text-green-400 font-mono overflow-x-auto">
{`// Group tabs by domain
const groupTabs = (tabs) => {
  return tabs.reduce((acc, tab) => {
    const domain = new URL(tab.url).hostname;
    if (!acc[domain]) acc[domain] = [];
    acc[domain].push(tab);
    return acc;
  }, {});
};`}
              </pre>
            </div>
          </div>
        </div>

        {/* Bottom Signal */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
          <GitBranch size={32} className="mx-auto mb-4 text-blue-400" />
          <h3 className="text-2xl font-bold mb-2">The Signal to Founders</h3>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            I don't just design interfaces—I understand how code works. This means I won't design "impossible" features 
            that require 3 months of backend work. I think like a Product Manager and ship like a Developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechProof;