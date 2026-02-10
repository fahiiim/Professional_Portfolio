import React, { useState } from 'react';
import { NavLink } from 'react-router';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Education', to: '/education' },
  { label: 'Experience', to: '/experience' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Certificates', to: '/certificates' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkBase = 'relative px-3 py-2 text-sm font-medium transition-all duration-300';

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/10 shadow-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">

        {/* Brand */}
        <div className="flex flex-col leading-tight">
          <span className="text-sm md:text-base font-semibold text-emerald-400">
           <NavLink to="/"> Md. Fahim Sarker Mridul</NavLink>
          </span>
        </div>

        {/* Desktop Nav for lg and above */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? 'text-emerald-300' : 'text-slate-300 hover:text-emerald-300'}`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300 transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* CTA */}
          {/* <a
            href="mailto:fahimsarker0805@gmail.com"
            className="ml-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md transition hover:scale-105"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-600 ring-2 ring-emerald-200" />
            Available for opportunities
          </a> */}
        </div>

        {/* Mobile & Medium Toggle */}
        <button
          className="lg:hidden h-10 w-10 rounded-full border border-emerald-400/50 flex items-center justify-center"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-emerald-300 transition ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 w-5 bg-emerald-300 transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-emerald-300 transition ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile & Medium Menu */}
      {open && (
        <div className="lg:hidden bg-slate-950/95 border-t border-white/10 px-4 pb-4 pt-3 animate-fade-slide absolute w-full left-0 top-full z-40 shadow-lg">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-2 text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-emerald-400 text-slate-950 shadow-md'
                      : 'text-slate-300 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-cyan-300 hover:text-slate-950'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </ul>

          {/* Mobile CTA */}
          {/* <a
            href="mailto:fahimsarker0805@gmail.com"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md transition hover:scale-105"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-600 ring-2 ring-emerald-200" />
            Available for opportunities
          </a> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
