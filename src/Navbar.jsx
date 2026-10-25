import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-slate-900 border-b border-slate-800 shadow-lg z-50 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* لینک خانه در سمت چپ صفحه */}
        <div>
          <NavLink to="/" className="text-xl font-bold tracking-wider text-gray-300 hover:text-emerald-400 transition-colors duration-300">
            Home
          </NavLink>
        </div>

        {/* ۴ لینک اصلی در سمت راست با فواصل کاملاً مساوی */}
        <ul className="flex items-center gap-6 md:gap-10 list-none m-0 p-0">
          <li>
            <NavLink to="/projects" className="text-sm font-medium text-gray-400 hover:text-emerald-400 px-3 py-1.5 transition-all duration-300">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="text-sm font-medium text-gray-400 hover:text-emerald-400 px-3 py-1.5 transition-all duration-300">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-sm font-medium text-gray-400 hover:text-emerald-400 px-3 py-1.5 transition-all duration-300">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-sm font-medium text-gray-400 hover:text-emerald-400 px-3 py-1.5 transition-all duration-300">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" className="text-sm font-medium text-gray-400 hover:text-emerald-400 px-3 py-1.5 transition-all duration-300">
              مدیریت
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
}
