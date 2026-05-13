import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, MessageCircle, Camera, Send } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import AnimatedButton from '@/components/AnimatedButton';
import ScrollReveal from '@/components/ScrollReveal';
import { useToast } from '@/hooks/useToast';
import ToastContainer from '@/components/Toast';

const businessHours = [
  { day: 'Monday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Thursday', hours: '9:00 AM – 7:00 PM' },
  { day: 'Friday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function Contact() {
  const { toasts, addToast, removeToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ready for Supabase:
    // const { data } = await supabase.from(SUPABASE_TABLES.CONTACTS).insert([formData]);
    addToast('Message Sent!', 'We\'ll get back to you within 24 hours.', 'success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <ToastContainer toasts={toasts} removeToast={removeToast} />

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
            label="Get in Touch"
            title="Let's Talk Beauty"
            subtitle="Have questions? Ready to book your lash transformation? We'd love to hear from you."
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => updateField('subject', e.target.value)}
                      required
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      required
                      rows={5}
                      placeholder="Tell us about your beauty goals..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all resize-none"
                    />
                  </div>
                  <AnimatedButton type="submit" variant="primary" icon={Send}>
                    Send Message
                  </AnimatedButton>
                </form>
              </ScrollReveal>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              <ScrollReveal delay={0.1}>
                <div className="p-6 rounded-2xl bg-nude-50/50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <h4 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-5">
                    Contact Info
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-brand-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Visit Us</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          123 Beauty Lane, Suite 200<br />Los Angeles, CA 90028
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="text-brand-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                        <a href="mailto:hello@foxyaesthetics.com" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-500 transition-colors">
                          hello@foxyaesthetics.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={18} className="text-brand-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                        <a href="tel:+15551234567" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-500 transition-colors">
                          (555) 123-4567
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-6 rounded-2xl bg-nude-50/50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <h4 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                    <Clock size={18} className="text-brand-500" />
                    Business Hours
                  </h4>
                  <div className="space-y-2.5">
                    {businessHours.map((bh) => (
                      <div key={bh.day} className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">{bh.day}</span>
                        <span className={`${bh.hours === 'Closed' ? 'text-red-400' : 'text-gray-500 dark:text-gray-400'}`}>
                          {bh.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Social CTA */}
              <ScrollReveal delay={0.3}>
                <div className="space-y-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg transition-shadow"
                  >
                    <Camera size={20} />
                    <span className="font-medium text-sm">Follow on Instagram</span>
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg transition-shadow"
                  >
                    <MessageCircle size={20} />
                    <span className="font-medium text-sm">Chat on WhatsApp</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200 dark:bg-gray-800 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <MapPin size={40} className="text-brand-500 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 font-medium">Map Integration</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
              123 Beauty Lane, Los Angeles, CA 90028
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
