const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 py-10 mt-16 text-sm border-t border-white/10 text-neutral-400 c-space">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3 text-xs text-neutral-500">
        <span className="font-semibold text-neutral-300">HireMind AI</span>
        <span className="hidden sm:inline">•</span>
        <span>Intelligent Candidate Screening & Decision Workspace</span>
      </div>
      <div className="flex items-center gap-6 text-xs text-neutral-400">
        <a href="#home" className="transition-colors hover:text-white">
          Back to top ↑
        </a>
        <a href="#product" className="transition-colors hover:text-white">
          Interactive Demo
        </a>
        <a href="#how-it-works" className="transition-colors hover:text-white">
          How It Works
        </a>
      </div>
    </footer>
  );
};

export default Footer;
