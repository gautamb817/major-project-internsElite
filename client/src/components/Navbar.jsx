import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react"; // npm install lucide-react

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  // Apply theme on load & when toggled
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          My Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</Link></li>
          <li><Link to="/resume" className="hover:text-blue-600 dark:hover:text-blue-400">Resume</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
          <li><Link to="/dashboard" className="hover:text-blue-600 dark:hover:text-blue-400">Dashboard</Link></li>
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="hidden md:flex ml-4 text-gray-600 dark:text-gray-300"
        >
          {dark ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col bg-white dark:bg-gray-900 border-t shadow p-4 space-y-4">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link to="/resume" onClick={() => setOpen(false)}>Resume</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          <li><Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link></li>

          {/* Mobile Theme Toggle */}
          <li>
            <button
              onClick={() => {
                setDark(!dark);
                setOpen(false);
              }}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
              <span>{dark ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
