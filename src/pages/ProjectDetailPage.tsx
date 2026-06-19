import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  Calendar,
  Grid,
  MapPin,
  Clock,
  Briefcase,
  Layers,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
} from "lucide-react";
import * as LucideIcons from "lucide-react";

import { projectsData } from "../data/projects";
import BeforeAfterSlider from "../components/ui/BeforeAfterSlider/BeforeAfterSlider";
import Lightbox from "../components/ui/Lightbox/Lightbox";
import CTABanner from "../components/ui/CTABanner/CTABanner";
import Button from "../components/ui/Button/Button";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find Project
  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, [slug]);

  // Lightbox States
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-display text-4xl font-bold text-[#D4AF37] mb-4">Project Not Found</h1>
        <p className="font-sans text-sm text-gray-400 mb-8">The luxury space you are seeking is either under construction or doesn't exist.</p>
        <Button to="/portfolio" variant="primary">Return To Portfolio</Button>
      </div>
    );
  }

  // Related projects (same category, excluding current)
  const relatedProjects = projectsData
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  const allImages = [project.heroImage, ...project.galleryImages];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* S5.1 — Full-Width Hero */}
      <section className="relative h-[65vh] min-h-[450px] bg-[#111111] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover object-center scale-102 opacity-50 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/15 to-transparent" />
        </div>

        {/* Absolute breadcrumb */}
        <div className="absolute top-24 left-6 md:left-12 z-20">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 font-sans text-[10px] font-bold tracking-widest uppercase text-white/70 hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back To Portfolio
          </Link>
        </div>

        {/* Hero bottom details */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 text-left">
          <span className="font-sans text-[10px] font-bold tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/35 px-3 py-1 uppercase inline-block mb-4">
            {project.category}
          </span>
          <h1 className="font-display text-[32px] sm:text-[48px] lg:text-[60px] text-white leading-tight font-medium max-w-4xl tracking-tight">
            {project.name}
          </h1>
        </div>
      </section>

      {/* S5.2 — Project Info Bar (stats band) */}
      <section className="bg-[#1A1A1A] text-white py-6 border-y border-[#D4AF37]/15 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-y-6 gap-x-4 text-left">
            <div>
              <span className="font-sans text-[9px] text-[#D4AF37] tracking-widest uppercase font-bold block mb-1">
                Client
              </span>
              <p className="font-display text-sm font-semibold truncate text-[#F3F4F6]">{project.client}</p>
            </div>
            <div>
              <span className="font-sans text-[9px] text-[#D4AF37] tracking-widest uppercase font-bold block mb-1">
                Location
              </span>
              <p className="font-display text-sm font-semibold truncate text-[#F3F4F6]">{project.location}</p>
            </div>
            <div>
              <span className="font-sans text-[9px] text-[#D4AF37] tracking-widest uppercase font-bold block mb-1">
                Area
              </span>
              <p className="font-display text-sm font-semibold text-[#F3F4F6]">{project.area}</p>
            </div>
            <div>
              <span className="font-sans text-[9px] text-[#D4AF37] tracking-widest uppercase font-bold block mb-1">
                Duration
              </span>
              <p className="font-display text-sm font-semibold text-[#F3F4F6]">{project.duration}</p>
            </div>
            <div>
              <span className="font-sans text-[9px] text-[#D4AF37] tracking-widest uppercase font-bold block mb-1">
                Aesthetic Style
              </span>
              <p className="font-display text-sm font-semibold truncate text-[#F3F4F6]">{project.style}</p>
            </div>
            <div>
              <span className="font-sans text-[9px] text-[#D4AF37] tracking-widest uppercase font-bold block mb-1">
                Project Year
              </span>
              <p className="font-display text-sm font-semibold text-[#F3F4F6]">{project.year}</p>
            </div>
          </div>
        </div>
      </section>

      {/* S5.3 — Project Overview & detailed description */}
      <section className="py-20 bg-white text-[#1A1A1A] dark:bg-[#111111] dark:text-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Block description */}
          <div className="lg:col-span-7 text-left">
            <span className="eyebrow block mb-3">Project Narrative</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Sourcing Timelessness For Modern Lifestyles
            </h2>
            {project.overview.map((para, idx) => (
              <p
                key={idx}
                className="font-sans text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-4 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Right Block detailed specifications card */}
          <div className="lg:col-span-5 p-8 bg-gray-50 dark:bg-[#1A1A1A] border-l-2 border-[#D4AF37] text-left shadow-sm">
            <h3 className="font-display text-base font-bold text-current mb-4 uppercase tracking-wider">
              Project Parameters
            </h3>
            <span className="block h-[1px] bg-gray-200 dark:bg-white/5 w-full mb-4" />
            <dl className="flex flex-col gap-3 font-sans text-xs">
              <div className="flex justify-between items-center py-1">
                <dt className="font-bold text-gray-400 uppercase tracking-widest">Base Rate Value:</dt>
                <dd className="font-bold text-current">Premium Turnkey</dd>
              </div>
              <div className="flex justify-between items-center py-1 border-t border-gray-100 dark:border-white/5">
                <dt className="font-bold text-gray-400 uppercase tracking-widest">Architect In Charge:</dt>
                <dd className="font-semibold text-current">Omar Rizwan</dd>
              </div>
              <div className="flex justify-between items-center py-1 border-t border-gray-100 dark:border-white/5">
                <dt className="font-bold text-gray-400 uppercase tracking-widest">Sourcing Origin:</dt>
                <dd className="font-semibold text-current">Italy, Turkey, Local Teak</dd>
              </div>
              <div className="flex justify-between items-center py-1 border-t border-gray-100 dark:border-white/5">
                <dt className="font-bold text-gray-400 uppercase tracking-widest">HVAC Coordination:</dt>
                <dd className="font-semibold text-current">Vented Ceiling Flutes</dd>
              </div>
              <div className="flex justify-between items-center py-1 border-t border-gray-100 dark:border-white/5">
                <dt className="font-bold text-gray-400 uppercase tracking-widest">Compliance standards:</dt>
                <dd className="font-semibold text-current">Civil Safety Certified✓</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* S5.4 — The Challenge */}
      <section className="py-20 bg-gray-50 dark:bg-[#1A1A1A] border-t border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 text-left">
            <span className="eyebrow block mb-3">The Brief</span>
            <h2 className="font-display text-xl md:text-2xl font-bold mb-4">
              Structural Hurdles & Client Expectations
            </h2>
            <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {project.challenge.description}
            </p>
          </div>

          <div className="lg:col-span-7 text-left bg-white dark:bg-[#111111] p-8 border border-gray-100 dark:border-white/5">
            <h3 className="font-sans text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase mb-4">
              Direct Briefing specifications:
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-xs">
              {project.challenge.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-gray-600 dark:text-gray-300">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* S5.5 — Our Solution */}
      <section className="py-20 bg-white text-[#1A1A1A] dark:bg-[#111111] dark:text-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl text-left mb-12">
            <span className="eyebrow block mb-3">Our Response</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              The Architectural Design Solution
            </h2>
            <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {project.solution.description}
            </p>
          </div>

          {/* Solution pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-8">
            {project.solution.keyDecisions.map((dec, i) => {
              // Map dynamic icons
              const IconComp = (LucideIcons as any)[dec.icon] || LucideIcons.Compass;

              return (
                <div key={i} className="p-6 bg-gray-50 dark:bg-[#1A1A1A] border-t border-[#D4AF37]">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4">
                    <IconComp className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-display text-base font-bold mb-2">{dec.title}</h3>
                  <p className="font-sans text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {dec.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* S5.6 — Project Gallery slider showcase */}
      <section className="py-20 bg-gray-50 dark:bg-[#1A1A1A] border-y border-gray-100 dark:border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="eyebrow block mb-3">Visual Evidence</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold">The Luxury Gallery Carousel</h2>
            <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2">
              Browse individual detailed angles. Click on any frame to activate the fullscreen zoom modal.
            </p>
          </div>

          {/* Interactive photo selector block */}
          <div className="max-w-5xl mx-auto relative overflow-hidden bg-white dark:bg-[#111111] p-4 shadow-md border border-gray-100 dark:border-white/5">
            <div className="relative aspect-video max-h-[500px] overflow-hidden bg-gray-100 dark:bg-black group">
              <img
                src={allImages[activeIndex]}
                alt={`Angle representation ${activeIndex + 1}`}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-[#D4AF37] backdrop-blur-sm flex items-center justify-center cursor-pointer transition-colors z-20"
                title="Expand image fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Slider bullets */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center cursor-pointer z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center cursor-pointer z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail selector strip strip */}
            <div className="flex gap-2.5 mt-4 overflow-x-auto py-1 scrollbar-none justify-center">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-16 h-12 md:w-20 md:h-14 overflow-hidden shrink-0 border-2 cursor-pointer transition-all ${
                    activeIndex === i ? "border-[#D4AF37] opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S5.7 — Before After Compare */}
      {project.beforeImage && project.afterImage && (
        <section className="py-20 bg-white text-[#1A1A1A] dark:bg-[#111111] dark:text-[#F3F4F6]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="eyebrow block mb-3">Direct Translation</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold">The Transformation Verdict</h2>
            </div>
            
            <BeforeAfterSlider
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
            />
          </div>
        </section>
      )}

      {/* S5.8 — Materials & Finishes */}
      <section className="py-20 bg-gray-50 dark:bg-[#1A1A1A] border-t border-gray-100 dark:border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="eyebrow block mb-3">Tactile Spec</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold">Premium Materials Used</h2>
            <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2">
              We sourcing genuine marbles, high-density timber veneers, and bespoke water-treated lining materials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {project.materials.map((mat, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-[#111111] border border-gray-100 dark:border-white/5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-sans text-[10px] text-gray-400 uppercase tracking-widest font-semibold block mb-2">
                    {mat.category}
                  </span>
                  <h4 className="font-display text-base font-bold text-current">{mat.name}</h4>
                </div>
                <div className="border-t border-gray-100 dark:border-white/5 pt-3 mt-4 text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                  Origin: {mat.origin}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5.9 — Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white text-[#1A1A1A] dark:bg-[#111111] dark:text-[#F3F4F6] border-t border-gray-100 dark:border-white/5 text-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-2xl mx-auto mb-12">
              <span className="eyebrow block mb-2">Portfolio</span>
              <h3 className="font-display text-xl md:text-2xl font-bold">More From Our Showcase</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
              {relatedProjects.map((rel) => (
                <div key={rel.id} className="group flex flex-col justify-between bg-gray-50 dark:bg-[#1A1A1A] rounded-none overflow-hidden border border-gray-100 dark:border-white/5 hover:border-[#D4AF37]/35 transition-colors">
                  <div>
                    <div className="h-48 overflow-hidden">
                      <img src={rel.heroImage} alt={rel.name} className="w-full h-full object-cover filter brightness-95 group-hover:scale-103 transition-transform" />
                    </div>
                    <div className="p-6">
                      <h4 className="font-display text-base font-bold line-clamp-1">{rel.name}</h4>
                      <p className="font-sans text-[10px] text-gray-400 mt-1 block uppercase font-medium">{rel.location}</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Link to={`/portfolio/${rel.slug}`} className="font-sans text-[10px] font-bold tracking-widest uppercase text-[#D4AF37] hover:text-[#B8960C] transition-colors inline-block mt-2">
                      Expose Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* S5.6 Lightbox Modal Component */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={allImages}
        activeIndex={activeIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* S5.10 — CTA */}
      <CTABanner />
    </motion.div>
  );
}
