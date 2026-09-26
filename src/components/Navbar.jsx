import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";
import siteConfig from "../config/siteConfig";
import { getWhatsAppGroupLink } from "../config/whatsapp";
import logo from "../assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Services", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-soft" : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0" aria-label={siteConfig.centreName}>
          <img
            src={logo}
            alt={`${siteConfig.centreName} logo`}
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover shadow-soft ring-1 ring-slate-100"
          />
          <span className="font-display font-bold text-sm sm:text-lg text-slate-900 leading-tight">
            {siteConfig.centreName}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button as="a" href={getWhatsAppGroupLink()} target="_blank" rel="noopener noreferrer" variant="whatsapp">
            Join WhatsApp
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-white transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col px-6 py-8 gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block rounded-lg px-4 py-3 text-lg font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <Button
              as="a"
              href={getWhatsAppGroupLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              className="w-full"
              onClick={handleLinkClick}
            >
              Join WhatsApp Group
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
