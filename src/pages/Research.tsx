import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Download, FileText, Lock, Quote } from 'lucide-react';

interface Publication {
  id: string;
  title: string;
  category: string;
  year: string;
  abstract: string;
  pdfUrl?: string;
  doi?: string;
  status: string;
  lang: string;
  locked?: boolean;
}

const publications: Publication[] = [
  {
    id: "sepsis-neo",
    title: "Sepsis néonatal précoce à début respiratoire chez un nouveau-né à terme : à propos d'un cas",
    category: "Néonatologie",
    year: "2026",
    abstract: "Le sepsis néonatal précoce demeure une urgence diagnostique et thérapeutique en néonatologie, en raison de sa présentation initialement peu spécifique et du risque d'évolution rapide vers la défaillance multiviscérale. Nous rapportons le cas d'un nouveau-né à terme, admis dans les premières 24 heures de vie pour détresse respiratoire modérée, mauvaise adaptation alimentaire et instabilité thermique.",
    status: "Unreleased Preprint",
    lang: "FR",
    locked: true
  },
  {
    id: "ictere-neo",
    title: "Ictère néonatal précoce d'origine hémolytique par incompatibilité ABO : à propos d'un cas simulé et discussion diagnostique",
    category: "Néonatologie",
    year: "2026",
    abstract: "Analyse d'un cas clinique d'ictère précoce chez un nouveau-né à terme, explorant la démarche diagnostique face à une hyperbilirubinémie non conjuguée. L'étude souligne l'importance du test de Coombs et de la cinétique biologique pour différencier l'ictère physiologique d'une hémolyse immunologique par incompatibilité ABO.",
    pdfUrl: "https://doi.org/10.13140/RG.2.2.14446.78408",
    doi: "10.13140/RG.2.2.14446.78408",
    status: "Preprint",
    lang: "FR",
    locked: false
  }
];

const workInProgress = [
  {
    id: "wip-1",
    title: "Bioinformatics Pipelines for Clinical Labs",
    status: "Draft",
    description: "A guide to implementing reproducible bioinformatics workflows in resource-constrained clinical settings."
  },
  {
    id: "wip-2",
    title: "Cybersecurity Vulnerabilities in IoT Medical Devices",
    status: "Data Collection",
    description: "Empirical analysis of common security flaws in connected medical hardware used in hematology labs."
  }
];

export function Research() {
  return (
    <>
      <SEO title="Research Archive" description="A collection of my academic work, preprints, and ongoing investigations." />
      
      <section className="bg-apple-light dark:bg-apple-dark text-apple-textLight dark:text-apple-textDark section-padding min-h-screen">
        <div className="max-w-[800px] mx-auto w-full">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 mt-20"
          >
            <h1 className="hero-heading mb-6">Research Archive</h1>
            <p className="text-[21px] font-light text-black/70 dark:text-white/70">
              A collection of my academic work, preprints, and ongoing investigations in computational medicine and pediatrics.
            </p>
          </motion.div>

          {/* Published & Preprints */}
          <div className="space-y-12 mb-20">
            <h2 className="text-[24px] font-semibold mb-8 border-b border-black/10 dark:border-white/10 pb-4">Selected Research</h2>
            {publications.map((pub, i) => (
              <motion.div 
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-black/10 dark:border-white/10 rounded-xl p-8 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex flex-wrap items-center gap-3 text-[12px] font-medium mb-4">
                  <span className="px-2 py-1 bg-hematology/10 text-hematology rounded-md uppercase tracking-wider">{pub.status}</span>
                  <span className="px-2 py-1 bg-black/5 dark:bg-white/10 rounded-md">{pub.lang}</span>
                  <span className="text-black/50 dark:text-white/50">{pub.year} &bull; {pub.category}</span>
                </div>
                
                <h3 className="text-[24px] font-semibold leading-tight mb-4">
                  {pub.title}
                </h3>
                
                <p className="text-[16px] leading-relaxed text-black/70 dark:text-white/70 mb-6">
                  {pub.abstract}
                </p>
                
                <div className="flex items-center gap-4">
                  {pub.locked ? (
                    <button disabled className="inline-flex items-center gap-2 text-[14px] font-medium text-black/40 dark:text-white/40 cursor-not-allowed bg-black/5 dark:bg-white/5 px-4 py-2 rounded-lg">
                      <Lock size={16} />
                      Coming Soon
                    </button>
                  ) : (
                    <>
                      <a 
                        href={pub.pdfUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-white bg-hematology hover:bg-hematology-700 px-4 py-2 rounded-lg transition-colors"
                      >
                        <FileText size={16} />
                        View PDF
                      </a>
                      {pub.doi && (
                        <span className="text-[12px] text-black/40 dark:text-white/40 font-mono">
                          DOI: {pub.doi}
                        </span>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Work in Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[24px] font-semibold mb-8 border-b border-black/10 dark:border-white/10 pb-4">Work in Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workInProgress.map((wip) => (
                <div key={wip.id} className="border-2 border-dashed border-black/20 dark:border-white/20 rounded-xl p-6">
                  <span className="inline-block px-2 py-1 text-[12px] bg-black/5 dark:bg-white/10 rounded-md mb-4">
                    {wip.status}
                  </span>
                  <h3 className="text-[18px] font-medium mb-2">{wip.title}</h3>
                  <p className="text-[14px] text-black/60 dark:text-white/60">{wip.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="text-center mt-20 mb-10">
             <p className="text-black/40 dark:text-white/40 italic text-[14px]">More research coming soon.</p>
          </div>

        </div>
      </section>
    </>
  );
}