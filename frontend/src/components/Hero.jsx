import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative py-24 px-4 text-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h1 className="text-6xl font-extrabold tracking-tight font-display mb-6 dark:text-white">
          PhishX
        </h1>
        <p className="text-xl text-[#617589] dark:text-gray-400 font-medium leading-relaxed">
          Advanced Phishing Detection for Emails, Links, and QR Codes.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a 
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
            href="#tools"
          >
            Start Scanning
          </a>
          <a 
            className="bg-white dark:bg-[#161b22] border border-[#dbe0e6] dark:border-gray-700 text-[#111418] dark:text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1c2128] transition-colors"
            href="#education"
          >
            How it works
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

