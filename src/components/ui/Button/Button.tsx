import { ReactNode } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  to,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyle =
    "relative inline-flex items-center justify-center font-sans font-semibold text-xs tracking-widest uppercase py-4 px-8 rounded-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary:
      "bg-[#D4AF37] text-black border border-[#D4AF37] hover:bg-[#E8C84A] hover:border-[#E8C84A] shadow-md hover:shadow-[#D4AF37]/20 hover:shadow-lg",
    secondary:
      "bg-transparent text-white border border-white hover:bg-white hover:text-black",
    outline:
      "bg-transparent text-[#D4AF37] border border-[#D4AF37]/45 hover:bg-[#D4AF37] hover:text-black hover:border-transparent",
    ghost:
      "bg-transparent text-current border border-transparent hover:bg-white/5",
  };

  const fullClasses = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className="inline-block">
        <motion.span
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          className={fullClasses}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={fullClasses}
    >
      {children}
    </motion.button>
  );
}
