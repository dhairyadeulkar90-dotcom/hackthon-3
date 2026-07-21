import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Track scroll position of the hero section relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax and zoom calculations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const elementsY = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  const elementsOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  
  // Sailing flagship boat animation across the bottom wave separator based on scroll
  const shipScrollX = useTransform(scrollYProgress, [0, 1], ["-10%", "110%"]);
  const shipTiltY = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -3, 3, -3, 3, 0]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-[115vh] flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-white pt-24 pb-36"
    >
      {/* Background Video with Parallax & Zoom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ 
          y: backgroundY, 
          scale: backgroundScale,
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dh3xdbqod/video/upload/v1784570783/video_20260720_215321_pxrklu.mp4"
        />
      </motion.div>
      
      {/* Deep cinematic gradient overlays */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950 z-0 pointer-events-none" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,6,23,0.95)_100%)] z-0 pointer-events-none" 
      />



      {/* Sparks rising from the depths */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-50"
            style={{
              left: `${(i * 4) + Math.random() * 4}%`,
              top: `${80 + Math.random() * 20}%`,
            }}
            animate={{
              y: [0, -400 - Math.random() * 400],
              x: [0, (Math.random() - 0.5) * 120],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 0.5, // Start sparks almost immediately
            }}
          />
        ))}
      </div>

      {/* Main Content Wrap with parallax scrolling fade-out */}
      <motion.div 
        style={{ y: elementsY, opacity: elementsOpacity }}
        className="relative z-20 max-w-6xl mx-auto px-4 text-center flex flex-col items-center"
      >
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-8xl font-black text-white tracking-tight leading-none text-stroke-gold uppercase"
        >
          HACKPRENEUR
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
          className="mt-20 font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-amber-400 font-semibold max-w-xl leading-relaxed"
        >
          
        </motion.p>

        {/* Register Button */}
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe97DMn1Nm9neoDGn0zZWpHLQXjRy0CeqrI6NoVhOZQaJTmWA/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          className="mt-32 px-10 py-4 font-mono text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-slate-950 hover:text-white bg-amber-400 hover:bg-cyan-500 border border-amber-500/20 hover:border-cyan-400 rounded-lg shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:shadow-[0_0_40px_rgba(6,182,212,0.45)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer z-30 select-none inline-block"
        >
          Registration
        </motion.a>
      </motion.div>

      {/* Cinematic Animated Wave Separator at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 pointer-events-none">
        
        {/* Flagship Sailing Across Waves on Scroll */}
        <motion.div
          style={{ x: shipScrollX, y: shipTiltY }}
          className="absolute bottom-10 left-0 w-16 h-16 z-30 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
        >
          <svg className="w-full h-full text-amber-500 fill-amber-500" viewBox="0 0 24 24">
            <path d="M2 21h20M19.3 14.8C21.1 13.5 22 11.7 22 10c0-3.9-3.6-7-8-7s-8 3.1-8 7c0 1.7.9 3.5 2.7 4.8l-1.7 4.2h15.3l-1.7-4.2z" fill="currentColor" />
          </svg>
          <span className="absolute -top-4 left-1 text-[8px] font-mono font-bold bg-slate-950/90 text-amber-400 border border-amber-500/20 px-1 py-0.5 rounded shadow">
            HACK_VESSE
          </span>
        </motion.div>

        {/* Double Wave Layer */}
        <svg className="relative block w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0 C150,90 350,-40 500,45 C650,130 850,-10 1000,50 C1100,90 1150,60 1200,30 L1200,120 L0,120 Z" 
            className="fill-slate-900/60"
          ></path>
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,3.58,74.77,15.71,114.28,29.9c45.42,16.3,95.53,30.34,141.22,34A1283,1283,0,0,0,321.39,56.44Z" 
            className="fill-slate-900"
          ></path>
        </svg>
      </div>
    </section>
  );
}
