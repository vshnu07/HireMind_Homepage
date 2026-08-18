import { useRef } from "react";
import Card from "../components/Card";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="how-it-works">
      <span className="section-label">HOW IT WORKS</span>
      <h2 className="text-heading">How HireMind Works</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <div className="z-10">
            <p className="headtext">1. Upload Resumes</p>
            <p className="subtext">
              Ingest resumes across PDF, DOCX, and plain text into an organized pipeline in seconds.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500 font-extrabold select-none opacity-20">
              AI ANALYSIS
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="SKILLS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="EXPERIENCE"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="FIT SCORE"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="JOB MATCH"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="AI"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[60%]">
            <p className="headtext">2. AI Candidate Matching</p>
            <p className="subtext">
              Automatically evaluate candidate skillsets and domain experience directly against custom job rubrics.
            </p>
          </div>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext font-bold">
              Ready to make better hiring decisions?
            </p>
            <a
              href="#product"
              className="px-5 py-3 font-semibold text-black transition-transform bg-white rounded-lg hover:-translate-y-1"
            >
              Explore Product →
            </a>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Integrations & Compatibility</p>
            <p className="subtext">
              Built to integrate seamlessly with modern engineering stacks, ATS platforms, and technical interview pipelines.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
