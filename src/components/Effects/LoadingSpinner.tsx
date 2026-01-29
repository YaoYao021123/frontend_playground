import { motion } from 'framer-motion';

export const LoadingSpinner = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative w-20 h-20"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-4 border-transparent"
            style={{
              borderTopColor: i === 0 ? '#60A5FA' : i === 1 ? '#A78BFA' : '#F472B6',
              transform: `scale(${1 - i * 0.15})`
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1 + i * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const LoadingSpinnerCode = `import { motion } from 'framer-motion';

export const LoadingSpinner = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative w-20 h-20"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-4 border-transparent"
            style={{
              borderTopColor: i === 0 ? '#60A5FA' : i === 1 ? '#A78BFA' : '#F472B6',
              transform: \`scale(\${1 - i * 0.15})\`
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1 + i * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};`;
