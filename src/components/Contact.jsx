import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // In a real app, post to your backend/email service
    await new Promise((r) => setTimeout(r, 900));
    setStatus('Thanks! I will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Mail className="h-6 w-6 text-cyan-400" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s build something</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-slate-300">
              Share a brief about your project, timeline, and goals. I usually respond within 24 hours.
            </p>
            <ul className="mt-6 space-y-2 text-slate-300">
              <li>
                <span className="font-medium text-white">Email:</span> you@example.com
              </li>
              <li>
                <span className="font-medium text-white">Location:</span> Remote • Open to collaborate
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-slate-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none ring-cyan-500/30 placeholder:text-slate-500 focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none ring-cyan-500/30 placeholder:text-slate-500 focus:ring-2"
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-slate-300">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none ring-cyan-500/30 placeholder:text-slate-500 focus:ring-2"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 font-medium text-slate-950 transition hover:bg-cyan-400">
                <Send className="h-4 w-4" /> Send
              </button>
              <span className="text-sm text-slate-300">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
