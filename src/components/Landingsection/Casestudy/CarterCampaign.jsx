import Navbar from "../../Navbar";
import Aditem from "../../../assets/cartercampigh/aditem.png";
import Oldaditem from "../../../assets/cartercampigh/oldaditem.png";
import Campaign from "../../../assets/cartercampigh/campaign.png";
import Footer from "../../Footer";
import SEO from "../../SEO";

const CarterCampaign = () => {
  return (
    <div className="font-sans text-white bg-black">
      <SEO
        title="Carter Campaign Creation - Case Study"
        description="UX and UI redesign of Carter's Campaign Creation and Ad Item Management interfaces to enhance automation and efficiency."
        keywords="case study, carter campaign, campaign creation, ad tech, ux redesign"
        url="https://www.sumansourabh.com/Projects/cartercampaign"
      />
      <Navbar />
      <div className="px-6 pt-32">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-sm bg-white/10 border border-white/20 backdrop-blur px-4 py-1 rounded-full">
              Retail Media Network
            </div>
            <h1 className="text-5xl font-semibold text-white">
              Campaign Creation & Ad Item Redesign
            </h1>
            <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">
              UX and UI redesign of Carter&apos;s Campaign Creation and Ad Item Management interfaces to enhance automation, visibility, and efficiency across the platform.
            </p>
          </div>

          <img src={Campaign} alt="Carter Overview" className="rounded-xl" />

          <section className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-2xl space-y-10 text-white">
            <h2 className="text-2xl font-semibold">Project Summary</h2>
            <p className="text-gray-300 text-base">
              Carter is a Retail Media Network (RMN) platform that enables advertisers to launch, manage, and optimize advertising campaigns across retail marketplaces. This case study outlines the strategic UX and UI redesign of two high-impact workflows: Campaign Creation Experience and Ad Item Management and Forecasting Interface.
            </p>
            <p className="text-gray-300 text-base">
              The redesign focused on improving campaign setup efficiency, enhancing data-driven decision-making, and introducing intelligent automation to reduce operational friction and increase advertiser success.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-2xl space-y-10 text-white">
            <h2 className="text-2xl font-semibold">Background and Problem Areas</h2>
            <h3 className="text-xl font-semibold text-white">Campaign Creation</h3>
            <ul className="list-disc text-gray-300 pl-6 space-y-2">
              <li>Overly linear and fragmented flow created a steep learning curve for users.</li>
              <li>No intelligent targeting support; all input was manual.</li>
              <li>No connection between creatives and targeting insights.</li>
              <li>No way to preview performance before launch, leading to abandonment.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white">Ad Item Management</h3>
            <ul className="list-disc text-gray-300 pl-6 space-y-2">
              <li>Outdated table layouts with poor data scanning and visibility.</li>
              <li>Lack of forecasted performance, keyword insights, and bid intelligence.</li>
              <li>No tools for replacing or optimizing creatives intelligently.</li>
              <li>No wallet pacing, budget guidance, or real-time projections.</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-2xl space-y-10 text-white">
            <h2 className="text-2xl font-semibold">Objectives</h2>
            <ul className="list-disc text-gray-300 pl-6 space-y-2">
              <li>Simplify and streamline campaign creation to improve adoption.</li>
              <li>Introduce intelligent targeting based on data and creative metadata.</li>
              <li>Redesign ad item workflow to support forecast-backed decisions.</li>
              <li>Reduce manual work by providing actionable, automated insights.</li>
            </ul>
          </section>
          <img src={Oldaditem} alt="Carter Overview" className="rounded-xl" />

          <section className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-2xl space-y-10 text-white">
            <h2 className="text-2xl font-semibold">Campaign Creation Redesign</h2>
            <h3 className="text-xl font-semibold">Key Enhancements</h3>
            <ul className="list-disc text-gray-300 pl-6 space-y-2">
              <li>Modular stepper flow: Objective → Budget → Creative → Targeting → Review</li>
              <li>AI-powered suggestions at both creative and ad item levels</li>
              <li>Live insights including reach, bid efficiency, and overlap flags</li>
              <li>Final summary screen with forecasted KPIs and segment views</li>
            </ul>
            <h3 className="text-xl font-semibold">Results</h3>
            <table className="table-auto text-gray-300 text-sm w-full">
              <thead>
                <tr className="text-left text-gray-400">
                  <th>Metric</th><th>Before</th><th>After</th><th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Campaign Abandonment Rate</td><td>27%</td><td>8.5%</td><td>-68.5%</td></tr>
                <tr><td>Avg. Setup Time</td><td>7.1 minutes</td><td>4.1 minutes</td><td>-42%</td></tr>
                <tr><td>Campaign Launch Rate</td><td>61%</td><td>81%</td><td>+20%</td></tr>
              </tbody>
            </table>
          </section>

          <img src={Aditem} alt="Carter Overview" className="rounded-xl" />

          <section className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-2xl space-y-10 text-white">
            <h2 className="text-2xl font-semibold">Ad Item Intelligence Redesign</h2>
            <h3 className="text-xl font-semibold">Key Enhancements</h3>
            <ul className="list-disc text-gray-300 pl-6 space-y-2">
              <li>Switched to card-based layout with quick action controls</li>
              <li>Integrated forecasting charts for spend, bid, and wallet pacing</li>
              <li>Auto-detection of underperforming creatives and swap recommendations</li>
              <li>ROI-based bid suggestions and budget forecasting</li>
            </ul>
            <h3 className="text-xl font-semibold">Results</h3>
            <table className="table-auto text-gray-300 text-sm w-full">
              <thead>
                <tr className="text-left text-gray-400">
                  <th>Metric</th><th>Before</th><th>After</th><th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Ad Item Review Time</td><td>6.4 minutes</td><td>3.1 minutes</td><td>-52%</td></tr>
                <tr><td>Creative Replacement Rate</td><td>14%</td><td>47%</td><td>+33%</td></tr>
                <tr><td>Forecast Tool Engagement</td><td>N/A</td><td>64%</td><td>—</td></tr>
                <tr><td>ROI Uplift from Bids</td><td>N/A</td><td>+24%</td><td>+24%</td></tr>
              </tbody>
            </table>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-2xl space-y-10 text-white">
            <h2 className="text-2xl font-semibold">User Research and Validation</h2>
            <p className="text-gray-300 text-base">
              Conducted six one-on-one usability testing sessions with advertisers. Participants responded positively to card layouts, intelligent suggestions, and forecasting tools.
            </p>
            <ul className="list-disc text-gray-300 pl-6 space-y-2">
              <li>Card layouts improved data visibility and usability</li>
              <li>Auto-suggestions accelerated workflow</li>
              <li>Graphs helped guide confident decision-making</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-2xl space-y-10 text-white">
            <h2 className="text-2xl font-semibold">Design Process</h2>
            <ul className="list-disc text-gray-300 pl-6 space-y-2">
              <li>Prototypes and wireframes created in Whimsical and Figma</li>
              <li>Systemized through Carter Design System v2.0 (Material Design 3)</li>
              <li>Weekly cross-functional reviews via Jira and Slack</li>
              <li>Handoff through Zeplin and Storybook documentation</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-2xl space-y-10 text-white">
            <h2 className="text-2xl font-semibold">Strategic Outcomes</h2>
            <ul className="list-disc text-gray-300 pl-6 space-y-2">
              <li>Faster go-to-market for advertisers via simplified setup</li>
              <li>Greater transparency and optimization driven retention</li>
              <li>Positioned Carter as a performance-focused RMN product</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-2xl space-y-10 text-white">
            <h2 className="text-2xl font-semibold">Tools and Technologies</h2>
            <ul className="list-disc text-gray-300 pl-6 space-y-2">
              <li>Design & Prototyping: Figma, Whimsical</li>
              <li>Project Management: Jira, Confluence</li>
              <li>Developer Handoff: Zeplin, Storybook</li>
              <li>User Testing: Maze, Lookback</li>
              <li>Analytics: Mixpanel, GA4</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-2xl space-y-10 text-white">
            <h2 className="text-2xl font-semibold">Future Enhancements</h2>
            <ul className="list-disc text-gray-300 pl-6 space-y-2">
              <li>Predictive alerts for campaign performance dips</li>
              <li>Live bid pacing and automatic adjustments</li>
              <li>Creative A/B testing powered by machine learning</li>
              <li>Contextual targeting from real-time consumer data</li>
            </ul>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CarterCampaign;
