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
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close the menu automatically if the screen is resized to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close menu, then smoothly scroll to the chosen section
  const handleMobileLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (!target) return;
      const headerHeight = window.innerWidth >= 640 ? 80 : 64;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;
      window.scrollTo({ top: href === "#home" ? 0 : top, behavior: "smooth" });
    }, 60);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isOpen
            ? "bg-white shadow-soft"
            : scrolled
            ? "bg-white/90 backdrop-blur-md shadow-soft"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 min-w-0"
            aria-label={siteConfig.centreName}
          >
            <img
              src={logo}
              alt={`${siteConfig.centreName} logo`}
              className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-full object-cover shadow-soft ring-1 ring-slate-100"
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
            <Button
              as="a"
              href={getWhatsAppGroupLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
            >
              Join WhatsApp
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden inline-flex shrink-0 items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {/*
        Mobile menu panel.
        IMPORTANT: this lives OUTSIDE <header>. The header uses backdrop-blur,
        which would otherwise make it the container for this fixed panel and
        shrink the panel to the header's height (that was the transparent-menu bug).
      */}
      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`lg:hidden fixed inset-x-0 bottom-0 top-16 sm:top-20 z-40 overflow-y-auto bg-white transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 py-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleMobileLinkClick(e, link.href)}
                tabIndex={isOpen ? 0 : -1}
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
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
            >
              Join WhatsApp Group
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
