import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import siteConfig from "../config/siteConfig";
import { useLanguage } from "../i18n/LanguageContext";
import logo from "../assets/logo.jpeg";

const quickLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "courses", href: "#courses" },
  { key: "why", href: "#why-us" },
  { key: "contact", href: "#contact" },
];

export default function Footer() {
  const { t, brand } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-24 text-center text-xs text-slate-500">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img
              src={logo}
              alt={t.nav.logoAlt(brand.centreName)}
              className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/10"
            />
            <span className="font-display font-bold text-white">{brand.centreName}</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">{brand.tagline}</p>

          {(siteConfig.social.facebook || siteConfig.social.instagram || siteConfig.social.youtube) && (
            <div className="flex gap-3 mt-5">
              {siteConfig.social.facebook && (
                <SocialIcon href={siteConfig.social.facebook} icon={Facebook} label="Facebook" />
              )}
              {siteConfig.social.instagram && (
                <SocialIcon href={siteConfig.social.instagram} icon={Instagram} label="Instagram" />
              )}
              {siteConfig.social.youtube && (
                <SocialIcon href={siteConfig.social.youtube} icon={Youtube} label="YouTube" />
              )}
            </div>
          )}
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {t.footer.links[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-white font-semibold mb-4">{t.footer.courses}</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            {t.courses.items.map((course) => (
              <li key={course.title}>{course.title}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex gap-2.5">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              <span className="min-w-0 break-words">{brand.address.full}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={16} className="shrink-0 mt-0.5" />
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail size={16} className="shrink-0 mt-0.5" />
              <a href={`mailto:${siteConfig.email}`} className="min-w-0 break-all hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-slate-500">
          {t.footer.rights(year, brand.centreName)}
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-brand-600 transition-colors"
    >
      <Icon size={16} />
    </a>
  );
}
