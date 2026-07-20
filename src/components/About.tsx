import { motion } from 'motion/react';

export default function About() {
  return (
    <section 
      id="about" 
      className="relative py-24 px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://i.pinimg.com/1200x/81/ac/61/81ac614a357bd113940106c252c10465.jpg')` }}
    >
      {/* Decorative ambient background */}
      <div className="absolute inset-0 bg-slate-900/80 z-0" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3.5xl md:text-5xl font-black text-white tracking-tight"
          >
            About Hackpreneur 16
          </motion.h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto mt-4 rounded" />
        </div>

        {/* Main Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 flex flex-col items-center text-center justify-center relative overflow-hidden"
        >
          
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-slate-100 italic mb-6 max-w-2xl">
            "The Hackpreneur 16 challenge where developers, designers, and thinkers come together to build impactful solutions."
          </p>
          
          <p className="text-sm md:text-base font-sans text-slate-400 leading-relaxed max-w-2xl">
            Focused on the UN Sustainable Development Goals, CIH 3.0 empowers participants to solve real-world problems through creativity, technology, and collaboration.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
