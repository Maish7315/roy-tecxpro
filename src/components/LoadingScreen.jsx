import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[90] grid place-items-center bg-night"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="absolute h-44 w-44 rounded-full bg-cyan/15 blur-3xl" />
        <motion.div
          className="relative grid h-20 w-20 place-items-center rounded-3xl border border-white/15 bg-white/[0.08] shadow-glow backdrop-blur-xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
        >
          <Cpu className="text-cyan" size={34} />
        </motion.div>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase text-cyan">{profile.brand}</p>
          <p className="mt-2 text-sm text-steel">Calibrating premium digital experience</p>
        </div>
      </div>
    </motion.div>
  );
}
