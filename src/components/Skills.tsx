'use client';

import React from 'react';
import { Skill } from '@/types/portfolio';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  if (skills.length === 0) return null;

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Skills</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">Core languages, tools, and technologies I work with.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{skill.name}</h3>
                <span className="text-xs text-gray-500 dark:text-gray-400">{skill.proficiency}%</span>
              </div>
              <p className="text-xs text-blue-600 dark:text-blue-400 mb-2">{skill.levelText}</p>
              <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
