import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold text-white">
          <span className="text-cyan-400">&lt;/&gt;</span> Dev Portfolio
        </a>
        <nav className="hidden gap-6 md:flex">
          <a href="#about" className="text-sm text-slate-300 hover:text-white">About</a>
          <a href="#projects" className="text-sm text-slate-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-sm text-slate-300 hover:text-white">Contact</a>
        </nav>
        <button className="rounded-md p-2 text-slate-300 hover:bg-slate-800 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#about" className="text-sm text-slate-300 hover:text-white" onClick={() => setOpen(false)}>About</a>
            <a href="#projects" className="text-sm text-slate-300 hover:text-white" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name. Built with HTML, CSS, PHP, and MySQL expertise.
      </footer>
    </div>
  );
}

export default App;
