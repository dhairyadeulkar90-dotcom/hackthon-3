/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Anchor } from 'lucide-react';

interface SponsorBrand {
  id: string;
  name: string;
  tier: 'galleon' | 'frigate' | 'sloop';
  image?: string;
  logoPlaceholder?: string;
  logoColor: string;
  website: string;
  crewDuty: string;
}

export default function Sponsors() {
  const sponsors: SponsorBrand[] = [
    {
      id: 's1',
      name: 'Google Cloud',
      tier: 'galleon',
      image: 'https://i.pinimg.com/736x/ae/29/4d/ae294d89fed7fd780d17f064b0312f15.jpg',
      logoColor: 'text-blue-400 border-blue-400 bg-blue-500/5',
      website: 'https://cloud.google.com',
      crewDuty: 'Royal Sky Navigator'
    },
    {
      id: 's2',
      name: 'GitHub',
      tier: 'galleon',
      image: 'https://i.pinimg.com/1200x/21/c6/1c/21c61c65dded4058f909088da9757dbb.jpg',
      logoColor: 'text-purple-400 border-purple-400 bg-purple-500/5',
      website: 'https://github.com',
      crewDuty: 'High Sea Code Chest'
    },
    {
      id: 's3',
      name: 'Vercel',
      tier: 'frigate',
      image: 'https://i.pinimg.com/1200x/11/3a/36/113a36ce7793b91bb5cd0b95082071fe.jpg',
      logoColor: 'text-white border-slate-700 bg-slate-100/5',
      website: 'https://vercel.com',
      crewDuty: 'Instant Deployment Sail'
    },
    {
      id: 's4',
      name: 'Framer',
      tier: 'frigate',
      image: 'https://i.pinimg.com/236x/e6/cf/96/e6cf967a742207fc3d2aa3fba94c6404.jpg',
      logoColor: 'text-pink-400 border-pink-500/30 bg-pink-500/5',
      website: 'https://framer.com',
      crewDuty: 'Flag Designer Guild'
    },
    {
      id: 's5',
      name: 'Postman',
      tier: 'sloop',
      image: 'https://i.pinimg.com/1200x/ed/4a/91/ed4a911a593acf9b02dcd077f2b8fd76.jpg',
      logoColor: 'text-orange-400 border-orange-500/20 bg-orange-500/5',
      website: 'https://postman.com',
      crewDuty: 'Message Bottle Courier'
    }
  ];

  return (
    <section id="sponsors" className="relative py-24 bg-slate-900 overflow-hidden text-white px-4">
      {/* Decorative Wave lines top and bottom */}
      <div className="absolute top-0 inset-x-0 h-4 bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.1),transparent)]" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col-reverse">
        
        {/* Section Heading */}
        <div className="text-center mt-20">
          <h2 className="font-serif text-4xl md:text-5xl font-black mt-2 text-white">
            <span className="text-amber-400">SPONSORS</span>
          </h2>
        </div>

        {/* Infinite Side-Scroll Sponsors Carousel */}
        <div className="relative w-full overflow-hidden py-10">
          {/* Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-8 w-max items-center"
            animate={{ x: ['0%', '-33.3333%'] }}
            transition={{
              ease: 'linear',
              duration: 25, // slow and steady
              repeat: Infinity,
            }}
          >
            {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
              <a
                key={`${sponsor.id}-${index}`}
                href={sponsor.website}
                target="_blank"
                rel="noreferrer"
                className="w-[300px] flex-shrink-0 bg-slate-950 border-2 border-amber-500/10 p-8 rounded-xl flex flex-col items-center justify-center text-center shadow-xl group cursor-pointer hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-2 left-2 p-1 text-amber-500/20">
                  <Anchor className="w-4 h-4" />
                </div>
                
                {sponsor.image ? (
                  <div className={`w-full aspect-[3/2] overflow-hidden rounded-lg border shadow relative ${sponsor.logoColor}`}>
                    <img 
                      src={sponsor.image} 
                      alt={sponsor.name} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className={`text-xl font-serif font-black px-6 py-4 rounded-lg border tracking-wider shadow ${sponsor.logoColor}`}>
                    {sponsor.logoPlaceholder}
                  </div>
                )}
              </a>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
