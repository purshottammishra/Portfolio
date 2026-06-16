import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'ABC Tech',
    period: 'June 2024 - Aug 2024',
    description: 'Built responsive React interfaces, improved API integration flows, and collaborated on reusable frontend components.'
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub Projects',
    period: '2023 - Present',
    description: 'Contributed to community projects through issue fixes, documentation improvements, backend APIs, and collaborative Git workflows.'
  }
];

function Experience() {
  return (
    <section id="experience" className="bg-gray-950 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Experience</p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">Growing through shipped work and collaboration.</h2>
          <p className="mt-5 text-lg leading-8 text-gray-400">
            A timeline of hands-on development, internship experience, and continuous open-source contribution.
          </p>
        </div>

        <div className="relative mt-14 max-w-4xl">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-purple-500 via-cyan-400 to-gray-800" />
          <div className="space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={`${item.role}-${item.company}`}
                initial={{ opacity: 0, x: 34 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/50 bg-gray-900 text-cyan-400">
                  <FiBriefcase size={19} />
                </div>
                <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition hover:border-purple-500/70">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.role}</h3>
                      <p className="mt-1 font-semibold text-cyan-400">{item.company}</p>
                    </div>
                    <p className="rounded-full border border-gray-800 bg-gray-950 px-3 py-1.5 text-sm font-semibold text-gray-300">
                      {item.period}
                    </p>
                  </div>
                  <p className="mt-4 leading-7 text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
