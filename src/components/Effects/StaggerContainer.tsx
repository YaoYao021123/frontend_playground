import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const StaggerContainer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex gap-2"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg"
          />
        ))}
      </motion.div>
    </div>
  );
};

export const StaggerContainerCode = `import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const StaggerContainer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex gap-2"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg"
          />
        ))}
      </motion.div>
    </div>
  );
};`;
