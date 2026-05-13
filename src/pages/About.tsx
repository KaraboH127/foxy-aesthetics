import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, Shield, Award } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import AnimatedButton from '@/components/AnimatedButton';

const journeySteps = [
  {
    year: '2018',
    title: 'The Beginning',
    description: 'Foxy Aesthetics was born from a passion for beauty enhancement and the confidence that comes from looking your best.',
  },
  {
    year: '2019',
    title: 'Studio Launch',
    description: 'Opened our first luxury lash studio, designed as a serene sanctuary for beauty, relaxation, and self-care.',
  },
  {
    year: '2021',
    title: 'Growing Community',
    description: 'Built a loyal community of over 2,000 clients who trust us with their lash and brow transformations.',
  },
  {
    year: '2023',
    title: 'Award Recognition',
    description: 'Recognized as one of the top lash studios in the region for artistry, safety, and client experience.',
  },
  {
    year: '2025',
    title: 'Expanding Beauty',
    description: 'Continuing to innovate with advanced techniques, premium products, and unforgettable lash experiences.',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'Every lash set is created with genuine love for the art of beauty enhancement.',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We never compromise on quality — from medical-grade adhesives to precision technique.',
  },
  {
    icon: Shield,
    title: 'Trust',
    description: 'Building lasting relationships through transparency, safety, hygiene, and exceptional care.',
  },
  {
    icon: Award,
    title: 'Artistry',
    description: 'Pushing creative boundaries to deliver stunning, customized lash transformations.',
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
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
            label="Our Story"
            title="Where Beauty Meets Artistry"
            subtitle="Foxy Aesthetics was founded on the belief that every woman deserves to feel effortlessly beautiful — with lashes that inspire confidence and turn heads."
          />
        </div>
      </section>

      {/* Owner Profile */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                  <img
                    src="/images/lash-studio.jpg"
                    alt="Foxy Aesthetics founder in luxury beauty studio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-xl"
                >
                  <p className="text-3xl font-serif font-bold text-brand-600">8+</p>
                  <p className="text-sm text-gray-500">Years of Artistry</p>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-widest uppercase mb-4">
                Meet the Artist
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
                Passion for Beauty,<br />Dedication to You
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                Hi, I'm the founder of Foxy Aesthetics. My journey into the world of lash artistry began with a simple belief — that beauty is a form of self-care, and that every woman deserves to feel confident and radiant.
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                I've dedicated my career to mastering lash techniques, combining technical precision with creative vision. Every set I design is inspired by my clients — their features, their lifestyle, their unique beauty.
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                At Foxy Aesthetics, we don't just do lashes. We craft confidence, one set at a time.
              </p>
              <AnimatedButton href="/booking" variant="primary" icon={Sparkles}>
                Book With Me
              </AnimatedButton>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-nude-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            subtitle="The principles that guide every lash set we create."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="text-center p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900/50 dark:to-brand-800/30 flex items-center justify-center mx-auto mb-5">
                    <value.icon size={26} className="text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Journey"
            title="The Foxy Story"
            subtitle="From passion project to a premier beauty destination."
          />

          <div className="mt-12 md:mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-300 via-brand-400 to-brand-500 dark:from-brand-700 dark:via-brand-600 dark:to-brand-500 md:-translate-x-px" />

            <div className="space-y-10 md:space-y-14">
              {journeySteps.map((step, i) => (
                <ScrollReveal key={step.year} delay={i * 0.1}>
                  <div className={`relative pl-12 md:pl-0 flex flex-col md:flex-row items-start gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Dot */}
                    <div className={`absolute left-2.5 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-brand-500 dark:bg-brand-400 border-4 border-white dark:border-gray-950 shadow z-10`} />

                    {/* Content */}
                    <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <span className="inline-block text-sm font-bold text-brand-500 dark:text-brand-400 mb-1">
                        {step.year}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold tracking-widest uppercase text-white mb-4">
              Join the Foxy Family
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Your Transformation?
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Experience the artistry and luxury that sets Foxy Aesthetics apart. Book your lash appointment today.
            </p>
            <AnimatedButton href="/booking" variant="secondary" size="lg" icon={Sparkles}>
              Book Appointment
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
