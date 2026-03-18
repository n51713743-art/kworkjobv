import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Результаты", href: "#results" },
  { label: "Команда", href: "#team" },
  { label: "Контакты", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-2xl border-b border-border-subtle shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-[72px]">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-text-primary transition-transform duration-300 group-hover:scale-105">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1L16.5 5.5V12.5L9 17L1.5 12.5V5.5L9 1Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M9 1V17M1.5 5.5L16.5 12.5M16.5 5.5L1.5 12.5" stroke="white" strokeWidth="1" strokeLinejoin="round" opacity="0.5"/>
                </svg>
              </div>
              <span className="text-[17px] font-semibold tracking-[-0.02em]">
                Apex Capital
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-[14px] font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary rounded-lg hover:bg-black/[0.03]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-xl bg-text-primary px-5 text-[14px] font-medium text-white transition-all duration-200 hover:bg-neutral-800 hover:shadow-lg hover:shadow-black/10 active:scale-[0.98]"
              >
                Начать работу
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl lg:hidden hover:bg-black/[0.04] transition-colors"
              aria-label="Меню"
            >
              <div className="flex flex-col gap-[5px]">
                <span
                  className={`block h-[1.5px] w-5 bg-text-primary transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "rotate-45 translate-y-[3.25px]" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-text-primary transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-[3.25px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl pt-20 lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center gap-2 px-6 pt-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="w-full text-center py-3.5 text-[18px] font-medium text-text-primary hover:text-brand-600 transition-colors rounded-xl hover:bg-brand-50"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-xl bg-text-primary px-6 text-[15px] font-medium text-white"
              >
                Начать работу
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
