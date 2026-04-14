import { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const imageModules = import.meta.glob('../assets/photos/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const photos = Object.entries(imageModules).map(([path, url], index) => {
  const fileName = path.split('/').pop()?.replace('.webp', '') ?? '';

  const match = fileName.match(/^([a-zA-Z]+)/);
  const categoryRaw = match?.[1] ?? 'Uncategorized';

  return {
    id: index + 1,
    url,
    title: fileName,
    category: categoryRaw.charAt(0).toUpperCase() + categoryRaw.slice(1),
  };
});

const categories = ['All', ...new Set(photos.map((photo) => photo.category))];

type Photo = (typeof photos)[number];

export function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPhotos =
    activeCategory === 'All'
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  return (
    <>
      <SEO
        title="Photography"
        description="Visual documentation of research and clinical environments."
      />

      <section className="bg-apple-dark text-apple-textDark section-padding min-h-screen">
        <div className="max-w-[1200px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="hero-heading mb-6">Photography</h1>
            <p className="text-[21px] font-light text-white/70 max-w-2xl mx-auto mb-10">
              Documenting the intersection of science, medicine, and human resilience.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-white text-black border-white'
                      : 'border-white/20 text-white/70 hover:text-white hover:border-white/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-square cursor-pointer overflow-hidden rounded-[8px] bg-apple-surfaceDark1"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-5xl w-full max-h-[85vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain rounded-[4px]"
                referrerPolicy="no-referrer"
              />
              <p className="text-center text-white/70 mt-4 text-[14px]">
                {selectedPhoto.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}