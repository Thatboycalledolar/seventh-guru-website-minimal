import { motion } from "framer-motion";

export default function RevealStaggered({ children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        }
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}