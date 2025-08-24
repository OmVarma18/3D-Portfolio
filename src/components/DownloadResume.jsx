import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DownloadResumeButton = ({ resumePath = "assets/Resume/Om Varma Resume.pdf" }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadClick = () => {
    // This will trigger the browser's download functionality
    // The download attribute on motion.a takes care of the actual download
    setDownloaded(true);

    setTimeout(() => {
      setDownloaded(false);
    }, 2000);
  };

  return (
    <motion.a
      href={resumePath}
      download="Om Varma Resume.pdf"
      onClick={handleDownloadClick} // Add onClick handler
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden flex items-center justify-center gap-2"
    >
      <AnimatePresence mode="wait">
        {downloaded ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="downloaded"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src="" className="w-5" alt="" /> {/* Placeholder for a 'done' icon */}
            Resume Downloaded!
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="download"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download Resume
          </motion.p>
        )}
      </AnimatePresence>
    </motion.a>
  );
};

export default DownloadResumeButton;