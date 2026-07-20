/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

interface GalleryCard {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  logbookQuote: string;
}

export default function Highlights() {
  const cards: GalleryCard[] = [
    {
      id: 'h1',
      title: 'The Great Allied Assembly',
      date: 'Autumn Legacy',
      description: 'Over 500 elite developer alliances packed the grand harbor halls, collaborating under candlelight and ambient monitors.',
      image: 'https://i.pinimg.com/736x/fe/84/87/fe8487469ffe0ae1c5b865c845a390a1.jpg',
      logbookQuote: 'We ran out of coffee by midnight, but the code flowed like pure gold.'
    },
    {
      id: 'h2',
      title: 'Midnight Navigation Trials',
      date: 'Winter Storms',
      description: 'Under severe system challenges, teams worked through the witching hour to resolve critical deployment bugs.',
      image: 'https://i.pinimg.com/1200x/6e/4f/45/6e4f455fa33ceaca82bebb2b8a01b4ce.jpg',
      logbookQuote: 'Our server crashed twice under the load, yet our captain refused to abandon ship.'
    },
    {
      id: 'h3',
      title: 'The Admiral’s Boardroom',
      date: 'Spring Ventures',
      description: 'Ten final flagships demonstrated live production builds in front of a strict panel of VC Admirals.',
      image: 'https://i.pinimg.com/1200x/11/d7/29/11d729dec2b5b724c488ae28d0547929.jpg',
      logbookQuote: 'The judges scrutinized our schema, but our security rules were impenetrable.'
    }
  ];

  return (
    <section id="highlights" className="relative py-24 bg-slate-950 overflow-hidden text-white px-4">
      
      {/* Background Ornaments */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-black mt-2 text-white">
            Past <span className="text-amber-400"> Events</span>
          </h2>
          <p className="mt-4 text-sm text-slate-400 max-w-lg mx-auto font-light">
            Scribbled notes from our historical cruises. Relive the epic struggles and golden victories of previous Hackpreneur campaigns.
          </p>
        </div>

        {/* Infinite Side-Scroll Logbook Carousel */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Fades to make the edges blend nicely */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ['0%', '-33.3333%'] }}
            transition={{
              ease: 'linear',
              duration: 25, // slow and steady
              repeat: Infinity,
            }}
            whileHover={{ playState: 'paused' }} // optional pause on hover for accessibility/readability
          >
            {[...cards, ...cards, ...cards].map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="w-[300px] md:w-[380px] flex-shrink-0 bg-slate-900 border border-amber-500/10 rounded-lg overflow-hidden flex flex-col hover:border-amber-500/30 transition-all duration-300 group shadow-2xl hover:-translate-y-1"
              >
                {/* Image Container with Cinematic Overlay */}
                <div className="relative h-48 md:h-52 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
