import { motion } from 'framer-motion';

export const MorphingShape = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
        className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-red-500"
      />
    </div>
  );
};

export const MorphingShapeCode = `import { motion } from 'framer-motion';

export const MorphingShape = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
        className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-red-500"
      />
    </div>
  );
};`;
