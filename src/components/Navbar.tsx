'use client';

import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, Code2 } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-50/85 dark:bg-navy-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-electric-500/15 py-3 shadow-lg shadow-black/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-200/40 dark:bg-navy-900/60 p-1.5 rounded-2xl border border-slate-300/40 dark:border-electric-500/20 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs tracking-tight transition-all duration-200 relative ${
                    isActive
                      ? 'text-electric-600 dark:text-cyan-300 font-semibold bg-white dark:bg-navy-800 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-navy-800/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Admin Dashboard shortcut icon link */}
            <a
              href="/admin"
              title="Admin Dashboard"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-medium bg-gradient-to-r from-electric-600 to-cyan-500 text-white hover:opacity-90 transition-opacity shadow-md shadow-electric-500/20"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>CMS Admin</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-slate-200/80 dark:bg-navy-850 border border-slate-300 dark:border-electric-500/20 text-slate-700 dark:text-slate-200 hover:text-electric-500 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`xl:hidden fixed inset-x-0 top-[70px] bg-slate-900/95 dark:bg-navy-950/95 backdrop-blur-xl border-b border-electric-500/20 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-4 py-2.5 rounded-xl font-mono text-sm flex items-center justify-between transition-all ${
                  isActive
                    ? 'bg-electric-600/20 text-cyan-300 font-semibold border-l-4 border-cyan-400'
                    : 'text-slate-300 hover:bg-navy-800 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />}
              </a>
            );
          })}
          
          <div className="pt-4 border-t border-slate-800 mt-2 flex items-center justify-between">
            <span className="font-mono text-xs text-slate-400">SURYA R PORTFOLIO & CMS</span>
            <a
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-lg font-mono text-xs font-medium bg-cyan-500 text-navy-950 font-bold"
            >
              Admin Dashboard →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
