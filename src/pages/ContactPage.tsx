import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Plus,
  Minus,
  Send,
  HelpCircle,
} from "lucide-react";

import { siteConfig } from "../data/siteConfig";
import PageHeroBanner from "../components/ui/PageHeroBanner/PageHeroBanner";
import SectionHeader from "../components/ui/SectionHeader/SectionHeader";
import Button from "../components/ui/Button/Button";

interface ContactValues {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  message: string;
  budgetRange: number;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    defaultValues: {
      budgetRange: 50, // Million PKR
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [budgetVal, setBudgetVal] = useState(5); // Millions

  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);

  const contactFaqs = [
    {
      q: "Where is your primary design laboratory located?",
      a: "Our master showroom is located at Plot 45-C, DHA Phase 6, Karachi, Pakistan. Visits are organized strictly by appointment to ensure our leading architects are fully focused on your discussion.",
    },
    {
      q: "What is the baseline budget for residential designs?",
      a: "We customize environments of all scales, but our premium turnkey design and full fabrication packages generally begin at 4.5 Million PKR.",
    },
    {
      q: "Do you offer remote services outside Karachi?",
      a: "Yes! We coordinate remotely across Lahore, Islamabad, and into the GCC region. Our technical site managers travel to supervise masons physically as required.",
    },
  ];

