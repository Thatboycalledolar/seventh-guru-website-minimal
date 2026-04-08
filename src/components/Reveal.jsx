import { motion } from "framer-motion";

export default function Reveal({ children, 
  duration = 0.7, 
  delay = 0, 
  y = 70,
  className = ""  }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}