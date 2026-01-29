import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export const TextScramble = () => {
  const [displayText, setDisplayText] = useState('');
  const targetText = 'DECODE';
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(targetText);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-4xl font-mono font-bold tracking-wider text-green-400">
          {displayText || targetText}
        </span>
        <motion.div
          className="h-0.5 bg-green-400 mt-2"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
      </motion.div>
    </div>
  );
};

export const TextScrambleCode = `import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export const TextScramble = () => {
  const [displayText, setDisplayText] = useState('');
  const targetText = 'DECODE';
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(targetText);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-4xl font-mono font-bold tracking-wider text-green-400">
          {displayText || targetText}
        </span>
        <motion.div
          className="h-0.5 bg-green-400 mt-2"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
      </motion.div>
    </div>
  );
};`;
