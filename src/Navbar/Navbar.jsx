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
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-lg shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-4">
        
        {/* Desktop Nav - Centered */}
        <div className="hidden lg:flex items-center justify-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? 'text-[#C9D98B]' : 'text-gray-300 hover:text-[#C9D98B]'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle - Positioned at right */}
        <div className="lg:hidden flex items-center justify-end">
          <button
            className="h-10 w-10 rounded-md flex items-center justify-center hover:bg-white/10 transition"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-[#C9D98B] transition ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-5 bg-[#C9D98B] transition ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-[#C9D98B] transition ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black/98 border-t border-gray-800 px-4 pb-4 pt-3 absolute w-full left-0 top-full z-40 shadow-xl">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-4 py-3 text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-[#C9D98B]/10 text-[#C9D98B]'
                      : 'text-gray-300 hover:bg-[#C9D98B]/5 hover:text-[#C9D98B]'
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
