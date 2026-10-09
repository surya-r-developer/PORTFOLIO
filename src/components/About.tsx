'use client';

import React from 'react';
import { Profile } from '@/types/portfolio';
import { GraduationCap, Code, MapPin, Target } from 'lucide-react';

interface AboutProps {
  profile: Profile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">About Me</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">A look into my background and goals.</p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10 max-w-3xl">
          {profile.aboutBio}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
            <GraduationCap className="w-5 h-5 text-blue-500 mb-2" />
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Education</p>
            <p className="font-medium text-gray-900 dark:text-white text-sm">B.E. CSE</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{profile.college}</p>
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Grad: {profile.expectedGraduation}</p>
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
            <Code className="w-5 h-5 text-green-500 mb-2" />
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Core Focus</p>
            <p className="font-medium text-gray-900 dark:text-white text-sm">Software Engineering</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{profile.focusArea}</p>
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
            <MapPin className="w-5 h-5 text-red-500 mb-2" />
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Location</p>
            <p className="font-medium text-gray-900 dark:text-white text-sm">{profile.location}</p>
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
            <Target className="w-5 h-5 text-purple-500 mb-2" />
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Career Goal</p>
            <p className="font-medium text-gray-900 dark:text-white text-sm">Full-Stack Developer</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-10 border-l-2 border-gray-200 dark:border-gray-700 ml-3 pl-6 space-y-6">
          <div>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-0.5">2025 – 2029</p>
            <h4 className="font-semibold text-gray-900 dark:text-white">B.E. Computer Science & Engineering</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Bannari Amman Institute of Technology, Sathyamangalam</p>
          </div>
          <div>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-0.5">Ongoing</p>
            <h4 className="font-semibold text-gray-900 dark:text-white">Full-Stack & Open Source Exploration</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Building projects with C, Python, JavaScript, and Git.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
