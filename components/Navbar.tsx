"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/90 backdrop-blur-md border-b border-bg-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-display font-bold text-lg text-text-primary hover:text-accent-secondary transition-colors"
        >
          <Terminal
            size={18}
            className="text-accent-primary"
            aria-hidden="true"
          />
          <span className="font-mono text-sm text-accent-primary">~/</span>
          <span className="font-display text-base">
            {siteConfig.name.split(" ")[0].toLowerCase()}
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors tracking-wider uppercase"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={siteConfig.resumeUrl}
              download
              className="px-4 py-2 text-xs font-mono font-medium border border-accent-primary text-accent-primary rounded hover:bg-accent-primary hover:text-white transition-all duration-200 tracking-wider"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-secondary border-b border-bg-border">
          <ul className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block font-mono text-sm text-text-secondary hover:text-text-primary transition-colors py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={siteConfig.resumeUrl}
                download
                className="inline-block px-4 py-2 text-xs font-mono border border-accent-primary text-accent-primary rounded hover:bg-accent-primary hover:text-white transition-all duration-200"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
