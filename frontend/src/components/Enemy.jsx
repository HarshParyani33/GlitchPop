import { motion } from "framer-motion";

const Enemy = ({ type, side, position }) => {
  // side is 'left' or 'right'
  const startX = side === 'left' ? -100 : 1000; // Outside screen
  const targetX = side === 'left' ? 400 : 500; // Near the Striker center

  return (
    <motion.div
      initial={{ x: startX, y: 300 }}
      animate={{ x: targetX }}
      transition={{ duration: type === 'boss' ? 8 : 4, ease: "linear" }}
      className={`absolute w-12 h-12 rounded-full ${
        type === 'boss' ? 'w-24 h-24 bg-red-600' : 'bg-green-500'
      }`}
    >
      <div className="text-[10px] text-white text-center mt-4">{type}</div>
    </motion.div>
  );
};

export default Enemy;