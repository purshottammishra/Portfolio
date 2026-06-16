import { motion } from 'framer-motion';
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiCplusplus, SiExpress, SiJavascript, SiMongodb, SiPostman, SiTailwindcss } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillGroups = [
  {
    title: 'Frontend',
    accent: 'from-purple-500 to-cyan-400',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'Tailwind', icon: SiTailwindcss }
    ]
  },
  {
    title: 'Backend',
    accent: 'from-cyan-400 to-purple-500',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress }
    ]
  },
  {
    title: 'Database',
    accent: 'from-purple-500 to-cyan-400',
    skills: [{ name: 'MongoDB', icon: SiMongodb }]
  },
  {
    title: 'Languages',
    accent: 'from-cyan-400 to-purple-500',
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'C++', icon: SiCplusplus }
    ]
  },
  {
    title: 'Tools',
    accent: 'from-purple-500 to-cyan-400',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: VscVscode },
      { name: 'Postman', icon: SiPostman }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

function Skills() {
  return (
    <section id="skills" className="bg-gray-950 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Skills</p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">Tools I use to build dependable products.</h2>
          <p className="mt-5 text-lg leading-8 text-gray-400">
            A focused stack for shipping responsive interfaces, robust APIs, and MongoDB-backed full-stack applications.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={cardVariants} className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${group.accent}`} />
              <h3 className="mt-5 text-xl font-bold text-white">{group.title}</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-950 px-3 py-2 text-sm font-semibold text-gray-200"
                  >
                    <skill.icon className="text-cyan-400" size={17} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
