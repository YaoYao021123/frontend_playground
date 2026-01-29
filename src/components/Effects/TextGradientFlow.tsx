import { motion } from 'framer-motion';

export const TextGradientFlow = () => {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-cyan-500 to-pink-500 bg-clip-text text-transparent"
        style={{
          backgroundSize: '300% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        FLOWING
      </motion.h1>
    </div>
  );
};

export const TextGradientFlowCode = `import { motion } from 'framer-motion';

export const TextGradientFlow = () => {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-cyan-500 to-pink-500 bg-clip-text text-transparent"
        style={{
          backgroundSize: '300% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        FLOWING
      </motion.h1>
    </div>
  );
};`;
