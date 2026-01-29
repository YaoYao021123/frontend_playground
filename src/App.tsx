import { useState } from 'react';
import { motion } from 'framer-motion';
import { EffectCard } from './components/UI/EffectCard';
import { effects, categories } from './data/registry';
import { Sparkles, Github } from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredEffects = activeCategory === 'all'
    ? effects
    : effects.filter(effect => effect.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Frontend Playground</h1>
                <p className="text-sm text-gray-400">Animation Effects Collection</p>
              </div>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
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
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredEffects.map((effect) => (
            <EffectCard
              key={effect.id}
              id={effect.id}
              title={effect.title}
              description={effect.description}
              Component={effect.component}
              code={effect.code}
            />
          ))}
        </motion.div>

        {filteredEffects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">No effects found in this category.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            Built with React + Tailwind CSS + Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
