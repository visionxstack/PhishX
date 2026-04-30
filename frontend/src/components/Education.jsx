import React from 'react';
import { AlertTriangle, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-24 bg-surface-light dark:bg-[#0d1117]" id="education">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">What Is Phishing & How to Protect Yourself</h2>
          <p className="text-[#617589] dark:text-gray-400 max-w-2xl mx-auto">
            Knowledge is the first line of defense. Phishing remains the most common entry point for cyberattacks globally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <HelpCircle className="size-6" /> Common Phishing Forms
            </h3>
            <ul className="space-y-4">
              {[
                { title: 'Deceptive Phishing', desc: 'Emails impersonating legitimate brands to steal credentials or financial info.' },
                { title: 'Spear Phishing', desc: 'Highly personalized attacks targeting specific individuals within an organization.' },
                { title: 'Quishing (QR Phishing)', desc: 'Malicious links hidden in QR codes to bypass traditional email filters.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 text-green-500"><CheckCircle2 className="size-5" /></div>
                  <div>
                    <p className="font-bold dark:text-white">{item.title}</p>
                    <p className="text-sm text-[#617589] dark:text-gray-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#161b22] p-8 rounded-xl border border-[#dbe0e6] dark:border-gray-700 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 dark:text-white">
              <ShieldCheck className="text-primary size-6" /> Best Practices
            </h3>
            <div className="space-y-4">
              {[
                { title: "Check the Sender's Address", desc: "Always hover over the name to see the actual email address. Look for subtle misspellings." },
                { title: "Inspect Before You Click", desc: "Hover over links to see their true destination. If it doesn't match the text, don't click." },
                { title: "Enable Multi-Factor (MFA)", desc: "MFA provides a critical safety net even if your password is compromised via phishing." }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-surface-light dark:bg-[#0d1117] rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-semibold mb-1 dark:text-white">{item.title}</p>
                  <p className="text-xs text-[#617589] dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

