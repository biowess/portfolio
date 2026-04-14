import { useState, type ChangeEvent, type FormEvent } from 'react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Fingerprint, CheckCircle2, Loader2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '80408c4e-47d9-4d27-9a99-65982e23deee',
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const inputClass =
    'w-full rounded-[8px] border border-black/10 bg-white px-4 py-3 text-apple-textLight placeholder:text-black/35 transition-colors focus:outline-none focus:border-hematology-500 dark:border-white/10 dark:bg-apple-dark dark:text-white dark:placeholder:text-white/35';

  return (
    <>
      <SEO title="Contact | Mohammed W. Hammami" description="Get in touch for collaborations and inquiries." />

      <section className="min-h-screen bg-white pt-32 text-apple-textLight dark:bg-apple-dark dark:text-apple-textDark section-padding flex items-center">
        <div className="mx-auto w-full max-w-[980px]">
          <div className="grid items-start gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="hero-heading mb-6 text-4xl font-bold text-apple-textLight dark:text-white">
                Contact
              </h1>

              <p className="mb-10 text-[18px] font-light leading-relaxed text-apple-textLight/70 dark:text-white/70">
                I am always open to discussing research collaborations, technical projects, or academic opportunities.
                Whether you have a question about my work or just want to connect, feel free to reach out.
              </p>

              <div className="mb-8 flex flex-col gap-6">
                <a href="mailto:biowess@proton.me" className="group flex items-center gap-4">
                  <div className="shrink-0 rounded-full bg-black/5 p-3 text-apple-textLight transition-colors group-hover:bg-hematology-500 group-hover:text-white dark:bg-white/10 dark:text-white">
                    <Mail size={20} />
                  </div>
                  <span className="text-[17px] text-apple-textLight/80 transition-colors group-hover:text-apple-textLight dark:text-white/80 dark:group-hover:text-white">
                    biowess@proton.me
                  </span>
                </a>

                <a
                  href="https://github.com/biowess"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="shrink-0 rounded-full bg-black/5 p-3 text-apple-textLight transition-colors group-hover:bg-hematology-500 group-hover:text-white dark:bg-white/10 dark:text-white">
                    <Github size={20} />
                  </div>
                  <span className="text-[17px] text-apple-textLight/80 transition-colors group-hover:text-apple-textLight dark:text-white/80 dark:group-hover:text-white">
                    GitHub
                  </span>
                </a>

                <a
                  href="https://linkedin.com/in/biowess"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="shrink-0 rounded-full bg-black/5 p-3 text-apple-textLight transition-colors group-hover:bg-hematology-500 group-hover:text-white dark:bg-white/10 dark:text-white">
                    <Linkedin size={20} />
                  </div>
                  <span className="text-[17px] text-apple-textLight/80 transition-colors group-hover:text-apple-textLight dark:text-white/80 dark:group-hover:text-white">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="https://orcid.org/0009-0001-5116-5177"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="shrink-0 rounded-full bg-black/5 p-3 text-apple-textLight transition-colors group-hover:bg-hematology-500 group-hover:text-white dark:bg-white/10 dark:text-white">
                    <Fingerprint size={20} />
                  </div>
                  <span className="text-[17px] text-apple-textLight/80 transition-colors group-hover:text-apple-textLight dark:text-white/80 dark:group-hover:text-white">
                    ORCID
                  </span>
                </a>
              </div>

              <p className="text-[14px] italic text-apple-textLight/50 dark:text-white/50">
                Note: I aim to respond to all professional inquiries within 48 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-[16px] bg-white p-8 dark:bg-apple-surfaceDark1"
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex h-full flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
                      className="mb-4 text-green-500"
                    >
                      <CheckCircle2 size={64} />
                    </motion.div>
                    <h3 className="mb-2 text-2xl font-semibold text-apple-textLight dark:text-white">
                      Message Sent!
                    </h3>
                    <p className="text-apple-textLight/70 dark:text-white/70">
                      Thank you for reaching out. I will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                    onSubmit={handleSubmit}
                  >
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[14px] font-medium text-apple-textLight/70 dark:text-white/70"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[14px] font-medium text-apple-textLight/70 dark:text-white/70"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-[14px] font-medium text-apple-textLight/70 dark:text-white/70"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Research Inquiry / Collaboration"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-[14px] font-medium text-apple-textLight/70 dark:text-white/70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className={`${inputClass} resize-none`}
                        placeholder="How can I help you?"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-red-500 dark:text-red-400">
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="flex w-full items-center justify-center rounded-[8px] bg-hematology-500 px-6 py-3 font-medium text-white transition-colors hover:bg-hematology-600 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === 'submitting' ? <Loader2 className="animate-spin" size={20} /> : 'Send Message'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}