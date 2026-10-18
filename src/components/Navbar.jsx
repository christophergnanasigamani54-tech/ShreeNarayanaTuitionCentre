import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";
import LanguageToggle from "./LanguageToggle";
import { getWhatsAppGroupLink } from "../config/whatsapp";
import { useLanguage } from "../i18n/LanguageContext";
import logo from "../assets/logo.jpeg";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "courses", href: "#courses" },
  { key: "services", href: "#why-us" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const { t, brand } = useLanguage();
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
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2"
          aria-label={t.nav.primary}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 min-w-0"
            aria-label={brand.centreName}
          >
            <img
              src={logo}
              alt={t.nav.logoAlt(brand.centreName)}
              className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-full object-cover shadow-soft ring-1 ring-slate-100"
            />
            <span className="font-display font-bold text-[13px] sm:text-lg text-slate-900 leading-tight">
              {brand.centreName}
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
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop: language toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
            <Button
              as="a"
              href={getWhatsAppGroupLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
            >
              {t.nav.joinShort}
            </Button>
          </div>

          {/* Mobile: language toggle + hamburger */}
          <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
            <LanguageToggle className="!px-2.5 !py-1.5 text-xs" />
            <button
              type="button"
              className="inline-flex shrink-0 items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {/*
        Mobile menu panel.
        - Lives OUTSIDE <header> (header's backdrop-blur would otherwise shrink this fixed panel).
        - The outer box clips everything, so the hidden panel can never push the page wider.
        - When closed the panel is invisible; it only shows when opened.
      */}
      <div className="lg:hidden pointer-events-none fixed inset-x-0 bottom-0 top-16 sm:top-20 z-40 overflow-hidden">
        <div
          id="mobile-menu"
          aria-hidden={!isOpen}
          className={`h-full w-full overflow-y-auto bg-white transition-all duration-300 ease-out ${
            isOpen
              ? "visible translate-x-0 pointer-events-auto"
              : "invisible translate-x-full"
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
                  {t.nav[link.key]}
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
                className="w-full text-center !px-4"
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
              >
                {t.nav.join}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
