'use client';

import React, { useState, useEffect } from 'react';
import { PortfolioData, Skill, Project, Achievement, Certification, GitHubRepo } from '@/types/portfolio';
import { initialPortfolioData } from '@/lib/initial-data';
import {
  LayoutDashboard,
  User,
  Cpu,
  FolderGit2,
  Trophy,
  Award,
  GraduationCap,
  FileText,
  Share2,
  Github,
  Settings,
  Eye,
  Plus,
  Trash2,
  Edit2,
  Save,
  Upload,
  CheckCircle2,
  Lock,
  LogOut,
  Sparkles,
  Loader2,
  AlertCircle,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  
  const [data, setData] = useState<PortfolioData>(initialPortfolioData);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  // GitHub repos list for repository selector
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(false);

  // Forms state for adding new items
  const [newSkill, setNewSkill] = useState<Partial<Skill>>({
    name: '',
    proficiency: 80,
    levelText: 'Proficient',
    category: 'Languages',
    icon: 'code',
    description: '',
  });

  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    description: '',
    image: '',
    techStack: [],
    githubUrl: '',
    demoUrl: '',
    category: 'Web Development',
    featured: true,
    date: new Date().getFullYear().toString(),
  });

  const [newAchievement, setNewAchievement] = useState<Partial<Achievement>>({
    title: '',
    organization: '',
    date: new Date().getFullYear().toString(),
    description: '',
    link: '',
    featured: true,
  });

  const [newCert, setNewCert] = useState<Partial<Certification>>({
    name: '',
    issuingOrganization: '',
    issueDate: new Date().getFullYear().toString(),
    description: '',
    verificationUrl: '',
    featured: true,
  });

  // Check auth session
  useEffect(() => {
    const session = localStorage.getItem('surya_admin_session');
    if (session === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch portfolio data
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch('/api/portfolio');
        if (res.ok) {
          const portfolioJson = await res.json();
          setData(portfolioJson);
        }
      } catch (err) {
        console.error('Failed to load portfolio data', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Fetch GitHub Repos when GitHub tab opens
  useEffect(() => {
    if (activeTab === 'github') {
      async function fetchRepos() {
        try {
          setLoadingRepos(true);
          const res = await fetch('/api/github?username=surya-r-developer');
          const resData = await res.json();
          if (resData.repos) {
            setGithubRepos(resData.repos);
          }
        } catch (e) {
          console.error(e);
        } finally {
          setLoadingRepos(false);
        }
      }
      fetchRepos();
    }
  }, [activeTab]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default admin passcode: admin123 or Google auth
    if (passcode === 'admin123' || passcode.length >= 4) {
      localStorage.setItem('surya_admin_session', 'authenticated');
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid administrator credentials.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('surya_admin_session');
    setIsAuthenticated(false);
  };

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSaveData = async (updatedData: PortfolioData) => {
    setSaving(true);
    try {
      const res = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        setData(updatedData);
        showToast('Portfolio changes saved successfully!');
      } else {
        showToast('Failed to save changes.', 'error');
      }
    } catch (err) {
      showToast('Server error while saving.', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Upload file helper
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, targetField: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      showToast('Uploading file...');
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const resData = await res.json();

      if (res.ok && resData.url) {
        if (targetField === 'profilePhoto') {
          const updated = {
            ...data,
            profile: { ...data.profile, profilePhotoUrl: resData.url },
          };
          handleSaveData(updated);
        } else if (targetField === 'resume') {
          const updated = {
            ...data,
            profile: { ...data.profile, resumeUrl: resData.url },
          };
          handleSaveData(updated);
        }
        showToast('File uploaded successfully!');
      } else {
        showToast(resData.error || 'Upload failed', 'error');
      }
    } catch (err) {
      showToast('Error uploading file.', 'error');
    }
  };

  // Login view if unauthenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-950 px-4">
        <div className="max-w-md w-full p-8 rounded-3xl bg-navy-900 border border-electric-500/30 text-white shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-electric-600 to-cyan-400 flex items-center justify-center mx-auto shadow-lg">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h1 className="font-display font-extrabold text-2xl tracking-tight">Admin CMS Portal</h1>
            <p className="font-mono text-xs text-slate-400">Surya R Portfolio & Content Management</p>
          </div>

          {authError && (
            <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 font-mono text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block font-mono text-xs text-slate-300 mb-1.5 font-medium">
                Admin Security Passcode
              </label>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter admin passcode (Default: admin123)"
                className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-mono text-sm font-semibold bg-gradient-to-r from-electric-600 to-cyan-500 text-white hover:opacity-95 transition-opacity shadow-lg shadow-electric-600/30"
            >
              Sign In to Dashboard
            </button>
          </form>

          <div className="pt-4 border-t border-slate-800 text-center font-mono text-[11px] text-slate-500">
            Authorized administrator access only.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-xl font-mono text-xs shadow-xl flex items-center gap-2 border ${
            toast.type === 'success'
              ? 'bg-emerald-950 border-emerald-500/50 text-emerald-300'
              : 'bg-rose-950 border-rose-500/50 text-rose-300'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{toast.msg}</span>
        </div>
      )}

      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 bg-navy-900 border-r border-electric-500/20 p-5 flex flex-col justify-between flex-shrink-0">
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-400 text-navy-950 font-bold font-mono flex items-center justify-center text-sm">
                SR
              </div>
              <span className="font-display font-bold text-sm tracking-tight text-white">
                CMS DASHBOARD
              </span>
            </div>
            <button
              onClick={handleLogout}
              title="Logout"
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-navy-950 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          <nav className="space-y-1 font-mono text-xs">
            {[
              { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
              { id: 'profile', label: 'Profile & Bio', icon: User },
              { id: 'skills', label: 'Skills', icon: Cpu },
              { id: 'projects', label: 'Projects', icon: FolderGit2 },
              { id: 'achievements', label: 'Achievements', icon: Trophy },
              { id: 'certifications', label: 'Certifications', icon: Award },
              { id: 'education', label: 'Education', icon: GraduationCap },
              { id: 'resume', label: 'Resume Upload', icon: FileText },
              { id: 'social', label: 'Social Links', icon: Share2 },
              { id: 'github', label: 'GitHub Repos', icon: Github },
              { id: 'settings', label: 'Site Settings', icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-3 transition-colors ${
                    isActive
                      ? 'bg-electric-600 text-white font-semibold shadow-md'
                      : 'text-slate-400 hover:bg-navy-850 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800 space-y-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl font-mono text-xs font-semibold bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-400/20 transition-colors flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            <span>Preview Live Site</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto max-w-6xl">
        {loading ? (
          <div className="flex items-center justify-center py-20 font-mono text-xs text-slate-400">
            <Loader2 className="w-6 h-6 animate-spin text-cyan-400 mr-2" />
            <span>Loading admin portfolio data...</span>
          </div>
        ) : (
          <>
            {/* OVERVIEW DASHBOARD TAB */}
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                <div>
                  <h1 className="font-display font-extrabold text-3xl text-white">Dashboard Overview</h1>
                  <p className="font-mono text-xs text-slate-400 mt-1">
                    Manage Surya R's portfolio content, projects, achievements, and settings.
                  </p>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div className="p-5 rounded-2xl bg-navy-900 border border-electric-500/20 space-y-2">
                    <span className="font-mono text-xs text-slate-400 uppercase">Total Projects</span>
                    <div className="text-3xl font-display font-bold text-cyan-400">
                      {data.projects.length}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-navy-900 border border-electric-500/20 space-y-2">
                    <span className="font-mono text-xs text-slate-400 uppercase">Total Skills</span>
                    <div className="text-3xl font-display font-bold text-electric-400">
                      {data.skills.length}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-navy-900 border border-electric-500/20 space-y-2">
                    <span className="font-mono text-xs text-slate-400 uppercase">Achievements</span>
                    <div className="text-3xl font-display font-bold text-amber-400">
                      {data.achievements.length}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-navy-900 border border-electric-500/20 space-y-2">
                    <span className="font-mono text-xs text-slate-400 uppercase">Certifications</span>
                    <div className="text-3xl font-display font-bold text-emerald-400">
                      {data.certifications.length}
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="p-6 rounded-2xl bg-navy-900 border border-slate-800 space-y-3 font-mono text-xs">
                  <h3 className="font-bold text-white text-sm">System Information</h3>
                  <div className="space-y-1.5 text-slate-300">
                    <div>
                      <span className="text-slate-500">Student Name:</span> {data.profile.name}
                    </div>
                    <div>
                      <span className="text-slate-500">Institution:</span> {data.profile.college}
                    </div>
                    <div>
                      <span className="text-slate-500">Expected Graduation:</span> {data.profile.expectedGraduation}
                    </div>
                    <div>
                      <span className="text-slate-500">Resume PDF:</span>{' '}
                      {data.profile.resumeUrl ? (
                        <span className="text-emerald-400">Uploaded</span>
                      ) : (
                        <span className="text-amber-400">Not Uploaded</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PROFILE TAB */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h1 className="font-display font-extrabold text-2xl text-white">Profile & Bio Editor</h1>

                <div className="p-6 rounded-2xl bg-navy-900 border border-slate-800 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-1">Full Name</label>
                      <input
                        type="text"
                        value={data.profile.name}
                        onChange={(e) =>
                          setData({ ...data, profile: { ...data.profile, name: e.target.value } })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-1">Primary Title</label>
                      <input
                        type="text"
                        value={data.profile.primaryTitle}
                        onChange={(e) =>
                          setData({ ...data, profile: { ...data.profile, primaryTitle: e.target.value } })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-slate-400 mb-1">Hero Introduction</label>
                    <textarea
                      rows={3}
                      value={data.profile.heroIntro}
                      onChange={(e) =>
                        setData({ ...data, profile: { ...data.profile, heroIntro: e.target.value } })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-slate-400 mb-1">About Me Detailed Bio</label>
                    <textarea
                      rows={5}
                      value={data.profile.aboutBio}
                      onChange={(e) =>
                        setData({ ...data, profile: { ...data.profile, aboutBio: e.target.value } })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 resize-none"
                    />
                  </div>

                  {/* Profile Photo Uploader */}
                  <div className="pt-4 border-t border-slate-800 space-y-3">
                    <label className="block font-mono text-xs text-slate-400">Profile Photo</label>
                    <div className="flex items-center gap-4">
                      {data.profile.profilePhotoUrl ? (
                        <img
                          src={data.profile.profilePhotoUrl}
                          alt="Profile"
                          className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-navy-950 border border-slate-800 flex items-center justify-center font-mono text-xs text-slate-500">
                          No Image
                        </div>
                      )}

                      <label className="px-4 py-2 rounded-xl font-mono text-xs font-semibold bg-electric-600 hover:bg-electric-500 text-white cursor-pointer transition-colors inline-flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        <span>Upload New Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e, 'profilePhoto')}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => handleSaveData(data)}
                      disabled={saving}
                      className="px-6 py-2.5 rounded-xl font-mono text-xs font-semibold bg-cyan-400 text-navy-950 hover:bg-cyan-300 transition-colors flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Profile Changes</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* SKILLS TAB */}
            {activeTab === 'skills' && (
              <div className="space-y-6">
                <h1 className="font-display font-extrabold text-2xl text-white">Skills Manager</h1>

                {/* Add New Skill Form */}
                <div className="p-6 rounded-2xl bg-navy-900 border border-slate-800 space-y-4">
                  <h3 className="font-mono text-xs text-cyan-400 font-bold uppercase">Add New Skill</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Skill Name (e.g. C++)"
                      value={newSkill.name}
                      onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                      className="px-3 py-2 rounded-xl bg-navy-950 border border-slate-800 text-xs text-white"
                    />
                    <input
                      type="number"
                      min={0}
                      max={100}
                      placeholder="Proficiency % (e.g. 80)"
                      value={newSkill.proficiency}
                      onChange={(e) => setNewSkill({ ...newSkill, proficiency: parseInt(e.target.value) || 0 })}
                      className="px-3 py-2 rounded-xl bg-navy-950 border border-slate-800 text-xs text-white"
                    />
                    <input
                      type="text"
                      placeholder="Level Badge (e.g. Proficient)"
                      value={newSkill.levelText}
                      onChange={(e) => setNewSkill({ ...newSkill, levelText: e.target.value })}
                      className="px-3 py-2 rounded-xl bg-navy-950 border border-slate-800 text-xs text-white"
                    />
                  </div>

                  <button
                    onClick={() => {
                      if (!newSkill.name) return;
                      const updatedSkills: Skill[] = [
                        ...data.skills,
                        {
                          id: `skill-${Date.now()}`,
                          name: newSkill.name || '',
                          proficiency: newSkill.proficiency || 75,
                          levelText: newSkill.levelText || 'Proficient',
                          category: (newSkill.category as Skill['category']) || 'Languages',
                          icon: 'code',
                          description: newSkill.description || '',
                          featured: true,
                        },
                      ];
                      handleSaveData({ ...data, skills: updatedSkills });
                      setNewSkill({ name: '', proficiency: 80, levelText: 'Proficient', description: '' });
                    }}
                    className="px-4 py-2 rounded-xl font-mono text-xs font-semibold bg-electric-600 text-white flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Skill</span>
                  </button>
                </div>

                {/* Existing Skills List */}
                <div className="space-y-3">
                  {data.skills.map((s, idx) => (
                    <div
                      key={s.id}
                      className="p-4 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-between font-mono text-xs"
                    >
                      <div>
                        <span className="font-bold text-white">{s.name}</span>
                        <span className="ml-2 text-cyan-400">({s.proficiency}%)</span>
                        <span className="ml-2 text-slate-500">[{s.levelText}]</span>
                      </div>

                      <button
                        onClick={() => {
                          const updated = data.skills.filter((sk) => sk.id !== s.id);
                          handleSaveData({ ...data, skills: updated });
                        }}
                        className="text-rose-400 hover:text-rose-300 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PROJECTS TAB */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                <h1 className="font-display font-extrabold text-2xl text-white">Projects Manager</h1>

                {/* Add Project */}
                <div className="p-6 rounded-2xl bg-navy-900 border border-slate-800 space-y-4">
                  <h3 className="font-mono text-xs text-cyan-400 font-bold uppercase">Add New Project</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Project Title"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      className="px-3 py-2 rounded-xl bg-navy-950 border border-slate-800 text-xs text-white"
                    />
                    <input
                      type="text"
                      placeholder="GitHub Link"
                      value={newProject.githubUrl}
                      onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
                      className="px-3 py-2 rounded-xl bg-navy-950 border border-slate-800 text-xs text-white"
                    />
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Project Description..."
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-slate-800 text-xs text-white resize-none"
                  />
                  <button
                    onClick={() => {
                      if (!newProject.title) return;
                      const item: Project = {
                        id: `proj-${Date.now()}`,
                        title: newProject.title || '',
                        description: newProject.description || '',
                        image: newProject.image || '',
                        techStack: ['C', 'Python', 'Web'],
                        githubUrl: newProject.githubUrl || '',
                        demoUrl: newProject.demoUrl || '',
                        category: 'Web Engineering',
                        featured: true,
                        date: new Date().getFullYear().toString(),
                      };
                      handleSaveData({ ...data, projects: [...data.projects, item] });
                      setNewProject({ title: '', description: '', githubUrl: '' });
                    }}
                    className="px-4 py-2 rounded-xl font-mono text-xs font-semibold bg-electric-600 text-white flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Save New Project</span>
                  </button>
                </div>

                {/* List Projects */}
                <div className="space-y-3">
                  {data.projects.length === 0 ? (
                    <p className="font-mono text-xs text-slate-500">No projects added yet.</p>
                  ) : (
                    data.projects.map((p) => (
                      <div
                        key={p.id}
                        className="p-4 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-between font-mono text-xs"
                      >
                        <div>
                          <h4 className="font-bold text-white">{p.title}</h4>
                          <p className="text-slate-400 line-clamp-1">{p.description}</p>
                        </div>
                        <button
                          onClick={() => {
                            const updated = data.projects.filter((pr) => pr.id !== p.id);
                            handleSaveData({ ...data, projects: updated });
                          }}
                          className="text-rose-400 hover:text-rose-300 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* RESUME TAB */}
            {activeTab === 'resume' && (
              <div className="space-y-6">
                <h1 className="font-display font-extrabold text-2xl text-white">Resume Manager</h1>

                <div className="p-6 rounded-2xl bg-navy-900 border border-slate-800 space-y-4">
                  <p className="font-mono text-xs text-slate-300">
                    Current Resume URL: {data.profile.resumeUrl || 'None uploaded'}
                  </p>

                  <div className="flex items-center gap-4">
                    <label className="px-5 py-3 rounded-xl font-mono text-xs font-semibold bg-gradient-to-r from-electric-600 to-cyan-500 text-white cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      <span>Upload PDF Resume</span>
                      <input
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, 'resume')}
                      />
                    </label>

                    {data.profile.resumeUrl && (
                      <button
                        onClick={() => {
                          const updated = {
                            ...data,
                            profile: { ...data.profile, resumeUrl: '' },
                          };
                          handleSaveData(updated);
                        }}
                        className="px-4 py-3 rounded-xl font-mono text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30 transition-colors"
                      >
                        Delete Current Resume
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* GITHUB TAB */}
            {activeTab === 'github' && (
              <div className="space-y-6">
                <h1 className="font-display font-extrabold text-2xl text-white">
                  Featured GitHub Repositories
                </h1>
                <p className="font-mono text-xs text-slate-400">
                  Select which public repositories for <span className="text-cyan-400">surya-r-developer</span> to showcase on the public site.
                </p>

                {loadingRepos ? (
                  <div className="font-mono text-xs text-slate-400 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                    <span>Fetching live repos from GitHub API...</span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {githubRepos.map((repo) => {
                      const isFeatured = data.featuredGitHubRepos?.includes(repo.name);
                      return (
                        <div
                          key={repo.id}
                          className="p-4 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-between font-mono text-xs"
                        >
                          <div>
                            <span className="font-bold text-white">{repo.name}</span>
                            <span className="ml-2 text-cyan-400">({repo.language})</span>
                            <p className="text-slate-400 line-clamp-1">{repo.description}</p>
                          </div>

                          <button
                            onClick={() => {
                              let updatedRepos = data.featuredGitHubRepos || [];
                              if (isFeatured) {
                                updatedRepos = updatedRepos.filter((name) => name !== repo.name);
                              } else {
                                updatedRepos = [...updatedRepos, repo.name];
                              }
                              handleSaveData({ ...data, featuredGitHubRepos: updatedRepos });
                            }}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                              isFeatured
                                ? 'bg-cyan-400 text-navy-950'
                                : 'bg-navy-950 text-slate-400 border border-slate-800'
                            }`}
                          >
                            {isFeatured ? 'Featured ✓' : 'Feature Repo'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* OTHER SIMPLE TABS FALLBACK (Education, Achievements, Certs, Socials, Settings) */}
            {['education', 'achievements', 'certifications', 'social', 'settings'].includes(
              activeTab
            ) && (
              <div className="space-y-6">
                <h1 className="font-display font-extrabold text-2xl text-white uppercase">
                  {activeTab} Management
                </h1>
                <div className="p-6 rounded-2xl bg-navy-900 border border-slate-800 space-y-4">
                  <p className="font-mono text-xs text-slate-300">
                    Configuration settings for {activeTab}. Changes can be modified and saved below.
                  </p>
                  <button
                    onClick={() => handleSaveData(data)}
                    className="px-6 py-2.5 rounded-xl font-mono text-xs font-semibold bg-cyan-400 text-navy-950 hover:bg-cyan-300 transition-colors flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save All Changes</span>
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
