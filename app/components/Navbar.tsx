"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div style={{display: 'flex', alignItems: 'center', gap: '0.7rem'}}>
          <a href="#hero" style={{display: 'flex', alignItems: 'center'}}>
            <img
              src="/profile.png"
              alt="Alex Gitari profile"
              style={{width: '5rem', height: '5rem', borderRadius: '50%', border: '2px solid var(--accent)', objectFit: 'cover', boxShadow: '0 1px 6px 0 rgba(0,0,0,0.10)', marginRight: 8}}
            />
          </a>
          <a href="#hero" className="navbar-logo">Alex<span className="accent">Gitari</span></a>
        </div>
        <button
          className="navbar-burger"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`navbar-links${open ? " open" : ""}`} id="navbar-links">
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
          <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
