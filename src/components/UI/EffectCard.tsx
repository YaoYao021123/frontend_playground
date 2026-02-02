import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
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
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group border border-[#90b4ce]/30 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg hover:shadow-[#3da9fc]/10 transition-all duration-300"
    >
      {/* Preview Area */}
      <div className="relative h-64 bg-[#094067] overflow-hidden">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[#90b4ce]">Loading...</span>
          </div>
        }>
          <Component key={triggerKey} />
        </Suspense>

        {/* Replay Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReplay}
          className="absolute bottom-4 right-4 bg-[#3da9fc] hover:bg-[#ef4565] 
                     p-2.5 rounded-full transition-colors shadow-lg
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
          className="absolute bottom-4 left-4 bg-[#094067] hover:bg-[#5f6c7b] 
                     p-2.5 rounded-full transition-colors shadow-lg
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
      <div className="p-4 border-t border-[#90b4ce]/30">
        <h3 className="font-semibold text-[#094067] text-lg">{title}</h3>
        <p className="text-sm text-[#5f6c7b] mt-1">{description}</p>
      </div>

      {/* Code Area */}
      <motion.div
        initial={false}
        animate={{ height: showCode ? "auto" : 0, opacity: showCode ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-[#90b4ce]/30"
      >
        <div className="relative">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 bg-[#094067] hover:bg-[#3da9fc] 
                       text-white px-3 py-1.5 rounded-md text-xs
                       flex items-center gap-1.5 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
          
          <pre className="p-4 text-sm text-[#094067] bg-[#d8eefe] overflow-x-auto max-h-96">
            <code>{code}</code>
          </pre>
        </div>
      </motion.div>
    </motion.div>
  );
};
