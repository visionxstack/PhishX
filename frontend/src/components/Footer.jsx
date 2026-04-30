import React from 'react';
import { Shield, Mail, MapPin, HelpCircle, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0d1117] border-t border-[#f0f2f4] dark:border-gray-800 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-lg">
                <Shield className="size-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight font-display dark:text-white">PhishX</h2>
            </div>
            <p className="text-[10px] text-[#a1b0be] mb-4">
              ; Author: <a href="https://visionkc.com.np" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Vision KC</a>
            </p>
            <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Advanced phishing detection empowering individuals and organizations with real-time threat intelligence.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-sm font-bold text-[#111418] dark:text-white uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-4">
              {['Analyzer Tool', 'How it Works', 'Phishing Types', 'Security Basics'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#617589] dark:text-gray-400 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-sm font-bold text-[#111418] dark:text-white uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-[#617589] dark:text-gray-400">
                <Mail className="size-4 text-primary" />
                <span>info.visionn7@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#617589] dark:text-gray-400">
                <MapPin className="size-4 text-primary" />
                <span>Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#617589] dark:text-gray-400">
                <HelpCircle className="size-4 text-primary" />
                <span>24/7 Security Assistance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#f0f2f4] dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#a1b0be] dark:text-gray-500">
          <p>© 2026 PhishX Security Labs. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <div className="flex items-center gap-2">
              <Globe className="size-3" />
              <span>English (US)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

