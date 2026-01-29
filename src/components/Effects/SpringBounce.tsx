import { motion } from 'framer-motion';

export const SpringBounce = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: 10
        }}
        whileTap={{ scale: 0.9 }}
        className="w-28 h-28 bg-gradient-to-br from-orange-400 to-pink-600 rounded-2xl shadow-2xl cursor-pointer"
      />
    </div>
  );
};

export const SpringBounceCode = `import { motion } from 'framer-motion';

export const SpringBounce = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: 10
        }}
        whileTap={{ scale: 0.9 }}
        className="w-28 h-28 bg-gradient-to-br from-orange-400 to-pink-600 rounded-2xl shadow-2xl cursor-pointer"
      />
    </div>
  );
};`;
