import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import sunset2 from "../assets/photos/sunset3.webp";

export function Home() {
  return (
    <>
      <SEO title="Home" description="Biowess' Portfolio" />
      
      {/* Hero Section - Dark */}
      <section className="bg-apple-dark text-apple-textDark min-h-[80vh] flex items-center section-padding">
        <div className="max-w-[980px] mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="hero-heading mb-4">
              Mohammed W. Hammami<br />
              <span className="text-hematology-400">Medical Student</span>
            </h1>
            <p className="text-[21px] md:text-[24px] font-light text-white/80 max-w-2xl mx-auto mb-10">
                Exploring the intersection of medicine and computer science to build intelligent healthcare systems.            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/research" className="pill-btn pill-btn-primary">
                Explore Research
              </Link>
              <Link to="/about" className="pill-btn pill-btn-outline">
                About the Author <span className="ml-1">&gt;</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work - Light */}
      <section className="bg-apple-light text-apple-textLight section-padding">
        <div className="max-w-[980px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading mb-4">Recent Research Papers</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Card 1 */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="bg-white dark:bg-apple-surfaceDark1 rounded-[12px] p-8 shadow-apple"
  >
    <div className="text-[12px] font-semibold text-hematology mb-3 uppercase tracking-wider">
      Preprint &bull; 2026
    </div>
    <h3 className="text-[21px] font-semibold leading-tight mb-3 dark:text-white">
      Ictère néonatal précoce d'origine hémolytique par incompatibilité ABO
    </h3>
    <p className="text-[14px] text-black/70 dark:text-white/70 mb-6 line-clamp-3">
      Analyse d'un cas clinique d'ictère précoce chez un nouveau-né à terme, explorant la démarche diagnostique face à une hyperbilirubinémie non conjuguée.
    </p>
    <Link to="/research/case-1" className="text-[14px] text-hematology hover:underline">
      Read full paper <span className="ml-1">&gt;</span>
    </Link>
  </motion.div>

  {/* Card 2 */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="bg-white dark:bg-apple-surfaceDark1 rounded-[12px] p-8 shadow-apple"
  >
    <div className="text-[12px] font-semibold text-hematology mb-3 uppercase tracking-wider">
      Preprint, unreleased &bull; 2026
    </div>
    <h3 className="text-[21px] font-semibold leading-tight mb-3 dark:text-white">
      Sepsis néonatal précoce à début respiratoire chez un nouveau-né à terme : à propos d'un cas
    </h3>
    <p className="text-[14px] text-black/70 dark:text-white/70 mb-6 line-clamp-3">
      Le sepsis néonatal précoce demeure une urgence diagnostique et thérapeutique en néonatologie, en raison de sa présentation initialement peu spécifique et du risque d'évolution rapide vers la défaillance multiviscérale. Nous rapportons le cas d'un nouveau-né à terme, admis dans les premières 24 heures de vie pour détresse respiratoire modérée, mauvaise adaptation alimentaire et instabilité thermique.
    </p>
    <Link to="/research/case-2" className="text-[14px] text-hematology hover:underline">
      Read full paper <span className="ml-1">&gt;</span>
    </Link>
  </motion.div>


</div>
        </div>
      </section>

      {/* Photography Teaser - Dark */}
      <section className="bg-apple-dark text-apple-textDark section-padding">
        <div className="max-w-[980px] mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading mb-4">Through the Lens</h2>
            <p className="text-[17px] text-white/70 max-w-2xl mx-auto mb-10">
                  A visual exploration of diverse landscapes and artistic perspectives.
            </p>
            
<div className="aspect-video bg-apple-surfaceDark1 rounded-[12px] overflow-hidden mb-10 relative">
  <img
    src={sunset2}
    alt="Sunset"
    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
  />
</div>

            <Link to="/photography" className="pill-btn pill-btn-outline">
              View Gallery <span className="ml-1">&gt;</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
