import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Sparkles } from "lucide-react";

export default function FloatingAgent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-20 right-0 w-80 bg-white/95 border border-slate-200 rounded-2xl p-5 shadow-2xl backdrop-blur-xl"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-[#10B981]">
                                <Sparkles size={18} />
                                <span className="font-bold">Agent Support</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-slate-400 hover:text-[#10B981] transition-colors"
                                aria-label="Close chat"
                            >
                                <X size={18} />
                            </button>
                        </div>
                        <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                            Hello! Would you like a guided tour on how to automatically provision your first AI agent?
                        </p>
                        <button className="w-full py-2.5 bg-[#10B981]/10 text-[#10B981] rounded-lg font-semibold border border-[#10B981]/20 hover:bg-[#10B981] hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
                            Launch Agent Playground
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle AI Agent"
                className="w-14 h-14 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] transition-shadow"
            >
                {isOpen ? <X size={24} className="text-white" /> : <MessageSquare size={24} className="text-white" />}
            </motion.button>
        </div>
    );
}
