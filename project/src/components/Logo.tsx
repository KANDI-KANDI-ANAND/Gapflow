import { motion } from 'framer-motion';
 
 export default function Logo() {
   return (
     <div className="relative flex items-center justify-center w-10 h-10 group">
       {/* Premium Glow Layer */}
       <div className="absolute inset-0 bg-[#10b981]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
       
       <svg
         width="32"
         height="32"
         viewBox="0 0 32 32"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className="relative z-10"
       >
         <defs>
           <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#10B981" />
             <stop offset="50%" stopColor="#3B82F6" />
             <stop offset="100%" stopColor="#8B5CF6" />
           </linearGradient>
           <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
             <feGaussianBlur stdDeviation="1.5" result="blur" />
             <feComposite in="SourceGraphic" in2="blur" operator="over" />
           </filter>
         </defs>
 
         {/* Main Path - The "Flow" G */}
         <motion.path
           d="M26 8C26 8 22 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16V14H16"
           stroke="url(#logoGradient)"
           strokeWidth="3.5"
           strokeLinecap="round"
           strokeLinejoin="round"
           initial={{ pathLength: 0, opacity: 0 }}
           animate={{ pathLength: 1, opacity: 1 }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
         />
 
         {/* The "Connection" Nodes */}
         <motion.circle
           cx="16"
           cy="14"
           r="3"
           fill="#10B981"
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ delay: 1, duration: 0.5, type: "spring" }}
           style={{ filter: 'url(#glow)' }}
         />
         
         <motion.circle
           cx="26"
           cy="8"
           r="2.5"
           fill="#8B5CF6"
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
         />
 
         {/* Decorative Flow Accent */}
         <motion.path
           d="M12 16H20"
           stroke="white"
           strokeWidth="1.5"
           strokeLinecap="round"
           opacity="0.6"
           initial={{ pathLength: 0 }}
           animate={{ pathLength: 1 }}
           transition={{ delay: 1.5, duration: 0.8 }}
         />
       </svg>
     </div>
   );
 }
