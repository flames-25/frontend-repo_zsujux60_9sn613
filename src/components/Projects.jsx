import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Backend',
    stack: ['PHP', 'MySQL', 'REST'],
    desc: 'Product catalog, cart, and order API with authentication and admin features.',
    link: '#',
  },
  {
    title: 'Responsive Portfolio',
    stack: ['HTML', 'CSS', 'Tailwind'],
    desc: 'Clean, mobile-first website showcasing work and personality.',
    link: '#',
  },
  {
    title: 'Analytics Dashboard',
    stack: ['PHP', 'MySQL', 'Charts'],
    desc: 'Role-based dashboard with KPIs, charts, and data exports.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
          <a href="#contact" className="text-sm font-medium text-cyan-400 hover:underline">
            Need something similar?
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition hover:bg-slate-900/70">
              <div className="mb-4 flex items-center gap-2 text-slate-300">
                <FolderGit2 className="h-5 w-5 text-cyan-400" />
                <span className="text-sm">{p.stack.join(' • ')}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-slate-300">{p.desc}</p>
              <div className="mt-4">
                <a href={p.link} className="inline-flex items-center gap-1 text-cyan-400 hover:underline">
                  <span>View</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
