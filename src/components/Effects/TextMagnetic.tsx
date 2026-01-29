import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface MagneticLetterProps {
  letter: string;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}

const MagneticLetter = ({ letter, mouseX, mouseY }: MagneticLetterProps) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const unsubscribeX = mouseX.on("change", (latestX) => {
      const unsubscribeY = mouseY.on("change", (latestY) => {
        if (!letterRef.current) return;
        
        const rect = letterRef.current.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2;
        const letterCenterY = rect.top + rect.height / 2;
        
        const distanceX = latestX - letterCenterX;
        const distanceY = latestY - letterCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        // Magnetic strength decreases with distance
        const maxDistance = 150;
        const strength = Math.max(0, 1 - distance / maxDistance);
        
        x.set(distanceX * strength * 0.4);
        y.set(distanceY * strength * 0.4);
      });
      return () => unsubscribeY();
    });
    
    return () => unsubscribeX();
  }, [mouseX, mouseY, x, y]);

  return (
    <motion.span
      ref={letterRef}
      style={{ x: springX, y: springY }}
      className="inline-block text-3xl font-bold text-white"
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

export const TextMagnetic = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [text] = useState("MAGNETIC");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
    >
      <div className="flex">
        {text.split("").map((letter, i) => (
          <MagneticLetter key={i} letter={letter} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </div>
    </div>
  );
};

export const TextMagneticCode = `import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface MagneticLetterProps {
  letter: string;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}

const MagneticLetter = ({ letter, mouseX, mouseY }: MagneticLetterProps) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const unsubscribeX = mouseX.on("change", (latestX) => {
      const unsubscribeY = mouseY.on("change", (latestY) => {
        if (!letterRef.current) return;
        
        const rect = letterRef.current.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2;
        const letterCenterY = rect.top + rect.height / 2;
        
        const distanceX = latestX - letterCenterX;
        const distanceY = latestY - letterCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        const maxDistance = 150;
        const strength = Math.max(0, 1 - distance / maxDistance);
        
        x.set(distanceX * strength * 0.4);
        y.set(distanceY * strength * 0.4);
      });
      return () => unsubscribeY();
    });
    
    return () => unsubscribeX();
  }, [mouseX, mouseY, x, y]);

  return (
    <motion.span
      ref={letterRef}
      style={{ x: springX, y: springY }}
      className="inline-block text-3xl font-bold text-white"
    >
      {letter}
    </motion.span>
  );
};

export const TextMagnetic = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const text = "MAGNETIC";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
    >
      <div className="flex">
        {text.split("").map((letter, i) => (
          <MagneticLetter key={i} letter={letter} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </div>
    </div>
  );
};`;
