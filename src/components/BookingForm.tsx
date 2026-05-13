import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, Scissors, Sparkles, Check, ArrowLeft } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import { services } from '@/data/services';

interface BookingFormProps {
  onSuccess?: () => void;
}

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM',
];

export default function BookingForm({ onSuccess }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const selectedService = services.find(s => s.id === formData.service);

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceedStep1 = formData.service;
  const canProceedStep2 = formData.date && formData.time;
  const canProceedStep3 = formData.name && formData.email && formData.phone;
  const canSubmit = canProceedStep1 && canProceedStep2 && canProceedStep3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    // Ready for Supabase integration:
    // const { data, error } = await supabase
    //   .from(SUPABASE_TABLES.BOOKINGS)
    //   .insert([{ ...formData, created_at: new Date().toISOString() }]);

    setShowSuccess(true);
    onSuccess?.();
  };

  const getTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const max = new Date();
    max.setMonth(max.getMonth() + 3);
    return max.toISOString().split('T')[0];
  };

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand-200"
        >
          <Check size={36} className="text-white" />
        </motion.div>
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-3">
          Booking Confirmed!
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
          Thank you for choosing Foxy Aesthetics. You'll receive a confirmation email shortly with all the details.
        </p>
        <p className="text-sm text-brand-500 dark:text-brand-400 font-medium mb-8">
          We can't wait to pamper you! ✨
        </p>
        <AnimatedButton
          variant="outline"
          onClick={() => {
            setShowSuccess(false);
            setStep(1);
            setFormData({ service: '', date: '', time: '', name: '', email: '', phone: '', notes: '' });
          }}
        >
          Book Another Appointment
        </AnimatedButton>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Step indicators */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <motion.div
              animate={{
                scale: step === s ? 1.1 : 1,
                backgroundColor: step >= s ? 'var(--color-brand-500)' : 'transparent',
              }}
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors ${
                step >= s
                  ? 'border-brand-500 text-white bg-brand-500'
                  : 'border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-500'
              }`}
            >
              {step > s ? <Check size={16} /> : s}
            </motion.div>
            {s < 3 && (
              <div className={`w-8 h-0.5 rounded transition-colors ${step > s ? 'bg-brand-500' : 'bg-gray-300 dark:bg-gray-700'}`} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Scissors size={20} className="text-brand-500" />
                Select Your Service
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => updateField('service', service.id)}
                    className={`text-left p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                      formData.service === service.id
                        ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20 shadow-lg shadow-brand-100 dark:shadow-brand-900/20'
                        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-brand-300 dark:hover:border-brand-600'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <span className="font-semibold text-gray-900 dark:text-white text-sm">{service.name}</span>
                      <span className="text-sm font-bold text-brand-600 dark:text-brand-400">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1"><Clock size={12} /> {service.duration}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
              <div className="flex justify-end">
                <AnimatedButton
                  variant="primary"
                  onClick={() => setStep(2)}
                  disabled={!canProceedStep1}
                  type="button"
                >
                  Continue
                </AnimatedButton>
              </div>
            </motion.div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Calendar size={20} className="text-brand-500" />
                Choose Date & Time
              </h3>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date</label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => updateField('date', e.target.value)}
                    min={getTomorrow()}
                    max={getMaxDate()}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all"
                  />
                </div>
              </div>

              {formData.date && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Available Times</label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {timeSlots.map((slot) => (
                      <motion.button
                        key={slot}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => updateField('time', slot)}
                        className={`py-2.5 px-3 rounded-xl text-sm font-medium border transition-all cursor-pointer ${
                          formData.time === slot
                            ? 'border-brand-500 bg-brand-500 text-white shadow-lg shadow-brand-200'
                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:border-brand-300'
                        }`}
                      >
                        {slot}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div className="flex justify-between mt-8">
                <AnimatedButton variant="ghost" onClick={() => setStep(1)} type="button" icon={ArrowLeft}>
                  Back
                </AnimatedButton>
                <AnimatedButton
                  variant="primary"
                  onClick={() => setStep(3)}
                  disabled={!canProceedStep2}
                  type="button"
                >
                  Continue
                </AnimatedButton>
              </div>
            </motion.div>
          )}

          {/* Step 3: Details & Summary */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8"
            >
              {/* Form Fields */}
              <div className="lg:col-span-3 space-y-4">
                <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <User size={20} className="text-brand-500" />
                  Your Details
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Full Name</label>
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="Your full name"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="your@email.com"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Phone</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Special Requests (optional)</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => updateField('notes', e.target.value)}
                    placeholder="Any specific designs, allergies, or requests..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <AnimatedButton variant="ghost" onClick={() => setStep(2)} type="button" icon={ArrowLeft}>
                    Back
                  </AnimatedButton>
                </div>
              </div>

              {/* Summary Card */}
              <div className="lg:col-span-2">
                <div className="sticky top-28 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-lg">
                  <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Sparkles size={18} className="text-brand-500" />
                    Booking Summary
                  </h3>

                  {selectedService && (
                    <div className="space-y-3 pb-4 border-b border-gray-100 dark:border-gray-800 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Service</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedService.name}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Duration</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedService.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Date</span>
                        <span className="font-medium text-gray-900 dark:text-white">{formData.date || '—'}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Time</span>
                        <span className="font-medium text-gray-900 dark:text-white">{formData.time || '—'}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-base font-semibold text-gray-900 dark:text-white">Total</span>
                    <span className="text-2xl font-serif font-bold text-brand-600 dark:text-brand-400">
                      {selectedService?.price || '—'}
                    </span>
                  </div>

                  <div className="mt-5">
                    <AnimatedButton
                      variant="primary"
                      type="submit"
                      className="w-full"
                      disabled={!canSubmit}
                    >
                      Confirm Booking
                    </AnimatedButton>
                    <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-3">
                      You'll receive a confirmation via email & SMS
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
