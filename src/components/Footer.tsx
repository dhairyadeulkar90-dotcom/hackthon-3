/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Compass, Anchor, Github, Twitter, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden border-t-4 border-amber-950">
      
      {/* Old Dock wood texture lines */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-amber-900/30" />
      <div className="absolute inset-x-0 top-1.5 h-[1.5px] bg-amber-900/10" />

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand/Crest Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-serif text-2xl font-black tracking-widest text-amber-400">
                HACKPRENEUR
              </h3>
            </div>
            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              The premier Pirates of the Caribbean-inspired adventure hackathon. Bring your designs, forge raw software, and lay siege to high-value start-up categories.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-serif text-sm font-bold text-amber-500 uppercase tracking-widest mb-4">
              Charts & Routes
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#about" className="text-slate-400 hover:text-amber-400 transition-colors">
                  ⚓ The Ledger (About)
                </a>
              </li>
              <li>
                <a href="#journey" className="text-slate-400 hover:text-amber-400 transition-colors">
                  🗺️ Treasure Route (Timeline)
                </a>
              </li>
              <li>
                <a href="#challenges" className="text-slate-400 hover:text-amber-400 transition-colors">
                  🏝️ Quest Islands (Tracks)
                </a>
              </li>
              <li>
                <a href="#prizes" className="text-slate-400 hover:text-amber-400 transition-colors">
                  🪙 The Chest (Bounty)
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Coordinate Column */}
          <div>
            <h4 className="font-serif text-sm font-bold text-amber-500 uppercase tracking-widest mb-4">
              Vessel Signals
            </h4>
            <div className="flex gap-3 mb-6">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:bg-slate-950 hover:border-amber-500/30 transition-all shadow">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:bg-slate-950 hover:border-amber-500/30 transition-all shadow">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:bg-slate-950 hover:border-amber-500/30 transition-all shadow">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} Hackpreneur Armada. All rights reserved on the high seas.
          </p>
        </div>

      </div>

    </footer>
  );
}
