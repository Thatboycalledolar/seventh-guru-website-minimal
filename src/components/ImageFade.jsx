import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageFade() {
  const images = [
    "/fade/fade-1.png",
    "/fade/fade-2.png",
    "/fade/fade-3.png",
    "/fade/fade-4.png",
    "/fade/fade-5.png",
    "/fade/fade-6.png"
    
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="relative w-full h-80 md:h-120 max-w-300 overflow-hidden shadow-2xl rounded-xl">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="hero visual"
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        />
      </AnimatePresence>
    </div>
    
  );
}