import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <span className="inline-block rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1 text-sm text-slate-300">
              Full Stack Developer
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              I build modern, reliable web apps
            </h1>
            <p className="max-w-xl text-slate-300">
              Specialized in crafting responsive interfaces and robust backends using HTML, CSS, PHP, and MySQL. I love turning ideas into delightful, performant user experiences.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#projects" className="rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
                View Projects
              </a>
              <a href="#contact" className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:bg-slate-800/60">
                Contact Me
              </a>
            </div>
            <div className="flex items-center gap-4 pt-4 text-slate-300">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md p-2 transition hover:bg-slate-800">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-md p-2 transition hover:bg-slate-800">
                <Linkedin size={22} />
              </a>
              <a href="#contact" aria-label="Email" className="rounded-md p-2 transition hover:bg-slate-800">
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="h-[420px] w-full md:h-[560px]">
            <div className="h-full w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 shadow-2xl">
              <Spline
                scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 to-transparent" />
    </section>
  );
};

export default Hero;
