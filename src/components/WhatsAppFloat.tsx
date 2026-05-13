import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl shadow-green-200 hover:shadow-2xl hover:shadow-green-300 transition-shadow duration-300 cursor-pointer group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 group-hover:opacity-30" />

      <motion.span
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        className="relative z-10"
      >
        <MessageCircle size={20} className="fill-white/20" />
      </motion.span>

      <span className="relative z-10 text-sm font-semibold hidden sm:inline">
        Chat with us
      </span>
    </motion.a>
  );
}
