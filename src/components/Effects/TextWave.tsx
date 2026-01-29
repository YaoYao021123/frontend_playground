import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const TextWave = () => {
  const text = 'WAVE';
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Restart animation periodically
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => setIsAnimating(true), 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-baseline gap-1">
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 0 }}
            animate={isAnimating ? {
              y: [0, -20, 0],
              color: ['#60A5FA', '#A78BFA', '#60A5FA']
            } : {}}
            transition={{
              duration: 0.6,
              repeat: isAnimating ? Infinity : 0,
              repeatDelay: 0.3,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            className="text-5xl font-bold"
            style={{ color: '#60A5FA' }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export const TextWaveCode = `import { motion } from 'framer-motion';

export const TextWave = () => {
  const text = 'WAVE';

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-baseline gap-1">
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -20, 0],
              color: ['#60A5FA', '#A78BFA', '#60A5FA']
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 0.3,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            className="text-5xl font-bold"
            style={{ color: '#60A5FA' }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};`;
