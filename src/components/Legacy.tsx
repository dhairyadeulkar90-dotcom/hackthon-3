/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatItemProps {
  key?: number | string;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  delay: number;
}

function AnimatedCounter({ value, suffix, label, prefix = '', delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const end = value;
    if (end === 0) return;

    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="relative flex flex-col items-center justify-center p-8 bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden group hover:border-slate-700 transition-all duration-500 shadow-2xl"
    >
      {/* Stat Numbers */}
      <h3 className="font-serif text-4xl md:text-5xl font-black text-white tracking-tight flex items-baseline gap-0.5 mt-2">
        <span className="text-white">
          {prefix}{count.toLocaleString()}
        </span>
        <span className="text-slate-300 font-extrabold">{suffix}</span>
      </h3>

      {/* Label */}
      <p className="text-sm font-mono tracking-widest text-slate-400 uppercase mt-2 text-center font-semibold">
        {label}
      </p>
    </motion.div>
  );
}

export default function Legacy() {
  const stats: Array<{
    value: number;
    suffix: string;
    label: string;
    prefix?: string;
    delay: number;
  }> = [
    {
      value: 2400,
      suffix: '+',
      label: 'Developers',
      delay: 0.1,
    },
    {
      value: 200,
      suffix: '+',
      label: 'Teams',
      delay: 0.2,
    },
    {
      
      value: 75,
      suffix: '+',
      label: 'Winners',
      delay: 0.7,
    },
  ];

  return (
    <section id="legacy" className="relative py-24 bg-slate-950 overflow-hidden text-white">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[40%] bg-amber-500/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-black mt-2 text-white">
           Our  <span className="text-amber-400">Achievements</span>
          </h2>
          <p className="mt-6 text-sm text-slate-400 font-light leading-relaxed">
            For generations, the bravest coders have ventured into the uncharted waters of Hackpreneur. Peer into the chests of previous exploits and discover the majestic scale of our collective armada.
          </p>
        </div>

        {/* Grid of counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              prefix={stat.prefix}
              delay={stat.delay}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
