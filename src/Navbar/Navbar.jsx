import React, { useState } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/logo.svg';

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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4">
        
        {/* Desktop Nav - Logo left, Nav centered */}
        <div className="hidden lg:flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-12 text-white filter brightness-0 invert" />
          </NavLink>
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? 'text-gray-900 border-b-2 border-gray-700' : 'text-gray-600 hover:text-gray-900'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="h-12 w-12"></div> {/* Spacer for balance */}
        </div>

        {/* Mobile Nav - Logo left, Toggle right */}
        <div className="lg:hidden flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-10 filter brightness-0 invert" />
          </NavLink>
          <button
            className="h-10 w-10 rounded-md flex items-center justify-center hover:bg-gray-100 transition"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-gray-700 transition ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-5 bg-gray-700 transition ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-gray-700 transition ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white/95 border-t border-gray-200 px-4 pb-4 pt-3 absolute w-full left-0 top-full z-40 shadow-md">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-4 py-3 text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
