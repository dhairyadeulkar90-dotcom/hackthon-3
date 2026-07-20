/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Anchor, Skull, Sparkles, Check } from 'lucide-react';

import Hero from './components/Hero';
import About from './components/About';
import Legacy from './components/Legacy';
import TimelineMap from './components/TimelineMap';
import Highlights from './components/Highlights';
import HallOfLegends from './components/HallOfLegends';
import Prizes from './components/Prizes';
import Organizers from './components/Organizers';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false); // Initially false to let hero play
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Registration modal states
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [captainName, setCaptainName] = useState('');
  const [captainEmail, setCaptainEmail] = useState('');
  const [crewName, setCrewName] = useState('');
  const [captainRole, setCaptainRole] = useState('Navigator');
  const [lastScrollY, setLastScrollY] = useState(0);

  // Pop up navbar after hero animation finishes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
      setIsHeroPlaying(false);
    }, 1800); // 1.8s allows the hero animations to complete
    return () => clearTimeout(timer);
  }, []);

  const handleContainerScroll = () => {
    if (isHeroPlaying || !scrollContainerRef.current) return;
    
    const currentScrollY = scrollContainerRef.current.scrollTop;
    
    if (currentScrollY < 10) {
      setShowNavbar(true);
    } else if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  // Custom smooth scroll function for controlled speed
  const smoothScrollTo = (targetY: number, duration: number) => {
    if (!scrollContainerRef.current) return;
    const startY = scrollContainerRef.current.scrollTop;
    const difference = targetY - startY;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      
      // Easing function (easeInOutQuad)
      const ease = percent < 0.5 
        ? 2 * percent * percent 
        : -1 + (4 - 2 * percent) * percent;

      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = startY + (difference * ease);
      }

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  // Smooth scroll handler for anchor links
  const handleScroll = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element && scrollContainerRef.current) {
      const top = element.offsetTop;
      smoothScrollTo(top, 800); // 800ms for medium speed
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Timeline', id: 'journey' },
    { name: 'Other Events', id: 'prizes' },
  ];

  return (
    <div 
      ref={scrollContainerRef}
      onScroll={handleContainerScroll}
      className="relative h-screen bg-slate-950 text-slate-100 overflow-x-hidden overflow-y-auto"
    >
      
      {/* Background Texture Overlays matching Sleek Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-slate-950 pointer-events-none z-0" />

      {/* 1. Glassmorphic Navigation Bar */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: showNavbar ? 0 : -100, opacity: showNavbar ? 1 : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed top-4 inset-x-0 z-50 flex justify-center pointer-events-none"
      >
        <nav className="pointer-events-auto h-12 bg-slate-950/80 backdrop-blur-md border border-amber-900/30 flex items-center justify-center px-6 rounded-full overflow-hidden shadow-2xl relative">
          {/* Dotted Circle Background inside the navigation bar only */}
          <div className="absolute inset-0 opacity-20 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#fbbf24 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest font-semibold relative z-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="text-slate-400 hover:text-amber-400 transition-colors uppercase cursor-pointer relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="block md:hidden p-1 text-slate-300 hover:text-amber-400 focus:outline-none cursor-pointer relative z-10"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 bg-slate-950/95 border-b border-amber-500/20 z-40 flex flex-col items-center py-8 gap-5 font-mono text-sm tracking-widest shadow-2xl backdrop-blur-lg md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="text-slate-300 hover:text-amber-400 transition-colors uppercase w-full py-2 text-center cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Content Sections */}
      <main className="relative z-10">
        
        {/* Section 1: Hero */}
        <Hero onRegisterClick={() => setIsRegisterOpen(true)} />

        {/* Section 2: About Hackpreneur */}
        <About />

        {/* Section 3: Our Legacy (Treasure Vault stats) */}
        <Legacy />

        {/* Section 5: Event Highlights (Captain's Logbook Gallery) */}
        <Highlights />

        {/* Section 6: Hall of Legends (Wooden Wall of Fame Winners) */}
        <HallOfLegends />

        {/* Section 4: Journey Timeline (Centerpiece Treasure Map) */}
        <TimelineMap />

        {/* Section 8: Prize Section (Animated Treasure Chest) */}
        <Prizes />

        {/* Section 9: Organizers (Captain's Council) */}
        <Organizers />

        {/* Section 10: Sponsors (Allied Fleet Flags) */}
        <Sponsors />

      </main>

      {/* 3. Footer */}
      <Footer />

      {/* Registration Modal Overlay */}
      <AnimatePresence>
        {isRegisterOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-slate-900 border-2 border-amber-500/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.15)] flex flex-col"
            >
              {/* Dotted background matching the theme */}
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

              {/* Close Button */}
              <button
                onClick={() => {
                  setIsRegisterOpen(false);
                  setRegisterSuccess(false);
                }}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-950/60 hover:bg-slate-950 border border-amber-500/20 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 relative z-10">
                {!registerSuccess ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setRegisterSuccess(true);
                    }}
                    className="space-y-6"
                  >
                    {/* Header */}
                    <div className="text-center pb-2 border-b border-amber-950/40">
                      <div className="flex justify-center mb-2">
                        <Anchor className="w-10 h-10 text-amber-500 animate-pulse" />
                      </div>
                      <h3 className="font-serif text-2xl font-black text-white uppercase tracking-wider">
                        Sign Voyage Contract
                      </h3>
                      <p className="text-xs font-mono text-amber-400/80 uppercase tracking-widest mt-1">
                        Form Your Fleet Alliance
                      </p>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                          Captain Name (Full Name)
                        </label>
                        <input
                          type="text"
                          required
                          value={captainName}
                          onChange={(e) => setCaptainName(e.target.value)}
                          placeholder="e.g. Captain Edward Teach"
                          className="w-full bg-slate-950 border border-amber-500/25 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors placeholder:text-slate-600 font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                          Signal Address (Email)
                        </label>
                        <input
                          type="email"
                          required
                          value={captainEmail}
                          onChange={(e) => setCaptainEmail(e.target.value)}
                          placeholder="captain@highseas.com"
                          className="w-full bg-slate-950 border border-amber-500/25 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors placeholder:text-slate-600 font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                          Vessel Name (Team Name)
                        </label>
                        <input
                          type="text"
                          required
                          value={crewName}
                          onChange={(e) => setCrewName(e.target.value)}
                          placeholder="e.g. Black Pearl"
                          className="w-full bg-slate-950 border border-amber-500/25 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors placeholder:text-slate-600 font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                          Primary Specialty (Role)
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {['Navigator (Dev)', 'Helmsman (Design)', 'Quartermaster (PM)', 'Gunner (Pitcher)'].map((role) => (
                            <button
                              key={role}
                              type="button"
                              onClick={() => setCaptainRole(role)}
                              className={`px-3 py-2 text-[10px] font-mono uppercase border rounded-lg transition-all ${
                                captainRole === role
                                  ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                                  : 'bg-slate-950 border-amber-500/10 text-slate-400 hover:text-amber-400'
                              }`}
                            >
                              {role}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 mt-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-mono text-xs font-bold uppercase tracking-widest rounded-lg transition-all active:scale-95 shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Skull className="w-4 h-4 text-slate-950" />
                      Sign The Parchment
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-6"
                  >
                    <div className="w-16 h-16 bg-amber-500/10 border-2 border-amber-400 rounded-full flex items-center justify-center mx-auto text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                      <Check className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-black text-white uppercase tracking-wider">
                        Alliance Registered
                      </h3>
                      <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mt-1">
                        Welcome Aboard, Captain {captainName}!
                      </p>
                    </div>
                    <div className="p-4 bg-slate-950/60 rounded-xl border border-amber-500/10 text-xs text-slate-400 font-mono max-w-sm mx-auto leading-relaxed">
                      Your vessel <span className="text-amber-400 font-bold">"{crewName}"</span> is officially flagged for the Hackpreneur Voyage. Keep watch on your signal address <span className="text-amber-400 font-bold">{captainEmail}</span> for fleet orders.
                    </div>
                    <button
                      onClick={() => {
                        setIsRegisterOpen(false);
                        setRegisterSuccess(false);
                        setCaptainName('');
                        setCaptainEmail('');
                        setCrewName('');
                      }}
                      className="px-6 py-2 bg-slate-950 hover:bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
