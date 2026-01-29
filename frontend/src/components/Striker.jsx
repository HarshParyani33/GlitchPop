import { motion } from "framer-motion";

const Striker = ({ animationState }) => {
  const variants = {
    idle: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 0.5 } },
    attackLeft: { x: -20, rotate: -10, transition: { duration: 0.1 } },
    attackRight: { x: 20, rotate: 10, transition: { duration: 0.1 } },
    hold: { scale: 0.9, opacity: 0.8 }
  };

  return (
    <motion.div 
      className="w-24 h-32 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
      animate={animationState}
      variants={variants}
    >
      STRIKER
    </motion.div>
  );
};

export default Striker;