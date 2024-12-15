'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>('welcome');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            if (sectionId) setActiveSection(sectionId);
          }
        });
      },
      {
        threshold: 0.4, // Trigger when 40% of the section is visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed z-30 flex justify-center w-full py-1 align-middle mt-1 transition-all">
      <ul className="inline-flex gap-5 font-semibold py-2 px-4 rounded-3xl shadow-sm shadow-slate-800 border border-1 border-solid border-slate-700 text-slate-400 bg-slate-950 bg-opacity-25 backdrop-blur-md">
        <Link href="#welcome" className="cursor-pointer">
          <li
            className={`${
              activeSection === 'welcome'
                ? 'underline decoration-purple-700 underline-offset-4'
                : ''
            }`}
          >
            Welcome
          </li>
        </Link>
        <Link href="#stack" className="cursor-pointer">
          <li
            className={`${
              activeSection === 'stack'
                ? 'underline decoration-purple-700 underline-offset-4'
                : ''
            }`}
          >
            Stack
          </li>
        </Link>
        <Link href="#portfolio" className="cursor-pointer">
          <li
            className={`${
              activeSection === 'portfolio'
                ? 'underline decoration-purple-700 underline-offset-4'
                : ''
            }`}
          >
            Portfolio
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
