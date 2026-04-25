import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlotMachineProps {
    words: string[];
    interval?: number;
}

export default function SlotMachine({ words, interval = 3000 }: SlotMachineProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, interval);
        return () => clearInterval(timer);
    }, [words, interval]);

    return (
        <motion.span
            layout
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative inline-block h-[1.2em] overflow-hidden align-bottom"
        >
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={words[index]}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.23, 1, 0.32, 1]
                    }}
                    className="text-[#10B981] font-black whitespace-nowrap leading-none inline-block"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </motion.span>
    );
}
