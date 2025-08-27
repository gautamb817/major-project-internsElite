import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react"; // icons
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-lg">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          My Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-200">
          <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</Link></li>
          <li><Link to="/resume" className="hover:text-blue-600 dark:hover:text-blue-400">Resume</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
        </ul>

        {/* Actions (Dark mode toggle + mobile menu button) */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} className="text-gray-800 dark:text-gray-200" /> : <Menu size={28} className="text-gray-800 dark:text-gray-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col bg-white dark:bg-gray-900 border-t shadow p-4 space-y-4 text-gray-800 dark:text-gray-200">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link to="/resume" onClick={() => setOpen(false)}>Resume</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
