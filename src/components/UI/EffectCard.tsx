import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Copy, Check, Code, ChevronUp } from 'lucide-react';

interface EffectCardProps {
  id: string;
  title: string;
  description: string;
  Component: React.ComponentType;
  code: string;
}

export const EffectCard = ({ title, description, Component, code }: EffectCardProps) => {
  const [triggerKey, setTriggerKey] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleReplay = () => {
    setTriggerKey(k => k + 1);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group border border-gray-800 rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm"
    >
      {/* Preview Area */}
      <div className="relative h-64 bg-black overflow-hidden">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-500">Loading...</span>
          </div>
        }>
          {/* Key change = Hard remount = Animation restarts */}
          <Component key={triggerKey} />
        </Suspense>

        {/* Replay Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReplay}
          className="absolute bottom-4 right-4 bg-white/10 hover:bg-white/20 
                     backdrop-blur-md p-2.5 rounded-full transition-colors
                     opacity-0 group-hover:opacity-100"
          title="Replay Animation"
        >
          <Play className="w-4 h-4 text-white fill-white" />
        </motion.button>

        {/* Show Code Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowCode(!showCode)}
          className="absolute bottom-4 left-4 bg-white/10 hover:bg-white/20 
                     backdrop-blur-md p-2.5 rounded-full transition-colors
                     opacity-0 group-hover:opacity-100"
          title={showCode ? "Hide Code" : "Show Code"}
        >
          {showCode ? (
            <ChevronUp className="w-4 h-4 text-white" />
          ) : (
            <Code className="w-4 h-4 text-white" />
          )}
        </motion.button>
      </div>

      {/* Info Area */}
      <div className="p-4 border-t border-gray-800">
        <h3 className="font-semibold text-white text-lg">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
      </div>

      {/* Code Area */}
      <AnimatePresence>
        {showCode && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gray-800"
          >
            <div className="relative">
              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 
                           text-gray-300 px-3 py-1.5 rounded-md text-xs
                           flex items-center gap-1.5 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              
              <pre className="p-4 text-sm text-gray-300 overflow-x-auto max-h-96">
                <code>{code}</code>
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
