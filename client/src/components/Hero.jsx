import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { PROFESSIONAL_EMAIL_LINK } from '../constants/contact.js';

const roles = ['Full Stack Developer', 'MERN Stack Enthusiast', 'Problem Solver'];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isComplete = typedText === currentRole;
    const isEmpty = typedText === '';
    const delay = isComplete && !isDeleting ? 1300 : isDeleting ? 42 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
        return;
      }

      setTypedText((current) =>
        isDeleting
          ? currentRole.slice(0, Math.max(current.length - 1, 0))
          : currentRole.slice(0, current.length + 1)
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [isDeleting, roleIndex, typedText]);

  return (
    <section id="home" className="hero-gradient relative flex min-h-screen items-center overflow-hidden pt-20 animate-gradient">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-950 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Final-year CS student building practical MERN products
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-gradient">Purshottam Mishra</span>
          </h1>
          <p className="mt-5 text-xl font-semibold text-gray-200 sm:text-2xl">
            Full Stack Developer | CS Final Year Student
          </p>
          <div className="mt-4 h-9 text-lg font-semibold text-cyan-400 sm:text-xl">
            {typedText}
            <span className="ml-1 inline-block h-6 w-0.5 translate-y-1 bg-purple-500" />
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I design and build polished web applications with React, Node.js, Express, and MongoDB, turning product ideas into fast, reliable user experiences.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="projects"
              smooth={true}
              duration={550}
              offset={-80}
              className="cursor-pointer rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 px-7 py-3.5 text-center text-sm font-bold text-white shadow-glow transition hover:scale-[1.02]"
            >
              View My Work
            </Link>
            <a
              href="/Purshottam_Mishra_Resume.pdf"
              download="Purshottam_Mishra_Resume.pdf"
              className="rounded-xl border border-gray-700 bg-gray-900 px-7 py-3.5 text-center text-sm font-bold text-gray-200 transition hover:border-cyan-400 hover:text-white"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
            {[
              { href: 'https://github.com/purshottammishra', icon: FaGithub, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/purshottam-mishra01/', icon: FaLinkedinIn, label: 'LinkedIn' },
              { href: PROFESSIONAL_EMAIL_LINK, icon: FaEnvelope, label: 'Email' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-800 bg-gray-900 text-gray-300 transition hover:border-purple-500 hover:text-cyan-400"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <item.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          <div className="glass-card animate-float rounded-xl p-7 shadow-glow">
            <div className="rounded-xl border border-gray-800 bg-gray-950 p-5">
              <div className="mb-5 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-purple-500" />
                <span className="h-3 w-3 rounded-full bg-cyan-400" />
                <span className="h-3 w-3 rounded-full bg-gray-600" />
              </div>
              <pre className="overflow-hidden text-sm leading-7 text-gray-300">
                <code>{`const developer = {
  name: 'Purshoottam Mishra',
  stack: ['React', 'Node', 'MongoDB'],
  focus: 'real-world products',
  status: 'building'
};`}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
