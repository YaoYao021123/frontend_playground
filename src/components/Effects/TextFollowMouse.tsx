import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const TextFollowMouse = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Raw motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation for following effect
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate offset from center
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      // Reset to center when mouse leaves
      mouseX.set(0);
      mouseY.set(0);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center cursor-none"
    >
      <motion.div
        style={{ x, y }}
        className="relative"
      >
        <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          FOLLOW
        </span>
        {/* Cursor dot */}
        <motion.div
          className="absolute -bottom-2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full"
          style={{ x: '-50%' }}
        />
      </motion.div>
    </div>
  );
};

export const TextFollowMouseCode = `import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const TextFollowMouse = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Raw motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation for following effect
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate offset from center
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      // Reset to center when mouse leaves
      mouseX.set(0);
      mouseY.set(0);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center cursor-none"
    >
      <motion.div
        style={{ x, y }}
        className="relative"
      >
        <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          FOLLOW
        </span>
        {/* Cursor dot */}
        <motion.div
          className="absolute -bottom-2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full"
          style={{ x: '-50%' }}
        />
      </motion.div>
    </div>
  );
};`;