  const onSubmitForm = async (data: ContactValues) => {
    // Artificial mock delay
    await new Promise((res) => setTimeout(res, 1200));
    setIsSubmitted(true);
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <PageHeroBanner
        title="Schedule Consultation"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ name: "Contact" }]}
      />

      {/* S9.2 — Contact Info Column Icons */}
      <section className="bg-gray-50 border-b border-gray-100 dark:bg-[#1A1A1A] dark:border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            
            {/* Address */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div className="font-sans text-xs">
                <h4 className="font-bold text-current uppercase tracking-wider mb-1.5">Studio Location</h4>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{siteConfig.contact.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                <Phone className="w-4.5 h-4.5" />
              </div>
              <div className="font-sans text-xs">
                <h4 className="font-bold text-current uppercase tracking-wider mb-1.5 font-bold">Contact Hotline</h4>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-0.5">{siteConfig.contact.phoneReadable}</p>
                <p className="text-gray-400 dark:text-gray-500 text-[10px]">{siteConfig.contact.phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <div className="font-sans text-xs">
                <h4 className="font-bold text-current uppercase tracking-wider mb-1.5 font-bold font-semibold">Electronic Mail</h4>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-0.5">{siteConfig.contact.email}</p>
                <span className="text-[10px] text-gray-400">Response within 24 Hrs</span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                <Clock className="w-4.5 h-4.5" />
              </div>
              <div className="font-sans text-xs">
                <h4 className="font-bold text-current uppercase tracking-wider mb-1.5 font-bold">Laboratory Hours</h4>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-0.5">{siteConfig.contact.hours}</p>
                <span className="text-[10px] text-[#D4AF37] font-semibold uppercase">Appointments strictly recommended</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* S9.3 — Contact Form */}
      <section className="py-24 bg-white text-[#1A1A1A] dark:bg-[#111111] dark:text-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Form left description and maps */}
          <div className="lg:col-span-5 text-left">
            <span className="eyebrow block mb-3">Begin Your Story</span>
            <h2 className="font-display text-[26px] md:text-[34px] leading-tight font-medium mb-6">
              Let's Co-Create Your Sovereign Habitat
            </h2>
            <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Complete the consultation briefing to register your timeline preferences. Lead Designer omar and our project coordinator review drafts weekly, responding to prioritize critical builds.
            </p>

            {/* S9.4 — 3D Styled Luxury Dark Map Card Placeholder */}
            <div className="relative h-[250px] bg-[#1A1A1A] border-l-2 border-[#D4AF37] p-8 text-white shadow-md overflow-hidden group select-none">
              {/* Background abstract layout shapes */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-0.5 bg-white rotate-12" />
                <div className="absolute top-20 left-10 w-96 h-0.5 bg-white rotate-12" />
                <div className="absolute top-30 left-1 left-4 w-96 h-0.5 bg-white -rotate-45" />
                <div className="absolute top-40 left-10 w-96 h-0.5 bg-white rotate-45" />
              </div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <span className="font-sans text-[10px] text-[#D4AF37] tracking-widest uppercase font-bold block mb-1">
                    AR DESIGN LABORATORY
                  </span>
                  <h4 className="font-display text-lg font-bold">DHA Phase 6 Plot 45-C</h4>
                  <p className="font-sans text-xs text-gray-400 mt-2">
                    Karachi, Sindh, Pakistan
                  </p>
                </div>

                <div className="font-sans text-[10px] tracking-widest text-gray-500 uppercase font-semibold">
                  Coordinates: 24.8138° N, 67.0624° E
                </div>
              </div>

              {/* Decorative pin pulse */}
              <div className="absolute right-12 top-12 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
              </div>
            </div>
          </div>

          {/* Form container left */}
          <div className="lg:col-span-7 bg-gray-50 dark:bg-[#1A1A1A] p-8 md:p-12 border border-gray-100 dark:border-white/5 shadow-xl">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/15 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 text-current">Consultation Connection Established!</h3>
                <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed mb-6">
                  Thank you for submitting your brief. Arch Omar Rizwan will review your budget and parameters, connecting to align appointments within 24 hours.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Draft New Consultation
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col gap-6 text-left">
                
                {/* Row name & email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="OMAR KHAN"
                      {...register("fullName", { required: true })}
                      className="w-full bg-white dark:bg-[#111111] text-current border border-current/10 px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="OMAR@DOMAIN.COM"
                      {...register("email", { required: true })}
                      className="w-full bg-white dark:bg-[#111111] text-current border border-current/10 px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Row phone & category selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-2">
                      Hotline Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      {...register("phone", { required: true })}
                      className="w-full bg-white dark:bg-[#111111] text-current border border-current/10 px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-2">
                      Design Space Category *
                    </label>
                    <select
                      {...register("category", { required: true })}
                      className="w-full bg-white dark:bg-[#111111] text-current border border-current/10 px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Residential Villa">Luxury Villa Residence</option>
                      <option value="Boutique Office">Executive Office Space</option>
                      <option value="Restaurant Suite">Premium Retail Showroom</option>
                      <option value="Bespoke Kitchen">Micro-Culinary Hub</option>
                    </select>
                  </div>
                </div>

                {/* S9.3 Budget Selector Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-sans text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                      Estimated Project Budget Limit
                    </label>
                    <span className="font-sans text-[11px] text-[#D4AF37] font-bold uppercase tracking-wider">
                      {budgetVal} Million PKR+
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={budgetVal}
                    onChange={(e) => setBudgetVal(Number(e.target.value))}
                    className="w-full h-1 bg-current/15 rounded-lg appearance-none cursor-ew-resize accent-[#D4AF37] focus:outline-none"
                  />
                  <div className="flex justify-between font-mono text-[9px] text-gray-450 mt-1">
                    <span>1 Million</span>
                    <span>25 M</span>
                    <span>50 Million PKR+</span>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-sans text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-2">
                    Tell Us About Your Space (Style preferences, scope details...)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="We plan to construct a turn-key DHA residential duplex with a modern minimalist aesthetic paired with travertine finishes..."
                    {...register("message")}
                    className="w-full bg-white dark:bg-[#111111] text-current border border-current/10 px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#D4AF37] hover:bg-[#E8C84A] text-black font-sans text-xs font-bold tracking-[0.2em] uppercase py-4 px-8 cursor-pointer flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Transmitting Brief..." : "Submit Consultation Proposal"}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* S9.5 — Consultation FAQ Accordion list */}
      <section className="py-24 bg-gray-50 dark:bg-[#1A1A1A] border-t border-gray-100 dark:border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            eyebrow="Consultation Queries"
            heading="Meetings & Planning FAQ"
            subtitle="Understand how initial assessments and design proposals are dispatched."
          />

          <div className="flex flex-col gap-1 mt-8 max-w-3xl mx-auto">
            {contactFaqs.map((faq, index) => {
              const isOpen = activeFaqIdx === index;
              return (
                <div key={index} className="border-b border-current/5 py-4 text-left">
                  <button
                    onClick={() => setActiveFaqIdx(isOpen ? null : index)}
                    className="w-full flex justify-between items-center py-2 text-current cursor-pointer hover:text-[#D4AF37] transition-colors"
                  >
                    <span className="font-display text-base font-semibold">{faq.q}</span>
                    <span className="shrink-0 ml-4">
                      {isOpen ? <Minus className="w-4.5 h-4.5 text-[#D4AF37]" /> : <Plus className="w-4.5 h-4.5 text-[#D4AF37]" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-3.5 max-w-3xl">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
