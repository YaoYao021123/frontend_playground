import { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EffectCard } from './components/UI/EffectCard';
import { HeroCard } from './components/UI/HeroCard';
import { effects, categories } from './data/registry';
import { Github, ArrowUp } from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hasEntered, setHasEntered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const filteredEffects = activeCategory === 'all'
    ? effects
    : effects.filter(effect => effect.category === activeCategory);

  const handleEnter = () => {
    setHasEntered(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3da9fc] via-[#ef4565] to-[#f9bc60] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <HeroCard onEnter={handleEnter} />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hasEntered ? 1 : 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-30 min-h-screen bg-[#d8eefe]"
        style={{ marginTop: '100vh' }}
      >
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-[#90b4ce]/30 bg-white/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#094067] rounded-xl shadow-lg">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#094067]">Frontend Playground</h1>
                  <p className="text-sm text-[#5f6c7b]">Animation Effects Collection</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={scrollToTop}
                  className="p-2 text-[#5f6c7b] hover:text-[#094067] transition-colors rounded-lg hover:bg-[#d8eefe]"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
                <a
                  href="https://github.com/YaoYao021123/frontend_playground"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#5f6c7b] hover:text-[#094067] transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Category Filter */}
        <div className="border-b border-[#90b4ce]/30 bg-white/50 backdrop-blur-sm sticky top-[73px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-[#ef4565] text-white shadow-lg'
                      : 'bg-[#094067] text-white hover:bg-[#3da9fc]'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {[
              { label: '总效果', value: effects.length },
              { label: '文字效果', value: effects.filter(e => e.category === 'text').length },
              { label: '交互效果', value: effects.filter(e => e.category === 'interaction').length },
              { label: '入场效果', value: effects.filter(e => e.category === 'entrance').length },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#90b4ce]/30 rounded-xl p-4 text-center shadow-sm"
              >
                <div className="text-2xl font-bold text-[#094067]">{stat.value}</div>
                <div className="text-sm text-[#5f6c7b]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Effects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredEffects.map((effect, index) => (
              <motion.div
                key={effect.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <EffectCard
                  id={effect.id}
                  title={effect.title}
                  description={effect.description}
                  Component={effect.component}
                  code={effect.code}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredEffects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#5f6c7b]">No effects found in this category.</p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-[#90b4ce]/30 mt-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-[#5f6c7b]">
                Built with React + Tailwind CSS + Framer Motion
              </p>
              <div className="flex items-center gap-2 text-sm text-[#5f6c7b]">
                <span>Made with</span>
                <span className="text-[#ef4565]">♥</span>
                <span>by YaoYao</span>
              </div>
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}

export default App;
