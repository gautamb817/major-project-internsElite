import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-600">Projects</Link></li>
          <li><Link to="/resume" className="hover:text-blue-600">Resume</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col bg-white border-t shadow p-4 space-y-4">
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
