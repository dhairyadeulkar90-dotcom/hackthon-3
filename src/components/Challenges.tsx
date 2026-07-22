/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementType } from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, Globe, Layers, Cpu, HelpCircle, Anchor } from 'lucide-react';

interface ChallengeTrack {
  id: string;
  title: string;
  islandName: string;
  icon: ElementType;
  description: string;
  directives: string[];
  rewards: string;
  gradient: string;
}

export default function Challenges() {
  const tracks: ChallengeTrack[] = [
    {
      id: 'ai',
      title: 'AI & Neural Systems',
      islandName: 'Isla de la Inteligencia',
      icon: BrainCircuit,
      description: 'Navigate the vast currents of LLMs, neural networks, and computer vision to forge smart navigational assistants or smart automation agents.',
      directives: [
        'Deploy smart predictive agents for logistics',
        'Build natural language logbook summarizers',
        'Integrate computer vision for safety detection'
      ],
      rewards: '$10k Sovereign Bounty',
      gradient: 'from-blue-900/20 via-blue-950/45 to-slate-950'
    },
    {
      id: 'web',
      title: 'Flagship Web & Apps',
      islandName: 'Archi-web-ago',
      icon: Globe,
      description: 'Design ultra-responsive web flagships and fluid digital harbors. We praise flawless usability, responsive hull designs, and sturdy servers.',
      directives: [
        'Craft robust multi-player collaboration docks',
        'Build real-time commerce charts or listings',
        'Implement fluid, eye-safe user configurations'
      ],
      rewards: '$10k Sovereign Bounty',
      gradient: 'from-amber-900/20 via-amber-950/45 to-slate-950'
    },
    {
      id: 'blockchain',
      title: 'Sovereign Blockchain',
      islandName: 'Crypt-o Ledger Cay',
      icon: Layers,
      description: 'Establish secure, decentralized covenants on-chain. Audit absolute ledgers, secure smart contracts, or draft cargo freight agreements.',
      directives: [
        'Launch decentralized crew sharing agreements',
        'Build multi-sig bounty payout safes',
        'Establish NFT land or shipping title charters'
      ],
      rewards: '$10k Sovereign Bounty',
      gradient: 'from-purple-900/20 via-purple-950/45 to-slate-950'
    },
    {
      id: 'iot',
      title: 'IoT & Telemetry Seals',
      islandName: 'Isla de los Sensores',
      icon: Cpu,
      description: 'Connect hardware telemetry to server sails. Create offline mechanical devices, environment relays, or sensory distress signals.',
      directives: [
        'Assemble remote wave height or wind sensors',
        'Design secure mechanical locking hatches',
        'Build smart wearable emergency signals'
      ],
      rewards: '$10k Sovereign Bounty',
      gradient: 'from-teal-900/20 via-teal-950/45 to-slate-950'
    }
  ];

  return (
    <section id="challenges" className="relative py-24 bg-slate-950 overflow-hidden text-white px-4">
      
      {/* Decorative Ornaments */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <p className="text-xs font-mono tracking-[0.3em] text-amber-500 uppercase">THE ARCHIPELAGO OF QUESTS</p>
          <h2 className="font-serif text-4xl md:text-5xl font-black mt-2 text-amber-500 uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            CHALLENGE <span className="text-white">ISLANDS</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500/30 mx-auto mt-4 rounded" />
          <p className="mt-4 text-sm text-slate-400 max-w-lg mx-auto font-light leading-relaxed">
            Every island holds uncharted riches and unique tempests. Choose your harbor, draft your specifications, and assemble the proper technical gear.
          </p>
        </div>

        {/* Islands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, index) => {
            const Icon = track.icon;

            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative rounded-xl border border-amber-500/10 p-8 flex flex-col justify-between overflow-hidden group hover:border-amber-400/40 transition-all duration-300 shadow-2xl bg-gradient-to-br ${track.gradient}`}
              >
                {/* Micro compass grid lines in card */}
                <div className="absolute inset-0 bg-[radial-gradient(#d97706_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

                {/* Card Corners */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-amber-500/20 group-hover:border-amber-400/40" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-amber-500/20 group-hover:border-amber-400/40" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-amber-500/20 group-hover:border-amber-400/40" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-amber-500/20 group-hover:border-amber-400/40" />

                {/* Island Header */}
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] font-mono tracking-widest text-amber-500 uppercase font-semibold">
                        {track.islandName}
                      </p>
                      <h3 className="font-serif text-2xl font-black mt-1 text-white tracking-wide">
                        {track.title}
                      </h3>
                    </div>
                    <div className="p-3.5 bg-slate-900 border border-amber-500/20 rounded-lg text-amber-400 group-hover:bg-amber-400 group-hover:text-amber-950 transition-all duration-300 shadow">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <p className="mt-4 text-xs font-mono text-slate-400 font-semibold tracking-wide flex items-center gap-1 uppercase">
                    <Anchor className="w-3.5 h-3.5" /> Sector Directives:
                  </p>
                  
                  {/* Directives List */}
                  <ul className="mt-3 space-y-2">
                    {track.directives.map((directive, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal font-light">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>{directive}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sector Bounty Details */}
                <div className="mt-8 border-t border-amber-900/40 pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400">Locked Sector Treasure</span>
                    <p className="font-serif text-sm font-bold text-amber-400 mt-0.5">
                      {track.rewards}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 hover:text-amber-400 transition-colors flex items-center gap-1 cursor-help">
                    <HelpCircle className="w-3.5 h-3.5" /> Rules Appl
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
