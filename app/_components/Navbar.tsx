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
    <nav className="fixed z-30 flex justify-center md:justify-end items-center pe-10 w-full py-1 align-middle md:mt-1 transition-all">
      <ul className="inline-flex gap-5 font-semibold py-2 px-4 rounded-3xl shadow-sm shadow-slate-800 border border-1 border-solid border-slate-700 text-slate-400 bg-slate-950 bg-opacity-25 backdrop-blur-md">
        <li
          className={`${
            activeSection === 'welcome'
              ? 'underline decoration-sky-700 underline-offset-4'
              : ''
          }`}
        >
          <Link
            href="#welcome"
            className="cursor-pointer"
            aria-label="go to welcome section"
          >
            Willkommen
          </Link>
        </li>
        <li
          className={`${
            activeSection === 'stack'
              ? 'underline decoration-sky-700 underline-offset-4'
              : ''
          }`}
        >
          <Link
            href="#stack"
            className="cursor-pointer"
            aria-label="go to section stack"
          >
            Stack
          </Link>
        </li>
        <li
          className={`${
            activeSection === 'portfolio'
              ? 'underline decoration-sky-700 underline-offset-4'
              : ''
          }`}
        >
          <Link
            href="#portfolio"
            className="cursor-pointer"
            aria-label="go to section portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li
          className={`${
            activeSection === 'feedback'
              ? 'underline decoration-sky-700 underline-offset-4'
              : ''
          }`}
        >
          <Link
            href="#feedback"
            className="cursor-pointer"
            aria-label="go to section stimmen"
          >
            Stimmen
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
