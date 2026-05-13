import { motion } from 'framer-motion';
import { Info, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import BookingForm from '@/components/BookingForm';
import { useToast } from '@/hooks/useToast';
import ToastContainer from '@/components/Toast';

export default function Booking() {
  const { toasts, addToast, removeToast } = useToast();

  const handleBookingSuccess = () => {
    addToast(
      'Booking Confirmed!',
      'Your lash appointment has been scheduled. Check your email for details and prep instructions.',
      'success'
    );
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
            label="Book Now"
            title="Reserve Your Lash Experience"
            subtitle="Choose your lash service, pick a time, and let us take care of the rest. Your dream lashes await."
          />
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl p-6 md:p-10">
            <BookingForm onSuccess={handleBookingSuccess} />
          </div>
        </div>
      </section>

      {/* Info Grid: Prep, Aftercare, Policy */}
      <section className="pb-16 md:pb-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Prep Notes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-nude-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center mb-4">
                <Info size={18} className="text-brand-600 dark:text-brand-400" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Before Your Appointment
              </h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>• Arrive with clean, makeup-free lashes</li>
                <li>• Remove contact lenses before your session</li>
                <li>• Avoid caffeine 2 hours before (reduces eye flutter)</li>
                <li>• Skip waterproof mascara for 48 hours prior</li>
                <li>• Plan to relax — appointments are 1–2.5 hours</li>
              </ul>
            </motion.div>

            {/* Aftercare */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-nude-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center mb-4">
                <ShieldCheck size={18} className="text-brand-600 dark:text-brand-400" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Aftercare Essentials
              </h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>• Keep lashes dry for 24–48 hours</li>
                <li>• Brush gently with a spoolie each morning</li>
                <li>• Use only oil-free products near eyes</li>
                <li>• Avoid steam, saunas & hot yoga for 48 hours</li>
                <li>• Sleep on your back when possible</li>
              </ul>
            </motion.div>

            {/* Cancellation Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-nude-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center mb-4">
                <Info size={18} className="text-brand-600 dark:text-brand-400" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Cancellation Policy
              </h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>• Free rescheduling up to 24 hours before</li>
                <li>• 50% fee for cancellations within 24 hours</li>
                <li>• Full charge for no-shows</li>
                <li>• Late arrivals may reduce service time</li>
                <li>• Fill appointments must be within 3 weeks</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
