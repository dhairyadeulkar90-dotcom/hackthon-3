/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coins, Trophy, ShieldAlert, Sparkles, KeyRound } from 'lucide-react';

interface PrizeCard {
  rank: string;
  amount: string;
  title: string;
  icon: string;
  perks: string[];
  color: string;
}

export default function Prizes() {
  const [isOpen, setIsOpen] = useState(false);

  const prizes: PrizeCard[] = [
    {
      rank: '1st',
      amount: '3000',
      title: 'Vibe Coding',
      icon: '',
      perks: [
        'Direct entry to elite startup incubator',
        'Fully paid flights to San Francisco demo day',
        '1-on-1 VC term sheet mentoring',
        'Custom golden ship champion trophies'
      ],
      color: 'border-amber-400 shadow-amber-500/20'
    },
    {
      rank: '2nd',
      amount: '500',
      title: 'Code Clash',
      icon: '',
      perks: [
        'Guaranteed summer tech internships',
        'Dedicated cloud architecture credits',
        'Hardware kits & developer accessory kits',
        'Custom silver ship trophies'
      ],
      color: 'border-slate-300 shadow-slate-400/10'
    },
    {
      rank: '3rd',
      amount: 'Find me ',
      title: 'Navigator’s Stash',
      icon: '',
      perks: [
        'Sponsor direct interview cards',
        'Venture mentor matching hours',
        'Tech gadget vouchers',
        'Custom bronze ship trophies'
      ],
      color: 'border-amber-700 shadow-amber-800/10'
    },
    {
      rank: 'Special',
      amount: '1000',
      title: 'Web tech',
      icon: '',
      perks: [
        'Best original design award',
        'Most rebellious architecture award',
        'Green tech sustainable code award',
        'Elite solver medals'
      ],
      color: 'border-teal-500 shadow-teal-500/10'
    }
  ];

  return (
    <section id="prizes" className="relative py-24 bg-slate-900 overflow-hidden text-white px-4">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(217,119,6,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,119,6,0.02)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-black mt-2 text-white uppercase">
            <span className="text-amber-400">TECHNICAL EVENTS</span>
          </h2>
        </div>

        {/* The Animated Chest Stage */}
        <div className="flex flex-col items-center justify-center mb-16 relative">
          
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* Chest Locked View */
              <motion.div
                key="locked"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center"
              >
                {/* Chest Glow Ring */}
                <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
                  
                  {/* Outer pulsating ring */}
                  <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-3xl animate-pulse scale-125" />
                  
                  {/* Chest Image Frame */}
                  <motion.div 
                    className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-slate-950"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src="https://cdn.phototourl.com/free/2026-07-21-59d0cfc6-ae30-419c-a9f5-4c6d2a341848.jpg"
                      alt="Locked Treasure Chest"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    {/* Glowing golden prompt on image */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                      <div className="p-3 rounded-full bg-amber-500 text-slate-950 shadow-xl border border-amber-300 animate-bounce cursor-pointer">
                        <KeyRound className="w-6 h-6" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Sparkle overlays removed */}
                </div>

                <button
                  id="btn-unlock-vault"
                  onClick={() => setIsOpen(true)}
                  className="mt-8 px-6 py-3 font-serif text-sm font-bold tracking-widest text-amber-400 bg-slate-950/80 border-2 border-amber-500/40 hover:border-amber-400 hover:bg-slate-950 rounded shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                 
                  UNLOCK Other Events 
                </button>
              </motion.div>
            ) : (
              /* Chest Unlocked View with Radiant Rays */
              <motion.div
                key="unlocked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full flex flex-col items-center"
              >
                {/* Floating Coins & Light Ray Effect */}
                <div className="absolute top-10 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl mix-blend-screen animate-pulse pointer-events-none z-0" />
                
                {/* Visual feedback of the open chest state */}
                <div className="relative mb-12 flex flex-col items-center">
                  <div 
                    className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-amber-400 shadow-2xl shadow-amber-500/30 bg-amber-950 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setIsOpen(false)}
                    title="Close Chest"
                  >
                    <img
                      src="https://cdn.phototourl.com/free/2026-07-21-59d0cfc6-ae30-419c-a9f5-4c6d2a341848.jpg"
                      alt="Unlocked Chest"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover scale-110 filter brightness-110"
                    />
                    <div className="absolute inset-0 bg-radial-gradient(circle, transparent 40%, #000 100%)" />
                    
                    {/* Glowing Sparkles emerging from top */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl animate-ping opacity-60">✨</span>
                    </div>
                  </div>
                  
                  {/* Removed coins counter indicator */}
                </div>

                {/* Prize Cards Grid emerging from chest */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full z-10">
                  {prizes.map((prize, index) => (
                    <motion.div
                      key={prize.rank}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 0.15, duration: 0.6, type: 'spring', stiffness: 50 }}
                      className={`relative bg-slate-950/90 border-2 rounded-xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-slate-950 ${prize.color}`}
                    >
                      {/* Stud corner overlays */}
                      <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-amber-500/20" />
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-500/20" />
                      <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-amber-500/20" />
                      <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-amber-500/20" />

                      {/* Rank Indicator */}
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-4xl font-extrabold text-amber-400">
                            {prize.icon}
                          </span>
                          <span className="font-mono text-xs bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-400 font-bold uppercase tracking-widest">
                            {prize.rank} Place
                          </span>
                        </div>

                        <h3 className="font-serif text-lg font-bold text-white mt-4 tracking-wide leading-tight">
                          {prize.title}
                        </h3>

                        <h4 className="font-serif text-3xl font-black text-amber-400 tracking-tight mt-1">
                          {prize.amount}
                        </h4>

                        {/* Perks */}
                        <ul className="mt-6 space-y-2.5 border-t border-slate-900 pt-4">
                          {prize.perks.map((perk, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal font-light">
                              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                              <span>{perk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Small visual coin flourish */}
                      <div className="mt-6 text-right">
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                          <Trophy className="w-3.5 h-3.5 text-amber-500" /> Secure Loot
                        </span>
                      </div>

                    </motion.div>
                  ))}
                </div>

                {/* Reset Trigger to inspect again */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-12 text-xs font-mono text-slate-500 hover:text-amber-400 transition-colors uppercase tracking-widest cursor-pointer"
                >
                
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
