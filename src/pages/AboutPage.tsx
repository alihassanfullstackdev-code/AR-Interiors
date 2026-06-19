import { motion } from "motion/react";
import {
  Compass,
  Eye,
  ShieldCheck,
  Award,
  Heart,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "../data/siteConfig";

import PageHeroBanner from "../components/ui/PageHeroBanner/PageHeroBanner";
import SectionHeader from "../components/ui/SectionHeader/SectionHeader";

export default function AboutPage() {
  const milestones = [
    {
      year: "2012",
      desc: "Studio founded in Karachi, Pakistani architectural core",
    },
    {
      year: "2015",
      desc: "Sourced first grand luxury commercial showroom design in DHA",
    },
    {
      year: "2018",
      desc: "Completed our 100th turnkey residential villa layout",
    },
    {
      year: "2021",
      desc: "Inaugurated dedicated GCC division executing in Dubai and Riyadh",
    },
    {
      year: "2024",
      desc: "Commemorated 250+ luxury projects under lead designer Omar",
    },
  ];

  const values = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
      title: "Bespoke Design",
      desc: "Every cushion stitch, wood joint, and marble vein orientation customized strictly to you.",
    },
    {
      icon: <Heart className="w-5 h-5 text-[#D4AF37]" />,
      title: "Client-First Care",
      desc: "A frictionless, transparent experience featuring weekly visual progress briefings.",
    },
    {
      icon: <Compass className="w-5 h-5 text-[#D4AF37]" />,
      title: "Timeless Aesthetics",
      desc: "Avoiding flashy seasonal visual tricks. We design spaces that age with grace and integrity.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />,
      title: "Sustainable Materials",
      desc: "Specifying organic plasters, certified wood, and zero-formalin sealing resins.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Banner */}
      <PageHeroBanner
        title="About AR Interior"
        subtitle="A decade of crafting bespoke environments where architecture meets pure fine artistry"
        backgroundImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ name: "About Us" }]}
      />

      {/* S2.1 — Our Story */}
      <section className="py-24 bg-white text-[#1A1A1A] dark:bg-[#111111] dark:text-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Block - Story */}
          <div className="lg:col-span-7">
            <span className="eyebrow block mb-3">Our Core Story</span>
            <h2 className="font-display text-[28px] md:text-[38px] leading-tight font-medium mb-6">
              Born From A Passion For Timeless, Beautiful Living
            </h2>

            <p className="font-sans text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Established in 2012 inside Karachi, Pakistan, AR Interior began
              with a small, disciplined crew of artisans under Architect Omar
              Rizwan. Omar noticed that regional residential projects lacked
              spatial resolution and relied heavily on generic downlights and
              industrial builder presets.
            </p>
            <p className="font-sans text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Over the last decade, we have expanded our design practices across
              Lahore, Islamabad, and into the GCC region — completing over 250
              premium residences and boutique offices. We remain dedicated to a
              singular micro-focus: listening first. We study your psychological
              habits before selecting a single vein of marble.
            </p>

            {/* Timelines list */}
            <div className="mt-12 flex flex-col gap-6 relative">
              {/* Vertical line indicator */}
              <div className="absolute left-[34px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/10" />

              {milestones.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-[70px] shrink-0 font-display text-lg font-bold text-[#D4AF37] text-right mt-1">
                    {item.year}
                  </div>
                  <div className="w-4 h-4 rounded-full bg-white dark:bg-[#111111] border-2 border-[#D4AF37] shrink-0 mt-2 relative z-10" />
                  <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block - Founder Focus & Pull Quote */}
          <div className="lg:col-span-5 relative">
            <div className="border-l-[4px] border-b-[4px] border-[#D4AF37]/35 pl-4 pb-4">
              <img
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=500&q=80"
                alt="Founder Architect Omar Rizwan staging design elements"
                className="w-full h-auto object-cover filter dark:brightness-95 shadow-md"
              />
            </div>
            <div className="mt-6 p-6 bg-gray-50 dark:bg-[#1A1A1A] border-t-2 border-[#D4AF37]">
              <p className="font-display italic text-sm md:text-base text-gray-600 dark:text-gray-300">
                &ldquo;Great interior architecture can be defined as the perfect
                marriage between the physical weight of natural materials and
                the dynamic flow of natural lighting.&rdquo;
              </p>
              <h4 className="font-sans text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase mt-4">
                — Omar Rizwan, Studio lead & Founder
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* S2.2 — Mission & Vision */}
      <section className="py-24 bg-gray-50 dark:bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="Our Guidance"
            heading="Why We Build With Intention"
            subtitle="Explore our design coordinates and core principles that shape every single blueprint we execute."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <div className="p-8 md:p-10 bg-[#111111] text-white border border-white/5 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute right-4 top-4 text-white/5 font-display text-8xl font-bold font-semibold uppercase pointer-events-none select-none">
                Aim
              </div>
              <div>
                <div className="w-12 h-12 bg-[#D4AF37]/10 border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] mb-6">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-4">
                  Our Core Mission
                </h3>
                <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed">
                  To turn every interior coordinate into a bespoke portrait of
                  its inhabitant. We do this by implementing rigorous space
                  planning, sourcing premium natural materials, and insisting on
                  moisture-resistant, lifetime carpentry detailing.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-8 md:p-10 bg-white text-[#1A1A1A] dark:bg-[#2E2E2E] dark:text-white border border-gray-100 dark:border-white/5 relative overflow-hidden flex flex-col justify-between shadow-md">
              <div className="absolute right-4 top-4 text-current/5 font-display text-8xl font-bold font-semibold uppercase pointer-events-none select-none">
                Soul
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#D4AF37]" />
              <div>
                <div className="w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-4">
                  Our Sovereign Vision
                </h3>
                <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
                  To remain recognized as Pakistan's ultimate design authority
                  in contemporary luxury. We aim to export classical and modern
                  Pakistani craftsmanship internationally so it stands
                  commanding on global stages.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values values list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-[#111111] border border-gray-100 dark:border-white/5 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">{v.icon}</div>
                  <h4 className="font-display text-base font-semibold mb-2">
                    {v.title}
                  </h4>
                  <p className="font-sans text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S2.6 — Awards & Memberships */}
      <section className="py-24 bg-white text-[#1A1A1A] dark:bg-[#111111] dark:text-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="Credentials"
            heading="Recognition & Trust"
            subtitle="Our professional certifications and historical awards validate our rigorous quality commitment."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Awards list */}
            <div>
              <h3 className="font-display text-xl font-bold mb-6 text-[#D4AF37] border-b border-[#D4AF37]/20 pb-3 uppercase tracking-wider">
                Historical Design Awards
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <Award className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div className="text-left">
                    <h4 className="font-sans text-sm font-bold text-current">
                      Best Luxury Residential Project
                    </h4>
                    <p className="font-sans text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Pakistan Design Awards Council — 2023 Ceremony
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div className="text-left">
                    <h4 className="font-sans text-sm font-bold text-current">
                      Excellence in Commercial Interiors
                    </h4>
                    <p className="font-sans text-xs text-gray-500 dark:text-gray-400 mt-1">
                      South Asia Design Architecture Alliance — 2022
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div className="text-left">
                    <h4 className="font-sans text-sm font-bold text-current">
                      Top 10 Emerging Design Studios
                    </h4>
                    <p className="font-sans text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Architectural Digest Pakistan Issue — 2023 Selection
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Memberships */}
            <div>
              <h3 className="font-display text-xl font-bold mb-6 text-current border-b border-current/10 pb-3 uppercase tracking-wider">
                Certifications & Registrations
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div className="text-left">
                    <h4 className="font-sans text-sm font-bold text-current">
                      Certified Interior Decorators (CID)
                    </h4>
                    <p className="font-sans text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Registered and audited professional interior designer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div className="text-left">
                    <h4 className="font-sans text-sm font-bold text-current">
                      IIDA Professional Active Members
                    </h4>
                    <p className="font-sans text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Board certified memberships under the International
                      Interior Design Association.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div className="text-left">
                    <h4 className="font-sans text-sm font-bold text-current">
                      Licensed Architects Syndicate
                    </h4>
                    <p className="font-sans text-xs text-gray-500 dark:text-gray-400 mt-1">
                      All lead designers registered members of regional
                      engineering chambers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
