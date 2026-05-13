import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import AnimatedButton from '@/components/AnimatedButton';
import { services, serviceCategories } from '@/data/services';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-nude-50 via-brand-50 to-white dark:from-gray-950 dark:via-brand-950 dark:to-gray-950">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-brand-200/20 blur-3xl"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Signature Lash Experiences"
            subtitle="Explore our full range of luxury lash and brow services, each crafted with precision, artistry, and premium products."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16 overflow-x-auto pb-2">
            {serviceCategories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-200'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredServices.map((service, i) => (
                <ServiceCard key={service.id} service={service} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 dark:text-gray-500">No services found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lash Care Tips */}
      <section className="py-16 md:py-24 bg-nude-50/50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Lash Care"
            title="Maintaining Your Lashes"
            subtitle="Tips to keep your extensions looking flawless between appointments."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Keep Them Dry', desc: 'Avoid water, steam, and saunas for the first 24–48 hours after application to allow the adhesive to fully cure.' },
              { title: 'Brush Daily', desc: 'Use a clean spoolie brush to gently comb through your lashes each morning to maintain their shape and fluffiness.' },
              { title: 'Oil-Free Only', desc: 'Use only oil-free makeup removers and cleansers near your eyes. Oil breaks down lash adhesive over time.' },
            ].map((tip, i) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center mb-4">
                  <Sparkles size={18} className="text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.15, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-white/10 blur-3xl"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold tracking-widest uppercase text-white mb-4">
              Not Sure Which Set?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Find Your Perfect Lash Look
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Book a consultation and we'll help you choose the ideal lash style for your eye shape and lifestyle.
            </p>
            <AnimatedButton
              href="/booking"
              variant="secondary"
              size="lg"
              icon={Sparkles}
            >
              Book Your Appointment
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
