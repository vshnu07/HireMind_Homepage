import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const EasterEgg = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [keySequence, setKeySequence] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      setKeySequence((prev) => {
        const next = [...prev, key].slice(-KONAMI_CODE.length);
        if (
          next.length === KONAMI_CODE.length &&
          next.every((k, i) => k.toLowerCase() === KONAMI_CODE[i].toLowerCase())
        ) {
          setUnlocked(true);
        }
        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {unlocked && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 p-5 border rounded-2xl shadow-2xl backdrop-blur-xl border-purple-500/40 bg-[#090b20]/95 text-white max-w-sm"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="p-2 text-2xl rounded-xl bg-purple-500/20">
                🎮
              </span>
              <div>
                <h4 className="text-sm font-bold text-purple-300">
                  Easter Egg Unlocked!
                </h4>
                <p className="text-xs text-neutral-300 mt-0.5">
                  Recruiter Speedrun Mode Activated ⚡
                </p>
              </div>
            </div>
            <button
              onClick={() => setUnlocked(false)}
              className="text-neutral-400 hover:text-white text-sm px-1.5 py-0.5 rounded hover:bg-white/10"
            >
              ✕
            </button>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-neutral-400 border-t border-white/10 pt-2.5">
            Acdyon Technologies Frontend Challenge bonus round verified. You found the secret Konami code!
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
