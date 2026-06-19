import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Calendar,
  BookOpen,
  User,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Sparkles,
} from "lucide-react";

import { blogPostsData } from "../data/blogPosts";
import Button from "../components/ui/Button/Button";

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogPostsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-display text-4xl font-bold text-[#D4AF37] mb-4">
          Article Not Found
        </h1>
        <p className="font-sans text-sm text-gray-400 mb-8">
          The insight document you are looking for has been archived or deleted.
        </p>
        <Button to="/blog" variant="primary">
          Return to Blog Journal
        </Button>
      </div>
    );
  }

  // Related posts (excluding current, same category)
  const relatedPosts = blogPostsData
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Connection link copied successfully! ✓ Share it with your friends.");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white text-[#1A1A1A] dark:bg-[#111111] dark:text-[#F3F4F6] pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        {/* S8.1 — Back navigation button */}
        <div className="text-left mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 font-sans text-[10px] font-bold tracking-widest uppercase text-gray-400 hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back To Blog Journal
          </Link>
        </div>

        {/* Title Block */}
        <div className="max-w-4xl text-left mb-10">
          <span className="font-sans text-[10px] text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/25 px-3 py-1 uppercase tracking-widest font-bold inline-block mb-3">
            {post.category}
          </span>
          <h1 className="font-display text-[26px] sm:text-[38px] lg:text-[46px] font-medium tracking-tight text-current leading-tight">
            {post.title}
          </h1>
        </div>

        {/* S8.3 — Full Width High Resolution Banner */}
        <div className="h-[280px] sm:h-[450px] lg:h-[500px] w-full overflow-hidden mb-12 shadow-md">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </div>

        {/* S8.2 — 2 Columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Block editorial content */}
          <div className="lg:col-span-8 text-left font-sans text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300 flex flex-col gap-6">
            {/* Split paragraphs manually */}
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith(">")) {
                // Render as blockquote
                return (
                  <blockquote
                    key={i}
                    className="p-6 md:p-8 bg-gray-50 dark:bg-[#1A1A1A] border-l-4 border-[#D4AF37] font-display italic text-gray-700 dark:text-gray-200 text-base md:text-lg my-4 leading-normal select-none"
                  >
                    {para.replace(">", "").trim()}
                  </blockquote>
                );
              }

              if (para.startsWith("-") || para.startsWith("*")) {
                // Render as bullets list
                return (
                  <ul
                    key={i}
                    className="list-disc list-inside flex flex-col gap-2 pl-4 text-xs md:text-sm font-medium"
                  >
                    {para.split("\n").map((item, idx) => (
                      <li
                        key={idx}
                        className="text-gray-500 dark:text-gray-300"
                      >
                        {item.slice(1).trim()}
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={i} className="leading-relaxed">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Right Block Sidebar widgets */}
          <aside className="lg:col-span-4 flex flex-col gap-8 text-left sticky top-28 self-start">
            {/* Author Profile widget */}
            <div className="p-6 bg-gray-50 dark:bg-[#1A1A1A] border border-gray-100 dark:border-white/5 shadow-xs">
              <h4 className="font-sans text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                The Architect
              </h4>
              <div className="flex items-center gap-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]/30 shrink-0"
                />
                <div>
                  <h5 className="font-sans text-xs font-bold text-current">
                    {post.author.name}
                  </h5>
                  <p className="font-sans text-[10px] text-gray-400 mt-0.5">
                    {post.author.role}
                  </p>
                </div>
              </div>
              <p className="font-sans text-xs text-gray-400 mt-4 leading-relaxed">
                Registered CID partner drafting bespoke turn-key residential
                villas in Karachi for over 10 years.
              </p>
            </div>

            {/* Publication Details Metadata */}
            <div className="p-6 bg-gray-50 dark:bg-[#1A1A1A] border border-gray-100 dark:border-white/5 text-xs font-sans flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-400 uppercase tracking-widest">
                  Released:
                </span>
                <span className="font-semibold text-current flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />{" "}
                  {post.date}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-t border-gray-100 dark:border-white/5">
                <span className="font-bold text-gray-400 uppercase tracking-widest">
                  Read Estimate:
                </span>
                <span className="font-semibold text-current flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />{" "}
                  {post.readTime}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-t border-gray-100 dark:border-white/5">
                <span className="font-bold text-gray-400 uppercase tracking-widest">
                  Aesthetic Tag:
                </span>
                <span className="font-bold text-[#D4AF37] uppercase">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Article sharing socials */}
            <div className="p-6 bg-gray-50 dark:bg-[#1A1A1A] border border-gray-100 dark:border-white/5">
              <h4 className="font-sans text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">
                Propagate Insight
              </h4>
              <div className="flex gap-2">
                <button
                  onClick={handleCopyLink}
                  className="w-10 h-10 bg-white dark:bg-[#111111] border border-current/10 flex items-center justify-center text-current hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer"
                  title="Copy url connection link"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white dark:bg-[#111111] border border-current/10 flex items-center justify-center text-current hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white dark:bg-[#111111] border border-current/10 flex items-center justify-center text-current hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white dark:bg-[#111111] border border-current/10 flex items-center justify-center text-current hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* S8.4 — S8.5 Related list inside sidebar */}
            {relatedPosts.length > 0 && (
              <div className="p-6 bg-gray-50 dark:bg-[#1A1A1A] border border-gray-100 dark:border-white/5">
                <h4 className="font-sans text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                  Match Insights
                </h4>
                <div className="flex flex-col gap-4">
                  {relatedPosts.map((rel) => (
                    <div key={rel.id} className="group">
                      <Link to={`/blog/${rel.slug}`} className="block">
                        <h5 className="font-display text-xs font-bold text-current group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                          {rel.title}
                        </h5>
                        <span className="font-mono text-[9px] text-gray-400 uppercase mt-1 block">
                          {rel.date}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </motion.div>
  );
}
