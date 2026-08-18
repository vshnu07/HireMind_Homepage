import { useState } from "react";
import { motion } from "motion/react";

const candidates = [
  {
    name: "Sarah Johnson",
    role: "Machine Learning Engineer",
    score: 94,
    skills: ["Python", "TensorFlow", "NLP"],
    recommendation: "Shortlist Candidate",
  },
  {
    name: "Michael Chen",
    role: "AI Engineer",
    score: 89,
    skills: ["PyTorch", "Python", "RAG"],
    recommendation: "Shortlist Candidate",
  },
  {
    name: "Priya Sharma",
    role: "Data Scientist",
    score: 86,
    skills: ["Python", "SQL", "Machine Learning"],
    recommendation: "Review Candidate",
  },
];

const Projects = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(0);

  const candidate = candidates[selectedCandidate];

  return (
    <section
      id="product"
      className="relative c-space section-spacing"
    >
      <span className="section-label">THE PRODUCT</span>

      <h2 className="text-heading">
        See HireMind in action.
      </h2>

      <p className="max-w-xl mt-4 subtext">
        Analyze candidates, understand their fit, and make better
        hiring decisions from one focused workspace.
      </p>

      <div className="p-5 mt-12 border rounded-3xl border-white/10 bg-white/[0.03]">

        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div>
            <p className="text-xs uppercase text-neutral-500">
              Candidate Screening
            </p>

            <h3 className="mt-1 text-xl font-semibold">
              Machine Learning Engineer
            </h3>
          </div>

          <span className="px-3 py-2 text-xs text-purple-300 border rounded-full border-purple-400/20 bg-purple-400/10">
            AI Analysis
          </span>
        </div>

        <div className="flex gap-3 py-6 overflow-x-auto">
          {candidates.map((item, index) => (
            <button
              key={item.name}
              onClick={() => setSelectedCandidate(index)}
              className={`min-w-[190px] p-3 text-left border rounded-xl transition-all ${selectedCandidate === index
                ? "border-purple-400/40 bg-purple-500/10"
                : "border-white/10 bg-transparent"
                }`}
            >
              <strong className="block text-sm">
                {item.name}
              </strong>

              <span className="block mt-1 text-xs text-neutral-500">
                {item.role}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          key={candidate.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-5 border rounded-2xl border-white/10 bg-black/20"
        >

          <div className="flex items-center justify-between gap-5">

            <div>
              <p className="text-xs text-neutral-500">
                CANDIDATE
              </p>

              <h3 className="mt-1 text-xl font-semibold">
                {candidate.name}
              </h3>

              <p className="mt-1 text-sm text-neutral-500">
                {candidate.role}
              </p>
            </div>

            <div className="text-right">
              <strong className="text-4xl text-purple-300">
                {candidate.score}
              </strong>

              <span className="text-xs text-neutral-600">
                /100
              </span>

              <p className="mt-1 text-xs text-neutral-500">
                Overall Fit
              </p>
            </div>

          </div>

          <div className="grid gap-4 mt-7 md:grid-cols-3">

            <div className="p-5 border rounded-xl border-white/10">
              <span className="text-xs tracking-wider text-neutral-600">
                STRENGTHS
              </span>

              <h4 className="mt-4 font-semibold">
                Strong Technical Fit
              </h4>

              <p className="mt-2 text-xs leading-5 text-neutral-500">
                Experience aligns closely with the role requirements.
              </p>
            </div>

            <div className="p-5 border rounded-xl border-white/10">
              <span className="text-xs tracking-wider text-neutral-600">
                SKILLS
              </span>

              <div className="flex flex-wrap gap-2 mt-4">
                {candidate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded-md bg-purple-500/10 text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 border rounded-xl border-white/10">
              <span className="text-xs tracking-wider text-neutral-600">
                RECOMMENDATION
              </span>

              <h4 className="mt-4 font-semibold text-emerald-300">
                ✓ {candidate.recommendation}
              </h4>

              <p className="mt-2 text-xs leading-5 text-neutral-500">
                High alignment with the current job description.
              </p>
            </div>

          </div>
        </motion.div>
      </div>

      <p className="mt-4 text-xs text-center text-neutral-600">
        Demo candidate data shown for product illustration purposes.
      </p>

      <div id="features" className="mt-24">

        <span className="section-label">
          WHY HIREMIND
        </span>

        <h2 className="text-heading">
          Designed around better decisions.
        </h2>

        <div className="grid gap-4 mt-10 md:grid-cols-3">

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 border rounded-2xl border-white/10 bg-white/[0.03]"
          >
            <span className="text-purple-400">01</span>

            <h3 className="mt-12 text-xl font-semibold">
              Resume Intelligence
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              Extract skills, experience, and candidate signals
              automatically.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 border rounded-2xl border-white/10 bg-white/[0.03]"
          >
            <span className="text-purple-400">02</span>

            <h3 className="mt-12 text-xl font-semibold">
              Job Matching
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              Compare candidates against job requirements and
              identify strong matches.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 border rounded-2xl border-white/10 bg-white/[0.03]"
          >
            <span className="text-purple-400">03</span>

            <h3 className="mt-12 text-xl font-semibold">
              Actionable Insights
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              Understand strengths, skill gaps, and recommendations
              at a glance.
            </p>
          </motion.div>

        </div>
      </div>

      <div className="p-10 mt-24 text-center border rounded-3xl border-white/10 bg-white/[0.03] md:p-20">

        <span className="section-label">
          READY TO START?
        </span>

        <h2 className="text-4xl font-bold md:text-6xl">
          Spend less time screening.
          <br />
          Spend more time hiring.
        </h2>

        <p className="max-w-md mx-auto mt-5 mb-8 text-sm text-neutral-500">
          Give your recruiting workflow a smarter starting point.
        </p>

        <a
          href="#home"
          className="inline-flex px-6 py-3 font-semibold text-black transition-transform bg-white rounded-lg hover:-translate-y-1"
        >
          Start with HireMind →
        </a>

      </div>
    </section>
  );
};

export default Projects;