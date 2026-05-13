import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Sparkles, Star, Shield, Heart, Clock, Award, ArrowRight
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import AnimatedButton from '@/components/AnimatedButton';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';

const featuredStyles = [
  {
    title: 'Classic Elegance',
    image: '/images/lash-portrait.jpg',
    tag: 'Natural',
  },
  {
    title: 'Hybrid Glam',
    image: '/images/hero-lash.jpg',
    tag: 'Popular',
  },
  {
    title: 'Volume Drama',
    image: 'https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg?w=800&h=1000&fit=crop&auto=format',
    tag: 'Trending',
  },
  {
    title: 'Wispy Perfection',
    image: '/images/lash-portrait.jpg',
    tag: 'Signature',
  },
];

const reasons = [
  {
    icon: Shield,
    title: 'Premium Products',
    description: 'We use only top-tier, medical-grade adhesives and cruelty-free lashes from leading beauty brands for flawless, long-lasting results.',
  },
  {
    icon: Heart,
    title: 'Personalized Design',
    description: 'Every lash set is customized to your eye shape, lifestyle, and beauty goals — never a one-size-fits-all approach.',
  },
  {
    icon: Clock,
    title: 'Efficient Luxury',
    description: 'Enjoy a relaxing, thorough beauty experience that respects your time. Impeccably precise, always on schedule.',
  },
  {
    icon: Award,
    title: 'Certified Artists',
    description: 'Our lash artists are certified, trend-trained, and passionate about creating beautiful, safe lash transformations.',
  },
];

const stats = [
  { value: '3,000+', label: 'Happy Clients' },
  { value: '5★', label: 'Google Rating' },
  { value: '8+', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction' },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ─── HERO SECTION ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-nude-50 via-brand-50 to-white dark:from-gray-950 dark:via-brand-950 dark:to-gray-950"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-200/30 to-brand-400/10 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [5, 0, 5] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-nude-200/30 to-brand-300/10 blur-3xl"
          />
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-brand-300/40 blur-sm"
          />
          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-nude-300/40 blur-sm"
          />
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/3 right-10 w-5 h-5 rounded-full bg-brand-200/30 blur-sm"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Column */}
            <motion.div style={{ y: heroY, opacity: heroOpacity }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-6 border border-brand-200 dark:border-brand-800">
                  <Sparkles size={14} />
                  Premium Lash Studio
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white mb-6"
              >
                Luxury Lashes.
                <br />
                <span className="gradient-text">Effortless Beauty.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-lg"
              >
                Foxy Aesthetics creates flawless lash experiences designed to enhance confidence, elegance, and your natural beauty.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <AnimatedButton href="/booking" variant="primary" size="lg" icon={Sparkles}>
                  Book Appointment
                </AnimatedButton>
                <AnimatedButton href="/gallery" variant="outline" size="lg">
                  View Gallery
                </AnimatedButton>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap gap-6 md:gap-10 mt-12 pt-10 border-t border-gray-200 dark:border-gray-800"
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-200/50 dark:shadow-brand-900/30 aspect-[3/4]"
                >
                  <img
                    src="/images/hero-lash.jpg"
                    alt="Luxury lash extension session at Foxy Aesthetics beauty studio"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </motion.div>

                {/* Floating card 1 */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -top-6 -left-6 z-20 glass rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center">
                      <Star size={18} className="text-white fill-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">5.0 Rating</p>
                      <p className="text-xs text-gray-500">300+ Reviews</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating card 2 */}
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -right-4 z-20 glass rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                      <Sparkles size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">Premium</p>
                      <p className="text-xs text-gray-500">Lash Products Only</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-brand-300 dark:border-brand-600 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-brand-500 dark:bg-brand-400"
            />
          </div>
        </motion.div>
      </section>

      {/* ─── FEATURED LASH STYLES ─── */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Trending Now"
            title="Featured Lash Styles"
            subtitle="Discover our most-requested looks — from natural elegance to full-volume glamour."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
            {featuredStyles.map((style, i) => (
              <ScrollReveal key={style.title} delay={i * 0.12}>
                <div className="group relative rounded-3xl overflow-hidden aspect-[3/4] shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer">
                  <img
                    src={style.image}
                    alt={style.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white mb-2">
                      {style.tag}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-white">{style.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <AnimatedButton href="/gallery" variant="secondary" icon={ArrowRight} iconPosition="right">
              Explore Full Gallery
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 md:py-28 bg-nude-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Foxy"
            title="Why Choose Foxy Aesthetics"
            subtitle="Experience the difference that passion, precision, and premium care can make for your lashes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
            {reasons.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 0.1}>
                <div className="group text-center p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900/50 dark:to-brand-800/30 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon size={26} className="text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Signature Lash Experiences"
            subtitle="From classic natural sets to dramatic mega volume — find your perfect lash look."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
            {services.slice(0, 4).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <AnimatedButton href="/services" variant="secondary" icon={ArrowRight} iconPosition="right">
              View All Services
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-50/50 via-white to-nude-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Testimonials"
            title="Loved by Our Clients"
            subtitle="Hear from the beautiful souls who trust us with their lash transformations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── BEFORE & AFTER PREVIEW ─── */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Transformations"
            title="Before & After Magic"
            subtitle="See the stunning transformations our lash artists create every day."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {[
              { before: '/images/lash-portrait.jpg', after: '/images/hero-lash.jpg', title: 'Classic Transformation' },
              { before: '/images/lash-studio.jpg', after: '/images/lash-portrait.jpg', title: 'Volume Transformation' },
              { before: '/images/hero-lash.jpg', after: '/images/lash-studio.jpg', title: 'Hybrid Transformation' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.12}>
                <div className="space-y-3">
                  <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">{item.title}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                      <img src={item.before} alt="Before" loading="lazy" className="w-full h-full object-cover" />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/40 backdrop-blur-sm text-white">Before</span>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
                      <img src={item.after} alt="After" loading="lazy" className="w-full h-full object-cover" />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-brand-500/80 backdrop-blur-sm text-white">After</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSTAGRAM PREVIEW ─── */}
      <section className="py-20 md:py-28 bg-nude-50/30 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="@FoxyAesthetics"
            title="Follow Our Journey"
            subtitle="Get daily beauty inspiration from our latest lash creations on Instagram."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12 md:mt-16">
            {[
              '/images/hero-lash.jpg',
              '/images/lash-portrait.jpg',
              '/images/lash-studio.jpg',
              '/images/hero-lash.jpg',
              '/images/lash-portrait.jpg',
              '/images/lash-studio.jpg',
            ].map((src, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={src}
                    alt={`Foxy Aesthetics Instagram post ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Sparkles size={24} className="text-white" />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.15, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.3, 1, 1.3], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold tracking-widest uppercase text-white mb-6">
              Ready to Glow?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Crafting Confidence,
              <br />
              One Lash Set at a Time.
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
              Book your appointment today and experience the luxury your lashes deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton
                href="/booking"
                variant="secondary"
                size="lg"
                icon={Sparkles}
              >
                Book Your Appointment
              </AnimatedButton>
              <AnimatedButton
                href="/contact"
                variant="ghost"
                size="lg"
                className="!text-white !border-white/30 hover:!bg-white/10"
              >
                Get in Touch
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
