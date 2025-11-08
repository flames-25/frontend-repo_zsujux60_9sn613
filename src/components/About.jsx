import React from 'react';
import { Code2, Database, Layers } from 'lucide-react';

const skills = [
  { icon: <Code2 className="h-5 w-5" />, name: 'HTML & CSS', desc: 'Semantic, accessible, responsive layouts' },
  { icon: <Layers className="h-5 w-5" />, name: 'PHP', desc: 'API design, MVC patterns, Laravel basics' },
  { icon: <Database className="h-5 w-5" />, name: 'MySQL', desc: 'Schema design, indexing, query optimization' },
];

const About = () => {
  return (
    <section id="about" className="relative bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              I’m a full stack developer focused on building fast, secure, and maintainable web applications using HTML, CSS, PHP, and MySQL. I enjoy clean code, intuitive UX, and scalable systems.
            </p>
          </div>
          <div className="hidden text-right text-sm text-slate-400 md:block">
            Available for freelance projects and full-time roles.
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.name} className="group rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition hover:bg-slate-900/70">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/20">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="mt-1 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
