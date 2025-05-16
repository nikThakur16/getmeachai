// src/comman/PageTransition.tsx
import { motion } from "framer-motion";


export const PageTransition = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Slightly longer fade for smoother transition
      className="w-full h-screen flex items-center bg-[#FAFAFA] justify-center"
    >
      <motion.img
        src="/gifs/ninjas-running-24084-1-min-1736334057.gif"
        alt=""
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }} // Slightly longer scale animation
        className="w-auto h-auto" // Ensure GIF displays at its natural size
      />
    </motion.div>
  );
};