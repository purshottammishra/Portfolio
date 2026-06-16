import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { FiCode, FiDatabase, FiServer } from 'react-icons/fi';

function About() {
  return (
    <section id="about" className="bg-gray-950 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">About Me</p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            Practical engineering with a product-first mindset.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            I&apos;m a final year Computer Science student passionate about building real-world web applications using the MERN stack. I love turning ideas into scalable, efficient solutions.
          </p>
          <p className="mt-5 text-base leading-8 text-gray-400">
            My work focuses on clean APIs, responsive interfaces, authentication, database modeling, and deployment-ready full-stack architecture.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: FiCode, label: 'Frontend', value: 'React + Tailwind' },
              { icon: FiServer, label: 'Backend', value: 'Node + Express' },
              { icon: FiDatabase, label: 'Database', value: 'MongoDB' }
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-gray-800 bg-gray-900 p-5">
                <item.icon className="text-cyan-400" size={24} />
                <p className="mt-4 text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-sm text-gray-400">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="space-y-5"
        >
          <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-8 shadow-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/14 via-transparent to-cyan-400/14" />
            <div className="relative flex aspect-square items-center justify-center rounded-xl border border-gray-800 bg-gray-950">
              <div className="text-center">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-4xl font-black text-white">
                  PM
                </div>
                <p className="mt-6 text-lg font-bold text-white">MERN Stack Developer</p>
                <p className="mt-2 text-sm text-gray-400">Lucknow, India</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                <FaGraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">B.Tech in Computer Science</h3>
                <p className="mt-2 text-gray-400">Goel Institute of Technology and Management</p>
                <p className="mt-1 text-sm font-semibold text-cyan-400">2025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
