'use client';

import React from 'react';
import { Skill } from '@/types/portfolio';
import { Code, Terminal, Layout, Palette, GitBranch, Figma, Cpu, Sparkles } from 'lucide-react';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'code':
      case 'c':
        return <Code className="w-6 h-6 text-electric-500 dark:text-cyan-400" />;
      case 'terminal':
      case 'python':
        return <Terminal className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />;
      case 'layout':
      case 'html':
        return <Layout className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
      case 'palette':
      case 'css':
        return <Palette className="w-6 h-6 text-cyan-500 dark:text-cyan-300" />;
      case 'git-branch':
      case 'git':
        return <GitBranch className="w-6 h-6 text-rose-500 dark:text-rose-400" />;
      case 'figma':
      case 'ui/ux':
        return <Figma className="w-6 h-6 text-purple-500 dark:text-purple-400" />;
      default:
        return <Cpu className="w-6 h-6 text-electric-500 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 dark:text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans">
            Honest beginner & student-level capabilities across core programming languages, web technologies, and developer tooling.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="p-6 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-electric-500/20 shadow-sm hover:shadow-xl hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 group-hover:scale-110 transition-transform">
                    {getIcon(skill.icon)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-navy-800 text-[11px] font-mono text-slate-600 dark:text-slate-300 font-medium">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name & Level */}
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-1 group-hover:text-electric-600 dark:group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs font-mono text-electric-600 dark:text-cyan-400 font-semibold mb-3">
                  {skill.levelText}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Progress Visual Bar */}
              <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="flex justify-between font-mono text-[11px]">
                  <span className="text-slate-500 dark:text-slate-400">Proficiency Level</span>
                  <span className="text-slate-900 dark:text-cyan-300 font-bold">{skill.proficiency}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-navy-950 overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-electric-600 to-cyan-400 transition-all duration-700 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
