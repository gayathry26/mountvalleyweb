import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { schoolInfo, navLinks } from '../../data/schoolData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-lg bg-white p-1 flex items-center justify-center border border-slate-700 shadow-sm transition-transform group-hover:scale-105">
                <img
                  src={schoolInfo.logo}
                  alt={schoolInfo.name}
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <div>
                <span className="block font-extrabold text-white text-lg tracking-tight uppercase font-serif group-hover:text-brand-300 transition-colors">
                  Mount Valley
                </span>
                <span className="block text-xs text-brand-400 font-semibold tracking-widest uppercase mt-0.5">
                  Public School
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {schoolInfo.tagline}. Dedicated to nurturing young minds through quality education, character building, and modern laboratory experiences.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              <span>Dedicated to Holistic Student Growth</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-brand-300 transition-colors inline-flex items-center gap-1.5 text-slate-400 hover:translate-x-0.5 duration-200"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-500/80" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic & Community Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              Academics & Info
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.slice(4).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-brand-300 transition-colors inline-flex items-center gap-1.5 text-slate-400 hover:translate-x-0.5 duration-200"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-500/80" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/admissions"
                  className="hover:text-brand-300 transition-colors inline-flex items-center gap-1.5 text-brand-400 font-medium"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-400" />
                  <span>Admissions Procedure 2026-27</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information Placeholders (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              School Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{schoolInfo.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href={`tel:${schoolInfo.contact.phone.split('/')[0].trim()}`} className="hover:text-white transition-colors">
                  {schoolInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href={`mailto:${schoolInfo.contact.email}`} className="hover:text-white transition-colors">
                  {schoolInfo.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{schoolInfo.contact.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Mount Valley Public School. All rights reserved.</p>
          <p className="text-slate-400 text-center sm:text-right">
            Nurturing young minds • Experimental laboratories • Value-based education
          </p>
        </div>
      </div>
    </footer>
  );
}
