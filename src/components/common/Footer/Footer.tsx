import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/src/data/siteConfig";
import { motion } from "motion/react";

interface NewsletterInput {
  email: string;
}

export default function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterInput>();

  const [subscribed, setSubscribed] = useState(false);

  // Since we don't have react state imports directly if omitted, let's declare useState correctly from 'react'. Oh wait, make sure it is imported! I will add state import.

  const onSubmit = () => {
    setSubscribed(true);
    reset();
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-8 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Visual Ambient Gold Glow */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[250px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          {/* Column 1: Brand details */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center">
              <span className="font-display text-2xl font-bold tracking-[0.2em] text-[#D4AF37]">
                AR <span className="text-white">INTERIOR</span>
              </span>
            </Link>

            <p className="font-sans text-xs md:text-sm text-gray-400 mt-2 leading-relaxed">
              Crafting bespoke luxury residential and commercial environments
              where architectural precision meets fine artistry. Based in
              Karachi, Pakistan, serving national and international clients.
            </p>

            {/* Social handles */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 cursor-pointer"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 cursor-pointer"
                aria-label="Facebook profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 cursor-pointer"
                aria-label="YouTube channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="flex flex-col gap-5">
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-[#D4AF37] border-b border-[#D4AF37]/15 pb-2">
              Stay Inspired
            </h3>

            <div className="flex flex-col gap-3 font-sans text-xs md:text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-xs">
                  {siteConfig.contact.phoneReadable}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-xs">{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-xs">{siteConfig.contact.hours}</span>
              </div>
            </div>

            {/* Newsletter widget */}
            <div className="border-t border-white/5 pt-4 mt-1">
              <p className="font-sans text-[11px] uppercase tracking-widest font-semibold mb-3 text-white/70 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Join
                Showcase Letter
              </p>

              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium text-center"
                >
                  ✓ Subscribed successfully!
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="relative flex rounded-none overflow-hidden"
                >
                  <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    required
                    {...register("email", { required: true })}
                    className="w-full bg-[#2A2A2A] text-white border border-[#3A3A3A] px-3.5 py-2.5 text-[11px] font-sans focus:outline-none focus:border-[#D4AF37]"
                  />
                  <button
                    type="submit"
                    className="bg-[#D4AF37] hover:bg-[#E8C84A] text-black px-4 flex items-center justify-center cursor-pointer transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 font-sans text-xs tracking-wider gap-4">
          <p>
            © {new Date().getFullYear()} AR Interior. All Rights Reserved.
            Crafted with pristine detail.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-800">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span className="text-gray-800">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
