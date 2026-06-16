import { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses =
    'cursor-pointer text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-cyan-400';

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link
          to="home"
          smooth={true}
          duration={550}
          offset={-80}
          className="cursor-pointer text-2xl font-black text-gradient"
          onClick={() => setIsOpen(false)}
          aria-label="Go to hero section"
        >
          PM
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={550}
              offset={-80}
              spy={true}
              activeClass="!text-white"
              className={linkClasses}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-gray-200 transition hover:border-purple-500/70 hover:text-white md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-800 bg-gray-900/95 px-5 py-4 backdrop-blur-md md:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={550}
                offset={-76}
                className="cursor-pointer rounded-lg border border-gray-800 px-4 py-3 text-sm font-semibold text-gray-300 transition hover:border-purple-500/70 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
