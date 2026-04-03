import { motion } from "framer-motion";

interface Props {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: Props) => {
  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="font-display text-6xl font-bold text-gradient-burgundy">AK</span>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
