import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { PROFESSIONAL_EMAIL_LINK } from '../constants/contact.js';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-950 px-5 py-10 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex justify-center gap-4">
          {[
            { href: 'https://github.com/purshottammishra', icon: FaGithub, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/purshottam-mishra01/', icon: FaLinkedinIn, label: 'LinkedIn' },
            { href: PROFESSIONAL_EMAIL_LINK, icon: FaEnvelope, label: 'Email' }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-800 bg-gray-900 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <item.icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400">(c) {currentYear} Built with care by Purshoottam Mishra</p>
      </div>
    </footer>
  );
}

export default Footer;
