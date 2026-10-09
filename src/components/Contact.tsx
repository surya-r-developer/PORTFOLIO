'use client';

import React, { useState } from 'react';
import { ContactInfo } from '@/types/portfolio';
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin, Instagram, AlertCircle, Loader2 } from 'lucide-react';

interface ContactProps {
  contact: ContactInfo;
}

export const Contact: React.FC<ContactProps> = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', msg: data.message || 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', msg: data.error || 'Failed to send message.' });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-slate-50 dark:bg-slate-800/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Get In Touch</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Feel free to reach out for opportunities, collaborations, or questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-4">
              <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                Contact Details
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">Email</span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-xs font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email"
                  aria-label="Copy email"
                  className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              {contact.phone && (
                <div className="flex items-center gap-3 p-3 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">Phone</span>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-xs font-medium text-slate-800 dark:text-slate-200 hover:text-emerald-500 transition-colors"
                    >
                      +91 {contact.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                <MapPin className="w-4 h-4 text-rose-500" />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Location</span>
                  <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                    {contact.locationRepresentation || 'Tamil Nadu, India'}
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700">
                <span className="text-xs text-slate-500 dark:text-slate-400 block mb-2">Connect</span>
                <div className="flex items-center gap-2">
                  {contact.github && (
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {contact.linkedin && (
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {contact.instagram && (
                    <a
                      href={contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-pink-500 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-4"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                Send Message
              </h3>

              {status && (
                <div
                  className={`p-3 rounded-md text-xs flex items-center gap-2 ${
                    status.type === 'success'
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                  }`}
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{status.msg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs text-slate-600 dark:text-slate-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-3 py-2 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs text-slate-600 dark:text-slate-400 mb-1">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs text-slate-600 dark:text-slate-400 mb-1">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Inquiry / Collaboration"
                  className="w-full px-3 py-2 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs text-slate-600 dark:text-slate-400 mb-1">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-3 py-2 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-md text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
