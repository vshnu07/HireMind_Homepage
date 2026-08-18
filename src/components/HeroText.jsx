import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Smarter", "Faster", "Better"];

  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-36 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 mb-5 border rounded-full w-fit border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-purple-300 uppercase">
            Product Hunt Release Preview
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl font-extrabold tracking-tight text-white md:text-5xl"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          HireMind AI
        </motion.h1>

        <div className="flex flex-col items-start mt-2">
          <motion.p
            className="text-4xl font-medium tracking-tight text-neutral-300 md:text-5xl"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0 }}
          >
            Turn Resumes Into <br /> Confident Hiring Decisions
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="my-1"
          >
            <FlipWords
              words={words}
              className="font-black text-white text-7xl md:text-8xl"
            />
          </motion.div>

          <motion.p
            className="text-3xl font-medium text-neutral-400 md:text-4xl"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            Hiring Intelligence
          </motion.p>

          <motion.p
            className="max-w-md mt-4 text-sm text-neutral-400"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            Automated screening, objective fit scoring, and deep candidate alignment — designed to help engineering teams hire with confidence.
          </motion.p>

          {/* Primary CTA button */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="flex items-center gap-4 mt-8"
          >
            <a
              href="#product"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-black transition-all bg-white rounded-xl hover:bg-neutral-200 hover:-translate-y-0.5 shadow-lg shadow-white/10"
            >
              Try Live Interactive Demo →
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white transition-all border border-white/15 rounded-xl hover:bg-white/5 hover:border-white/30"
            >
              How It Works
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-center px-4 space-y-5 md:hidden">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 border rounded-full border-purple-500/30 bg-purple-500/10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-purple-300">
            Product Hunt Preview
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl font-extrabold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          HireMind AI
        </motion.h1>

        <div>
          <motion.p
            className="text-3xl font-bold text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0 }}
          >
            Turn Resumes
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="my-1"
          >
            <FlipWords
              words={words}
              className="font-black text-white text-6xl"
            />
          </motion.div>

          <motion.p
            className="text-2xl font-bold text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            Into Better Hiring
          </motion.p>
        </div>

        <motion.p
          className="max-w-xs text-xs text-neutral-400"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          Automated screening and objective candidate fit scoring for high-velocity teams.
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.7 }}
          className="flex flex-col w-full gap-3 pt-2"
        >
          <a
            href="#product"
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-black transition-all bg-white rounded-xl hover:bg-neutral-200"
          >
            Try Live Interactive Demo →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;