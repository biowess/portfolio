import { useMemo, useState } from 'react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import clinicometrixThumb from '../assets/clinicometrix.webp';
import lveThumb from '../assets/lve.webp';

type ProjectStatus = 'Active' | 'Planning' | 'Archived';
type ProjectCTA = 'repo' | 'contact' | 'none';

type Project = {
  id: number;
  title: string;
  description: string;
  status: ProjectStatus;
  year?: string;
  tags: string[];
  link?: string | null;
  thumbnail?: string | null;
  cta?: ProjectCTA;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Clinicometrix',
    description:
      'An educational clinical scoring toolkit featuring a professional command-line interface. Calculates 10 essential medical scores (including SOFA, GCS, and NEWS2) with built-in validation logic and clinical references.',
    status: 'Active',
    year: '2026',
    tags: ['Python', 'Rich', 'CLI'],
    link: 'https://github.com/biowess/clinicometrix',
    thumbnail: clinicometrixThumb,
    cta: 'repo',
  },
  {
    id: 2,
    title: 'Lab Values Explorer',
    description:
      'A modern interactive reference tool for interpreting laboratory values. Designed to help medical students and clinicians quickly understand clinical lab results with structured explanations.',
    status: 'Active',
    year: '2026',
    tags: ['React', 'Medical Education'],
    link: 'https://github.com/biowess/lab-values-explorer',
    thumbnail: lveThumb,
    cta: 'repo',
  },
  {
    id: 3,
    title: 'BioPipeline Toolkit',
    description:
      'A collection of reusable Nextflow scripts for common bioinformatics tasks in clinical hematology.',
    status: 'Planning',
    tags: ['Nextflow', 'Bioinformatics'],
    cta: 'contact',
  },
  {
    id: 4,
    title: 'MDS-Viz',
    description:
      'Interactive D3.js visualization tool for mapping clonal evolution in myelodysplastic syndromes.',
    status: 'Planning',
    tags: ['D3.js', 'Visualization'],
    cta: 'contact',
  },
  {
    id: 5,
    title: 'BMI Calculator',
    description: 'Simple Python BMI Calculator for medical students.',
    status: 'Archived',
    year: '2024',
    tags: ['Python'],
    cta: 'none',
  },
];

const filters: ProjectStatus | 'All' = 'All';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectStatus | 'All'>('All');

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.status === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <SEO title="Projects" description="Ongoing clinical and technical projects." />

      <section className="bg-apple-light dark:bg-apple-dark text-apple-textLight dark:text-apple-textDark section-padding min-h-screen">
        <div className="max-w-[980px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="hero-heading mb-6">Projects</h1>
            <p className="text-[21px] font-light text-black/70 dark:text-white/70 max-w-2xl">
              Technical projects and open-source contributions at the intersection of medicine and computer science.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 mb-10">
            {(['All', 'Active', 'Planning', 'Archived'] as const).map((filter) => {
              const selected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm transition-all border ${
                    selected
                      ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white'
                      : 'bg-transparent border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid md:grid-cols-2 gap-8"
            >
              {visibleProjects.map((project, i) => {
                const isPlanning = project.status === 'Planning';
                const isArchived = project.status === 'Archived';

                return (
                  <motion.article
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    whileHover={{ y: -6 }}
                    className={`group overflow-hidden rounded-[18px] p-0 shadow-apple flex flex-col h-full border ${
                      isPlanning
                        ? 'border-dashed border-black/15 dark:border-white/15 bg-transparent'
                        : 'border-black/5 dark:border-white/5 bg-white dark:bg-apple-surfaceDark1'
                    }`}
                  >
                    {project.thumbnail ? (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                      </div>
                    ) : (
                      <div
                        className={`aspect-[16/9] flex items-center justify-center ${
                          isPlanning
                            ? 'bg-black/3 dark:bg-white/5'
                            : 'bg-black/5 dark:bg-white/5'
                        }`}
                      >
                        <span className="text-sm uppercase tracking-[0.2em] opacity-50">
                          {project.status}
                        </span>
                      </div>
                    )}

                    <div className="p-8 flex flex-col h-full">
                      <div className="flex justify-between items-start gap-4 mb-4">
                        <div>
                          <h2 className="text-[24px] font-semibold leading-tight pr-2">
                            {project.title}
                          </h2>
                          {project.year && (
                            <span className="text-xs opacity-60">{project.year}</span>
                          )}
                        </div>

                        <span className="text-[12px] font-medium px-3 py-1 bg-hematology/10 text-hematology rounded-full whitespace-nowrap">
                          {project.status}
                        </span>
                      </div>

                      <p className="text-[17px] text-black/70 dark:text-white/70 mb-6 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[12px] text-black/50 dark:text-white/50 border border-black/10 dark:border-white/10 rounded-[4px] px-2 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.cta === 'repo' && project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[14px] text-hematology hover:underline mt-auto inline-block w-fit"
                        >
                          View Repository <span className="ml-1">&gt;</span>
                        </a>
                      ) : project.cta === 'contact' ? (
                        <Link
                          to="/contact"
                          className="text-[14px] text-hematology hover:underline mt-auto inline-block w-fit"
                        >
                          Inquire about collaboration <span className="ml-1">&gt;</span>
                        </Link>
                      ) : null}
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}