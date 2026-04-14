import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';

export function About() {
  return (
    <>
      <SEO title="About" description="About the researcher and clinician." />
      
      <section className="bg-apple-light dark:bg-apple-dark text-apple-textLight dark:text-apple-textDark section-padding min-h-screen">
        <div className="max-w-[980px] mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/3 shrink-0"
            >
              <div className="aspect-[3/4] bg-apple-surfaceDark1 rounded-[12px] overflow-hidden mb-6">
                <img 
                  src="photo.png" 
                  alt="Portrait" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h1 className="text-[28px] font-semibold leading-tight mb-2">Mohammed W. Hammami</h1>
              <p className="text-[17px] text-black/60 dark:text-white/60 mb-6">
                Medical Student
              </p>
              <div className="space-y-3 text-[14px]">
                <p className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="text-black/60 dark:text-white/60">Location</span>
                  <span className="font-medium">Sousse, TN</span>
                </p>
                <p className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="text-black/60 dark:text-white/60">Institution</span>
                  <span className="font-medium">Faculty of Medicine of Sousse</span>
                </p>
                <p className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="text-black/60 dark:text-white/60">Focus</span>
                  <span className="font-medium">Bioinformatics</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-2/3 prose prose-lg dark:prose-invert max-w-none"
            >
              <h2 className="text-[40px] font-semibold leading-tight mb-8 tracking-tight">
                  Building at the intersection of medicine and computer science to transform healthcare
              </h2>
              <div className="space-y-6 text-[17px] leading-relaxed text-black/80 dark:text-white/80">
                <p>
  I am a medical student with a strong interest in computer science, focused on building computational tools that improve the way medicine is learned and understood.
</p>

<p>
  My journey began at the intersection of clinical medicine and programming, where I started exploring how software can simplify complex medical concepts. I have developed tools such as a clinical scoring calculator in Python for common pulmonary and cardiac scores, helping streamline medical decision-making and learning.
</p>

<p>
  Currently, I am building structured medical knowledge systems, including a laboratory value database designed as an interactive learning tool for students and clinicians. My broader goal is to expand into web-based and computational health applications, combining React-based interfaces with Python-driven logic, and eventually exploring areas such as bioinformatics and genomics.
</p>

<p>
  I am also involved in early-stage research, having contributed to a preprint, and I aim to continue developing projects at the intersection of medicine, data, and computation. My long-term vision is to contribute to the development of intelligent, accessible tools that support both medical education and biomedical research.
</p>
              </div>

<div className="mt-12 pt-12 border-t border-black/10 dark:border-white/10">
  <h3 className="text-[21px] font-semibold mb-6">Education</h3>
  <ul className="space-y-4 text-[17px]">
    <li>
      <strong className="block font-medium">Doctor of Medicine (MD), Medical Student</strong>
      <span className="text-black/60 dark:text-white/60">
        Faculty of Medicine of Sousse &bull; 2022 – Present
      </span>
    </li>
  </ul>
</div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
