import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { CONTACT_EMAIL, PROFESSIONAL_EMAIL_LINK } from '../constants/contact.js';

const initialForm = {
  name: '',
  email: '',
  message: ''
};
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus({ type: 'error', message: 'Please fill in all fields before sending.' });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus({ type: '', message: '' });
      await axios.post(`${API_BASE_URL}/api/contact`, { name, email, message });
      setFormData(initialForm);
      setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' });
    } catch (error) {
      const apiMessage = error.response?.data?.message;
      setStatus({ type: 'error', message: apiMessage || 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-950 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Contact</p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">Let&apos;s build something useful.</h2>
          <p className="mt-5 text-lg leading-8 text-gray-400">
            Have an internship opportunity, project idea, or collaboration in mind? Send a message and the backend will store it securely in MongoDB.
          </p>

          <div className="mt-10 grid gap-4">
            {[
              { icon: FaEnvelope, label: 'Email', value: CONTACT_EMAIL, href: PROFESSIONAL_EMAIL_LINK },
              { icon: FaLinkedinIn, label: 'LinkedIn', value: 'linkedin.com/in/purshottam-mishra', href: 'https://linkedin.com/in/purshottam-mishra' },
              { icon: FaGithub, label: 'GitHub', value: 'github.com/purshottammishra', href: 'https://github.com/purshottammishra' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900 p-4 transition hover:border-cyan-400/70"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                  <item.icon size={19} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{item.label}</span>
                  <span className="block break-all text-sm text-gray-400">{item.value}</span>
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-gray-800 bg-gray-900 p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-gray-200">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-gray-200">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                placeholder="your@email.com"
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2">
            <span className="text-sm font-semibold text-gray-200">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="7"
              className="resize-none rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
              placeholder="Tell me about the project, role, or idea..."
            />
          </label>

          {status.message && (
            <p
              className={`mt-5 rounded-xl border px-4 py-3 text-sm font-semibold ${
                status.type === 'success'
                  ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-300'
                  : 'border-purple-500/40 bg-purple-500/10 text-purple-200'
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3.5 text-sm font-black text-white shadow-glow transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
