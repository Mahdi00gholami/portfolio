import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  ['Projects', '/projects'],
  ['Skills', '/skills'],
  ['About', '/about'],
  ['Contact', '/contact'],
  ['مدیریت', '/admin'],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
    }`;

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-900 shadow-lg">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-12">
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-bold tracking-wider text-gray-300 transition-colors duration-300 hover:text-emerald-400"
        >
          Home
        </NavLink>

        <ul className="hidden list-none items-center gap-6 p-0 md:flex md:gap-10">
          {links.map(([label, to]) => (
            <li key={to}>
              <NavLink to={to} className={linkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-300 hover:bg-slate-800 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <ul
          id="mobile-navigation"
          className="list-none space-y-1 border-t border-slate-800 bg-slate-900 px-6 py-3 md:hidden"
        >
          {links.map(([label, to]) => (
            <li key={to}>
              <NavLink
                to={to}
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
