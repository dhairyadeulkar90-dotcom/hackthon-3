/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, ElementType } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Anchor, 
  Users, 
  Sword, 
  Compass as CompassIcon, 
  Waves, 
  Crown, 
  Coins, 
  Trophy,
  ChevronRight,
  BookOpen,
  MapPin
} from 'lucide-react';

interface Stop {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  islandName: string;
  icon: ElementType;
  image?: string;
  x: number; // percentage
  y: number; // percentage
  date: string;
  details: string[];
}

export default function TimelineMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  
  const [selectedStop, setSelectedStop] = useState<number>(0);
  const [shipPos, setShipPos] = useState({ x: 80, y: 130, angle: 0 });
  const [isPathReady, setIsPathReady] = useState(false);

  const stops: Stop[] = [
    {
      id: 'port-arrival',
      title: 'Registration ',
      subtitle: 'Registration Opens',
      description: 'Enlist your crew and prepare your vessel for the voyage.',
      islandName: 'Isla de la Registrar',
      icon: Anchor,
      image: 'https://i.pinimg.com/736x/b8/3d/c2/b83dc2145ac3f3767058534007c09f8d.jpg',
      x: 8,
      y: 22,
      date: '22 July -7 August',
      details: [
        'Form teams of 2 to 4 members',
        'Secure early-bird developer perks',
        'Receive initial captain briefs and toolkits',
        'Access to private discord coordinate channels'
      ]
    },
    {
      id: 'crew-formation',
      title: 'Journey begins',
      subtitle: 'Team Building',
      description: 'Find master navigators, developers, and designers to complete your alliance.',
      islandName: 'Alliance Archipelago',
      icon: Users,
      image: 'https://i.pinimg.com/736x/3a/f0/8a/3af08a90bd13779fa9006e7682cba4a8.jpg',
      x: 23,
      y: 15,
      date: '6 AUG | 9:00 AM',
      details: [
        'Pitch ideas in live speed-networking rounds',
        'Match with specialized coders & designers',
        'Join workshops on high-seas project architectures',
        'Guild formation approval by Captain’s Council'
      ]
    },
    {
      id: 'hack-begins',
      title: 'The 1st Round',
      subtitle: 'Coding Starts',
      description: 'Weigh anchor! The 48-hour development race begins.',
      islandName: 'Stormy Peninsula',
      icon: Sword,
      image: 'https://i.pinimg.com/736x/18/72/bb/1872bbfbe110d79d67825e5c01990782.jpg',
      x: 35,
      y: 38,
      date: '11:00 AM',
      details: [
        'Opening ceremony on the main deck',
        'The primary theme and mystery multipliers revealed',
        'No-sleep sandbox begins',
        'Hourly crew safety and energy check-ins'
      ]
    },
    {
      id: 'mentor-island',
      title: '2ND ROUND BEGINS',
      subtitle: 'Mentoring Sessions',
      description: 'Seek wisdom from master captains to refine your navigation.',
      islandName: 'Sage Reef',
      icon: CompassIcon,
      image: 'https://i.pinimg.com/1200x/b3/a9/f6/b3a9f65e281de091f42a16c16b5e8d7a.jpg',
      x: 48,
      y: 55,
      date: '3:00 PM',
      details: [
        '1-on-1 breakout reviews with veteran architects',
        'Pitch feedback and monetization sanity checks',
        'Technical triage for stranded crews',
        'Exclusive mid-journey boost rewards'
      ]
    },
    {
      id: 'treasure-cave',
      title: 'Final Round',
      subtitle: 'Prize Distribution',
      description: 'Claim your massive share of the legendary prize bounty.',
      islandName: 'Bounty Grotto',
      icon: Coins,
      image: 'https://i.pinimg.com/736x/58/58/af/5858af9ab28dadda1a8c17dfc8656fcb.jpg',
      x: 62,
      y: 35,
      date: '6:00 PM',
      details: [
        'Prize distribution for elite category tracks',
        'Special novelty bounty categories revealed',
        'Venture funding letters of intent delivered',
        'Incubator residency slots unlocked'
      ]
    },
    {
      id: 'victory-harbor',
      title: 'Victory',
      subtitle: 'Closing Ceremony',
      description: 'Drop anchor and celebrate with songs of victory and fine feasts.',
      islandName: 'Port Tortuga',
      icon: Trophy,
      image: 'https://i.pinimg.com/originals/74/ca/4f/74ca4f3a5dee67f4bf7cd613555f5d59.png',
      x: 75,
      y: 18,
      date: '7:00 PM',
      details: [
        'Closing declaration from the High Council',
        'Alumni alliance onboarding',
        'Networking feast and celebratory live band',
        'The ledger of the hackathon archived'
      ]
    }
  ];

  // Framer motion scroll hook to track scroll across the map container
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ["start center", "end center"]
  });

  // Calculate ship coordinates along the path dynamically based on scroll
  useEffect(() => {
    const handleShipNavigation = () => {
      const path = pathRef.current;
      if (!path) return;

      const pathLength = path.getTotalLength();
      // Combine scroll progress and current manual selection for the ship's position
      const progress = scrollYProgress.get();
      
      // Interpolate between scroll progress and selected stop index progress
      const targetIndexProgress = selectedStop / (stops.length - 1);
      
      // We weight scroll progress, but if user clicks, we shift towards selected stop
      const combinedProgress = Math.max(0, Math.min(1, progress * 0.4 + targetIndexProgress * 0.6));
      
      const point = path.getPointAtLength(combinedProgress * pathLength);
      
      // Get a point slightly ahead to calculate the heading/rotation angle of the ship
      const aheadPoint = path.getPointAtLength(Math.min(pathLength, combinedProgress * pathLength + 5));
      const angleRad = Math.atan2(aheadPoint.y - point.y, aheadPoint.x - point.x);
      const angleDeg = (angleRad * 180) / Math.PI;

      setShipPos({
        x: point.x,
        y: point.y,
        angle: angleDeg
      });
    };

    if (isPathReady) {
      handleShipNavigation();
      const unsubscribe = scrollYProgress.on("change", handleShipNavigation);
      return () => unsubscribe();
    }
  }, [scrollYProgress, selectedStop, isPathReady]);

  // Set path ready once SVG loads
  useEffect(() => {
    if (pathRef.current) {
      setIsPathReady(true);
    }
  }, []);

  return (
    <section 
      id="journey" 
      ref={mapRef} 
      className="relative py-24 bg-slate-900 overflow-hidden text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://i.pinimg.com/1200x/06/54/4d/06544d9cf705c0dc337a292c66527d88.jpg')` }}
    >
      {/* Blur overlay & dimming */}
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[6px] pointer-events-none z-0" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />

      {/* Background Decorative Sea Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(217,119,6,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,119,6,0.03)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-[0.3em] text-amber-500 uppercase"></p>
          <h2 className="font-serif text-4xl md:text-5xl font-black mt-2 text-white">
            JOURNEY <span className="text-amber-400">TIMELINE</span>
          </h2>
          <p className="mt-4 text-sm text-slate-400 max-w-xl mx-auto font-light">
            Plot your course! Follow our legendary treasure route across the eight stops of Hackpreneur. Click any island to sail the flagship and uncover logs.
          </p>
        </div>



        {/* The Map Board */}
        <div className="relative w-full overflow-x-auto pb-8 rounded-2xl border-4 border-amber-950/60 shadow-3xl bg-slate-950/90 scrollbar-thin">
          
          {/* Map canvas wrapping map elements */}
          <div 
            className="relative min-w-[1000px] h-[600px] bg-cover bg-center overflow-hidden"
            style={{ 
              backgroundImage: `url('/src/assets/images/pirate_treasure_map_1784556589475.jpg')`,
              backgroundColor: '#0c0a09'
            }}
          >
            {/* Dark parchment atmospheric tone layer */}
            <div className="absolute inset-0 bg-slate-950/35 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-amber-950/20 pointer-events-none" />
            
            {/* Sleek Theme Map Backdrop */}
            <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, #78350f 0%, transparent 70%)' }} />

            {/* Vintage Grid / Navigation Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              {/* Compass Rose lines (radial from various hubs) */}
              <circle cx="500" cy="300" r="150" fill="none" stroke="rgba(133, 88, 26, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="500" cy="300" r="300" fill="none" stroke="rgba(133, 88, 26, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="500" y1="0" x2="500" y2="600" stroke="rgba(133, 88, 26, 0.12)" strokeWidth="1" strokeDasharray="8 8" />
              <line x1="0" y1="300" x2="1000" y2="300" stroke="rgba(133, 88, 26, 0.12)" strokeWidth="1" strokeDasharray="8 8" />
              
              {/* Natural serpentine curving pirate route */}
              <path
                ref={pathRef}
                d="M 80 130 C 140 110, 190 80, 230 90 C 280 100, 310 180, 350 228 C 390 276, 440 370, 480 330 C 520 290, 560 210, 620 210 C 680 210, 710 130, 750 108 C 800 80, 850 140, 880 228 C 910 316, 900 390, 920 468"
                fill="none"
                stroke="#d97706"
                strokeWidth="4"
                className="animated-dash-line drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              />
            </svg>

            {/* Compass in Top Right */}
            <div className="absolute top-6 right-8 w-24 h-24 pointer-events-none group select-none">
              <motion.div
                className="w-full h-full relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              >
                {/* Vintage compass frame */}
                <div className="absolute inset-0 rounded-full border-2 border-amber-900/60 flex items-center justify-center bg-amber-500/5 backdrop-blur-sm shadow-xl">
                  {/* Compass markings */}
                  <span className="absolute top-1 text-[10px] font-serif font-extrabold text-amber-800">N</span>
                  <span className="absolute bottom-1 text-[10px] font-serif font-extrabold text-amber-800">S</span>
                  <span className="absolute left-1 text-[10px] font-serif font-extrabold text-amber-800">W</span>
                  <span className="absolute right-1 text-[10px] font-serif font-extrabold text-amber-800">E</span>
                  {/* Inner ring */}
                  <div className="w-[80%] h-[80%] rounded-full border border-dashed border-amber-900/30" />
                </div>
                {/* Arrow needle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-16 bg-gradient-to-b from-amber-600 via-amber-800 to-transparent clip-path-needle rotate-12" />
              </motion.div>
            </div>





            {/* Milestone Island Pins */}
            {stops.map((stop, index) => {
              const Icon = stop.icon || MapPin;
              const isSelected = selectedStop === index;
              const isVisited = index < selectedStop;

              return (
                <div
                  key={stop.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
                  style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
                >
                  <div className="flex flex-col items-center">
                    
                    {/* Hover Glow Island / Container */}
                    <button
                      onClick={() => setSelectedStop(index)}
                      className="group/island relative flex flex-col items-center focus:outline-none cursor-pointer"
                    >

                      {/* Island Avatar / Circle */}
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className={`w-14 h-14 rounded-full flex items-center justify-center border-2 shadow-2xl transition-all duration-300 overflow-hidden ${
                          isSelected
                            ? 'bg-amber-400 border-amber-950 text-neutral-900 scale-110 shadow-[0_0_20px_rgba(245,158,11,0.6)]'
                            : isVisited
                            ? 'bg-amber-900/80 border-amber-500 text-amber-300 hover:border-amber-400'
                            : 'bg-slate-950 border-amber-900/60 text-slate-400 hover:border-amber-500 hover:text-amber-300'
                        }`}
                      >
                        {stop.image ? (
                          <img
                            src={stop.image}
                            alt={stop.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <Icon className="w-6 h-6 filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                        )}
                      </motion.div>

                      {/* Small Island Name Scroll Flag */}
                      <div className="mt-2.5 bg-neutral-950/95 border border-amber-500/30 px-2.5 py-1 rounded shadow-lg backdrop-blur-sm">
                        <p className="font-serif text-[11px] font-bold tracking-wider text-amber-300 whitespace-nowrap">
                          {stop.title}
                        </p>
                      </div>
                    </button>
                    
                  </div>
                </div>
              );
            })}

            {/* The Animated Flagship Sailing along the path - Removed */}
            {/* The Animated Flagship Sailing along the path */}
            {/* {isPathReady && (
              <motion.div
                className="absolute z-40 pointer-events-none"
                style={{
                  left: shipPos.x,
                  top: shipPos.y,
                  transform: `translate(-50%, -50%) rotate(${shipPos.angle}deg)`,
                }}
                transition={{ type: 'spring', stiffness: 40, damping: 12 }}
              >
                
                <div className="relative p-2.5 bg-amber-950 border-2 border-amber-400 text-amber-400 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.6)]">
                  <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
                  </span>
                  
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M2 21h20M19.3 14.8C21.1 13.5 22 11.7 22 10c0-3.9-3.6-7-8-7s-8 3.1-8 7c0 1.7.9 3.5 2.7 4.8l-1.7 4.2h15.3l-1.7-4.2z" />
                  </svg>
                </div>
              </motion.div>
            )} */}


          </div>

        </div>

        {/* Selected Milestone Logbook - Old Parchment Journal details display */}
        <motion.div 
          key={selectedStop}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-8 md:p-10 rounded-xl relative border-4 border-amber-950 shadow-3xl max-w-4xl mx-auto text-neutral-900 overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(rgba(251, 242, 219, 0.84), rgba(241, 223, 184, 0.92)), url('https://i.pinimg.com/736x/63/7a/07/637a07eb455f75098fb53d1bd519a5ab.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Ornamental border designs */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-950" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-950" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-950" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-950" />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b-2 border-amber-950/20">
            <div>
              <div className="flex items-center gap-2 text-amber-900 font-mono text-xs font-semibold uppercase tracking-widest">
                <MapPin className="w-4 h-4" />
                Stop #{selectedStop + 1} • {stops[selectedStop].islandName}
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-amber-950 tracking-tight mt-1">
                {stops[selectedStop].title}
              </h3>
              <p className="font-serif text-lg font-bold text-amber-800 tracking-wide mt-1">
                {stops[selectedStop].subtitle}
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end">
              <span className="text-xs font-mono tracking-widest text-amber-950/60 uppercase">Chronometer Range</span>
              <span className="font-mono text-sm md:text-base font-extrabold bg-amber-950/10 px-4 py-1.5 rounded border border-amber-950/20 text-amber-950 mt-1">
                {stops[selectedStop].date}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            
            {/* Log entry text summary */}
            <div className="md:col-span-2">
              <h4 className="font-serif text-sm font-bold text-amber-950 tracking-widest uppercase mb-2">Captain's Log entry</h4>
              <p className="font-serif italic text-amber-900 leading-relaxed text-base">
                "{stops[selectedStop].description}"
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {/* Removed navigation buttons */}
                {selectedStop === 0 && (
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe97DMn1Nm9neoDGn0zZWpHLQXjRy0CeqrI6NoVhOZQaJTmWA/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-cyan-600 text-white hover:bg-cyan-500 rounded font-serif text-xs font-bold flex items-center gap-1 select-none cursor-pointer md:ml-auto shadow-sm"
                  >
                    REGISTER
                  </a>
                )}
              </div>
            </div>

            {/* Expedition Directives checklist */}
            <div className="bg-amber-950/5 border border-amber-950/10 p-5 rounded">
              <h4 className="font-serif text-xs font-bold text-amber-950 tracking-widest uppercase mb-3 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-800" /> Expedition Directives
              </h4>
              <ul className="space-y-2.5">
                {stops[selectedStop].details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-amber-950/90 leading-normal font-sans">
                    <ChevronRight className="w-3.5 h-3.5 text-amber-800 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
