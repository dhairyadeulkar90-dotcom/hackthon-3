/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Award, Anchor, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface Champion {
  id: string;
  year: string;
  rank: string;
  teamName: string;
  project: string;
  prize: string;
  description: string;
  avatar: string;
  tech: string[];
}

export default function HallOfLegends() {
  const champions: Champion[] = [
    {
      id: 'c1',
      year: 'Hackpreneur XV',
      rank: 'Grand Champion (1st)',
      teamName: 'The Nautilus Alliance',
      project: 'Poseidon Engine',
      prize: '$15,000 Bounty',
      description: 'An AI-powered real-time oceanic route optimizer that predicts meteorological tempests and calculates optimal sailing speeds.',
      avatar: 'https://cdn.corenexis.com/f/yvioxlhqMce.jpeg',
      tech: ['React', 'TensorFlow', 'Python', 'Leaflet']
    },
    {
      id: 'c2',
      year: 'Hackpreneur XIV',
      rank: 'Silver Fleet Winner (2nd)',
      teamName: 'Ironclad Mariners',
      project: 'Kraken Web Ledger',
      prize: '$10,000 Bounty',
      description: 'A completely decentralized peer-to-peer harbor cargo invoice and ledger system using hyper-efficient light state chains.',
      avatar: 'https://cdn.corenexis.com/f/cOxU1S7SVYP.jpeg',
      tech: ['TypeScript', 'Solidity', 'Rust', 'D3.js']
    },
    {
      id: 'c3',
      year: 'Hackpreneur XIII',
      rank: 'Bronze Sloop Winner (3rd)',
      teamName: 'Tortuga Pirates',
      project: 'SmartSextant',
      prize: '$7,500 Bounty',
      description: 'A hardware-software IoT celestial mechanical compass navigation assistant that functions offline during heavy atmospheric interference.',
      avatar: 'https://cdn.corenexis.com/f/z3nxlXAQ3Mz.jpeg',
      tech: ['C++', 'Raspberry Pi', 'Node.js', 'WebSockets']
    },
    {
      id: 'c4',
      year: 'Hackpreneur XII',
      rank: 'Navigator Award (4th)',
      teamName: 'Abyssal Coders',
      project: 'Sonar Sight',
      prize: '$5,000 Bounty',
      description: 'A deep-sea acoustic mapping tool that renders 3D models of the ocean floor in real-time.',
      avatar: 'https://cdn.corenexis.com/f/I0z2UH132wQ.jpeg',
      tech: ['WebGL', 'C#', 'Unity', 'SignalR']
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % champions.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % champions.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + champions.length) % champions.length);
  };

  const champion = champions[activeIndex];

  return (
    <section 
      id="legends" 
      className="relative py-24 bg-slate-900 overflow-hidden text-white px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://i.pinimg.com/736x/b6/cd/b5/b6cdb58d47ab1760bb7c08b9a7f4641d.jpg')` }}
    >
      <div className="absolute inset-0 bg-slate-900/80 z-0 pointer-events-none" />
      
      {/* Decorative Golden Rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      {/* Deep wood textured background style (using CSS variables and linear-gradients) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#1c0d02_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-black mt-2 text-amber-500 uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            ItechRoots <span className="text-white">Winners</span>
          </h2>
        </div>

        {/* The Framing */}
        <div className="p-4 md:p-12 relative">

          {/* Carousel Layout wrapper */}
          <div className="flex items-center justify-between gap-2 md:gap-8 relative z-10">
            
            {/* Slider container */}
            <div className="flex-1 max-w-xl mx-auto overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={champion.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-transparent border-2 border-amber-500/30 rounded-xl shadow-2xl overflow-hidden group hover:border-amber-400 transition-all duration-300 min-h-[360px] md:min-h-[300px] flex items-center justify-center"
                >
                  {/* Note: Please upload your image to the file explorer and update this src */}
                  <img 
                    src={champion.avatar} 
                    alt="ItechRoots Winners" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Overlay for text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent pointer-events-none" />
                  
                  {/* Gold glowing border overlay inside */}
                  <div className="absolute inset-1 border border-amber-500/10 rounded-lg group-hover:border-amber-400/20 transition-colors pointer-events-none z-10" />

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
