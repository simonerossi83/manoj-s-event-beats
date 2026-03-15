import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Chi Sono", href: "#about" },
  { label: "Eventi", href: "#events" },
  { label: "Musica", href: "#music" },
  { label: "Gallery", href: "#gallery" },
  { label: "Recensioni", href: "#reviews" },
  { label: "Contatti", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `rgba(5,5,5,${bgOpacity})` }}
    >
      <motion.div
        className="glass-surface"
        style={{ opacity: bgOpacity }}
        aria-hidden
      />
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative z-10">
        <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
          DJ MANOJ
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label-uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-surface px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="label-uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
