/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Anchor } from 'lucide-react';

interface CouncilMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  socials: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export default function Organizers() {
  const council: CouncilMember[] = [
    {
      id: 'm1',
      name: 'Ojas Satdeve',
      role: 'Vice President',
      avatar: '',
      quote: 'We sail not for safe harbors, but to build ships that can conquer any conceptual tempest.',
      socials: {
        github: 'https://github.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: 'm2',
      name: 'Tejasvi Jhadho',
      role: 'SIH Winner',
      avatar: '',
      quote: 'Flawless database schemas and rigid firewall rules make the sturdiest hulls on the high seas.',
      
      socials: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: 'm3',
      name: 'Anurag Borkar',
      role: 'Head Technical',
      avatar: '',
      quote: 'A captain is only as good as his treasury. We secure the finest gold sponsorships for our crews.',
      socials: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com'
      }
    }
  ];

  return (
    <section id="organizers" className="relative py-24 bg-slate-950 overflow-hidden text-white px-4">
      
      {/* Background Overlay */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-black mt-2 text-white">
            CAPTAIN’S <span className="text-amber-400"></span>
          </h2>
          <p className="mt-4 text-sm text-slate-400 max-w-lg mx-auto font-light leading-relaxed">
            The seasoned navigators steering the Hackpreneur armada. Reach out to any admiral if you require passage or coordinates.
          </p>
        </div>

        {/* Council Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {council.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-slate-900 border border-amber-500/15 rounded-xl p-6 md:p-8 flex flex-col justify-between group hover:border-amber-400 transition-all duration-300 shadow-2xl relative overflow-hidden text-center"
            >
              {/* Inner vintage card lines */}
              <div className="absolute inset-2 border border-amber-500/5 rounded-lg group-hover:border-amber-400/10 pointer-events-none" />

              {/* Council details */}
              <div className="flex flex-col items-center">
                
                {/* Avatar with Custom Wooden Compass Ring */}
                <div className="relative w-28 h-28 mb-6">
                  <div className="absolute inset-0 rounded-full border-4 border-amber-950 bg-slate-950 group-hover:border-amber-500 transition-colors duration-500" />
                  <div className="absolute inset-1 rounded-full overflow-hidden bg-amber-950/20 flex items-center justify-center">
                    <span className="text-3xl font-serif font-black text-amber-400 group-hover:text-amber-300 select-none">
                      {member.name.split(' ').find(w => w !== 'Captain')?.[0] || member.name[0]}
                    </span>
                  </div>
                  {/* Decorative Anchor Tag */}
                  <span className="absolute bottom-0 right-0 p-1.5 rounded-full bg-amber-500 border-2 border-slate-900 text-slate-950 shadow-lg">
                    <Anchor className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-400 transition-colors mt-2">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-amber-300/80 font-semibold uppercase tracking-wider mt-1.5">
                  {member.role}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
