import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'MERN stack online store with authentication, cart management, product workflows, and payment-ready checkout architecture.',
    tags: ['React', 'Node.js', 'MongoDB', 'Payments']
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat using Socket.io and React with multi-room messaging, live presence, and responsive conversation views.',
    tags: ['React', 'Socket.io', 'Express', 'WebSockets']
  },
  {
    title: 'Portfolio Website',
    description: 'This portfolio, built with MERN, Tailwind CSS, Framer Motion, and a contact API designed for MongoDB persistence.',
    tags: ['Vite', 'Tailwind', 'Express', 'MongoDB']
  }
];

function Projects() {
  return (
    <section id="projects" className="bg-gray-950 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Projects</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">Selected builds with real product shape.</h2>
            <p className="mt-5 text-lg leading-8 text-gray-400">
              Full-stack work focused on user flows, maintainable code, and deployment-ready architecture.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group rounded-xl border border-gray-800 bg-gray-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-500/70 hover:shadow-glow"
            >
              <div className="mb-6 h-40 overflow-hidden rounded-xl border border-gray-800 bg-gray-950">
                <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,rgba(168,85,247,0.18),rgba(34,211,238,0.12)),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_100%,28px_28px,28px_28px]">
                  <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
                    {project.tags[0]}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 min-h-24 text-base leading-7 text-gray-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-gray-800 bg-gray-950 px-3 py-1.5 text-xs font-semibold text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex gap-3">
                <a
                  href="https://github.com/purshottammishra"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-700 px-4 py-3 text-sm font-bold text-gray-200 transition hover:border-purple-500 hover:text-white"
                >
                  <FaGithub size={17} />
                  GitHub
                </a>
                <a
                  href="#"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 px-4 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
                >
                  <FiExternalLink size={17} />
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
