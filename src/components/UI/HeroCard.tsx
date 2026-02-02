import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Wand2 } from 'lucide-react';

interface HeroCardProps {
  onEnter: () => void;
}

const cardData = [
  { id: 1, title: 'Fade', color: 'from-[#3da9fc] to-[#90b4ce]', emoji: '✨' },
  { id: 2, title: 'Spring', color: 'from-[#ef4565] to-[#f9bc60]', emoji: '🎯' },
  { id: 3, title: 'Text', color: 'from-[#f9bc60] to-[#3da9fc]', emoji: '📝' },
  { id: 4, title: '3D', color: 'from-[#90b4ce] to-[#ef4565]', emoji: '🎲' },
  { id: 5, title: 'Morph', color: 'from-[#3da9fc] to-[#f9bc60]', emoji: '🌀' },
  { id: 6, title: 'Wave', color: 'from-[#ef4565] to-[#90b4ce]', emoji: '👋' },
];

export const HeroCard = ({ onEnter }: HeroCardProps) => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isRevealed, setIsRevealed] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform values based on scroll
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const heroY = useTransform(scrollY, [0, 400], [0, -100]);
  
  // Auto flip cards on mount with stagger
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
      cardData.forEach((_, index) => {
        setTimeout(() => {
          setFlippedCards(prev => [...prev, index]);
        }, index * 150);
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (index: number) => {
    if (!flippedCards.includes(index)) {
      setFlippedCards(prev => [...prev, index]);
    }
  };

  const handleEnter = () => {
    onEnter();
    // Smooth scroll to content
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <motion.div
      style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#094067]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3da9fc]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ef4565]/10 rounded-full blur-3xl" />
      </div>

      {/* Header - Artistic Title with Happy Hues */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 z-10"
      >
        {/* Animated Artistic Title */}
        <div className="relative mb-6">
          <motion.h1 
            className="text-6xl md:text-8xl font-black text-[#fffffe] tracking-tighter"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            {'Frontend'.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                whileHover={{
                  scale: 1.2,
                  color: '#3da9fc',
                  transition: { duration: 0.2 }
                }}
                className="inline-block cursor-default"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-black tracking-tighter mt-2"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            {'Playground'.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.05,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: Math.random() * 10 - 5,
                  transition: { duration: 0.2 }
                }}
                className="inline-block cursor-default bg-gradient-to-r from-[#3da9fc] via-[#ef4565] to-[#f9bc60] bg-clip-text text-transparent"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          {/* Glow Effect with Happy Hues */}
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-[#3da9fc]/20 via-[#ef4565]/20 to-[#f9bc60]/20 blur-3xl -z-10"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-xl text-[#90b4ce] max-w-2xl mx-auto"
        >
          点击卡片揭示动画效果，或向下滚动进入 playground
        </motion.p>
      </motion.div>

      {/* Card Grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 mb-12 z-10 px-4">
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50, rotateY: 180 }}
            animate={{
              opacity: flippedCards.includes(index) ? 1 : 0.3,
              y: flippedCards.includes(index) ? 0 : 20,
              rotateY: flippedCards.includes(index) ? 0 : 180,
              scale: flippedCards.includes(index) ? 1 : 0.9,
            }}
            transition={{
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1],
            }}
            whileHover={{ 
              scale: 1.1, 
              rotateY: 10,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCardClick(index)}
            className="relative w-20 h-28 md:w-24 md:h-32 cursor-pointer perspective-1000"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Card Front */}
            <div 
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${card.color} p-[2px] shadow-xl`}
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="w-full h-full bg-[#fffffe] rounded-xl flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl mb-2">{card.emoji}</span>
                <span className="text-xs md:text-sm font-medium text-[#094067]">{card.title}</span>
              </div>
            </div>
            
            {/* Card Back (Hidden) */}
            <div 
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#094067] to-[#5f6c7b] border-2 border-[#3da9fc]/30 flex items-center justify-center"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <Wand2 className="w-8 h-8 text-[#3da9fc]" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isRevealed ? 1 : 0 }}
        className="text-center z-10"
      >
        <div className="text-[#90b4ce] text-sm mb-4">
          已揭示 {flippedCards.length} / {cardData.length} 张卡片
        </div>
        
        {/* Enter Button - Happy Hues Style */}
        <motion.button
          onClick={handleEnter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-4 bg-[#3da9fc] rounded-full font-semibold text-[#fffffe] shadow-lg shadow-[#3da9fc]/25 overflow-hidden hover:bg-[#ef4565] transition-colors duration-300"
        >
          <span className="relative z-10 flex items-center gap-2">
            进入 Playground
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.span>
          </span>
        </motion.button>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#90b4ce] text-sm flex flex-col items-center gap-2"
      >
        <span>向下滚动</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
