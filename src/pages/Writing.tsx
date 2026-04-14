import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';

// const articles = [
//   {
//     id: 1,
//     title: "The Future of Personalized Medicine in Oncology",
//     date: "October 12, 2025",
//     excerpt: "As genomic sequencing becomes more accessible, we are entering an era where treatments are tailored not just to the disease, but to the individual's unique genetic makeup.",
//     readTime: "5 min read"
//   },
//   {
//     id: 2,
//     title: "Understanding the Bone Marrow Microenvironment",
//     date: "August 04, 2025",
//     excerpt: "The bone marrow is not merely a factory for blood cells; it is a complex ecosystem that dictates cellular fate and plays a crucial role in disease progression.",
//     readTime: "8 min read"
//   },
//   {
//     id: 3,
//     title: "Ethics in Modern Clinical Trials",
//     date: "May 21, 2025",
//     excerpt: "Balancing the urgent need for new therapies with the absolute necessity of patient safety and informed consent in experimental treatments.",
//     readTime: "6 min read"
//   }
// ];

export function Writing() {
  return (
    <>
      <SEO title="Writing" description="Essays and articles on medicine, science, and research." />
      <section className="bg-apple-light dark:bg-apple-dark text-apple-textLight dark:text-apple-textDark section-padding min-h-screen">
        <div className="max-w-[800px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="hero-heading mb-6">Writing</h1>
            <p className="text-[21px] font-light text-black/70 dark:text-white/70">
              Thoughts, essays, and commentary on the evolving landscape of medical science and clinical practice.
            </p>
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center text-center py-24"
          >
            <div className="text-[48px] mb-6">✍️</div>
            <h2 className="text-[28px] font-semibold mb-4">Coming Soon</h2>
            <p className="text-[17px] font-light text-black/60 dark:text-white/60 max-w-[480px] leading-relaxed">
              Articles and essays are on their way. Check back soon for writing on medicine, research, and clinical science.
            </p>
          </motion.div>

          {/* Articles — hidden until ready */}
          {/* <div className="space-y-12">
            {articles.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="flex items-center gap-3 text-[14px] text-black/50 dark:text-white/50 mb-3">
                  <time>{article.date}</time>
                  <span>&bull;</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-[28px] font-semibold leading-tight mb-3 group-hover:text-hematology transition-colors">
                  {article.title}
                </h2>
                <p className="text-[17px] leading-relaxed text-black/80 dark:text-white/80 mb-4">
                  {article.excerpt}
                </p>
                <span className="text-[14px] text-hematology font-medium">
                  Read article <span className="ml-1 group-hover:translate-x-1 inline-block transition-transform">&gt;</span>
                </span>
              </motion.article>
            ))}
          </div> */}

        </div>
      </section>
    </>
  );
}