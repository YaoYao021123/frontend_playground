import { motion } from 'framer-motion';

export const TextReveal = () => {
  const text = "Hello World";
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.h1 className="text-3xl font-bold flex">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.05,
              ease: [0.2, 0.65, 0.3, 0.9]
            }}
            className="inline-block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export const TextRevealCode = `import { motion } from 'framer-motion';

export const TextReveal = () => {
  const text = "Hello World";
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.h1 className="text-3xl font-bold flex">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.05,
              ease: [0.2, 0.65, 0.3, 0.9]
            }}
            className="inline-block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
          >
            {char === " " ? "\\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};`;
